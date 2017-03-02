/* Velocity Motion Designer: http://velocityjs.org/#vmd. Copyright Julian Shapiro. @license MIT. */
function objectToString(e) {
    var t = [];
    for (var n in e) {
        var r = e[n];
        Array.isArray(r) ? r = "[" + r + "]" : /^[0-9]+$/.test(r) || (r = '"' + r + '"'), t.push(n + ": " + r)
    }
    return "{ " + t.join(", ") + " }"
}

function getElementLabel(e) {
    return e.attr("id") ? "#" + e.attr("id") : e[0].tagName.toLowerCase() + (e[0].className ? "." + e[0].className : "")
}

function updateParameters($overlay) {
    var propertiesMap = $overlay.data("VMD").propertiesMap,
        options = $overlay.data("VMD").options;
    if ($.each(["duration", "delay", "easing"], function(e, t) {
            options[t] = $overlay.find("[name='" + t + "']").val()
        }), $overlay.find("select[name='easing'] :selected").attr("data-array")) try {
        eval("options.easing = " + $overlay.find("code[name='easingArray']").text())
    } catch (error) {}
    $overlay.data("VMD").options = options;
    try {
        eval("propertiesMap = " + $overlay.find("code[name='propertiesMap']").text())
    } catch (error) {}
    $overlay.data("VMD").propertiesMap = propertiesMap
}

function animate(e) {
    updateParameters(e), e.data("VMD").propertiesMap && $('[data-VDM-id="'+alphabetIndex+'"]').velocity("stop", !0).velocity(e.data("VMD").propertiesMap, e.data("VMD").options)
}

function clearElementStyles(e) {
    $.data(e, "velocity") && ($.data(e, "velocity").transformCache = {}), e.setAttribute("style", "position:" + $.css(e, "position") + ";")
}
window.jQuery || ! function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = at.type(e);
            return "function" === n || at.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function r(e, t, n) {
            if (at.isFunction(t)) return at.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return at.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ft.test(t)) return at.filter(t, e, n);
                t = at.filter(t, e)
            }
            return at.grep(e, function(e) {
                return at.inArray(e, t) >= 0 !== n
            })
        }

        function i(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function a(e) {
            var t = wt[e] = {};
            return at.each(e.match(xt) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function o() {
            gt.addEventListener ? (gt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (gt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (gt.addEventListener || "load" === event.type || "complete" === gt.readyState) && (o(), at.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t.replace(Et, "-$1").toLowerCase();
                if (n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : kt.test(n) ? at.parseJSON(n) : n
                    } catch (i) {}
                    at.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)
                if (("data" !== t || !at.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c(e, t, n, r) {
            if (at.acceptData(e)) {
                var i, a, o = at.expando,
                    s = e.nodeType,
                    l = s ? at.cache : e,
                    u = s ? e[o] : e[o] && o;
                if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[o] = Z.pop() || at.guid++ : o), l[u] || (l[u] = s ? {} : {
                    toJSON: at.noop
                }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = at.extend(l[u], t) : l[u].data = at.extend(l[u].data, t)), a = l[u], r || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[at.camelCase(t)] = n), "string" == typeof t ? (i = a[t], null == i && (i = a[at.camelCase(t)])) : i = a, i
            }
        }

        function p(e, t, n) {
            if (at.acceptData(e)) {
                var r, i, a = e.nodeType,
                    o = a ? at.cache : e,
                    s = a ? e[at.expando] : at.expando;
                if (o[s]) {
                    if (t && (r = n ? o[s] : o[s].data)) {
                        at.isArray(t) ? t = t.concat(at.map(t, at.camelCase)) : t in r ? t = [t] : (t = at.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                        for (; i--;) delete r[t[i]];
                        if (n ? !u(r) : !at.isEmptyObject(r)) return
                    }(n || (delete o[s].data, u(o[s]))) && (a ? at.cleanData([e], !0) : rt.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
                }
            }
        }

        function d() {
            return !0
        }

        function f() {
            return !1
        }

        function h() {
            try {
                return gt.activeElement
            } catch (e) {}
        }

        function g(e) {
            var t = Mt.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function m(e, t) {
            var n, r, i = 0,
                a = typeof e.getElementsByTagName !== St ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== St ? e.querySelectorAll(t || "*") : void 0;
            if (!a)
                for (a = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || at.nodeName(r, t) ? a.push(r) : at.merge(a, m(r, t));
            return void 0 === t || t && at.nodeName(e, t) ? at.merge([e], a) : a
        }

        function y(e) {
            Ot.test(e.type) && (e.defaultChecked = e.checked)
        }

        function v(e, t) {
            return at.nodeName(e, "table") && at.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== at.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = Wt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) at._data(n, "globalEval", !t || at._data(t[r], "globalEval"))
        }

        function T(e, t) {
            if (1 === t.nodeType && at.hasData(e)) {
                var n, r, i, a = at._data(e),
                    o = at._data(t, a),
                    s = a.events;
                if (s) {
                    delete o.handle, o.events = {};
                    for (n in s)
                        for (r = 0, i = s[n].length; i > r; r++) at.event.add(t, n, s[n][r])
                }
                o.data && (o.data = at.extend({}, o.data))
            }
        }

        function S(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !rt.noCloneEvent && t[at.expando]) {
                    i = at._data(t);
                    for (r in i.events) at.removeEvent(t, r, i.handle);
                    t.removeAttribute(at.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), rt.html5Clone && e.innerHTML && !at.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ot.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function C(t, n) {
            var r, i = at(n.createElement(t)).appendTo(n.body),
                a = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : at.css(i[0], "display");
            return i.detach(), a
        }

        function k(e) {
            var t = gt,
                n = Kt[e];
            return n || (n = C(e, t), "none" !== n && n || (Jt = (Jt || at("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Jt[0].contentWindow || Jt[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Jt.detach()), Kt[e] = n), n
        }

        function E(e, t) {
            return {
                get: function() {
                    var n = e();
                    return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
                }
            }
        }

        function D(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = fn.length; i--;)
                if (t = fn[i] + n, t in e) return t;
            return r
        }

        function N(e, t) {
            for (var n, r, i, a = [], o = 0, s = e.length; s > o; o++) r = e[o], r.style && (a[o] = at._data(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (a[o] = at._data(r, "olddisplay", k(r.nodeName)))) : (i = At(r), (n && "none" !== n || !i) && at._data(r, "olddisplay", i ? n : at.css(r, "display"))));
            for (o = 0; s > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
            return e
        }

        function A(e, t, n) {
            var r = un.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function P(e, t, n, r, i) {
            for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += at.css(e, n + Nt[a], !0, i)), r ? ("content" === n && (o -= at.css(e, "padding" + Nt[a], !0, i)), "margin" !== n && (o -= at.css(e, "border" + Nt[a] + "Width", !0, i))) : (o += at.css(e, "padding" + Nt[a], !0, i), "padding" !== n && (o += at.css(e, "border" + Nt[a] + "Width", !0, i)));
            return o
        }

        function O(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = nn(e),
                o = rt.boxSizing && "border-box" === at.css(e, "boxSizing", !1, a);
            if (0 >= i || null == i) {
                if (i = rn(e, t, a), (0 > i || null == i) && (i = e.style[t]), tn.test(i)) return i;
                r = o && (rt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + P(e, t, n || (o ? "border" : "content"), r, a) + "px"
        }

        function L(e, t, n, r, i) {
            return new L.prototype.init(e, t, n, r, i)
        }

        function j() {
            return setTimeout(function() {
                hn = void 0
            }), hn = at.now()
        }

        function V(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Nt[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function H(e, t, n) {
            for (var r, i = (xn[t] || []).concat(xn["*"]), a = 0, o = i.length; o > a; a++)
                if (r = i[a].call(n, t, e)) return r
        }

        function M(e, t, n) {
            var r, i, a, o, s, l, u, c, p = this,
                d = {},
                f = e.style,
                h = e.nodeType && At(e),
                g = at._data(e, "fxshow");
            n.queue || (s = at._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, p.always(function() {
                p.always(function() {
                    s.unqueued--, at.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = at.css(e, "display"), c = "none" === u ? at._data(e, "olddisplay") || k(e.nodeName) : u, "inline" === c && "none" === at.css(e, "float") && (rt.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", rt.shrinkWrapBlocks() || p.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], mn.exec(i)) {
                    if (delete t[r], a = a || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        h = !0
                    }
                    d[r] = g && g[r] || at.style(e, r)
                } else u = void 0;
            if (at.isEmptyObject(d)) "inline" === ("none" === u ? k(e.nodeName) : u) && (f.display = u);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = at._data(e, "fxshow", {}), a && (g.hidden = !h), h ? at(e).show() : p.done(function() {
                    at(e).hide()
                }), p.done(function() {
                    var t;
                    at._removeData(e, "fxshow");
                    for (t in d) at.style(e, t, d[t])
                });
                for (r in d) o = H(h ? g[r] : 0, r, p), r in g || (g[r] = o.start, h && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function F(e, t) {
            var n, r, i, a, o;
            for (n in e)
                if (r = at.camelCase(n), i = t[r], a = e[n], at.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = at.cssHooks[r], o && "expand" in o) {
                    a = o.expand(a), delete e[r];
                    for (n in a) n in e || (e[n] = a[n], t[n] = i)
                } else t[r] = i
        }

        function X(e, t, n) {
            var r, i, a = 0,
                o = bn.length,
                s = at.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (i) return !1;
                    for (var t = hn || j(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, a = 1 - r, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(a);
                    return s.notifyWith(e, [u, a, n]), 1 > a && l ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: at.extend({}, t),
                    opts: at.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: hn || j(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = at.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (F(c, u.opts.specialEasing); o > a; a++)
                if (r = bn[a].call(u, e, c, u.opts)) return r;
            return at.map(c, H, u), at.isFunction(u.opts.start) && u.opts.start.call(e, u), at.fx.timer(at.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function R(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    a = t.toLowerCase().match(xt) || [];
                if (at.isFunction(n))
                    for (; r = a[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function I(e, t, n, r) {
            function i(s) {
                var l;
                return a[s] = !0, at.each(e[s] || [], function(e, s) {
                    var u = s(t, n, r);
                    return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
                }), l
            }
            var a = {},
                o = e === Bn;
            return i(t.dataTypes[0]) || !a["*"] && i("*")
        }

        function q(e, t) {
            var n, r, i = at.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
            return n && at.extend(!0, e, n), e
        }

        function Y(e, t, n) {
            for (var r, i, a, o, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (o in s)
                    if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) a = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        a = o;
                        break
                    }
                    r || (r = o)
                }
                a = a || r
            }
            return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
        }

        function B(e, t, n, r) {
            var i, a, o, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
            for (a = c.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (o = u[l + " " + a] || u["* " + a], !o)
                    for (i in u)
                        if (s = i.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                            o === !0 ? o = u[i] : u[i] !== !0 && (a = s[0], c.unshift(s[1]));
                            break
                        }
                if (o !== !0)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (p) {
                        return {
                            state: "parsererror",
                            error: o ? p : "No conversion from " + l + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function _(e, t, n, r) {
            var i;
            if (at.isArray(t)) at.each(t, function(t, i) {
                n || Un.test(e) ? r(e, i) : _(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== at.type(t)) r(e, t);
            else
                for (i in t) _(e + "[" + i + "]", t[i], n, r)
        }

        function z() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function W() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function U(e) {
            return at.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var Z = [],
            Q = Z.slice,
            G = Z.concat,
            J = Z.push,
            K = Z.indexOf,
            et = {},
            tt = et.toString,
            nt = et.hasOwnProperty,
            rt = {},
            it = "1.11.1",
            at = function(e, t) {
                return new at.fn.init(e, t)
            },
            ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            st = /^-ms-/,
            lt = /-([\da-z])/gi,
            ut = function(e, t) {
                return t.toUpperCase()
            };
        at.fn = at.prototype = {
            jquery: it,
            constructor: at,
            selector: "",
            length: 0,
            toArray: function() {
                return Q.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
            },
            pushStack: function(e) {
                var t = at.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return at.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(at.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(Q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: Z.sort,
            splice: Z.splice
        }, at.extend = at.fn.extend = function() {
            var e, t, n, r, i, a, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || at.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
                if (null != (i = arguments[s]))
                    for (r in i) e = o[r], n = i[r], o !== n && (u && n && (at.isPlainObject(n) || (t = at.isArray(n))) ? (t ? (t = !1, a = e && at.isArray(e) ? e : []) : a = e && at.isPlainObject(e) ? e : {}, o[r] = at.extend(u, a, n)) : void 0 !== n && (o[r] = n));
            return o
        }, at.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === at.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === at.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !at.isArray(e) && e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== at.type(e) || e.nodeType || at.isWindow(e)) return !1;
                try {
                    if (e.constructor && !nt.call(e, "constructor") && !nt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (rt.ownLast)
                    for (t in e) return nt.call(e, t);
                for (t in e);
                return void 0 === t || nt.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[tt.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && at.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(st, "ms-").replace(lt, ut)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i, a = 0,
                    o = e.length,
                    s = n(e);
                if (r) {
                    if (s)
                        for (; o > a && (i = t.apply(e[a], r), i !== !1); a++);
                    else
                        for (a in e)
                            if (i = t.apply(e[a], r), i === !1) break
                } else if (s)
                    for (; o > a && (i = t.call(e[a], a, e[a]), i !== !1); a++);
                else
                    for (a in e)
                        if (i = t.call(e[a], a, e[a]), i === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ot, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? at.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (K) return K.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
                if (n !== n)
                    for (; void 0 !== t[r];) e[i++] = t[r++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r, i = [], a = 0, o = e.length, s = !n; o > a; a++) r = !t(e[a], a), r !== s && i.push(e[a]);
                return i
            },
            map: function(e, t, r) {
                var i, a = 0,
                    o = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; o > a; a++) i = t(e[a], a, r), null != i && l.push(i);
                else
                    for (a in e) i = t(e[a], a, r), null != i && l.push(i);
                return G.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (i = e[t], t = e, e = i), at.isFunction(e) ? (n = Q.call(arguments, 2), r = function() {
                    return e.apply(t || this, n.concat(Q.call(arguments)))
                }, r.guid = e.guid = e.guid || at.guid++, r) : void 0
            },
            now: function() {
                return +new Date
            },
            support: rt
        }), at.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            et["[object " + t + "]"] = t.toLowerCase()
        });
        var ct = function(e) {
            function t(e, t, n, r) {
                var i, a, o, s, l, u, p, f, h, g;
                if ((t ? t.ownerDocument || t : I) !== L && O(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (V && !r) {
                    if (i = vt.exec(e))
                        if (o = i[1]) {
                            if (9 === s) {
                                if (a = t.getElementById(o), !a || !a.parentNode) return n;
                                if (a.id === o) return n.push(a), n
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && X(t, a) && a.id === o) return n.push(a), n
                        } else {
                            if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                            if ((o = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(o)), n
                        }
                    if (w.qsa && (!H || !H.test(e))) {
                        if (f = p = R, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (u = k(e), (p = t.getAttribute("id")) ? f = p.replace(xt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                            h = bt.test(e) && c(t.parentNode) || t, g = u.join(",")
                        }
                        if (g) try {
                            return et.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            p || t.removeAttribute("id")
                        }
                    }
                }
                return D(e.replace(ut, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[R] = !0, e
            }

            function i(e) {
                var t = L.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function a(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
            }

            function o(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return r(function(t) {
                    return t = +t, r(function(n, r) {
                        for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c(e) {
                return e && typeof e.getElementsByTagName !== U && e
            }

            function p() {}

            function d(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function f(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    a = Y++;
                return t.first ? function(t, n, a) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, a)
                } : function(t, n, o) {
                    var s, l, u = [q, a];
                    if (o) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) {
                                if (l = t[R] || (t[R] = {}), (s = l[r]) && s[0] === q && s[1] === a) return u[2] = s[2];
                                if (l[r] = u, u[2] = e(t, n, o)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, r) {
                for (var i = 0, a = n.length; a > i; i++) t(e, n[i], r);
                return r
            }

            function m(e, t, n, r, i) {
                for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (!n || n(a, r, i)) && (o.push(a), u && t.push(s));
                return o
            }

            function y(e, t, n, i, a, o) {
                return i && !i[R] && (i = y(i)), a && !a[R] && (a = y(a, o)), r(function(r, o, s, l) {
                    var u, c, p, d = [],
                        f = [],
                        h = o.length,
                        y = r || g(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !r && t ? y : m(y, d, e, s, l),
                        b = n ? a || (r ? e : h || i) ? [] : o : v;
                    if (n && n(v, b, s, l), i)
                        for (u = m(b, f), i(u, [], s, l), c = u.length; c--;)(p = u[c]) && (b[f[c]] = !(v[f[c]] = p));
                    if (r) {
                        if (a || e) {
                            if (a) {
                                for (u = [], c = b.length; c--;)(p = b[c]) && u.push(v[c] = p);
                                a(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(p = b[c]) && (u = a ? nt.call(r, p) : d[c]) > -1 && (r[u] = !(o[u] = p))
                        }
                    } else b = m(b === o ? b.splice(h, b.length) : b), a ? a(null, o, b, l) : et.apply(o, b)
                })
            }

            function v(e) {
                for (var t, n, r, i = e.length, a = T.relative[e[0].type], o = a || T.relative[" "], s = a ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, o, !0), u = f(function(e) {
                        return nt.call(t, e) > -1
                    }, o, !0), c = [function(e, n, r) {
                        return !a && (r || n !== N) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                    }]; i > s; s++)
                    if (n = T.relative[e[s].type]) c = [f(h(c), n)];
                    else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                            for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                            return y(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ut, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(e, n) {
                var i = n.length > 0,
                    a = e.length > 0,
                    o = function(r, o, s, l, u) {
                        var c, p, d, f = 0,
                            h = "0",
                            g = r && [],
                            y = [],
                            v = N,
                            b = r || a && T.find.TAG("*", u),
                            x = q += null == v ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (N = o !== L && o); h !== w && null != (c = b[h]); h++) {
                            if (a && c) {
                                for (p = 0; d = e[p++];)
                                    if (d(c, o, s)) {
                                        l.push(c);
                                        break
                                    }
                                u && (q = x)
                            }
                            i && ((c = !d && c) && f--, r && g.push(c))
                        }
                        if (f += h, i && h !== f) {
                            for (p = 0; d = n[p++];) d(g, y, o, s);
                            if (r) {
                                if (f > 0)
                                    for (; h--;) g[h] || y[h] || (y[h] = J.call(l));
                                y = m(y)
                            }
                            et.apply(l, y), u && !r && y.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (q = x, N = v), g
                    };
                return i ? r(o) : o
            }
            var x, w, T, S, C, k, E, D, N, A, P, O, L, j, V, H, M, F, X, R = "sizzle" + -new Date,
                I = e.document,
                q = 0,
                Y = 0,
                B = n(),
                _ = n(),
                z = n(),
                W = function(e, t) {
                    return e === t && (P = !0), 0
                },
                U = "undefined",
                Z = 1 << 31,
                Q = {}.hasOwnProperty,
                G = [],
                J = G.pop,
                K = G.push,
                et = G.push,
                tt = G.slice,
                nt = G.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                at = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = at.replace("w", "w#"),
                st = "\\[" + it + "*(" + at + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
                lt = ":(" + at + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                ut = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ct = new RegExp("^" + it + "*," + it + "*"),
                pt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ft = new RegExp(lt),
                ht = new RegExp("^" + ot + "$"),
                gt = {
                    ID: new RegExp("^#(" + at + ")"),
                    CLASS: new RegExp("^\\.(" + at + ")"),
                    TAG: new RegExp("^(" + at.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + st),
                    PSEUDO: new RegExp("^" + lt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + rt + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                yt = /^h\d$/i,
                $ = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                xt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                Tt = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                };
            try {
                et.apply(G = tt.call(I.childNodes), I.childNodes), G[I.childNodes.length].nodeType
            } catch (St) {
                et = {
                    apply: G.length ? function(e, t) {
                        K.apply(e, tt.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, O = t.setDocument = function(e) {
                var t, n = e ? e.ownerDocument || e : I,
                    r = n.defaultView;
                return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, j = n.documentElement, V = !C(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                    O()
                }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                    O()
                })), w.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = $.test(n.getElementsByClassName) && i(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), w.getById = i(function(e) {
                    return j.appendChild(e).id = R, !n.getElementsByName || !n.getElementsByName(R).length
                }), w.getById ? (T.find.ID = function(e, t) {
                    if (typeof t.getElementById !== U && V) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(wt, Tt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(wt, Tt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return a
                }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== U && V ? t.getElementsByClassName(e) : void 0
                }, M = [], H = [], (w.qsa = $.test(n.querySelectorAll)) && (i(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || H.push(":checked")
                }), i(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + it + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
                })), (w.matchesSelector = $.test(F = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(e) {
                    w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), M.push("!=", lt)
                }), H = H.length && new RegExp(H.join("|")), M = M.length && new RegExp(M.join("|")), t = $.test(j.compareDocumentPosition), X = t || $.test(j.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, W = t ? function(e, t) {
                    if (e === t) return P = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === I && X(I, e) ? -1 : t === n || t.ownerDocument === I && X(I, t) ? 1 : A ? nt.call(A, e) - nt.call(A, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return P = !0, 0;
                    var r, i = 0,
                        a = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        u = [t];
                    if (!a || !s) return e === n ? -1 : t === n ? 1 : a ? -1 : s ? 1 : A ? nt.call(A, e) - nt.call(A, t) : 0;
                    if (a === s) return o(e, t);
                    for (r = e; r = r.parentNode;) l.unshift(r);
                    for (r = t; r = r.parentNode;) u.unshift(r);
                    for (; l[i] === u[i];) i++;
                    return i ? o(l[i], u[i]) : l[i] === I ? -1 : u[i] === I ? 1 : 0
                }, n) : L
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== L && O(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !V || M && M.test(n) || H && H.test(n))) try {
                    var r = F.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return t(n, L, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && O(e), X(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== L && O(e);
                var n = T.attrHandle[t.toLowerCase()],
                    r = n && Q.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !V) : void 0;
                return void 0 !== r ? r : w.attributes || !V ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (P = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(W), P) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return A = null, e
            }, S = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += S(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: gt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return gt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(wt, Tt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var a = t.attr(i, e);
                            return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a + " ").indexOf(r) > -1 : "|=" === n ? a === r || a.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var a = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, d, f, h, g = a !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (a) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? m.firstChild : m.lastChild], o && v) {
                                    for (c = m[R] || (m[R] = {}), u = c[e] || [], f = u[0] === q && u[1], d = u[0] === q && u[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (d = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++d && p === t) {
                                            c[e] = [q, f, d];
                                            break
                                        }
                                } else if (v && (u = (t[R] || (t[R] = {}))[e]) && u[0] === q) d = u[1];
                                else
                                    for (;
                                        (p = ++f && p && p[g] || (d = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++d || (v && ((p[R] || (p[R] = {}))[e] = [q, d]), p !== t)););
                                return d -= i, d === r || d % r === 0 && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[R] ? a(n) : a.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = a(e, n), o = i.length; o--;) r = nt.call(e, i[o]), e[r] = !(t[r] = i[o])
                        }) : function(e) {
                            return a(e, 0, i)
                        }) : a
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            i = E(e.replace(ut, "$1"));
                        return i[R] ? r(function(e, t, n, r) {
                            for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                        }) : function(e, r, a) {
                            return t[0] = e, i(t, null, a, n), !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function(e) {
                        return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = V ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === j
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return yt.test(e.nodeName)
                    },
                    input: function(e) {
                        return mt.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[x] = l(x);
            return p.prototype = T.filters = T.pseudos, T.setFilters = new p, k = t.tokenize = function(e, n) {
                var r, i, a, o, s, l, u, c = _[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = T.preFilter; s;) {
                    (!r || (i = ct.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(a = [])), r = !1, (i = pt.exec(s)) && (r = i.shift(), a.push({
                        value: r,
                        type: i[0].replace(ut, " ")
                    }), s = s.slice(r.length));
                    for (o in T.filter) !(i = gt[o].exec(s)) || u[o] && !(i = u[o](i)) || (r = i.shift(), a.push({
                        value: r,
                        type: o,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : _(e, l).slice(0)
            }, E = t.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    a = z[e + " "];
                if (!a) {
                    for (t || (t = k(e)), n = t.length; n--;) a = v(t[n]), a[R] ? r.push(a) : i.push(a);
                    a = z(e, b(i, r)), a.selector = e
                }
                return a
            }, D = t.select = function(e, t, n, r) {
                var i, a, o, s, l, u = "function" == typeof e && e,
                    p = !r && k(e = u.selector || e);
                if (n = n || [], 1 === p.length) {
                    if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === t.nodeType && V && T.relative[a[1].type]) {
                        if (t = (T.find.ID(o.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                    }
                    for (i = gt.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !T.relative[s = o.type]);)
                        if ((l = T.find[s]) && (r = l(o.matches[0].replace(wt, Tt), bt.test(a[0].type) && c(t.parentNode) || t))) {
                            if (a.splice(i, 1), e = r.length && d(a), !e) return et.apply(n, r), n;
                            break
                        }
                }
                return (u || E(e, p))(r, t, !V, n, bt.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = R.split("").sort(W).join("") === R, w.detectDuplicates = !!P, O(), w.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || a("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || a(rt, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
        at.find = ct, at.expr = ct.selectors, at.expr[":"] = at.expr.pseudos, at.unique = ct.uniqueSort, at.text = ct.getText, at.isXMLDoc = ct.isXML, at.contains = ct.contains;
        var pt = at.expr.match.needsContext,
            dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ft = /^.[^:#\[\.,]*$/;
        at.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? at.find.matchesSelector(r, e) ? [r] : [] : at.find.matches(e, at.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, at.fn.extend({
            find: function(e) {
                var t, n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e) return this.pushStack(at(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (at.contains(r[t], this)) return !0
                }));
                for (t = 0; i > t; t++) at.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? at.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function(e) {
                return !!r(this, "string" == typeof e && pt.test(e) ? at(e) : e || [], !1).length
            }
        });
        var ht, gt = e.document,
            mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            yt = at.fn.init = function(e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof at ? t[0] : t, at.merge(this, at.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : gt, !0)), dt.test(n[1]) && at.isPlainObject(t))
                            for (n in t) at.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (r = gt.getElementById(n[2]), r && r.parentNode) {
                        if (r.id !== n[2]) return ht.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = gt, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : at.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(at) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), at.makeArray(e, this))
            };
        yt.prototype = at.fn, ht = at(gt);
        var vt = /^(?:parents|prev(?:Until|All))/,
            bt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        at.extend({
            dir: function(e, t, n) {
                for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !at(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), at.fn.extend({
            has: function(e) {
                var t, n = at(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++)
                        if (at.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, a = [], o = pt.test(e) || "string" != typeof e ? at(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && at.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
                return this.pushStack(a.length > 1 ? at.unique(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? at.inArray(this[0], at(e)) : at.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(at.unique(at.merge(this.get(), at(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), at.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return at.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return at.dir(e, "parentNode", n)
            },
            next: function(e) {
                return i(e, "nextSibling")
            },
            prev: function(e) {
                return i(e, "previousSibling")
            },
            nextAll: function(e) {
                return at.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return at.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return at.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return at.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return at.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return at.sibling(e.firstChild)
            },
            contents: function(e) {
                return at.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : at.merge([], e.childNodes)
            }
        }, function(e, t) {
            at.fn[e] = function(n, r) {
                var i = at.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = at.filter(r, i)), this.length > 1 && (bt[e] || (i = at.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i)
            }
        });
        var xt = /\S+/g,
            wt = {};
        at.Callbacks = function(e) {
            e = "string" == typeof e ? wt[e] || a(e) : at.extend({}, e);
            var t, n, r, i, o, s, l = [],
                u = !e.once && [],
                c = function(a) {
                    for (n = e.memory && a, r = !0, o = s || 0, s = 0, i = l.length, t = !0; l && i > o; o++)
                        if (l[o].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (l) {
                            var r = l.length;
                            ! function a(t) {
                                at.each(t, function(t, n) {
                                    var r = at.type(n);
                                    "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && a(n)
                                })
                            }(arguments), t ? i = l.length : n && (s = r, c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && at.each(arguments, function(e, n) {
                            for (var r;
                                (r = at.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, o >= r && o--)
                        }), this
                    },
                    has: function(e) {
                        return e ? at.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], i = 0, this
                    },
                    disable: function() {
                        return l = u = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, n || p.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, n) {
                        return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return p
        }, at.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", at.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", at.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", at.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return at.Deferred(function(n) {
                                at.each(t, function(t, a) {
                                    var o = at.isFunction(e[t]) && e[t];
                                    i[a[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && at.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? at.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, at.each(t, function(e, a) {
                    var o = a[2],
                        s = a[3];
                    r[a[1]] = o.add, s && o.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function() {
                        return i[a[0] + "With"](this === i ? r : this, arguments), this
                    }, i[a[0] + "With"] = o.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = 0,
                    n = Q.call(arguments),
                    r = n.length,
                    i = 1 !== r || e && at.isFunction(e.promise) ? r : 0,
                    a = 1 === i ? e : at.Deferred(),
                    o = function(e, t, n) {
                        return function(r) {
                            t[e] = this, n[e] = arguments.length > 1 ? Q.call(arguments) : r, n === s ? a.notifyWith(t, n) : --i || a.resolveWith(t, n)
                        }
                    },
                    s, l, u;
                if (r > 1)
                    for (s = new Array(r), l = new Array(r), u = new Array(r); r > t; t++) n[t] && at.isFunction(n[t].promise) ? n[t].promise().done(o(t, u, n)).fail(a.reject).progress(o(t, l, s)) : --i;
                return i || a.resolveWith(u, n), a.promise()
            }
        });
        var Tt;
        at.fn.ready = function(e) {
            return at.ready.promise().done(e), this
        }, at.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? at.readyWait++ : at.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--at.readyWait : !at.isReady) {
                    if (!gt.body) return setTimeout(at.ready);
                    at.isReady = !0, e !== !0 && --at.readyWait > 0 || (Tt.resolveWith(gt, [at]), at.fn.triggerHandler && (at(gt).triggerHandler("ready"), at(gt).off("ready")))
                }
            }
        }), at.ready.promise = function(t) {
            if (!Tt)
                if (Tt = at.Deferred(), "complete" === gt.readyState) setTimeout(at.ready);
                else if (gt.addEventListener) gt.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
            else {
                gt.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && gt.documentElement
                } catch (r) {}
                n && n.doScroll && ! function i() {
                    if (!at.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        o(), at.ready()
                    }
                }()
            }
            return Tt.promise(t)
        };
        var St = "undefined",
            Ct;
        for (Ct in at(rt)) break;
        rt.ownLast = "0" !== Ct, rt.inlineBlockNeedsLayout = !1, at(function() {
                var e, t, n, r;
                n = gt.getElementsByTagName("body")[0], n && n.style && (t = gt.createElement("div"), r = gt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== St && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", rt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
            }),
            function() {
                var e = gt.createElement("div");
                if (null == rt.deleteExpando) {
                    rt.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        rt.deleteExpando = !1
                    }
                }
                e = null
            }(), at.acceptData = function(e) {
                var t = at.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Et = /([A-Z])/g;
        at.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? at.cache[e[at.expando]] : e[at.expando], !!e && !u(e)
            },
            data: function(e, t, n) {
                return c(e, t, n)
            },
            removeData: function(e, t) {
                return p(e, t)
            },
            _data: function(e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return p(e, t, !0)
            }
        }), at.fn.extend({
            data: function(e, t) {
                var n, r, i, a = this[0],
                    o = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (i = at.data(a), 1 === a.nodeType && !at._data(a, "parsedAttrs"))) {
                        for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = at.camelCase(r.slice(5)), l(a, r, i[r])));
                        at._data(a, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    at.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    at.data(this, e, t)
                }) : a ? l(a, e, at.data(a, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    at.removeData(this, e)
                })
            }
        }), at.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = at._data(e, t), n && (!r || at.isArray(n) ? r = at._data(e, t, at.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = at.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    a = at._queueHooks(e, t),
                    o = function() {
                        at.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return at._data(e, n) || at._data(e, n, {
                    empty: at.Callbacks("once memory").add(function() {
                        at._removeData(e, t + "queue"), at._removeData(e, n)
                    })
                })
            }
        }), at.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? at.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = at.queue(this, e, t);
                    at._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && at.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    at.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = at.Deferred(),
                    a = this,
                    o = this.length,
                    s = function() {
                        --r || i.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = at._data(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Nt = ["Top", "Right", "Bottom", "Left"],
            At = function(e, t) {
                return e = t || e, "none" === at.css(e, "display") || !at.contains(e.ownerDocument, e)
            },
            Pt = at.access = function(e, t, n, r, i, a, o) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === at.type(n)) {
                    i = !0;
                    for (s in n) at.access(e, t, s, n[s], !0, a, o)
                } else if (void 0 !== r && (i = !0, at.isFunction(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(at(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : u ? t.call(e) : l ? t(e[0], n) : a
            },
            Ot = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = gt.createElement("input"),
                t = gt.createElement("div"),
                n = gt.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", rt.leadingWhitespace = 3 === t.firstChild.nodeType, rt.tbody = !t.getElementsByTagName("tbody").length, rt.htmlSerialize = !!t.getElementsByTagName("link").length, rt.html5Clone = "<:nav></:nav>" !== gt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), rt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", rt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, rt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    rt.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == rt.deleteExpando) {
                rt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (r) {
                    rt.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, n, r = gt.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (rt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), rt[t + "Bubbles"] = r.attributes[n].expando === !1);
            r = null
        }();
        var Lt = /^(?:input|select|textarea)$/i,
            jt = /^key/,
            Vt = /^(?:mouse|pointer|contextmenu)|click/,
            $ = /^(?:focusinfocus|focusoutblur)$/,
            Ht = /^([^.]*)(?:\.(.+)|)$/;
        at.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var a, o, s, l, u, c, p, d, f, h, g, m = at._data(e);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = at.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                            return typeof at === St || e && at.event.triggered === e.type ? void 0 : at.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), t = (t || "").match(xt) || [""], s = t.length; s--;) a = Ht.exec(t[s]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (u = at.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, u = at.event.special[f] || {}, p = at.extend({
                        type: f,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && at.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, l), (d = o[f]) || (d = o[f] = [], d.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, p) : d.push(p), at.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var a, o, s, l, u, c, p, d, f, h, g, m = at.hasData(e) && at._data(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(xt) || [""], u = t.length; u--;)
                        if (s = Ht.exec(t[u]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (p = at.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = d.length; a--;) o = d[a], !i && g !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (d.splice(a, 1), o.selector && d.delegateCount--, p.remove && p.remove.call(e, o));
                            l && !d.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || at.removeEvent(e, f, m.handle), delete c[f])
                        } else
                            for (f in c) at.event.remove(e, f + t[u], n, r, !0);
                    at.isEmptyObject(c) && (delete m.handle, at._removeData(e, "events"))
                }
            },
            trigger: function(t, n, r, i) {
                var a, o, s, l, u, c, p, d = [r || gt],
                    f = nt.call(t, "type") ? t.type : t,
                    h = nt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = r = r || gt, 3 !== r.nodeType && 8 !== r.nodeType && !$.test(f + at.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), o = f.indexOf(":") < 0 && "on" + f, t = t[at.expando] ? t : new at.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : at.makeArray(n, [t]), u = at.event.special[f] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                    if (!i && !u.noBubble && !at.isWindow(r)) {
                        for (l = u.delegateType || f, $.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                        c === (r.ownerDocument || gt) && d.push(c.defaultView || c.parentWindow || e)
                    }
                    for (p = 0;
                        (s = d[p++]) && !t.isPropagationStopped();) t.type = p > 1 ? l : u.bindType || f, a = (at._data(s, "events") || {})[t.type] && at._data(s, "handle"), a && a.apply(s, n), a = o && s[o], a && a.apply && at.acceptData(s) && (t.result = a.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = f, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && at.acceptData(r) && o && r[f] && !at.isWindow(r)) {
                        c = r[o], c && (r[o] = null), at.event.triggered = f;
                        try {
                            r[f]()
                        } catch (g) {}
                        at.event.triggered = void 0, c && (r[o] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = at.event.fix(e);
                var t, n, r, i, a, o = [],
                    s = Q.call(arguments),
                    l = (at._data(this, "events") || {})[e.type] || [],
                    u = at.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (o = at.event.handlers.call(this, e, l), t = 0;
                        (i = o[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, a = 0;
                            (r = i.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((at.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, a, o = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], a = 0; s > a; a++) r = t[a], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? at(n, this).index(l) >= 0 : at.find(n, this, null, [l]).length), i[n] && i.push(r);
                            i.length && o.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < t.length && o.push({
                    elem: this,
                    handlers: t.slice(s)
                }), o
            },
            fix: function(e) {
                if (e[at.expando]) return e;
                var t, n, r, i = e.type,
                    a = e,
                    o = this.fixHooks[i];
                for (o || (this.fixHooks[i] = o = Vt.test(i) ? this.mouseHooks : jt.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new at.Event(a), t = r.length; t--;) n = r[t], e[n] = a[n];
                return e.target || (e.target = a.srcElement || gt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, i, a = t.button,
                        o = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || gt, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== h() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return at.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return at.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = at.extend(new at.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? at.event.trigger(i, null, t) : at.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, at.removeEvent = gt.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === St && (e[r] = null), e.detachEvent(r, n))
        }, at.Event = function(e, t) {
            return this instanceof at.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : f) : this.type = e, t && at.extend(this, t), this.timeStamp = e && e.timeStamp || at.now(), void(this[at.expando] = !0)) : new at.Event(e, t)
        }, at.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, at.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            at.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        a = e.handleObj;
                    return (!i || i !== r && !at.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), rt.submitBubbles || (at.event.special.submit = {
            setup: function() {
                return at.nodeName(this, "form") ? !1 : void at.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = at.nodeName(t, "input") || at.nodeName(t, "button") ? t.form : void 0;
                    n && !at._data(n, "submitBubbles") && (at.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), at._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && at.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return at.nodeName(this, "form") ? !1 : void at.event.remove(this, "._submit")
            }
        }), rt.changeBubbles || (at.event.special.change = {
            setup: function() {
                return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (at.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), at.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), at.event.simulate("change", this, e, !0)
                })), !1) : void at.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Lt.test(t.nodeName) && !at._data(t, "changeBubbles") && (at.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || at.event.simulate("change", this.parentNode, e, !0)
                    }), at._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return at.event.remove(this, "._change"), !Lt.test(this.nodeName)
            }
        }), rt.focusinBubbles || at.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                at.event.simulate(t, e.target, at.event.fix(e), !0)
            };
            at.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = at._data(r, t);
                    i || r.addEventListener(e, n, !0), at._data(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = at._data(r, t) - 1;
                    i ? at._data(r, t, i) : (r.removeEventListener(e, n, !0), at._removeData(r, t))
                }
            }
        }), at.fn.extend({
            on: function(e, t, n, r, i) {
                var a, o;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], i);
                    return this
                }
                if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = f;
                else if (!r) return this;
                return 1 === i && (o = r, r = function(e) {
                    return at().off(e), o.apply(this, arguments)
                }, r.guid = o.guid || (o.guid = at.guid++)), this.each(function() {
                    at.event.add(this, e, r, n, t)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, at(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                    at.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    at.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? at.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Mt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ft = / jQuery\d+="(?:null|\d+)"/g,
            $t = new RegExp("<(?:" + Mt + ")[\\s/>]", "i"),
            Xt = /^\s+/,
            Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            It = /<([\w:]+)/,
            qt = /<tbody/i,
            Yt = /<|&#?\w+;/,
            Bt = /<(?:script|style|link)/i,
            _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
            zt = /^$|\/(?:java|ecma)script/i,
            Wt = /^true\/(.*)/,
            Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: rt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qt = g(gt),
            Gt = Qt.appendChild(gt.createElement("div"));
        Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, at.extend({
            clone: function(e, t, n) {
                var r, i, a, o, s, l = at.contains(e.ownerDocument, e);
                if (rt.html5Clone || at.isXMLDoc(e) || !$t.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML, Gt.removeChild(a = Gt.firstChild)), !(rt.noCloneEvent && rt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || at.isXMLDoc(e)))
                    for (r = m(a), s = m(e), o = 0; null != (i = s[o]); ++o) r[o] && S(i, r[o]);
                if (t)
                    if (n)
                        for (s = s || m(e), r = r || m(a), o = 0; null != (i = s[o]); o++) T(i, r[o]);
                    else T(e, a);
                return r = m(a, "script"), r.length > 0 && w(r, !l && m(e, "script")), r = s = i = null, a
            },
            buildFragment: function(e, t, n, r) {
                for (var i, a, o, s, l, u, c, p = e.length, d = g(t), f = [], h = 0; p > h; h++)
                    if (a = e[h], a || 0 === a)
                        if ("object" === at.type(a)) at.merge(f, a.nodeType ? [a] : a);
                        else if (Yt.test(a)) {
                    for (s = s || d.appendChild(t.createElement("div")), l = (It.exec(a) || ["", ""])[1].toLowerCase(), c = Zt[l] || Zt._default, s.innerHTML = c[1] + a.replace(Rt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                    if (!rt.leadingWhitespace && Xt.test(a) && f.push(t.createTextNode(Xt.exec(a)[0])), !rt.tbody)
                        for (a = "table" !== l || qt.test(a) ? "<table>" !== c[1] || qt.test(a) ? 0 : s : s.firstChild, i = a && a.childNodes.length; i--;) at.nodeName(u = a.childNodes[i], "tbody") && !u.childNodes.length && a.removeChild(u);
                    for (at.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = d.lastChild
                } else f.push(t.createTextNode(a));
                for (s && d.removeChild(s), rt.appendChecked || at.grep(m(f, "input"), y), h = 0; a = f[h++];)
                    if ((!r || -1 === at.inArray(a, r)) && (o = at.contains(a.ownerDocument, a), s = m(d.appendChild(a), "script"), o && w(s), n))
                        for (i = 0; a = s[i++];) zt.test(a.type || "") && n.push(a);
                return s = null, d
            },
            cleanData: function(e, t) {
                for (var n, r, i, a, o = 0, s = at.expando, l = at.cache, u = rt.deleteExpando, c = at.event.special; null != (n = e[o]); o++)
                    if ((t || at.acceptData(n)) && (i = n[s], a = i && l[i])) {
                        if (a.events)
                            for (r in a.events) c[r] ? at.event.remove(n, r) : at.removeEvent(n, r, a.handle);
                        l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== St ? n.removeAttribute(s) : n[s] = null, Z.push(i))
                    }
            }
        }), at.fn.extend({
            text: function(e) {
                return Pt(this, function(e) {
                    return void 0 === e ? at.text(this) : this.empty().append((this[0] && this[0].ownerDocument || gt).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = e ? at.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || at.cleanData(m(n)), n.parentNode && (t && at.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && at.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && at.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return at.clone(this, e, t)
                })
            },
            html: function(e) {
                return Pt(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ft, "") : void 0;
                    if (!("string" != typeof e || Bt.test(e) || !rt.htmlSerialize && $t.test(e) || !rt.leadingWhitespace && Xt.test(e) || Zt[(It.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Rt, "<$1></$2>");
                        try {
                            for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (at.cleanData(m(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (i) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, at.cleanData(m(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = G.apply([], e);
                var n, r, i, a, o, s, l = 0,
                    u = this.length,
                    c = this,
                    p = u - 1,
                    d = e[0],
                    f = at.isFunction(d);
                if (f || u > 1 && "string" == typeof d && !rt.checkClone && _t.test(d)) return this.each(function(n) {
                    var r = c.eq(n);
                    f && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
                });
                if (u && (s = at.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (a = at.map(m(s, "script"), b), i = a.length; u > l; l++) r = s, l !== p && (r = at.clone(r, !0, !0), i && at.merge(a, m(r, "script"))), t.call(this[l], r, l);
                    if (i)
                        for (o = a[a.length - 1].ownerDocument, at.map(a, x), l = 0; i > l; l++) r = a[l], zt.test(r.type || "") && !at._data(r, "globalEval") && at.contains(o, r) && (r.src ? at._evalUrl && at._evalUrl(r.src) : at.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ut, "")));
                    s = n = null
                }
                return this
            }
        }), at.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            at.fn[e] = function(e) {
                for (var n, r = 0, i = [], a = at(e), o = a.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0), at(a[r])[t](n), J.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Jt, Kt = {};
        ! function() {
            var e;
            rt.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return n = gt.getElementsByTagName("body")[0], n && n.style ? (t = gt.createElement("div"), r = gt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== St && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(gt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
        var en = /^margin/,
            tn = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
            nn, rn, an = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (nn = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, rn = function(e, t, n) {
            var r, i, a, o, s = e.style;
            return n = n || nn(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || at.contains(e.ownerDocument, e) || (o = at.style(e, t)), tn.test(o) && en.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 === o ? o : o + ""
        }) : gt.documentElement.currentStyle && (nn = function(e) {
            return e.currentStyle
        }, rn = function(e, t, n) {
            var r, i, a, o, s = e.style;
            return n = n || nn(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), tn.test(o) && !an.test(t) && (r = s.left, i = e.runtimeStyle, a = i && i.left, a && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = r, a && (i.left = a)), void 0 === o ? o : o + "" || "auto"
        }), ! function() {
            function t() {
                var t, n, r, i;
                n = gt.getElementsByTagName("body")[0], n && n.style && (t = gt.createElement("div"), r = gt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = o = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(gt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, a, o, s, l;
            n = gt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], (r = i && i.style) && (r.cssText = "float:left;opacity:.5", rt.opacity = "0.5" === r.opacity, rt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === n.style.backgroundClip, rt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, at.extend(rt, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == o && t(), o
                },
                pixelPosition: function() {
                    return null == a && t(), a
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), at.swap = function(e, t, n, r) {
            var i, a, o = {};
            for (a in t) o[a] = e.style[a], e.style[a] = t[a];
            i = n.apply(e, r || []);
            for (a in t) e.style[a] = o[a];
            return i
        };
        var on = /alpha\([^)]*\)/i,
            sn = /opacity\s*=\s*([^)]*)/,
            ln = /^(none|table(?!-c[ea]).+)/,
            un = new RegExp("^(" + Dt + ")(.*)$", "i"),
            cn = new RegExp("^([+-])=(" + Dt + ")", "i"),
            pn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            dn = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            fn = ["Webkit", "O", "Moz", "ms"];
        at.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = rn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": rt.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, a, o, s = at.camelCase(t),
                        l = e.style;
                    if (t = at.cssProps[s] || (at.cssProps[s] = D(l, s)), o = at.cssHooks[t] || at.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : l[t];
                    if (a = typeof n, "string" === a && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(at.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || at.cssNumber[s] || (n += "px"), rt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
                        l[t] = n
                    } catch (u) {}
                }
            },
            css: function(e, t, n, r) {
                var i, a, o, s = at.camelCase(t);
                return t = at.cssProps[s] || (at.cssProps[s] = D(e.style, s)), o = at.cssHooks[t] || at.cssHooks[s], o && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = rn(e, t, r)), "normal" === a && t in dn && (a = dn[t]), "" === n || n ? (i = parseFloat(a), n === !0 || at.isNumeric(i) ? i || 0 : a) : a
            }
        }), at.each(["height", "width"], function(e, t) {
            at.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? ln.test(at.css(e, "display")) && 0 === e.offsetWidth ? at.swap(e, pn, function() {
                        return O(e, t, r)
                    }) : O(e, t, r) : void 0
                },
                set: function(e, n, r) {
                    var i = r && nn(e);
                    return A(e, n, r ? P(e, t, r, rt.boxSizing && "border-box" === at.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), rt.opacity || (at.cssHooks.opacity = {
            get: function(e, t) {
                return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = at.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === at.trim(a.replace(on, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = on.test(a) ? a.replace(on, i) : a + " " + i)
            }
        }), at.cssHooks.marginRight = E(rt.reliableMarginRight, function(e, t) {
            return t ? at.swap(e, {
                display: "inline-block"
            }, rn, [e, "marginRight"]) : void 0
        }), at.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            at.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Nt[r] + t] = a[r] || a[r - 2] || a[0];
                    return i
                }
            }, en.test(e) || (at.cssHooks[e + t].set = A)
        }), at.fn.extend({
            css: function(e, t) {
                return Pt(this, function(e, t, n) {
                    var r, i, a = {},
                        o = 0;
                    if (at.isArray(t)) {
                        for (r = nn(e), i = t.length; i > o; o++) a[t[o]] = at.css(e, t[o], !1, r);
                        return a
                    }
                    return void 0 !== n ? at.style(e, t, n) : at.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return N(this, !0)
            },
            hide: function() {
                return N(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    At(this) ? at(this).show() : at(this).hide()
                })
            }
        }), at.Tween = L, L.prototype = {
            constructor: L,
            init: function(e, t, n, r, i, a) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (at.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = L.propHooks[this.prop];
                return e && e.get ? e.get(this) : L.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = L.propHooks[this.prop];
                return this.pos = t = this.options.duration ? at.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = at.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    at.fx.step[e.prop] ? at.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[at.cssProps[e.prop]] || at.cssHooks[e.prop]) ? at.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, at.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, at.fx = L.prototype.init, at.fx.step = {};
        var hn, gn, mn = /^(?:toggle|show|hide)$/,
            yn = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
            vn = /queueHooks$/,
            bn = [M],
            xn = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = yn.exec(t),
                        a = i && i[3] || (at.cssNumber[e] ? "" : "px"),
                        o = (at.cssNumber[e] || "px" !== a && +r) && yn.exec(at.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (o && o[3] !== a) {
                        a = a || o[3], i = i || [], o = +r || 1;
                        do s = s || ".5", o /= s, at.style(n.elem, e, o + a); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (o = n.start = +o || +r || 0, n.unit = a, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };
        at.Animation = at.extend(X, {
                tweener: function(e, t) {
                    at.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, i = e.length; i > r; r++) n = e[r], xn[n] = xn[n] || [], xn[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? bn.unshift(e) : bn.push(e)
                }
            }), at.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? at.extend({}, e) : {
                    complete: n || !n && t || at.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !at.isFunction(t) && t
                };
                return r.duration = at.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in at.fx.speeds ? at.fx.speeds[r.duration] : at.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    at.isFunction(r.old) && r.old.call(this), r.queue && at.dequeue(this, r.queue)
                }, r
            }, at.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(At).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = at.isEmptyObject(e),
                        a = at.speed(t, n, r),
                        o = function() {
                            var t = X(this, at.extend({}, e), a);
                            (i || at._data(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            a = at.timers,
                            o = at._data(this);
                        if (i) o[i] && o[i].stop && r(o[i]);
                        else
                            for (i in o) o[i] && o[i].stop && vn.test(i) && r(o[i]);
                        for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                        (t || !n) && at.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = at._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            a = at.timers,
                            o = r ? r.length : 0;
                        for (n.finish = !0, at.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), at.each(["toggle", "show", "hide"], function(e, t) {
                var n = at.fn[t];
                at.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, r, i)
                }
            }), at.each({
                slideDown: V("show"),
                slideUp: V("hide"),
                slideToggle: V("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                at.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), at.timers = [], at.fx.tick = function() {
                var e, t = at.timers,
                    n = 0;
                for (hn = at.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || at.fx.stop(), hn = void 0
            }, at.fx.timer = function(e) {
                at.timers.push(e), e() ? at.fx.start() : at.timers.pop()
            }, at.fx.interval = 13, at.fx.start = function() {
                gn || (gn = setInterval(at.fx.tick, at.fx.interval))
            }, at.fx.stop = function() {
                clearInterval(gn), gn = null
            }, at.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, at.fn.delay = function(e, t) {
                return e = at.fx ? at.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var e, t, n, r, i;
                t = gt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = gt.createElement("select"), i = n.appendChild(gt.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", rt.getSetAttribute = "t" !== t.className, rt.style = /top/.test(r.getAttribute("style")), rt.hrefNormalized = "/a" === r.getAttribute("href"), rt.checkOn = !!e.value, rt.optSelected = i.selected, rt.enctype = !!gt.createElement("form").enctype, n.disabled = !0, rt.optDisabled = !i.disabled, e = gt.createElement("input"), e.setAttribute("value", ""), rt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), rt.radioValue = "t" === e.value
            }();
        var wn = /\r/g;
        at.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = at.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, at(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : at.isArray(i) && (i = at.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = at.valHooks[this.type] || at.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = at.valHooks[i.type] || at.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)) : void 0
            }
        }), at.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = at.find.attr(e, "value");
                        return null != t ? t : at.trim(at.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, l = 0 > i ? s : a ? i : 0; s > l; l++)
                            if (n = r[l], !(!n.selected && l !== i || (rt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && at.nodeName(n.parentNode, "optgroup"))) {
                                if (t = at(n).val(), a) return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, a = at.makeArray(t), o = i.length; o--;)
                            if (r = i[o], at.inArray(at.valHooks.option.get(r), a) >= 0) try {
                                r.selected = n = !0
                            } catch (s) {
                                r.scrollHeight
                            } else r.selected = !1;
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), at.each(["radio", "checkbox"], function() {
            at.valHooks[this] = {
                set: function(e, t) {
                    return at.isArray(t) ? e.checked = at.inArray(at(e).val(), t) >= 0 : void 0
                }
            }, rt.checkOn || (at.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Tn, Sn, Cn = at.expr.attrHandle,
            kn = /^(?:checked|selected)$/i,
            En = rt.getSetAttribute,
            Dn = rt.input;
        at.fn.extend({
            attr: function(e, t) {
                return Pt(this, at.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    at.removeAttr(this, e)
                })
            }
        }), at.extend({
            attr: function(e, t, n) {
                var r, i, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === St ? at.prop(e, t, n) : (1 === a && at.isXMLDoc(e) || (t = t.toLowerCase(), r = at.attrHooks[t] || (at.expr.match.bool.test(t) ? Sn : Tn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = at.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void at.removeAttr(e, t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    a = t && t.match(xt);
                if (a && 1 === e.nodeType)
                    for (; n = a[i++];) r = at.propFix[n] || n, at.expr.match.bool.test(n) ? Dn && En || !kn.test(n) ? e[r] = !1 : e[at.camelCase("default-" + n)] = e[r] = !1 : at.attr(e, n, ""), e.removeAttribute(En ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!rt.radioValue && "radio" === t && at.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), Sn = {
            set: function(e, t, n) {
                return t === !1 ? at.removeAttr(e, n) : Dn && En || !kn.test(n) ? e.setAttribute(!En && at.propFix[n] || n, n) : e[at.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, at.each(at.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Cn[t] || at.find.attr;
            Cn[t] = Dn && En || !kn.test(t) ? function(e, t, r) {
                var i, a;
                return r || (a = Cn[t], Cn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Cn[t] = a), i
            } : function(e, t, n) {
                return n ? void 0 : e[at.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Dn && En || (at.attrHooks.value = {
            set: function(e, t, n) {
                return at.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
            }
        }), En || (Tn = {
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, Cn.id = Cn.name = Cn.coords = function(e, t, n) {
            var r;
            return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }, at.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: Tn.set
        }, at.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Tn.set(e, "" === t ? !1 : t, n)
            }
        }, at.each(["width", "height"], function(e, t) {
            at.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), rt.style || (at.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Nn = /^(?:input|select|textarea|button|object)$/i,
            An = /^(?:a|area)$/i;
        at.fn.extend({
            prop: function(e, t) {
                return Pt(this, at.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = at.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), at.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var r, i, a, o = e.nodeType;
                return e && 3 !== o && 8 !== o && 2 !== o ? (a = 1 !== o || !at.isXMLDoc(e), a && (t = at.propFix[t] || t, i = at.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = at.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Nn.test(e.nodeName) || An.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), rt.hrefNormalized || at.each(["href", "src"], function(e, t) {
            at.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), rt.optSelected || (at.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), at.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            at.propFix[this.toLowerCase()] = this
        }), rt.enctype || (at.propFix.enctype = "encoding");
        var Pn = /[\t\r\n\f]/g;
        at.fn.extend({
            addClass: function(e) {
                var t, n, r, i, a, o, s = 0,
                    l = this.length,
                    u = "string" == typeof e && e;
                if (at.isFunction(e)) return this.each(function(t) {
                    at(this).addClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(xt) || []; l > s; s++)
                        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pn, " ") : " ")) {
                            for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o = at.trim(r), n.className !== o && (n.className = o)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, a, o, s = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;
                if (at.isFunction(e)) return this.each(function(t) {
                    at(this).removeClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(xt) || []; l > s; s++)
                        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pn, " ") : "")) {
                            for (a = 0; i = t[a++];)
                                for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                            o = e ? at.trim(r) : "", n.className !== o && (n.className = o)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(at.isFunction(e) ? function(n) {
                    at(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function() {
                    if ("string" === n)
                        for (var t, r = 0, i = at(this), a = e.match(xt) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else(n === St || "boolean" === n) && (this.className && at._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : at._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pn, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), at.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            at.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), at.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var On = at.now(),
            Ln = /\?/,
            jn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        at.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, r = null,
                i = at.trim(t + "");
            return i && !at.trim(i.replace(jn, function(e, t, i, a) {
                return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !a - !i, "")
            })) ? Function("return " + i)() : at.error("Invalid JSON: " + t)
        }, at.parseXML = function(t) {
            var n, r;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (i) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || at.error("Invalid XML: " + t), n
        };
        var Vn, Hn, Mn = /#.*$/,
            Fn = /([?&])_=[^&]*/,
            $n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Rn = /^(?:GET|HEAD)$/,
            In = /^\/\//,
            qn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Yn = {},
            Bn = {},
            _n = "*/".concat("*");
        try {
            Hn = location.href
        } catch (zn) {
            Hn = gt.createElement("a"), Hn.href = "", Hn = Hn.href
        }
        Vn = qn.exec(Hn.toLowerCase()) || [], at.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Hn,
                type: "GET",
                isLocal: Xn.test(Vn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": _n,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": at.parseJSON,
                    "text xml": at.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? q(q(e, at.ajaxSettings), t) : q(at.ajaxSettings, e)
            },
            ajaxPrefilter: R(Yn),
            ajaxTransport: R(Bn),
            ajax: function(e, t) {
                function n(e, t, n, r) {
                    var i, c, y, v, x, T = t;
                    2 !== b && (b = 2, s && clearTimeout(s), u = void 0, o = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (v = Y(p, w, n)), v = B(p, v, w, i), i ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (at.lastModified[a] = x), x = w.getResponseHeader("etag"), x && (at.etag[a] = x)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = v.state, c = v.data, y = v.error, i = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(d, [c, T, w]) : h.rejectWith(d, [w, T, y]), w.statusCode(m), m = void 0, l && f.trigger(i ? "ajaxSuccess" : "ajaxError", [w, p, i ? c : y]), g.fireWith(d, [w, T]), l && (f.trigger("ajaxComplete", [w, p]), --at.active || at.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, a, o, s, l, u, c, p = at.ajaxSetup({}, t),
                    d = p.context || p,
                    f = p.context && (d.nodeType || d.jquery) ? at(d) : at.event,
                    h = at.Deferred(),
                    g = at.Callbacks("once memory"),
                    m = p.statusCode || {},
                    y = {},
                    v = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; t = $n.exec(o);) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = v[n] = v[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return u && u.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Hn) + "").replace(Mn, "").replace(In, Vn[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = at.trim(p.dataType || "*").toLowerCase().match(xt) || [""], null == p.crossDomain && (r = qn.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === Vn[1] && r[2] === Vn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Vn[3] || ("http:" === Vn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = at.param(p.data, p.traditional)), I(Yn, p, t, w), 2 === b) return w;
                l = p.global, l && 0 === at.active++ && at.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Rn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Ln.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fn.test(a) ? a.replace(Fn, "$1_=" + On++) : a + (Ln.test(a) ? "&" : "?") + "_=" + On++)), p.ifModified && (at.lastModified[a] && w.setRequestHeader("If-Modified-Since", at.lastModified[a]), at.etag[a] && w.setRequestHeader("If-None-Match", at.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + _n + "; q=0.01" : "") : p.accepts["*"]);
                for (i in p.headers) w.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[i](p[i]);
                if (u = I(Bn, p, t, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, u.send(y, n)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return at.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return at.get(e, void 0, t, "script")
            }
        }), at.each(["get", "post"], function(e, t) {
            at[t] = function(e, n, r, i) {
                return at.isFunction(n) && (i = i || r, r = n, n = void 0), at.ajax({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                })
            }
        }), at.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            at.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), at._evalUrl = function(e) {
            return at.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, at.fn.extend({
            wrapAll: function(e) {
                if (at.isFunction(e)) return this.each(function(t) {
                    at(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = at(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(at.isFunction(e) ? function(t) {
                    at(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = at(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = at.isFunction(e);
                return this.each(function(n) {
                    at(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    at.nodeName(this, "body") || at(this).replaceWith(this.childNodes)
                }).end()
            }
        }), at.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !rt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || at.css(e, "display"))
        }, at.expr.filters.visible = function(e) {
            return !at.expr.filters.hidden(e)
        };
        var Wn = /%20/g,
            Un = /\[\]$/,
            Zn = /\r?\n/g,
            Qn = /^(?:submit|button|image|reset|file)$/i,
            Gn = /^(?:input|select|textarea|keygen)/i;
        at.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    t = at.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = at.ajaxSettings && at.ajaxSettings.traditional), at.isArray(e) || e.jquery && !at.isPlainObject(e)) at.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) _(n, e[n], t, i);
            return r.join("&").replace(Wn, "+")
        }, at.fn.extend({
            serialize: function() {
                return at.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = at.prop(this, "elements");
                    return e ? at.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !at(this).is(":disabled") && Gn.test(this.nodeName) && !Qn.test(e) && (this.checked || !Ot.test(e))
                }).map(function(e, t) {
                    var n = at(this).val();
                    return null == n ? null : at.isArray(n) ? at.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Zn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Zn, "\r\n")
                    }
                }).get()
            }
        }), at.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || W()
        } : z;
        var Jn = 0,
            Kn = {},
            er = at.ajaxSettings.xhr();
        e.ActiveXObject && at(e).on("unload", function() {
            for (var e in Kn) Kn[e](void 0, !0)
        }), rt.cors = !!er && "withCredentials" in er, er = rt.ajax = !!er, er && at.ajaxTransport(function(e) {
            if (!e.crossDomain || rt.cors) {
                var t;
                return {
                    send: function(n, r) {
                        var i, a = e.xhr(),
                            o = ++Jn;
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (i in e.xhrFields) a[i] = e.xhrFields[i];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n) void 0 !== n[i] && a.setRequestHeader(i, n[i] + "");
                        a.send(e.hasContent && e.data || null), t = function(n, i) {
                            var s, l, u;
                            if (t && (i || 4 === a.readyState))
                                if (delete Kn[o], t = void 0, a.onreadystatechange = at.noop, i) 4 !== a.readyState && a.abort();
                                else {
                                    u = {}, s = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                }
                            u && r(s, l, u, a.getAllResponseHeaders())
                        }, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = Kn[o] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), at.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return at.globalEval(e), e
                }
            }
        }), at.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), at.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = gt.head || at("head")[0] || gt.documentElement;
                return {
                    send: function(r, i) {
                        t = gt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var tr = [],
            nr = /(=)\?(?=&|$)|\?\?/;
        at.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = tr.pop() || at.expando + "_" + On++;
                return this[e] = !0, e
            }
        }), at.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, a, o, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = at.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Ln.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return o || at.error(i + " was not called"), o[0]
            }, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
                o = arguments
            }, r.always(function() {
                e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), o && at.isFunction(a) && a(o[0]), o = a = void 0
            }), "script") : void 0
        }), at.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || gt;
            var r = dt.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = at.buildFragment([e], t, i), i && i.length && at(i).remove(), at.merge([], r.childNodes))
        };
        var rr = at.fn.load;
        at.fn.load = function(e, t, n) {
            if ("string" != typeof e && rr) return rr.apply(this, arguments);
            var r, i, a, o = this,
                s = e.indexOf(" ");
            return s >= 0 && (r = at.trim(e.slice(s, e.length)), e = e.slice(0, s)), at.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && at.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments, o.html(r ? at("<div>").append(at.parseHTML(e)).find(r) : e)
            }).complete(n && function(e, t) {
                o.each(n, i || [e.responseText, t, e])
            }), this
        }, at.expr.filters.animated = function(e) {
            return at.grep(at.timers, function(t) {
                return e === t.elem
            }).length
        };
        var ir = e.document.documentElement;
        at.offset = {
            setOffset: function(e, t, n) {
                var r, i, a, o, s, l, u, c = at.css(e, "position"),
                    p = at(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), s = p.offset(), a = at.css(e, "top"), l = at.css(e, "left"), u = ("absolute" === c || "fixed" === c) && at.inArray("auto", [a, l]) > -1, u ? (r = p.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), at.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : p.css(d)
            }
        }, at.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    at.offset.setOffset(this, e, t)
                });
                var t, n, r = {
                        top: 0,
                        left: 0
                    },
                    i = this[0],
                    a = i && i.ownerDocument;
                return a ? (t = a.documentElement, at.contains(t, i) ? (typeof i.getBoundingClientRect !== St && (r = i.getBoundingClientRect()), n = U(a), {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return "fixed" === at.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), at.nodeName(e[0], "html") || (n = e.offset()), n.top += at.css(e[0], "borderTopWidth", !0), n.left += at.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - at.css(r, "marginTop", !0),
                        left: t.left - n.left - at.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || ir; e && !at.nodeName(e, "html") && "static" === at.css(e, "position");) e = e.offsetParent;
                    return e || ir
                })
            }
        }), at.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            at.fn[e] = function(r) {
                return Pt(this, function(e, r, i) {
                    var a = U(e);
                    return void 0 === i ? a ? t in a ? a[t] : a.document.documentElement[r] : e[r] : void(a ? a.scrollTo(n ? at(a).scrollLeft() : i, n ? i : at(a).scrollTop()) : e[r] = i)
                }, e, r, arguments.length, null)
            }
        }), at.each(["top", "left"], function(e, t) {
            at.cssHooks[t] = E(rt.pixelPosition, function(e, n) {
                return n ? (n = rn(e, t), tn.test(n) ? at(e).position()[t] + "px" : n) : void 0
            })
        }), at.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            at.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                at.fn[r] = function(r, i) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        o = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Pt(this, function(t, n, r) {
                        var i;
                        return at.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? at.css(t, n, o) : at.style(t, n, r, o)
                    }, t, a ? r : void 0, a, null)
                }
            })
        }), at.fn.size = function() {
            return this.length
        }, at.fn.andSelf = at.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return at
        });
        var ar = e.jQuery,
            or = e.$;
        return at.noConflict = function(t) {
            return e.$ === at && (e.$ = or), t && e.jQuery === at && (e.jQuery = ar), at
        }, typeof t === St && (e.jQuery = e.$ = at), at
    }), window.jQuery.Velocity || ( /*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
        /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
        ! function(e) {
            function t(e) {
                var t = e.length,
                    n = $.type(e);
                return "function" === n || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }
            if (!e.jQuery) {
                var $ = function(e, t) {
                    return new $.fn.init(e, t)
                };
                $.isWindow = function(e) {
                    return null != e && e == e.window
                }, $.type = function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e
                }, $.isArray = Array.isArray || function(e) {
                    return "array" === $.type(e)
                }, $.isPlainObject = function(e) {
                    var t;
                    if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    for (t in e);
                    return void 0 === t || i.call(e, t)
                }, $.each = function(e, n, r) {
                    var i, a = 0,
                        o = e.length,
                        s = t(e);
                    if (r) {
                        if (s)
                            for (; o > a && (i = n.apply(e[a], r), i !== !1); a++);
                        else
                            for (a in e)
                                if (i = n.apply(e[a], r), i === !1) break
                    } else if (s)
                        for (; o > a && (i = n.call(e[a], a, e[a]), i !== !1); a++);
                    else
                        for (a in e)
                            if (i = n.call(e[a], a, e[a]), i === !1) break; return e
                }, $.data = function(e, t, r) {
                    if (void 0 === r) {
                        var i = e[$.expando],
                            a = i && n[i];
                        if (void 0 === t) return a;
                        if (a && t in a) return a[t]
                    } else if (void 0 !== t) {
                        var i = e[$.expando] || (e[$.expando] = ++$.uuid);
                        return n[i] = n[i] || {}, n[i][t] = r, r
                    }
                }, $.removeData = function(e, t) {
                    var r = e[$.expando],
                        i = r && n[r];
                    i && $.each(t, function(e, t) {
                        delete i[t]
                    })
                }, $.extend = function() {
                    var e, t, n, r, i, a, o = arguments[0] || {},
                        s = 1,
                        l = arguments.length,
                        u = !1;
                    for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" != typeof o && "function" !== $.type(o) && (o = {}), s === l && (o = this, s--); l > s; s++)
                        if (null != (i = arguments[s]))
                            for (r in i) e = o[r], n = i[r], o !== n && (u && n && ($.isPlainObject(n) || (t = $.isArray(n))) ? (t ? (t = !1, a = e && $.isArray(e) ? e : []) : a = e && $.isPlainObject(e) ? e : {}, o[r] = $.extend(u, a, n)) : void 0 !== n && (o[r] = n));
                    return o
                }, $.queue = function(e, n, r) {
                    function i(e, n) {
                        var r = n || [];
                        return null != e && (t(Object(e)) ? ! function(e, t) {
                            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
                            if (n !== n)
                                for (; void 0 !== t[r];) e[i++] = t[r++];
                            return e.length = i, e
                        }(r, "string" == typeof e ? [e] : e) : [].push.call(r, e)), r
                    }
                    if (e) {
                        n = (n || "fx") + "queue";
                        var a = $.data(e, n);
                        return r ? (!a || $.isArray(r) ? a = $.data(e, n, i(r)) : a.push(r), a) : a || []
                    }
                }, $.dequeue = function(e, t) {
                    $.each(e.nodeType ? [e] : e, function(e, n) {
                        t = t || "fx";
                        var r = $.queue(n, t),
                            i = r.shift();
                        "inprogress" === i && (i = r.shift()), i && ("fx" === t && r.unshift("inprogress"), i.call(n, function() {
                            $.dequeue(n, t)
                        }))
                    })
                }, $.fn = $.prototype = {
                    init: function(e) {
                        if (e.nodeType) return this[0] = e, this;
                        throw new Error("Not a DOM node.")
                    },
                    offset: function() {
                        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                            top: 0,
                            left: 0
                        };
                        return {
                            top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                            left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                        }
                    },
                    position: function() {
                        function e() {
                            for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                            return e || document
                        }
                        var t = this[0],
                            e = e.apply(t),
                            n = this.offset(),
                            r = /^(?:body|html)$/i.test(e.nodeName) ? {
                                top: 0,
                                left: 0
                            } : $(e).offset();
                        return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                            top: n.top - r.top,
                            left: n.left - r.left
                        }
                    }
                };
                var n = {};
                $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
                for (var r = {}, i = r.hasOwnProperty, a = r.toString, o = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < o.length; s++) r["[object " + o[s] + "]"] = o[s].toLowerCase();
                $.fn.init.prototype = $.fn, e.Velocity = {
                    Utilities: $
                }
            }
        }(window),
        function(e) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
        }(function() {
            return function(e, t, n, r) {
                function i(e) {
                    for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                        var i = e[t];
                        i && r.push(i)
                    }
                    return r
                }

                function a(e) {
                    return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
                }

                function o(e) {
                    var t = $.data(e, "velocity");
                    return null === t ? r : t
                }

                function s(e) {
                    return function(t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }

                function l(e, n, r, i) {
                    function a(e, t) {
                        return 1 - 3 * t + 3 * e
                    }

                    function o(e, t) {
                        return 3 * t - 6 * e
                    }

                    function s(e) {
                        return 3 * e
                    }

                    function l(e, t, n) {
                        return ((a(t, n) * e + o(t, n)) * e + s(t)) * e
                    }

                    function u(e, t, n) {
                        return 3 * a(t, n) * e * e + 2 * o(t, n) * e + s(t)
                    }

                    function c(t, n) {
                        for (var i = 0; g > i; ++i) {
                            var a = u(n, e, r);
                            if (0 === a) return n;
                            var o = l(n, e, r) - t;
                            n -= o / a
                        }
                        return n
                    }

                    function p() {
                        for (var t = 0; b > t; ++t) S[t] = l(t * x, e, r)
                    }

                    function d(t, n, i) {
                        var a, o, s = 0;
                        do o = n + (i - n) / 2, a = l(o, e, r) - t, a > 0 ? i = o : n = o; while (Math.abs(a) > y && ++s < v);
                        return o
                    }

                    function f(t) {
                        for (var n = 0, i = 1, a = b - 1; i != a && S[i] <= t; ++i) n += x;
                        --i;
                        var o = (t - S[i]) / (S[i + 1] - S[i]),
                            s = n + o * x,
                            l = u(s, e, r);
                        return l >= m ? c(t, s) : 0 == l ? s : d(t, n, n + x)
                    }

                    function h() {
                        C = !0, (e != n || r != i) && p()
                    }
                    var g = 4,
                        m = .001,
                        y = 1e-7,
                        v = 10,
                        b = 11,
                        x = 1 / (b - 1),
                        w = "Float32Array" in t;
                    if (4 !== arguments.length) return !1;
                    for (var T = 0; 4 > T; ++T)
                        if ("number" != typeof arguments[T] || isNaN(arguments[T]) || !isFinite(arguments[T])) return !1;
                    e = Math.min(e, 1), r = Math.min(r, 1), e = Math.max(e, 0), r = Math.max(r, 0);
                    var S = w ? new Float32Array(b) : new Array(b),
                        C = !1,
                        k = function(t) {
                            return C || h(), e === n && r === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), n, i)
                        };
                    k.getControlPoints = function() {
                        return [{
                            x: e,
                            y: n
                        }, {
                            x: r,
                            y: i
                        }]
                    };
                    var E = "generateBezier(" + [e, n, r, i] + ")";
                    return k.toString = function() {
                        return E
                    }, k
                }

                function u(e, t) {
                    var n = e;
                    return h.isString(e) ? v.Easings[e] || (n = !1) : n = h.isArray(e) && 1 === e.length ? s.apply(null, e) : h.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : h.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, n === !1 && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : y), n
                }

                function c(e) {
                    if (e)
                        for (var t = (new Date).getTime(), n = 0, i = v.State.calls.length; i > n; n++)
                            if (v.State.calls[n]) {
                                var a = v.State.calls[n],
                                    s = a[0],
                                    l = a[2],
                                    u = a[3],
                                    d = !!u;
                                u || (u = v.State.calls[n][3] = t - 16);
                                for (var f = Math.min((t - u) / l.duration, 1), g = 0, m = s.length; m > g; g++) {
                                    var y = s[g],
                                        b = y.element;
                                    if (o(b)) {
                                        var w = !1;
                                        if (l.display !== r && null !== l.display && "none" !== l.display) {
                                            if ("flex" === l.display) {
                                                var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                                $.each(S, function(e, t) {
                                                    x.setPropertyValue(b, "display", t)
                                                })
                                            }
                                            x.setPropertyValue(b, "display", l.display)
                                        }
                                        l.visibility !== r && "hidden" !== l.visibility && x.setPropertyValue(b, "visibility", l.visibility);
                                        for (var C in y)
                                            if ("element" !== C) {
                                                var k = y[C],
                                                    E, D = h.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                                if (1 === f) E = k.endValue;
                                                else if (E = k.startValue + (k.endValue - k.startValue) * D(f), !d && E === k.currentValue) continue;
                                                if (k.currentValue = E, x.Hooks.registered[C]) {
                                                    var N = x.Hooks.getRoot(C),
                                                        A = o(b).rootPropertyValueCache[N];
                                                    A && (k.rootPropertyValue = A)
                                                }
                                                var P = x.setPropertyValue(b, C, k.currentValue + (0 === parseFloat(E) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                                x.Hooks.registered[C] && (o(b).rootPropertyValueCache[N] = x.Normalizations.registered[N] ? x.Normalizations.registered[N]("extract", null, P[1]) : P[1]), "transform" === P[0] && (w = !0)
                                            }
                                        l.mobileHA && o(b).transformCache.translate3d === r && (o(b).transformCache.translate3d = "(0px, 0px, 0px)", w = !0), w && x.flushTransformCache(b)
                                    }
                                }
                                l.display !== r && "none" !== l.display && (v.State.calls[n][2].display = !1), l.visibility !== r && "hidden" !== l.visibility && (v.State.calls[n][2].visibility = !1), l.progress && l.progress.call(a[1], a[1], f, Math.max(0, u + l.duration - t), u), 1 === f && p(n)
                            }
                    v.State.isTicking && T(c)
                }

                function p(e, t) {
                    if (!v.State.calls[e]) return !1;
                    for (var n = v.State.calls[e][0], i = v.State.calls[e][1], a = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = n.length; c > u; u++) {
                        var p = n[u].element;
                        if (t || a.loop || ("none" === a.display && x.setPropertyValue(p, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(p, "visibility", a.visibility)), a.loop !== !0 && ($.queue(p)[1] === r || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && o(p)) {
                            o(p).isAnimating = !1, o(p).rootPropertyValueCache = {};
                            var d = !1;
                            $.each(x.Lists.transforms3D, function(e, t) {
                                var n = /^scale/.test(t) ? 1 : 0,
                                    i = o(p).transformCache[t];
                                o(p).transformCache[t] !== r && new RegExp("^\\(" + n + "[^.]").test(i) && (d = !0, delete o(p).transformCache[t])
                            }), a.mobileHA && (d = !0, delete o(p).transformCache.translate3d), d && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                        }
                        if (!t && a.complete && !a.loop && u === c - 1) try {
                            a.complete.call(i, i)
                        } catch (f) {
                            setTimeout(function() {
                                throw f
                            }, 1)
                        }
                        s && a.loop !== !0 && s(i), a.loop !== !0 || t || ($.each(o(p).tweensContainer, function(e, t) {
                            /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360)
                        }), v(p, "reverse", {
                            loop: !0,
                            delay: a.delay
                        })), a.queue !== !1 && $.dequeue(p, a.queue)
                    }
                    v.State.calls[e] = !1;
                    for (var h = 0, g = v.State.calls.length; g > h; h++)
                        if (v.State.calls[h] !== !1) {
                            l = !0;
                            break
                        }
                    l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
                }
                var d = function() {
                        if (n.documentMode) return n.documentMode;
                        for (var e = 7; e > 4; e--) {
                            var t = n.createElement("div");
                            if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                        }
                        return r
                    }(),
                    f = function() {
                        var e = 0;
                        return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                            var n = (new Date).getTime(),
                                r;
                            return r = Math.max(0, 16 - (n - e)), e = n + r, setTimeout(function() {
                                t(n + r)
                            }, r)
                        }
                    }(),
                    h = {
                        isString: function(e) {
                            return "string" == typeof e
                        },
                        isArray: Array.isArray || function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        isFunction: function(e) {
                            return "[object Function]" === Object.prototype.toString.call(e)
                        },
                        isNode: function(e) {
                            return e && e.nodeType
                        },
                        isNodeList: function(e) {
                            return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== r && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                        },
                        isWrapped: function(e) {
                            return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                        },
                        isSVG: function(e) {
                            return t.SVGElement && e instanceof t.SVGElement
                        },
                        isEmptyObject: function(e) {
                            for (var t in e) return !1;
                            return !0
                        }
                    },
                    $, g = !1;
                if (e.fn && e.fn.jquery ? ($ = e, g = !0) : $ = t.Velocity.Utilities, 8 >= d && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                if (7 >= d) return void(jQuery.fn.velocity = jQuery.fn.animate);
                var m = 400,
                    y = "swing",
                    v = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: n.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: $,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: m,
                            easing: y,
                            begin: r,
                            complete: r,
                            progress: r,
                            display: r,
                            visibility: r,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            $.data(e, "velocity", {
                                isSVG: h.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 1,
                            patch: 0
                        },
                        debug: !1
                    };
                t.pageYOffset !== r ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
                var b = function() {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, n, r) {
                        var i = {
                            x: t.x + r.dx * n,
                            v: t.v + r.dv * n,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: i.v,
                            dv: e(i)
                        }
                    }

                    function n(n, r) {
                        var i = {
                                dx: n.v,
                                dv: e(n)
                            },
                            a = t(n, .5 * r, i),
                            o = t(n, .5 * r, a),
                            s = t(n, r, o),
                            l = 1 / 6 * (i.dx + 2 * (a.dx + o.dx) + s.dx),
                            u = 1 / 6 * (i.dv + 2 * (a.dv + o.dv) + s.dv);
                        return n.x = n.x + l * r, n.v = n.v + u * r, n
                    }
                    return function r(e, t, i) {
                        var a = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            o = [0],
                            s = 0,
                            l = 1e-4,
                            u = .016,
                            c, p, d;
                        for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, i = i || null, a.tension = e, a.friction = t, c = null !== i, c ? (s = r(e, t), p = s / i * u) : p = u; d = n(d || a, p), o.push(1 + d.x), s += 16, Math.abs(d.x) > l && Math.abs(d.v) > l;);
                        return c ? function(e) {
                            return o[e * (o.length - 1) | 0]
                        } : s
                    }
                }();
                v.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, $.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(e, t) {
                    v.Easings[t[0]] = l.apply(null, t[1])
                });
                var x = v.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var e = 0; e < x.Lists.colors.length; e++) {
                                var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var n, r, i;
                            if (d)
                                for (n in x.Hooks.templates) {
                                    r = x.Hooks.templates[n], i = r[0].split(" ");
                                    var a = r[1].match(x.RegEx.valueSplit);
                                    "Color" === i[0] && (i.push(i.shift()), a.push(a.shift()), x.Hooks.templates[n] = [i.join(" "), a.join(" ")])
                                }
                            for (n in x.Hooks.templates) {
                                r = x.Hooks.templates[n], i = r[0].split(" ");
                                for (var e in i) {
                                    var o = n + i[e],
                                        s = e;
                                    x.Hooks.registered[o] = [n, s]
                                }
                            }
                        },
                        getRoot: function(e) {
                            var t = x.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var n = x.Hooks.registered[e];
                            if (n) {
                                var r = n[0],
                                    i = n[1];
                                return t = x.Hooks.cleanRootPropertyValue(r, t), t.toString().match(x.RegEx.valueSplit)[i]
                            }
                            return t
                        },
                        injectValue: function(e, t, n) {
                            var r = x.Hooks.registered[e];
                            if (r) {
                                var i = r[0],
                                    a = r[1],
                                    o, s;
                                return n = x.Hooks.cleanRootPropertyValue(i, n), o = n.toString().match(x.RegEx.valueSplit), o[a] = t, s = o.join(" ")
                            }
                            return n
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var r;
                                        return x.RegEx.wrappedValueAlreadyExtracted.test(n) ? r = n : (r = n.toString().match(x.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : n), r;
                                    case "inject":
                                        return "rect(" + n + ")"
                                }
                            },
                            blur: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return "-webkit-filter";
                                    case "extract":
                                        var r = parseFloat(n);
                                        if (!r && 0 !== r) {
                                            var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            r = i ? i[1] : 0
                                        }
                                        return r;
                                    case "inject":
                                        return parseFloat(n) ? "blur(" + n + ")" : "none"
                                }
                            },
                            opacity: function(e, t, n) {
                                if (8 >= d) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return n = r ? r[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                        return n;
                                    case "inject":
                                        return n
                                }
                            }
                        },
                        register: function() {
                            9 >= d || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                            for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                                var t = x.Lists.transformsBase[e];
                                x.Normalizations.registered[t] = function(e, n, i) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return o(n) === r || o(n).transformCache[t] === r ? /^scale/i.test(t) ? 1 : 0 : o(n).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var a = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    a = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    v.State.isAndroid && o(n).transformCache[t] === r && 1 > i && (i = 1), a = !/(\d)$/i.test(i);
                                                    break;
                                                case "skew":
                                                    a = !/(deg|\d)$/i.test(i);
                                                    break;
                                                case "rotate":
                                                    a = !/(deg|\d)$/i.test(i)
                                            }
                                            return a || (o(n).transformCache[t] = "(" + i + ")"), o(n).transformCache[t]
                                    }
                                }
                            }();
                            for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                                var t = x.Lists.colors[e];
                                x.Normalizations.registered[t] = function(e, n, i) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var a;
                                            if (x.RegEx.wrappedValueAlreadyExtracted.test(i)) a = i;
                                            else {
                                                var o, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(i) ? o = s[i] !== r ? s[i] : s.black : x.RegEx.isHex.test(i) ? o = "rgb(" + x.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (o = s.black), a = (o || i).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= d || 3 !== a.split(" ").length || (a += " 1"), a;
                                        case "inject":
                                            return 8 >= d ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (d || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; r > n; n++) {
                                var i;
                                if (i = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                        return e.toUpperCase()
                                    }), h.isString(v.State.prefixElement.style[i])) return v.State.prefixMatches[e] = i, [i, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                                r;
                            return e = e.replace(t, function(e, t, n, r) {
                                return t + t + n + n + r + r
                            }), r = n.exec(e), r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, n, i, a) {
                        function s(e, n) {
                            function i() {
                                u && x.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= d) l = $.css(e, n);
                            else {
                                var u = !1;
                                if (/^(width|height)$/.test(n) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !a) {
                                    if ("height" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                        return i(), c
                                    }
                                    if ("width" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                        return i(), p
                                    }
                                }
                                var f;
                                f = o(e) === r ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), (d || v.State.isFirefox) && "borderColor" === n && (n = "borderTopColor"), l = 9 === d && "filter" === n ? f.getPropertyValue(n) : f[n], ("" === l || null === l) && (l = e.style[n]), i()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                                var h = s(e, "position");
                                ("fixed" === h || "absolute" === h && /top|left/i.test(n)) && (l = $(e).position()[n] + "px")
                            }
                            return l
                        }
                        var l;
                        if (x.Hooks.registered[n]) {
                            var u = n,
                                c = x.Hooks.getRoot(u);
                            i === r && (i = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (i = x.Normalizations.registered[c]("extract", e, i)), l = x.Hooks.extractValue(u, i)
                        } else if (x.Normalizations.registered[n]) {
                            var p, f;
                            p = x.Normalizations.registered[n]("name", e), "transform" !== p && (f = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(f) && x.Hooks.templates[n] && (f = x.Hooks.templates[n][1])), l = x.Normalizations.registered[n]("extract", e, f)
                        }
                        return /^[\d-]/.test(l) || (l = o(e) && o(e).isSVG && x.Names.SVGAttribute(n) ? /^(height|width)$/i.test(n) ? e.getBBox()[n] : e.getAttribute(n) : s(e, x.Names.prefixCheck(n)[0])), x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + n + ": " + l), l
                    },
                    setPropertyValue: function(e, n, r, i, a) {
                        var s = n;
                        if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = r : "Left" === a.direction ? t.scrollTo(r, a.alternateValue) : t.scrollTo(a.alternateValue, r);
                        else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", e)) x.Normalizations.registered[n]("inject", e, r), s = "transform", r = o(e).transformCache[n];
                        else {
                            if (x.Hooks.registered[n]) {
                                var l = n,
                                    u = x.Hooks.getRoot(n);
                                i = i || x.getPropertyValue(e, u), r = x.Hooks.injectValue(l, r, i), n = u
                            }
                            if (x.Normalizations.registered[n] && (r = x.Normalizations.registered[n]("inject", e, r), n = x.Normalizations.registered[n]("name", e)), s = x.Names.prefixCheck(n)[0], 8 >= d) try {
                                e.style[s] = r
                            } catch (c) {
                                v.debug && console.log("Browser does not support [" + r + "] for [" + s + "]")
                            } else o(e) && o(e).isSVG && x.Names.SVGAttribute(n) ? e.setAttribute(n, r) : e.style[s] = r;
                            v.debug >= 2 && console.log("Set " + n + " (" + s + "): " + r)
                        }
                        return [s, r]
                    },
                    flushTransformCache: function(e) {
                        function t(t) {
                            return parseFloat(x.getPropertyValue(e, t))
                        }
                        var n = "";
                        if ((d || v.State.isAndroid && !v.State.isChrome) && o(e).isSVG) {
                            var r = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            $.each(o(e).transformCache, function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), r[e] && (n += e + "(" + r[e].join(" ") + ") ", delete r[e])
                            })
                        } else {
                            var i, a;
                            $.each(o(e).transformCache, function(t) {
                                return i = o(e).transformCache[t], "transformPerspective" === t ? (a = i, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(n += t + i + " "))
                            }), a && (n = "perspective" + a + " " + n)
                        }
                        x.setPropertyValue(e, "transform", n)
                    }
                };
                x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, n) {
                    var i = r;
                    return e = a(e), $.each(e, function(e, a) {
                        if (o(a) === r && v.init(a), n === r) i === r && (i = v.CSS.getPropertyValue(a, t));
                        else {
                            var s = v.CSS.setPropertyValue(a, t, n);
                            "transform" === s[0] && v.CSS.flushTransformCache(a), i = s
                        }
                    }), i
                };
                var w = function() {
                    function e() {
                        return d ? D.promise || null : f
                    }

                    function s() {
                        function e(e) {
                            function d(e, t) {
                                var n = r,
                                    i = r,
                                    o = r;
                                return h.isArray(e) ? (n = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? o = e[1] : (h.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (i = t ? e[1] : u(e[1], s.duration), e[2] !== r && (o = e[2]))) : n = e, t || (i = i || s.easing), h.isFunction(n) && (n = n.call(a, C, S)), h.isFunction(o) && (o = o.call(a, C, S)), [n || 0, i, o]
                            }

                            function f(e, t) {
                                var n, r;
                                return r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                    return n = e, ""
                                }), n || (n = x.Values.getUnitType(e)), [r, n]
                            }

                            function g() {
                                var e = {
                                        myParent: a.parentNode || n.body,
                                        position: x.getPropertyValue(a, "position"),
                                        fontSize: x.getPropertyValue(a, "fontSize")
                                    },
                                    r = e.position === V.lastPosition && e.myParent === V.lastParent,
                                    i = e.fontSize === V.lastFontSize;
                                V.lastParent = e.myParent, V.lastPosition = e.position, V.lastFontSize = e.fontSize;
                                var s = 100,
                                    l = {};
                                if (i && r) l.emToPx = V.lastEmToPx, l.percentToPxWidth = V.lastPercentToPxWidth, l.percentToPxHeight = V.lastPercentToPxHeight;
                                else {
                                    var u = o(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                    v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                        v.CSS.setPropertyValue(u, t, "hidden")
                                    }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                        v.CSS.setPropertyValue(u, t, s + "%")
                                    }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = V.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = V.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = V.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                                }
                                return null === V.remToPx && (V.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16), null === V.vwToPx && (V.vwToPx = parseFloat(t.innerWidth) / 100, V.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = V.remToPx, l.vwToPx = V.vwToPx, l.vhToPx = V.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                            }
                            if (s.begin && 0 === C) try {
                                s.begin.call(y, y)
                            } catch (m) {
                                setTimeout(function() {
                                    throw m
                                }, 1)
                            }
                            if ("scroll" === N) {
                                var w = /^x$/i.test(s.axis) ? "Left" : "Top",
                                    k = parseFloat(s.offset) || 0,
                                    E, A, P;
                                s.container ? h.isWrapped(s.container) || h.isNode(s.container) ? (s.container = s.container[0] || s.container, E = s.container["scroll" + w], P = E + $(a).position()[w.toLowerCase()] + k) : s.container = null : (E = v.State.scrollAnchor[v.State["scrollProperty" + w]], A = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === w ? "Top" : "Left")]], P = $(a).offset()[w.toLowerCase()] + k), l = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: E,
                                        currentValue: E,
                                        endValue: P,
                                        unitType: "",
                                        easing: s.easing,
                                        scrollData: {
                                            container: s.container,
                                            direction: w,
                                            alternateValue: A
                                        }
                                    },
                                    element: a
                                }, v.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                            } else if ("reverse" === N) {
                                if (!o(a).tweensContainer) return void $.dequeue(a, s.queue);
                                "none" === o(a).opts.display && (o(a).opts.display = "auto"), "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"), o(a).opts.loop = !1, o(a).opts.begin = null, o(a).opts.complete = null, T.easing || delete s.easing, T.duration || delete s.duration, s = $.extend({}, o(a).opts, s);
                                var O = $.extend(!0, {}, o(a).tweensContainer);
                                for (var L in O)
                                    if ("element" !== L) {
                                        var j = O[L].startValue;
                                        O[L].startValue = O[L].currentValue = O[L].endValue, O[L].endValue = j, h.isEmptyObject(T) || (O[L].easing = s.easing), v.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(O[L]), a)
                                    }
                                l = O
                            } else if ("start" === N) {
                                var O;
                                o(a).tweensContainer && o(a).isAnimating === !0 && (O = o(a).tweensContainer), $.each(b, function(e, t) {
                                    if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                        var n = d(t, !0),
                                            i = n[0],
                                            a = n[1],
                                            o = n[2];
                                        if (x.RegEx.isHex.test(i)) {
                                            for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(i), u = o ? x.Values.hexToRgb(o) : r, c = 0; c < s.length; c++) {
                                                var p = [l[c]];
                                                a && p.push(a), u !== r && p.push(u[c]), b[e + s[c]] = p
                                            }
                                            delete b[e]
                                        }
                                    }
                                });
                                for (var M in b) {
                                    var F = d(b[M]),
                                        X = F[0],
                                        R = F[1],
                                        I = F[2];
                                    M = x.Names.camelCase(M);
                                    var q = x.Hooks.getRoot(M),
                                        Y = !1;
                                    if (o(a).isSVG || x.Names.prefixCheck(q)[1] !== !1 || x.Normalizations.registered[q] !== r) {
                                        (s.display !== r && null !== s.display && "none" !== s.display || s.visibility !== r && "hidden" !== s.visibility) && /opacity|filter/.test(M) && !I && 0 !== X && (I = 0), s._cacheValues && O && O[M] ? (I === r && (I = O[M].endValue + O[M].unitType), Y = o(a).rootPropertyValueCache[q]) : x.Hooks.registered[M] ? I === r ? (Y = x.getPropertyValue(a, q), I = x.getPropertyValue(a, M, Y)) : Y = x.Hooks.templates[q][1] : I === r && (I = x.getPropertyValue(a, M));
                                        var B, _, z, W = !1;
                                        if (B = f(M, I), I = B[0], z = B[1], B = f(M, X), X = B[0].replace(/^([+-\/*])=/, function(e, t) {
                                                return W = t, ""
                                            }), _ = B[1], I = parseFloat(I) || 0, X = parseFloat(X) || 0, "%" === _ && (/^(fontSize|lineHeight)$/.test(M) ? (X /= 100, _ = "em") : /^scale/.test(M) ? (X /= 100, _ = "") : /(Red|Green|Blue)$/i.test(M) && (X = X / 100 * 255, _ = "")), /[\/*]/.test(W)) _ = z;
                                        else if (z !== _ && 0 !== I)
                                            if (0 === X) _ = z;
                                            else {
                                                p = p || g();
                                                var U = /margin|padding|left|right|width|text|word|letter/i.test(M) || /X$/.test(M) || "x" === M ? "x" : "y";
                                                switch (z) {
                                                    case "%":
                                                        I *= "x" === U ? p.percentToPxWidth : p.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        I *= p[z + "ToPx"]
                                                }
                                                switch (_) {
                                                    case "%":
                                                        I *= 1 / ("x" === U ? p.percentToPxWidth : p.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        I *= 1 / p[_ + "ToPx"]
                                                }
                                            }
                                        switch (W) {
                                            case "+":
                                                X = I + X;
                                                break;
                                            case "-":
                                                X = I - X;
                                                break;
                                            case "*":
                                                X = I * X;
                                                break;
                                            case "/":
                                                X = I / X
                                        }
                                        l[M] = {
                                            rootPropertyValue: Y,
                                            startValue: I,
                                            currentValue: I,
                                            endValue: X,
                                            unitType: _,
                                            easing: R
                                        }, v.debug && console.log("tweensContainer (" + M + "): " + JSON.stringify(l[M]), a)
                                    } else v.debug && console.log("Skipping [" + q + "] due to a lack of browser support.")
                                }
                                l.element = a
                            }
                            l.element && (x.Values.addClass(a, "velocity-animating"), H.push(l), "" === s.queue && (o(a).tweensContainer = l, o(a).opts = s), o(a).isAnimating = !0, C === S - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = i(v.State.calls)), v.State.calls.push([H, y, s, null, D.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : C++)
                        }
                        var a = this,
                            s = $.extend({}, v.defaults, T),
                            l = {},
                            p;
                        switch (o(a) === r && v.init(a), parseFloat(s.delay) && s.queue !== !1 && $.queue(a, s.queue, function(e) {
                            v.velocityQueueEntryFlag = !0, o(a).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(s.delay)),
                                next: e
                            }
                        }), s.duration.toString().toLowerCase()) {
                            case "fast":
                                s.duration = 200;
                                break;
                            case "normal":
                                s.duration = m;
                                break;
                            case "slow":
                                s.duration = 600;
                                break;
                            default:
                                s.duration = parseFloat(s.duration) || 1
                        }
                        v.mock !== !1 && (v.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(v.mock) || 1, s.delay *= parseFloat(v.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !h.isFunction(s.begin) && (s.begin = null), s.progress && !h.isFunction(s.progress) && (s.progress = null), s.complete && !h.isFunction(s.complete) && (s.complete = null), s.display !== r && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = v.CSS.Values.getDisplayType(a))), s.visibility !== r && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : $.queue(a, s.queue, function(t, n) {
                            return n === !0 ? (D.promise && D.resolver(y), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === $.queue(a)[0] || $.dequeue(a)
                    }
                    var l = arguments[0] && ($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties)),
                        d, f, g, y, b, T;
                    if (h.isWrapped(this) ? (d = !1, g = 0, y = this, f = this) : (d = !0, g = 1, y = l ? arguments[0].elements : arguments[0]), y = a(y)) {
                        l ? (b = arguments[0].properties, T = arguments[0].options) : (b = arguments[g], T = arguments[g + 1]);
                        var S = y.length,
                            C = 0;
                        if ("stop" !== b && !$.isPlainObject(T)) {
                            var k = g + 1;
                            T = {};
                            for (var E = k; E < arguments.length; E++) h.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? h.isString(arguments[E]) || h.isArray(arguments[E]) ? T.easing = arguments[E] : h.isFunction(arguments[E]) && (T.complete = arguments[E]) : T.duration = arguments[E]
                        }
                        var D = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        d && v.Promise && (D.promise = new v.Promise(function(e, t) {
                            D.resolver = e, D.rejecter = t
                        }));
                        var N;
                        switch (b) {
                            case "scroll":
                                N = "scroll";
                                break;
                            case "reverse":
                                N = "reverse";
                                break;
                            case "stop":
                                $.each(y, function(e, t) {
                                    o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer)
                                });
                                var A = [];
                                return $.each(v.State.calls, function(e, t) {
                                    t && $.each(t[1], function(n, i) {
                                        var a = h.isString(T) ? T : "";
                                        return T !== r && t[2].queue !== a ? !0 : void $.each(y, function(t, n) {
                                            n === i && (T !== r && ($.each($.queue(n, a), function(e, t) {
                                                h.isFunction(t) && t(null, !0)
                                            }), $.queue(n, a, [])), o(n) && "" === a && $.each(o(n).tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), A.push(e))
                                        })
                                    })
                                }), $.each(A, function(e, t) {
                                    p(t, !0)
                                }), D.promise && D.resolver(y), e();
                            default:
                                if (!$.isPlainObject(b) || h.isEmptyObject(b)) {
                                    if (h.isString(b) && v.Redirects[b]) {
                                        var P = $.extend({}, T),
                                            O = P.duration,
                                            L = P.delay || 0;
                                        return P.backwards === !0 && (y = $.extend(!0, [], y).reverse()), $.each(y, function(e, t) {
                                            parseFloat(P.stagger) ? P.delay = L + parseFloat(P.stagger) * e : h.isFunction(P.stagger) && (P.delay = L + P.stagger.call(t, e, S)), P.drag && (P.duration = parseFloat(O) || (/^(callout|transition)/.test(b) ? 1e3 : m), P.duration = Math.max(P.duration * (P.backwards ? 1 - e / S : (e + 1) / S), .75 * P.duration, 200)), v.Redirects[b].call(t, t, P || {}, e, S, y, D.promise ? D : r)
                                        }), e()
                                    }
                                    var j = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return D.promise ? D.rejecter(new Error(j)) : console.log(j), e()
                                }
                                N = "start"
                        }
                        var V = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            H = [];
                        $.each(y, function(e, t) {
                            h.isNode(t) && s.call(t)
                        });
                        var P = $.extend({}, v.defaults, T),
                            M;
                        if (P.loop = parseInt(P.loop), M = 2 * P.loop - 1, P.loop)
                            for (var F = 0; M > F; F++) {
                                var X = {
                                    delay: P.delay,
                                    progress: P.progress
                                };
                                F === M - 1 && (X.display = P.display, X.visibility = P.visibility, X.complete = P.complete), w(y, "reverse", X)
                            }
                        return e()
                    }
                };
                v = $.extend(w, v), v.animate = w;
                var T = t.requestAnimationFrame || f;
                return v.State.isMobile || n.hidden === r || n.addEventListener("visibilitychange", function() {
                    n.hidden ? (T = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, c()) : T = t.requestAnimationFrame || f
                }), e.Velocity = v, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
                    v.Redirects["slide" + t] = function(e, n, i, a, o, s) {
                        var l = $.extend({}, n),
                            u = l.begin,
                            c = l.complete,
                            p = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            d = {};
                        l.display === r && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                            u && u.call(o, o);
                            for (var n in p) {
                                d[n] = e.style[n];
                                var r = v.CSS.getPropertyValue(e, n);
                                p[n] = "Down" === t ? [r, 0] : [0, r]
                            }
                            d.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var t in d) e.style[t] = d[t];
                            c && c.call(o, o), s && s.resolver(o)
                        }, v(e, p, l)
                    }
                }), $.each(["In", "Out"], function(e, t) {
                    v.Redirects["fade" + t] = function(e, n, i, a, o, s) {
                        var l = $.extend({}, n),
                            u = {
                                opacity: "In" === t ? 1 : 0
                            },
                            c = l.complete;
                        l.complete = i !== a - 1 ? l.begin = null : function() {
                            c && c.call(o, o), s && s.resolver(o)
                        }, l.display === r && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
                    }
                }), v
            }(window.jQuery || window.Zepto || window, window, document)
        })), window.jQuery.Velocity.RunSequence || /* VelocityJS.org UI Pack (5.0.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
    ! function(e) {
        "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
    }(function() {
        return function(e, t, n, r) {
            function i(e, t) {
                var n = [];
                return e && t ? ($.each([e, t], function(e, t) {
                    var r = [];
                    $.each(t, function(e, t) {
                        for (; t.toString().length < 5;) t = "0" + t;
                        r.push(t)
                    }), n.push(r.join(""))
                }), parseFloat(n[0]) > parseFloat(n[1])) : !1
            }
            if (!e.Velocity || !e.Velocity.Utilities) return void(t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
            var a = e.Velocity,
                $ = a.Utilities,
                o = a.version,
                s = {
                    major: 1,
                    minor: 1,
                    patch: 0
                };
            if (i(s, o)) {
                var l = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
                throw alert(l), new Error(l)
            }
            a.RegisterEffect = a.RegisterUI = function(e, t) {
                function n(e, t, n, r) {
                    var i = 0,
                        o;
                    $.each(e.nodeType ? [e] : e, function(e, t) {
                        r && (n += e * r), o = t.parentNode, $.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(e, n) {
                            i += parseFloat(a.CSS.getPropertyValue(t, n))
                        })
                    }), a.animate(o, {
                        height: ("In" === t ? "+" : "-") + "=" + i
                    }, {
                        queue: !1,
                        easing: "ease-in-out",
                        duration: n * ("In" === t ? .6 : 1)
                    })
                }
                return a.Redirects[e] = function(i, o, s, l, u, c) {
                    function p() {
                        o.display !== r && "none" !== o.display || !/Out$/.test(e) || $.each(u.nodeType ? [u] : u, function(e, t) {
                            a.CSS.setPropertyValue(t, "display", "none")
                        }), o.complete && o.complete.call(u, u), c && c.resolver(u || i)
                    }
                    var d = s === l - 1;
                    t.defaultDuration = "function" == typeof t.defaultDuration ? t.defaultDuration.call(u, u) : parseFloat(t.defaultDuration);
                    for (var f = 0; f < t.calls.length; f++) {
                        var h = t.calls[f],
                            g = h[0],
                            m = o.duration || t.defaultDuration || 1e3,
                            y = h[1],
                            v = h[2] || {},
                            b = {};
                        if (b.duration = m * (y || 1), b.queue = o.queue || "", b.easing = v.easing || "ease", b.delay = parseFloat(v.delay) || 0, b._cacheValues = v._cacheValues || !0, 0 === f) {
                            if (b.delay += parseFloat(o.delay) || 0, 0 === s && (b.begin = function() {
                                    o.begin && o.begin.call(u, u);
                                    var t = e.match(/(In|Out)$/);
                                    t && "In" === t[0] && g.opacity !== r && $.each(u.nodeType ? [u] : u, function(e, t) {
                                        a.CSS.setPropertyValue(t, "opacity", 0)
                                    }), o.animateParentHeight && t && n(u, t[0], m + b.delay, o.stagger)
                                }), null !== o.display)
                                if (o.display !== r && "none" !== o.display) b.display = o.display;
                                else if (/In$/.test(e)) {
                                var x = a.CSS.Values.getDisplayType(i);
                                b.display = "inline" === x ? "inline-block" : x
                            }
                            o.visibility && "hidden" !== o.visibility && (b.visibility = o.visibility)
                        }
                        f === t.calls.length - 1 && (b.complete = function() {
                            if (t.reset) {
                                for (var e in t.reset) {
                                    var n = t.reset[e];
                                    a.CSS.Hooks.registered[e] !== r || "string" != typeof n && "number" != typeof n || (t.reset[e] = [t.reset[e], t.reset[e]])
                                }
                                var o = {
                                    duration: 0,
                                    queue: !1
                                };
                                d && (o.complete = p), a.animate(i, t.reset, o)
                            } else d && p()
                        }, "hidden" === o.visibility && (b.visibility = o.visibility)), a.animate(i, g, b)
                    }
                }, a
            }, a.RegisterEffect.packagedEffects = {
                "callout.bounce": {
                    defaultDuration: 550,
                    calls: [
                        [{
                            translateY: -30
                        }, .25],
                        [{
                            translateY: 0
                        }, .125],
                        [{
                            translateY: -15
                        }, .125],
                        [{
                            translateY: 0
                        }, .25]
                    ]
                },
                "callout.shake": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 0
                        }, .125]
                    ]
                },
                "callout.flash": {
                    defaultDuration: 1100,
                    calls: [
                        [{
                            opacity: [0, "easeInOutQuad", 1]
                        }, .25],
                        [{
                            opacity: [1, "easeInOutQuad"]
                        }, .25],
                        [{
                            opacity: [0, "easeInOutQuad"]
                        }, .25],
                        [{
                            opacity: [1, "easeInOutQuad"]
                        }, .25]
                    ]
                },
                "callout.pulse": {
                    defaultDuration: 825,
                    calls: [
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1
                        }, .5],
                        [{
                            scaleX: 1,
                            scaleY: 1
                        }, .5]
                    ]
                },
                "callout.swing": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            rotateZ: 15
                        }, .2],
                        [{
                            rotateZ: -10
                        }, .2],
                        [{
                            rotateZ: 5
                        }, .2],
                        [{
                            rotateZ: -5
                        }, .2],
                        [{
                            rotateZ: 0
                        }, .2]
                    ]
                },
                "callout.tada": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            scaleX: .9,
                            scaleY: .9,
                            rotateZ: -3
                        }, .1],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            rotateZ: 3
                        }, .1],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            rotateZ: -3
                        }, .1],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        [{
                            scaleX: 1,
                            scaleY: 1,
                            rotateZ: 0
                        }, .2]
                    ]
                },
                "transition.fadeIn": {
                    defaultDuration: 500,
                    calls: [
                        [{
                            opacity: [1, 0]
                        }]
                    ]
                },
                "transition.fadeOut": {
                    defaultDuration: 500,
                    calls: [
                        [{
                            opacity: [0, 1]
                        }]
                    ]
                },
                "transition.flipXIn": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            rotateY: [0, -55]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipXOut": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            rotateY: 55
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateY: 0
                    }
                },
                "transition.flipYIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            rotateX: [0, -45]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipYOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            rotateX: 25
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateX: 0
                    }
                },
                "transition.flipBounceXIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [.725, 0],
                            transformPerspective: [400, 400],
                            rotateY: [-10, 90]
                        }, .5],
                        [{
                            opacity: .8,
                            rotateY: 10
                        }, .25],
                        [{
                            opacity: 1,
                            rotateY: 0
                        }, .25]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipBounceXOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [.9, 1],
                            transformPerspective: [400, 400],
                            rotateY: -10
                        }, .5],
                        [{
                            opacity: 0,
                            rotateY: 90
                        }, .5]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateY: 0
                    }
                },
                "transition.flipBounceYIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [.725, 0],
                            transformPerspective: [400, 400],
                            rotateX: [-10, 90]
                        }, .5],
                        [{
                            opacity: .8,
                            rotateX: 10
                        }, .25],
                        [{
                            opacity: 1,
                            rotateX: 0
                        }, .25]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipBounceYOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [.9, 1],
                            transformPerspective: [400, 400],
                            rotateX: -15
                        }, .5],
                        [{
                            opacity: 0,
                            rotateX: 90
                        }, .5]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateX: 0
                    }
                },
                "transition.swoopIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["100%", "50%"],
                            transformOriginY: ["100%", "100%"],
                            scaleX: [1, 0],
                            scaleY: [1, 0],
                            translateX: [0, -700],
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.swoopOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "100%"],
                            transformOriginY: ["100%", "100%"],
                            scaleX: 0,
                            scaleY: 0,
                            translateX: -700,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0
                    }
                },
                "transition.whirlIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, 0],
                            scaleY: [1, 0],
                            rotateY: [0, 160]
                        }, 1, {
                            easing: "easeInOutSine"
                        }]
                    ]
                },
                "transition.whirlOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, "easeInOutQuint", 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: 0,
                            scaleY: 0,
                            rotateY: 160
                        }, 1, {
                            easing: "swing"
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1,
                        rotateY: 0
                    }
                },
                "transition.shrinkIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, 1.5],
                            scaleY: [1, 1.5],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.shrinkOut": {
                    defaultDuration: 600,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: 1.3,
                            scaleY: 1.3,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.expandIn": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, .625],
                            scaleY: [1, .625],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.expandOut": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: .5,
                            scaleY: .5,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.bounceIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            scaleX: [1.05, .3],
                            scaleY: [1.05, .3]
                        }, .4],
                        [{
                            scaleX: .9,
                            scaleY: .9,
                            translateZ: 0
                        }, .2],
                        [{
                            scaleX: 1,
                            scaleY: 1
                        }, .5]
                    ]
                },
                "transition.bounceOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            scaleX: .95,
                            scaleY: .95
                        }, .35],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            translateZ: 0
                        }, .35],
                        [{
                            opacity: [0, 1],
                            scaleX: .3,
                            scaleY: .3
                        }, .3]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.bounceUpIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [-30, 1e3]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateY: 10
                        }, .2],
                        [{
                            translateY: 0
                        }, .2]
                    ]
                },
                "transition.bounceUpOut": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            translateY: 20
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateY: -1e3
                        }, .8]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.bounceDownIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [30, -1e3]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateY: -10
                        }, .2],
                        [{
                            translateY: 0
                        }, .2]
                    ]
                },
                "transition.bounceDownOut": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            translateY: -20
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateY: 1e3
                        }, .8]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.bounceLeftIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [30, -1250]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateX: -10
                        }, .2],
                        [{
                            translateX: 0
                        }, .2]
                    ]
                },
                "transition.bounceLeftOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            translateX: 30
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateX: -1250
                        }, .8]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.bounceRightIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [-30, 1250]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateX: 10
                        }, .2],
                        [{
                            translateX: 0
                        }, .2]
                    ]
                },
                "transition.bounceRightOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            translateX: -30
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateX: 1250
                        }, .8]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideUpIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, 20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideUpOut": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: -20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideDownIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, -20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideDownOut": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: 20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideLeftIn": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, -20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideLeftOut": {
                    defaultDuration: 1050,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: -20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideRightIn": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, 20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideRightOut": {
                    defaultDuration: 1050,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: 20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideUpBigIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, 75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideUpBigOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: -75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideDownBigIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, -75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideDownBigOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: 75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideLeftBigIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, -75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideLeftBigOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: -75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideRightBigIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, 75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideRightBigOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: 75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.perspectiveUpIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: ["100%", "100%"],
                            rotateX: [0, -180]
                        }]
                    ]
                },
                "transition.perspectiveUpOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: ["100%", "100%"],
                            rotateX: -180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateX: 0
                    }
                },
                "transition.perspectiveDownIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateX: [0, 180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveDownOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateX: 180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateX: 0
                    }
                },
                "transition.perspectiveLeftIn": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateY: [0, -180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveLeftOut": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateY: -180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateY: 0
                    }
                },
                "transition.perspectiveRightIn": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: ["100%", "100%"],
                            transformOriginY: [0, 0],
                            rotateY: [0, 180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveRightOut": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: ["100%", "100%"],
                            transformOriginY: [0, 0],
                            rotateY: 180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateY: 0
                    }
                }
            };
            for (var u in a.RegisterEffect.packagedEffects) a.RegisterEffect(u, a.RegisterEffect.packagedEffects[u]);
            a.RunSequence = function(e) {
                var t = $.extend(!0, [], e);
                t.length > 1 && ($.each(t.reverse(), function(e, n) {
                    var r = t[e + 1];
                    if (r) {
                        var i = n.options && n.options.sequenceQueue === !1 ? "begin" : "complete",
                            o = r.options && r.options[i],
                            s = {};
                        s[i] = function() {
                            var e = r.elements.nodeType ? [r.elements] : r.elements;
                            o && o.call(e, e), a(n)
                        }, r.options = $.extend({}, r.options, s)
                    }
                }), t.reverse()), a(t[0])
            }
        }(window.jQuery || window.Zepto || window, window, document)
    });
var alphabetIndex = 64,
    propertiesMapDefault = "{ }",
    $body = $("body"),
    VERSION = "1.0.0-rc1",
    INDICATOR_COLOR = "#82E682",
    DURATION_DEFAULT = 800,
    EASING_DEFAULT = "swing",
    DELAY_DEFAULT = 0,
    instructions = ["Velocity Motion Designer " + VERSION + ". http://VelocityJS.org", " * Note: All HREF links are disabled.", ' * Note: Refer to "CSS Support" on http://VelocityJS.org for supported properties.', " * Note: You have access to all UI pack effects: http://VelocityJS.org/#uiPack.", " - Double click on an element: Initialize.", " - Double click on an overlay: De-initialize.", " - Click on a key identifier: Toggle looping.", " - Enter key (when modifying animation parameters): Animate.", " - a-z keys: Restart/reset the associated animation.", " - 1 key: Restart all animations.", " - 2 key: Reset all animations.", " - Esc key: Close visible modal."];
$.each(instructions, function(e, t) {
    console.log(t)
}), document.title = "[ VMD ] " + document.title, $body.on("click", function(e) {
    e.preventDefault()
}), $("<style></style>").html("overlay.VMD *, keycodes * { " + ["color: #000;", "font-size: 1rem;", "font-weight: normal;", "font-family: Helvetica Neue;", "line-height: 1rem;", "text-transform: none;", "text-decoration: none;", "font-style: normal;", "font-variant: normal;", "text-align: left;", "text-overflow: show;", "text-shadow: none;"].join("") + " } ").appendTo($("head"));
var $keyCodes = $("<keycodes></keycodes>");
$keyCodes.css({
    position: "fixed",
    top: "0.85rem",
    right: "0.45rem",
    color: "#fff",
    fontFamily: "Helvetica Neue, Helvetica",
    fontWeight: 100,
    zIndex: 1e4,
    userSelect: "none"
}), $.each(["start", "stop"], function(e, t) {
    $("<keycode></keycode>").html(e + 1).attr("title", e ? "Reset" : "Restart").css({
        cursor: "default",
        background: "rgb(15, 15, 15)",
        background: "rgb(25, 30, 30)",
        margin: "0.2rem",
        padding: "0.15rem 0.4rem",
        color: "start" === t ? "rgb(130, 230, 130)" : "rgb(240, 120, 120)",
        border: "1px solid " + (e ? "rgb(240, 100, 100)" : "rgb(100, 230, 100)"),
        boxShadow: "inset 0px 0px 10px 0px " + (e ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 255, 0, 0.50)"),
        textShadow: "0px 0px 2px " + (e ? "rgba(255, 0, 0, 1)" : "rgba(0, 255, 0, 0.85)")
    }).appendTo($keyCodes)
}), $keyCodes.appendTo($body), $body.on("mouseover", function(e) {
    var t = $(e.target);
    t.closest("overlay.VMD").length || t.css("outline", "1px solid rgb(100, 100, 100)")
}).on("mouseout", function(e) {
    $(e.target).css("outline", "")
}), $body.dblclick(function(e) {
    var t = $(e.target),
        n = t.closest("overlay.VMD");
    if (void 0 === n.data("overlay"))
        if (t.is("overlay.VMD code[name='propertiesMap']")) {
            updateParameters(n);
            var r = getElementLabel(n.parent()),
                i = t.text(),
                a = $.extend({}, n.data("VMD").options);
            "swing" === a.easing && delete a.easing, 0 == a.delay && delete a.delay, delete a.loop, delete a.begin, delete a.complete, a = objectToString(a), console.log('$("' + r + '").velocity(' + i + ", " + a + ");")
        } else if (!n.length && !t.is("keycode, keycodes")) {
        alphabetIndex++;
        var o = $("<modal></modal>");
        o.css({
            position: "absolute",
            left: "50%",
            marginLeft: "-6rem",
            width: "300px",
            minHeight: "150px",
            backgroundColor: "white",
            borderRadius: "3px",
            boxShadow: "0px 0px 3px 0px rgba(50, 50, 65, 0.5)",
            padding: "0.6rem 0.5rem 0.5rem 0.5rem",
            opacity: "0.975"
        }).addClass("draggableModal");
        var s = $("<span></span>");
        s.attr("name", "key").css({
            position: "absolute",
            top: 0,
            right: 0,
            padding: "0.15rem 0.4rem 0.10rem 0.4rem",
            fontSize: "0.5rem",
            textTransform: "uppercase",
            color: "#fff",
            textShadow: "0px 0px 3px rgb(25, 25, 50), 0px 0px 5px rgb(25, 25, 50), 0px 0px 8px rgb(25, 25, 50)",
            zIndex: 1,
            cursor: "default",
            userSelect: "none"
        }).html(String.fromCharCode(alphabetIndex));
        var l = $("<div></div>");
        l.html(getElementLabel(t)).css({
            cursor: "default",
            color: "#5a96df",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "0.9rem",
            marginBottom: "0.5rem"
        }).appendTo(o), $("<code></code>").attr("name", "propertiesMap").css({
            display: "block",
            fontSize: "0.8rem",
            fontFamily: "monospace",
            background: "rgb(50, 65, 65)",
            padding: "0.35rem",
            textAlign: "center",
            color: "#fff",
            textShadow: "0px 0px 1px rgb(50, 50, 50)",
            marginBottom: "0.4rem"
        }).prop("contenteditable", !0).prop("spellcheck", !1).html(propertiesMapDefault).appendTo(o);
        var u = $("<table></table>");
        u.attr("name", "options").appendTo(o);
        var c = $("<input type='range' />").attr({
                name: "duration",
                min: "100",
                max: "4000",
                value: DURATION_DEFAULT,
                step: "50"
            }).css({
                width: "6.5rem"
            }).wrap("<td />").parent().add("<td style='cursor: default; text-align: right; width: 100%;'>" + DURATION_DEFAULT + "ms</td>").wrapAll("<tr></tr>").parent().appendTo(u),
            p = $("<input type='range' />").attr({
                name: "delay",
                min: "0",
                max: "2000",
                value: DELAY_DEFAULT,
                step: "25"
            }).css({
                width: "6.5rem"
            }).wrap("<td />").parent().add("<td style='cursor: default; text-align: right; width: 100%;'>" + DELAY_DEFAULT + "ms</td>").wrapAll("<tr></tr>").parent().appendTo(u),
            d = $("<select></select>").attr("name", "easing").css({
                backgroundColor: "transparent",
                border: "none",
                width: "6.5rem",
                fontSize: "0.85rem"
            }).wrap("<td />").parent(),
            f = $("<code></code>").attr("name", "easingArray").css({
                display: "none",
                fontSize: "0.5rem",
                fontFamily: "monospace",
                background: "rgb(50, 65, 65)",
                padding: "0.35rem",
                textAlign: "center",
                color: "#fff",
                textShadow: "0px 0px 1px rgb(50, 50, 50)"
            }).prop({
                contenteditable: "true",
                spellcheck: "false"
            }).wrap("<td />").parent();
        d.add(f).wrapAll("<tr></tr>").parent().appendTo(u), $("<option></option>").attr({
            "data-array": "true",
            value: "[500,20]"
        }).html("spring physics...").appendTo(d.children()), $("<option></option>").attr({
            "data-array": "true",
            value: "[.25,1,.25,1]"
        }).html("cubic bezier...").appendTo(d.children()), $("<option></option>").attr({
            "data-array": "true",
            value: "[ 4 ]"
        }).html("step...").appendTo(d.children()), $.each($.Velocity.Easings, function(e) {
            $("<option></option>").attr({
                name: e,
                value: e
            }).prop({
                selected: e === EASING_DEFAULT
            }).html(e).appendTo(d.children())
        });
        var n = $("<overlay></overlay>").attr("id", "overlay-" + alphabetIndex).css({
            width: "100%",
            left: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            zIndex: 10001
        }).addClass("VMD").data("VMD", {
            mouse: "enter",
            propertiesMap: {},
            options: {
                duration: DURATION_DEFAULT,
                delay: DELAY_DEFAULT,
                easing: EASING_DEFAULT,
                loop: !1,
                begin: function(e) {
                    $.each(e, function(e, t) {
                        clearElementStyles(t)
                    }), $(this).find("overlay.VMD code[name='propertiesMap']").velocity("stop", !0).velocity({
                        color: INDICATOR_COLOR
                    }, 75).velocity("reverse")
                },
                complete: function(e) {
                    var t = $('.VMD-Area'),
                        n = t.find("overlay.VMD").data("VMD").propertiesMap,
                        r = t.find("overlay.VMD").data("VMD").options;
                    r.loop === !0 && "string" == typeof n && $.each(e, function(e, t) {
                        $(this).velocity(n, r)
                    })
                }
            }
        }).append(s).append(o).appendTo($('.VMD-Area')).velocity("fadeIn", "fast"); // add to a div other than the one you clicked on
		t.attr({"data-VDM-id":alphabetIndex}); // add a unique id to the clicked on div
        "static" === n.parent().css("position") && n.parent().css("position", "relative")
    }
}), $body.on("click", "overlay.VMD span[name='key']", function() {
    var e = $(this),
        t = e.closest("overlay.VMD"),
        n = !t.data("VMD").options.loop;
    t.data("VMD").options.loop = n, e.css({
        color: n ? INDICATOR_COLOR : "#fff"
    }), clearElementStyles(t.parent()[0])
}).on("dblclick", "overlay.VMD", function(e) {
    if ($(e.target).not("code[name='propertiesMap']").length) {
        var t = $(this).closest("overlay.VMD"),
            n = t.parent();
        n.removeData("overlay").velocity("stop", !0), t.remove(), clearElementStyles(n[0])
    }
}).on("change", "overlay.VMD select[name='easing']", function() {
    var e = $(this),
        t = e.closest("overlay.VMD");
    e.find(":selected").attr("data-array") ? e.parent().siblings().children("code[name='easingArray']").html(e.val()).show() : e.siblings("code[name='easingArray']").hide()
}).on("input", "overlay.VMD input[name='duration'], overlay.VMD input[name='delay']", function() {
    var e = $(this);
    e.parent().siblings().html(e.val() + "ms")
}), $body.on("mouseenter", "*", function() {
    var e = $(this).children("overlay.VMD");
    e.length && (e.data("VMD").mouse = "enter", e.parent().velocity("stop", !0), e.children().not("span").velocity("stop", !0).velocity("fadeIn", 300))
}).on("mouseleave", "*", function() {
    var e = $(this).children("overlay.VMD");
    e.length && (e.data("VMD").mouse = "leave", e.children().not("span").velocity("stop", !0).velocity("fadeOut", "fast"))
}).on("keydown", function(e) {
    var t = $(e.target),
        n = t.closest("overlay.VMD");
    if (27 === e.which) $.each($("overlay.VMD"), function() {
        var e = $(this);
        "enter" === e.data("VMD").mouse && e.parent().trigger("mouseleave")
    });
    else if (13 === e.which && n.length) e.preventDefault(), animate(n);
    else if (!/textarea|input|code/i.test(e.target.tagName)) switch (e.which) {
        case 49:
            $.each($("overlay.VMD"), function() {
                var e = $(this),
                    t = e.parent();
                /In"$/.test(e.find("code[name='propertiesMap']").text()) && t.css("opacity", 0), t.velocity("stop", !0), animate(e)
            });
            break;
        case 50:
            $.each($("overlay.VMD"), function() {
                var e = $(this).parent();
                e.velocity("stop", !0), clearElementStyles(e[0])
            });
            break;
        default:
            var r = $("#overlay-" + e.which);
            if (r.length) {
                var i = r.parent();
                i.hasClass("velocity-animating") ? (i.velocity("stop", !0), clearElementStyles(i[0])) : animate(r)
            }

    }

});
