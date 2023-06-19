/*!
* jQuery JavaScript Library v1.12.0
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2016-01-08T19:56Z
*/
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = fe.type(e);
        return "function" === n || fe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (fe.isFunction(t))
            return fe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return fe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Ce.test(t))
                return fe.filter(t, e, n);
            t = fe.filter(t, e)
        }
        return fe.grep(e, function(e) {
            return fe.inArray(e, t) > -1 !== n
        })
    }
    function i(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function o(e) {
        var t = {};
        return fe.each(e.match(Le) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s),
        e.detachEvent("onload", s))
    }
    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(),
        fe.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(_e, "-$1").toLowerCase();
            if (n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Be.test(n) ? fe.parseJSON(n) : n
                } catch (i) {}
                fe.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, r) {
        if (Ae(e)) {
            var i, o, a = fe.expando, s = e.nodeType, l = s ? fe.cache : e, u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t)
                return u || (u = s ? e[a] = ne.pop() || fe.guid++ : a),
                l[u] || (l[u] = s ? {} : {
                    toJSON: fe.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (r ? l[u] = fe.extend(l[u], t) : l[u].data = fe.extend(l[u].data, t)),
                o = l[u],
                r || (o.data || (o.data = {}),
                o = o.data),
                void 0 !== n && (o[fe.camelCase(t)] = n),
                "string" == typeof t ? (i = o[t],
                null == i && (i = o[fe.camelCase(t)])) : i = o,
                i
        }
    }
    function d(e, t, n) {
        if (Ae(e)) {
            var r, i, o = e.nodeType, a = o ? fe.cache : e, s = o ? e[fe.expando] : fe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in r ? t = [t] : (t = fe.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    for (; i--; )
                        delete r[t[i]];
                    if (n ? !u(r) : !fe.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data,
                u(a[s]))) && (o ? fe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function p(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return fe.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (fe.cssNumber[t] ? "" : "px"), c = (fe.cssNumber[t] || "px" !== u && +l) && Fe.exec(fe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do
                o = o || ".5",
                c /= o,
                fe.style(e, t, c + u);
            while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = c,
        r.end = i)),
        i
    }
    function f(e) {
        var t = $e.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
            n = e.childNodes || e; null != (r = n[i]); i++)
                !t || fe.nodeName(r, t) ? o.push(r) : fe.merge(o, h(r, t));
        return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], o) : o
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            fe._data(n, "globalEval", !t || fe._data(t[r], "globalEval"))
    }
    function g(e) {
        qe.test(e.type) && (e.defaultChecked = e.checked)
    }
    function v(e, t, n, r, i) {
        for (var o, a, s, l, u, c, d, p = e.length, v = f(t), y = [], b = 0; p > b; b++)
            if (a = e[b],
            a || 0 === a)
                if ("object" === fe.type(a))
                    fe.merge(y, a.nodeType ? [a] : a);
                else if (Ve.test(a)) {
                    for (l = l || v.appendChild(t.createElement("div")),
                    u = (Ie.exec(a) || ["", ""])[1].toLowerCase(),
                    d = Xe[u] || Xe._default,
                    l.innerHTML = d[1] + fe.htmlPrefilter(a) + d[2],
                    o = d[0]; o--; )
                        l = l.lastChild;
                    if (!de.leadingWhitespace && ze.test(a) && y.push(t.createTextNode(ze.exec(a)[0])),
                    !de.tbody)
                        for (a = "table" !== u || Ge.test(a) ? "<table>" !== d[1] || Ge.test(a) ? 0 : l : l.firstChild,
                        o = a && a.childNodes.length; o--; )
                            fe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (fe.merge(y, l.childNodes),
                    l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = v.lastChild
                } else
                    y.push(t.createTextNode(a));
        for (l && v.removeChild(l),
        de.appendChecked || fe.grep(h(y, "input"), g),
        b = 0; a = y[b++]; )
            if (r && fe.inArray(a, r) > -1)
                i && i.push(a);
            else if (s = fe.contains(a.ownerDocument, a),
            l = h(v.appendChild(a), "script"),
            s && m(l),
            n)
                for (o = 0; a = l[o++]; )
                    We.test(a.type || "") && n.push(a);
        return l = null,
        v
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function x() {
        try {
            return re.activeElement
        } catch (e) {}
    }
    function w(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                w(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        i === !1)
            i = b;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        i = function(e) {
            return fe().off(e),
            a.apply(this, arguments)
        }
        ,
        i.guid = a.guid || (a.guid = fe.guid++)),
        e.each(function() {
            fe.event.add(this, t, i, r, n)
        })
    }
    function E(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function C(e) {
        return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function k(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function S(e, t) {
        if (1 === t.nodeType && fe.hasData(e)) {
            var n, r, i, o = fe._data(e), a = fe._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (r = 0,
                    i = s[n].length; i > r; r++)
                        fe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = fe.extend({}, a.data))
        }
    }
    function T(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !de.noCloneEvent && t[fe.expando]) {
                i = fe._data(t);
                for (r in i.events)
                    fe.removeEvent(t, r, i.handle);
                t.removeAttribute(fe.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text,
            k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function N(e, t, n, r) {
        t = oe.apply([], t);
        var i, o, a, s, l, u, c = 0, d = e.length, p = d - 1, f = t[0], m = fe.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !de.checkClone && rt.test(f))
            return e.each(function(i) {
                var o = e.eq(i);
                m && (t[0] = f.call(this, i, o.html())),
                N(o, t, n, r)
            });
        if (d && (u = v(t, e[0].ownerDocument, !1, e, r),
        i = u.firstChild,
        1 === u.childNodes.length && (u = i),
        i || r)) {
            for (s = fe.map(h(u, "script"), C),
            a = s.length; d > c; c++)
                o = u,
                c !== p && (o = fe.clone(o, !0, !0),
                a && fe.merge(s, h(o, "script"))),
                n.call(e[c], o, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                fe.map(s, k),
                c = 0; a > c; c++)
                    o = s[c],
                    We.test(o.type || "") && !fe._data(o, "globalEval") && fe.contains(l, o) && (o.src ? fe._evalUrl && fe._evalUrl(o.src) : fe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            u = i = null
        }
        return e
    }
    function j(e, t, n) {
        for (var r, i = t ? fe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || fe.cleanData(h(r)),
            r.parentNode && (n && fe.contains(r.ownerDocument, r) && m(h(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function L(e, t) {
        var n = fe(t.createElement(e)).appendTo(t.body)
          , r = fe.css(n[0], "display");
        return n.detach(),
        r
    }
    function D(e) {
        var t = re
          , n = ut[e];
        return n || (n = L(e, t),
        "none" !== n && n || (lt = (lt || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (lt[0].contentWindow || lt[0].contentDocument).document,
        t.write(),
        t.close(),
        n = L(e, t),
        lt.detach()),
        ut[e] = n),
        n
    }
    function M(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function A(e) {
        if (e in kt)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--; )
            if (e = Ct[n] + t,
            e in kt)
                return e
    }
    function B(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            r = e[a],
            r.style && (o[a] = fe._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Re(r) && (o[a] = fe._data(r, "olddisplay", D(r.nodeName)))) : (i = Re(r),
            (n && "none" !== n || !i) && fe._data(r, "olddisplay", i ? n : fe.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function _(e, t, n) {
        var r = xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function P(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += fe.css(e, n + He[o], !0, i)),
            r ? ("content" === n && (a -= fe.css(e, "padding" + He[o], !0, i)),
            "margin" !== n && (a -= fe.css(e, "border" + He[o] + "Width", !0, i))) : (a += fe.css(e, "padding" + He[o], !0, i),
            "padding" !== n && (a += fe.css(e, "border" + He[o] + "Width", !0, i)));
        return a
    }
    function F(t, n, r) {
        var i = !0
          , o = "width" === n ? t.offsetWidth : t.offsetHeight
          , a = ht(t)
          , s = de.boxSizing && "border-box" === fe.css(t, "boxSizing", !1, a);
        if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])),
        0 >= o || null == o) {
            if (o = mt(t, n, a),
            (0 > o || null == o) && (o = t.style[n]),
            dt.test(o))
                return o;
            i = s && (de.boxSizingReliable() || o === t.style[n]),
            o = parseFloat(o) || 0
        }
        return o + P(t, n, r || (s ? "border" : "content"), i, a) + "px"
    }
    function H(e, t, n, r, i) {
        return new H.prototype.init(e,t,n,r,i)
    }
    function R() {
        return e.setTimeout(function() {
            St = void 0
        }),
        St = fe.now()
    }
    function O(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = He[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function q(e, t, n) {
        for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function I(e, t, n) {
        var r, i, o, a, s, l, u, c, d = this, p = {}, f = e.style, h = e.nodeType && Re(e), m = fe._data(e, "fxshow");
        n.queue || (s = fe._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        d.always(function() {
            d.always(function() {
                s.unqueued--,
                fe.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
        u = fe.css(e, "display"),
        c = "none" === u ? fe._data(e, "olddisplay") || D(e.nodeName) : u,
        "inline" === c && "none" === fe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden",
        de.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            Nt.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    h = !0
                }
                p[r] = m && m[r] || fe.style(e, r)
            } else
                u = void 0;
        if (fe.isEmptyObject(p))
            "inline" === ("none" === u ? D(e.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden"in m && (h = m.hidden) : m = fe._data(e, "fxshow", {}),
            o && (m.hidden = !h),
            h ? fe(e).show() : d.done(function() {
                fe(e).hide()
            }),
            d.done(function() {
                var t;
                fe._removeData(e, "fxshow");
                for (t in p)
                    fe.style(e, t, p[t])
            });
            for (r in p)
                a = q(h ? m[r] : 0, r, d),
                r in m || (m[r] = a.start,
                h && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function W(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = fe.camelCase(n),
            i = t[r],
            o = e[n],
            fe.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = fe.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function z(e, t, n) {
        var r, i, o = 0, a = z.prefilters.length, s = fe.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i)
                return !1;
            for (var t = St || R(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            1 > o && l ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: fe.extend({}, t),
            opts: fe.extend(!0, {
                specialEasing: {},
                easing: fe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: St || R(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (W(c, u.opts.specialEasing); a > o; o++)
            if (r = z.prefilters[o].call(u, e, c, u.opts))
                return fe.isFunction(r.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(r.stop, r)),
                r;
        return fe.map(c, q, u),
        fe.isFunction(u.opts.start) && u.opts.start.call(e, u),
        fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function $(e) {
        return fe.attr(e, "class") || ""
    }
    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(Le) || [];
            if (fe.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function V(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0,
            fe.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                i(u),
                !1)
            }),
            l
        }
        var o = {}
          , a = e === Qt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function G(e, t) {
        var n, r, i = fe.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && fe.extend(!0, e, n),
        e
    }
    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o),
        n[o]) : void 0
    }
    function U(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (a = u[l + " " + o] || u["* " + o],
                    !a)
                        for (i in u)
                            if (s = i.split(" "),
                            s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function J(e) {
        return e.style && e.style.display || fe.css(e, "display")
    }
    function Q(e) {
        for (; e && 1 === e.nodeType; ) {
            if ("none" === J(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function K(e, t, n, r) {
        var i;
        if (fe.isArray(t))
            fe.each(t, function(t, i) {
                n || nn.test(e) ? r(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== fe.type(t))
            r(e, t);
        else
            for (i in t)
                K(e + "[" + i + "]", t[i], n, r)
    }
    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function te(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var ne = []
      , re = e.document
      , ie = ne.slice
      , oe = ne.concat
      , ae = ne.push
      , se = ne.indexOf
      , le = {}
      , ue = le.toString
      , ce = le.hasOwnProperty
      , de = {}
      , pe = "1.12.0"
      , fe = function(e, t) {
        return new fe.fn.init(e,t)
    }
      , he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , me = /^-ms-/
      , ge = /-([\da-z])/gi
      , ve = function(e, t) {
        return t.toUpperCase()
    };
    fe.fn = fe.prototype = {
        jquery: pe,
        constructor: fe,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    },
    fe.extend = fe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || fe.isFunction(a) || (a = {}),
        s === l && (a = this,
        s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i)
                    e = a[r],
                    n = i[r],
                    a !== n && (u && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1,
                    o = e && fe.isArray(e) ? e : []) : o = e && fe.isPlainObject(e) ? e : {},
                    a[r] = fe.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }
    ,
    fe.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === fe.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e)
                    return ce.call(e, t);
            for (t in e)
                ;
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && fe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++)
                    ;
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? fe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se)
                    return se.call(t, e, n);
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; )
                e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r]; )
                    e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                r = !t(e[o], o),
                r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o, a = 0, s = [];
            if (n(e))
                for (i = e.length; i > a; a++)
                    o = t(e[a], a, r),
                    null != o && s.push(o);
            else
                for (a in e)
                    o = t(e[a], a, r),
                    null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t],
            t = e,
            e = i),
            fe.isFunction(e) ? (n = ie.call(arguments, 2),
            r = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }
            ,
            r.guid = e.guid = e.guid || fe.guid++,
            r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: de
    }),
    "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = /*!
* Sizzle CSS Selector Engine v2.2.1
* http://sizzlejs.com/
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2015-10-17
*/
    function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, u, d, f, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!r && ((t ? t.ownerDocument || t : q) !== A && M(t),
            t = t || A,
            _)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (i = u[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (w.qsa && !X[e + " "] && (!P || !P.test(e))) {
                    if (1 !== m)
                        h = t,
                        f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = O),
                        d = S(e),
                        o = d.length,
                        l = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--; )
                            d[o] = l + " " + p(d[o]);
                        f = d.join(","),
                        h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (f)
                        try {
                            return K.apply(n, h.querySelectorAll(f)),
                            n
                        } catch (g) {} finally {
                            s === O && t.removeAttribute("id")
                        }
                }
            }
            return N(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > E.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[O] = !0,
            e
        }
        function i(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                E.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
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
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function f(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, l, u, c = [I, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[O] || (t[O] = {}),
                            l = u[t.uniqueID] || (u[t.uniqueID] = {}),
                            (s = l[r]) && s[0] === I && s[1] === o)
                                return c[2] = s[2];
                            if (l[r] = c,
                            c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                u && t.push(s));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[O] && (i = v(i)),
            o && !o[O] && (o = v(o, a)),
            r(function(r, a, s, l) {
                var u, c, d, p = [], f = [], h = a.length, v = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, p, e, s, l), b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, l),
                i)
                    for (u = g(b, f),
                    i(u, [], s, l),
                    c = u.length; c--; )
                        (d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            c = b.length; c--; )
                                (d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (d = b[c]) && (u = o ? ee(r, d) : p[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else
                    b = g(b === a ? b.splice(h, b.length) : b),
                    o ? o(null, a, b, l) : K.apply(a, b)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = E.relative[e[0].type], a = o || E.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                return e === t
            }, a, !0), u = f(function(e) {
                return ee(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                return t = null,
                i
            }
            ]; i > s; s++)
                if (n = E.relative[e[s].type])
                    c = [f(h(c), n)];
                else {
                    if (n = E.filter[e[s].type].apply(null, e[s].matches),
                    n[O]) {
                        for (r = ++s; i > r && !E.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function b(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , a = function(r, a, s, l, u) {
                var c, d, p, f = 0, h = "0", m = r && [], v = [], y = j, b = r || o && E.find.TAG("*", u), x = I += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (j = a === A || a || u); h !== w && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (d = 0,
                        a || c.ownerDocument === A || (M(c),
                        s = !_); p = e[d++]; )
                            if (p(c, a || A, s)) {
                                l.push(c);
                                break
                            }
                        u && (I = x)
                    }
                    i && ((c = !p && c) && f--,
                    r && m.push(c))
                }
                if (f += h,
                i && h !== f) {
                    for (d = 0; p = n[d++]; )
                        p(m, v, a, s);
                    if (r) {
                        if (f > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = J.call(l));
                        v = g(v)
                    }
                    K.apply(l, v),
                    u && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return u && (I = x,
                j = y),
                m
            };
            return i ? r(a) : a
        }
        var x, w, E, C, k, S, T, N, j, L, D, M, A, B, _, P, F, H, R, O = "sizzle" + 1 * new Date, q = e.document, I = 0, W = 0, z = n(), $ = n(), X = n(), V = function(e, t) {
            return e === t && (D = !0),
            0
        }, G = 1 << 31, Y = {}.hasOwnProperty, U = [], J = U.pop, Q = U.push, K = U.push, Z = U.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), pe = new RegExp("^" + re + "$"), fe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Ee = function() {
            M()
        };
        try {
            K.apply(U = Z.call(q.childNodes), q.childNodes),
            U[q.childNodes.length].nodeType
        } catch (Ce) {
            K = {
                apply: U.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        M = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : q;
            return r !== A && 9 === r.nodeType && r.documentElement ? (A = r,
            B = A.documentElement,
            _ = !k(A),
            (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)),
            w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = i(function(e) {
                return e.appendChild(A.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = ge.test(A.getElementsByClassName),
            w.getById = i(function(e) {
                return B.appendChild(e).id = O,
                !A.getElementsByName || !A.getElementsByName(O).length
            }),
            w.getById ? (E.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            E.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete E.find.ID,
            E.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            E.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            E.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && _ ? t.getElementsByClassName(e) : void 0
            }
            ,
            F = [],
            P = [],
            (w.qsa = ge.test(A.querySelectorAll)) && (i(function(e) {
                B.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + O + "-]").length || P.push("~="),
                e.querySelectorAll(":checked").length || P.push(":checked"),
                e.querySelectorAll("a#" + O + "+*").length || P.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                P.push(",.*:")
            })),
            (w.matchesSelector = ge.test(H = B.matches || B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                F.push("!=", oe)
            }),
            P = P.length && new RegExp(P.join("|")),
            F = F.length && new RegExp(F.join("|")),
            t = ge.test(B.compareDocumentPosition),
            R = t || ge.test(B.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            V = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === q && R(q, e) ? -1 : t === A || t.ownerDocument === q && R(q, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], l = [t];
                if (!i || !o)
                    return e === A ? -1 : t === A ? 1 : i ? -1 : o ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                if (i === o)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; s[r] === l[r]; )
                    r++;
                return r ? a(s[r], l[r]) : s[r] === q ? -1 : l[r] === q ? 1 : 0
            }
            ,
            A) : A
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== A && M(e),
            n = n.replace(ce, "='$1']"),
            w.matchesSelector && _ && !X[n + " "] && (!F || !F.test(n)) && (!P || !P.test(n)))
                try {
                    var r = H.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return t(n, A, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && M(e),
            R(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && M(e);
            var n = E.attrHandle[t.toLowerCase()]
              , r = n && Y.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (D = !w.detectDuplicates,
            L = !w.sortStable && e.slice(0),
            e.sort(V),
            D) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return L = null,
            e
        }
        ,
        C = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += C(t);
            return n
        }
        ,
        E = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
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
                    return e[1] = e[1].replace(xe, we),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (p = t; p = p[m]; )
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (p = g,
                                d = p[O] || (p[O] = {}),
                                c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                u = c[e] || [],
                                f = u[0] === I && u[1],
                                b = f && u[2],
                                p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++b && p === t) {
                                        c[e] = [I, f, b];
                                        break
                                    }
                            } else if (y && (p = t,
                            d = p[O] || (p[O] = {}),
                            c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                            u = c[e] || [],
                            f = u[0] === I && u[1],
                            b = f),
                            b === !1)
                                for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[O] || (p[O] = {}),
                                c = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                c[e] = [I, b]),
                                p !== t)); )
                                    ;
                            return b -= i,
                            b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            r = ee(e, i[a]),
                            e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = T(e.replace(se, "$1"));
                    return i[O] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(xe, we),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(xe, we).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === B
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !E.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
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
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        E.pseudos.nth = E.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            E.pseudos[x] = s(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            E.pseudos[x] = l(x);
        return d.prototype = E.filters = E.pseudos,
        E.setFilters = new d,
        S = t.tokenize = function(e, n) {
            var r, i, o, a, s, l, u, c = $[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = E.preFilter; s; ) {
                (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s),
                l.push(o = [])),
                r = !1,
                (i = ue.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }),
                s = s.slice(r.length));
                for (a in E.filter)
                    !(i = fe[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
        }
        ,
        T = t.compile = function(e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = S(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[O] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)),
                o.selector = e
            }
            return o
        }
        ,
        N = t.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e, d = !r && S(e = u.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (o = d[0] = d[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && E.relative[o[1].type]) {
                    if (t = (E.find.ID(a.matches[0].replace(xe, we), t) || [])[0],
                    !t)
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !E.relative[s = a.type]); )
                    if ((l = E.find[s]) && (r = l(a.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && p(o),
                        !e)
                            return K.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || T(e, d))(r, t, !_, n, !t || ye.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = O.split("").sort(V).join("") === O,
        w.detectDuplicates = !!D,
        M(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    fe.find = ye,
    fe.expr = ye.selectors,
    fe.expr[":"] = fe.expr.pseudos,
    fe.uniqueSort = fe.unique = ye.uniqueSort,
    fe.text = ye.getText,
    fe.isXMLDoc = ye.isXML,
    fe.contains = ye.contains;
    var be = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && fe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , we = fe.expr.match.needsContext
      , Ee = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , Ce = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? fe.find.matchesSelector(r, e) ? [r] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    fe.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(fe(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (fe.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                fe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? fe.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && we.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var ke, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Te = fe.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || ke,
        "string" == typeof e) {
            if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Se.exec(e),
            !r || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof fe ? t[0] : t,
                fe.merge(this, fe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)),
                Ee.test(r[1]) && fe.isPlainObject(t))
                    for (r in t)
                        fe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if (i = re.getElementById(r[2]),
            i && i.parentNode) {
                if (i.id !== r[2])
                    return ke.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = re,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        fe.makeArray(e, this))
    }
    ;
    Te.prototype = fe.fn,
    ke = fe(re);
    var Ne = /^(?:parents|prev(?:Until|All))/
      , je = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fe.fn.extend({
        has: function(e) {
            var t, n = fe(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (fe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function(e, t) {
        fe.fn[e] = function(n, r) {
            var i = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = fe.filter(r, i)),
            this.length > 1 && (je[e] || (i = fe.uniqueSort(i)),
            Ne.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var Le = /\S+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : fe.extend({}, e);
        var t, n, r, i, a = [], s = [], l = -1, u = function() {
            for (i = e.once,
            r = t = !0; s.length; l = -1)
                for (n = s.shift(); ++l < a.length; )
                    a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (a = n ? [] : "")
        }, c = {
            add: function() {
                return a && (n && !t && (l = a.length - 1,
                s.push(n)),
                function r(t) {
                    fe.each(t, function(t, n) {
                        fe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== fe.type(n) && r(n)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return fe.each(arguments, function(e, t) {
                    for (var n; (n = fe.inArray(t, a, n)) > -1; )
                        a.splice(n, 1),
                        l >= n && l--
                }),
                this
            },
            has: function(e) {
                return e ? fe.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return i = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return i = !0,
                n || c.disable(),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                s.push(n),
                t || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
    ,
    fe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", fe.Callbacks("once memory"), "resolved"], ["reject", "fail", fe.Callbacks("once memory"), "rejected"], ["notify", "progress", fe.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return fe.Deferred(function(n) {
                        fe.each(t, function(t, o) {
                            var a = fe.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? fe.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            fe.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = ie.call(arguments), a = o.length, s = 1 !== a || e && fe.isFunction(e.promise) ? a : 0, l = 1 === s ? e : fe.Deferred(), u = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? ie.call(arguments) : i,
                    r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                r = new Array(a); a > i; i++)
                    o[i] && fe.isFunction(o[i].promise) ? o[i].promise().progress(u(i, n, t)).done(u(i, r, o)).fail(l.reject) : --s;
            return s || l.resolveWith(r, o),
            l.promise()
        }
    });
    var De;
    fe.fn.ready = function(e) {
        return fe.ready.promise().done(e),
        this
    }
    ,
    fe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0,
            e !== !0 && --fe.readyWait > 0 || (De.resolveWith(re, [fe]),
            fe.fn.triggerHandler && (fe(re).triggerHandler("ready"),
            fe(re).off("ready"))))
        }
    }),
    fe.ready.promise = function(t) {
        if (!De)
            if (De = fe.Deferred(),
            "complete" === re.readyState)
                e.setTimeout(fe.ready);
            else if (re.addEventListener)
                re.addEventListener("DOMContentLoaded", s),
                e.addEventListener("load", s);
            else {
                re.attachEvent("onreadystatechange", s),
                e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && re.documentElement
                } catch (r) {}
                n && n.doScroll && !function i() {
                    if (!fe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return e.setTimeout(i, 50)
                        }
                        a(),
                        fe.ready()
                    }
                }()
            }
        return De.promise(t)
    }
    ,
    fe.ready.promise();
    var Me;
    for (Me in fe(de))
        break;
    de.ownFirst = "0" === Me,
    de.inlineBlockNeedsLayout = !1,
    fe(function() {
        var e, t, n, r;
        n = re.getElementsByTagName("body")[0],
        n && n.style && (t = re.createElement("div"),
        r = re.createElement("div"),
        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(r).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(r))
    }),
    function() {
        var e = re.createElement("div");
        de.deleteExpando = !0;
        try {
            delete e.test
        } catch (t) {
            de.deleteExpando = !1
        }
        e = null
    }();
    var Ae = function(e) {
        var t = fe.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
      , Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , _e = /([A-Z])/g;
    fe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando],
            !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    fe.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = fe.data(o),
                1 === o.nodeType && !fe._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (r = a[n].name,
                        0 === r.indexOf("data-") && (r = fe.camelCase(r.slice(5)),
                        l(o, r, i[r])));
                    fe._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                fe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                fe.data(this, e, t)
            }) : o ? l(o, e, fe.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                fe.removeData(this, e)
            })
        }
    }),
    fe.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = fe._data(e, t),
            n && (!r || fe.isArray(n) ? r = fe._data(e, t, fe.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = fe.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = fe._queueHooks(e, t)
              , a = function() {
                fe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return fe._data(e, n) || fe._data(e, n, {
                empty: fe.Callbacks("once memory").add(function() {
                    fe._removeData(e, t + "queue"),
                    fe._removeData(e, n)
                })
            })
        }
    }),
    fe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = fe.queue(this, e, t);
                fe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = fe.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                n = fe._data(o[a], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    }),
    function() {
        var e;
        de.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, r;
            return n = re.getElementsByTagName("body")[0],
            n && n.style ? (t = re.createElement("div"),
            r = re.createElement("div"),
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(r).appendChild(t),
            "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(re.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(r),
            e) : void 0
        }
    }();
    var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Fe = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$","i")
      , He = ["Top", "Right", "Bottom", "Left"]
      , Re = function(e, t) {
        return e = t || e,
        "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
    }
      , Oe = function(e, t, n, r, i, o, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === fe.type(n)) {
            i = !0;
            for (s in n)
                Oe(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        fe.isFunction(r) || (a = !0),
        u && (a ? (t.call(e, r),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(fe(e), n)
        }
        )),
        t))
            for (; l > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , qe = /^(?:checkbox|radio)$/i
      , Ie = /<([\w:-]+)/
      , We = /^$|\/(?:java|ecma)script/i
      , ze = /^\s+/
      , $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = re.createElement("div")
          , t = re.createDocumentFragment()
          , n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        de.leadingWhitespace = 3 === e.firstChild.nodeType,
        de.tbody = !e.getElementsByTagName("tbody").length,
        de.htmlSerialize = !!e.getElementsByTagName("link").length,
        de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        t.appendChild(n),
        de.appendChecked = n.checked,
        e.innerHTML = "<textarea>x</textarea>",
        de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        t.appendChild(e),
        n = re.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        de.noCloneEvent = !!e.addEventListener,
        e[fe.expando] = 1,
        de.attributes = !e.getAttribute(fe.expando)
    }();
    var Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Xe.optgroup = Xe.option,
    Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead,
    Xe.th = Xe.td;
    var Ve = /<|&#?\w+;/
      , Ge = /<tbody/i;
    !function() {
        var t, n, r = re.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (de[t] = n in e) || (r.setAttribute(n, "t"),
            de[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var Ye = /^(?:input|select|textarea)$/i
      , Ue = /^key/
      , Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Qe = /^(?:focusinfocus|focusoutblur)$/
      , Ke = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, p, f, h, m, g = fe._data(e);
            if (g) {
                for (n.handler && (l = n,
                n = l.handler,
                i = l.selector),
                n.guid || (n.guid = fe.guid++),
                (a = g.events) || (a = g.events = {}),
                (c = g.handle) || (c = g.handle = function(e) {
                    return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = e),
                t = (t || "").match(Le) || [""],
                s = t.length; s--; )
                    o = Ke.exec(t[s]) || [],
                    f = m = o[1],
                    h = (o[2] || "").split(".").sort(),
                    f && (u = fe.event.special[f] || {},
                    f = (i ? u.delegateType : u.bindType) || f,
                    u = fe.event.special[f] || {},
                    d = fe.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && fe.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, l),
                    (p = a[f]) || (p = a[f] = [],
                    p.delegateCount = 0,
                    u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))),
                    u.add && (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    fe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, p, f, h, m, g = fe.hasData(e) && fe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(Le) || [""],
                u = t.length; u--; )
                    if (s = Ke.exec(t[u]) || [],
                    f = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    f) {
                        for (d = fe.event.special[f] || {},
                        f = (r ? d.delegateType : d.bindType) || f,
                        p = c[f] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = p.length; o--; )
                            a = p[o],
                            !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1),
                            a.selector && p.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || fe.removeEvent(e, f, g.handle),
                        delete c[f])
                    } else
                        for (f in c)
                            fe.event.remove(e, f + t[u], n, r, !0);
                fe.isEmptyObject(c) && (delete g.handle,
                fe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, c, d, p = [r || re], f = ce.call(t, "type") ? t.type : t, h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || re,
            3 !== r.nodeType && 8 !== r.nodeType && !Qe.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."),
            f = h.shift(),
            h.sort()),
            a = f.indexOf(":") < 0 && "on" + f,
            t = t[fe.expando] ? t : new fe.Event(f,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : fe.makeArray(n, [t]),
            u = fe.event.special[f] || {},
            i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !fe.isWindow(r)) {
                    for (l = u.delegateType || f,
                    Qe.test(l + f) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        c = s;
                    c === (r.ownerDocument || re) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = p[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? l : u.bindType || f,
                    o = (fe._data(s, "events") || {})[t.type] && fe._data(s, "handle"),
                    o && o.apply(s, n),
                    o = a && s[a],
                    o && o.apply && Ae(s) && (t.result = o.apply(s, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = f,
                !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && Ae(r) && a && r[f] && !fe.isWindow(r)) {
                    c = r[a],
                    c && (r[a] = null),
                    fe.event.triggered = f;
                    try {
                        r[f]()
                    } catch (m) {}
                    fe.event.triggered = void 0,
                    c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = fe.event.fix(e);
            var t, n, r, i, o, a = [], s = ie.call(arguments), l = (fe._data(this, "events") || {})[e.type] || [], u = fe.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = fe.event.handlers.call(this, e, l),
                t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o,
                        e.data = o.data,
                        r = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                        n = 0; s > n; n++)
                            o = t[n],
                            i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? fe(i, this).index(l) > -1 : fe.find(i, this, null, [l]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[fe.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Je.test(i) ? this.mouseHooks : Ue.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new fe.Event(o),
            t = r.length; t--; )
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || re),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re,
                i = r.documentElement,
                n = r.body,
                e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return fe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(r, null, t),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    fe.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    fe.Event = function(e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e,
        t && fe.extend(this, t),
        this.timeStamp = e && e.timeStamp || fe.now(),
        void (this[fe.expando] = !0)) : new fe.Event(e,t)
    }
    ,
    fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !fe.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    de.submit || (fe.event.special.submit = {
        setup: function() {
            return fe.nodeName(this, "form") ? !1 : void fe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }),
                fe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble,
            this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return fe.nodeName(this, "form") ? !1 : void fe.event.remove(this, "._submit")
        }
    }),
    de.change || (fe.event.special.change = {
        setup: function() {
            return Ye.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }),
            fe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1),
                fe.event.simulate("change", this, e)
            })),
            !1) : void fe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ye.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                }),
                fe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return fe.event.remove(this, "._change"),
            !Ye.test(this.nodeName)
        }
    }),
    de.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = fe._data(r, t);
                i || r.addEventListener(e, n, !0),
                fe._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = fe._data(r, t) - 1;
                i ? fe._data(r, t, i) : (r.removeEventListener(e, n, !0),
                fe._removeData(r, t))
            }
        }
    }),
    fe.fn.extend({
        on: function(e, t, n, r) {
            return w(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return w(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = b),
            this.each(function() {
                fe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? fe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g
      , et = new RegExp("<(?:" + $e + ")[\\s/>]","i")
      , tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , nt = /<script|<style|<link/i
      , rt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , it = /^true\/(.*)/
      , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , at = f(re)
      , st = at.appendChild(re.createElement("div"));
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l = fe.contains(e.ownerDocument, e);
            if (de.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML,
            st.removeChild(o = st.firstChild)),
            !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (r = h(o),
                s = h(e),
                a = 0; null != (i = s[a]); ++a)
                    r[a] && T(i, r[a]);
            if (t)
                if (n)
                    for (s = s || h(e),
                    r = r || h(o),
                    a = 0; null != (i = s[a]); a++)
                        S(i, r[a]);
                else
                    S(e, o);
            return r = h(o, "script"),
            r.length > 0 && m(r, !l && h(e, "script")),
            r = s = i = null,
            o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = fe.expando, l = fe.cache, u = de.attributes, c = fe.event.special; null != (n = e[a]); a++)
                if ((t || Ae(n)) && (i = n[s],
                o = i && l[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? fe.event.remove(n, r) : fe.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i],
                    u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s),
                    ne.push(i))
                }
        }
    }),
    fe.fn.extend({
        domManip: N,
        detach: function(e) {
            return j(this, e, !0)
        },
        remove: function(e) {
            return j(this, e)
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && fe.cleanData(h(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && fe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return fe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !ze.test(e)) && !Xe[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (fe.cleanData(h(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return N(this, arguments, function(t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(h(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = fe(e), a = o.length - 1; a >= r; r++)
                n = r === a ? this : this.clone(!0),
                fe(o[r])[t](n),
                ae.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var lt, ut = {
        HTML: "block",
        BODY: "block"
    }, ct = /^margin/, dt = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$","i"), pt = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }, ft = re.documentElement;
    !function() {
        function t() {
            var t, c, d = re.documentElement;
            d.appendChild(l),
            u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = i = s = !1,
            r = a = !0,
            e.getComputedStyle && (c = e.getComputedStyle(u),
            n = "1%" !== (c || {}).top,
            s = "2px" === (c || {}).marginLeft,
            i = "4px" === (c || {
                width: "4px"
            }).width,
            u.style.marginRight = "50%",
            r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight,
            t = u.appendChild(re.createElement("div")),
            t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            t.style.marginRight = t.style.width = "0",
            u.style.width = "1px",
            a = !parseFloat((e.getComputedStyle(t) || {}).marginRight),
            u.removeChild(t)),
            u.style.display = "none",
            o = 0 === u.getClientRects().length,
            o && (u.style.display = "",
            u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            t = u.getElementsByTagName("td"),
            t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            o = 0 === t[0].offsetHeight,
            o && (t[0].style.display = "",
            t[1].style.display = "none",
            o = 0 === t[0].offsetHeight)),
            d.removeChild(l)
        }
        var n, r, i, o, a, s, l = re.createElement("div"), u = re.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5",
        de.opacity = "0.5" === u.style.opacity,
        de.cssFloat = !!u.style.cssFloat,
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        de.clearCloneStyle = "content-box" === u.style.backgroundClip,
        l = re.createElement("div"),
        l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        u.innerHTML = "",
        l.appendChild(u),
        de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
        fe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(),
                o
            },
            boxSizingReliable: function() {
                return null == n && t(),
                i
            },
            pixelMarginRight: function() {
                return null == n && t(),
                r
            },
            pixelPosition: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                return null == n && t(),
                a
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                s
            }
        }))
    }();
    var ht, mt, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n.opener || (n = e),
        n.getComputedStyle(t)
    }
    ,
    mt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ht(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== a || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)),
        !de.pixelMarginRight() && dt.test(a) && ct.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 === a ? a : a + ""
    }
    ) : ft.currentStyle && (ht = function(e) {
        return e.currentStyle
    }
    ,
    mt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ht(e),
        a = n ? n[t] : void 0,
        null == a && s && s[t] && (a = s[t]),
        dt.test(a) && !gt.test(t) && (r = s.left,
        i = e.runtimeStyle,
        o = i && i.left,
        o && (i.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = r,
        o && (i.left = o)),
        void 0 === a ? a : a + "" || "auto"
    }
    );
    var vt = /alpha\([^)]*\)/i
      , yt = /opacity\s*=\s*([^)]*)/i
      , bt = /^(none|table(?!-c[ea]).+)/
      , xt = new RegExp("^(" + Pe + ")(.*)$","i")
      , wt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Et = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ct = ["Webkit", "O", "Moz", "ms"]
      , kt = re.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = fe.camelCase(t), l = e.style;
                if (t = fe.cssProps[s] || (fe.cssProps[s] = A(s) || s),
                a = fe.cssHooks[t] || fe.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if (o = typeof n,
                "string" === o && (i = Fe.exec(n)) && i[1] && (n = p(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (fe.cssNumber[s] ? "" : "px")),
                de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(e, n, r)))))
                    try {
                        l[t] = n
                    } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = fe.camelCase(t);
            return t = fe.cssProps[s] || (fe.cssProps[s] = A(s) || s),
            a = fe.cssHooks[t] || fe.cssHooks[s],
            a && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = mt(e, t, r)),
            "normal" === o && t in Et && (o = Et[t]),
            "" === n || n ? (i = parseFloat(o),
            n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }),
    fe.each(["height", "width"], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? bt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? pt(e, wt, function() {
                    return F(e, t, r)
                }) : F(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && ht(e);
                return _(e, n, r ? P(e, t, r, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    de.opacity || (fe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === fe.trim(o.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = vt.test(o) ? o.replace(vt, i) : o + " " + i)
        }
    }),
    fe.cssHooks.marginRight = M(de.reliableMarginRight, function(e, t) {
        return t ? pt(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"]) : void 0
    }),
    fe.cssHooks.marginLeft = M(de.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(mt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + He[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        ct.test(e) || (fe.cssHooks[e + t].set = _)
    }),
    fe.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (fe.isArray(t)) {
                    for (r = ht(e),
                    i = t.length; i > a; a++)
                        o[t[a]] = fe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }),
    fe.Tween = H,
    H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || fe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    fe.fx = H.prototype.init,
    fe.fx.step = {};
    var St, Tt, Nt = /^(?:toggle|show|hide)$/, jt = /queueHooks$/;
    fe.Animation = fe.extend(z, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return p(n.elem, e, Fe.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            fe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(Le);
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                z.tweeners[n] = z.tweeners[n] || [],
                z.tweeners[n].unshift(t)
        },
        prefilters: [I],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }),
    fe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        return r.duration = fe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in fe.fx.speeds ? fe.fx.speeds[r.duration] : fe.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            fe.isFunction(r.old) && r.old.call(this),
            r.queue && fe.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    fe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = fe.isEmptyObject(e)
              , o = fe.speed(t, n, r)
              , a = function() {
                var t = z(this, fe.extend({}, e), o);
                (i || fe._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = fe.timers
                  , a = fe._data(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && jt.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                (t || !n) && fe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = fe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = fe.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                fe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    fe.each(["toggle", "show", "hide"], function(e, t) {
        var n = fe.fn[t];
        fe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
        }
    }),
    fe.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
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
        fe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    fe.timers = [],
    fe.fx.tick = function() {
        var e, t = fe.timers, n = 0;
        for (St = fe.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || fe.fx.stop(),
        St = void 0
    }
    ,
    fe.fx.timer = function(e) {
        fe.timers.push(e),
        e() ? fe.fx.start() : fe.timers.pop()
    }
    ,
    fe.fx.interval = 13,
    fe.fx.start = function() {
        Tt || (Tt = e.setInterval(fe.fx.tick, fe.fx.interval))
    }
    ,
    fe.fx.stop = function() {
        e.clearInterval(Tt),
        Tt = null
    }
    ,
    fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    fe.fn.delay = function(t, n) {
        return t = fe.fx ? fe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), i = r.appendChild(re.createElement("option"));
        n = re.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px",
        de.getSetAttribute = "t" !== n.className,
        de.style = /top/.test(e.getAttribute("style")),
        de.hrefNormalized = "/a" === e.getAttribute("href"),
        de.checkOn = !!t.value,
        de.optSelected = i.selected,
        de.enctype = !!re.createElement("form").enctype,
        r.disabled = !0,
        de.optDisabled = !i.disabled,
        t = re.createElement("input"),
        t.setAttribute("value", ""),
        de.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        de.radioValue = "t" === t.value
    }();
    var Lt = /\r/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = fe.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, fe(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : fe.isArray(i) && (i = fe.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return t = fe.valHooks[i.type] || fe.valHooks[i.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)
            }
        }
    }),
    fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : fe.trim(fe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l],
                        (n.selected || l === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = fe(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = fe.makeArray(t), a = i.length; a--; )
                        if (r = i[a],
                        fe.inArray(fe.valHooks.option.get(r), o) >= 0)
                            try {
                                r.selected = n = !0
                            } catch (s) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                return fe.isArray(t) ? e.checked = fe.inArray(fe(e).val(), t) > -1 : void 0
            }
        },
        de.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Dt, Mt, At = fe.expr.attrHandle, Bt = /^(?:checked|selected)$/i, _t = de.getSetAttribute, Pt = de.input;
    fe.fn.extend({
        attr: function(e, t) {
            return Oe(this, fe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }),
    fe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (t = t.toLowerCase(),
                i = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? Mt : Dt)),
                void 0 !== n ? null === n ? void fe.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = fe.find.attr(e, t),
                null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(Le);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = fe.propFix[n] || n,
                    fe.expr.match.bool.test(n) ? Pt && _t || !Bt.test(n) ? e[r] = !1 : e[fe.camelCase("default-" + n)] = e[r] = !1 : fe.attr(e, n, ""),
                    e.removeAttribute(_t ? n : r)
        }
    }),
    Mt = {
        set: function(e, t, n) {
            return t === !1 ? fe.removeAttr(e, n) : Pt && _t || !Bt.test(n) ? e.setAttribute(!_t && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = At[t] || fe.find.attr;
        Pt && _t || !Bt.test(t) ? At[t] = function(e, t, r) {
            var i, o;
            return r || (o = At[t],
            At[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            At[t] = o),
            i
        }
        : At[t] = function(e, t, n) {
            return n ? void 0 : e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Pt && _t || (fe.attrHooks.value = {
        set: function(e, t, n) {
            return fe.nodeName(e, "input") ? void (e.defaultValue = t) : Dt && Dt.set(e, t, n)
        }
    }),
    _t || (Dt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    At.id = At.name = At.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }
    ,
    fe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Dt.set
    },
    fe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Dt.set(e, "" === t ? !1 : t, n)
        }
    },
    fe.each(["width", "height"], function(e, t) {
        fe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    })),
    de.style || (fe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ft = /^(?:input|select|textarea|button|object)$/i
      , Ht = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return Oe(this, fe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = fe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    fe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t,
                i = fe.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ft.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    de.hrefNormalized || fe.each(["href", "src"], function(e, t) {
        fe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    de.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }),
    de.enctype || (fe.propFix.enctype = "encoding");
    var Rt = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (fe.isFunction(e))
                return this.each(function(t) {
                    fe(this).addClass(e.call(this, t, $(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Le) || []; n = this[l++]; )
                    if (i = $(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Rt, " ")) {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = fe.trim(r),
                        i !== s && fe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (fe.isFunction(e))
                return this.each(function(t) {
                    fe(this).removeClass(e.call(this, t, $(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Le) || []; n = this[l++]; )
                    if (i = $(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Rt, " ")) {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        s = fe.trim(r),
                        i !== s && fe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, $(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = fe(this),
                    o = e.match(Le) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (void 0 === e || "boolean" === n) && (t = $(this),
                    t && fe._data(this, "__className__", t),
                    fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + $(n) + " ").replace(Rt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    }),
    fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ot = e.location
      , qt = fe.now()
      , It = /\?/
      , Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, r = null, i = fe.trim(t + "");
        return i && !fe.trim(i.replace(Wt, function(e, t, i, o) {
            return n && t && (r = 0),
            0 === r ? e : (n = i || t,
            r += !o - !i,
            "")
        })) ? Function("return " + i)() : fe.error("Invalid JSON: " + t)
    }
    ,
    fe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (r = new e.DOMParser,
            n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t),
        n
    }
    ;
    var zt = /#.*$/
      , $t = /([?&])_=[^&]*/
      , Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Gt = /^(?:GET|HEAD)$/
      , Yt = /^\/\//
      , Ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Jt = {}
      , Qt = {}
      , Kt = "*/".concat("*")
      , Zt = Ot.href
      , en = Ut.exec(Zt.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Zt,
            type: "GET",
            isLocal: Vt.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fe.parseJSON,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? G(G(e, fe.ajaxSettings), t) : G(fe.ajaxSettings, e)
        },
        ajaxPrefilter: X(Jt),
        ajaxTransport: X(Qt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, d, y, b, w, C = n;
                2 !== x && (x = 2,
                l && e.clearTimeout(l),
                c = void 0,
                s = i || "",
                E.readyState = t > 0 ? 4 : 0,
                o = t >= 200 && 300 > t || 304 === t,
                r && (b = Y(p, E, r)),
                b = U(p, b, E, o),
                o ? (p.ifModified && (w = E.getResponseHeader("Last-Modified"),
                w && (fe.lastModified[a] = w),
                w = E.getResponseHeader("etag"),
                w && (fe.etag[a] = w)),
                204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                d = b.data,
                y = b.error,
                o = !y)) : (y = C,
                (t || !C) && (C = "error",
                0 > t && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                o ? m.resolveWith(f, [d, C, E]) : m.rejectWith(f, [E, C, y]),
                E.statusCode(v),
                v = void 0,
                u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [E, p, o ? d : y]),
                g.fireWith(f, [E, C]),
                u && (h.trigger("ajaxComplete", [E, p]),
                --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, l, u, c, d, p = fe.ajaxSetup({}, n), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? fe(f) : fe.event, m = fe.Deferred(), g = fe.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!d)
                            for (d = {}; t = Xt.exec(s); )
                                d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            E.always(e[E.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t),
                    r(0, t),
                    this
                }
            };
            if (m.promise(E).complete = g.add,
            E.success = E.done,
            E.error = E.fail,
            p.url = ((t || p.url || Zt) + "").replace(zt, "").replace(Yt, en[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = fe.trim(p.dataType || "*").toLowerCase().match(Le) || [""],
            null == p.crossDomain && (i = Ut.exec(p.url.toLowerCase()),
            p.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)),
            V(Jt, p, n, E),
            2 === x)
                return E;
            u = fe.event && p.global,
            u && 0 === fe.active++ && fe.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Gt.test(p.type),
            a = p.url,
            p.hasContent || (p.data && (a = p.url += (It.test(a) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = $t.test(a) ? a.replace($t, "$1_=" + qt++) : a + (It.test(a) ? "&" : "?") + "_=" + qt++)),
            p.ifModified && (fe.lastModified[a] && E.setRequestHeader("If-Modified-Since", fe.lastModified[a]),
            fe.etag[a] && E.setRequestHeader("If-None-Match", fe.etag[a])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && E.setRequestHeader("Content-Type", p.contentType),
            E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers)
                E.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(f, E, p) === !1 || 2 === x))
                return E.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                E[o](p[o]);
            if (c = V(Qt, p, n, E)) {
                if (E.readyState = 1,
                u && h.trigger("ajaxSend", [E, p]),
                2 === x)
                    return E;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    E.abort("timeout")
                }, p.timeout));
                try {
                    x = 1,
                    c.send(y, r)
                } catch (C) {
                    if (!(2 > x))
                        throw C;
                    r(-1, C)
                }
            } else
                r(-1, "No Transport");
            return E
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }),
    fe.each(["get", "post"], function(e, t) {
        fe[t] = function(e, n, r, i) {
            return fe.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, fe.isPlainObject(e) && e))
        }
    }),
    fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    fe.fn.extend({
        wrapAll: function(e) {
            if (fe.isFunction(e))
                return this.each(function(t) {
                    fe(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return fe.isFunction(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = fe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = fe.isFunction(e);
            return this.each(function(n) {
                fe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    fe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
    }
    ,
    fe.expr.filters.visible = function(e) {
        return !fe.expr.filters.hidden(e)
    }
    ;
    var tn = /%20/g
      , nn = /\[\]$/
      , rn = /\r?\n/g
      , on = /^(?:submit|button|image|reset|file)$/i
      , an = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = fe.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional),
        fe.isArray(e) || e.jquery && !fe.isPlainObject(e))
            fe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                K(n, e[n], t, i);
        return r.join("&").replace(tn, "+")
    }
    ,
    fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !on.test(e) && (this.checked || !qe.test(e))
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }),
    fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    }
    : Z;
    var sn = 0
      , ln = {}
      , un = fe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in ln)
            ln[e](void 0, !0)
    }),
    de.cors = !!un && "withCredentials"in un,
    un = de.ajax = !!un,
    un && fe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = t.xhr(), s = ++sn;
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)
                        void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null),
                    n = function(e, r) {
                        var o, l, u;
                        if (n && (r || 4 === a.readyState))
                            if (delete ln[s],
                            n = void 0,
                            a.onreadystatechange = fe.noop,
                            r)
                                4 !== a.readyState && a.abort();
                            else {
                                u = {},
                                o = a.status,
                                "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (c) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        u && i(o, l, u, a.getAllResponseHeaders())
                    }
                    ,
                    t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    fe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e),
                e
            }
        }
    }),
    fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    fe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || fe("head")[0] || re.documentElement;
            return {
                send: function(r, i) {
                    t = re.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || i(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var cn = []
      , dn = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = cn.pop() || fe.expando + "_" + qt++;
            return this[e] = !0,
            e
        }
    }),
    fe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return a || fe.error(i + " was not called"),
            a[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[i],
        e[i] = function() {
            a = arguments
        }
        ,
        r.always(function() {
            void 0 === o ? fe(e).removeProp(i) : e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            cn.push(i)),
            a && fe.isFunction(o) && o(a[0]),
            a = o = void 0
        }),
        "script") : void 0
    }),
    de.createHTMLDocument = function() {
        if (!re.implementation.createHTMLDocument)
            return !1;
        var e = re.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>",
        2 === e.body.childNodes.length
    }(),
    fe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || (de.createHTMLDocument ? re.implementation.createHTMLDocument("") : re);
        var r = Ee.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = v([e], t, i),
        i && i.length && fe(i).remove(),
        fe.merge([], r.childNodes))
    }
    ;
    var pn = fe.fn.load;
    fe.fn.load = function(e, t, n) {
        if ("string" != typeof e && pn)
            return pn.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = fe.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        fe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && fe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? fe("<div>").append(fe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(a, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    fe.expr.filters.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    fe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u, c = fe.css(e, "position"), d = fe(e), p = {};
            "static" === c && (e.style.position = "relative"),
            s = d.offset(),
            o = fe.css(e, "top"),
            l = fe.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && fe.inArray("auto", [o, l]) > -1,
            u ? (r = d.position(),
            a = r.top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(l) || 0),
            fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, p) : d.css(p)
        }
    },
    fe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    fe.offset.setOffset(this, e, t)
                });
            var t, n, r = {
                top: 0,
                left: 0
            }, i = this[0], o = i && i.ownerDocument;
            if (o)
                return t = o.documentElement,
                fe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()),
                n = te(o),
                {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === fe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                fe.nodeName(e[0], "html") || (n = e.offset()),
                n.top += fe.css(e[0], "borderTopWidth", !0) - e.scrollTop(),
                n.left += fe.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()),
                {
                    top: t.top - n.top - fe.css(r, "marginTop", !0),
                    left: t.left - n.left - fe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position"); )
                    e = e.offsetParent;
                return e || ft
            })
        }
    }),
    fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        fe.fn[e] = function(r) {
            return Oe(this, function(e, r, i) {
                var o = te(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? fe(o).scrollLeft() : i, n ? i : fe(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }),
    fe.each(["top", "left"], function(e, t) {
        fe.cssHooks[t] = M(de.pixelPosition, function(e, n) {
            return n ? (n = mt(e, t),
            dt.test(n) ? fe(e).position()[t] + "px" : n) : void 0
        })
    }),
    fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            fe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Oe(this, function(t, n, r) {
                    var i;
                    return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? fe.css(t, n, a) : fe.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),
    fe.fn.extend({
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
    }),
    fe.fn.size = function() {
        return this.length
    }
    ,
    fe.fn.andSelf = fe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var fn = e.jQuery
      , hn = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = hn),
        t && e.jQuery === fe && (e.jQuery = fn),
        fe
    }
    ,
    t || (e.jQuery = e.$ = fe),
    fe
}),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, r = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r),
            i.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function(r) {
            var i, o, a, s, l, u;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("with-credentials") || null,
                l = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType,
                r.is("form")) {
                    i = r.data("ujs:submit-button-formmethod") || r.attr("method"),
                    o = r.data("ujs:submit-button-formaction") || r.attr("action"),
                    a = e(r[0].elements).serializeArray();
                    var c = r.data("ujs:submit-button");
                    c && (a.push(c),
                    r.data("ujs:submit-button", null)),
                    r.data("ujs:submit-button-formmethod", null),
                    r.data("ujs:submit-button-formaction", null)
                } else
                    r.is(n.inputChangeSelector) ? (i = r.data("method"),
                    o = r.data("url"),
                    a = r.serialize(),
                    r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get",
                    o = r.data("url"),
                    a = r.serialize(),
                    r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"),
                    o = n.href(r),
                    a = r.data("params") || null);
                return u = {
                    type: i || "GET",
                    data: a,
                    dataType: l,
                    beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script),
                        n.fire(r, "ajax:beforeSend", [e, i]) ? void r.trigger("ajax:send", e) : !1
                    },
                    success: function(e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        r.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                },
                s && (u.xhrFields = {
                    withCredentials: s
                }),
                o && (u.url = o),
                n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e,
                n.href = n.href,
                !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (r) {
                return !0
            }
        },
        handleMethod: function(r) {
            var i = n.href(r)
              , o = r.data("method")
              , a = r.attr("target")
              , s = n.csrfToken()
              , l = n.csrfParam()
              , u = e('<form method="post" action="' + i + '"></form>')
              , c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === t || s === t || n.isCrossDomain(i) || (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'),
            a && u.attr("target", a),
            u.hide().append(c).appendTo("body"),
            u.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, r;
            n = e.is("button") ? "html" : "val",
            r = e.data("disable-with"),
            r !== t && (e.data("ujs:enable-with", e[n]()),
            e[n](r)),
            e.prop("disabled", !0),
            e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.prop("disabled", !1),
            e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, r = e.data("confirm"), i = !1;
            if (!r)
                return !0;
            if (n.fire(e, "confirm")) {
                try {
                    i = n.confirm(r)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                t = n.fire(e, "confirm:complete", [i])
            }
            return i && t
        },
        blankInputs: function(t, n, r) {
            var i, o, a = e(), s = n || "input,textarea", l = t.find(s);
            return l.each(function() {
                if (i = e(this),
                o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val(),
                o === r) {
                    if (i.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length)
                        return !0;
                    a = a.add(i)
                }
            }),
            a.length ? a : !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
        },
        disableElement: function(e) {
            var r = e.data("disable-with");
            r !== t && (e.data("ujs:enable-with", e.html()),
            e.html(r)),
            e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            }),
            e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable"),
            e.removeData("ujs:disabled")
        }
    },
    n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }),
    e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }),
        e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }),
    r.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }),
    r.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(e(this))
    }),
    r.delegate(n.linkClickSelector, "click.rails", function(t) {
        var r = e(this)
          , i = r.data("method")
          , o = r.data("params")
          , a = t.metaKey || t.ctrlKey;
        if (!n.allowAction(r))
            return n.stopEverything(t);
        if (!a && r.is(n.linkDisableSelector) && n.disableElement(r),
        n.isRemote(r)) {
            if (a && (!i || "GET" === i) && !o)
                return !0;
            var s = n.handleRemote(r);
            return s === !1 ? n.enableElement(r) : s.fail(function() {
                n.enableElement(r)
            }),
            !1
        }
        return i ? (n.handleMethod(r),
        !1) : void 0
    }),
    r.delegate(n.buttonClickSelector, "click.rails", function(t) {
        var r = e(this);
        if (!n.allowAction(r) || !n.isRemote(r))
            return n.stopEverything(t);
        r.is(n.buttonDisableSelector) && n.disableFormElement(r);
        var i = n.handleRemote(r);
        return i === !1 ? n.enableFormElement(r) : i.fail(function() {
            n.enableFormElement(r)
        }),
        !1
    }),
    r.delegate(n.inputChangeSelector, "change.rails", function(t) {
        var r = e(this);
        return n.allowAction(r) && n.isRemote(r) ? (n.handleRemote(r),
        !1) : n.stopEverything(t)
    }),
    r.delegate(n.formSubmitSelector, "submit.rails", function(r) {
        var i, o, a = e(this), s = n.isRemote(a);
        if (!n.allowAction(a))
            return n.stopEverything(r);
        if (a.attr("novalidate") === t)
            if (a.data("ujs:formnovalidate-button") === t) {
                if (i = n.blankInputs(a, n.requiredInputSelector, !1),
                i && n.fire(a, "ajax:aborted:required", [i]))
                    return n.stopEverything(r)
            } else
                a.data("ujs:formnovalidate-button", t);
        if (s) {
            if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(a)
                }, 13),
                l
            }
            return n.handleRemote(a),
            !1
        }
        setTimeout(function() {
            n.disableFormElements(a)
        }, 13)
    }),
    r.delegate(n.formInputClickSelector, "click.rails", function(t) {
        var r = e(this);
        if (!n.allowAction(r))
            return n.stopEverything(t);
        var i = r.attr("name")
          , o = i ? {
            name: i,
            value: r.val()
        } : null
          , a = r.closest("form");
        0 === a.length && (a = e("#" + r.attr("form"))),
        a.data("ujs:submit-button", o),
        a.data("ujs:formnovalidate-button", r.attr("formnovalidate")),
        a.data("ujs:submit-button-formaction", r.attr("formaction")),
        a.data("ujs:submit-button-formmethod", r.attr("formmethod"))
    }),
    r.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
        this === t.target && n.disableFormElements(e(this))
    }),
    r.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this === t.target && n.enableFormElements(e(this))
    }),
    e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
window.jscolor || (window.jscolor = function() {
    var e = {
        register: function() {
            e.attachDOMReadyEvent(e.init),
            e.attachEvent(document, "mousedown", e.onDocumentMouseDown),
            e.attachEvent(document, "touchstart", e.onDocumentTouchStart),
            e.attachEvent(window, "resize", e.onWindowResize)
        },
        init: function() {
            e.jscolor.lookupClass && e.jscolor.installByClassName(e.jscolor.lookupClass)
        },
        tryInstallOnElements: function(t, n) {
            for (var r = new RegExp("(^|\\s)(" + n + ")(\\s*(\\{[^}]*\\})|\\s|$)","i"), i = 0; i < t.length; i += 1)
                if (void 0 === t[i].type || "color" != t[i].type.toLowerCase() || !e.isColorAttrSupported) {
                    var o;
                    if (!t[i].jscolor && t[i].className && (o = t[i].className.match(r))) {
                        var a = t[i]
                          , s = null
                          , l = e.getDataAttr(a, "jscolor");
                        null !== l ? s = l : o[4] && (s = o[4]);
                        var u = {};
                        if (s)
                            try {
                                u = new Function("return (" + s + ")")()
                            } catch (c) {
                                e.warn("Error parsing jscolor options: " + c + ":\n" + s)
                            }
                        a.jscolor = new e.jscolor(a,u)
                    }
                }
        },
        isColorAttrSupported: function() {
            var e = document.createElement("input");
            return e.setAttribute && (e.setAttribute("type", "color"),
            "color" == e.type.toLowerCase()) ? !0 : !1
        }(),
        isCanvasSupported: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }(),
        fetchElement: function(e) {
            return "string" == typeof e ? document.getElementById(e) : e
        },
        isElementType: function(e, t) {
            return e.nodeName.toLowerCase() === t.toLowerCase()
        },
        getDataAttr: function(e, t) {
            var n = "data-" + t
              , r = e.getAttribute(n);
            return null !== r ? r : null
        },
        attachEvent: function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
        },
        detachEvent: function(e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
        },
        _attachedGroupEvents: {},
        attachGroupEvent: function(t, n, r, i) {
            e._attachedGroupEvents.hasOwnProperty(t) || (e._attachedGroupEvents[t] = []),
            e._attachedGroupEvents[t].push([n, r, i]),
            e.attachEvent(n, r, i)
        },
        detachGroupEvents: function(t) {
            if (e._attachedGroupEvents.hasOwnProperty(t)) {
                for (var n = 0; n < e._attachedGroupEvents[t].length; n += 1) {
                    var r = e._attachedGroupEvents[t][n];
                    e.detachEvent(r[0], r[1], r[2])
                }
                delete e._attachedGroupEvents[t]
            }
        },
        attachDOMReadyEvent: function(e) {
            var t = !1
              , n = function() {
                t || (t = !0,
                e())
            };
            if ("complete" === document.readyState)
                return void setTimeout(n, 1);
            if (document.addEventListener)
                document.addEventListener("DOMContentLoaded", n, !1),
                window.addEventListener("load", n, !1);
            else if (document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee),
                n())
            }),
            window.attachEvent("onload", n),
            document.documentElement.doScroll && window == window.top)) {
                var r = function() {
                    if (document.body)
                        try {
                            document.documentElement.doScroll("left"),
                            n()
                        } catch (e) {
                            setTimeout(r, 1)
                        }
                };
                r()
            }
        },
        warn: function(e) {
            window.console && window.console.warn && window.console.warn(e)
        },
        preventDefault: function(e) {
            e.preventDefault && e.preventDefault(),
            e.returnValue = !1
        },
        captureTarget: function(t) {
            t.setCapture && (e._capturedTarget = t,
            e._capturedTarget.setCapture())
        },
        releaseTarget: function() {
            e._capturedTarget && (e._capturedTarget.releaseCapture(),
            e._capturedTarget = null)
        },
        fireEvent: function(e, t) {
            if (e)
                if (document.createEvent) {
                    var n = document.createEvent("HTMLEvents");
                    n.initEvent(t, !0, !0),
                    e.dispatchEvent(n)
                } else if (document.createEventObject) {
                    var n = document.createEventObject();
                    e.fireEvent("on" + t, n)
                } else
                    e["on" + t] && e["on" + t]()
        },
        classNameToList: function(e) {
            return e.replace(/^\s+|\s+$/g, "").split(/\s+/)
        },
        hasClass: function(e, t) {
            return t ? -1 != (" " + e.className.replace(/\s+/g, " ") + " ").indexOf(" " + t + " ") : !1
        },
        setClass: function(t, n) {
            for (var r = e.classNameToList(n), i = 0; i < r.length; i += 1)
                e.hasClass(t, r[i]) || (t.className += (t.className ? " " : "") + r[i])
        },
        unsetClass: function(t, n) {
            for (var r = e.classNameToList(n), i = 0; i < r.length; i += 1) {
                var o = new RegExp("^\\s*" + r[i] + "\\s*|\\s*" + r[i] + "\\s*$|\\s+" + r[i] + "(\\s+)","g");
                t.className = t.className.replace(o, "$1")
            }
        },
        getStyle: function(e) {
            return window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
        },
        setStyle: function() {
            var e = document.createElement("div")
              , t = function(t) {
                for (var n = 0; n < t.length; n += 1)
                    if (t[n]in e.style)
                        return t[n]
            }
              , n = {
                borderRadius: t(["borderRadius", "MozBorderRadius", "webkitBorderRadius"]),
                boxShadow: t(["boxShadow", "MozBoxShadow", "webkitBoxShadow"])
            };
            return function(e, t, r) {
                switch (t.toLowerCase()) {
                case "opacity":
                    var i = Math.round(100 * parseFloat(r));
                    e.style.opacity = r,
                    e.style.filter = "alpha(opacity=" + i + ")";
                    break;
                default:
                    e.style[n[t]] = r
                }
            }
        }(),
        setBorderRadius: function(t, n) {
            e.setStyle(t, "borderRadius", n || "0")
        },
        setBoxShadow: function(t, n) {
            e.setStyle(t, "boxShadow", n || "none")
        },
        getElementPos: function(t, n) {
            var r = 0
              , i = 0
              , o = t.getBoundingClientRect();
            if (r = o.left,
            i = o.top,
            !n) {
                var a = e.getViewPos();
                r += a[0],
                i += a[1]
            }
            return [r, i]
        },
        getElementSize: function(e) {
            return [e.offsetWidth, e.offsetHeight]
        },
        getAbsPointerPos: function(e) {
            e || (e = window.event);
            var t = 0
              , n = 0;
            return "undefined" != typeof e.changedTouches && e.changedTouches.length ? (t = e.changedTouches[0].clientX,
            n = e.changedTouches[0].clientY) : "number" == typeof e.clientX && (t = e.clientX,
            n = e.clientY),
            {
                x: t,
                y: n
            }
        },
        getRelPointerPos: function(e) {
            e || (e = window.event);
            var t = e.target || e.srcElement
              , n = t.getBoundingClientRect()
              , r = 0
              , i = 0
              , o = 0
              , a = 0;
            return "undefined" != typeof e.changedTouches && e.changedTouches.length ? (o = e.changedTouches[0].clientX,
            a = e.changedTouches[0].clientY) : "number" == typeof e.clientX && (o = e.clientX,
            a = e.clientY),
            r = o - n.left,
            i = a - n.top,
            {
                x: r,
                y: i
            }
        },
        getViewPos: function() {
            var e = document.documentElement;
            return [(window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0), (window.pageYOffset || e.scrollTop) - (e.clientTop || 0)]
        },
        getViewSize: function() {
            var e = document.documentElement;
            return [window.innerWidth || e.clientWidth, window.innerHeight || e.clientHeight]
        },
        redrawPosition: function() {
            if (e.picker && e.picker.owner) {
                var t, n, r = e.picker.owner;
                r.fixed ? (t = e.getElementPos(r.targetElement, !0),
                n = [0, 0]) : (t = e.getElementPos(r.targetElement),
                n = e.getViewPos());
                var i, o, a, s = e.getElementSize(r.targetElement), l = e.getViewSize(), u = e.getPickerOuterDims(r);
                switch (r.position.toLowerCase()) {
                case "left":
                    i = 1,
                    o = 0,
                    a = -1;
                    break;
                case "right":
                    i = 1,
                    o = 0,
                    a = 1;
                    break;
                case "top":
                    i = 0,
                    o = 1,
                    a = -1;
                    break;
                default:
                    i = 0,
                    o = 1,
                    a = 1
                }
                var c = (s[o] + u[o]) / 2;
                if (r.smartPosition)
                    var d = [-n[i] + t[i] + u[i] > l[i] && -n[i] + t[i] + s[i] / 2 > l[i] / 2 && t[i] + s[i] - u[i] >= 0 ? t[i] + s[i] - u[i] : t[i], -n[o] + t[o] + s[o] + u[o] - c + c * a > l[o] ? -n[o] + t[o] + s[o] / 2 > l[o] / 2 && t[o] + s[o] - c - c * a >= 0 ? t[o] + s[o] - c - c * a : t[o] + s[o] - c + c * a : t[o] + s[o] - c + c * a >= 0 ? t[o] + s[o] - c + c * a : t[o] + s[o] - c - c * a];
                else
                    var d = [t[i], t[o] + s[o] - c + c * a];
                var p = d[i]
                  , f = d[o]
                  , h = r.fixed ? "fixed" : "absolute"
                  , m = (d[0] + u[0] > t[0] || d[0] < t[0] + s[0]) && d[1] + u[1] < t[1] + s[1];
                e._drawPosition(r, p, f, h, m)
            }
        },
        _drawPosition: function(t, n, r, i, o) {
            var a = o ? 0 : t.shadowBlur;
            e.picker.wrap.style.position = i,
            e.picker.wrap.style.left = n + "px",
            e.picker.wrap.style.top = r + "px",
            e.setBoxShadow(e.picker.boxS, t.shadow ? new e.BoxShadow(0,a,t.shadowBlur,0,t.shadowColor) : null)
        },
        getPickerDims: function(t) {
            var n = !!e.getSliderComponent(t)
              , r = [2 * t.insetWidth + 2 * t.padding + t.width + (n ? 2 * t.insetWidth + e.getPadToSliderPadding(t) + t.sliderSize : 0), 2 * t.insetWidth + 2 * t.padding + t.height + (t.closable ? 2 * t.insetWidth + t.padding + t.buttonHeight : 0)];
            return r
        },
        getPickerOuterDims: function(t) {
            var n = e.getPickerDims(t);
            return [n[0] + 2 * t.borderWidth, n[1] + 2 * t.borderWidth]
        },
        getPadToSliderPadding: function(e) {
            return Math.max(e.padding, 1.5 * (2 * e.pointerBorderWidth + e.pointerThickness))
        },
        getPadYComponent: function(e) {
            switch (e.mode.charAt(1).toLowerCase()) {
            case "v":
                return "v"
            }
            return "s"
        },
        getSliderComponent: function(e) {
            if (e.mode.length > 2)
                switch (e.mode.charAt(2).toLowerCase()) {
                case "s":
                    return "s";
                case "v":
                    return "v"
                }
            return null
        },
        onDocumentMouseDown: function(t) {
            t || (t = window.event);
            var n = t.target || t.srcElement;
            n._jscLinkedInstance ? n._jscLinkedInstance.showOnClick && n._jscLinkedInstance.show() : n._jscControlName ? e.onControlPointerStart(t, n, n._jscControlName, "mouse") : e.picker && e.picker.owner && e.picker.owner.hide()
        },
        onDocumentTouchStart: function(t) {
            t || (t = window.event);
            var n = t.target || t.srcElement;
            n._jscLinkedInstance ? n._jscLinkedInstance.showOnClick && n._jscLinkedInstance.show() : n._jscControlName ? e.onControlPointerStart(t, n, n._jscControlName, "touch") : e.picker && e.picker.owner && e.picker.owner.hide()
        },
        onWindowResize: function(t) {
            e.redrawPosition()
        },
        onParentScroll: function(t) {
            e.picker && e.picker.owner && e.picker.owner.hide()
        },
        _pointerMoveEvent: {
            mouse: "mousemove",
            touch: "touchmove"
        },
        _pointerEndEvent: {
            mouse: "mouseup",
            touch: "touchend"
        },
        _pointerOrigin: null,
        _capturedTarget: null,
        onControlPointerStart: function(t, n, r, i) {
            var o = n._jscInstance;
            e.preventDefault(t),
            e.captureTarget(n);
            var a = function(o, a) {
                e.attachGroupEvent("drag", o, e._pointerMoveEvent[i], e.onDocumentPointerMove(t, n, r, i, a)),
                e.attachGroupEvent("drag", o, e._pointerEndEvent[i], e.onDocumentPointerEnd(t, n, r, i))
            };
            if (a(document, [0, 0]),
            window.parent && window.frameElement) {
                var s = window.frameElement.getBoundingClientRect()
                  , l = [-s.left, -s.top];
                a(window.parent.window.document, l)
            }
            var u = e.getAbsPointerPos(t)
              , c = e.getRelPointerPos(t);
            switch (e._pointerOrigin = {
                x: u.x - c.x,
                y: u.y - c.y
            },
            r) {
            case "pad":
                switch (e.getSliderComponent(o)) {
                case "s":
                    0 === o.hsv[1] && o.fromHSV(null, 100, null);
                    break;
                case "v":
                    0 === o.hsv[2] && o.fromHSV(null, null, 100)
                }
                e.setPad(o, t, 0, 0);
                break;
            case "sld":
                e.setSld(o, t, 0)
            }
            e.dispatchFineChange(o)
        },
        onDocumentPointerMove: function(t, n, r, i, o) {
            return function(t) {
                var i = n._jscInstance;
                switch (r) {
                case "pad":
                    t || (t = window.event),
                    e.setPad(i, t, o[0], o[1]),
                    e.dispatchFineChange(i);
                    break;
                case "sld":
                    t || (t = window.event),
                    e.setSld(i, t, o[1]),
                    e.dispatchFineChange(i)
                }
            }
        },
        onDocumentPointerEnd: function(t, n, r, i) {
            return function(t) {
                var r = n._jscInstance;
                e.detachGroupEvents("drag"),
                e.releaseTarget(),
                e.dispatchChange(r)
            }
        },
        dispatchChange: function(t) {
            t.valueElement && e.isElementType(t.valueElement, "input") && e.fireEvent(t.valueElement, "change")
        },
        dispatchFineChange: function(e) {
            if (e.onFineChange) {
                var t;
                t = "string" == typeof e.onFineChange ? new Function(e.onFineChange) : e.onFineChange,
                t.call(e)
            }
        },
        setPad: function(t, n, r, i) {
            var o = e.getAbsPointerPos(n)
              , a = r + o.x - e._pointerOrigin.x - t.padding - t.insetWidth
              , s = i + o.y - e._pointerOrigin.y - t.padding - t.insetWidth
              , l = a * (360 / (t.width - 1))
              , u = 100 - s * (100 / (t.height - 1));
            switch (e.getPadYComponent(t)) {
            case "s":
                t.fromHSV(l, u, null, e.leaveSld);
                break;
            case "v":
                t.fromHSV(l, null, u, e.leaveSld)
            }
        },
        setSld: function(t, n, r) {
            var i = e.getAbsPointerPos(n)
              , o = r + i.y - e._pointerOrigin.y - t.padding - t.insetWidth
              , a = 100 - o * (100 / (t.height - 1));
            switch (e.getSliderComponent(t)) {
            case "s":
                t.fromHSV(null, a, null, e.leavePad);
                break;
            case "v":
                t.fromHSV(null, null, a, e.leavePad)
            }
        },
        _vmlNS: "jsc_vml_",
        _vmlCSS: "jsc_vml_css_",
        _vmlReady: !1,
        initVML: function() {
            if (!e._vmlReady) {
                var t = document;
                if (t.namespaces[e._vmlNS] || t.namespaces.add(e._vmlNS, "urn:schemas-microsoft-com:vml"),
                !t.styleSheets[e._vmlCSS]) {
                    var n = ["shape", "shapetype", "group", "background", "path", "formulas", "handles", "fill", "stroke", "shadow", "textbox", "textpath", "imagedata", "line", "polyline", "curve", "rect", "roundrect", "oval", "arc", "image"]
                      , r = t.createStyleSheet();
                    r.owningElement.id = e._vmlCSS;
                    for (var i = 0; i < n.length; i += 1)
                        r.addRule(e._vmlNS + "\\:" + n[i], "behavior:url(#default#VML);")
                }
                e._vmlReady = !0
            }
        },
        createPalette: function() {
            var t = {
                elm: null,
                draw: null
            };
            if (e.isCanvasSupported) {
                var n = document.createElement("canvas")
                  , r = n.getContext("2d")
                  , i = function(e, t, i) {
                    n.width = e,
                    n.height = t,
                    r.clearRect(0, 0, n.width, n.height);
                    var o = r.createLinearGradient(0, 0, n.width, 0);
                    o.addColorStop(0, "#F00"),
                    o.addColorStop(1 / 6, "#FF0"),
                    o.addColorStop(2 / 6, "#0F0"),
                    o.addColorStop(.5, "#0FF"),
                    o.addColorStop(4 / 6, "#00F"),
                    o.addColorStop(5 / 6, "#F0F"),
                    o.addColorStop(1, "#F00"),
                    r.fillStyle = o,
                    r.fillRect(0, 0, n.width, n.height);
                    var a = r.createLinearGradient(0, 0, 0, n.height);
                    switch (i.toLowerCase()) {
                    case "s":
                        a.addColorStop(0, "rgba(255,255,255,0)"),
                        a.addColorStop(1, "rgba(255,255,255,1)");
                        break;
                    case "v":
                        a.addColorStop(0, "rgba(0,0,0,0)"),
                        a.addColorStop(1, "rgba(0,0,0,1)")
                    }
                    r.fillStyle = a,
                    r.fillRect(0, 0, n.width, n.height)
                };
                t.elm = n,
                t.draw = i
            } else {
                e.initVML();
                var o = document.createElement("div");
                o.style.position = "relative",
                o.style.overflow = "hidden";
                var a = document.createElement(e._vmlNS + ":fill");
                a.type = "gradient",
                a.method = "linear",
                a.angle = "90",
                a.colors = "16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0";
                var s = document.createElement(e._vmlNS + ":rect");
                s.style.position = "absolute",
                s.style.left = "-1px",
                s.style.top = "-1px",
                s.stroked = !1,
                s.appendChild(a),
                o.appendChild(s);
                var l = document.createElement(e._vmlNS + ":fill");
                l.type = "gradient",
                l.method = "linear",
                l.angle = "180",
                l.opacity = "0";
                var u = document.createElement(e._vmlNS + ":rect");
                u.style.position = "absolute",
                u.style.left = "-1px",
                u.style.top = "-1px",
                u.stroked = !1,
                u.appendChild(l),
                o.appendChild(u);
                var i = function(e, t, n) {
                    switch (o.style.width = e + "px",
                    o.style.height = t + "px",
                    s.style.width = u.style.width = e + 1 + "px",
                    s.style.height = u.style.height = t + 1 + "px",
                    a.color = "#F00",
                    a.color2 = "#F00",
                    n.toLowerCase()) {
                    case "s":
                        l.color = l.color2 = "#FFF";
                        break;
                    case "v":
                        l.color = l.color2 = "#000"
                    }
                };
                t.elm = o,
                t.draw = i
            }
            return t
        },
        createSliderGradient: function() {
            var t = {
                elm: null,
                draw: null
            };
            if (e.isCanvasSupported) {
                var n = document.createElement("canvas")
                  , r = n.getContext("2d")
                  , i = function(e, t, i, o) {
                    n.width = e,
                    n.height = t,
                    r.clearRect(0, 0, n.width, n.height);
                    var a = r.createLinearGradient(0, 0, 0, n.height);
                    a.addColorStop(0, i),
                    a.addColorStop(1, o),
                    r.fillStyle = a,
                    r.fillRect(0, 0, n.width, n.height)
                };
                t.elm = n,
                t.draw = i
            } else {
                e.initVML();
                var o = document.createElement("div");
                o.style.position = "relative",
                o.style.overflow = "hidden";
                var a = document.createElement(e._vmlNS + ":fill");
                a.type = "gradient",
                a.method = "linear",
                a.angle = "180";
                var s = document.createElement(e._vmlNS + ":rect");
                s.style.position = "absolute",
                s.style.left = "-1px",
                s.style.top = "-1px",
                s.stroked = !1,
                s.appendChild(a),
                o.appendChild(s);
                var i = function(e, t, n, r) {
                    o.style.width = e + "px",
                    o.style.height = t + "px",
                    s.style.width = e + 1 + "px",
                    s.style.height = t + 1 + "px",
                    a.color = n,
                    a.color2 = r
                };
                t.elm = o,
                t.draw = i
            }
            return t
        },
        leaveValue: 1,
        leaveStyle: 2,
        leavePad: 4,
        leaveSld: 8,
        BoxShadow: function() {
            var e = function(e, t, n, r, i, o) {
                this.hShadow = e,
                this.vShadow = t,
                this.blur = n,
                this.spread = r,
                this.color = i,
                this.inset = !!o
            };
            return e.prototype.toString = function() {
                var e = [Math.round(this.hShadow) + "px", Math.round(this.vShadow) + "px", Math.round(this.blur) + "px", Math.round(this.spread) + "px", this.color];
                return this.inset && e.push("inset"),
                e.join(" ")
            }
            ,
            e
        }(),
        jscolor: function(t, n) {
            function r(e, t, n) {
                e /= 255,
                t /= 255,
                n /= 255;
                var r = Math.min(Math.min(e, t), n)
                  , i = Math.max(Math.max(e, t), n)
                  , o = i - r;
                if (0 === o)
                    return [null, 0, 100 * i];
                var a = e === r ? 3 + (n - t) / o : t === r ? 5 + (e - n) / o : 1 + (t - e) / o;
                return [60 * (6 === a ? 0 : a), 100 * (o / i), 100 * i]
            }
            function i(e, t, n) {
                var r = 255 * (n / 100);
                if (null === e)
                    return [r, r, r];
                e /= 60,
                t /= 100;
                var i = Math.floor(e)
                  , o = i % 2 ? e - i : 1 - (e - i)
                  , a = r * (1 - t)
                  , s = r * (1 - t * o);
                switch (i) {
                case 6:
                case 0:
                    return [r, s, a];
                case 1:
                    return [s, r, a];
                case 2:
                    return [a, r, s];
                case 3:
                    return [a, s, r];
                case 4:
                    return [s, a, r];
                case 5:
                    return [r, a, s]
                }
            }
            function o() {
                e.unsetClass(h.targetElement, h.activeClass),
                e.picker.wrap.parentNode.removeChild(e.picker.wrap),
                delete e.picker.owner
            }
            function a() {
                function t() {
                    var e = h.insetColor.split(/\s+/)
                      , t = e.length < 2 ? e[0] : e[1] + " " + e[0] + " " + e[0] + " " + e[1];
                    n.btn.style.borderColor = t
                }
                h._processParentElementsInDOM(),
                e.picker || (e.picker = {
                    owner: null,
                    wrap: document.createElement("div"),
                    box: document.createElement("div"),
                    boxS: document.createElement("div"),
                    boxB: document.createElement("div"),
                    pad: document.createElement("div"),
                    padB: document.createElement("div"),
                    padM: document.createElement("div"),
                    padPal: e.createPalette(),
                    cross: document.createElement("div"),
                    crossBY: document.createElement("div"),
                    crossBX: document.createElement("div"),
                    crossLY: document.createElement("div"),
                    crossLX: document.createElement("div"),
                    sld: document.createElement("div"),
                    sldB: document.createElement("div"),
                    sldM: document.createElement("div"),
                    sldGrad: e.createSliderGradient(),
                    sldPtrS: document.createElement("div"),
                    sldPtrIB: document.createElement("div"),
                    sldPtrMB: document.createElement("div"),
                    sldPtrOB: document.createElement("div"),
                    btn: document.createElement("div"),
                    btnT: document.createElement("span")
                },
                e.picker.pad.appendChild(e.picker.padPal.elm),
                e.picker.padB.appendChild(e.picker.pad),
                e.picker.cross.appendChild(e.picker.crossBY),
                e.picker.cross.appendChild(e.picker.crossBX),
                e.picker.cross.appendChild(e.picker.crossLY),
                e.picker.cross.appendChild(e.picker.crossLX),
                e.picker.padB.appendChild(e.picker.cross),
                e.picker.box.appendChild(e.picker.padB),
                e.picker.box.appendChild(e.picker.padM),
                e.picker.sld.appendChild(e.picker.sldGrad.elm),
                e.picker.sldB.appendChild(e.picker.sld),
                e.picker.sldB.appendChild(e.picker.sldPtrOB),
                e.picker.sldPtrOB.appendChild(e.picker.sldPtrMB),
                e.picker.sldPtrMB.appendChild(e.picker.sldPtrIB),
                e.picker.sldPtrIB.appendChild(e.picker.sldPtrS),
                e.picker.box.appendChild(e.picker.sldB),
                e.picker.box.appendChild(e.picker.sldM),
                e.picker.btn.appendChild(e.picker.btnT),
                e.picker.box.appendChild(e.picker.btn),
                e.picker.boxB.appendChild(e.picker.box),
                e.picker.wrap.appendChild(e.picker.boxS),
                e.picker.wrap.appendChild(e.picker.boxB));
                var n = e.picker
                  , r = !!e.getSliderComponent(h)
                  , i = e.getPickerDims(h)
                  , o = 2 * h.pointerBorderWidth + h.pointerThickness + 2 * h.crossSize
                  , a = e.getPadToSliderPadding(h)
                  , u = Math.min(h.borderRadius, Math.round(h.padding * Math.PI))
                  , c = "crosshair";
                n.wrap.style.clear = "both",
                n.wrap.style.width = i[0] + 2 * h.borderWidth + "px",
                n.wrap.style.height = i[1] + 2 * h.borderWidth + "px",
                n.wrap.style.zIndex = h.zIndex,
                n.box.style.width = i[0] + "px",
                n.box.style.height = i[1] + "px",
                n.boxS.style.position = "absolute",
                n.boxS.style.left = "0",
                n.boxS.style.top = "0",
                n.boxS.style.width = "100%",
                n.boxS.style.height = "100%",
                e.setBorderRadius(n.boxS, u + "px"),
                n.boxB.style.position = "relative",
                n.boxB.style.border = h.borderWidth + "px solid",
                n.boxB.style.borderColor = h.borderColor,
                n.boxB.style.background = h.backgroundColor,
                e.setBorderRadius(n.boxB, u + "px"),
                n.padM.style.background = n.sldM.style.background = "#FFF",
                e.setStyle(n.padM, "opacity", "0"),
                e.setStyle(n.sldM, "opacity", "0"),
                n.pad.style.position = "relative",
                n.pad.style.width = h.width + "px",
                n.pad.style.height = h.height + "px",
                n.padPal.draw(h.width, h.height, e.getPadYComponent(h)),
                n.padB.style.position = "absolute",
                n.padB.style.left = h.padding + "px",
                n.padB.style.top = h.padding + "px",
                n.padB.style.border = h.insetWidth + "px solid",
                n.padB.style.borderColor = h.insetColor,
                n.padM._jscInstance = h,
                n.padM._jscControlName = "pad",
                n.padM.style.position = "absolute",
                n.padM.style.left = "0",
                n.padM.style.top = "0",
                n.padM.style.width = h.padding + 2 * h.insetWidth + h.width + a / 2 + "px",
                n.padM.style.height = i[1] + "px",
                n.padM.style.cursor = c,
                n.cross.style.position = "absolute",
                n.cross.style.left = n.cross.style.top = "0",
                n.cross.style.width = n.cross.style.height = o + "px",
                n.crossBY.style.position = n.crossBX.style.position = "absolute",
                n.crossBY.style.background = n.crossBX.style.background = h.pointerBorderColor,
                n.crossBY.style.width = n.crossBX.style.height = 2 * h.pointerBorderWidth + h.pointerThickness + "px",
                n.crossBY.style.height = n.crossBX.style.width = o + "px",
                n.crossBY.style.left = n.crossBX.style.top = Math.floor(o / 2) - Math.floor(h.pointerThickness / 2) - h.pointerBorderWidth + "px",
                n.crossBY.style.top = n.crossBX.style.left = "0",
                n.crossLY.style.position = n.crossLX.style.position = "absolute",
                n.crossLY.style.background = n.crossLX.style.background = h.pointerColor,
                n.crossLY.style.height = n.crossLX.style.width = o - 2 * h.pointerBorderWidth + "px",
                n.crossLY.style.width = n.crossLX.style.height = h.pointerThickness + "px",
                n.crossLY.style.left = n.crossLX.style.top = Math.floor(o / 2) - Math.floor(h.pointerThickness / 2) + "px",
                n.crossLY.style.top = n.crossLX.style.left = h.pointerBorderWidth + "px",
                n.sld.style.overflow = "hidden",
                n.sld.style.width = h.sliderSize + "px",
                n.sld.style.height = h.height + "px",
                n.sldGrad.draw(h.sliderSize, h.height, "#000", "#000"),
                n.sldB.style.display = r ? "block" : "none",
                n.sldB.style.position = "absolute",
                n.sldB.style.right = h.padding + "px",
                n.sldB.style.top = h.padding + "px",
                n.sldB.style.border = h.insetWidth + "px solid",
                n.sldB.style.borderColor = h.insetColor,
                n.sldM._jscInstance = h,
                n.sldM._jscControlName = "sld",
                n.sldM.style.display = r ? "block" : "none",
                n.sldM.style.position = "absolute",
                n.sldM.style.right = "0",
                n.sldM.style.top = "0",
                n.sldM.style.width = h.sliderSize + a / 2 + h.padding + 2 * h.insetWidth + "px",
                n.sldM.style.height = i[1] + "px",
                n.sldM.style.cursor = "default",
                n.sldPtrIB.style.border = n.sldPtrOB.style.border = h.pointerBorderWidth + "px solid " + h.pointerBorderColor,
                n.sldPtrOB.style.position = "absolute",
                n.sldPtrOB.style.left = -(2 * h.pointerBorderWidth + h.pointerThickness) + "px",
                n.sldPtrOB.style.top = "0",
                n.sldPtrMB.style.border = h.pointerThickness + "px solid " + h.pointerColor,
                n.sldPtrS.style.width = h.sliderSize + "px",
                n.sldPtrS.style.height = g + "px",
                n.btn.style.display = h.closable ? "block" : "none",
                n.btn.style.position = "absolute",
                n.btn.style.left = h.padding + "px",
                n.btn.style.bottom = h.padding + "px",
                n.btn.style.padding = "0 15px",
                n.btn.style.height = h.buttonHeight + "px",
                n.btn.style.border = h.insetWidth + "px solid",
                t(),
                n.btn.style.color = h.buttonColor,
                n.btn.style.font = "12px sans-serif",
                n.btn.style.textAlign = "center";
                try {
                    n.btn.style.cursor = "pointer"
                } catch (d) {
                    n.btn.style.cursor = "hand"
                }
                n.btn.onmousedown = function() {
                    h.hide()
                }
                ,
                n.btnT.style.lineHeight = h.buttonHeight + "px",
                n.btnT.innerHTML = "",
                n.btnT.appendChild(document.createTextNode(h.closeText)),
                s(),
                l(),
                e.picker.owner && e.picker.owner !== h && e.unsetClass(e.picker.owner.targetElement, h.activeClass),
                e.picker.owner = h,
                e.isElementType(m, "body") ? e.redrawPosition() : e._drawPosition(h, 0, 0, "relative", !1),
                n.wrap.parentNode != m && m.appendChild(n.wrap),
                e.setClass(h.targetElement, h.activeClass)
            }
            function s() {
                switch (e.getPadYComponent(h)) {
                case "s":
                    var t = 1;
                    break;
                case "v":
                    var t = 2
                }
                var n = Math.round(h.hsv[0] / 360 * (h.width - 1))
                  , r = Math.round((1 - h.hsv[t] / 100) * (h.height - 1))
                  , o = 2 * h.pointerBorderWidth + h.pointerThickness + 2 * h.crossSize
                  , a = -Math.floor(o / 2);
                switch (e.picker.cross.style.left = n + a + "px",
                e.picker.cross.style.top = r + a + "px",
                e.getSliderComponent(h)) {
                case "s":
                    var s = i(h.hsv[0], 100, h.hsv[2])
                      , l = i(h.hsv[0], 0, h.hsv[2])
                      , u = "rgb(" + Math.round(s[0]) + "," + Math.round(s[1]) + "," + Math.round(s[2]) + ")"
                      , c = "rgb(" + Math.round(l[0]) + "," + Math.round(l[1]) + "," + Math.round(l[2]) + ")";
                    e.picker.sldGrad.draw(h.sliderSize, h.height, u, c);
                    break;
                case "v":
                    var d = i(h.hsv[0], h.hsv[1], 100)
                      , u = "rgb(" + Math.round(d[0]) + "," + Math.round(d[1]) + "," + Math.round(d[2]) + ")"
                      , c = "#000";
                    e.picker.sldGrad.draw(h.sliderSize, h.height, u, c)
                }
            }
            function l() {
                var t = e.getSliderComponent(h);
                if (t) {
                    switch (t) {
                    case "s":
                        var n = 1;
                        break;
                    case "v":
                        var n = 2
                    }
                    var r = Math.round((1 - h.hsv[n] / 100) * (h.height - 1));
                    e.picker.sldPtrOB.style.top = r - (2 * h.pointerBorderWidth + h.pointerThickness) - Math.floor(g / 2) + "px"
                }
            }
            function u() {
                return e.picker && e.picker.owner === h
            }
            function c() {
                h.importColor()
            }
            this.value = null,
            this.valueElement = t,
            this.styleElement = t,
            this.required = !0,
            this.refine = !0,
            this.hash = !1,
            this.uppercase = !0,
            this.onFineChange = null,
            this.activeClass = "jscolor-active",
            this.minS = 0,
            this.maxS = 100,
            this.minV = 0,
            this.maxV = 100,
            this.hsv = [0, 0, 100],
            this.rgb = [255, 255, 255],
            this.width = 181,
            this.height = 101,
            this.showOnClick = !0,
            this.mode = "HSV",
            this.position = "bottom",
            this.smartPosition = !0,
            this.sliderSize = 16,
            this.crossSize = 8,
            this.closable = !1,
            this.closeText = "Close",
            this.buttonColor = "#000000",
            this.buttonHeight = 18,
            this.padding = 12,
            this.backgroundColor = "#FFFFFF",
            this.borderWidth = 1,
            this.borderColor = "#BBBBBB",
            this.borderRadius = 8,
            this.insetWidth = 1,
            this.insetColor = "#BBBBBB",
            this.shadow = !0,
            this.shadowBlur = 15,
            this.shadowColor = "rgba(0,0,0,0.2)",
            this.pointerColor = "#4C4C4C",
            this.pointerBorderColor = "#FFFFFF",
            this.pointerBorderWidth = 1,
            this.pointerThickness = 2,
            this.zIndex = 1e3,
            this.container = null;
            for (var d in n)
                n.hasOwnProperty(d) && (this[d] = n[d]);
            if (this.hide = function() {
                u() && o()
            }
            ,
            this.show = function() {
                a()
            }
            ,
            this.redraw = function() {
                u() && a()
            }
            ,
            this.importColor = function() {
                this.valueElement && e.isElementType(this.valueElement, "input") ? this.refine ? !this.required && /^\s*$/.test(this.valueElement.value) ? (this.valueElement.value = "",
                this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage,
                this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor,
                this.styleElement.style.color = this.styleElement._jscOrigStyle.color),
                this.exportColor(e.leaveValue | e.leaveStyle)) : this.fromString(this.valueElement.value) || this.exportColor() : this.fromString(this.valueElement.value, e.leaveValue) || (this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage,
                this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor,
                this.styleElement.style.color = this.styleElement._jscOrigStyle.color),
                this.exportColor(e.leaveValue | e.leaveStyle)) : this.exportColor()
            }
            ,
            this.exportColor = function(t) {
                if (!(t & e.leaveValue) && this.valueElement) {
                    var n = this.toString();
                    this.uppercase && (n = n.toUpperCase()),
                    this.hash && (n = "#" + n),
                    e.isElementType(this.valueElement, "input") ? this.valueElement.value = n : this.valueElement.innerHTML = n
                }
                t & e.leaveStyle || this.styleElement && (this.styleElement.style.backgroundImage = "none",
                this.styleElement.style.backgroundColor = "#" + this.toString(),
                this.styleElement.style.color = this.isLight() ? "#000" : "#FFF"),
                t & e.leavePad || !u() || s(),
                t & e.leaveSld || !u() || l()
            }
            ,
            this.fromHSV = function(e, t, n, r) {
                if (null !== e) {
                    if (isNaN(e))
                        return !1;
                    e = Math.max(0, Math.min(360, e))
                }
                if (null !== t) {
                    if (isNaN(t))
                        return !1;
                    t = Math.max(0, Math.min(100, this.maxS, t), this.minS)
                }
                if (null !== n) {
                    if (isNaN(n))
                        return !1;
                    n = Math.max(0, Math.min(100, this.maxV, n), this.minV)
                }
                this.rgb = i(null === e ? this.hsv[0] : this.hsv[0] = e, null === t ? this.hsv[1] : this.hsv[1] = t, null === n ? this.hsv[2] : this.hsv[2] = n),
                this.exportColor(r)
            }
            ,
            this.fromRGB = function(e, t, n, o) {
                if (null !== e) {
                    if (isNaN(e))
                        return !1;
                    e = Math.max(0, Math.min(255, e))
                }
                if (null !== t) {
                    if (isNaN(t))
                        return !1;
                    t = Math.max(0, Math.min(255, t))
                }
                if (null !== n) {
                    if (isNaN(n))
                        return !1;
                    n = Math.max(0, Math.min(255, n))
                }
                var a = r(null === e ? this.rgb[0] : e, null === t ? this.rgb[1] : t, null === n ? this.rgb[2] : n);
                null !== a[0] && (this.hsv[0] = Math.max(0, Math.min(360, a[0]))),
                0 !== a[2] && (this.hsv[1] = null === a[1] ? null : Math.max(0, this.minS, Math.min(100, this.maxS, a[1]))),
                this.hsv[2] = null === a[2] ? null : Math.max(0, this.minV, Math.min(100, this.maxV, a[2]));
                var s = i(this.hsv[0], this.hsv[1], this.hsv[2]);
                this.rgb[0] = s[0],
                this.rgb[1] = s[1],
                this.rgb[2] = s[2],
                this.exportColor(o)
            }
            ,
            this.fromString = function(e, t) {
                var n;
                if (n = e.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i))
                    return 6 === n[1].length ? this.fromRGB(parseInt(n[1].substr(0, 2), 16), parseInt(n[1].substr(2, 2), 16), parseInt(n[1].substr(4, 2), 16), t) : this.fromRGB(parseInt(n[1].charAt(0) + n[1].charAt(0), 16), parseInt(n[1].charAt(1) + n[1].charAt(1), 16), parseInt(n[1].charAt(2) + n[1].charAt(2), 16), t),
                    !0;
                if (n = e.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
                    var r, i, o, a = n[1].split(","), s = /^\s*(\d*)(\.\d+)?\s*$/;
                    if (a.length >= 3 && (r = a[0].match(s)) && (i = a[1].match(s)) && (o = a[2].match(s))) {
                        var l = parseFloat((r[1] || "0") + (r[2] || ""))
                          , u = parseFloat((i[1] || "0") + (i[2] || ""))
                          , c = parseFloat((o[1] || "0") + (o[2] || ""));
                        return this.fromRGB(l, u, c, t),
                        !0
                    }
                }
                return !1
            }
            ,
            this.toString = function() {
                return (256 | Math.round(this.rgb[0])).toString(16).substr(1) + (256 | Math.round(this.rgb[1])).toString(16).substr(1) + (256 | Math.round(this.rgb[2])).toString(16).substr(1)
            }
            ,
            this.toHEXString = function() {
                return "#" + this.toString().toUpperCase()
            }
            ,
            this.toRGBString = function() {
                return "rgb(" + Math.round(this.rgb[0]) + "," + Math.round(this.rgb[1]) + "," + Math.round(this.rgb[2]) + ")"
            }
            ,
            this.isLight = function() {
                return .213 * this.rgb[0] + .715 * this.rgb[1] + .072 * this.rgb[2] > 127.5
            }
            ,
            this._processParentElementsInDOM = function() {
                if (!this._linkedElementsProcessed) {
                    this._linkedElementsProcessed = !0;
                    var t = this.targetElement;
                    do {
                        var n = e.getStyle(t);
                        n && "fixed" === n.position.toLowerCase() && (this.fixed = !0),
                        t !== this.targetElement && (t._jscEventsAttached || (e.attachEvent(t, "scroll", e.onParentScroll),
                        t._jscEventsAttached = !0))
                    } while ((t = t.parentNode) && !e.isElementType(t, "body"))
                }
            }
            ,
            "string" == typeof t) {
                var p = t
                  , f = document.getElementById(p);
                f ? this.targetElement = f : e.warn("Could not find target element with ID '" + p + "'")
            } else
                t ? this.targetElement = t : e.warn("Invalid target element: '" + t + "'");
            if (this.targetElement._jscLinkedInstance)
                return void e.warn("Cannot link jscolor twice to the same element. Skipping.");
            this.targetElement._jscLinkedInstance = this,
            this.valueElement = e.fetchElement(this.valueElement),
            this.styleElement = e.fetchElement(this.styleElement);
            var h = this
              , m = this.container ? e.fetchElement(this.container) : document.getElementsByTagName("body")[0]
              , g = 3;
            if (e.isElementType(this.targetElement, "button"))
                if (this.targetElement.onclick) {
                    var v = this.targetElement.onclick;
                    this.targetElement.onclick = function(e) {
                        return v.call(this, e),
                        !1
                    }
                } else
                    this.targetElement.onclick = function() {
                        return !1
                    }
                    ;
            if (this.valueElement && e.isElementType(this.valueElement, "input")) {
                var y = function() {
                    h.fromString(h.valueElement.value, e.leaveValue),
                    e.dispatchFineChange(h)
                };
                e.attachEvent(this.valueElement, "keyup", y),
                e.attachEvent(this.valueElement, "input", y),
                e.attachEvent(this.valueElement, "blur", c),
                this.valueElement.setAttribute("autocomplete", "off")
            }
            this.styleElement && (this.styleElement._jscOrigStyle = {
                backgroundImage: this.styleElement.style.backgroundImage,
                backgroundColor: this.styleElement.style.backgroundColor,
                color: this.styleElement.style.color
            }),
            this.value ? this.fromString(this.value) || this.exportColor() : this.importColor()
        }
    };
    return e.jscolor.lookupClass = "jscolor",
    e.jscolor.installByClassName = function(t) {
        var n = document.getElementsByTagName("input")
          , r = document.getElementsByTagName("button");
        e.tryInstallOnElements(n, t),
        e.tryInstallOnElements(r, t)
    }
    ,
    e.register(),
    e.jscolor
}()),
function() {}
.call(this),
function() {}
.call(this);
var ready;
ready = function() {
    setTimeout(function() {
        $("#notice_wrapper").fadeOut("slow", function() {
            $(this).remove()
        })
    }, 4500),
    $(".close").click(function(e) {
        e.preventDefault(),
        $("#notice_wrapper").remove()
    }),
    $(".overlay").click(function() {
        $("#about").addClass("show"),
        $("#about .inner").addClass("animated bounceInDown")
    }),
    $(".overlay_close").click(function() {
        $("#about").removeClass("show")
    })
}
,
$(document).ready(ready),
$(document).on("page:load", ready);
