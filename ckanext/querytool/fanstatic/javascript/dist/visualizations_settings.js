! function(t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 111)
}([function(t, e, i) {
    var r = i(20)("wks"),
        n = i(17),
        a = i(1).Symbol,
        o = "function" == typeof a;
    (t.exports = function(t) {
        return r[t] || (r[t] = o && a[t] || (o ? a : n)("Symbol." + t))
    }).store = r
}, function(t, e) {
    var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = i)
}, function(t, e, i) {
    var r = i(1),
        n = i(14),
        a = i(5),
        o = i(10),
        l = i(24),
        _ = function(t, e, i) {
            var c, d, f, u, s = t & _.F,
                p = t & _.G,
                h = t & _.S,
                m = t & _.P,
                v = t & _.B,
                g = p ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                y = p ? n : n[e] || (n[e] = {}),
                b = y.prototype || (y.prototype = {});
            for (c in p && (i = e), i) f = ((d = !s && g && void 0 !== g[c]) ? g : i)[c], u = v && d ? l(f, r) : m && "function" == typeof f ? l(Function.call, f) : f, g && o(g, c, f, t & _.U), y[c] != f && a(y, c, u), m && b[c] != f && (b[c] = f)
        };
    r.core = n, _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128, t.exports = _
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, i) {
    var r = i(6);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, i) {
    var r = i(9),
        n = i(19);
    t.exports = i(7) ? function(t, e, i) {
        return r.f(t, e, n(1, i))
    } : function(t, e, i) {
        return t[e] = i, t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, i) {
    t.exports = !i(3)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    var i = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return i.call(t, e)
    }
}, function(t, e, i) {
    var r = i(4),
        n = i(36),
        a = i(23),
        o = Object.defineProperty;
    e.f = i(7) ? Object.defineProperty : function(t, e, i) {
        if (r(t), e = a(e, !0), r(i), n) try {
            return o(t, e, i)
        } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
        return "value" in i && (t[e] = i.value), t
    }
}, function(t, e, i) {
    var r = i(1),
        n = i(5),
        a = i(8),
        o = i(17)("src"),
        l = i(49),
        _ = ("" + l).split("toString");
    i(14).inspectSource = function(t) {
        return l.call(t)
    }, (t.exports = function(t, e, i, l) {
        var c = "function" == typeof i;
        c && (a(i, "name") || n(i, "name", e)), t[e] !== i && (c && (a(i, o) || n(i, o, t[e] ? "" + t[e] : _.join(String(e)))), t === r ? t[e] = i : l ? t[e] ? t[e] = i : n(t, e, i) : (delete t[e], n(t, e, i)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[o] || l.call(this)
    })
}, function(t, e, i) {
    var r = i(15),
        n = Math.min;
    t.exports = function(t) {
        return t > 0 ? n(r(t), 9007199254740991) : 0
    }
}, function(t, e, i) {
    var r = i(13);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e) {
    var i = t.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = i)
}, function(t, e) {
    var i = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : i)(t)
    }
}, function(t, e, i) {
    var r = i(34),
        n = i(13);
    t.exports = function(t) {
        return r(n(t))
    }
}, function(t, e) {
    var i = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + r).toString(36))
    }
}, function(t, e) {
    var i = {}.toString;
    t.exports = function(t) {
        return i.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, i) {
    var r = i(14),
        n = i(1),
        a = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: i(21) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    t.exports = !1
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, i) {
    var r = i(6);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var i, n;
        if (e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n;
        if ("function" == typeof(i = t.valueOf) && !r(n = i.call(t))) return n;
        if (!e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, i) {
    var r = i(22);
    t.exports = function(t, e, i) {
        if (r(t), void 0 === e) return t;
        switch (i) {
            case 1:
                return function(i) {
                    return t.call(e, i)
                };
            case 2:
                return function(i, r) {
                    return t.call(e, i, r)
                };
            case 3:
                return function(i, r, n) {
                    return t.call(e, i, r, n)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, i) {
    var r = i(43),
        n = i(30);
    t.exports = Object.keys || function(t) {
        return r(t, n)
    }
}, function(t, e, i) {
    var r = i(24),
        n = i(34),
        a = i(12),
        o = i(11),
        l = i(50);
    t.exports = function(t, e) {
        var i = 1 == t,
            _ = 2 == t,
            c = 3 == t,
            d = 4 == t,
            f = 6 == t,
            u = 5 == t || f,
            s = e || l;
        return function(e, l, p) {
            for (var h, m, v = a(e), g = n(v), y = r(l, p, 3), b = o(g.length), x = 0, $ = i ? s(e, b) : _ ? s(e, 0) : void 0; b > x; x++)
                if ((u || x in g) && (m = y(h = g[x], x, v), t))
                    if (i) $[x] = m;
                    else if (m) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return h;
                case 6:
                    return x;
                case 2:
                    $.push(h)
            } else if (d) return !1;
            return f ? -1 : c || d ? d : $
        }
    }
}, function(t, e, i) {
    var r = i(20)("keys"),
        n = i(17);
    t.exports = function(t) {
        return r[t] || (r[t] = n(t))
    }
}, function(t, e, i) {
    "use strict";
    var r = i(3);
    t.exports = function(t, e) {
        return !!t && r(function() {
            e ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, i) {
    var r = i(0)("unscopables"),
        n = Array.prototype;
    null == n[r] && i(5)(n, r, {}), t.exports = function(t) {
        n[r][t] = !0
    }
}, function(t, e, i) {
    var r = i(9).f,
        n = i(8),
        a = i(0)("toStringTag");
    t.exports = function(t, e, i) {
        t && !n(t = i ? t : t.prototype, a) && r(t, a, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, i) {
    "use strict";
    var r, n, a = i(52),
        o = RegExp.prototype.exec,
        l = String.prototype.replace,
        _ = o,
        c = (r = /a/, n = /b*/g, o.call(r, "a"), o.call(n, "a"), 0 !== r.lastIndex || 0 !== n.lastIndex),
        d = void 0 !== /()??/.exec("")[1];
    (c || d) && (_ = function(t) {
        var e, i, r, n, _ = this;
        return d && (i = new RegExp("^" + _.source + "$(?!\\s)", a.call(_))), c && (e = _.lastIndex), r = o.call(_, t), c && r && (_.lastIndex = _.global ? r.index + r[0].length : e), d && r && r.length > 1 && l.call(r[0], i, function() {
            for (n = 1; n < arguments.length - 2; n++) void 0 === arguments[n] && (r[n] = void 0)
        }), r
    }), t.exports = _
}, function(t, e, i) {
    var r = i(18);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e, i) {
    var r = i(6),
        n = i(1).document,
        a = r(n) && r(n.createElement);
    t.exports = function(t) {
        return a ? n.createElement(t) : {}
    }
}, function(t, e, i) {
    t.exports = !i(7) && !i(3)(function() {
        return 7 != Object.defineProperty(i(35)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, i) {
    var r = i(4),
        n = i(59),
        a = i(30),
        o = i(28)("IE_PROTO"),
        l = function() {},
        _ = function() {
            var t, e = i(35)("iframe"),
                r = a.length;
            for (e.style.display = "none", i(60).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _ = t.F; r--;) delete _.prototype[a[r]];
            return _()
        };
    t.exports = Object.create || function(t, e) {
        var i;
        return null !== t ? (l.prototype = r(t), i = new l, l.prototype = null, i[o] = t) : i = _(), void 0 === e ? i : n(i, e)
    }
}, function(t, e, i) {
    var r = i(18),
        n = i(0)("toStringTag"),
        a = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, i, o;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), n)) ? i : a ? r(e) : "Object" == (o = r(e)) && "function" == typeof e.callee ? "Arguments" : o
    }
}, function(t, e, i) {
    "use strict";
    var r = i(54)(!0);
    t.exports = function(t, e, i) {
        return e + (i ? r(t, e).length : 1)
    }
}, function(t, e, i) {
    "use strict";
    var r = i(38),
        n = RegExp.prototype.exec;
    t.exports = function(t, e) {
        var i = t.exec;
        if ("function" == typeof i) {
            var a = i.call(t, e);
            if ("object" != typeof a) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return a
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return n.call(t, e)
    }
}, function(t, e, i) {
    "use strict";
    i(62);
    var r = i(10),
        n = i(5),
        a = i(3),
        o = i(13),
        l = i(0),
        _ = i(33),
        c = l("species"),
        d = !a(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }),
        f = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var i = "ab".split(t);
            return 2 === i.length && "a" === i[0] && "b" === i[1]
        }();
    t.exports = function(t, e, i) {
        var u = l(t),
            s = !a(function() {
                var e = {};
                return e[u] = function() {
                    return 7
                }, 7 != "" [t](e)
            }),
            p = s ? !a(function() {
                var e = !1,
                    i = /a/;
                return i.exec = function() {
                    return e = !0, null
                }, "split" === t && (i.constructor = {}, i.constructor[c] = function() {
                    return i
                }), i[u](""), !e
            }) : void 0;
        if (!s || !p || "replace" === t && !d || "split" === t && !f) {
            var h = /./ [u],
                m = i(o, u, "" [t], function(t, e, i, r, n) {
                    return e.exec === _ ? s && !n ? {
                        done: !0,
                        value: h.call(e, i, r)
                    } : {
                        done: !0,
                        value: t.call(i, e, r)
                    } : {
                        done: !1
                    }
                }),
                v = m[0],
                g = m[1];
            r(String.prototype, t, v), n(RegExp.prototype, u, 2 == e ? function(t, e) {
                return g.call(t, this, e)
            } : function(t) {
                return g.call(t, this)
            })
        }
    }
}, function(t, e, i) {
    var r = i(18);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, i) {
    var r = i(8),
        n = i(16),
        a = i(44)(!1),
        o = i(28)("IE_PROTO");
    t.exports = function(t, e) {
        var i, l = n(t),
            _ = 0,
            c = [];
        for (i in l) i != o && r(l, i) && c.push(i);
        for (; e.length > _;) r(l, i = e[_++]) && (~a(c, i) || c.push(i));
        return c
    }
}, function(t, e, i) {
    var r = i(16),
        n = i(11),
        a = i(46);
    t.exports = function(t) {
        return function(e, i, o) {
            var l, _ = r(e),
                c = n(_.length),
                d = a(o, c);
            if (t && i != i) {
                for (; c > d;)
                    if ((l = _[d++]) != l) return !0
            } else
                for (; c > d; d++)
                    if ((t || d in _) && _[d] === i) return t || d || 0;
            return !t && -1
        }
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, i) {
    var r = i(15),
        n = Math.max,
        a = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? n(t + e, 0) : a(t, e)
    }
}, function(t, e, i) {
    var r = i(43),
        n = i(30).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, n)
    }
}, function(t, e, i) {
    var r = i(45),
        n = i(19),
        a = i(16),
        o = i(23),
        l = i(8),
        _ = i(36),
        c = Object.getOwnPropertyDescriptor;
    e.f = i(7) ? c : function(t, e) {
        if (t = a(t), e = o(e, !0), _) try {
            return c(t, e)
        } catch (t) {}
        if (l(t, e)) return n(!r.f.call(t, e), t[e])
    }
}, function(t, e, i) {
    t.exports = i(20)("native-function-to-string", Function.toString)
}, function(t, e, i) {
    var r = i(51);
    t.exports = function(t, e) {
        return new(r(t))(e)
    }
}, function(t, e, i) {
    var r = i(6),
        n = i(42),
        a = i(0)("species");
    t.exports = function(t) {
        var e;
        return n(t) && ("function" != typeof(e = t.constructor) || e !== Array && !n(e.prototype) || (e = void 0), r(e) && null === (e = e[a]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, i) {
    "use strict";
    var r = i(4);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(27)(5),
        a = !0;
    "find" in [] && Array(1).find(function() {
        a = !1
    }), r(r.P + r.F * a, "Array", {
        find: function(t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), i(31)("find")
}, function(t, e, i) {
    var r = i(15),
        n = i(13);
    t.exports = function(t) {
        return function(e, i) {
            var a, o, l = String(n(e)),
                _ = r(i),
                c = l.length;
            return _ < 0 || _ >= c ? t ? "" : void 0 : (a = l.charCodeAt(_)) < 55296 || a > 56319 || _ + 1 === c || (o = l.charCodeAt(_ + 1)) < 56320 || o > 57343 ? t ? l.charAt(_) : a : t ? l.slice(_, _ + 2) : o - 56320 + (a - 55296 << 10) + 65536
        }
    }
}, function(t, e, i) {
    var r = i(8),
        n = i(12),
        a = i(28)("IE_PROTO"),
        o = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = n(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
    }
}, function(t, e, i) {
    "use strict";
    var r = i(31),
        n = i(66),
        a = i(25),
        o = i(16);
    t.exports = i(57)(Array, "Array", function(t, e) {
        this._t = o(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            i = this._i++;
        return !t || i >= t.length ? (this._t = void 0, n(1)) : n(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
    }, "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries")
}, function(t, e, i) {
    "use strict";
    var r = i(21),
        n = i(2),
        a = i(10),
        o = i(5),
        l = i(25),
        _ = i(58),
        c = i(32),
        d = i(55),
        f = i(0)("iterator"),
        u = !([].keys && "next" in [].keys()),
        s = function() {
            return this
        };
    t.exports = function(t, e, i, p, h, m, v) {
        _(i, e, p);
        var g, y, b, x = function(t) {
                if (!u && t in w) return w[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new i(this, t)
                        }
                }
                return function() {
                    return new i(this, t)
                }
            },
            $ = e + " Iterator",
            S = "values" == h,
            O = !1,
            w = t.prototype,
            k = w[f] || w["@@iterator"] || h && w[h],
            j = k || x(h),
            E = h ? S ? x("entries") : j : void 0,
            P = "Array" == e && w.entries || k;
        if (P && (b = d(P.call(new t))) !== Object.prototype && b.next && (c(b, $, !0), r || "function" == typeof b[f] || o(b, f, s)), S && k && "values" !== k.name && (O = !0, j = function() {
                return k.call(this)
            }), r && !v || !u && !O && w[f] || o(w, f, j), l[e] = j, l[$] = s, h)
            if (g = {
                    values: S ? j : x("values"),
                    keys: m ? j : x("keys"),
                    entries: E
                }, v)
                for (y in g) y in w || a(w, y, g[y]);
            else n(n.P + n.F * (u || O), e, g);
        return g
    }
}, function(t, e, i) {
    "use strict";
    var r = i(37),
        n = i(19),
        a = i(32),
        o = {};
    i(5)(o, i(0)("iterator"), function() {
        return this
    }), t.exports = function(t, e, i) {
        t.prototype = r(o, {
            next: n(1, i)
        }), a(t, e + " Iterator")
    }
}, function(t, e, i) {
    var r = i(9),
        n = i(4),
        a = i(26);
    t.exports = i(7) ? Object.defineProperties : function(t, e) {
        n(t);
        for (var i, o = a(e), l = o.length, _ = 0; l > _;) r.f(t, i = o[_++], e[i]);
        return t
    }
}, function(t, e, i) {
    var r = i(1).document;
    t.exports = r && r.documentElement
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = i(12),
        a = i(11),
        o = i(15),
        l = i(39),
        _ = i(40),
        c = Math.max,
        d = Math.min,
        f = Math.floor,
        u = /\$([$&`']|\d\d?|<[^>]*>)/g,
        s = /\$([$&`']|\d\d?)/g;
    i(41)("replace", 2, function(t, e, i, p) {
        return [function(r, n) {
            var a = t(this),
                o = null == r ? void 0 : r[e];
            return void 0 !== o ? o.call(r, a, n) : i.call(String(a), r, n)
        }, function(t, e) {
            var n = p(i, t, this, e);
            if (n.done) return n.value;
            var f = r(t),
                u = String(this),
                s = "function" == typeof e;
            s || (e = String(e));
            var m = f.global;
            if (m) {
                var v = f.unicode;
                f.lastIndex = 0
            }
            for (var g = [];;) {
                var y = _(f, u);
                if (null === y) break;
                if (g.push(y), !m) break;
                "" === String(y[0]) && (f.lastIndex = l(u, a(f.lastIndex), v))
            }
            for (var b, x = "", $ = 0, S = 0; S < g.length; S++) {
                y = g[S];
                for (var O = String(y[0]), w = c(d(o(y.index), u.length), 0), k = [], j = 1; j < y.length; j++) k.push(void 0 === (b = y[j]) ? b : String(b));
                var E = y.groups;
                if (s) {
                    var P = [O].concat(k, w, u);
                    void 0 !== E && P.push(E);
                    var T = String(e.apply(void 0, P))
                } else T = h(O, u, w, k, E, e);
                w >= $ && (x += u.slice($, w) + T, $ = w + O.length)
            }
            return x + u.slice($)
        }];

        function h(t, e, r, a, o, l) {
            var _ = r + t.length,
                c = a.length,
                d = s;
            return void 0 !== o && (o = n(o), d = u), i.call(l, d, function(i, n) {
                var l;
                switch (n.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, r);
                    case "'":
                        return e.slice(_);
                    case "<":
                        l = o[n.slice(1, -1)];
                        break;
                    default:
                        var d = +n;
                        if (0 === d) return i;
                        if (d > c) {
                            var u = f(d / 10);
                            return 0 === u ? i : u <= c ? void 0 === a[u - 1] ? n.charAt(1) : a[u - 1] + n.charAt(1) : i
                        }
                        l = a[d - 1]
                }
                return void 0 === l ? "" : l
            })
        }
    })
}, function(t, e, i) {
    "use strict";
    var r = i(33);
    i(2)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}, , function(t, e, i) {
    var r = i(6),
        n = i(18),
        a = i(0)("match");
    t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == n(t))
    }
}, function(t, e, i) {
    var r = i(4),
        n = i(22),
        a = i(0)("species");
    t.exports = function(t, e) {
        var i, o = r(t).constructor;
        return void 0 === o || null == (i = r(o)[a]) ? e : n(i)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, i) {
    var r = i(1),
        n = i(14),
        a = i(21),
        o = i(68),
        l = i(9).f;
    t.exports = function(t) {
        var e = n.Symbol || (n.Symbol = a ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || l(e, t, {
            value: o.f(t)
        })
    }
}, function(t, e, i) {
    e.f = i(0)
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, i) {
    "use strict";
    var r = i(64),
        n = i(4),
        a = i(65),
        o = i(39),
        l = i(11),
        _ = i(40),
        c = i(33),
        d = i(3),
        f = Math.min,
        u = [].push,
        s = !d(function() {
            RegExp(4294967295, "y")
        });
    i(41)("split", 2, function(t, e, i, d) {
        var p;
        return p = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
            var n = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return i.call(n, t, e);
            for (var a, o, l, _ = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, s = void 0 === e ? 4294967295 : e >>> 0, p = new RegExp(t.source, d + "g");
                (a = c.call(p, n)) && !((o = p.lastIndex) > f && (_.push(n.slice(f, a.index)), a.length > 1 && a.index < n.length && u.apply(_, a.slice(1)), l = a[0].length, f = o, _.length >= s));) p.lastIndex === a.index && p.lastIndex++;
            return f === n.length ? !l && p.test("") || _.push("") : _.push(n.slice(f)), _.length > s ? _.slice(0, s) : _
        } : "0".split(void 0, 0).length ? function(t, e) {
            return void 0 === t && 0 === e ? [] : i.call(this, t, e)
        } : i, [function(i, r) {
            var n = t(this),
                a = null == i ? void 0 : i[e];
            return void 0 !== a ? a.call(i, n, r) : p.call(String(n), i, r)
        }, function(t, e) {
            var r = d(p, t, this, e, p !== i);
            if (r.done) return r.value;
            var c = n(t),
                u = String(this),
                h = a(c, RegExp),
                m = c.unicode,
                v = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (s ? "y" : "g"),
                g = new h(s ? c : "^(?:" + c.source + ")", v),
                y = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === y) return [];
            if (0 === u.length) return null === _(g, u) ? [u] : [];
            for (var b = 0, x = 0, $ = []; x < u.length;) {
                g.lastIndex = s ? x : 0;
                var S, O = _(g, s ? u : u.slice(x));
                if (null === O || (S = f(l(g.lastIndex + (s ? 0 : x)), u.length)) === b) x = o(u, x, m);
                else {
                    if ($.push(u.slice(b, x)), $.length === y) return $;
                    for (var w = 1; w <= O.length - 1; w++)
                        if ($.push(O[w]), $.length === y) return $;
                    x = b = S
                }
            }
            return $.push(u.slice(b)), $
        }]
    })
}, function(t, e, i) {
    for (var r = i(56), n = i(26), a = i(10), o = i(1), l = i(5), _ = i(25), c = i(0), d = c("iterator"), f = c("toStringTag"), u = _.Array, s = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = n(s), h = 0; h < p.length; h++) {
        var m, v = p[h],
            g = s[v],
            y = o[v],
            b = y && y.prototype;
        if (b && (b[d] || l(b, d, u), b[f] || l(b, f, v), _[v] = u, g))
            for (m in r) b[m] || a(b, m, r[m], !0)
    }
}, , , , , , , , , , function(t, e, i) {
    i(67)("asyncIterator")
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(8),
        a = i(7),
        o = i(2),
        l = i(10),
        _ = i(83).KEY,
        c = i(3),
        d = i(20),
        f = i(32),
        u = i(17),
        s = i(0),
        p = i(68),
        h = i(67),
        m = i(84),
        v = i(42),
        g = i(4),
        y = i(6),
        b = i(16),
        x = i(23),
        $ = i(19),
        S = i(37),
        O = i(85),
        w = i(48),
        k = i(9),
        j = i(26),
        E = w.f,
        P = k.f,
        T = O.f,
        C = r.Symbol,
        z = r.JSON,
        A = z && z.stringify,
        I = s("_hidden"),
        M = s("toPrimitive"),
        L = {}.propertyIsEnumerable,
        R = d("symbol-registry"),
        F = d("symbols"),
        N = d("op-symbols"),
        q = Object.prototype,
        D = "function" == typeof C,
        V = r.QObject,
        G = !V || !V.prototype || !V.prototype.findChild,
        J = a && c(function() {
            return 7 != S(P({}, "a", {
                get: function() {
                    return P(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, i) {
            var r = E(q, e);
            r && delete q[e], P(t, e, i), r && t !== q && P(q, e, r)
        } : P,
        W = function(t) {
            var e = F[t] = S(C.prototype);
            return e._k = t, e
        },
        H = D && "symbol" == typeof C.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof C
        },
        U = function(t, e, i) {
            return t === q && U(N, e, i), g(t), e = x(e, !0), g(i), n(F, e) ? (i.enumerable ? (n(t, I) && t[I][e] && (t[I][e] = !1), i = S(i, {
                enumerable: $(0, !1)
            })) : (n(t, I) || P(t, I, $(1, {})), t[I][e] = !0), J(t, e, i)) : P(t, e, i)
        },
        B = function(t, e) {
            g(t);
            for (var i, r = m(e = b(e)), n = 0, a = r.length; a > n;) U(t, i = r[n++], e[i]);
            return t
        },
        K = function(t) {
            var e = L.call(this, t = x(t, !0));
            return !(this === q && n(F, t) && !n(N, t)) && (!(e || !n(this, t) || !n(F, t) || n(this, I) && this[I][t]) || e)
        },
        Y = function(t, e) {
            if (t = b(t), e = x(e, !0), t !== q || !n(F, e) || n(N, e)) {
                var i = E(t, e);
                return !i || !n(F, e) || n(t, I) && t[I][e] || (i.enumerable = !0), i
            }
        },
        Q = function(t) {
            for (var e, i = T(b(t)), r = [], a = 0; i.length > a;) n(F, e = i[a++]) || e == I || e == _ || r.push(e);
            return r
        },
        X = function(t) {
            for (var e, i = t === q, r = T(i ? N : b(t)), a = [], o = 0; r.length > o;) !n(F, e = r[o++]) || i && !n(q, e) || a.push(F[e]);
            return a
        };
    D || (l((C = function() {
        if (this instanceof C) throw TypeError("Symbol is not a constructor!");
        var t = u(arguments.length > 0 ? arguments[0] : void 0),
            e = function(i) {
                this === q && e.call(N, i), n(this, I) && n(this[I], t) && (this[I][t] = !1), J(this, t, $(1, i))
            };
        return a && G && J(q, t, {
            configurable: !0,
            set: e
        }), W(t)
    }).prototype, "toString", function() {
        return this._k
    }), w.f = Y, k.f = U, i(47).f = O.f = Q, i(45).f = K, i(69).f = X, a && !i(21) && l(q, "propertyIsEnumerable", K, !0), p.f = function(t) {
        return W(s(t))
    }), o(o.G + o.W + o.F * !D, {
        Symbol: C
    });
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) s(Z[tt++]);
    for (var et = j(s.store), it = 0; et.length > it;) h(et[it++]);
    o(o.S + o.F * !D, "Symbol", {
        for: function(t) {
            return n(R, t += "") ? R[t] : R[t] = C(t)
        },
        keyFor: function(t) {
            if (!H(t)) throw TypeError(t + " is not a symbol!");
            for (var e in R)
                if (R[e] === t) return e
        },
        useSetter: function() {
            G = !0
        },
        useSimple: function() {
            G = !1
        }
    }), o(o.S + o.F * !D, "Object", {
        create: function(t, e) {
            return void 0 === e ? S(t) : B(S(t), e)
        },
        defineProperty: U,
        defineProperties: B,
        getOwnPropertyDescriptor: Y,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: X
    }), z && o(o.S + o.F * (!D || c(function() {
        var t = C();
        return "[null]" != A([t]) || "{}" != A({
            a: t
        }) || "{}" != A(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, i, r = [t], n = 1; arguments.length > n;) r.push(arguments[n++]);
            if (i = e = r[1], (y(e) || void 0 !== t) && !H(t)) return v(e) || (e = function(t, e) {
                if ("function" == typeof i && (e = i.call(this, t, e)), !H(e)) return e
            }), r[1] = e, A.apply(z, r)
        }
    }), C.prototype[M] || i(5)(C.prototype, M, C.prototype.valueOf), f(C, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(t, e, i) {
    var r = i(17)("meta"),
        n = i(6),
        a = i(8),
        o = i(9).f,
        l = 0,
        _ = Object.isExtensible || function() {
            return !0
        },
        c = !i(3)(function() {
            return _(Object.preventExtensions({}))
        }),
        d = function(t) {
            o(t, r, {
                value: {
                    i: "O" + ++l,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!n(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!a(t, r)) {
                    if (!_(t)) return "F";
                    if (!e) return "E";
                    d(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!a(t, r)) {
                    if (!_(t)) return !0;
                    if (!e) return !1;
                    d(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return c && f.NEED && _(t) && !a(t, r) && d(t), t
            }
        }
}, function(t, e, i) {
    var r = i(26),
        n = i(69),
        a = i(45);
    t.exports = function(t) {
        var e = r(t),
            i = n.f;
        if (i)
            for (var o, l = i(t), _ = a.f, c = 0; l.length > c;) _.call(t, o = l[c++]) && e.push(o);
        return e
    }
}, function(t, e, i) {
    var r = i(16),
        n = i(47).f,
        a = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return o && "[object Window]" == a.call(t) ? function(t) {
            try {
                return n(t)
            } catch (t) {
                return o.slice()
            }
        }(t) : n(r(t))
    }
}, , , , , , , , , function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(44)(!1),
        a = [].indexOf,
        o = !!a && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (o || !i(29)(a)), "Array", {
        indexOf: function(t) {
            return o ? a.apply(this, arguments) || 0 : n(this, t, arguments[1])
        }
    })
}, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(96);
    r(r.P + r.F * i(97)("includes"), "String", {
        includes: function(t) {
            return !!~n(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, i) {
    var r = i(64),
        n = i(13);
    t.exports = function(t, e, i) {
        if (r(e)) throw TypeError("String#" + i + " doesn't accept regex!");
        return String(n(t))
    }
}, function(t, e, i) {
    var r = i(0)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (i) {
            try {
                return e[r] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(44)(!0);
    r(r.P, "Array", {
        includes: function(t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), i(31)("includes")
}, , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    i.r(e);
    i(95), i(94), i(112), i(98), i(70), i(81), i(82), i(71), i(61), i(53);

    function r() {
        $("select[id^=chart_field_graph_]").each(function() {
            $(this).change(function() {
                var t = $(this).attr("id"),
                    e = $("#chart_field_category_name_" + t[t.length - 1]);
                ["sbar", "shbar", "donut", "pie"].includes($(this).val()) ? (e.prop("value", ""), e.prop("disabled", !0)) : e.prop("disabled", !1);
                var i = $("#chart_field_x_tick_culling_max_" + t[t.length - 1]);
                ["bar", "hbar", "sbar", "shbar", "pie", "donut"].includes($(this).val()) ? i.prop("disabled", !0) : i.prop("disabled", !1);
                var r = $("#chart_field_show_labels_as_percentages_" + t[t.length - 1]),
                    n = $("#chart_field_x_text_rotate_" + t[t.length - 1]),
                    a = $("#chart_field_x_text_multiline_" + t[t.length - 1]),
                    o = $("#chart_field_y_label_" + t[t.length - 1]),
                    l = $("#chart_field_y_label_hide_" + t[t.length - 1]),
                    _ = $("#chart_field_y_from_zero_" + t[t.length - 1]),
                    c = $("#chart_field_y_ticks_format_" + t[t.length - 1]),
                    d = $("#chart_field_data_format_" + t[t.length - 1]),
                    f = $("#chart_field_labels_" + t[t.length - 1]),
                    u = $("#chart_field_static_reference_columns_" + t[t.length - 1]),
                    s = $("#chart_field_static_reference_label_" + t[t.length - 1]),
                    p = $("#chart_field_dynamic_reference_type_" + t[t.length - 1]),
                    h = $("#chart_field_dynamic_reference_factor_" + t[t.length - 1]),
                    m = $("#chart_field_dynamic_reference_label_" + t[t.length - 1]);
                ["pie", "donut"].includes($(this).val()) ? (r.prop("disabled", !1), n.prop("disabled", !0), a.prop("disabled", !0), o.prop("disabled", !0), l.prop("disabled", !0), _.prop("disabled", !0), c.prop("disabled", !0), d.prop("disabled", !0), f.prop("disabled", !0), u.prop("disabled", !0), s.prop("disabled", !0), p.prop("disabled", !0), h.prop("disabled", !0), m.prop("disabled", !0)) : (r.prop("disabled", !0), r.prop("checked", !1), n.prop("disabled", !1), a.prop("disabled", !1), o.prop("disabled", !1), l.prop("disabled", !1), _.prop("disabled", !1), c.prop("disabled", !1), d.prop("disabled", !1), f.prop("disabled", !1), u.prop("disabled", !1), s.prop("disabled", !1), p.prop("disabled", !1), h.prop("disabled", !1), m.prop("disabled", !1))
            })
        })
    }! function(t, e) {
        var i = {
            get: function(t, e, i) {
                var r = ckan.sandbox().client.endpoint + "/api/3/action/" + t + "?" + (e = $.param(e));
                return i || $.ajaxSetup({
                    async: !1
                }), $.getJSON(r)
            },
            post: function(t, e, i) {
                var r = ckan.sandbox().client.endpoint + "/api/3/action/" + t;
                return i || $.ajaxSetup({
                    async: !1
                }), $.post(r, JSON.stringify(e), "json")
            },
            getTemplate: function(t, e, i, r) {
                var n = $("html").attr("lang"),
                    a = ckan.url(n + "/api/1/util/snippet/" + encodeURIComponent(t));
                return "function" == typeof e && (r = i, i = e, e = {}), $.get(a, e || {}).then(i, r)
            }
        };

        function n(e) {
            var i, r;
            e ? (i = $("[id=chart_field_tick_count_" + e + "]"), r = $("[id=chart_field_y_ticks_format_" + e + "]")) : (i = $("[id*=chart_field_tick_count_]"), r = $("[id*=chart_field_y_ticks_format_]")), i.change(function(e) {
                var i = [{
                    text: t("Decimal (1 digit) e.g 2.5"),
                    value: ".1f"
                }, {
                    text: t("Decimal (2 digit) e.g 2.50"),
                    value: ".2f"
                }, {
                    text: t("Decimal (3 digit) e.g 2.501"),
                    value: ".3f"
                }, {
                    text: t("Decimal (4 digit) e.g 2.5012"),
                    value: ".4f"
                }, {
                    text: t("Currency e.g. $2,000"),
                    value: "$"
                }, {
                    text: t("Rounded e.g 2k"),
                    value: "s"
                }, {
                    text: t("Percentage (0 digit) e.g 25% for 0.25"),
                    value: ".0%"
                }, {
                    text: t("Percentage (1 digit) e.g 25.1% for 0.251"),
                    value: ".1%"
                }, {
                    text: t("Percentage (2 digit) e.g 25.12% for 0.2512"),
                    value: ".2%"
                }, {
                    text: t("Comma thousands separator (0 digit) e.g 2,512"),
                    value: ",.0f"
                }, {
                    text: t("Comma thousands separator (1 digit) e.g 2,512.3"),
                    value: ",.1f"
                }, {
                    text: t("Comma thousands separator (2 digit) e.g 2,512.34"),
                    value: ",.2f"
                }];
                "" !== $(this).val() ? a(r, i.slice(0, 3)) : a(r, i)
            })
        }

        function a(t, e) {
            t.children("option:not(:first)").remove(), $.each(e, function(e, i) {
                t.append($("<option></option>").attr("value", i.value).text(i.text))
            })
        }

        function o(t, e) {
            var r, n;
            r = e ? $("[id=" + t + "_field_filter_name_" + e + "]") : $("[id*=" + t + "_field_filter_name_]"), n = e ? $("[id=" + t + "_field_filter_value_" + e + "]") : $("[id*=" + t + "_field_filter_value_]"), r.change(function(t) {
                var e = $(this),
                    i = e.find(":selected").val(),
                    r = e.attr("id"),
                    n = r.replace("name", "value"),
                    a = r.replace("name", "alias"),
                    o = n.replace("value", "visibility"),
                    l = n.replace("field", "div"),
                    _ = a.replace("field", "div"),
                    c = o.replace("field", "div");
                $("#" + n + " option").length > 0 && $("#" + n).find("option").not(":first").remove(), "" === i ? ($("#" + n).prop("required", !1), $("#" + a).prop("required", !1), $("#" + l).addClass("hidden"), $("#" + _).addClass("hidden"), $("#" + c).addClass("hidden")) : ($("#" + n).prop("required", !0), $("#" + a).prop("required", !0), $("#" + l).removeClass("hidden"), $("#" + _).removeClass("hidden"), $("#" + c).removeClass("hidden"))
            }), n.mousedown(function(t) {
                var e = $(this),
                    r = e.attr("id"),
                    n = e.find(":selected").val(),
                    a = r.replace("value", "name"),
                    o = $("#" + a).find(":selected").val(),
                    l = $("#visualizations-form").data("chartResource"),
                    _ = $(this).find("option").size(),
                    c = $("#visualizations-form").data("mainFilters");
                _ <= 2 && i.get("get_filter_values", {
                    resource_id: l,
                    filter_name: o,
                    previous_filters: JSON.stringify(c)
                }, !1).done(function(t) {
                    $.each(t.result, function(t, e) {
                        n != e && $("#" + r).append(new Option(e, e))
                    })
                })
            })
        }

        function l() {
            $("[id*=chart_field_category_name_]").change(function(t) {
                var e = $(this),
                    i = e.find(":selected").val(),
                    r = e.attr("id").replace("category_name", "sort_div");
                "" === i ? $("#" + r).removeClass("hidden") : $("#" + r).addClass("hidden")
            })
        }

        function _() {
            $(".title textarea").change(function(e) {
                var i = nunjucks.configure({
                    tags: {
                        variableStart: "{",
                        variableEnd: "}"
                    }
                });
                try {
                    i.renderString($(e.target).val(), {}), e.target.setCustomValidity("")
                } catch (i) {
                    e.target.setCustomValidity(t("Template is invalid"))
                }
            }), $(".title-vars select").change(function(t) {
                var e = $(t.target),
                    i = e.closest(".item-wrapper").find(".control-group.title textarea");
                i.val(i.val() + e.val()), e.val("")
            })
        }

        function c() {
            $("[id*=chart_field_static_reference_columns_]").not(".select2-container").not(".select2-offscreen").select2({
                placeholder: t("Click to select one or more")
            }).change(function(e) {
                var i = [],
                    r = $(this).val(),
                    n = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var l, _ = (r || [])[Symbol.iterator](); !(n = (l = _.next()).done); n = !0) {
                        var c = l.value,
                            d = c.split("|")[0];
                        c.split("|")[1];
                        if (i.includes(d)) return void e.target.setCustomValidity(t("Static Reference Columns: maximum one column per measure"));
                        i.push(d)
                    }
                } catch (t) {
                    a = !0, o = t
                } finally {
                    try {
                        n || null == _.return || _.return()
                    } finally {
                        if (a) throw o
                    }
                }
                e.target.setCustomValidity("")
            })
        }

        function d(t) {
            $("#content-settings-items").children();
            var e, i, r, n, a, o, l = $(".image_item");
            t && (n = l.find("#field-image-url"), a = l.find("#field-image-upload"), e = "media_image_url_" + t, i = "media_image_upload_" + t, (r = l.find('[data-module="custom-image-upload"]')).attr("data-module", "image-upload"), r.attr("data-module-field_upload", i), r.attr("data-module-field_url", e), a.attr("name", i), n.attr("name", e), ckan.module.initializeElement(r[0])), t ? ($("[name*=media_image_url_" + t + "]"), o = $("[name*=media_image_upload_" + t + "]")) : ($("[name*=media_image_url_]"), o = $("[name*=media_image_upload_]")), o.on("change", function() {
                var t = $(this),
                    e = t.attr("name"),
                    i = e.substr(e.lastIndexOf("_") + 1);
                $("#image_upload_" + i).val(t.val())
            })
        }
        $(document).ready(function() {
            l(), o("chart"), o("map"), o("table"), d(), _(), c();
            var e = $("#visualization-settings-items"),
                a = $("#visualizations-form"),
                f = a.data("sqlString"),
                u = a.data("chartResource"),
                s = a.data("mapResource"),
                p = a.data("yAxisValues"),
                h = a.data("mainFiltersNames"),
                m = a.data("mainFilters"),
                v = $("#choose_y_axis_column");

            function g() {
                var t = $(".item");
                $.each(t, function(t, e) {
                    var i = t + 1;
                    if ((e = $(e)).context.id.indexOf("chart_field") >= 0) {
                        var r = e.find("[id*=chart_field_graph_]"),
                            n = e.find("[id*=chart_field_color_]"),
                            a = e.find("[id*=chart_field_axis_y_]"),
                            o = e.find("[id*=chart_field_axis_x_]"),
                            l = e.find("[id*=chart_field_title_]"),
                            _ = e.find("[id*=chart_field_x_text_rotate_]"),
                            c = e.find("[id*=chart_field_labels_]"),
                            d = e.find("[id*=chart_field_legend_]"),
                            f = e.find("[id*=chart_field_show_labels_as_percentages_]"),
                            u = e.find("[id*=chart_field_tooltip_name_]"),
                            s = e.find("[id*=chart_field_data_format_]"),
                            p = e.find("[id*=chart_field_y_ticks_format_]"),
                            h = e.find("[id*=chart_field_y_label_]"),
                            m = e.find("[id*=chart_field_y_label_hide_]"),
                            v = e.find("[id*=chart_field_y_from_zero_]"),
                            g = e.find("[id*=chart_field_padding_top_]"),
                            y = e.find("[id*=chart_field_padding_bottom_]"),
                            b = e.find("[id*=chart_field_tick_count_]"),
                            x = e.find("[id*=chart_field_size_]"),
                            S = e.find("[id*=chart_field_filter_name_]"),
                            O = e.find("[id*=chart_field_filter_value_]"),
                            w = e.find("[id*=chart_div_filter_value_]"),
                            k = e.find("[id*=chart_field_filter_alias_]"),
                            j = e.find("[id*=chart_div_filter_alias_]"),
                            E = e.find("[id*=chart_field_filter_visibility_]"),
                            P = e.find("[id*=chart_div_filter_visibility_]"),
                            T = e.find("[id*=chart_field_static_reference_columns_]"),
                            C = e.find("[id*=chart_field_static_reference_label_]"),
                            z = e.find("[id*=chart_field_dynamic_reference_type_]"),
                            A = e.find("[id*=chart_field_dynamic_reference_factor_]"),
                            I = e.find("[id*=chart_field_dynamic_reference_label_]"),
                            M = e.find("[id*=chart_field_chart_padding_left_]"),
                            L = e.find("[id*=chart_field_chart_padding_bottom_]"),
                            R = e.find("[id*=chart_field_x_text_multiline_]"),
                            F = e.find("[id*=chart_field_x_tick_culling_max_]"),
                            N = e.find("[id*=chart_field_category_name_]"),
                            q = e.find("[id*=resource_id_]"),
                            D = e.find("[id*=chart_field_sort_]"),
                            V = e.find("[id*=chart_field_sort_div_]");
                        e.attr("id", "chart_field_" + i), r.attr("id", "chart_field_graph_" + i), r.attr("name", "chart_field_graph_" + i), n.attr("id", "chart_field_color_" + i), n.attr("name", "chart_field_color_" + i), a.attr("id", "chart_field_axis_y_" + i), a.attr("name", "chart_field_axis_y_" + i), o.attr("id", "chart_field_axis_x_" + i), o.attr("name", "chart_field_axis_x_" + i), l.attr("id", "chart_field_title_" + i), l.attr("name", "chart_field_title_" + i), _.attr("id", "chart_field_x_text_rotate_" + i), _.attr("name", "chart_field_x_text_rotate_" + i), c.attr("id", "chart_field_labels_" + i), c.attr("name", "chart_field_labels_" + i), d.attr("id", "chart_field_legend_" + i), d.attr("name", "chart_field_legend_" + i), f.attr("id", "chart_field_show_labels_as_percentages_" + i), f.attr("name", "chart_field_show_labels_as_percentages_" + i), u.attr("id", "chart_field_tooltip_name_" + i), u.attr("name", "chart_field_tooltip_name_" + i), s.attr("id", "chart_field_data_format_" + i), s.attr("name", "chart_field_data_format_" + i), p.attr("id", "chart_field_y_ticks_format_" + i), p.attr("name", "chart_field_y_ticks_format_" + i), h.attr("id", "chart_field_y_label_" + i), h.attr("name", "chart_field_y_label_" + i), m.attr("id", "chart_field_y_label_hide_" + i), m.attr("name", "chart_field_y_label_hide_" + i), v.attr("id", "chart_field_y_from_zero_" + i), v.attr("name", "chart_field_y_from_zero_" + i), g.attr("id", "chart_field_padding_top_" + i), g.attr("name", "chart_field_padding_top_" + i), y.attr("id", "chart_field_padding_bottom_" + i), y.attr("name", "chart_field_padding_bottom_" + i), x.attr("id", "chart_field_size_" + i), x.attr("name", "chart_field_size_" + i), S.attr("id", "chart_field_filter_name_" + i), S.attr("name", "chart_field_filter_name_" + i), b.attr("id", "chart_field_tick_count_" + i), b.attr("name", "chart_field_tick_count_" + i), O.attr("id", "chart_field_filter_value_" + i), O.attr("name", "chart_field_filter_value_" + i), w.attr("id", "chart_div_filter_value_" + i), k.attr("id", "chart_field_filter_alias_" + i), k.attr("name", "chart_field_filter_alias_" + i), j.attr("id", "chart_div_filter_alias_" + i), E.attr("id", "chart_field_filter_visibility_" + i), E.attr("name", "chart_field_filter_visibility_" + i), P.attr("id", "chart_div_filter_visibility_" + i), T.attr("id", "chart_field_static_reference_columns_" + i), T.attr("name", "chart_field_static_reference_columns_" + i), C.attr("id", "chart_field_static_reference_label_" + i), C.attr("name", "chart_field_static_reference_label_" + i), z.attr("id", "chart_field_dynamic_reference_type_" + i), z.attr("name", "chart_field_dynamic_reference_type_" + i), A.attr("id", "chart_field_dynamic_reference_factor_" + i), A.attr("name", "chart_field_dynamic_reference_factor_" + i), I.attr("id", "chart_field_dynamic_reference_label_" + i), I.attr("name", "chart_field_dynamic_reference_label_" + i), q.attr("id", "resource_id_" + i), q.attr("name", "resource_id_" + i), N.attr("id", "chart_field_category_name_" + i), N.attr("name", "chart_field_category_name_" + i), D.attr("id", "chart_field_sort_" + i), D.attr("name", "chart_field_sort_" + i), V.attr("id", "chart_field_sort_div_" + i), M.attr("id", "chart_field_chart_padding_left_" + i), M.attr("name", "chart_field_chart_padding_left_" + i), L.attr("id", "chart_field_chart_padding_bottom_" + i), L.attr("name", "chart_field_chart_padding_bottom_" + i), R.attr("id", "chart_field_x_text_multiline_" + i), R.attr("name", "chart_field_x_text_multiline_" + i), F.attr("id", "chart_field_x_tick_culling_max_" + i), F.attr("name", "chart_field_x_tick_culling_max_" + i)
                    } else if (e.context.id.indexOf("text_box") >= 0) {
                        var G = e.find("[id*=text_box_description_]"),
                            J = e.find("[id*=text_box_size_]");
                        e.attr("id", "text_box_" + i), G.attr("id", "text_box_description_" + i), G.attr("name", "text_box_description_" + i), J.attr("id", "text_box_size_" + i), J.attr("name", "text_box_size_" + i)
                    } else if (e.context.id.indexOf("break_line") >= 0) {
                        var G = e.find("[id*=line_break_desc]");
                        e.attr("id", "break_line_" + i), G.attr("id", "line_break_desc_" + i), G.attr("name", "line_break_desc_" + i)
                    } else if (e.context.id.indexOf("image_item") >= 0) {
                        var W = e.find("[name*=media_image_url_]"),
                            H = (J = e.find("[id*=image_field_size_]"), e.find("[name*=media_image_upload_]")),
                            U = e.find("[name*=media_clear_upload_]");
                        e.attr("id", "image_item_" + i), W.attr("name", "media_image_url_" + i), J.attr("id", "image_field_size_" + i), J.attr("name", "image_field_size_" + i), H.attr("name", "media_image_upload_" + i), U.attr("name", "media_clear_upload_" + i)
                    } else if (e.context.id.indexOf("map_item") >= 0) {
                        var B = e.find("[id*=map_resource_]"),
                            K = e.find("[id*=map_title_field_]"),
                            Y = e.find("[id*=map_key_field_]"),
                            Q = e.find("[id*=map_data_key_field_]"),
                            X = e.find("[id*=map_color_scheme_]"),
                            Z = e.find("[id*=map_size_]"),
                            tt = e.find("[id*=map_module_]"),
                            et = e.find("[id*=map_field_filter_name_]"),
                            it = e.find("[id*=map_field_filter_value_]"),
                            rt = e.find("[id*=map_div_filter_value_]"),
                            nt = e.find("[id*=map_field_filter_alias_]"),
                            at = e.find("[id*=map_div_filter_alias_]"),
                            ot = e.find("[id*=map_field_filter_visibility_]"),
                            lt = e.find("[id*=map_div_filter_visibility_]");
                        e.attr("id", "map_item_" + i), B.attr("id", "map_resource_" + i), B.attr("name", "map_resource_" + i), K.attr("id", "map_title_field_" + i), K.attr("name", "map_title_field_" + i), Y.attr("id", "map_key_field_" + i), Y.attr("name", "map_key_field_" + i), Q.attr("id", "map_data_key_field_" + i), Q.attr("name", "map_data_key_field_" + i), X.attr("id", "map_color_scheme_" + i), X.attr("name", "map_color_scheme_" + i), Z.attr("id", "map_size_" + i), Z.attr("name", "map_size_" + i), tt.attr("id", "map_module_" + i), et.attr("id", "map_field_filter_name_" + i), et.attr("name", "map_field_filter_name_" + i), it.attr("id", "map_field_filter_value_" + i), it.attr("name", "map_field_filter_value_" + i), rt.attr("id", "map_div_filter_value_" + i), nt.attr("id", "map_field_filter_alias_" + i), nt.attr("name", "map_field_filter_alias_" + i), at.attr("id", "map_div_filter_alias_" + i), ot.attr("id", "map_field_filter_visibility_" + i), ot.attr("name", "map_field_filter_visibility_" + i), lt.attr("id", "map_div_filter_visibility_" + i)
                    } else if (e.context.id.indexOf("table_item") >= 0) {
                        var _t = e.find("[id*=table_size_]"),
                            ct = e.find("[id*=table_data_format_]"),
                            dt = e.find("[id*=table_main_value_]"),
                            ft = e.find("[id*=table_category_name_]"),
                            ut = e.find("[id*=table_field_title_]"),
                            st = e.find("[id*=table_field_filter_name_]"),
                            pt = e.find("[id*=table_field_filter_value_]"),
                            ht = e.find("[id*=table_div_filter_value_]"),
                            mt = e.find("[id*=table_field_filter_alias_]"),
                            vt = e.find("[id*=table_div_filter_alias_]"),
                            gt = e.find("[id*=table_field_filter_visibility_]"),
                            yt = e.find("[id*=table_div_filter_visibility_]");
                        e.attr("id", "table_item_" + i), _t.attr("id", "table_size_" + i), _t.attr("name", "table_size_" + i), ct.attr("id", "table_data_format_" + i), ct.attr("name", "table_data_format_" + i), dt.attr("id", "table_main_value_" + i), dt.attr("name", "table_main_value_" + i), ft.attr("id", "table_category_name_" + i), ft.attr("name", "table_category_name_" + i), ut.attr("id", "table_field_title_" + i), ut.attr("name", "table_field_title_" + i), st.attr("id", "table_field_filter_name_" + i), st.attr("name", "table_field_filter_name_" + i), pt.attr("id", "table_field_filter_value_" + i), pt.attr("name", "table_field_filter_value_" + i), ht.attr("id", "table_div_filter_value_" + i), mt.attr("id", "table_field_filter_alias_" + i), mt.attr("name", "table_field_filter_alias_" + i), vt.attr("id", "table_div_filter_alias_" + i), gt.attr("id", "table_field_filter_visibility_" + i), gt.attr("name", "table_field_filter_visibility_" + i), yt.attr("id", "table_div_filter_visibility_" + i)
                    }
                })
            }
            n(), $("#save-edit-data-btn").removeAttr("disabled"), $("#save-visualization-btn").removeAttr("disabled"), $(".save-visualization-btn").click(function(e) {
                0 === $(".item").length && (e.preventDefault(), alert(t("Please create at least one visualization.")))
            }), v.change(function(t) {
                $("[name*=chart_field_axis_y_]").val(t.target.value), ckan.sandbox().publish("querytool:updateCharts"), ckan.sandbox().publish("querytool:updateMaps"), ckan.sandbox().publish("querytool:updateTables")
            }), $(document).on("click", ".delete-item-btn", function(t) {
                t.target.closest(".item").remove(), g()
            }), $("#add-visualization-btn").on("click", function() {
                $.proxyAll(this, /_on/);
                var t = $("#item_type").val(),
                    a = $(".item").length + 1,
                    y = v.val(),
                    b = $("#choose_y_axis_column option:selected").text();
                if ("chart" === t) {
                    var x = window.location.href.substr(window.location.href.lastIndexOf("/") + 1).split("?")[0];
                    i.getTemplate("chart_item.html", {
                        n: a,
                        querytool: x,
                        chart_resource: u,
                        map_resource: s,
                        sql_string: f,
                        y_axis_values: p,
                        main_filters: h,
                        info_query_filters: JSON.stringify(m),
                        measure_label: b
                    }).done(function(t) {
                        var i = e.prepend(t);
                        ckan.module.initializeElement(i.find("div[data-module=querytool-viz-preview]")[0]), o("chart", a), g(), l(), _(), c(), $("[name*=chart_field_axis_y_]").val(y), n(a), r()
                    })
                } else "map" === t ? i.getTemplate("map_item.html", {
                    n: a,
                    chart_resource: u,
                    sql_string: f,
                    y_axis_column: y,
                    y_axis_values: p,
                    main_filters: h
                }).done(function(t) {
                    var i = e.prepend(t);
                    ckan.module.initializeElement(i.find("div[data-module=querytool-map]")[0]), o("map", a), g()
                }) : "text-box" == t ? i.getTemplate("text_box_item.html", {
                    number: a
                }).done(function(t) {
                    e.prepend(t);
                    g()
                }) : "image" === t ? i.getTemplate("image_item.html", {
                    n: a
                }).done(function(t) {
                    e.prepend(t);
                    d(a), g()
                }): "break-line" == t ? i.getTemplate("break_line_item.html", {
                    n: a
                }).done(function(t) {
                    e.prepend(t);
                    g()
                }) : "table" === t && i.getTemplate("table_item.html", {
                    n: a,
                    sql_string: f,
                    resource_id: u,
                    y_axis: y,
                    y_axis_values: p,
                    main_filters: h
                }).done(function(t) {
                    var i = e.prepend(t);
                    ckan.module.initializeElement(i.find("div[data-module=querytool-table]")[0]), o("table", a), g()
                })
            }), dragula([e[0]], {
                moves: function(t, e, i) {
                    return i.classList.contains("grippy")
                }
            }).on("drag", function(t, e, i) {
                t.querySelector(".grippy").classList.add("cursor-grabbing")
            }).on("dragend", function(t) {
                t.querySelector(".grippy").classList.remove("cursor-grabbing"), g(), window.location.hash = t.id, window.scrollTo(0, t.offsetTop)
            }), window.handleItemsOrder = g
        })
    }(ckan.i18n.ngettext, $), $(document).on("show", ".accordion", function(t) {
        $(t.target).prev(".accordion-heading").addClass("accordion-opened")
    }), $(document).on("hide", ".accordion", function(t) {
        $(this).find(".accordion-heading").not($(t.target)).removeClass("accordion-opened")
    }), $(document).ready(function() {
        r()
    })
}, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(16),
        a = i(15),
        o = i(11),
        l = [].lastIndexOf,
        _ = !!l && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (_ || !i(29)(l)), "Array", {
        lastIndexOf: function(t) {
            if (_) return l.apply(this, arguments) || 0;
            var e = n(this),
                i = o(e.length),
                r = i - 1;
            for (arguments.length > 1 && (r = Math.min(r, a(arguments[1]))), r < 0 && (r = i + r); r >= 0; r--)
                if (r in e && e[r] === t) return r || 0;
            return -1
        }
    })
}]);
//# sourceMappingURL=visualizations_settings.js.map