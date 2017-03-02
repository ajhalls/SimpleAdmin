function RebuildEditor() {
    var __extends = (this && this.__extends) || function(d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var log = console.log.bind(console);
    var CustomEase = (function(_super) {
        __extends(CustomEase, _super);

        function CustomEase(points) {
            if (points === void 0) { points = {}; }
            var _this = _super.call(this) || this;
            _this.points = points;
            if (points.last && points.last.y !== 1) {
                _this._calcEnd = true;
            }
            return _this;
        }
        CustomEase.prototype.getRatio = function(k) {
            var points = this.points;
            var p1 = points.first;
            var p0 = null;
            while (p1) {
                if (p1.x >= k) {
                    p0 = p1.prev;
                    break;
                }
                p1 = p1.next;
            }
            if (!p0)
                return p1.y;
            var t = ((k - p0.x) / (p1.x - p0.x)) || 0;
            return p0.y + (p1.y - p0.y) * t;
        };
        return CustomEase;
    }(Ease));
    var pathData = document.querySelector("#path-data");
    var canvas = document.querySelector("#canvas");
    paper.setup(canvas);
    paper.settings.handleSize = 5;
    var project = paper.project;
    var view = paper.view;
    var hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 10,
        handles: true
    };
    var easePath = null;
    var handle1 = null;
    var handle2 = null;
    var segment = null;
    var hitStart = null;
    var hitEnd = null;
    var plotPath = null;
    var tween1 = null;
    var tween2 = null;
    var duration = 2;
    var offset = new paper.Point(50, 50);
    var graphSize = new paper.Size(500, 350);
    var graph = new paper.Path.Rectangle(offset, graphSize);
    graph.style = {
        fillColor: "#eee",
        strokeColor: "#ccc",
        strokeWidth: 0.5
    };
    var startPoint = offset.add([0, graphSize.height]);
    var endPoint = offset.add([graphSize.width, 0]);
    var path = new paper.Path({
        strokeWidth: 5,
        strokeColor: "black"
    });
    var box = new paper.Shape.Rectangle({
        point: [575, 375],
        size: [25, 25],
        fillColor: "green",
        locked: true
    });
    path.add(startPoint);
    path.add(endPoint);
    path.fullySelected = true;
    paper.view.on("mousedown", downAction);
    paper.view.on("mousedrag", dragAction);
    var smoothTypes = [
        { type: "continuous" },
        { type: "catmull-rom", factor: 0.5 },
        { type: "geometric", factor: 0.4 },
        { type: "none" },
    ];
    var smoothNames = smoothTypes.map(function(smooth) {
        return smooth.type; });
    var smoothValue = smoothTypes[0];

    updatePathData();

    function updatePathData() {
        pathData.textContent = path.pathData;
    }

    function addPoint(point) {
        if (point.equals(startPoint) || point.equals(endPoint))
            return;
        var i = 1;
        if (path.segments.length === 2) {} else {
            var max = point.x;
            var total = path.segments.length;
            for (i = 0; i < total; i++) {
                var seg = path.segments[i];
                if (seg.point.x > max)
                    break;
            }
        }
        path.insert(i, point);
        segment = path.segments[i];
        smoothPath();
        path.fullySelected = true;
    }

    function downAction(event) {
        easePath && easePath.remove();
        plotPath && plotPath.remove();
        startPoint = path.firstSegment.point.clone();
        endPoint = path.lastSegment.point.clone();
        handle1 = handle2 = segment = hitStart = hitEnd = null;
        var hit = paper.project.hitTest(event.point, hitOptions);
        if (hit) {
            if (hit.type === "fill" || hit.type === "stroke") {
                addPoint(event.point);
                updatePathData();
                return;
            }
            if (hit.segment && hit.segment.point.equals(startPoint)) {
                hitStart = true;
            }
            if (hit.segment && hit.segment.point.equals(endPoint)) {
                hitEnd = true;
            }
            if (hit.type == "handle-in") {
                handle1 = hit.segment.handleIn;
                handle2 = hit.segment.handleOut;
            } else if (hit.type == "handle-out") {
                handle1 = hit.segment.handleOut;
                handle2 = hit.segment.handleIn;
            } else if (hit.type == "segment") {
                segment = hit.segment;
            }
        }
    }

    function dragAction(event) {
        if (segment && !hitStart) {
            segment.point = segment.point.add(event.delta);
            if (hitEnd) {
                segment.point.x = offset.x + graphSize.width;
            }
        }
        if (handle1) {
            handle1.x += event.delta.x;
            handle1.y += event.delta.y;
        }
        updatePathData();
    }

    function clearPoints() {
        easePath && easePath.remove();
        plotPath && plotPath.remove();
        var i = path.segments.length - 1;
        while (i-- > 1) {
            var seg = path.segments[i];
            seg.remove();
        }
        updatePathData();
    }

    function smoothPath() {
        easePath && easePath.remove();
        plotPath && plotPath.remove();
        if (path) {
            if (smoothValue.type === "none") {
                path.segments.forEach(function(segment) {
                    segment.handleIn = segment.handleOut = null;
                });
            } else {
                path.smooth(smoothValue);
            }
        }
        updatePathData();
    }

    function easePoints() {
        plotPath && plotPath.remove();
        easePath && easePath.remove();
        easePath = path.clone();
        easePath.flatten(0.05);
        easePath.selected = true;
        easePath.style = {
            strokeWidth: 1,
            strokeJoin: "round",
            strokeColor: "#00ff00",
            selectedColor: "#00ff00"
        };
        var segments = easePath.segments;
        var size = segments.length;
        var first = null;
        var last = null;
        var prev = null;
        for (var i = 0; i < size; i++) {
            var point = segments[i].point.subtract(offset);
            var node = {
                prev: prev,
                next: null,
                x: point.x / graphSize.width,
                y: 1 - (point.y / graphSize.height)
            };
            if (!first)
                first = node;
            if (prev)
                prev.next = node;
            prev = node;
            last = node;
        }
        return { first: first, last: last, size: size };
    }

    function playAnimation() {
        tween1 && tween1.kill();
        tween2 && tween2.kill();
        plotPath && plotPath.remove();
        var points = easePoints();
        easePath.remove();
        var color = "#eee";
        plotPath = new paper.Path();
        plotPath.selected = false;
        plotPath.style = {
            strokeWidth: 3,
            strokeJoin: "round",
            strokeColor: color,
            selectedColor: color
        };
        plotPath.add(new paper.Point(offset.x, offset.y + graphSize.height));
        var obj = {
            y: offset.y + graphSize.height
        };
        var ease = new CustomEase(points);
        var delay = 0.25;
        box.position.y = 387;
        tween1 = TweenMax.to(box.position, duration, { y: 60, delay: delay, ease: ease });
        tween2 = TweenMax.to(obj, duration, {
            y: 50,
            delay: delay,
            ease: ease,
            onUpdate: function() {
                var x = this.progress() * graphSize.width + offset.x;
                var y = obj.y;
                plotPath.add(new paper.Point(x, y));
            }
        });
    }

    function updateDuration() {
        duration = $(".easingEditorDuration").val();
    }

    $(".smoothEasingPath").unbind("click").click(smoothPath);
    $(".previewEasing").unbind("click").click(playAnimation);
    $(".easingEditorDuration").unbind("keyup").keyup(updateDuration);
    $('body').unbind("change").on("change", "#newOptionsEase",function (e) { 
        path.remove();
        easingData = $('#newOptionsEase').val();
        path = new paper.Path('M0,0,C0.068,0,0.128,-0.061,0.175,-0.081,0.224,-0.102,0.267,-0.107,0.315,-0.065,0.384,-0.004,0.449,0.253,0.465,0.323,0.505,0.501,0.521,0.602,0.56,0.779,0.588,0.908,0.651,1.042,0.705,1.082,0.748,1.114,0.799,1.094,0.817,1.085,0.868,1.061,0.938,0.998,1,1');
        path.strokeColor = 'black';
        path.strokeWidth = 5;
        path.fullySelected = true;
        updatePathData();

       
    });
    
}

RebuildEditor();

$("body").on('click', ".easingEditorTab", function() {
    $('.nav-tabs a[href="#easingEditorContainer"]').tab('show');
setTimeout(function() {
RebuildEditor();
}, 300);
});
