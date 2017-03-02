// Create your own custom easing
// http://greensock.com/forums/topic/7952-javascript-custom-ease/?p=51357
// GIST: https://gist.github.com/OSUblake/4d9f0caf980f4ee492ef


console.clear();
var log = console.log.bind(console);
//
// CUBIC BEZIER - This class is the only thing that will you need from this
// file to create your own custom easings. 
// GIST: https://gist.github.com/OSUblake/4d9f0caf980f4ee492ef
// ===========================================================================
var Demo;
(function (Demo) {
    var CubicBezier = (function () {
        function CubicBezier(p1x, p1y, p2x, p2y) {
            if (p1x === void 0) { p1x = 0; }
            if (p1y === void 0) { p1y = 0; }
            if (p2x === void 0) { p2x = 1; }
            if (p2y === void 0) { p2y = 1; }
            this.p1x = p1x;
            this.p1y = p1y;
            this.p2x = p2x;
            this.p2y = p2y;
            this.cx = 3.0 * this.p1x;
            this.cy = 3.0 * this.p1y;
            this.bx = 3.0 * (this.p2x - this.p1x) - this.cx;
            this.by = 3.0 * (this.p2y - this.p1y) - this.cy;
            this.ax = 1.0 - this.cx - this.bx;
            this.ay = 1.0 - this.cy - this.by;
            this.ease = this.ease.bind(this);
        }
        CubicBezier.create = function (name, p1x, p1y, p2x, p2y) {
            if (p1x === void 0) { p1x = 0; }
            if (p1y === void 0) { p1y = 0; }
            if (p2x === void 0) { p2x = 1; }
            if (p2y === void 0) { p2y = 1; }
            var easing = new CubicBezier(p1x, p1y, p2x, p2y);
            if (typeof name === "string")
                CubicBezier.easings[name] = easing;
            return easing.ease;
        };
        CubicBezier.config = function (p1x, p1y, p2x, p2y) {
            if (p1x === void 0) { p1x = 0; }
            if (p1y === void 0) { p1y = 0; }
            if (p2x === void 0) { p2x = 1; }
            if (p2y === void 0) { p2y = 1; }
            return new CubicBezier(p1x, p1y, p2x, p2y).ease;
        };
        CubicBezier.get = function (name) {
            return CubicBezier.easings[name].ease;
        };
        CubicBezier.prototype.getEpsilon = function (duration) {
            if (duration === void 0) { duration = 400; }
            return 1 / (200 * duration);
        };
        CubicBezier.prototype.ease = function (time, start, change, duration) {
            return this.solve(time, this.getEpsilon(duration));
        };
        CubicBezier.prototype.solve = function (x, epsilon) {
            return this.sampleCurveY(this.solveCurveX(x, epsilon));
        };
        CubicBezier.prototype.sampleCurveX = function (t) {
            return ((this.ax * t + this.bx) * t + this.cx) * t;
        };
        CubicBezier.prototype.sampleCurveY = function (t) {
            return ((this.ay * t + this.by) * t + this.cy) * t;
        };
        CubicBezier.prototype.sampleDerivX = function (t) {
            return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
        };
        CubicBezier.prototype.solveCurveX = function (x, epsilon) {
            var t0;
            var t1;
            var t2;
            var x2;
            var d2;
            for (var i = 0, t2 = x; i < 8; i++) {
                x2 = this.sampleCurveX(t2) - x;
                if (Math.abs(x2) < epsilon)
                    return t2;
                d2 = this.sampleDerivX(t2);
                if (Math.abs(d2) < epsilon)
                    break;
                t2 = t2 - x2 / d2;
            }
            t0 = 0.0;
            t1 = 1.0;
            t2 = x;
            if (t2 < t0)
                return t0;
            if (t2 > t1)
                return t1;
            while (t0 < t1) {
                x2 = this.sampleCurveX(t2);
                if (Math.abs(x2 - x) < epsilon)
                    return t2;
                if (x > x2)
                    t0 = t2;
                else
                    t1 = t2;
                t2 = (t1 - t0) * 0.5 + t0;
            }
            return t2;
        };
        CubicBezier.easings = {};
        return CubicBezier;
    })();
    Demo.CubicBezier = CubicBezier;
})(Demo || (Demo = {}));
//
// EVENT EMITTER
// ===========================================================================
var Demo;
(function (Demo) {
    var prefix = typeof Object.create !== "function" ? "~" : false;
    var EE = (function () {
        function EE(fn, context, once) {
            if (once === void 0) { once = false; }
            this.fn = fn;
            this.context = context;
            this.once = once;
        }
        return EE;
    })();
    var EventEmitter = (function () {
        function EventEmitter() {
            this.addListener = this.on;
            this.removeListener = this.off;
        }
        EventEmitter.prototype.broadcast = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var evt = prefix ? prefix + event : event;
            if (!this._events || !this._events[evt])
                return false;
            var listeners = this._events[evt];
            if (typeof listeners.fn === "function") {
                if (listeners.once)
                    this.off(event, listeners.fn, undefined, true);
                listeners.fn.apply(listeners.context, args);
            }
            else {
                var length = listeners.length;
                for (var i = 0; i < length; i++) {
                    if (listeners[i].once)
                        this.off(event, listeners[i].fn, undefined, true);
                    listeners[i].fn.apply(listeners[i].context, args);
                }
            }
            return true;
        };
        EventEmitter.prototype.listeners = function (event, exists) {
            var evt = prefix ? prefix + event : event;
            var available = this._events && this._events[evt];
            if (exists)
                return !!available;
            if (!available)
                return [];
            if (available.fn)
                return [available.fn];
            var len = available.length;
            var ee = new Array(len);
            for (var i = 0; i < len; i++) {
                ee[i] = available[i].fn;
            }
            return ee;
        };
        EventEmitter.prototype.on = function (event, fn, context) {
            if (context === void 0) { context = this; }
            var listener = new EE(fn, context);
            var evt = prefix ? prefix + event : event;
            if (!this._events)
                this._events = prefix ? {} : Object.create(null);
            if (!this._events[evt]) {
                this._events[evt] = listener;
            }
            else {
                if (!this._events[evt].fn)
                    this._events[evt].push(listener);
                else
                    this._events[evt] = [this._events[evt], listener];
            }
            return this;
        };
        EventEmitter.prototype.once = function (event, fn, context) {
            if (context === void 0) { context = this; }
            var listener = new EE(fn, context, true);
            var evt = prefix ? prefix + event : event;
            if (!this._events)
                this._events = prefix ? {} : Object.create(null);
            if (!this._events[evt])
                this._events[evt] = listener;
            else {
                if (!this._events[evt].fn)
                    this._events[evt].push(listener);
                else
                    this._events[evt] = [
                        this._events[evt], listener
                    ];
            }
            return this;
        };
        EventEmitter.prototype.off = function (event, fn, context, once) {
            var evt = prefix ? prefix + event : event;
            if (!this._events || !this._events[evt])
                return this;
            var listeners = this._events[evt];
            var events = [];
            if (fn) {
                if (listeners.fn) {
                    if (listeners.fn !== fn
                        || (once && !listeners.once)
                        || (context && listeners.context !== context)) {
                        events.push(listeners);
                    }
                }
                else {
                    for (var i = 0, length = listeners.length; i < length; i++) {
                        if (listeners[i].fn !== fn
                            || (once && !listeners[i].once)
                            || (context && listeners[i].context !== context)) {
                            events.push(listeners[i]);
                        }
                    }
                }
            }
            if (events.length) {
                this._events[evt] = events.length === 1 ? events[0] : events;
            }
            else {
                delete this._events[evt];
            }
            return this;
        };
        EventEmitter.prototype.removeAllListeners = function (event) {
            if (!this._events)
                return this;
            if (event)
                delete this._events[prefix ? prefix + event : event];
            else
                this._events = prefix ? {} : Object.create(null);
            return this;
        };
        EventEmitter.prefixed = prefix;
        return EventEmitter;
    })();
    Demo.EventEmitter = EventEmitter;
    Demo.events = new EventEmitter();
})(Demo || (Demo = {}));
//
// CONTROL POINT
// ===========================================================================
var Demo;
(function (Demo) {
    var ControlPoint = (function () {
        function ControlPoint(startX, startY, index) {
            this.startX = startX;
            this.startY = startY;
            this.index = index;
            this.handle = Demo.$("#handle-" + this.index);
            this.point = Demo.$("#point-" + this.index);
            this.line = Demo.$("#line-" + this.index);
            TweenLite.set([this.handle, this.line], { x: startX, y: startY });
            this.draggable = new Draggable(this.point, {
                onDrag: this.onDrag,
                onPress: this.onPress,
                onRelease: this.onRelease,
                callbackScope: this
            });
            this.transform = this.point._gsTransform;
        }
        Object.defineProperty(ControlPoint.prototype, "tx", {
            get: function () { return Demo.roundTo((this.x / Demo.scale), -2); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlPoint.prototype, "x", {
            get: function () { return this.startX + this.transform.x; },
            set: function (x) {
                x = x * Demo.scale - this.startX;
                this.line.setAttribute("x2", x);
                TweenLite.set(this.point, { x: x });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlPoint.prototype, "ty", {
            get: function () { return Demo.roundTo((1 - this.y / Demo.scale), -2); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlPoint.prototype, "y", {
            get: function () { return this.startY + this.transform.y; },
            set: function (y) {
                y = Demo.scale - this.startY - Demo.scale * y;
                this.line.setAttribute("y2", y);
                TweenLite.set(this.point, { y: y });
            },
            enumerable: true,
            configurable: true
        });
        ControlPoint.prototype.update = function () {
            this.draggable.update();
            return this;
        };
        ControlPoint.prototype.onDrag = function () {
            this.line.setAttribute("x2", this.draggable.endX);
            this.line.setAttribute("y2", this.draggable.endY);
            Demo.events.broadcast("point:update");
        };
        ControlPoint.prototype.onPress = function () {
            Demo.events.broadcast("point:pressed");
        };
        ControlPoint.prototype.onRelease = function () {
            Demo.events.broadcast("point:released");
        };
        return ControlPoint;
    })();
    Demo.ControlPoint = ControlPoint;
})(Demo || (Demo = {}));
//
// PARTICLE
// ===========================================================================
var Demo;
(function (Demo) {
    var Particle = (function () {
        function Particle(sprite, index, startX, startY) {
            this.sprite = sprite;
            this.index = index;
            this.startX = startX;
            this.startY = startY;
            this.active = false;
            this.timeline = new TimelineLite({
                paused: true,
                onComplete: this.kill,
                callbackScope: this
            });
            sprite.anchor.set(0.5);
            sprite.position.set(startX, startY);
            sprite.scale.set(0);
            sprite.alpha = 0;
            this.timeline
                .set(sprite, { alpha: 0 })
                .set(sprite.scale, { x: 0, y: 0 })
                .to(sprite.scale, 0.1, { x: 1.0, y: 1.0 }, "start")
                .to(sprite.scale, 1.0, { x: 0.6, y: 0.6 }, "last")
                .to(sprite, 0.1, { alpha: 1 }, "start")
                .to(sprite, 2.0, { alpha: 0 }, "last");
        }
        Particle.prototype.start = function (x, y) {
            this.active = true;
            this.sprite.position.set(x, y);
            this.timeline.play(0);
        };
        Particle.prototype.kill = function () {
            this.timeline.progress(1).pause(0);
            this.sprite.position.set(this.startX, this.startY);
            this.active = false;
            this.sprite.alpha = 0;
        };
        return Particle;
    })();
    Demo.Particle = Particle;
})(Demo || (Demo = {}));
//
// LINKED LIST
// ========================================================================
var Demo;
(function (Demo) {
    var LinkedList = (function () {
        function LinkedList(loops) {
            if (loops === void 0) { loops = false; }
            this.loops = loops;
            this.current = null;
            this.first = null;
            this.last = null;
            this.size = 0;
        }
        Object.defineProperty(LinkedList.prototype, "isEmpty", {
            get: function () { return !this.size && !this.first && !this.last; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LinkedList.prototype, "next", {
            get: function () { return this.current ? (this.current = this.current.next || null) : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LinkedList.prototype, "prev", {
            get: function () { return this.current ? (this.current = this.current.prev || null) : null; },
            enumerable: true,
            configurable: true
        });
        LinkedList.prototype.add = function (node) {
            if (this.isEmpty) {
                this.current = this.first = node;
            }
            else {
                this.last.next = node;
                node.prev = this.last;
            }
            if (this.loops) {
                node.next = this.first;
                this.first.prev = node;
            }
            this.last = node;
            this.size++;
            return node;
        };
        LinkedList.prototype.clear = function () {
            this.current = this.first = this.last = null;
            this.size = 0;
        };
        LinkedList.prototype.remove = function (node) {
            if (this.size === 1) {
                this.clear();
                node.next = node.prev = null;
                return;
            }
            if (node === this.first)
                this.first = this.first.next;
            if (node === this.last)
                this.last = this.last.prev;
            if (node.prev)
                node.prev.next = node.next;
            if (node.next)
                node.next.prev = node.prev;
            node.next = node.prev = null;
            if (!this.first)
                this.last = null;
            this.size--;
        };
        LinkedList.prototype.forEach = function (callback, scope) {
            if (scope === void 0) { scope = null; }
            if (this.isEmpty)
                return;
            var node = this.first;
            var count = 0;
            do {
                callback.call(scope, node, count++);
                node = node.next;
            } while (node !== this.last.next);
        };
        return LinkedList;
    })();
    Demo.LinkedList = LinkedList;
})(Demo || (Demo = {}));
//
// EASE MANAGER
// ===========================================================================
var Demo;
(function (Demo) {
    var EaseManager = (function () {
        function EaseManager() {
            var _this = this;
            this.p1x = 0;
            this.p1y = 0;
            this.p2x = 1;
            this.p2y = 1;
            this.path = ["M", 0, Demo.scale, "C", 0, 0, 0, 0, Demo.scale, 0];
            this.selectEase = Demo.$("#ease-name");
            this.selectType = Demo.$("#ease-type");
            this.bezier1 = Demo.$("#bezier-1");
            this.bezier2 = Demo.$("#bezier-2");
            this.values = Demo.$("#code-values");
            this.point1 = new Demo.ControlPoint(0, Demo.scale, 1);
            this.point2 = new Demo.ControlPoint(Demo.scale, 0, 2);
            this.types = [
                "<option value=\"0\"></option>",
                "<option value=\"0\">easeNone</option>",
                "<option value=\"0\">easeIn</option>\n       <option value=\"1\">easeOut</option>\n       <option value=\"2\">easeInOut</option>"
            ];
            this.order = "power0,power1,power2,power3,power4,sine,expo,circ".split(",");
            this.easings = {
                power0: {
                    types: this.types[1],
                    alias: ["Power0", "Linear"],
                    eases: [
                        [0.00, 0.00, 1.00, 1.00]
                    ]
                },
                power1: {
                    types: this.types[2],
                    alias: ["Power1", "Quad"],
                    eases: [
                        [0.26, 0.00, 0.60, 0.20],
                        [0.40, 0.80, 0.74, 1.00],
                        [0.48, 0.04, 0.52, 0.96]
                    ]
                },
                power2: {
                    types: this.types[2],
                    alias: ["Power2", "Cubic"],
                    eases: [
                        [0.40, 0.00, 0.68, 0.06],
                        [0.32, 0.94, 0.60, 1.00],
                        [0.66, 0.00, 0.34, 1.00]
                    ]
                },
                power3: {
                    types: this.types[2],
                    alias: ["Power3", "Quart"],
                    eases: [
                        [0.52, 0.00, 0.74, 0.00],
                        [0.26, 1.00, 0.48, 1.00],
                        [0.76, 0.00, 0.24, 1.00]
                    ]
                },
                power4: {
                    types: this.types[2],
                    alias: ["Power4", "Quint", "Strong"],
                    eases: [
                        [0.64, 0.00, 0.78, 0.00],
                        [0.22, 1.00, 0.36, 1.00],
                        [0.84, 0.00, 0.16, 1.00]
                    ]
                },
                sine: {
                    types: this.types[2],
                    alias: ["Sine"],
                    eases: [
                        [0.32, 0.00, 0.60, 0.36],
                        [0.40, 0.64, 0.68, 1.00],
                        [0.36, 0.00, 0.64, 1.00]
                    ]
                },
                expo: {
                    types: this.types[2],
                    alias: ["Expo"],
                    eases: [
                        [0.66, 0.00, 0.86, 0.00],
                        [0.14, 1.00, 0.34, 1.00],
                        [0.90, 0.00, 0.10, 1.00]
                    ]
                },
                circ: {
                    types: this.types[2],
                    alias: ["Circ"],
                    eases: [
                        [0.54, 0.00, 1.00, 0.44],
                        [0.00, 0.56, 0.46, 1.00],
                        [0.88, 0.14, 0.12, 0.86]
                    ]
                }
            };
            this.index = 0;
            var options = this.order.reduce(function (options, value) {
                var ease = _this.easings[value];
                var name = ease.alias[0];
                return options += "<option value=\"" + value + "\">" + name + "</option>";
            }, "");
            this.selectEase.innerHTML = options;
            this.selectType.innerHTML = this.types[2];
            this.selectedEase = "power4";
            this.selectedType = 0;
            this.selectEase.addEventListener("change", function (event) { return _this.easeChange(); });
            this.selectType.addEventListener("change", function (event) { return _this.typeChange(); });
            Demo.events.on("point:update", this.updatePoints, this);
        }
        Object.defineProperty(EaseManager.prototype, "selectedEase", {
            get: function () { return this.selectEase.value; },
            set: function (value) {
                this.selectEase.selectedIndex = this.order.indexOf(value);
                this.easeChange();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EaseManager.prototype, "selectedType", {
            get: function () { return +this.selectType.value; },
            set: function (value) {
                this.index = value;
                this.indexChange();
            },
            enumerable: true,
            configurable: true
        });
        EaseManager.prototype.indexChange = function () {
            var select = this.selectType;
            var limit = select.options.length - 1;
            this.index = this.index > limit ? 0 : this.index;
            select.selectedIndex = this.index;
            this.movePoints();
            return this;
        };
        EaseManager.prototype.easeChange = function () {
            var select = this.selectType;
            this.easing = this.easings[this.selectedEase];
            select.innerHTML = this.easing.types;
            this.indexChange();
            return this;
        };
        EaseManager.prototype.movePoints = function () {
            var p1 = this.point1;
            var p2 = this.point2;
            var pt = this.easing.eases[this.index];
            p1.x = pt[0];
            p1.y = pt[1];
            p2.x = pt[2];
            p2.y = pt[3];
            this.updatePoints();
            Demo.events.broadcast("path:changed");
            return this;
        };
        EaseManager.prototype.typeChange = function () {
            this.index = this.selectedType;
            this.movePoints();
            return this;
        };
        EaseManager.prototype.updatePoints = function () {
            var path = this.path;
            var p1 = this.point1;
            var p2 = this.point2;
            this.p1x = p1.tx;
            this.p1y = p1.ty;
            this.p2x = p2.tx;
            this.p2y = p2.ty;
            path[4] = p1.x;
            path[5] = p1.y;
            path[6] = p2.x;
            path[7] = p2.y;
            var d = path.join(" ");
            this.values.textContent = this.p1x + ", " + this.p1y + ", " + this.p2x + ", " + this.p2y;
            this.ease = Demo.CubicBezier.config(this.p1x, this.p1y, this.p2x, this.p2y);
            this.bezier1.setAttribute("d", d);
            this.bezier2.setAttribute("d", d);
        };
        return EaseManager;
    })();
    Demo.EaseManager = EaseManager;
})(Demo || (Demo = {}));
//
// ANIMATOR
// ===========================================================================
var Demo;
(function (Demo) {
    var Animator = (function () {
        function Animator(easeManager) {
            this.easeManager = easeManager;
            this.total = 500;
            this.stage = new PIXI.Container();
            this.graphics = new PIXI.Graphics();
            this.renderer = PIXI.autoDetectRenderer(Demo.width, Demo.height, {
                view: Demo.$("#stage"),
                antialias: true,
                backgroundColor: 0x222222
            });
            this.emitter = new PIXI.ParticleContainer(1000, {
                position: true,
                rotation: false,
                alpha: true,
                scale: true,
                uvs: false
            });
            this.timeline = new TimelineLite({ onUpdate: this.update.bind(this) });
            this.particles = new Demo.LinkedList(true);
            this.target = {
                t: 0,
                x: 0,
                y: Demo.scale
            };
            this.generateTexture();
            this.createParticles();
            Demo.events.on("point:pressed", this.clear, this);
            Demo.events.on("point:released", this.play, this);
            Demo.events.on("path:changed", this.play, this);
            window.addEventListener("resize", this.resize.bind(this));
            TweenLite.ticker.addEventListener("tick", this.render.bind(this));
        }
        Object.defineProperty(Animator.prototype, "ease", {
            get: function () { return this.easeManager.ease; },
            enumerable: true,
            configurable: true
        });
        Animator.prototype.update = function () {
            var particles = this.particles;
            var target = this.target;
            particles.next.start(0, target.y);
            particles.next.start(target.x, Demo.scale);
            particles.next.start(target.t, target.y);
        };
        Animator.prototype.play = function () {
            this.clear();
            this.target = { t: 0, x: 0, y: Demo.scale };
            this.emitter.visible = true;
            this.timeline
                .to(this.target, 2, { t: Demo.scale, ease: Power0.easeNone }, "start")
                .to(this.target, 2, { x: Demo.scale, y: 0, ease: this.ease }, "start");
        };
        Animator.prototype.clear = function () {
            this.timeline.progress(0).clear();
            this.emitter.visible = false;
            this.particles.forEach(function (particle) { return particle.kill(); });
        };
        Animator.prototype.generateTexture = function () {
            var graphics = this.graphics;
            graphics.beginFill(0x88CE02, 1);
            graphics.drawCircle(0, 0, 10);
            graphics.endFill();
            this.texture = graphics.generateTexture(1, 1);
        };
        Animator.prototype.createParticles = function () {
            var stage = this.stage;
            var emitter = this.emitter;
            var texture = this.texture;
            var particles = this.particles;
            for (var i = 0; i < this.total; i++) {
                var dot = new PIXI.Sprite(texture);
                emitter.addChild(dot);
                var particle = new Demo.Particle(dot, i, Demo.startX, Demo.startY);
                particles.add(particle);
            }
            emitter.visible = false;
            emitter.position.set(Demo.mainX, Demo.mainY);
            stage.addChild(emitter);
        };
        Animator.prototype.render = function () {
            this.renderer.render(this.stage);
        };
        Animator.prototype.resize = function () {
            Demo.width = window.innerWidth;
            Demo.height = window.innerHeight;
            this.renderer.resize(Demo.width, Demo.height);
        };
        return Animator;
    })();
    Demo.Animator = Animator;
})(Demo || (Demo = {}));
//
// MAIN
// ===========================================================================
var Demo;
(function (Demo) {
    function roundTo(value, place, base) {
        if (place === void 0) { place = 0; }
        if (base === void 0) { base = 10; }
        var p = Math.pow(base, -place);
        return Math.round(value * p) / p;
    }
    Demo.roundTo = roundTo;
    Demo.$ = function (query, context) {
        if (context === void 0) { context = document; }
        return context.querySelector(query);
    };
    Demo.offsetX = 0;
    Demo.offsetY = Demo.$("#hud").offsetHeight;
    Demo.width = window.innerWidth;
    Demo.height = window.innerHeight;
    Demo.scale = 500;
    Demo.startX = 0;
    Demo.startY = Demo.scale;
    Demo.mainX = 60;
    Demo.mainY = Math.max((Demo.offsetY + Demo.height - Demo.scale) / 2, Demo.offsetY);
    TweenLite.set("#linear", { attr: { y1: Demo.scale, x2: Demo.scale } });
    TweenLite.set(["#left-1", "#left-2"], { attr: { y2: Demo.scale } });
    TweenLite.set(["#bottom-1", "#bottom-2"], { attr: { y1: Demo.scale, x2: Demo.scale, y2: Demo.scale } });
    TweenLite.set("#graph-box", { attr: { width: Demo.scale, height: Demo.scale } });
    TweenLite.set("#svg-content", { x: Demo.mainX, y: Demo.mainY });
    TweenLite.set("hud", { paddingLeft: Demo.mainX });
    var easeManager = new Demo.EaseManager();
    var animator = new Demo.Animator(easeManager);
    TweenLite.set("main", { autoAlpha: 1 });
    TweenLite.delayedCall(1, function () {
        Demo.events.broadcast("path:changed");
    });
})(Demo || (Demo = {}));
// Prevent CodePen from breaking stuff
window.CP.shouldStopExecution = function () { return false; };
window.CP.exitedLoop = function () { };

