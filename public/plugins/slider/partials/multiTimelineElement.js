var resizables;
var body = document.body;
var requestId = null;
var startPanelWidth = [];
var currentHandle, thisTime, nextTime, selectThisItem, selectPreviousItem, selectNextItem, width, incomingData;
var index = 0;
var draggableHandles = [];
var delayHandles = [];
var resizingPanels = [];
var startPanelLocations = [];
var cursor = "col-resize";
var prev = null;
var container = $(".timelineTimingPanel[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "']");
var handle;
var resizeBarValue, resizeBarLocation;

function createMultiTimelineElement(incomingData) {
    incomingData = incomingData;
    resizeBarValue = 0;
    resizeBarLocation = 0;
    $(".timelineLabels[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "']").append("\
    <div data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' class='col-md-12 m-0 timelineLayerItem'  data-animationId='" + layerAnimationId + "'>\
      <span class='animationLabelName'  data-animationId='" + layerAnimationId + "' data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' >" + thisAnimationName + "</span>\
      <i data-animationId='" + layerAnimationId + "' data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' class=' pull-right fa fa-trash deleteAnimation'>&nbsp;</i>\
      <i data-animationId='" + layerAnimationId + "' data-slide='" + currentSlide + "' data-layer='" + currentLayer + "' class=' pull-right fa fa-pencil-square-o editAnimation'>&nbsp;</i>\
    </div>");

    $(".timelineTimingPanel[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "']").append('\
        <div data-slide="' + currentSlide + '" data-layer="' + currentLayer + '"  \
            data-animationId="' + layerAnimationId + '" class="timelineElementRow">\
        <div id ="draggbleElement-' + timelineItems + '" data-slide="' + currentSlide + '" data-layer="' + currentLayer + '"  \
            data-animationId="' + layerAnimationId + '" class="MultiTimelineElementRow draggableX" style="width:\'' + (thisAnimationDuration * 1000 * ZoomValue) + 'px\'">\
            <div class="MultiTimelineRow layout-handles" data-animationId="' + layerAnimationId + '"  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '"></div>\
            <div class="MultiTimelineRow layout-panels resizable resizable-container" data-animationId="' + layerAnimationId + '"  data-slide="' + currentSlide + '" data-layer="' + currentLayer + '"></div>\
        </div>\
    </div>');
    for (var i = 0; i < incomingData.length; i++) {
        handle = createResizable(i, incomingData);
        if (prev) {
            handle.prev = prev;
            prev.next = handle;
        }
        prev = handle;
    }


    $(".MultiTimelineElement").mousedown(function(e) { complexClick(e, "ctrl", "datGuiEditor(e.originalEvent)") });

}

function createResizable(index, value) {
    resizeBarValue = resizeBarValue + Number(value[index].duration);
    console.log(value[index].duration);
    panelLocation = resizeBarLocation;
    resizeBarLocation = resizeBarValue * 1000 * ZoomValue - 10;
    thisItem = 'data-slide="' + currentSlide + '" data-layer="' + currentLayer + '" data-animationId="' + layerAnimationId + '" data-segment="' + index + '"';
    selectThisItem = "[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-animationId='" + layerAnimationId + "'][data-segment='" + index + "']";

    if (value[index].duration == 0) {
        $(".layout-handles[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-animationId='" + layerAnimationId + "']")
            .append('<div ' + thisItem + ' class="MultiTimelineElementInitial" title="Initial State"></div>');
    } else {
        $(".layout-handles[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-animationId='" + layerAnimationId + "']")
            .append('<div ' + thisItem + ' class="resize-bar resize-bar-column" data-panel="panel-' + index + '"  ></div>');
        targetBar = $(".resize-bar" + selectThisItem);

        $(".resize-bar" + selectThisItem).css("left", resizeBarLocation);
        draggableHandles[index] = new Draggable(targetBar, {
            cursor: cursor,
            type: "left",
            onPress: setBounds,
            onDragStart: getInfo,
            onDrag: resizePanels,
            onDragEnd: doneResizing
        });
    }
    $(".layout-panels[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-animationId='" + layerAnimationId + "']").append('<div ' + thisItem + ' class="MultiTimelineElement  multiTimelineElementPanel-' + index + '" \
            style="width:' + value[index].duration * 1000 * ZoomValue + 'px;left:' + panelLocation + 'px"></div>');
    $("#draggbleElement-" + timelineItems).css({ "position": "relative" });
    $(".timelineElementRow").css("width", spacing + 100);

    if (value[index]["delay"]) {
        $(".MultiTimelineElement" + selectThisItem).append('<i ' + thisItem + ' title="delay" \
                class="fa fa-2x fa-long-arrow-right delayArrow" data-delay="' + value[index]["delay"] + '" style="text-shadow: 2px 2px #000;">&nbsp;</i>');
        delay = value[index]["delay"].split("=");
        $(".MultiTimelineElement" + selectThisItem).addClass("delayedPanel")
        $(".MultiTimelineElement" + selectThisItem).css("left", delay[0] + "=" + (delay[1] * 1000 * ZoomValue))
        $(".resize-bar" + selectThisItem).css("left", delay[0] + "=" + (delay[1] * 1000 * ZoomValue))
        targetDelay = $(".delayArrow" + selectThisItem);
        delayHandles[index] = new Draggable(targetDelay, {
            cursor: cursor,
            type: "left",
            onDragStart: getInfo,
            onDrag: changeDelay,
            onDragEnd: setDelay
        });
    }

    width = targetBar.outerWidth();



    $("#draggbleElement-" + timelineItems).css({
        "position": "relative",
        "left": insertTime
    });


    return handle;
}

function setBounds(index) {
    var maxX = container.width();
    var prev = null;
    var next = null;
    if (typeof $(index.target).next()[0] !== "undefined") {
        next = parseInt($(index.target).next().css("left"), 10);
    }
    if (typeof $(index.target).prev()[0] !== "undefined") {
        prev = parseInt($(index.target).prev().css("left"), 10);
    }
    console.log(next);
    this.applyBounds({
        minX: prev ? prev + width : 0,
        maxX: next ? next - width : maxX - width
    });
}

function getInfo(e) {
    mainTL.time(0).pause();
    thisSlide = $(e.target).attr('data-slide');
    thisLayer = $(e.target).attr('data-layer');
    thisAnimationId = $(e.target).attr('data-animationId');
    currentSegment = Number($(e.target).attr("data-segment"));
    selectThisItem = "[data-slide='" + thisSlide + "'][data-layer='" + thisLayer + "'][data-animationId='" + thisAnimationId + "'][data-segment='" + currentSegment + "']";
    selectPreviousItem = "[data-slide='" + thisSlide + "'][data-layer='" + thisLayer + "'][data-animationId='" + thisAnimationId + "'][data-segment='" + (currentSegment - 1) + "']";
    selectNextItem = "[data-slide='" + thisSlide + "'][data-layer='" + thisLayer + "'][data-animationId='" + thisAnimationId + "'][data-segment='" + (currentSegment + 1) + "']";
    resizingPanels = [$(".MultiTimelineElement" + selectThisItem), $(".MultiTimelineElement" + selectNextItem)];
    resizingHandles = [$(".resize-bar" + selectThisItem).css("left"), $(".resize-bar" + selectPreviousItem).css("left"), $(".resize-bar" + selectNextItem).css("left")];
    startPanelWidth = [resizingPanels[0].css("width"), resizingPanels[1].css("width")];
    startPanelLocations = [resizingPanels[0].css("left"), resizingPanels[1].css("left")];

}

function resizePanels(e) {
    resizeBars = [$(".resize-bar[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-segment='" + currentSegment + "']"), $(".resize-bar[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-segment='" + (currentHandle - 1) + "']"), $(".resize-bar[data-layer='" + currentLayer + "'][data-slide='" + currentSlide + "'][data-segment='" + (currentHandle + 1) + "']")];
    displacement = this.x - this.startX;
    resizingPanels[0].css("width", (parseInt(startPanelWidth[0], 10) + displacement));
    resizingPanels[1].css("width", (parseInt(startPanelWidth[1], 10) - displacement));
    resizingPanels[1].css("left", (parseInt(startPanelLocations[1], 10) + displacement));
}

function doneResizing(e) {
    thisTime = parseInt(resizingPanels[0].css("width"), 10) / 1000 / ZoomValue;
    nextTime = parseInt(resizingPanels[1].css("width"), 10) / 1000 / ZoomValue;
    Slides[thisSlide]["layers"][thisLayer]["animationgroup"][thisAnimationId]["sequence"][currentSegment]["duration"] = thisTime;
    if (!isNaN(nextTime)) {
        Slides[thisSlide]["layers"][thisLayer]["animationgroup"][thisAnimationId]["sequence"][currentSegment + 1]["duration"] = nextTime;
    }
    rebuildTimeline();
}

function changeDelay(e) {
    delayHandle = $(".delayArrow" + selectThisItem);
    thisPanel = $(".MultiTimelineElement" + selectThisItem);
    thisHandle = $(".resize-bar" + selectThisItem);
    displacement = this.x - this.startX;
    thisPanel.css("left", (parseInt(startPanelLocations[0], 10) + displacement));
    thisHandle.css("left", (parseInt(resizingHandles[0], 10) + displacement));
}

function setDelay(e) {
    newDelay = (parseInt(thisPanel.css("left"), 10) - parseInt(resizingHandles[1], 10)) / 1000 / ZoomValue;
    if (newDelay > 0) {
        $(e.target).attr('data-delay', "+=" + Math.abs(newDelay));
        Slides[thisSlide]["layers"][thisLayer]["animationgroup"][thisAnimationId]["sequence"][currentSegment]["delay"] = "+=" + Math.abs(newDelay);
    } else {
        $(e.target).attr('data-delay', "-=" + Math.abs(newDelay));
        Slides[thisSlide]["layers"][thisLayer]["animationgroup"][thisAnimationId]["sequence"][currentSegment]["delay"] = "-=" + Math.abs(newDelay);
    }

    rebuildTimeline();
}



function datGuiEditor(e) {
    var thisSlide = $(e.target).attr('data-slide');
    var thisLayer = $(e.target).attr('data-layer');
    targetDiv = e.target;
    actionItem = $(e.target).attr("data-animationId");
    clickItem = e.target;
    var currentMousePos = { "x": "", "y": "" };
    currentMousePos.x = e.pageX;
    currentMousePos.y = e.pageY;
    $('.datGUI').css({ "position": "absolute", "z-index": "999999", "top": currentMousePos.y - 100, "left": currentMousePos.x - 250, "visibility": "visible" });

    $(".datGUI").show();
    gui = new dat.GUI({ autoPlace: false });
    $('.datGUI').html(gui.domElement);
    var datGuiFolder = []
    var datGuiTitle = { "Animation Group": Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["name"] };
    var startTime = { "startTime": Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["startTime"] };
    var timeScale = { "timeScale": Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["timeScale"] };
    gui.add(datGuiTitle, 'Animation Group');
    gui.add(startTime, 'startTime').listen();
    gui.add(timeScale, 'timeScale').listen();
    var datGUIsetting, datGUIsetting2, datGUIsetting3;
    for (i = 0; i < Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["sequence"].length; i++) {
        datGuiFolder[i] = gui.addFolder("Animation Segment - " + i);
        for (datGUIsetting in Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["sequence"][i]) {
            if (datGUIsetting === "vars") {
                for (datGUIsetting2 in Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["sequence"][i][datGUIsetting]) {
                    if (datGUIsetting2 === "css") {
                        for (datGUIsetting3 in Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["sequence"][i][datGUIsetting]["css"]) {
                            datGuiFolder[i].add(Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["sequence"][i][datGUIsetting][datGUIsetting2], datGUIsetting3).listen();
                        }
                    } else if (datGUIsetting2 === "ease") {} else {
                        datGuiFolder[i].add(Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["sequence"][i][datGUIsetting], datGUIsetting2).listen();
                    }
                }
            } else {
                datGuiFolder[i].add(Slides[thisSlide]["layers"][thisLayer]["animationgroup"][actionItem]["sequence"][i], datGUIsetting).listen();
            }
        }
    }
    // add a button
    var obj = {
        Replay: function() {
            rebuildTimeline();
            mainTL.restart();
        }
    };
    gui.add(obj, 'Replay');

    $('.close-button').click(function() { $('.datGUI').html("") });
    var ele = document.getElementsByTagName("*");
    for (var id = 0; id < ele.length; ++id) { ele[id].oncontextmenu = null; };
    document.oncontextmenu = null;
    window.oncontextmenu = null;
    $(".datGUI").show();

    clickOutsideOf($(".datGUI"));

}
