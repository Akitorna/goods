/** 2.6.12 | MIT Licensed */ ;
! function(f) {
	"use strict";

	function r() {
		this.v = "2.6.12"
	}

	function d(t, e) {
		e = e || "log", f.console && console[e] && console[e]("layui error hint: " + t)
	}
	var t, h = f.document,
		m = {
			modules: {},
			status: {},
			timeout: 10,
			event: {}
		},
		e = f.LAYUI_GLOBAL || {},
		v = (t = h.currentScript ? h.currentScript.src : function() {
			for (var t, e = h.scripts, o = e.length - 1, r = o; 0 < r; r--)
				if ("interactive" === e[r].readyState) {
					t = e[r].src;
					break
				} return t || e[o].src
		}(), m.dir = e.dir || t.substring(0, t.lastIndexOf("/") + 1)),
		g = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		b = m.builtin = {
			lay: "lay",
			layer: "layer",
			laydate: "laydate",
			laypage: "laypage",
			laytpl: "laytpl",
			layedit: "layedit",
			form: "form",
			upload: "upload",
			dropdown: "dropdown",
			transfer: "transfer",
			tree: "tree",
			table: "table",
			element: "element",
			rate: "rate",
			colorpicker: "colorpicker",
			slider: "slider",
			carousel: "carousel",
			flow: "flow",
			util: "util",
			code: "code",
			jquery: "jquery",
			all: "all",
			"layui.all": "layui.all"
		},
		s = (r.prototype.cache = m, r.prototype.define = function(t, r) {
			return "function" == typeof t && (r = t, t = []), this.use(t, function() {
				function o(t, e) {
					layui[t] = e, m.status[t] = !0
				}
				return "function" == typeof r && r(function(t, e) {
					o(t, e), m.callback[t] = function() {
						r(o)
					}
				}), this
			}, null, "define"), this
		}, r.prototype.use = function(o, t, e, r) {
			var n = this,
				i = m.dir = m.dir || v,
				a = h.getElementsByTagName("head")[0],
				u = (o = "string" == typeof o ? [o] : "function" == typeof o ? (t = o, ["all"]) : o, f.jQuery &&
					jQuery.fn.on && (n.each(o, function(t, e) {
						"jquery" === e && o.splice(t, 1)
					}), layui.jquery = layui.$ = jQuery), o[0]),
				l = 0;

			function s(t, e) {
				var o = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
				"load" !== t.type && !o.test((t.currentTarget || t.srcElement).readyState) || (m.modules[u] = e, a
					.removeChild(p),
					function t() {
						return ++l > 1e3 * m.timeout / 4 ? d(u + " is not a valid module", "error") : void(m
							.status[u] ? c() : setTimeout(t, 4))
					}())
			}

			function c() {
				e.push(layui[u]), 1 < o.length ? n.use(o.slice(1), t, e, r) : "function" == typeof t && (layui
					.jquery && "function" == typeof layui.jquery && "define" !== r ? layui.jquery(function() {
						t.apply(layui, e)
					}) : t.apply(layui, e))
			}
			if (e = e || [], m.host = m.host || (i.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0],
				0 === o.length || layui["layui.all"] && b[u]) return c(), n;
			var p, y = (y = (b[u] ? i + "modules/" : !/^\{\/\}/.test(n.modules[u]) && m.base || "") + (n.modules[
				u] || u) + ".js").replace(/^\{\/\}/, "");
			return !m.modules[u] && layui[u] && (m.modules[u] = y), m.modules[u] ? function t() {
				return ++l > 1e3 * m.timeout / 4 ? d(u + " is not a valid module", "error") : void("string" ==
					typeof m.modules[u] && m.status[u] ? c() : setTimeout(t, 4))
			}() : ((p = h.createElement("script")).async = !0, p.charset = "utf-8", p.src = y + ((i = !0 === m
				.version ? m.v || (new Date).getTime() : m.version || "") ? "?v=" + i : ""), a.appendChild(
				p), !p.attachEvent || p.attachEvent.toString && p.attachEvent.toString().indexOf(
				"[native code") < 0 || g ? p.addEventListener("load", function(t) {
				s(t, y)
			}, !1) : p.attachEvent("onreadystatechange", function(t) {
				s(t, y)
			}), m.modules[u] = y), n
		}, r.prototype.getStyle = function(t, e) {
			t = t.currentStyle || f.getComputedStyle(t, null);
			return t[t.getPropertyValue ? "getPropertyValue" : "getAttribute"](e)
		}, r.prototype.link = function(r, n, t) {
			var i = this,
				e = h.getElementsByTagName("head")[0],
				o = h.createElement("link"),
				t = ((t = "string" == typeof n ? n : t) || r).replace(/\.|\//g, ""),
				a = o.id = "layuicss-" + t,
				u = "creating",
				l = 0;
			return o.rel = "stylesheet", o.href = r + (m.debug ? "?v=" + (new Date).getTime() : ""), o.media =
				"all", h.getElementById(a) || e.appendChild(o), "function" != typeof n || function t(e) {
					var o = h.getElementById(a);
					return ++l > 1e3 * m.timeout / 100 ? d(r + " timeout") : void(1989 === parseInt(i.getStyle(o,
						"width")) ? (e === u && o.removeAttribute("lay-status"), o.getAttribute(
						"lay-status") === u ? setTimeout(t, 100) : n()) : (o.setAttribute("lay-status", u),
						setTimeout(function() {
							t(u)
						}, 100)))
				}(), i
		}, r.prototype.addcss = function(t, e, o) {
			return layui.link(m.dir + "css/" + t, e, o)
		}, m.callback = {}, r.prototype.factory = function(t) {
			if (layui[t]) return "function" == typeof m.callback[t] ? m.callback[t] : null
		}, r.prototype.img = function(t, e, o) {
			var r = new Image;
			if (r.src = t, r.complete) return e(r);
			r.onload = function() {
				r.onload = null, "function" == typeof e && e(r)
			}, r.onerror = function(t) {
				r.onerror = null, "function" == typeof o && o(t)
			}
		}, r.prototype.config = function(t) {
			for (var e in t = t || {}) m[e] = t[e];
			return this
		}, r.prototype.modules = function() {
			var t, e = {};
			for (t in b) e[t] = b[t];
			return e
		}(), r.prototype.extend = function(t) {
			for (var e in t = t || {}) this[e] || this.modules[e] ? d(e + " Module already exists", "error") : this
				.modules[e] = t[e];
			return this
		}, r.prototype.router = r.prototype.hash = function(t) {
			var o = {
				path: [],
				search: {},
				hash: ((t = t || location.hash).match(/[^#](#.*$)/) || [])[1] || ""
			};
			return /^#\//.test(t) && (t = t.replace(/^#\//, ""), o.href = "/" + t, t = t.replace(/([^#])(#.*$)/,
				"$1").split("/") || [], this.each(t, function(t, e) {
				/^\w+=/.test(e) ? (e = e.split("="), o.search[e[0]] = e[1]) : o.path.push(e)
			})), o
		}, r.prototype.url = function(t) {
			var n, e, o = this;
			return {
				pathname: (t ? ((t.match(/\.[^.]+?\/.+/) || [])[0] || "").replace(/^[^\/]+/, "").replace(/\?.+/,
					"") : location.pathname).replace(/^\//, "").split("/"),
				search: (n = {}, e = (t ? ((t.match(/\?.+/) || [])[0] || "").replace(/\#.+/, "") : location.search)
					.replace(/^\?+/, "").split("&"), o.each(e, function(t, e) {
						var o = e.indexOf("="),
							r = o < 0 ? e.substr(0, e.length) : 0 !== o && e.substr(0, o);
						r && (n[r] = 0 < o ? e.substr(o + 1) : null)
					}), n),
				hash: o.router(t ? (t.match(/#.+/) || [])[0] || "/" : location.hash)
			}
		}, r.prototype.data = function(t, e, o) {
			if (t = t || "layui", o = o || localStorage, f.JSON && f.JSON.parse) {
				if (null === e) return delete o[t];
				e = "object" == typeof e ? e : {
					key: e
				};
				try {
					var r = JSON.parse(o[t])
				} catch (t) {
					r = {}
				}
				return "value" in e && (r[e.key] = e.value), e.remove && delete r[e.key], o[t] = JSON.stringify(r),
					e.key ? r[e.key] : r
			}
		}, r.prototype.sessionData = function(t, e) {
			return this.data(t, e, sessionStorage)
		}, r.prototype.device = function(t) {
			function e(t) {
				var e = new RegExp(t + "/([^\\s\\_\\-]+)");
				return (t = (o.match(e) || [])[1]) || !1
			}
			var o = navigator.userAgent.toLowerCase(),
				r = {
					os: /windows/.test(o) ? "windows" : /linux/.test(o) ? "linux" : /iphone|ipod|ipad|ios/.test(o) ?
						"ios" : /mac/.test(o) ? "mac" : void 0,
					ie: !!(f.ActiveXObject || "ActiveXObject" in f) && ((o.match(/msie\s(\d+)/) || [])[1] || "11"),
					weixin: e("micromessenger")
				};
			return t && !r[t] && (r[t] = e(t)), r.android = /android/.test(o), r.ios = "ios" === r.os, r.mobile = !(
				!r.android && !r.ios), r
		}, r.prototype.hint = function() {
			return {
				error: d
			}
		}, r.prototype._typeof = r.prototype.type = function(t) {
			return null === t ? String(t) : "object" == typeof t || "function" == typeof t ? (e = (e = Object
					.prototype.toString.call(t).match(/\s(.+)\]$/) || [])[1] || "Object", new RegExp(
					"\\b(Function|Array|Date|RegExp|Object|Error|Symbol)\\b").test(e) ? e.toLowerCase() :
				"object") : typeof t;
			var e
		}, r.prototype._isArray = r.prototype.isArray = function(t) {
			var e, o = this.type(t);
			return !(!t || "object" != typeof t || t === f) && (e = "length" in t && t.length, "array" === o ||
				0 === e || "number" == typeof e && 0 < e && e - 1 in t)
		}, r.prototype.each = function(t, o) {
			function e(t, e) {
				return o.call(e[t], t, e[t])
			}
			if ("function" != typeof o) return this;
			if (this.isArray(t = t || []))
				for (r = 0; r < t.length && !e(r, t); r++);
			else
				for (var r in t)
					if (e(r, t)) break;
			return this
		}, r.prototype.sort = function(t, n, e) {
			var o = JSON.parse(JSON.stringify(t || []));
			return "object" !== this.type(t) || n ? "object" != typeof t ? [o] : (o.sort(function(t, e) {
				var o = t[n],
					r = e[n];
				if (!isNaN(t) && !isNaN(e)) return t - e;
				if (!isNaN(t) && isNaN(e)) {
					if (!n || "object" != typeof e) return -1;
					o = t
				} else if (isNaN(t) && !isNaN(e)) {
					if (!n || "object" != typeof t) return 1;
					r = e
				}
				t = [!isNaN(o), !isNaN(r)];
				return t[0] && t[1] ? o && !r && 0 !== r ? 1 : !o && 0 !== o && r ? -1 : o - r : t[0] ||
					t[1] ? t[0] || !t[1] ? -1 : !t[0] || t[1] ? 1 : void 0 : r < o ? 1 : o < r ? -1 : 0
			}), e && o.reverse(), o) : o
		}, r.prototype.stope = function(e) {
			e = e || f.event;
			try {
				e.stopPropagation()
			} catch (t) {
				e.cancelBubble = !0
			}
		}, "LAYUI-EVENT-REMOVE");
	r.prototype.onevent = function(t, e, o) {
		return "string" != typeof t || "function" != typeof o ? this : r.event(t, e, null, o)
	}, r.prototype.event = r.event = function(t, e, o, r) {
		function n(t, e) {
			!1 === (e && e.call(i, o)) && null === a && (a = !1)
		}
		var i = this,
			a = null,
			u = (e || "").match(/\((.*)\)$/) || [],
			t = (t + "." + e).replace(u[0], ""),
			l = u[1] || "";
		return o === s ? (delete(i.cache.event[t] || {})[l], i) : r ? (m.event[t] = m.event[t] || {}, m.event[t][
			l] = [r], this) : (layui.each(m.event[t], function(t, e) {
			"{*}" === l ? layui.each(e, n) : ("" === t && layui.each(e, n), l && t === l && layui.each(
				e, n))
		}), a)
	}, r.prototype.on = function(t, e, o) {
		return this.onevent.call(this, e, t, o)
	}, r.prototype.off = function(t, e) {
		return this.event.call(this, e, t, s)
	}, f.layui = new r
}(window);
layui.define(function(a) {
	var i = layui.cache;
	layui.config({
		dir: i.dir.replace(/lay\/dest\/$/, "")
	}), a("layui.all", layui.v)
});
! function(l) {
	"use strict";

	function h(t) {
		return new i(t)
	}

	function i(t) {
		for (var e = 0, n = "object" == typeof t ? [t] : (this.selector = t, f.querySelectorAll(t || null)); e < n
			.length; e++) this.push(n[e])
	}
	var t, f = l.document;
	(i.prototype = []).constructor = i, h.extend = function() {
			function o(t, e) {
				for (var n in t = t || ("array" === layui.type(e) ? [] : {}), e) t[n] = e[n] && e[n].constructor ===
					Object ? o(t[n], e[n]) : e[n];
				return t
			}
			var t, e = 1,
				n = arguments;
			for (n[0] = "object" == typeof n[0] ? n[0] : {}, t = n.length; e < t; e++) "object" == typeof n[e] && o(n[
				0], n[e]);
			return n[0]
		}, h.v = "1.0.8", h.ie = (t = navigator.userAgent.toLowerCase(), !!(l.ActiveXObject || "ActiveXObject" in l) &&
			((t.match(/msie\s(\d+)/) || [])[1] || "11")), h.layui = layui || {}, h.getPath = layui.cache.dir, h.stope =
		layui.stope, h.each = function() {
			return layui.each.apply(layui, arguments), this
		}, h.digit = function(t, e) {
			if ("string" != typeof t && "number" != typeof t) return "";
			var n = "";
			e = e || 2;
			for (var o = (t = String(t)).length; o < e; o++) n += "0";
			return t < Math.pow(10, e) ? n + t : t
		}, h.elem = function(t, e) {
			var n = f.createElement(t);
			return h.each(e || {}, function(t, e) {
				n.setAttribute(t, e)
			}), n
		}, h.hasScrollbar = function() {
			return f.body.scrollHeight > (l.innerHeight || f.documentElement.clientHeight)
		}, h.position = function(t, e, n) {
			var o, i, r, c, u, a, s;
			e && (n = n || {}, t !== f && t !== h("body")[0] || (n.clickType = "right"), u = "right" === n.clickType ? {
					left: (u = n.e || l.event || {}).clientX,
					top: u.clientY,
					right: u.clientX,
					bottom: u.clientY
				} : t.getBoundingClientRect(), a = e.offsetWidth, s = e.offsetHeight, o = function(t) {
					return f.body[t = t ? "scrollLeft" : "scrollTop"] | f.documentElement[t]
				}, r = u.left, c = u.bottom, "center" === n.align ? r -= (a - t.offsetWidth) / 2 : "right" === n
				.align && (r = r - a + t.offsetWidth), (r = r + a + 5 > (i = function(t) {
					return f.documentElement[t ? "clientWidth" : "clientHeight"]
				})("width") ? i("width") - a - 5 : r) < 5 && (r = 5), c + s + 5 > i() && (u.top > s + 5 ? c = u
					.top - s - 10 : "right" === n.clickType && (c = i() - s - 10) < 0 && (c = 0)), (a = n
				.position) && (e.style.position = a), e.style.left = r + ("fixed" === a ? 0 : o(1)) + "px", e.style
				.top = c + ("fixed" === a ? 0 : o()) + "px", h.hasScrollbar() || (s = e.getBoundingClientRect(), !n
					.SYSTEM_RELOAD && s.bottom + 5 > i() && (n.SYSTEM_RELOAD = !0, setTimeout(function() {
						h.position(t, e, n)
					}, 50))))
		}, h.options = function(t, e) {
			t = h(t), e = e || "lay-options";
			try {
				return new Function("return " + (t.attr(e) || "{}"))()
			} catch (t) {
				return hint.error("parseerror\uff1a" + t, "error"), {}
			}
		}, h.isTopElem = function(n) {
			var t = [f, h("body")[0]],
				o = !1;
			return h.each(t, function(t, e) {
				if (e === n) return o = !0
			}), o
		}, i.addStr = function(n, t) {
			return n = n.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), h.each(t, function(t, e) {
				new RegExp("\\b" + e + "\\b").test(n) || (n = n + " " + e)
			}), n.replace(/^\s|\s$/, "")
		}, i.removeStr = function(n, t) {
			return n = n.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), h.each(t, function(t, e) {
				e = new RegExp("\\b" + e + "\\b");
				e.test(n) && (n = n.replace(e, ""))
			}), n.replace(/\s+/, " ").replace(/^\s|\s$/, "")
		}, i.prototype.find = function(o) {
			var i = this,
				r = 0,
				c = [],
				u = "object" == typeof o;
			return this.each(function(t, e) {
				for (var n = u ? e.contains(o) : e.querySelectorAll(o || null); r < n.length; r++) c.push(n[r]);
				i.shift()
			}), u || (i.selector = (i.selector ? i.selector + " " : "") + o), h.each(c, function(t, e) {
				i.push(e)
			}), i
		}, i.prototype.each = function(t) {
			return h.each.call(this, this, t)
		}, i.prototype.addClass = function(n, o) {
			return this.each(function(t, e) {
				e.className = i[o ? "removeStr" : "addStr"](e.className, n)
			})
		}, i.prototype.removeClass = function(t) {
			return this.addClass(t, !0)
		}, i.prototype.hasClass = function(n) {
			var o = !1;
			return this.each(function(t, e) {
				new RegExp("\\b" + n + "\\b").test(e.className) && (o = !0)
			}), o
		}, i.prototype.css = function(e, o) {
			function i(t) {
				return isNaN(t) ? t : t + "px"
			}
			var t = this;
			return "string" != typeof e || void 0 !== o ? t.each(function(t, n) {
				"object" == typeof e ? h.each(e, function(t, e) {
					n.style[t] = i(e)
				}) : n.style[e] = i(o)
			}) : 0 < t.length ? t[0].style[e] : void 0
		}, i.prototype.width = function(n) {
			var o = this;
			return void 0 !== n ? o.each(function(t, e) {
				o.css("width", n)
			}) : 0 < o.length ? o[0].offsetWidth : void 0
		}, i.prototype.height = function(n) {
			var o = this;
			return void 0 !== n ? o.each(function(t, e) {
				o.css("height", n)
			}) : 0 < o.length ? o[0].offsetHeight : void 0
		}, i.prototype.attr = function(n, o) {
			var t = this;
			return void 0 !== o ? t.each(function(t, e) {
				e.setAttribute(n, o)
			}) : 0 < t.length ? t[0].getAttribute(n) : void 0
		}, i.prototype.removeAttr = function(n) {
			return this.each(function(t, e) {
				e.removeAttribute(n)
			})
		}, i.prototype.html = function(n) {
			var t = this;
			return void 0 !== n ? this.each(function(t, e) {
				e.innerHTML = n
			}) : 0 < t.length ? t[0].innerHTML : void 0
		}, i.prototype.val = function(n) {
			var t = this;
			return void 0 !== n ? this.each(function(t, e) {
				e.value = n
			}) : 0 < t.length ? t[0].value : void 0
		}, i.prototype.append = function(n) {
			return this.each(function(t, e) {
				"object" == typeof n ? e.appendChild(n) : e.innerHTML = e.innerHTML + n
			})
		}, i.prototype.remove = function(n) {
			return this.each(function(t, e) {
				n ? e.removeChild(n) : e.parentNode.removeChild(e)
			})
		}, i.prototype.on = function(n, o) {
			return this.each(function(t, e) {
				e.attachEvent ? e.attachEvent("on" + n, function(t) {
					t.target = t.srcElement, o.call(e, t)
				}) : e.addEventListener(n, o, !1)
			})
		}, i.prototype.off = function(n, o) {
			return this.each(function(t, e) {
				e.detachEvent ? e.detachEvent("on" + n, o) : e.removeEventListener(n, o, !1)
			})
		}, l.lay = h, l.layui && layui.define && layui.define(function(t) {
			t("lay", h)
		})
}(window, window.document);
layui.define(function(e) {
	"use strict";

	function r(e) {
		this.tpl = e
	}

	function n(e) {
		return "string" != typeof e ? p.error("Template not found") : new r(e)
	}
	var o = {
			open: "{{",
			close: "}}"
		},
		p = {
			exp: function(e) {
				return new RegExp(e, "g")
			},
			query: function(e, r, n) {
				return a((r || "") + o.open + ["#([\\s\\S])+?", "([^{#}])*?"][e || 0] + o.close + (n || ""))
			},
			escape: function(e) {
				return null == e ? "" : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test(e += "") ? e.replace(
						/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
					.replace(/'/g, "&#39;").replace(/"/g, "&quot;") : e
			},
			error: function(e, r) {
				var n = "Laytpl Error: ";
				return "object" == typeof console && console.error(n + e + "\n" + (r || "")), n + e
			}
		},
		a = p.exp;
	r.pt = r.prototype, window.errors = 0, r.pt.parse = function(e, r) {
		var n = e,
			c = a("^" + o.open + "#", ""),
			t = a(o.close + "$", "");
		e = '"use strict";var view = "' + (e = e.replace(/\s+|\r|\t|\n/g, " ").replace(a(o.open + "#"), o
			.open + "# ").replace(a(o.close + "}"), "} " + o.close).replace(/\\/g, "\\\\").replace(
			a(o.open + "!(.+?)!" + o.close),
			function(e) {
				return e = e.replace(a("^" + o.open + "!"), "").replace(a("!" + o.close), "")
					.replace(a(o.open + "|" + o.close), function(e) {
						return e.replace(/(.)/g, "\\$1")
					})
			}).replace(/(?="|')/g, "\\").replace(p.query(), function(e) {
			return '";' + (e = e.replace(c, "").replace(t, "")).replace(/\\(.)/g, "$1") +
				';view+="'
		}).replace(p.query(1), function(e) {
			var r = '"+laytpl.escape(';
			return e.replace(/\s/g, "") === o.open + o.close ? "" : (e = e.replace(a(o.open +
				"|" + o.close), ""), /^=/.test(e) ? e = e.replace(/^=/, "") : /^-/.test(
				e) && (e = e.replace(/^-/, ""), r = '"+('), r + e.replace(/\\(.)/g,
				"$1") + ')+"')
		})) + '";return view;';
		try {
			return this.cache = e = new Function("d, laytpl", e), e(r, p)
		} catch (e) {
			return delete this.cache, p.error(e, n)
		}
	}, r.pt.render = function(e, r) {
		var n = this;
		return e ? (n = n.cache ? n.cache(e, p) : n.parse(n.tpl, e), r ? void r(n) : n) : p.error("no data")
	};
	n.config = function(e) {
		for (var r in e = e || {}) o[r] = e[r]
	}, n.v = "1.2.0", e("laytpl", n)
});
layui.define(function(e) {
	"use strict";

	function a(e) {
		var a = this;
		a.config = e || {}, a.config.index = ++o.index, a.render(!0)
	}
	var r = document,
		s = "getElementById",
		c = "getElementsByTagName",
		u = "layui-disabled",
		o = (a.prototype.type = function() {
			var e = this.config;
			if ("object" == typeof e.elem) return void 0 === e.elem.length ? 2 : 3
		}, a.prototype.view = function() {
			var t, i, n = this.config,
				r = n.groups = "groups" in n ? 0 | n.groups : 5,
				s = (n.layout = "object" == typeof n.layout ? n.layout : ["prev", "page", "next"], n.count =
					0 | n.count, n.curr = 0 | n.curr || 1, n.limits = "object" == typeof n.limits ? n
					.limits : [10, 20, 30, 40, 50], n.limit = 0 | n.limit || 10, n.pages = Math.ceil(n
						.count / n.limit) || 1, n.curr > n.pages && (n.curr = n.pages), r < 0 ? r = 1 : r >
					n.pages && (r = n.pages), n.prev = "prev" in n ? n.prev : "&#x4E0A;&#x4E00;&#x9875;", n
					.next = "next" in n ? n.next : "&#x4E0B;&#x4E00;&#x9875;", n.pages > r ? Math.ceil((n
						.curr + (1 < r ? 1 : 0)) / (0 < r ? r : 1)) : 1),
				l = {
					prev: n.prev ? '<a href="javascript:;" class="layui-laypage-prev' + (1 == n.curr ? " " +
						u : "") + '" data-page="' + (n.curr - 1) + '">' + n.prev + "</a>" : "",
					page: function() {
						var e = [];
						if (n.count < 1) return "";
						1 < s && !1 !== n.first && 0 !== r && e.push(
							'<a href="javascript:;" class="layui-laypage-first" data-page="1"  title="&#x9996;&#x9875;">' +
							(n.first || 1) + "</a>");
						var a = Math.floor((r - 1) / 2),
							t = 1 < s ? n.curr - a : 1,
							i = 1 < s ? (a = n.curr + (r - a - 1)) > n.pages ? n.pages : a : r;
						for (i - t < r - 1 && (t = i - r + 1), !1 !== n.first && 2 < t && e.push(
								'<span class="layui-laypage-spr">&#x2026;</span>'); t <= i; t++) t === n
							.curr ? e.push(
								'<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/
									.test(n.theme) ? 'style="background-color:' + n.theme + ';"' : "") +
								"></em><em>" + t + "</em></span>") : e.push(
								'<a href="javascript:;" data-page="' + t + '">' + t + "</a>");
						return n.pages > r && n.pages > i && !1 !== n.last && (i + 1 < n.pages && e
							.push('<span class="layui-laypage-spr">&#x2026;</span>'), 0 !== r && e
							.push(
								'<a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="' +
								n.pages + '">' + (n.last || n.pages) + "</a>")), e.join("")
					}(),
					next: n.next ? '<a href="javascript:;" class="layui-laypage-next' + (n.curr == n.pages ?
						" " + u : "") + '" data-page="' + (n.curr + 1) + '">' + n.next + "</a>" : "",
					count: '<span class="layui-laypage-count">\u5171 ' + n.count + " \u6761</span>",
					limit: (t = ['<span class="layui-laypage-limits"><select lay-ignore>'], layui.each(n
						.limits,
						function(e, a) {
							t.push('<option value="' + a + '"' + (a === n.limit ? "selected" : "") +
								">" + a + " \u6761/\u9875</option>")
						}), t.join("") + "</select></span>"),
					refresh: ['<a href="javascript:;" data-page="' + n.curr +
						'" class="layui-laypage-refresh">',
						'<i class="layui-icon layui-icon-refresh"></i>', "</a>"
					].join(""),
					skip: ['<span class="layui-laypage-skip">&#x5230;&#x7B2C;',
						'<input type="text" min="1" value="' + n.curr + '" class="layui-input">',
						'&#x9875;<button type="button" class="layui-laypage-btn">&#x786e;&#x5b9a;</button>',
						"</span>"
					].join("")
				};
			return ['<div class="layui-box layui-laypage layui-laypage-' + (n.theme ? /^#/.test(n.theme) ?
				"molv" : n.theme : "default") + '" id="layui-laypage-' + n.index + '">', (i = [],
				layui.each(n.layout, function(e, a) {
					l[a] && i.push(l[a])
				}), i.join("")), "</div>"].join("")
		}, a.prototype.jump = function(e, a) {
			if (e) {
				var t = this,
					i = t.config,
					n = e.children,
					r = e[c]("button")[0],
					s = e[c]("input")[0],
					e = e[c]("select")[0],
					l = function() {
						var e = 0 | s.value.replace(/\s|\D/g, "");
						e && (i.curr = e, t.render())
					};
				if (a) return l();
				for (var u = 0, p = n.length; u < p; u++) "a" === n[u].nodeName.toLowerCase() && o.on(n[u],
					"click",
					function() {
						var e = 0 | this.getAttribute("data-page");
						e < 1 || e > i.pages || (i.curr = e, t.render())
					});
				e && o.on(e, "change", function() {
					var e = this.value;
					i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)), i.limit = e, t
						.render()
				}), r && o.on(r, "click", function() {
					l()
				})
			}
		}, a.prototype.skip = function(t) {
			var i, e;
			t && (i = this, (e = t[c]("input")[0]) && o.on(e, "keyup", function(e) {
				var a = this.value,
					e = e.keyCode;
				/^(37|38|39|40)$/.test(e) || (/\D/.test(a) && (this.value = a.replace(/\D/,
					"")), 13 === e && i.jump(t, !0))
			}))
		}, a.prototype.render = function(e) {
			var a = this,
				t = a.config,
				i = a.type(),
				n = a.view(),
				i = (2 === i ? t.elem && (t.elem.innerHTML = n) : 3 === i ? t.elem.html(n) : r[s](t.elem) &&
					(r[s](t.elem).innerHTML = n), t.jump && t.jump(t, e), r[s]("layui-laypage-" + t.index));
			a.jump(i), t.hash && !e && (location.hash = "!" + t.hash + "=" + t.curr), a.skip(i)
		}, {
			render: function(e) {
				return new a(e).index
			},
			index: layui.laypage ? layui.laypage.index + 1e4 : 0,
			on: function(a, e, t) {
				return a.attachEvent ? a.attachEvent("on" + e, function(e) {
					e.target = e.srcElement, t.call(a, e)
				}) : a.addEventListener(e, t, !1), this
			}
		});
	e("laypage", o)
});
! function(i, r) {
	"use strict";

	function l() {
		var t = this,
			e = t.config.id;
		return {
			hint: function(e) {
				t.hint.call(t, e)
			},
			config: (l.that[e] = t).config
		}
	}

	function u(e) {
		var t = this;
		t.index = ++h.index, t.config = lay.extend({}, t.config, h.config, e), (e = t.config).id = "id" in e ? e.id : t
			.index, h.ready(function() {
				t.init()
			})
	}
	var n = i.layui && layui.define,
		o = {
			getPath: i.lay && lay.getPath ? lay.getPath : "",
			link: function(e, t, a) {
				h.path && i.lay && lay.layui && lay.layui.link(h.path + e, t, a)
			}
		},
		e = i.LAYUI_GLOBAL || {},
		h = {
			v: "5.3.1",
			config: {},
			index: i.laydate && i.laydate.v ? 1e5 : 0,
			path: e.laydate_dir || o.getPath,
			set: function(e) {
				var t = this;
				return t.config = lay.extend({}, t.config, e), t
			},
			ready: function(e) {
				var t = "laydate",
					a = (n ? "modules/laydate/" : "theme/") + "default/laydate.css?v=" + h.v;
				return n ? layui.addcss(a, e, t) : o.link(a, e, t), this
			}
		},
		a = "laydate",
		w = "layui-this",
		x = "laydate-disabled",
		p = [100, 2e5],
		f = "layui-laydate-static",
		M = "layui-laydate-list",
		s = "layui-laydate-hint",
		E = ".laydate-btns-confirm",
		C = "laydate-time-text",
		I = "laydate-btns-time",
		g = "layui-laydate-preview",
		y = "yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s";
	l.formatArr = function(e) {
		return (e || "").match(new RegExp(y + "|.", "g")) || []
	}, u.isLeapYear = function(e) {
		return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
	}, u.prototype.config = {
		type: "date",
		range: !1,
		format: "yyyy-MM-dd",
		value: null,
		isInitValue: !0,
		min: "1900-1-1",
		max: "2099-12-31",
		trigger: "click",
		show: !1,
		showBottom: !0,
		isPreview: !0,
		btns: ["clear", "now", "confirm"],
		lang: "cn",
		theme: "default",
		position: null,
		calendar: !1,
		mark: {},
		zIndex: null,
		done: null,
		change: null
	}, u.prototype.lang = function() {
		var e = {
			cn: {
				weeks: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
				time: ["\u65f6", "\u5206", "\u79d2"],
				timeTips: "\u9009\u62e9\u65f6\u95f4",
				startTime: "\u5f00\u59cb\u65f6\u95f4",
				endTime: "\u7ed3\u675f\u65f6\u95f4",
				dateTips: "\u8fd4\u56de\u65e5\u671f",
				month: ["\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b",
					"\u4e5d", "\u5341", "\u5341\u4e00", "\u5341\u4e8c"
				],
				tools: {
					confirm: "\u786e\u5b9a",
					clear: "\u6e05\u7a7a",
					now: "\u73b0\u5728"
				},
				timeout: "\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u65e9\u4e8e\u5f00\u59cb\u65f6\u95f4<br>\u8bf7\u91cd\u65b0\u9009\u62e9",
				invalidDate: "\u4e0d\u5728\u6709\u6548\u65e5\u671f\u6216\u65f6\u95f4\u8303\u56f4\u5185",
				formatError: [
					"\u65e5\u671f\u683c\u5f0f\u4e0d\u5408\u6cd5<br>\u5fc5\u987b\u9075\u5faa\u4e0b\u8ff0\u683c\u5f0f\uff1a<br>",
					"<br>\u5df2\u4e3a\u4f60\u91cd\u7f6e"
				],
				preview: "\u5f53\u524d\u9009\u4e2d\u7684\u7ed3\u679c"
			},
			en: {
				weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				time: ["Hours", "Minutes", "Seconds"],
				timeTips: "Select Time",
				startTime: "Start Time",
				endTime: "End Time",
				dateTips: "Select Date",
				month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				tools: {
					confirm: "Confirm",
					clear: "Clear",
					now: "Now"
				},
				timeout: "End time cannot be less than start Time<br>Please re-select",
				invalidDate: "Invalid date",
				formatError: ["The date format error<br>Must be followed\uff1a<br>", "<br>It has been reset"],
				preview: "The selected result"
			}
		};
		return e[this.config.lang] || e.cn
	}, u.prototype.init = function() {
		var r = this,
			o = r.config,
			e = "static" === o.position,
			t = {
				year: "yyyy",
				month: "yyyy-MM",
				date: "yyyy-MM-dd",
				time: "HH:mm:ss",
				datetime: "yyyy-MM-dd HH:mm:ss"
			};
		o.elem = lay(o.elem), o.eventElem = lay(o.eventElem), o.elem[0] && (r.rangeStr = o.range ? "string" ==
			typeof o.range ? o.range : "-" : "", "array" === layui.type(o.range) && (r.rangeElem = [lay(o.range[
				0]), lay(o.range[1])]), t[o.type] || (i.console && console.error && console.error(
				"laydate type error:'" + o.type + "' is not supported"), o.type = "date"), o.format === t
			.date && (o.format = t[o.type] || t.date), r.format = l.formatArr(o.format), r.EXP_IF = "", r
			.EXP_SPLIT = "", lay.each(r.format, function(e, t) {
				e = new RegExp(y).test(t) ? "\\d{" + (new RegExp(y).test(r.format[0 === e ? e + 1 : e -
						1] || "") ? /^yyyy|y$/.test(t) ? 4 : t.length : /^yyyy$/.test(t) ? "1,4" : /^y$/
					.test(t) ? "1,308" : "1,2") + "}" : "\\" + t;
				r.EXP_IF = r.EXP_IF + e, r.EXP_SPLIT = r.EXP_SPLIT + "(" + e + ")"
			}), r.EXP_IF_ONE = new RegExp("^" + r.EXP_IF + "$"), r.EXP_IF = new RegExp("^" + (o.range ? r
				.EXP_IF + "\\s\\" + r.rangeStr + "\\s" + r.EXP_IF : r.EXP_IF) + "$"), r.EXP_SPLIT = new RegExp(
				"^" + r.EXP_SPLIT + "$", ""), r.isInput(o.elem[0]) || "focus" === o.trigger && (o.trigger =
				"click"), o.elem.attr("lay-key") || (o.elem.attr("lay-key", r.index), o.eventElem.attr(
				"lay-key", r.index)), o.mark = lay.extend({}, o.calendar && "cn" === o.lang ? {
				"0-1-1": "\u5143\u65e6",
				"0-2-14": "\u60c5\u4eba",
				"0-3-8": "\u5987\u5973",
				"0-3-12": "\u690d\u6811",
				"0-4-1": "\u611a\u4eba",
				"0-5-1": "\u52b3\u52a8",
				"0-5-4": "\u9752\u5e74",
				"0-6-1": "\u513f\u7ae5",
				"0-9-10": "\u6559\u5e08",
				"0-10-1": "\u56fd\u5e86",
				"0-12-25": "\u5723\u8bde"
			} : {}, o.mark), lay.each(["min", "max"], function(e, t) {
				var a, n, i = [],
					l = [];
				l = "number" == typeof o[t] ? (n = o[t], a = new Date, a = r.newDate({
					year: a.getFullYear(),
					month: a.getMonth(),
					date: a.getDate(),
					hours: "23",
					minutes: "59",
					seconds: "59"
				}).getTime(), i = [(n = new Date(n ? n < 864e5 ? a + 864e5 * n : n : a))
					.getFullYear(), n.getMonth() + 1, n.getDate()
				], [n.getHours(), n.getMinutes(), n.getSeconds()]) : (i = (o[t].match(/\d+-\d+-\d+/) ||
					[""])[0].split("-"), (o[t].match(/\d+:\d+:\d+/) || [""])[0].split(":")), o[t] = {
					year: 0 | i[0] || (new Date).getFullYear(),
					month: i[1] ? (0 | i[1]) - 1 : (new Date).getMonth(),
					date: 0 | i[2] || (new Date).getDate(),
					hours: 0 | l[0],
					minutes: 0 | l[1],
					seconds: 0 | l[2]
				}
			}), r.elemID = "layui-laydate" + o.elem.attr("lay-key"), (o.show || e) && r.render(), e || r
			.events(), o.value && o.isInitValue && ("date" === layui.type(o.value) ? r.setValue(r.parse(0, r
				.systemDate(o.value))) : r.setValue(o.value)))
	}, u.prototype.render = function() {
		var n, e, t = this,
			o = t.config,
			s = t.lang(),
			i = "static" === o.position,
			a = t.elem = lay.elem("div", {
				id: t.elemID,
				class: ["layui-laydate", o.range ? " layui-laydate-range" : "", i ? " " + f : "", o.theme &&
					"default" !== o.theme && !/^#/.test(o.theme) ? " laydate-theme-" + o.theme : ""
				].join("")
			}),
			y = t.elemMain = [],
			d = t.elemHeader = [],
			m = t.elemCont = [],
			c = t.table = [],
			l = t.footer = lay.elem("div", {
				class: "layui-laydate-footer"
			});
		o.zIndex && (a.style.zIndex = o.zIndex), lay.each(new Array(2), function(e) {
				if (!o.range && 0 < e) return !0;
				var a = lay.elem("div", {
						class: "layui-laydate-header"
					}),
					t = [((t = lay.elem("i", {
						class: "layui-icon laydate-icon laydate-prev-y"
					})).innerHTML = "&#xe65a;", t), ((t = lay.elem("i", {
						class: "layui-icon laydate-icon laydate-prev-m"
					})).innerHTML = "&#xe603;", t), (t = lay.elem("div", {
							class: "laydate-set-ym"
						}), n = lay.elem("span"), l = lay.elem("span"), t.appendChild(n), t.appendChild(l),
						t), ((n = lay.elem("i", {
						class: "layui-icon laydate-icon laydate-next-m"
					})).innerHTML = "&#xe602;", n), ((l = lay.elem("i", {
						class: "layui-icon laydate-icon laydate-next-y"
					})).innerHTML = "&#xe65b;", l)],
					n = lay.elem("div", {
						class: "layui-laydate-content"
					}),
					i = lay.elem("table"),
					l = lay.elem("thead"),
					r = lay.elem("tr");
				lay.each(t, function(e, t) {
					a.appendChild(t)
				}), l.appendChild(r), lay.each(new Array(6), function(a) {
					var n = i.insertRow(0);
					lay.each(new Array(7), function(e) {
						var t;
						0 === a && ((t = lay.elem("th")).innerHTML = s.weeks[e], r.appendChild(
							t)), n.insertCell(e)
					})
				}), i.insertBefore(l, i.children[0]), n.appendChild(i), y[e] = lay.elem("div", {
					class: "layui-laydate-main laydate-main-list-" + e
				}), y[e].appendChild(a), y[e].appendChild(n), d.push(t), m.push(n), c.push(i)
			}), lay(l).html((e = [], n = [], "datetime" === o.type && e.push('<span lay-type="datetime" class="' +
				I + '">' + s.timeTips + "</span>"), !o.range && "datetime" === o.type || e.push(
				'<span class="' + g + '" title="' + s.preview + '"></span>'), lay.each(o.btns, function(e,
				t) {
				var a = s.tools[t] || "btn";
				o.range && "now" === t || (i && "clear" === t && (a = "cn" === o.lang ? "\u91cd\u7f6e" :
					"Reset"), n.push('<span lay-type="' + t + '" class="laydate-btns-' + t +
					'">' + a + "</span>"))
			}), e.push('<div class="laydate-footer-btns">' + n.join("") + "</div>"), e.join(""))), lay.each(y,
				function(e, t) {
					a.appendChild(t)
				}), o.showBottom && a.appendChild(l), /^#/.test(o.theme) && (e = lay.elem("style"), l = [
				"#{{id}} .layui-laydate-header{background-color:{{theme}};}",
				"#{{id}} .layui-this{background-color:{{theme}} !important;}"
			].join("").replace(/{{id}}/g, t.elemID).replace(/{{theme}}/g, o.theme), "styleSheet" in e ? (e
				.setAttribute("type", "text/css"), e.styleSheet.cssText = l) : e.innerHTML = l, lay(a).addClass(
				"laydate-theme-molv"), a.appendChild(e)), h.thisId = o.id, t.remove(u.thisElemDate), i ? o.elem
			.append(a) : (r.body.appendChild(a), t.position()), t.checkDate().calendar(null, 0, "init"), t
			.changeEvent(), u.thisElemDate = t.elemID, "function" == typeof o.ready && o.ready(lay.extend({}, o
				.dateTime, {
					month: o.dateTime.month + 1
				})), t.preview()
	}, u.prototype.remove = function(e) {
		var t = this,
			a = (t.config, lay("#" + (e || t.elemID)));
		return a[0] && (a.hasClass(f) || t.checkDate(function() {
			a.remove(), delete h.thisId
		})), t
	}, u.prototype.position = function() {
		var e = this.config;
		return lay.position(this.bindElem || e.elem[0], this.elem, {
			position: e.position
		}), this
	}, u.prototype.hint = function(e) {
		var t = this,
			a = (t.config, lay.elem("div", {
				class: s
			}));
		t.elem && (a.innerHTML = e || "", lay(t.elem).find("." + s).remove(), t.elem.appendChild(a), clearTimeout(t
			.hinTimer), t.hinTimer = setTimeout(function() {
			lay(t.elem).find("." + s).remove()
		}, 3e3))
	}, u.prototype.getAsYM = function(e, t, a) {
		return a ? t-- : t++, t < 0 && (t = 11, e--), 11 < t && (t = 0, e++), [e, t]
	}, u.prototype.systemDate = function(e) {
		var t = e || new Date;
		return {
			year: t.getFullYear(),
			month: t.getMonth(),
			date: t.getDate(),
			hours: e ? e.getHours() : 0,
			minutes: e ? e.getMinutes() : 0,
			seconds: e ? e.getSeconds() : 0
		}
	}, u.prototype.checkDate = function(e) {
		function a(n, i, l) {
			var r = ["startTime", "endTime"];
			i = (i.match(s.EXP_SPLIT) || []).slice(1), l = l || 0, y.range && (s[r[l]] = s[r[l]] || {}), lay.each(s
				.format,
				function(e, t) {
					var a = parseFloat(i[e]);
					i[e].length < t.length && (o = !0), /yyyy|y/.test(t) ? (a < p[0] && (a = p[0], o = !0), n
							.year = a) : /MM|M/.test(t) ? (a < 1 && (a = 1, o = !0), n.month = a - 1) : /dd|d/
						.test(t) ? (a < 1 && (a = 1, o = !0), n.date = a) : /HH|H/.test(t) ? (a < 1 && (o = !(
							a = 0)), n.hours = a, y.range && (s[r[l]].hours = a)) : /mm|m/.test(t) ? (a < 1 && (
							o = !(a = 0)), n.minutes = a, y.range && (s[r[l]].minutes = a)) : /ss|s/.test(t) &&
						(a < 1 && (o = !(a = 0)), n.seconds = a, y.range && (s[r[l]].seconds = a))
				}), d(n)
		}
		var t, o, s = this,
			y = (new Date, s.config),
			n = s.lang(),
			i = y.dateTime = y.dateTime || s.systemDate(),
			l = s.bindElem || y.elem[0],
			r = (s.isInput(l), function() {
				if (s.rangeElem) {
					var e = [s.rangeElem[0].val(), s.rangeElem[1].val()];
					if (e[0] && e[1]) return e.join(" " + s.rangeStr + " ")
				}
				return s.isInput(l) ? l.value : "static" === y.position ? "" : lay(l).attr("lay-date")
			}()),
			d = function(e) {
				e.year > p[1] && (e.year = p[1], o = !0), 11 < e.month && (e.month = 11, o = !0), 23 < e.hours && (e
						.hours = 0, o = !0), 59 < e.minutes && (e.minutes = 0, e.hours++, o = !0), 59 < e.seconds &&
					(e.seconds = 0, e.minutes++, o = !0), t = h.getEndDate(e.month + 1, e.year), e.date > t && (e
						.date = t, o = !0)
			};
		if ("limit" === e) return d(i), s;
		"string" == typeof(r = r || y.value) && (r = r.replace(/\s+/g, " ").replace(/^\s|\s$/g, ""));

		function m() {
			var e, t, a;
			y.range && (s.endDate = s.endDate || lay.extend({}, y.dateTime, (e = {}, t = y.dateTime, a = s.getAsYM(t
				.year, t.month), "year" === y.type ? e.year = t.year + 1 : "time" !== y.type && (e
				.year = a[0], e.month = a[1]), "datetime" !== y.type && "time" !== y.type || (e
				.hours = 23, e.minutes = e.seconds = 59), e)))
		}

		function c(e) {
			return s.newDate(e).getTime()
		}
		var u;
		m(), "string" == typeof r && r ? s.EXP_IF.test(r) ? y.range ? (r = r.split(" " + s.rangeStr + " "), lay
				.each([y.dateTime, s.endDate], function(e, t) {
					a(t, r[e], e)
				})) : a(i, r) : (s.hint(n.formatError[0] + (y.range ? y.format + " " + s.rangeStr + " " + y.format :
				y.format) + n.formatError[1]), o = !0) : r && "date" === layui.type(r) ? y.dateTime = s.systemDate(
				r) : (y.dateTime = s.systemDate(), delete s.startTime, delete s.endDate, m(), delete s.endTime), s
			.rangeElem && (n = [s.rangeElem[0].val(), s.rangeElem[1].val()], u = [y.dateTime, s.endDate], lay.each(
				n,
				function(e, t) {
					s.EXP_IF_ONE.test(t) && a(u[e], t, e)
				})), d(i), y.range && d(s.endDate), o && r && s.setValue(!y.range || s.endDate ? s.parse() : "");
		return c(i) > c(y.max) ? i = y.dateTime = lay.extend({}, y.max) : c(i) < c(y.min) && (i = y.dateTime = lay
			.extend({}, y.min)), y.range && (c(s.endDate) < c(y.min) || c(s.endDate) > c(y.max)) && (s.endDate =
			lay.extend({}, y.max)), e && e(), s
	}, u.prototype.mark = function(e, a) {
		var n, t = this.config;
		return lay.each(t.mark, function(e, t) {
			e = e.split("-");
			e[0] != a[0] && 0 != e[0] || e[1] != a[1] && 0 != e[1] || e[2] != a[2] || (n = t || a[2])
		}), n && e.html('<span class="laydate-day-mark">' + n + "</span>"), this
	}, u.prototype.limit = function(e, t, a, i) {
		var l = this,
			n = l.config,
			r = {},
			a = n[41 < a ? "endDate" : "dateTime"],
			a = lay.extend({}, a, t || {});
		return lay.each({
			now: a,
			min: n.min,
			max: n.max
		}, function(e, a) {
			var n;
			r[e] = l.newDate(lay.extend({
				year: a.year,
				month: a.month,
				date: a.date
			}, (n = {}, lay.each(i, function(e, t) {
				n[t] = a[t]
			}), n))).getTime()
		}), t = r.now < r.min || r.now > r.max, e && e[t ? "addClass" : "removeClass"](x), t
	}, u.prototype.thisDateTime = function(e) {
		var t = this.config;
		return e ? this.endDate : t.dateTime
	}, u.prototype.calendar = function(e, t, a) {
		var i, l, r, o = this,
			n = o.config,
			t = t ? 1 : 0,
			s = e || o.thisDateTime(t),
			y = new Date,
			d = o.lang(),
			m = "date" !== n.type && "datetime" !== n.type,
			c = lay(o.table[t]).find("td"),
			t = lay(o.elemHeader[t][2]).find("span");
		return s.year < p[0] && (s.year = p[0], o.hint(d.invalidDate)), s.year > p[1] && (s.year = p[1], o.hint(d
				.invalidDate)), o.firstDate || (o.firstDate = lay.extend({}, s)), y.setFullYear(s.year, s.month, 1),
			i = y.getDay(), l = h.getEndDate(s.month || 12, s.year), r = h.getEndDate(s.month + 1, s.year), lay
			.each(c, function(e, t) {
				var a = [s.year, s.month],
					n = 0;
				(t = lay(t)).removeAttr("class"), e < i ? (n = l - i + e, t.addClass("laydate-day-prev"), a = o
						.getAsYM(s.year, s.month, "sub")) : i <= e && e < r + i ? (n = e - i) + 1 === s.date &&
					t.addClass(w) : (n = e - r - i, t.addClass("laydate-day-next"), a = o.getAsYM(s.year, s
						.month)), a[1]++, a[2] = n + 1, t.attr("lay-ymd", a.join("-")).html(a[2]), o.mark(t, a)
					.limit(t, {
						year: a[0],
						month: a[1] - 1,
						date: a[2]
					}, e)
			}), lay(t[0]).attr("lay-ym", s.year + "-" + (s.month + 1)), lay(t[1]).attr("lay-ym", s.year + "-" + (s
				.month + 1)), "cn" === n.lang ? (lay(t[0]).attr("lay-type", "year").html(s.year + " \u5e74"), lay(t[
				1]).attr("lay-type", "month").html(s.month + 1 + " \u6708")) : (lay(t[0]).attr("lay-type", "month")
				.html(d.month[s.month]), lay(t[1]).attr("lay-type", "year").html(s.year)), m && (n.range ? e && (o
				.listYM = [
					[n.dateTime.year, n.dateTime.month + 1],
					[o.endDate.year, o.endDate.month + 1]
				], o.list(n.type, 0).list(n.type, 1), "time" === n.type ? o.setBtnStatus("\u65f6\u95f4", lay
					.extend({}, o.systemDate(), o.startTime), lay.extend({}, o.systemDate(), o.endTime)) : o
				.setBtnStatus(!0)) : (o.listYM = [
				[s.year, s.month + 1]
			], o.list(n.type, 0))), n.range && "init" === a && !e && o.calendar(o.endDate, 1), n.range || o.limit(
				lay(o.footer).find(E), null, 0, ["hours", "minutes", "seconds"]), o.setBtnStatus(), o
	}, u.prototype.list = function(t, n) {
		var i, l, e, r, o = this,
			s = o.config,
			y = s.dateTime,
			d = o.lang(),
			a = s.range && "date" !== s.type && "datetime" !== s.type,
			m = lay.elem("ul", {
				class: M + " " + {
					year: "laydate-year-list",
					month: "laydate-month-list",
					time: "laydate-time-list"
				} [t]
			}),
			c = o.elemHeader[n],
			u = lay(c[2]).find("span"),
			h = o.elemCont[n || 0],
			p = lay(h).find("." + M)[0],
			f = "cn" === s.lang,
			g = f ? "\u5e74" : "",
			v = o.listYM[n] || {},
			T = ["hours", "minutes", "seconds"],
			D = ["startTime", "endTime"][n];
		return v[0] < 1 && (v[0] = 1), "year" === t ? (e = i = v[0] - 7, i < 1 && (e = i = 1), lay.each(new Array(
				15), function(e) {
				var t = lay.elem("li", {
						"lay-ym": i
					}),
					a = {
						year: i,
						month: 0,
						date: 1
					};
				i == v[0] && lay(t).addClass(w), t.innerHTML = i + g, m.appendChild(t), o.limit(lay(t), a,
					n), i++
			}), lay(u[f ? 0 : 1]).attr("lay-ym", i - 8 + "-" + v[1]).html(e + g + " - " + (i - 1) + g)) :
			"month" === t ? (lay.each(new Array(12), function(e) {
				var t = lay.elem("li", {
						"lay-ym": e
					}),
					a = {
						year: v[0],
						month: e,
						date: 1
					};
				e + 1 == v[1] && lay(t).addClass(w), t.innerHTML = d.month[e] + (f ? "\u6708" : ""), m
					.appendChild(t), o.limit(lay(t), a, n)
			}), lay(u[f ? 0 : 1]).attr("lay-ym", v[0] + "-" + v[1]).html(v[0] + g)) : "time" === t && (l =
			function() {
				lay(m).find("ol").each(function(a, e) {
					lay(e).find("li").each(function(e, t) {
						o.limit(lay(t), [{
							hours: e
						}, {
							hours: o[D].hours,
							minutes: e
						}, {
							hours: o[D].hours,
							minutes: o[D].minutes,
							seconds: e
						}][a], n, [
							["hours"],
							["hours", "minutes"],
							["hours", "minutes", "seconds"]
						][a])
					})
				}), s.range || o.limit(lay(o.footer).find(E), o[D], 0, ["hours", "minutes", "seconds"])
			}, s.range ? o[D] || (o[D] = "startTime" === D ? y : o.endDate) : o[D] = y, lay.each([24, 60, 60],
				function(t, e) {
					var a = lay.elem("li"),
						n = ["<p>" + d.time[t] + "</p><ol>"];
					lay.each(new Array(e), function(e) {
						n.push("<li" + (o[D][T[t]] === e ? ' class="' + w + '"' : "") + ">" + lay.digit(
							e, 2) + "</li>")
					}), a.innerHTML = n.join("") + "</ol>", m.appendChild(a)
				}), l()), p && h.removeChild(p), h.appendChild(m), "year" === t || "month" === t ? (lay(o.elemMain[
				n]).addClass("laydate-ym-show"), lay(m).find("li").on("click", function() {
				var e = 0 | lay(this).attr("lay-ym");
				lay(this).hasClass(x) || (0 === n ? (y[t] = e, o.limit(lay(o.footer).find(E), null, 0)) : o
					.endDate[t] = e, "year" === s.type || "month" === s.type ? (lay(m).find("." + w)
						.removeClass(w), lay(this).addClass(w), "month" === s.type && "year" === t && (o
							.listYM[n][0] = e, a && ((n ? o.endDate : y).year = e), o.list("month", n))
						) : (o.checkDate("limit").calendar(null, n), o.closeList()), o.setBtnStatus(), s
					.range || ("month" === s.type && "month" === t || "year" === s.type && "year" ===
					t) && o.setValue(o.parse()).remove().done(), o.done(null, "change"), lay(o.footer)
					.find("." + I).removeClass(x))
			})) : (e = lay.elem("span", {
					class: C
				}), r = function() {
					lay(m).find("ol").each(function(e) {
						var a = this,
							t = lay(a).find("li");
						a.scrollTop = 30 * (o[D][T[e]] - 2), a.scrollTop <= 0 && t.each(function(e, t) {
							if (!lay(this).hasClass(x)) return a.scrollTop = 30 * (e - 2), !0
						})
					})
				}, u = lay(c[2]).find("." + C), r(), e.innerHTML = s.range ? [d.startTime, d.endTime][n] : d
				.timeTips, lay(o.elemMain[n]).addClass("laydate-time-show"), u[0] && u.remove(), c[2].appendChild(
				e), lay(m).find("ol").each(function(t) {
					var a = this;
					lay(a).find("li").on("click", function() {
						var e = 0 | this.innerHTML;
						lay(this).hasClass(x) || (s.range ? o[D][T[t]] = e : y[T[t]] = e, lay(a).find(
								"." + w).removeClass(w), lay(this).addClass(w), l(), r(), !o
							.endDate && "time" !== s.type || o.done(null, "change"), o
							.setBtnStatus())
					})
				})), o
	}, u.prototype.listYM = [], u.prototype.closeList = function() {
		var a = this;
		a.config;
		lay.each(a.elemCont, function(e, t) {
			lay(this).find("." + M).remove(), lay(a.elemMain[e]).removeClass(
				"laydate-ym-show laydate-time-show")
		}), lay(a.elem).find("." + C).remove()
	}, u.prototype.setBtnStatus = function(e, t, a) {
		var n = this,
			i = n.config,
			l = n.lang(),
			r = lay(n.footer).find(E);
		i.range && "time" !== i.type && (t = t || i.dateTime, a = a || n.endDate, i = n.newDate(t).getTime() > n
			.newDate(a).getTime(), n.limit(null, t) || n.limit(null, a) ? r.addClass(x) : r[i ? "addClass" :
				"removeClass"](x), e && i && n.hint("string" == typeof e ? l.timeout.replace(/\u65e5\u671f/g,
				e) : l.timeout))
	}, u.prototype.parse = function(e, t) {
		var a = this,
			n = a.config,
			t = t || ("end" == e ? lay.extend({}, a.endDate, a.endTime) : n.range ? lay.extend({}, n.dateTime, a
				.startTime) : n.dateTime),
			t = h.parse(t, a.format, 1);
		return n.range && void 0 === e ? t + " " + a.rangeStr + " " + a.parse("end") : t
	}, u.prototype.newDate = function(e) {
		return e = e || {}, new Date(e.year || 1, e.month || 0, e.date || 1, e.hours || 0, e.minutes || 0, e
			.seconds || 0)
	}, u.prototype.setValue = function(e) {
		var t = this,
			a = t.config,
			n = t.bindElem || a.elem[0];
		return "static" === a.position || (e = e || "", t.isInput(n) ? lay(n).val(e) : (a = t.rangeElem) ? (
			"array" !== layui.type(e) && (e = e.split(" " + t.rangeStr + " ")), a[0].val(e[0] || ""), a[1]
			.val(e[1] || "")) : (0 === lay(n).find("*").length && lay(n).html(e), lay(n).attr("lay-date",
			e))), t
	}, u.prototype.preview = function() {
		var e, t = this,
			a = t.config;
		a.isPreview && (e = lay(t.elem).find("." + g), a = !a.range || t.endDate ? t.parse() : "", e.html(a).css({
			color: "#5FB878"
		}), setTimeout(function() {
			e.css({
				color: "#666"
			})
		}, 300))
	}, u.prototype.done = function(e, t) {
		var a = this,
			n = a.config,
			i = lay.extend({}, lay.extend(n.dateTime, a.startTime)),
			l = lay.extend({}, lay.extend(a.endDate, a.endTime));
		return lay.each([i, l], function(e, t) {
				"month" in t && lay.extend(t, {
					month: t.month + 1
				})
			}), a.preview(), e = e || [a.parse(), i, l], "function" == typeof n[t || "done"] && n[t || "done"]
			.apply(n, e), a
	}, u.prototype.choose = function(e, t) {
		var a = this,
			n = a.config,
			i = a.thisDateTime(t),
			l = (lay(a.elem).find("td"), {
				year: 0 | (l = e.attr("lay-ymd").split("-"))[0],
				month: (0 | l[1]) - 1,
				date: 0 | l[2]
			});
		e.hasClass(x) || (lay.extend(i, l), n.range ? (lay.each(["startTime", "endTime"], function(e, t) {
				a[t] = a[t] || {
					hours: e ? 23 : 0,
					minutes: e ? 59 : 0,
					seconds: e ? 59 : 0
				}
			}), a.calendar(null, t).done(null, "change")) : "static" === n.position ? a.calendar().done().done(
				null, "change") : "date" === n.type ? a.setValue(a.parse()).remove().done() : "datetime" === n
			.type && a.calendar().done(null, "change"))
	}, u.prototype.tool = function(e, t) {
		var a = this,
			n = a.config,
			i = a.lang(),
			l = n.dateTime,
			r = "static" === n.position,
			o = {
				datetime: function() {
					lay(e).hasClass(x) || (a.list("time", 0), n.range && a.list("time", 1), lay(e).attr(
						"lay-type", "date").html(a.lang().dateTips))
				},
				date: function() {
					a.closeList(), lay(e).attr("lay-type", "datetime").html(a.lang().timeTips)
				},
				clear: function() {
					r && (lay.extend(l, a.firstDate), a.calendar()), n.range && (delete n.dateTime, delete a
						.endDate, delete a.startTime, delete a.endTime), a.setValue("").remove(), a.done([
						"", {}, {}
					])
				},
				now: function() {
					var e = new Date;
					lay.extend(l, a.systemDate(), {
						hours: e.getHours(),
						minutes: e.getMinutes(),
						seconds: e.getSeconds()
					}), a.setValue(a.parse()).remove(), r && a.calendar(), a.done()
				},
				confirm: function() {
					if (n.range) {
						if (lay(e).hasClass(x)) return a.hint("time" === n.type ? i.timeout.replace(
							/\u65e5\u671f/g, "\u65f6\u95f4") : i.timeout)
					} else if (lay(e).hasClass(x)) return a.hint(i.invalidDate);
					a.setValue(a.parse()).remove(), a.done()
				}
			};
		o[t] && o[t]()
	}, u.prototype.change = function(n) {
		function e(e) {
			var t = lay(s).find(".laydate-year-list")[0],
				a = lay(s).find(".laydate-month-list")[0];
			return t && (y[0] = e ? y[0] - 15 : y[0] + 15, i.list("year", n)), a && (e ? y[0]-- : y[0]++, i.list(
				"month", n)), (t || a) && (lay.extend(r, {
				year: y[0]
			}), o && (r.year = y[0]), l.range || i.done(null, "change"), l.range || i.limit(lay(i.footer)
				.find(E), {
					year: y[0]
				})), i.setBtnStatus(), t || a
		}
		var i = this,
			l = i.config,
			r = i.thisDateTime(n),
			o = l.range && ("year" === l.type || "month" === l.type),
			s = i.elemCont[n || 0],
			y = i.listYM[n];
		return {
			prevYear: function() {
				e("sub") || (r.year--, i.checkDate("limit").calendar(null, n), i.done(null, "change"))
			},
			prevMonth: function() {
				var e = i.getAsYM(r.year, r.month, "sub");
				lay.extend(r, {
					year: e[0],
					month: e[1]
				}), i.checkDate("limit").calendar(null, n), i.done(null, "change")
			},
			nextMonth: function() {
				var e = i.getAsYM(r.year, r.month);
				lay.extend(r, {
					year: e[0],
					month: e[1]
				}), i.checkDate("limit").calendar(null, n), i.done(null, "change")
			},
			nextYear: function() {
				e() || (r.year++, i.checkDate("limit").calendar(null, n), i.done(null, "change"))
			}
		}
	}, u.prototype.changeEvent = function() {
		var i = this;
		i.config;
		lay(i.elem).on("click", function(e) {
			lay.stope(e)
		}).on("mousedown", function(e) {
			lay.stope(e)
		}), lay.each(i.elemHeader, function(n, e) {
			lay(e[0]).on("click", function(e) {
				i.change(n).prevYear()
			}), lay(e[1]).on("click", function(e) {
				i.change(n).prevMonth()
			}), lay(e[2]).find("span").on("click", function(e) {
				var t = lay(this),
					a = t.attr("lay-ym"),
					t = t.attr("lay-type");
				a && (a = a.split("-"), i.listYM[n] = [0 | a[0], 0 | a[1]], i.list(t, n), lay(i
					.footer).find("." + I).addClass(x))
			}), lay(e[3]).on("click", function(e) {
				i.change(n).nextMonth()
			}), lay(e[4]).on("click", function(e) {
				i.change(n).nextYear()
			})
		}), lay.each(i.table, function(e, t) {
			lay(t).find("td").on("click", function() {
				i.choose(lay(this), e)
			})
		}), lay(i.footer).find("span").on("click", function() {
			var e = lay(this).attr("lay-type");
			i.tool(this, e)
		})
	}, u.prototype.isInput = function(e) {
		return /input|textarea/.test(e.tagName.toLocaleLowerCase())
	}, u.prototype.events = function() {
		function e(e, t) {
			e.on(n.trigger, function() {
				t && (a.bindElem = this), a.render()
			})
		}
		var a = this,
			n = a.config;
		n.elem[0] && !n.elem[0].eventHandler && (e(n.elem, "bind"), e(n.eventElem), n.elem[0].eventHandler = !0)
	}, l.that = {}, l.getThis = function(e) {
		var t = l.that[e];
		return !t && n && layui.hint().error(e ? a + " instance with ID '" + e + "' not found" :
			"ID argument required"), t
	}, o.run = function(n) {
		n(r).on("mousedown", function(e) {
			var t, a;
			!h.thisId || (t = l.getThis(h.thisId)) && (a = t.config, e.target !== a.elem[0] && e.target !==
				a.eventElem[0] && e.target !== n(a.closeStop)[0] && t.remove())
		}).on("keydown", function(e) {
			var t;
			!h.thisId || (t = l.getThis(h.thisId)) && "static" !== t.config.position && 13 === e.keyCode &&
				n("#" + t.elemID)[0] && t.elemID === u.thisElemDate && (e.preventDefault(), n(t.footer)
					.find(E)[0].click())
		}), n(i).on("resize", function() {
			if (h.thisId) {
				var e = l.getThis(h.thisId);
				if (e) return !(!e.elem || !n(".layui-laydate")[0]) && void e.position()
			}
		})
	}, h.render = function(e) {
		e = new u(e);
		return l.call(e)
	}, h.parse = function(a, n, i) {
		return a = a || {}, n = ((n = "string" == typeof n ? l.formatArr(n) : n) || []).concat(), lay.each(n,
			function(e, t) {
				/yyyy|y/.test(t) ? n[e] = lay.digit(a.year, t.length) : /MM|M/.test(t) ? n[e] = lay.digit(a
						.month + (i || 0), t.length) : /dd|d/.test(t) ? n[e] = lay.digit(a.date, t.length) :
					/HH|H/.test(t) ? n[e] = lay.digit(a.hours, t.length) : /mm|m/.test(t) ? n[e] = lay.digit(a
						.minutes, t.length) : /ss|s/.test(t) && (n[e] = lay.digit(a.seconds, t.length))
			}), n.join("")
	}, h.getEndDate = function(e, t) {
		var a = new Date;
		return a.setFullYear(t || a.getFullYear(), e || a.getMonth() + 1, 1), new Date(a.getTime() - 864e5)
		.getDate()
	}, n ? (h.ready(), layui.define("lay", function(e) {
		h.path = layui.cache.dir, o.run(lay), e(a, h)
	})) : "function" == typeof define && define.amd ? define(function() {
		return o.run(lay), h
	}) : (h.ready(), o.run(i.lay), i.laydate = h)
}(window, window.document);
! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e) : function(e) {
		if (e.document) return t(e);
		throw new Error("jQuery requires a window with a document")
	} : t(e)
}("undefined" != typeof window ? window : this, function(w, M) {
	function O(e, t) {
		return t.toUpperCase()
	}
	var f = [],
		h = w.document,
		c = f.slice,
		R = f.concat,
		P = f.push,
		B = f.indexOf,
		W = {},
		I = W.toString,
		g = W.hasOwnProperty,
		m = {},
		e = "1.12.4",
		T = function(e, t) {
			return new T.fn.init(e, t)
		},
		$ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		z = /^-ms-/,
		X = /-([\da-z])/gi;

	function U(e) {
		var t = !!e && "length" in e && e.length,
			n = T.type(e);
		return "function" !== n && !T.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t &&
			t - 1 in e)
	}
	T.fn = T.prototype = {
		jquery: e,
		constructor: T,
		selector: "",
		length: 0,
		toArray: function() {
			return c.call(this)
		},
		get: function(e) {
			return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
		},
		pushStack: function(e) {
			e = T.merge(this.constructor(), e);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(e) {
			return T.each(this, e)
		},
		map: function(n) {
			return this.pushStack(T.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(c.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				e = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= e && e < t ? [this[e]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: P,
		sort: f.sort,
		splice: f.splice
	}, T.extend = T.fn.extend = function() {
		var e, t, n, r, i, o = arguments[0] || {},
			a = 1,
			s = arguments.length,
			l = !1;
		for ("boolean" == typeof o && (l = o, o = arguments[a] || {}, a++), "object" == typeof o || T
			.isFunction(o) || (o = {}), a === s && (o = this, a--); a < s; a++)
			if (null != (r = arguments[a]))
				for (n in r) i = o[n], o !== (t = r[n]) && (l && t && (T.isPlainObject(t) || (e = T.isArray(
					t))) ? (i = e ? (e = !1, i && T.isArray(i) ? i : []) : i && T.isPlainObject(i) ? i : {},
						o[n] = T.extend(l, i, t)) : void 0 !== t && (o[n] = t));
		return o
	}, T.extend({
		expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === T.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === T.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			var t = e && e.toString();
			return !T.isArray(e) && 0 <= t - parseFloat(t) + 1
		},
		isEmptyObject: function(e) {
			for (var t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			if (!e || "object" !== T.type(e) || e.nodeType || T.isWindow(e)) return !1;
			try {
				if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype,
						"isPrototypeOf")) return !1
			} catch (e) {
				return !1
			}
			if (!m.ownFirst)
				for (var t in e) return g.call(e, t);
			for (t in e);
			return void 0 === t || g.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? W[I.call(e)] ||
				"object" : typeof e
		},
		globalEval: function(e) {
			e && T.trim(e) && (w.execScript || function(e) {
				w.eval.call(w, e)
			})(e)
		},
		camelCase: function(e) {
			return e.replace(z, "ms-").replace(X, O)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t) {
			var n, r = 0;
			if (U(e))
				for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
			else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace($, "")
		},
		makeArray: function(e, t) {
			t = t || [];
			return null != e && (U(Object(e)) ? T.merge(t, "string" == typeof e ? [e] : e) : P.call(t,
				e)), t
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (B) return B.call(t, e, n);
				for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
			if (n != n)
				for (; void 0 !== t[r];) e[i++] = t[r++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				a = [];
			if (U(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return R.apply([], a)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r;
			if ("string" == typeof t && (r = e[t], t = e, e = r), T.isFunction(e)) return n = c.call(
				arguments, 2), (r = function() {
				return e.apply(t || this, n.concat(c.call(arguments)))
			}).guid = e.guid = e.guid || T.guid++, r
		},
		now: function() {
			return +new Date
		},
		support: m
	}), "function" == typeof Symbol && (T.fn[Symbol.iterator] = f[Symbol.iterator]), T.each(
		"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
		function(e, t) {
			W["[object " + t + "]"] = t.toLowerCase()
		});

	function r(e, t, n) {
		for (var r = [], i = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;)
			if (1 === e.nodeType) {
				if (i && T(e).is(n)) break;
				r.push(e)
			} return r
	}

	function V(e, t) {
		for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
		return n
	}
	var e = function(M) {
			function f(e, t, n) {
				var r = "0x" + t - 65536;
				return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 |
					55296, 1023 & r | 56320)
			}

			function O() {
				T()
			}
			var e, h, b, o, R, g, P, B, w, l, u, T, C, t, E, m, r, i, y, N = "sizzle" + +new Date,
				v = M.document,
				k = 0,
				W = 0,
				I = ue(),
				$ = ue(),
				x = ue(),
				z = function(e, t) {
					return e === t && (u = !0), 0
				},
				X = {}.hasOwnProperty,
				n = [],
				U = n.pop,
				V = n.push,
				S = n.push,
				Y = n.slice,
				A = function(e, t) {
					for (var n = 0, r = e.length; n < r; n++)
						if (e[n] === t) return n;
					return -1
				},
				J =
				"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				a = "[\\x20\\t\\r\\n\\f]",
				s = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				G = "\\[" + a + "*(" + s + ")(?:" + a + "*([*^$|!~]?=)" + a +
				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + s + "))|)" + a + "*\\]",
				K = ":(" + s +
				")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + G +
				")*)|.*)\\)|)",
				Q = new RegExp(a + "+", "g"),
				D = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
				Z = new RegExp("^" + a + "*," + a + "*"),
				ee = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
				te = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]", "g"),
				ne = new RegExp(K),
				re = new RegExp("^" + s + "$"),
				d = {
					ID: new RegExp("^#(" + s + ")"),
					CLASS: new RegExp("^\\.(" + s + ")"),
					TAG: new RegExp("^(" + s + "|[*])"),
					ATTR: new RegExp("^" + G),
					PSEUDO: new RegExp("^" + K),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a +
						"*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)",
						"i"),
					bool: new RegExp("^(?:" + J + ")$", "i"),
					needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a +
						"*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i")
				},
				ie = /^(?:input|select|textarea|button)$/i,
				oe = /^h\d$/i,
				c = /^[^{]+\{\s*\[native \w/,
				ae = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				se = /[+~]/,
				le = /'|\\/g,
				p = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)", "ig");
			try {
				S.apply(n = Y.call(v.childNodes), v.childNodes), n[v.childNodes.length].nodeType
			} catch (e) {
				S = {
					apply: n.length ? function(e, t) {
						V.apply(e, Y.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}

			function j(e, t, n, r) {
				var i, o, a, s, l, u, c, f, d = t && t.ownerDocument,
					p = t ? t.nodeType : 9;
				if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
				if (!r && ((t ? t.ownerDocument || t : v) !== C && T(t), t = t || C, E)) {
					if (11 !== p && (u = ae.exec(e)))
						if (i = u[1]) {
							if (9 === p) {
								if (!(a = t.getElementById(i))) return n;
								if (a.id === i) return n.push(a), n
							} else if (d && (a = d.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n
						} else {
							if (u[2]) return S.apply(n, t.getElementsByTagName(e)), n;
							if ((i = u[3]) && h.getElementsByClassName && t.getElementsByClassName) return S.apply(
								n, t.getElementsByClassName(i)), n
						} if (h.qsa && !x[e + " "] && (!m || !m.test(e))) {
						if (1 !== p) d = t, f = e;
						else if ("object" !== t.nodeName.toLowerCase()) {
							for ((s = t.getAttribute("id")) ? s = s.replace(le, "\\$&") : t.setAttribute("id", s =
									N), o = (c = g(e)).length, l = re.test(s) ? "#" + s : "[id='" + s + "']"; o--;)
								c[o] = l + " " + _(c[o]);
							f = c.join(","), d = se.test(e) && de(t.parentNode) || t
						}
						if (f) try {
							return S.apply(n, d.querySelectorAll(f)), n
						} catch (e) {} finally {
							s === N && t.removeAttribute("id")
						}
					}
				}
				return B(e.replace(D, "$1"), t, n, r)
			}

			function ue() {
				var n = [];

				function r(e, t) {
					return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
				}
				return r
			}

			function L(e) {
				return e[N] = !0, e
			}

			function H(e) {
				var t = C.createElement("div");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t)
				}
			}

			function ce(e, t) {
				for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
			}

			function fe(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e
						.sourceIndex || 1 << 31);
				if (r) return r;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function q(a) {
				return L(function(o) {
					return o = +o, L(function(e, t) {
						for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[
							n] = !(t[n] = e[n]))
					})
				})
			}

			function de(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}
			for (e in h = j.support = {}, R = j.isXML = function(e) {
					e = e && (e.ownerDocument || e).documentElement;
					return !!e && "HTML" !== e.nodeName
				}, T = j.setDocument = function(e) {
					var e = e ? e.ownerDocument || e : v;
					return e !== C && 9 === e.nodeType && e.documentElement && (t = (C = e).documentElement, E = !R(
							C), (e = C.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener(
							"unload", O, !1) : e.attachEvent && e.attachEvent("onunload", O)), h.attributes = H(
							function(e) {
								return e.className = "i", !e.getAttribute("className")
							}), h.getElementsByTagName = H(function(e) {
							return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
						}), h.getElementsByClassName = c.test(C.getElementsByClassName), h.getById = H(function(
							e) {
							return t.appendChild(e).id = N, !C.getElementsByName || !C.getElementsByName(N)
								.length
						}), h.getById ? (b.find.ID = function(e, t) {
							if (void 0 !== t.getElementById && E) return (t = t.getElementById(e)) ? [t] :
							[]
						}, b.filter.ID = function(e) {
							var t = e.replace(p, f);
							return function(e) {
								return e.getAttribute("id") === t
							}
						}) : (delete b.find.ID, b.filter.ID = function(e) {
							var t = e.replace(p, f);
							return function(e) {
								e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
								return e && e.value === t
							}
						}), b.find.TAG = h.getElementsByTagName ? function(e, t) {
							return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t
								.querySelectorAll(e) : void 0
						} : function(e, t) {
							var n, r = [],
								i = 0,
								o = t.getElementsByTagName(e);
							if ("*" !== e) return o;
							for (; n = o[i++];) 1 === n.nodeType && r.push(n);
							return r
						}, b.find.CLASS = h.getElementsByClassName && function(e, t) {
							if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
						}, r = [], m = [], (h.qsa = c.test(C.querySelectorAll)) && (H(function(e) {
							t.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N +
								"-\r\\' msallowcapture=''><option selected=''></option></select>", e
								.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" +
									a + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m
								.push("\\[" + a + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" +
									N + "-]").length || m.push("~="), e.querySelectorAll(":checked")
								.length || m.push(":checked"), e.querySelectorAll("a#" + N + "+*")
								.length || m.push(".#.+[+~]")
						}), H(function(e) {
							var t = C.createElement("input");
							t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name",
								"D"), e.querySelectorAll("[name=d]").length && m.push("name" + a +
									"*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(
									":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
						})), (h.matchesSelector = c.test(i = t.matches || t.webkitMatchesSelector || t
							.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector)) && H(function(
						e) {
							h.disconnectedMatch = i.call(e, "div"), i.call(e, "[s!='']:x"), r.push("!=", K)
						}), m = m.length && new RegExp(m.join("|")), r = r.length && new RegExp(r.join("|")),
						e = c.test(t.compareDocumentPosition), y = e || c.test(t.contains) ? function(e, t) {
							var n = 9 === e.nodeType ? e.documentElement : e,
								t = t && t.parentNode;
							return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e
								.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
						} : function(e, t) {
							if (t)
								for (; t = t.parentNode;)
									if (t === e) return !0;
							return !1
						}, z = e ? function(e, t) {
							if (e === t) return u = !0, 0;
							var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
							return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e
									.compareDocumentPosition(t) : 1) || !h.sortDetached && t
								.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === v && y(v,
									e) ? -1 : t === C || t.ownerDocument === v && y(v, t) ? 1 : l ? A(l,
								e) - A(l, t) : 0 : 4 & n ? -1 : 1)
						} : function(e, t) {
							if (e === t) return u = !0, 0;
							var n, r = 0,
								i = e.parentNode,
								o = t.parentNode,
								a = [e],
								s = [t];
							if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : l ? A(l, e) - A(
								l, t) : 0;
							if (i === o) return fe(e, t);
							for (n = e; n = n.parentNode;) a.unshift(n);
							for (n = t; n = n.parentNode;) s.unshift(n);
							for (; a[r] === s[r];) r++;
							return r ? fe(a[r], s[r]) : a[r] === v ? -1 : s[r] === v ? 1 : 0
						}), C
				}, j.matches = function(e, t) {
					return j(e, null, null, t)
				}, j.matchesSelector = function(e, t) {
					if ((e.ownerDocument || e) !== C && T(e), t = t.replace(te, "='$1']"), h.matchesSelector && E &&
						!x[t + " "] && (!r || !r.test(t)) && (!m || !m.test(t))) try {
						var n = i.call(e, t);
						if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (e) {}
					return 0 < j(t, C, null, [e]).length
				}, j.contains = function(e, t) {
					return (e.ownerDocument || e) !== C && T(e), y(e, t)
				}, j.attr = function(e, t) {
					(e.ownerDocument || e) !== C && T(e);
					var n = b.attrHandle[t.toLowerCase()],
						n = n && X.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
					return void 0 !== n ? n : h.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(
						t)) && n.specified ? n.value : null
				}, j.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, j.uniqueSort = function(e) {
					var t, n = [],
						r = 0,
						i = 0;
					if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(z), u) {
						for (; t = e[i++];) t === e[i] && (r = n.push(i));
						for (; r--;) e.splice(n[r], 1)
					}
					return l = null, e
				}, o = j.getText = function(e) {
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
						} else if (3 === i || 4 === i) return e.nodeValue
					} else
						for (; t = e[r++];) n += o(t);
					return n
				}, (b = j.selectors = {
					cacheLength: 50,
					createPseudo: L,
					match: d,
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
							return e[1] = e[1].replace(p, f), e[3] = (e[3] || e[4] || e[5] || "").replace(p,
								f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || j.error(
									e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] ||
									"odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && j
								.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, n = !e[6] && e[2];
							return d.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ne
								.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n
									.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e
								.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(p, f).toLowerCase();
							return "*" === e ? function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = I[e + " "];
							return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && I(e,
								function(e) {
									return t.test("string" == typeof e.className && e.className ||
										void 0 !== e.getAttribute && e.getAttribute("class") || "")
								})
						},
						ATTR: function(t, n, r) {
							return function(e) {
								e = j.attr(e, t);
								return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r :
									"!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) :
									"*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(
										-r.length) === r : "~=" === n ? -1 < (" " + e.replace(Q,
										" ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(
										0, r.length + 1) === r + "-"))
							}
						},
						CHILD: function(h, e, t, g, m) {
							var y = "nth" !== h.slice(0, 3),
								v = "last" !== h.slice(-4),
								x = "of-type" === e;
							return 1 === g && 0 === m ? function(e) {
								return !!e.parentNode
							} : function(e, t, n) {
								var r, i, o, a, s, l, u = y != v ? "nextSibling" : "previousSibling",
									c = e.parentNode,
									f = x && e.nodeName.toLowerCase(),
									d = !n && !x,
									p = !1;
								if (c) {
									if (y) {
										for (; u;) {
											for (a = e; a = a[u];)
												if (x ? a.nodeName.toLowerCase() === f : 1 === a
													.nodeType) return !1;
											l = u = "only" === h && !l && "nextSibling"
										}
										return !0
									}
									if (l = [v ? c.firstChild : c.lastChild], v && d) {
										for (p = (s = (r = (i = (o = (a = c)[N] || (a[N] = {}))[a
													.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] ===
												k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s &&
											a && a[u] || (p = s = 0) || l.pop();)
											if (1 === a.nodeType && ++p && a === e) {
												i[h] = [k, s, p];
												break
											}
									} else if (!1 === (p = d ? s = (r = (i = (o = (a = e)[N] || (a[
											N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[
											0] === k && r[1] : p))
										for (;
											(a = ++s && a && a[u] || (p = s = 0) || l.pop()) && ((x ? a
													.nodeName.toLowerCase() !== f : 1 !== a.nodeType) ||
												!++p || (d && ((i = (o = a[N] || (a[N] = {}))[a
													.uniqueID] || (o[a.uniqueID] = {}))[h] = [k,
													p
												]), a !== e)););
									return (p -= m) === g || p % g == 0 && 0 <= p / g
								}
							}
						},
						PSEUDO: function(e, o) {
							var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || j.error(
								"unsupported pseudo: " + e);
							return a[N] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters
								.hasOwnProperty(e.toLowerCase()) ? L(function(e, t) {
									for (var n, r = a(e, o), i = r.length; i--;) e[n = A(e, r[
										i])] = !(t[n] = r[i])
								}) : function(e) {
									return a(e, 0, t)
								}) : a
						}
					},
					pseudos: {
						not: L(function(e) {
							var r = [],
								i = [],
								s = P(e.replace(D, "$1"));
							return s[N] ? L(function(e, t, n, r) {
								for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[
									a]) && (e[a] = !(t[a] = i))
							}) : function(e, t, n) {
								return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
							}
						}),
						has: L(function(t) {
							return function(e) {
								return 0 < j(t, e).length
							}
						}),
						contains: L(function(t) {
							return t = t.replace(p, f),
								function(e) {
									return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
								}
						}),
						lang: L(function(n) {
							return re.test(n || "") || j.error("unsupported lang: " + n), n = n.replace(
									p, f).toLowerCase(),
								function(e) {
									var t;
									do {
										if (t = E ? e.lang : e.getAttribute("xml:lang") || e
											.getAttribute("lang")) return (t = t.toLowerCase()) === n ||
											0 === t.indexOf(n + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						}),
						target: function(e) {
							var t = M.location && M.location.hash;
							return t && t.slice(1) === e.id
						},
						root: function(e) {
							return e === t
						},
						focus: function(e) {
							return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e
								.href || ~e.tabIndex)
						},
						enabled: function(e) {
							return !1 === e.disabled
						},
						disabled: function(e) {
							return !0 === e.disabled
						},
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e) {
							return !b.pseudos.empty(e)
						},
						header: function(e) {
							return oe.test(e.nodeName)
						},
						input: function(e) {
							return ie.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (
								e = e.getAttribute("type")) || "text" === e.toLowerCase())
						},
						first: q(function() {
							return [0]
						}),
						last: q(function(e, t) {
							return [t - 1]
						}),
						eq: q(function(e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: q(function(e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: q(function(e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: q(function(e, t, n) {
							for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
							return e
						}),
						gt: q(function(e, t, n) {
							for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				}).pseudos.nth = b.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) b.pseudos[e] = function(t) {
				return function(e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}(e);
			for (e in {
					submit: !0,
					reset: !0
				}) b.pseudos[e] = function(n) {
				return function(e) {
					var t = e.nodeName.toLowerCase();
					return ("input" === t || "button" === t) && e.type === n
				}
			}(e);

			function pe() {}

			function _(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r
			}

			function he(a, e, t) {
				var s = e.dir,
					l = t && "parentNode" === s,
					u = W++;
				return e.first ? function(e, t, n) {
					for (; e = e[s];)
						if (1 === e.nodeType || l) return a(e, t, n)
				} : function(e, t, n) {
					var r, i, o = [k, u];
					if (n) {
						for (; e = e[s];)
							if ((1 === e.nodeType || l) && a(e, t, n)) return !0
					} else
						for (; e = e[s];)
							if (1 === e.nodeType || l) {
								if ((r = (i = (i = e[N] || (e[N] = {}))[e.uniqueID] || (i[e.uniqueID] = {}))[
									s]) && r[0] === k && r[1] === u) return o[2] = r[2];
								if ((i[s] = o)[2] = a(e, t, n)) return !0
							}
				}
			}

			function ge(i) {
				return 1 < i.length ? function(e, t, n) {
					for (var r = i.length; r--;)
						if (!i[r](e, t, n)) return !1;
					return !0
				} : i[0]
			}

			function F(e, t, n, r, i) {
				for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) !(o = e[s]) || n && !n(o, r,
					i) || (a.push(o), u && t.push(s));
				return a
			}

			function me(p, h, g, m, y, e) {
				return m && !m[N] && (m = me(m)), y && !y[N] && (y = me(y, e)), L(function(e, t, n, r) {
					var i, o, a, s = [],
						l = [],
						u = t.length,
						c = e || function(e, t, n) {
							for (var r = 0, i = t.length; r < i; r++) j(e, t[r], n);
							return n
						}(h || "*", n.nodeType ? [n] : n, []),
						f = !p || !e && h ? c : F(c, s, p, n, r),
						d = g ? y || (e ? p : u || m) ? [] : t : f;
					if (g && g(f, d, n, r), m)
						for (i = F(d, l), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[l[o]] = !(f[l[
							o]] = a));
					if (e) {
						if (y || p) {
							if (y) {
								for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
								y(null, d = [], i, r)
							}
							for (o = d.length; o--;)(a = d[o]) && -1 < (i = y ? A(e, a) : s[o]) && (e[i] = !
								(t[i] = a))
						}
					} else d = F(d === t ? d.splice(u, d.length) : d), y ? y(null, t, d, r) : S.apply(t, d)
				})
			}

			function ye(m, y) {
				function e(e, t, n, r, i) {
					var o, a, s, l = 0,
						u = "0",
						c = e && [],
						f = [],
						d = w,
						p = e || x && b.find.TAG("*", i),
						h = k += null == d ? 1 : Math.random() || .1,
						g = p.length;
					for (i && (w = t === C || t || i); u !== g && null != (o = p[u]); u++) {
						if (x && o) {
							for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = m[a++];)
								if (s(o, t || C, n)) {
									r.push(o);
									break
								} i && (k = h)
						}
						v && ((o = !s && o) && l--, e && c.push(o))
					}
					if (l += u, v && u !== l) {
						for (a = 0; s = y[a++];) s(c, f, t, n);
						if (e) {
							if (0 < l)
								for (; u--;) c[u] || f[u] || (f[u] = U.call(r));
							f = F(f)
						}
						S.apply(r, f), i && !e && 0 < f.length && 1 < l + y.length && j.uniqueSort(r)
					}
					return i && (k = h, w = d), c
				}
				var v = 0 < y.length,
					x = 0 < m.length;
				return v ? L(e) : e
			}
			return pe.prototype = b.filters = b.pseudos, b.setFilters = new pe, g = j.tokenize = function(e, t) {
					var n, r, i, o, a, s, l, u = $[e + " "];
					if (u) return t ? 0 : u.slice(0);
					for (a = e, s = [], l = b.preFilter; a;) {
						for (o in n && !(r = Z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])),
							n = !1, (r = ee.exec(a)) && (n = r.shift(), i.push({
								value: n,
								type: r[0].replace(D, " ")
							}), a = a.slice(n.length)), b.filter) !(r = d[o].exec(a)) || l[o] && !(r = l[o](r)) || (
							n = r.shift(), i.push({
								value: n,
								type: o,
								matches: r
							}), a = a.slice(n.length));
						if (!n) break
					}
					return t ? a.length : a ? j.error(e) : $(e, s).slice(0)
				}, P = j.compile = function(e, t) {
					var n, r = [],
						i = [],
						o = x[e + " "];
					if (!o) {
						for (n = (t = t || g(e)).length; n--;)((o = function e(t) {
							for (var r, n, i, o = t.length, a = b.relative[t[0].type], s = a || b
									.relative[" "], l = a ? 1 : 0, u = he(function(e) {
										return e === r
									}, s, !0), c = he(function(e) {
										return -1 < A(r, e)
									}, s, !0), f = [function(e, t, n) {
										return e = !a && (n || t !== w) || ((r = t).nodeType ? u :
											c)(e, t, n), r = null, e
									}]; l < o; l++)
								if (n = b.relative[t[l].type]) f = [he(ge(f), n)];
								else {
									if ((n = b.filter[t[l].type].apply(null, t[l].matches))[N]) {
										for (i = ++l; i < o && !b.relative[t[i].type]; i++);
										return me(1 < l && ge(f), 1 < l && _(t.slice(0, l - 1).concat({
												value: " " === t[l - 2].type ? "*" : ""
											})).replace(D, "$1"), n, l < i && e(t.slice(l, i)), i <
											o && e(t = t.slice(i)), i < o && _(t))
									}
									f.push(n)
								} return ge(f)
						}(t[n]))[N] ? r : i).push(o);
						(o = x(e, ye(i, r))).selector = e
					}
					return o
				}, B = j.select = function(e, t, n, r) {
					var i, o, a, s, l, u = "function" == typeof e && e,
						c = !r && g(e = u.selector || e);
					if (n = n || [], 1 === c.length) {
						if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 ===
							t.nodeType && E && b.relative[o[1].type]) {
							if (!(t = (b.find.ID(a.matches[0].replace(p, f), t) || [])[0])) return n;
							u && (t = t.parentNode), e = e.slice(o.shift().value.length)
						}
						for (i = d.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
							if ((l = b.find[s]) && (r = l(a.matches[0].replace(p, f), se.test(o[0].type) && de(t
									.parentNode) || t))) {
								if (o.splice(i, 1), e = r.length && _(o)) break;
								return S.apply(n, r), n
							}
					}
					return (u || P(e, c))(r, t, !E, n, !t || se.test(e) && de(t.parentNode) || t), n
				}, h.sortStable = N.split("").sort(z).join("") === N, h.detectDuplicates = !!u, T(), h
				.sortDetached = H(function(e) {
					return 1 & e.compareDocumentPosition(C.createElement("div"))
				}), H(function(e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || ce("type|href|height|width", function(e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), h.attributes && H(function(e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild
						.getAttribute("value")
				}) || ce("value", function(e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), H(function(e) {
					return null == e.getAttribute("disabled")
				}) || ce(J, function(e, t, n) {
					if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ?
						n.value : null
				}), j
		}(w),
		Y = (T.find = e, T.expr = e.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = e.uniqueSort,
			T.text = e.getText, T.isXMLDoc = e.isXML, T.contains = e.contains, T.expr.match.needsContext),
		J = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		G = /^.[^:#\[\.,]*$/;

	function K(e, n, r) {
		if (T.isFunction(n)) return T.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		});
		if (n.nodeType) return T.grep(e, function(e) {
			return e === n !== r
		});
		if ("string" == typeof n) {
			if (G.test(n)) return T.filter(n, e, r);
			n = T.filter(n, e)
		}
		return T.grep(e, function(e) {
			return -1 < T.inArray(e, n) !== r
		})
	}
	T.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ?
			[r] : [] : T.find.matches(e, T.grep(t, function(e) {
				return 1 === e.nodeType
			}))
	}, T.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
				for (t = 0; t < i; t++)
					if (T.contains(r[t], this)) return !0
			}));
			for (t = 0; t < i; t++) T.find(e, r[t], n);
			return (n = this.pushStack(1 < i ? T.unique(n) : n)).selector = this.selector ? this
				.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(K(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(K(this, e || [], !0))
		},
		is: function(e) {
			return !!K(this, "string" == typeof e && Y.test(e) ? T(e) : e || [], !1).length
		}
	});
	var Q, Z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ee = ((T.fn.init = function(e, t, n) {
			if (!e) return this;
			if (n = n || Q, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this
				.length = 1, this) : T.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : (
				void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), T
				.makeArray(e, this));
			if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e,
					null
				] : Z.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(
			e);
			if (r[1]) {
				if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t
						.ownerDocument || t : h, !0)), J.test(r[1]) && T.isPlainObject(t))
					for (var r in t) T.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			if ((n = h.getElementById(r[2])) && n.parentNode) {
				if (n.id !== r[2]) return Q.find(e);
				this.length = 1, this[0] = n
			}
			return this.context = h, this.selector = e, this
		}).prototype = T.fn, Q = T(h), /^(?:parents|prev(?:Until|All))/),
		te = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function ne(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	T.fn.extend({
		has: function(e) {
			var t, n = T(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; t < r; t++)
					if (T.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = Y.test(e) || "string" != typeof e ? T(e,
					t || this.context) : 0; r < i; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find
							.matchesSelector(n, e))) {
						o.push(n);
						break
					} return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? T.inArray(this[0], T(e)) : T.inArray(e.jquery ? e[0] : e,
				this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), T.each({
		parent: function(e) {
			e = e.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(e) {
			return r(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return r(e, "parentNode", n)
		},
		next: function(e) {
			return ne(e, "nextSibling")
		},
		prev: function(e) {
			return ne(e, "previousSibling")
		},
		nextAll: function(e) {
			return r(e, "nextSibling")
		},
		prevAll: function(e) {
			return r(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return r(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return r(e, "previousSibling", n)
		},
		siblings: function(e) {
			return V((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return V(e.firstChild)
		},
		contents: function(e) {
			return T.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : T.merge([],
				e.childNodes)
		}
	}, function(r, i) {
		T.fn[r] = function(e, t) {
			var n = T.map(this, i, e);
			return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = T.filter(t,
				n)), 1 < this.length && (te[r] || (n = T.uniqueSort(n)), ee.test(r) && (n = n
				.reverse())), this.pushStack(n)
		}
	});
	var re, ie, C = /\S+/g;

	function oe() {
		h.addEventListener ? (h.removeEventListener("DOMContentLoaded", t), w.removeEventListener("load", t)) : (h
			.detachEvent("onreadystatechange", t), w.detachEvent("onload", t))
	}

	function t() {
		!h.addEventListener && "load" !== w.event.type && "complete" !== h.readyState || (oe(), T.ready())
	}
	for (ie in T.Callbacks = function(r) {
			var e, n;
			r = "string" == typeof r ? (e = r, n = {}, T.each(e.match(C) || [], function(e, t) {
				n[t] = !0
			}), n) : T.extend({}, r);

			function i() {
				for (s = r.once, a = o = !0; u.length; c = -1)
					for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && r.stopOnFalse && (c = l
						.length, t = !1);
				r.memory || (t = !1), o = !1, s && (l = t ? [] : "")
			}
			var o, t, a, s, l = [],
				u = [],
				c = -1,
				f = {
					add: function() {
						return l && (t && !o && (c = l.length - 1, u.push(t)), function n(e) {
							T.each(e, function(e, t) {
								T.isFunction(t) ? r.unique && f.has(t) || l.push(t) : t && t
									.length && "string" !== T.type(t) && n(t)
							})
						}(arguments), t && !o && i()), this
					},
					remove: function() {
						return T.each(arguments, function(e, t) {
							for (var n; - 1 < (n = T.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
						}), this
					},
					has: function(e) {
						return e ? -1 < T.inArray(e, l) : 0 < l.length
					},
					empty: function() {
						return l = l && [], this
					},
					disable: function() {
						return s = u = [], l = t = "", this
					},
					disabled: function() {
						return !l
					},
					lock: function() {
						return s = !0, t || f.disable(), this
					},
					locked: function() {
						return !!s
					},
					fireWith: function(e, t) {
						return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o || i()), this
					},
					fire: function() {
						return f.fireWith(this, arguments), this
					},
					fired: function() {
						return !!a
					}
				};
			return f
		}, T.extend({
			Deferred: function(e) {
				var o = [
						["resolve", "done", T.Callbacks("once memory"), "resolved"],
						["reject", "fail", T.Callbacks("once memory"), "rejected"],
						["notify", "progress", T.Callbacks("memory")]
					],
					i = "pending",
					a = {
						state: function() {
							return i
						},
						always: function() {
							return s.done(arguments).fail(arguments), this
						},
						then: function() {
							var i = arguments;
							return T.Deferred(function(r) {
								T.each(o, function(e, t) {
									var n = T.isFunction(i[e]) && i[e];
									s[t[1]](function() {
										var e = n && n.apply(this, arguments);
										e && T.isFunction(e.promise) ? e
											.promise().progress(r.notify).done(r
												.resolve).fail(r.reject) : r[t[
												0] + "With"](this === a ? r
												.promise() : this, n ? [e] :
												arguments)
									})
								}), i = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? T.extend(e, a) : a
						}
					},
					s = {};
				return a.pipe = a.then, T.each(o, function(e, t) {
					var n = t[2],
						r = t[3];
					a[t[1]] = n.add, r && n.add(function() {
						i = r
					}, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function() {
						return s[t[0] + "With"](this === s ? a : this, arguments), this
					}, s[t[0] + "With"] = n.fireWith
				}), a.promise(s), e && e.call(s, s), s
			},
			when: function(e) {
				function t(t, n, r) {
					return function(e) {
						n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u
							.notifyWith(n, r) : --l || u.resolveWith(n, r)
					}
				}
				var i, n, r, o = 0,
					a = c.call(arguments),
					s = a.length,
					l = 1 !== s || e && T.isFunction(e.promise) ? s : 0,
					u = 1 === l ? e : T.Deferred();
				if (1 < s)
					for (i = new Array(s), n = new Array(s), r = new Array(s); o < s; o++) a[o] && T
						.isFunction(a[o].promise) ? a[o].promise().progress(t(o, n, i)).done(t(o, r, a))
						.fail(u.reject) : --l;
				return l || u.resolveWith(r, a), u.promise()
			}
		}), T.fn.ready = function(e) {
			return T.ready.promise().done(e), this
		}, T.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? T.readyWait++ : T.ready(!0)
			},
			ready: function(e) {
				(!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || (re
					.resolveWith(h, [T]), T.fn.triggerHandler && (T(h).triggerHandler("ready"), T(h)
						.off("ready")))
			}
		}), T.ready.promise = function(e) {
			if (!re)
				if (re = T.Deferred(), "complete" === h.readyState || "loading" !== h.readyState && !h
					.documentElement.doScroll) w.setTimeout(T.ready);
				else if (h.addEventListener) h.addEventListener("DOMContentLoaded", t), w.addEventListener("load",
				t);
			else {
				h.attachEvent("onreadystatechange", t), w.attachEvent("onload", t);
				var n = !1;
				try {
					n = null == w.frameElement && h.documentElement
				} catch (e) {}
				n && n.doScroll && ! function t() {
					if (!T.isReady) {
						try {
							n.doScroll("left")
						} catch (e) {
							return w.setTimeout(t, 50)
						}
						oe(), T.ready()
					}
				}()
			}
			return re.promise(e)
		}, T.ready.promise(), T(m)) break;
	m.ownFirst = "0" === ie, m.inlineBlockNeedsLayout = !1, T(function() {
		var e, t, n = h.getElementsByTagName("body")[0];
		n && n.style && (e = h.createElement("div"), (t = h.createElement("div")).style.cssText =
			"position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(t)
			.appendChild(e), void 0 !== e.style.zoom && (e.style.cssText =
				"display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", m
				.inlineBlockNeedsLayout = e = 3 === e.offsetWidth, e && (n.style.zoom = 1)), n
			.removeChild(t))
	});
	e = h.createElement("div");
	m.deleteExpando = !0;
	try {
		delete e.test
	} catch (e) {
		m.deleteExpando = !1
	}

	function y(e) {
		var t = T.noData[(e.nodeName + " ").toLowerCase()],
			n = +e.nodeType || 1;
		return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
	}
	var i, ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		se = /([A-Z])/g;

	function le(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var r = "data-" + t.replace(se, "-$1").toLowerCase();
			if ("string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ae.test(n) ? T
						.parseJSON(n) : n)
				} catch (e) {}
				T.data(e, t, n)
			} else n = void 0
		}
		return n
	}

	function ue(e) {
		for (var t in e)
			if (("data" !== t || !T.isEmptyObject(e[t])) && "toJSON" !== t) return;
		return 1
	}

	function ce(e, t, n, r) {
		if (y(e)) {
			var i, o = T.expando,
				a = e.nodeType,
				s = a ? T.cache : e,
				l = a ? e[o] : e[o] && o;
			if (l && s[l] && (r || s[l].data) || void 0 !== n || "string" != typeof t) return s[l = l || (a ? e[o] =
					f.pop() || T.guid++ : o)] || (s[l] = a ? {} : {
					toJSON: T.noop
				}), "object" != typeof t && "function" != typeof t || (r ? s[l] = T.extend(s[l], t) : s[l]
					.data = T.extend(s[l].data, t)), e = s[l], r || (e.data || (e.data = {}), e = e.data),
				void 0 !== n && (e[T.camelCase(t)] = n), "string" == typeof t ? null == (i = e[t]) && (i = e[T
					.camelCase(t)]) : i = e, i
		}
	}

	function fe(e, t, n) {
		if (y(e)) {
			var r, i, o = e.nodeType,
				a = o ? T.cache : e,
				s = o ? e[T.expando] : T.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					i = (t = T.isArray(t) ? t.concat(T.map(t, T.camelCase)) : t in r || (t = T.camelCase(t)) in r ?
						[t] : t.split(" ")).length;
					for (; i--;) delete r[t[i]];
					if (n ? !ue(r) : !T.isEmptyObject(r)) return
				}(n || (delete a[s].data, ue(a[s]))) && (o ? T.cleanData([e], !0) : m.deleteExpando || a != a
					.window ? delete a[s] : a[s] = void 0)
			}
		}
	}
	T.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return !!(e = e.nodeType ? T.cache[e[T.expando]] : e[T.expando]) && !ue(e)
		},
		data: function(e, t, n) {
			return ce(e, t, n)
		},
		removeData: function(e, t) {
			return fe(e, t)
		},
		_data: function(e, t, n) {
			return ce(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return fe(e, t, !0)
		}
	}), T.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 !== e) return "object" == typeof e ? this.each(function() {
				T.data(this, e)
			}) : 1 < arguments.length ? this.each(function() {
				T.data(this, e, t)
			}) : o ? le(o, e, T.data(o, e)) : void 0;
			if (this.length && (i = T.data(o), 1 === o.nodeType && !T._data(o, "parsedAttrs"))) {
				for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && le(o, r = T
					.camelCase(r.slice(5)), i[r]);
				T._data(o, "parsedAttrs", !0)
			}
			return i
		},
		removeData: function(e) {
			return this.each(function() {
				T.removeData(this, e)
			})
		}
	}), T.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return r = T._data(e, t = (t || "fx") + "queue"), n && (!r || T.isArray(n) ? r = T
				._data(e, t, T.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = T.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = T._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"),
				delete o.stop, i.call(e, function() {
					T.dequeue(e, t)
				}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return T._data(e, n) || T._data(e, n, {
				empty: T.Callbacks("once memory").add(function() {
					T._removeData(e, t + "queue"), T._removeData(e, n)
				})
			})
		}
	}), T.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[
				0], t) : void 0 === n ? this : this.each(function() {
				var e = T.queue(this, t, n);
				T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this,
					t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				T.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			function n() {
				--i || o.resolveWith(a, [a])
			}
			var r, i = 1,
				o = T.Deferred(),
				a = this,
				s = this.length;
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = T._data(a[s], e +
				"queueHooks")) && r.empty && (i++, r.empty.add(n));
			return n(), o.promise(t)
		}
	}), m.shrinkWrapBlocks = function() {
		return null != i ? i : (i = !1, (t = h.getElementsByTagName("body")[0]) && t.style ? (e = h
			.createElement("div"), (n = h.createElement("div")).style.cssText =
			"position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n)
			.appendChild(e), void 0 !== e.style.zoom && (e.style.cssText =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
				e.appendChild(h.createElement("div")).style.width = "5px", i = 3 !== e.offsetWidth), t
			.removeChild(n), i) : void 0);
		var e, t, n
	};

	function de(e, t) {
		return "none" === T.css(e = t || e, "display") || !T.contains(e.ownerDocument, e)
	}
	var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		pe = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
		s = ["Top", "Right", "Bottom", "Left"];

	function he(e, t, n, r) {
		var i, o = 1,
			a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return T.css(e, t, "")
			},
			l = s(),
			u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
			c = (T.cssNumber[t] || "px" !== u && +l) && pe.exec(T.css(e, t));
		if (c && c[3] !== u)
			for (u = u || c[3], n = n || [], c = +l || 1; c /= o = o || ".5", T.style(e, t, c + u), o !== (o = s() /
					l) && 1 !== o && --a;);
		return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r
			.end = i)), i
	}

	function d(e, t, n, r, i, o, a) {
		var s = 0,
			l = e.length,
			u = null == n;
		if ("object" === T.type(n))
			for (s in i = !0, n) d(e, t, s, n[s], !0, o, a);
		else if (void 0 !== r && (i = !0, T.isFunction(r) || (a = !0), t = u ? a ? (t.call(e, r), null) : (u = t,
				function(e, t, n) {
					return u.call(T(e), n)
				}) : t))
			for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
		return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
	}
	var ge = /^(?:checkbox|radio)$/i,
		me = /<([\w:-]+)/,
		ye = /^$|\/(?:java|ecma)script/i,
		ve = /^\s+/,
		xe =
		"abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function be(e) {
		var t = xe.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}
	S = h.createElement("div"), k = h.createDocumentFragment(), q = h.createElement("input"), S.innerHTML =
		"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", m.leadingWhitespace = 3 === S
		.firstChild.nodeType, m.tbody = !S.getElementsByTagName("tbody").length, m.htmlSerialize = !!S
		.getElementsByTagName("link").length, m.html5Clone = "<:nav></:nav>" !== h.createElement("nav").cloneNode(!
			0).outerHTML, q.type = "checkbox", q.checked = !0, k.appendChild(q), m.appendChecked = q.checked, S
		.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!S.cloneNode(!0).lastChild.defaultValue, k
		.appendChild(S), (q = h.createElement("input")).setAttribute("type", "radio"), q.setAttribute("checked",
			"checked"), q.setAttribute("name", "t"), S.appendChild(q), m.checkClone = S.cloneNode(!0).cloneNode(!0)
		.lastChild.checked, m.noCloneEvent = !!S.addEventListener, S[T.expando] = 1, m.attributes = !S.getAttribute(
			T.expando);
	var v = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: m.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};

	function x(e, t) {
		var n, r, i = 0,
			o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e
			.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
		if (!o)
			for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || T.nodeName(r, t) ? o.push(r) : T
				.merge(o, x(r, t));
		return void 0 === t || t && T.nodeName(e, t) ? T.merge([e], o) : o
	}

	function we(e, t) {
		for (var n, r = 0; null != (n = e[r]); r++) T._data(n, "globalEval", !t || T._data(t[r], "globalEval"))
	}
	v.optgroup = v.option, v.tbody = v.tfoot = v.colgroup = v.caption = v.thead, v.th = v.td;
	var Te = /<|&#?\w+;/,
		Ce = /<tbody/i;

	function Ee(e) {
		ge.test(e.type) && (e.defaultChecked = e.checked)
	}

	function Ne(e, t, n, r, i) {
		for (var o, a, s, l, u, c, f, d = e.length, p = be(t), h = [], g = 0; g < d; g++)
			if ((a = e[g]) || 0 === a)
				if ("object" === T.type(a)) T.merge(h, a.nodeType ? [a] : a);
				else if (Te.test(a)) {
			for (l = l || p.appendChild(t.createElement("div")), u = (me.exec(a) || ["", ""])[1].toLowerCase(), f =
				v[u] || v._default, l.innerHTML = f[1] + T.htmlPrefilter(a) + f[2], o = f[0]; o--;) l = l.lastChild;
			if (!m.leadingWhitespace && ve.test(a) && h.push(t.createTextNode(ve.exec(a)[0])), !m.tbody)
				for (o = (a = "table" !== u || Ce.test(a) ? "<table>" !== f[1] || Ce.test(a) ? 0 : l : l
					.firstChild) && a.childNodes.length; o--;) T.nodeName(c = a.childNodes[o], "tbody") && !c
					.childNodes.length && a.removeChild(c);
			for (T.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
			l = p.lastChild
		} else h.push(t.createTextNode(a));
		for (l && p.removeChild(l), m.appendChecked || T.grep(x(h, "input"), Ee), g = 0; a = h[g++];)
			if (r && -1 < T.inArray(a, r)) i && i.push(a);
			else if (s = T.contains(a.ownerDocument, a), l = x(p.appendChild(a), "script"), s && we(l), n)
			for (o = 0; a = l[o++];) ye.test(a.type || "") && n.push(a);
		return l = null, p
	}
	var ke, Se, Ae = h.createElement("div");
	for (ke in {
			submit: !0,
			change: !0,
			focusin: !0
		})(m[ke] = (Se = "on" + ke) in w) || (Ae.setAttribute(Se, "t"), m[ke] = !1 === Ae.attributes[Se].expando);
	var De = /^(?:input|select|textarea)$/i,
		je = /^key/,
		Le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		He = /^(?:focusinfocus|focusoutblur)$/,
		qe = /^([^.]*)(?:\.(.+)|)/;

	function _e() {
		return !0
	}

	function l() {
		return !1
	}

	function Fe() {
		try {
			return h.activeElement
		} catch (e) {}
	}

	function Me(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) Me(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r =
				void 0) : (i = r, r = n, n = void 0)), !1 === i) i = l;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function(e) {
			return T().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = T.guid++)), e.each(function() {
			T.event.add(this, t, i, r, n)
		})
	}
	T.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, l, u, c, f, d, p, h = T._data(e);
			if (h)
				for (n.handler && (n = (s = n).handler, i = s.selector), n.guid || (n.guid = T.guid++), (o =
						h.events) || (o = h.events = {}), (u = h.handle) || ((u = h.handle = function(e) {
						return void 0 === T || e && T.event.triggered === e.type ? void 0 : T.event
							.dispatch.apply(u.elem, arguments)
					}).elem = e), a = (t = (t || "").match(C) || [""]).length; a--;) f = p = (d = qe.exec(t[
					a]) || [])[1], d = (d[2] || "").split(".").sort(), f && (l = T.event.special[f] ||
					{}, f = (i ? l.delegateType : l.bindType) || f, l = T.event.special[f] || {}, p = T
					.extend({
						type: f,
						origType: p,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && T.expr.match.needsContext.test(i),
						namespace: d.join(".")
					}, s), (c = o[f]) || ((c = o[f] = []).delegateCount = 0, l.setup && !1 !== l.setup
						.call(e, r, d, u) || (e.addEventListener ? e.addEventListener(f, u, !1) : e
							.attachEvent && e.attachEvent("on" + f, u))), l.add && (l.add.call(e, p), p
						.handler.guid || (p.handler.guid = n.guid)), i ? c.splice(c.delegateCount++, 0,
						p) : c.push(p), T.event.global[f] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, l, u, c, f, d, p, h, g, m = T.hasData(e) && T._data(e);
			if (m && (c = m.events)) {
				for (u = (t = (t || "").match(C) || [""]).length; u--;)
					if (p = g = (s = qe.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
						for (f = T.event.special[p] || {}, d = c[p = (r ? f.delegateType : f.bindType) ||
							p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") +
								"(\\.|$)"), l = o = d.length; o--;) a = d[o], !i && g !== a.origType || n &&
							n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && (
								"**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d
								.delegateCount--, f.remove && f.remove.call(e, a));
						l && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || T
							.removeEvent(e, p, m.handle), delete c[p])
					} else
						for (p in c) T.event.remove(e, p + t[u], n, r, !0);
				T.isEmptyObject(c) && (delete m.handle, T._removeData(e, "events"))
			}
		},
		trigger: function(e, t, n, r) {
			var i, o, a, s, l, u, c = [n || h],
				f = g.call(e, "type") ? e.type : e,
				d = g.call(e, "namespace") ? e.namespace.split(".") : [],
				p = l = n = n || h;
			if (3 !== n.nodeType && 8 !== n.nodeType && !He.test(f + T.event.triggered) && (-1 < f.indexOf(
						".") && (f = (d = f.split(".")).shift(), d.sort()), o = f.indexOf(":") < 0 && "on" +
					f, (e = e[T.expando] ? e : new T.Event(f, "object" == typeof e && e)).isTrigger = r ?
					2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d
						.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e
						.target = n), t = null == t ? [e] : T.makeArray(t, [e]), s = T.event.special[f] ||
					{}, r || !s.trigger || !1 !== s.trigger.apply(n, t))) {
				if (!r && !s.noBubble && !T.isWindow(n)) {
					for (a = s.delegateType || f, He.test(a + f) || (p = p.parentNode); p; p = p.parentNode)
						c.push(p), l = p;
					l === (n.ownerDocument || h) && c.push(l.defaultView || l.parentWindow || w)
				}
				for (u = 0;
					(p = c[u++]) && !e.isPropagationStopped();) e.type = 1 < u ? a : s.bindType || f, (i = (
					T._data(p, "events") || {})[e.type] && T._data(p, "handle")) && i.apply(p, t), (i =
					o && p[o]) && i.apply && y(p) && (e.result = i.apply(p, t), !1 === e.result && e
					.preventDefault());
				if (e.type = f, !r && !e.isDefaultPrevented() && (!s._default || !1 === s._default.apply(c
						.pop(), t)) && y(n) && o && n[f] && !T.isWindow(n)) {
					(l = n[o]) && (n[o] = null), T.event.triggered = f;
					try {
						n[f]()
					} catch (e) {}
					T.event.triggered = void 0, l && (n[o] = l)
				}
				return e.result
			}
		},
		dispatch: function(e) {
			e = T.event.fix(e);
			var t, n, r, i, o, a = c.call(arguments),
				s = (T._data(this, "events") || {})[e.type] || [],
				l = T.event.special[e.type] || {};
			if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
				for (o = T.event.handlers.call(this, e, s), t = 0;
					(r = o[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = r.elem, n = 0;
						(i = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e
						.rnamespace.test(i.namespace) || (e.handleObj = i, e.data = i.data, void 0 !== (i =
								((T.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)
								) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a = [],
				s = t.delegateCount,
				l = e.target;
			if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
						for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[
							i] = o.needsContext ? -1 < T(i, this).index(l) : T.find(i, this, null, [l])
							.length), r[i] && r.push(o);
						r.length && a.push({
							elem: l,
							handlers: r
						})
					} return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		fix: function(e) {
			if (e[T.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = Le.test(i) ? this.mouseHooks : je.test(i) ? this.keyHooks :
					{}), r = a.props ? this.props.concat(a.props) : this.props, e = new T.Event(o), t = r
				.length; t--;) e[n = r[t]] = o[n];
			return e.target || (e.target = o.srcElement || h), 3 === e.target.nodeType && (e.target = e
				.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
			.split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
				.split(" "),
			filter: function(e, t) {
				var n, r, i = t.button,
					o = t.fromElement;
				return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || h)
					.documentElement, n = n.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n
						.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t
					.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n
						.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ?
					t.toElement : o), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 &
					i ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== Fe() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === Fe() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if (T.nodeName(this, "input") && "checkbox" === this.type && this.click) return this
						.click(), !1
				},
				_default: function(e) {
					return T.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n) {
			e = T.extend(new T.Event, n, {
				type: e,
				isSimulated: !0
			});
			T.event.trigger(e, null, t), e.isDefaultPrevented() && n.preventDefault()
		}
	}, T.removeEvent = h.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	} : function(e, t, n) {
		t = "on" + t;
		e.detachEvent && (void 0 === e[t] && (e[t] = null), e.detachEvent(t, n))
	}, T.Event = function(e, t) {
		if (!(this instanceof T.Event)) return new T.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e
				.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : l) : this
			.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || T.now(), this[T.expando] = !
			0
	}, T.Event.prototype = {
		constructor: T.Event,
		isDefaultPrevented: l,
		isPropagationStopped: l,
		isImmediatePropagationStopped: l,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = _e, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = _e, e && !this.isSimulated && (e.stopPropagation && e
				.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = _e, e && e.stopImmediatePropagation && e
				.stopImmediatePropagation(), this.stopPropagation()
		}
	}, T.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		T.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || T.contains(this, n)) || (e.type = r.origType, t = r
					.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), m.submit || (T.event.special.submit = {
		setup: function() {
			if (T.nodeName(this, "form")) return !1;
			T.event.add(this, "click._submit keypress._submit", function(e) {
				e = e.target, e = T.nodeName(e, "input") || T.nodeName(e, "button") ? T.prop(e,
					"form") : void 0;
				e && !T._data(e, "submit") && (T.event.add(e, "submit._submit", function(e) {
					e._submitBubble = !0
				}), T._data(e, "submit", !0))
			})
		},
		postDispatch: function(e) {
			e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && T.event
				.simulate("submit", this.parentNode, e))
		},
		teardown: function() {
			if (T.nodeName(this, "form")) return !1;
			T.event.remove(this, "._submit")
		}
	}), m.change || (T.event.special.change = {
		setup: function() {
			if (De.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (T
				.event.add(this, "propertychange._change", function(e) {
					"checked" === e.originalEvent.propertyName && (this._justChanged = !0)
				}), T.event.add(this, "click._change", function(e) {
					this._justChanged && !e.isTrigger && (this._justChanged = !1), T.event
						.simulate("change", this, e)
				})), !1;
			T.event.add(this, "beforeactivate._change", function(e) {
				e = e.target;
				De.test(e.nodeName) && !T._data(e, "change") && (T.event.add(e,
					"change._change",
					function(e) {
						!this.parentNode || e.isSimulated || e.isTrigger || T.event
							.simulate("change", this.parentNode, e)
					}), T._data(e, "change", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t
				.type) return e.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return T.event.remove(this, "._change"), !De.test(this.nodeName)
		}
	}), m.focusin || T.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		function i(e) {
			T.event.simulate(r, e.target, T.event.fix(e))
		}
		T.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this,
					t = T._data(e, r);
				t || e.addEventListener(n, i, !0), T._data(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this,
					t = T._data(e, r) - 1;
				t ? T._data(e, r, t) : (e.removeEventListener(n, i, !0), T._removeData(e, r))
			}
		}
	}), T.fn.extend({
		on: function(e, t, n, r) {
			return Me(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Me(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r
					.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler
					), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0),
				!1 === n && (n = l), this.each(function() {
					T.event.remove(this, e, n, t)
				});
			for (i in e) this.off(i, t, e[i]);
			return this
		},
		trigger: function(e, t) {
			return this.each(function() {
				T.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return T.event.trigger(e, t, n, !0)
		}
	});
	var Oe = / jQuery\d+="(?:null|\d+)"/g,
		Re = new RegExp("<(?:" + xe + ")[\\s/>]", "i"),
		Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		Be = /<script|<style|<link/i,
		We = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ie = /^true\/(.*)/,
		$e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ze = be(h).appendChild(h.createElement("div"));

	function Xe(e, t) {
		return T.nodeName(e, "table") && T.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e
			.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Ue(e) {
		return e.type = (null !== T.find.attr(e, "type")) + "/" + e.type, e
	}

	function Ve(e) {
		var t = Ie.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function Ye(e, t) {
		if (1 === t.nodeType && T.hasData(e)) {
			var n, r, i, e = T._data(e),
				o = T._data(t, e),
				a = e.events;
			if (a)
				for (n in delete o.handle, o.events = {}, a)
					for (r = 0, i = a[n].length; r < i; r++) T.event.add(t, n, a[n][r]);
			o.data && (o.data = T.extend({}, o.data))
		}
	}

	function b(n, r, i, o) {
		r = R.apply([], r);
		var e, t, a, s, l, u, c = 0,
			f = n.length,
			d = f - 1,
			p = r[0],
			h = T.isFunction(p);
		if (h || 1 < f && "string" == typeof p && !m.checkClone && We.test(p)) return n.each(function(e) {
			var t = n.eq(e);
			h && (r[0] = p.call(this, e, t.html())), b(t, r, i, o)
		});
		if (f && (e = (u = Ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === u.childNodes.length && (u = e),
				e || o)) {
			for (a = (s = T.map(x(u, "script"), Ue)).length; c < f; c++) t = u, c !== d && (t = T.clone(t, !0, !0),
				a && T.merge(s, x(t, "script"))), i.call(n[c], t, c);
			if (a)
				for (l = s[s.length - 1].ownerDocument, T.map(s, Ve), c = 0; c < a; c++) t = s[c], ye.test(t.type ||
					"") && !T._data(t, "globalEval") && T.contains(l, t) && (t.src ? T._evalUrl && T._evalUrl(t
					.src) : T.globalEval((t.text || t.textContent || t.innerHTML || "").replace($e, "")));
			u = e = null
		}
		return n
	}

	function Je(e, t, n) {
		for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T
			.cleanData(x(r)), r.parentNode && (n && T.contains(r.ownerDocument, r) && we(x(r, "script")), r
				.parentNode.removeChild(r));
		return e
	}
	T.extend({
		htmlPrefilter: function(e) {
			return e.replace(Pe, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, l = T.contains(e.ownerDocument, e);
			if (m.html5Clone || T.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? o = e.cloneNode(!
				0) : (ze.innerHTML = e.outerHTML, ze.removeChild(o = ze.firstChild)), !(m
					.noCloneEvent && m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T
					.isXMLDoc(e)))
				for (r = x(o), s = x(e), a = 0; null != (i = s[a]); ++a)
					if (r[a]) {
						f = c = u = p = d = void 0;
						var u, c, f, d = i,
							p = r[a];
						if (1 === p.nodeType) {
							if (u = p.nodeName.toLowerCase(), !m.noCloneEvent && p[T.expando]) {
								for (c in (f = T._data(p)).events) T.removeEvent(p, c, f.handle);
								p.removeAttribute(T.expando)
							}
							"script" === u && p.text !== d.text ? (Ue(p).text = d.text, Ve(p)) :
								"object" === u ? (p.parentNode && (p.outerHTML = d.outerHTML), m
									.html5Clone && d.innerHTML && !T.trim(p.innerHTML) && (p.innerHTML =
										d.innerHTML)) : "input" === u && ge.test(d.type) ? (p
									.defaultChecked = p.checked = d.checked, p.value !== d.value && (p
										.value = d.value)) : "option" === u ? p.defaultSelected = p
								.selected = d.defaultSelected : "input" !== u && "textarea" !== u || (p
									.defaultValue = d.defaultValue)
						}
					} if (t)
				if (n)
					for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) Ye(i, r[a]);
				else Ye(e, o);
			return 0 < (r = x(o, "script")).length && we(r, !l && x(e, "script")), r = s = i = null, o
		},
		cleanData: function(e, t) {
			for (var n, r, i, o, a = 0, s = T.expando, l = T.cache, u = m.attributes, c = T.event
					.special; null != (n = e[a]); a++)
				if ((t || y(n)) && (o = (i = n[s]) && l[i])) {
					if (o.events)
						for (r in o.events) c[r] ? T.event.remove(n, r) : T.removeEvent(n, r, o.handle);
					l[i] && (delete l[i], u || void 0 === n.removeAttribute ? n[s] = void 0 : n
						.removeAttribute(s), f.push(i))
				}
		}
	}), T.fn.extend({
		domManip: b,
		detach: function(e) {
			return Je(this, e, !0)
		},
		remove: function(e) {
			return Je(this, e)
		},
		text: function(e) {
			return d(this, function(e) {
				return void 0 === e ? T.text(this) : this.empty().append((this[0] && this[0]
					.ownerDocument || h).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return b(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Xe(this,
					e).appendChild(e)
			})
		},
		prepend: function() {
			return b(this, arguments, function(e) {
				var t;
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Xe(
					this, e)).insertBefore(e, t.firstChild)
			})
		},
		before: function() {
			return b(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return b(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && T.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e
					.firstChild);
				e.options && T.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return T.clone(this, e, t)
			})
		},
		html: function(e) {
			return d(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") :
				void 0;
				if ("string" == typeof e && !Be.test(e) && (m.htmlSerialize || !Re.test(e)) && (
						m.leadingWhitespace || !ve.test(e)) && !v[(me.exec(e) || ["", ""])[1]
						.toLowerCase()]) {
					e = T.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(x(
							t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return b(this, arguments, function(e) {
				var t = this.parentNode;
				T.inArray(this, n) < 0 && (T.cleanData(x(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), T.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		T.fn[e] = function(e) {
			for (var t, n = 0, r = [], i = T(e), o = i.length - 1; n <= o; n++) t = n === o ? this :
				this.clone(!0), T(i[n])[a](t), P.apply(r, t.get());
			return this.pushStack(r)
		}
	});
	var Ge, Ke = {
		HTML: "block",
		BODY: "block"
	};

	function Qe(e, t) {
		e = T(t.createElement(e)).appendTo(t.body), t = T.css(e[0], "display");
		return e.detach(), t
	}

	function Ze(e) {
		var t = h,
			n = Ke[e];
		return n || ("none" !== (n = Qe(e, t)) && n || ((t = ((Ge = (Ge || T(
					"<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0]
				.contentWindow || Ge[0].contentDocument).document).write(), t.close(), n = Qe(e, t), Ge
			.detach()), Ke[e] = n), n
	}

	function et(e, t, n, r) {
		var i, o = {};
		for (i in t) o[i] = e.style[i], e.style[i] = t[i];
		for (i in n = n.apply(e, r || []), t) e.style[i] = o[i];
		return n
	}
	var n, tt, nt, rt, it, ot, at, o, st = /^margin/,
		lt = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
		ut = h.documentElement;

	function a() {
		var e, t = h.documentElement;
		t.appendChild(at), o.style.cssText =
			"-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
			n = nt = ot = !1, tt = it = !0, w.getComputedStyle && (e = w.getComputedStyle(o), n = "1%" !== (e || {})
				.top, ot = "2px" === (e || {}).marginLeft, nt = "4px" === (e || {
					width: "4px"
				}).width, o.style.marginRight = "50%", tt = "4px" === (e || {
					marginRight: "4px"
				}).marginRight, (e = o.appendChild(h.createElement("div"))).style.cssText = o.style.cssText =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
				e.style.marginRight = e.style.width = "0", o.style.width = "1px", it = !parseFloat((w
					.getComputedStyle(e) || {}).marginRight), o.removeChild(e)), o.style.display = "none", (rt =
				0 === o.getClientRects().length) && (o.style.display = "", o.innerHTML =
				"<table><tr><td></td><td>t</td></tr></table>", o.childNodes[0].style.borderCollapse = "separate", (
					e = o.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
				(rt = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", rt = 0 ===
					e[0].offsetHeight)), t.removeChild(at)
	}
	at = h.createElement("div"), (o = h.createElement("div")).style && (o.style.cssText = "float:left;opacity:.5", m
		.opacity = "0.5" === o.style.opacity, m.cssFloat = !!o.style.cssFloat, o.style.backgroundClip =
		"content-box", o.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === o.style
		.backgroundClip, (at = h.createElement("div")).style.cssText =
		"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o
		.innerHTML = "", at.appendChild(o), m.boxSizing = "" === o.style.boxSizing || "" === o.style
		.MozBoxSizing || "" === o.style.WebkitBoxSizing, T.extend(m, {
			reliableHiddenOffsets: function() {
				return null == n && a(), rt
			},
			boxSizingReliable: function() {
				return null == n && a(), nt
			},
			pixelMarginRight: function() {
				return null == n && a(), tt
			},
			pixelPosition: function() {
				return null == n && a(), n
			},
			reliableMarginRight: function() {
				return null == n && a(), it
			},
			reliableMarginLeft: function() {
				return null == n && a(), ot
			}
		}));
	var u, p, ct = /^(top|right|bottom|left)$/;

	function ft(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}
	w.getComputedStyle ? (u = function(e) {
		var t = e.ownerDocument.defaultView;
		return (t = t && t.opener ? t : w).getComputedStyle(e)
	}, p = function(e, t, n) {
		var r, i, o = e.style;
		return "" !== (i = (n = n || u(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== i || T
			.contains(e.ownerDocument, e) || (i = T.style(e, t)), n && !m.pixelMarginRight() && lt.test(
			i) && st.test(t) && (e = o.width, t = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o
				.width = i, i = n.width, o.width = e, o.minWidth = t, o.maxWidth = r), void 0 === i ? i :
			i + ""
	}) : ut.currentStyle && (u = function(e) {
		return e.currentStyle
	}, p = function(e, t, n) {
		var r, i, o, a = e.style;
		return null == (n = (n = n || u(e)) ? n[t] : void 0) && a && a[t] && (n = a[t]), lt.test(n) && !ct
			.test(t) && (r = a.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left),
				a.left = "fontSize" === t ? "1em" : n, n = a.pixelLeft + "px", a.left = r, o && (i.left = o)
				), void 0 === n ? n : n + "" || "auto"
	});
	var dt = /alpha\([^)]*\)/i,
		pt = /opacity\s*=\s*([^)]*)/i,
		ht = /^(none|table(?!-c[ea]).+)/,
		gt = new RegExp("^(" + e + ")(.*)$", "i"),
		mt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		yt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		vt = ["Webkit", "O", "Moz", "ms"],
		xt = h.createElement("div").style;

	function bt(e) {
		if (e in xt) return e;
		for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = vt.length; n--;)
			if ((e = vt[n] + t) in xt) return e
	}

	function wt(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = T._data(r,
			"olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" ===
			r.style.display && de(r) && (o[a] = T._data(r, "olddisplay", Ze(r.nodeName)))) : (i = de(r), (
			n && "none" !== n || !i) && T._data(r, "olddisplay", i ? n : T.css(r, "display"))));
		for (a = 0; a < s; a++) !(r = e[a]).style || t && "none" !== r.style.display && "" !== r.style.display || (r
			.style.display = t ? o[a] || "" : "none");
		return e
	}

	function Tt(e, t, n) {
		var r = gt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function Ct(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
			"margin" === n && (a += T.css(e, n + s[o], !0, i)), r ? ("content" === n && (a -= T.css(e, "padding" +
				s[o], !0, i)), "margin" !== n && (a -= T.css(e, "border" + s[o] + "Width", !0, i))) : (a += T.css(e,
				"padding" + s[o], !0, i), "padding" !== n && (a += T.css(e, "border" + s[o] + "Width", !0, i)));
		return a
	}

	function Et(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = u(e),
			a = m.boxSizing && "border-box" === T.css(e, "boxSizing", !1, o);
		if (i <= 0 || null == i) {
			if (((i = p(e, t, o)) < 0 || null == i) && (i = e.style[t]), lt.test(i)) return i;
			r = a && (m.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + Ct(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function E(e, t, n, r, i) {
		return new E.prototype.init(e, t, n, r, i)
	}
	T.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) return "" === (t = p(e, "opacity")) ? "1" : t
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
			float: m.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = T.camelCase(t),
					l = e.style;
				if (t = T.cssProps[s] || (T.cssProps[s] = bt(s) || s), a = T.cssHooks[t] || T.cssHooks[
						s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ?
					i : l[t];
				if ("string" === (o = typeof n) && (i = pe.exec(n)) && i[1] && (n = he(e, t, i), o =
						"number"), null != n && n == n && ("number" === o && (n += i && i[3] || (T
							.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t
						.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (
							n = a.set(e, n, r))))) try {
					l[t] = n
				} catch (e) {}
			}
		},
		css: function(e, t, n, r) {
			var i, o = T.camelCase(t);
			return t = T.cssProps[o] || (T.cssProps[o] = bt(o) || o), "normal" === (i = void 0 === (i =
				(o = T.cssHooks[t] || T.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? p(e,
				t, r) : i) && t in yt && (i = yt[t]), "" === n || n ? (o = parseFloat(i), !0 ===
				n || isFinite(o) ? o || 0 : i) : i
		}
	}), T.each(["height", "width"], function(e, i) {
		T.cssHooks[i] = {
			get: function(e, t, n) {
				if (t) return ht.test(T.css(e, "display")) && 0 === e.offsetWidth ? et(e, mt,
					function() {
						return Et(e, i, n)
					}) : Et(e, i, n)
			},
			set: function(e, t, n) {
				var r = n && u(e);
				return Tt(0, t, n ? Ct(e, i, n, m.boxSizing && "border-box" === T.css(e,
					"boxSizing", !1, r), r) : 0)
			}
		}
	}), m.opacity || (T.cssHooks.opacity = {
		get: function(e, t) {
			return pt.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 *
				parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				e = e.currentStyle,
				r = T.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				i = e && e.filter || n.filter || "";
			((n.zoom = 1) <= t || "" === t) && "" === T.trim(i.replace(dt, "")) && n.removeAttribute &&
				(n.removeAttribute("filter"), "" === t || e && !e.filter) || (n.filter = dt.test(i) ? i
					.replace(dt, r) : i + " " + r)
		}
	}), T.cssHooks.marginRight = ft(m.reliableMarginRight, function(e, t) {
		if (t) return et(e, {
			display: "inline-block"
		}, p, [e, "marginRight"])
	}), T.cssHooks.marginLeft = ft(m.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(p(e, "marginLeft")) || (T.contains(e.ownerDocument, e) ? e
			.getBoundingClientRect().left - et(e, {
				marginLeft: 0
			}, function() {
				return e.getBoundingClientRect().left
			}) : 0)) + "px"
	}), T.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		T.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
					n[i + s[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, st.test(i) || (T.cssHooks[i + o].set = Tt)
	}), T.fn.extend({
		css: function(e, t) {
			return d(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (T.isArray(t)) {
					for (r = u(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
			}, e, t, 1 < arguments.length)
		},
		show: function() {
			return wt(this, !0)
		},
		hide: function() {
			return wt(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				de(this) ? T(this).show() : T(this).hide()
			})
		}
	}), ((T.Tween = E).prototype = {
		constructor: E,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this
				.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" :
					"px")
		},
		cur: function() {
			var e = E.propHooks[this.prop];
			return (e && e.get ? e : E.propHooks._default).get(this)
		},
		run: function(e) {
			var t, n = E.propHooks[this.prop];
			return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options
				.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this
				.end - this.start) * t + this.start, this.options.step && this.options.step.call(
				this.elem, this.now, this), (n && n.set ? n : E.propHooks._default).set(this), this
		}
	}).init.prototype = E.prototype, (E.propHooks = {
		_default: {
			get: function(e) {
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ?
					e.elem[e.prop] : (e = T.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
			},
			set: function(e) {
				T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem
					.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T
					.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = E.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, T.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, T.fx = E.prototype.init, T.fx.step = {};
	var N, Nt, k, S, kt = /^(?:toggle|show|hide)$/,
		St = /queueHooks$/;

	function At() {
		return w.setTimeout(function() {
			N = void 0
		}), N = T.now()
	}

	function Dt(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = s[i])] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function jt(e, t, n) {
		for (var r, i = (A.tweeners[t] || []).concat(A.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function A(i, e, t) {
		var n, o, r, a, s, l, u, c = 0,
			f = A.prefilters.length,
			d = T.Deferred().always(function() {
				delete p.elem
			}),
			p = function() {
				if (o) return !1;
				for (var e = N || At(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration ||
						0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t);
				return d.notifyWith(i, [h, t, e]), t < 1 && r ? e : (d.resolveWith(i, [h]), !1)
			},
			h = d.promise({
				elem: i,
				props: T.extend({}, e),
				opts: T.extend(!0, {
					specialEasing: {},
					easing: T.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: N || At(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					t = T.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
					return h.tweens.push(t), t
				},
				stop: function(e) {
					var t = 0,
						n = e ? h.tweens.length : 0;
					if (o) return this;
					for (o = !0; t < n; t++) h.tweens[t].run(1);
					return e ? (d.notifyWith(i, [h, 1, 0]), d.resolveWith(i, [h, e])) : d.rejectWith(i, [h,
						e
					]), this
				}
			}),
			g = h.props,
			m = g,
			y = h.opts.specialEasing;
		for (r in m)
			if (s = y[a = T.camelCase(r)], l = m[r], T.isArray(l) && (s = l[1], l = m[r] = l[0]), r !== a && (m[a] =
					l, delete m[r]), (u = T.cssHooks[a]) && "expand" in u)
				for (r in l = u.expand(l), delete m[a], l) r in m || (m[r] = l[r], y[r] = s);
			else y[a] = s;
		for (; c < f; c++)
			if (n = A.prefilters[c].call(h, i, g, h.opts)) return T.isFunction(n.stop) && (T._queueHooks(h.elem, h
				.opts.queue).stop = T.proxy(n.stop, n)), n;
		return T.map(g, jt, h), T.isFunction(h.opts.start) && h.opts.start.call(i, h), T.fx.timer(T.extend(p, {
			elem: i,
			anim: h,
			queue: h.opts.queue
		})), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts
			.always)
	}
	T.Animation = T.extend(A, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return he(n.elem, e, pe.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				for (var n, r = 0, i = (e = T.isFunction(e) ? (t = e, ["*"]) : e.match(C)).length; r <
					i; r++) n = e[r], A.tweeners[n] = A.tweeners[n] || [], A.tweeners[n].unshift(t)
			},
			prefilters: [function(t, e, n) {
				var r, i, o, a, s, l, u, c = this,
					f = {},
					d = t.style,
					p = t.nodeType && de(t),
					h = T._data(t, "fxshow");
				for (r in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
						l = s.empty.fire, s.empty.fire = function() {
							s.unqueued || l()
						}), s.unqueued++, c.always(function() {
						c.always(function() {
							s.unqueued--, T.queue(t, "fx").length || s.empty.fire()
						})
					})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d
						.overflow, d.overflowX, d.overflowY
					], "inline" === ("none" === (u = T.css(t, "display")) ? T._data(t,
						"olddisplay") || Ze(t.nodeName) : u) && "none" === T.css(t, "float") && (m
						.inlineBlockNeedsLayout && "inline" !== Ze(t.nodeName) ? d.zoom = 1 : d
						.display = "inline-block")), n.overflow && (d.overflow = "hidden", m
						.shrinkWrapBlocks() || c.always(function() {
							d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n
								.overflow[2]
						})), e)
					if (i = e[r], kt.exec(i)) {
						if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
							if ("show" !== i || !h || void 0 === h[r]) continue;
							p = !0
						}
						f[r] = h && h[r] || T.style(t, r)
					} else u = void 0;
				if (T.isEmptyObject(f)) "inline" === ("none" === u ? Ze(t.nodeName) : u) && (d.display =
					u);
				else
					for (r in h ? "hidden" in h && (p = h.hidden) : h = T._data(t, "fxshow", {}), o && (
							h.hidden = !p), p ? T(t).show() : c.done(function() {
							T(t).hide()
						}), c.done(function() {
							for (var e in T._removeData(t, "fxshow"), f) T.style(t, e, f[e])
						}), f) a = jt(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a
						.start, a.start = "width" === r || "height" === r ? 1 : 0))
			}],
			prefilter: function(e, t) {
				t ? A.prefilters.unshift(e) : A.prefilters.push(e)
			}
		}), T.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? T.extend({}, e) : {
				complete: n || !n && t || T.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !T.isFunction(t) && t
			};
			return r.duration = T.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in T.fx
				.speeds ? T.fx.speeds[r.duration] : T.fx.speeds._default, null != r.queue && !0 !== r.queue || (r
					.queue = "fx"), r.old = r.complete, r.complete = function() {
					T.isFunction(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
				}, r
		}, T.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(de).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(t, e, n, r) {
				function i() {
					var e = A(this, T.extend({}, t), a);
					(o || T._data(this, "finish")) && e.stop(!0)
				}
				var o = T.isEmptyObject(t),
					a = T.speed(e, n, r);
				return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
			},
			stop: function(i, e, o) {
				function a(e) {
					var t = e.stop;
					delete e.stop, t(o)
				}
				return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i ||
					"fx", []), this.each(function() {
					var e = !0,
						t = null != i && i + "queueHooks",
						n = T.timers,
						r = T._data(this);
					if (t) r[t] && r[t].stop && a(r[t]);
					else
						for (t in r) r[t] && r[t].stop && St.test(t) && a(r[t]);
					for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i ||
						(n[t].anim.stop(o), e = !1, n.splice(t, 1));
					!e && o || T.dequeue(this, i)
				})
			},
			finish: function(a) {
				return !1 !== a && (a = a || "fx"), this.each(function() {
					var e, t = T._data(this),
						n = t[a + "queue"],
						r = t[a + "queueHooks"],
						i = T.timers,
						o = n ? n.length : 0;
					for (t.finish = !0, T.queue(this, a, []), r && r.stop && r.stop.call(this, !0),
						e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim
						.stop(!0), i.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete t.finish
				})
			}
		}), T.each(["toggle", "show", "hide"], function(e, r) {
			var i = T.fn[r];
			T.fn[r] = function(e, t, n) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Dt(r, !
					0), e, t, n)
			}
		}), T.each({
			slideDown: Dt("show"),
			slideUp: Dt("hide"),
			slideToggle: Dt("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, r) {
			T.fn[e] = function(e, t, n) {
				return this.animate(r, e, t, n)
			}
		}), T.timers = [], T.fx.tick = function() {
			var e, t = T.timers,
				n = 0;
			for (N = T.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
			t.length || T.fx.stop(), N = void 0
		}, T.fx.timer = function(e) {
			T.timers.push(e), e() ? T.fx.start() : T.timers.pop()
		}, T.fx.interval = 13, T.fx.start = function() {
			Nt = Nt || w.setInterval(T.fx.tick, T.fx.interval)
		}, T.fx.stop = function() {
			w.clearInterval(Nt), Nt = null
		}, T.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, T.fn.delay = function(r, e) {
			return r = T.fx && T.fx.speeds[r] || r, this.queue(e = e || "fx", function(e, t) {
				var n = w.setTimeout(e, r);
				t.stop = function() {
					w.clearTimeout(n)
				}
			})
		}, k = h.createElement("input"), q = h.createElement("div"), S = h.createElement("select"), e = S
		.appendChild(h.createElement("option")), (q = h.createElement("div")).setAttribute("className", "t"), q
		.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", F = q
		.getElementsByTagName("a")[0], k.setAttribute("type", "checkbox"), q.appendChild(k), (F = q
			.getElementsByTagName("a")[0]).style.cssText = "top:1px", m.getSetAttribute = "t" !== q.className, m
		.style = /top/.test(F.getAttribute("style")), m.hrefNormalized = "/a" === F.getAttribute("href"), m
		.checkOn = !!k.value, m.optSelected = e.selected, m.enctype = !!h.createElement("form").enctype, S
		.disabled = !0, m.optDisabled = !e.disabled, (k = h.createElement("input")).setAttribute("value", ""), m
		.input = "" === k.getAttribute("value"), k.value = "t", k.setAttribute("type", "radio"), m.radioValue =
		"t" === k.value;
	var Lt = /\r/g,
		Ht = /[\x20\t\r\n\f]+/g;
	T.fn.extend({
		val: function(t) {
			var n, e, r, i = this[0];
			return arguments.length ? (r = T.isFunction(t), this.each(function(e) {
					1 === this.nodeType && (null == (e = r ? t.call(this, e, T(this).val()) :
						t) ? e = "" : "number" == typeof e ? e += "" : T.isArray(e) && (e =
							T.map(e, function(e) {
								return null == e ? "" : e + ""
							})), (n = T.valHooks[this.type] || T.valHooks[this.nodeName
							.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e,
							"value") || (this.value = e))
				})) : i ? (n = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in
				n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof(e = i.value) ? e
				.replace(Lt, "") : null == e ? "" : e : void 0
		}
	}), T.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = T.find.attr(e, "value");
					return null != t ? t : T.trim(T.text(e)).replace(Ht, " ")
				}
			},
			select: {
				get: function(e) {
					for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type || r <
							0, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r :
							0; s < a; s++)
						if (((t = n[s]).selected || s === r) && (m.optDisabled ? !t.disabled : null ===
								t.getAttribute("disabled")) && (!t.parentNode.disabled || !T.nodeName(t
								.parentNode, "optgroup"))) {
							if (t = T(t).val(), i) return t;
							o.push(t)
						} return o
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--;)
						if (r = i[a], -1 < T.inArray(T.valHooks.option.get(r), o)) try {
							r.selected = n = !0
						} catch (e) {
							r.scrollHeight
						} else r.selected = !1;
					return n || (e.selectedIndex = -1), i
				}
			}
		}
	}), T.each(["radio", "checkbox"], function() {
		T.valHooks[this] = {
			set: function(e, t) {
				if (T.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
			}
		}, m.checkOn || (T.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var D, qt, j = T.expr.attrHandle,
		_t = /^(?:checked|selected)$/i,
		L = m.getSetAttribute,
		Ft = m.input,
		Mt = (T.fn.extend({
			attr: function(e, t) {
				return d(this, T.attr, e, t, 1 < arguments.length)
			},
			removeAttr: function(e) {
				return this.each(function() {
					T.removeAttr(this, e)
				})
			}
		}), T.extend({
			attr: function(e, t, n) {
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) :
					(1 === o && T.isXMLDoc(e) || (t = t.toLowerCase(), i = T.attrHooks[t] || (T.expr
							.match.bool.test(t) ? qt : D)), void 0 !== n ? null === n ? void T
						.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r :
						(e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e,
							t))) && null == (r = T.find.attr(e, t)) ? void 0 : r)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						var n;
						if (!m.radioValue && "radio" === t && T.nodeName(e, "input")) return n = e
							.value, e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			},
			removeAttr: function(e, t) {
				var n, r, i = 0,
					o = t && t.match(C);
				if (o && 1 === e.nodeType)
					for (; n = o[i++];) r = T.propFix[n] || n, T.expr.match.bool.test(n) ? Ft && L || !
						_t.test(n) ? e[r] = !1 : e[T.camelCase("default-" + n)] = e[r] = !1 : T.attr(e,
							n, ""), e.removeAttribute(L ? n : r)
			}
		}), qt = {
			set: function(e, t, n) {
				return !1 === t ? T.removeAttr(e, n) : Ft && L || !_t.test(n) ? e.setAttribute(!L && T
					.propFix[n] || n, n) : e[T.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var o = j[t] || T.find.attr;
			Ft && L || !_t.test(t) ? j[t] = function(e, t, n) {
				var r, i;
				return n || (i = j[t], j[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, j[t] =
					i), r
			} : j[t] = function(e, t, n) {
				if (!n) return e[T.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), Ft && L || (T.attrHooks.value = {
			set: function(e, t, n) {
				if (!T.nodeName(e, "input")) return D && D.set(e, t, n);
				e.defaultValue = t
			}
		}), L || (D = {
			set: function(e, t, n) {
				var r = e.getAttributeNode(n);
				if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "",
					"value" === n || t === e.getAttribute(n)) return t
			}
		}, j.id = j.name = j.coords = function(e, t, n) {
			if (!n) return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
		}, T.valHooks.button = {
			get: function(e, t) {
				e = e.getAttributeNode(t);
				if (e && e.specified) return e.value
			},
			set: D.set
		}, T.attrHooks.contenteditable = {
			set: function(e, t, n) {
				D.set(e, "" !== t && t, n)
			}
		}, T.each(["width", "height"], function(e, n) {
			T.attrHooks[n] = {
				set: function(e, t) {
					if ("" === t) return e.setAttribute(n, "auto"), t
				}
			}
		})), m.style || (T.attrHooks.style = {
			get: function(e) {
				return e.style.cssText || void 0
			},
			set: function(e, t) {
				return e.style.cssText = t + ""
			}
		}), /^(?:input|select|textarea|button|object)$/i),
		Ot = /^(?:a|area)$/i,
		Rt = (T.fn.extend({
			prop: function(e, t) {
				return d(this, T.prop, e, t, 1 < arguments.length)
			},
			removeProp: function(e) {
				return e = T.propFix[e] || e, this.each(function() {
					try {
						this[e] = void 0, delete this[e]
					} catch (e) {}
				})
			}
		}), T.extend({
			prop: function(e, t, n) {
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[
					t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (
					r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(
					e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var t = T.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ot.test(e.nodeName) && e
							.href ? 0 : -1
					}
				}
			},
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), m.hrefNormalized || T.each(["href", "src"], function(e, t) {
			T.propHooks[t] = {
				get: function(e) {
					return e.getAttribute(t, 4)
				}
			}
		}), m.optSelected || (T.propHooks.selected = {
			get: function(e) {
				e = e.parentNode;
				return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
			},
			set: function(e) {
				e = e.parentNode;
				e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
			}
		}), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan",
			"useMap", "frameBorder", "contentEditable"
		], function() {
			T.propFix[this.toLowerCase()] = this
		}), m.enctype || (T.propFix.enctype = "encoding"), /[\t\r\n\f]/g);

	function H(e) {
		return T.attr(e, "class") || ""
	}
	T.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a, s = 0;
			if (T.isFunction(t)) return this.each(function(e) {
				T(this).addClass(t.call(this, e, H(this)))
			});
			if ("string" == typeof t && t)
				for (e = t.match(C) || []; n = this[s++];)
					if (a = H(n), r = 1 === n.nodeType && (" " + a + " ").replace(Rt, " ")) {
						for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						a !== (a = T.trim(r)) && T.attr(n, "class", a)
					} return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a, s = 0;
			if (T.isFunction(t)) return this.each(function(e) {
				T(this).removeClass(t.call(this, e, H(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof t && t)
				for (e = t.match(C) || []; n = this[s++];)
					if (a = H(n), r = 1 === n.nodeType && (" " + a + " ").replace(Rt, " ")) {
						for (o = 0; i = e[o++];)
							for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
						a !== (a = T.trim(r)) && T.attr(n, "class", a)
					} return this
		},
		toggleClass: function(i, t) {
			var o = typeof i;
			return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) :
				T.isFunction(i) ? this.each(function(e) {
					T(this).toggleClass(i.call(this, e, H(this), t), t)
				}) : this.each(function() {
					var e, t, n, r;
					if ("string" == o)
						for (t = 0, n = T(this), r = i.match(C) || []; e = r[t++];) n.hasClass(e) ?
							n.removeClass(e) : n.addClass(e);
					else void 0 !== i && "boolean" != o || ((e = H(this)) && T._data(this,
						"__className__", e), T.attr(this, "class", !e && !1 !== i && T
						._data(this, "__className__") || ""))
				})
		},
		hasClass: function(e) {
			for (var t, n = 0, r = " " + e + " "; t = this[n++];)
				if (1 === t.nodeType && -1 < (" " + H(t) + " ").replace(Rt, " ").indexOf(r)) return !0;
			return !1
		}
	}), T.each(
		"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
		.split(" "),
		function(e, n) {
			T.fn[n] = function(e, t) {
				return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
			}
		}), T.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	});
	var q = w.location,
		Pt = T.now(),
		Bt = /\?/,
		Wt =
		/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
		It = (T.parseJSON = function(e) {
			if (w.JSON && w.JSON.parse) return w.JSON.parse(e + "");
			var i, o = null,
				t = T.trim(e + "");
			return t && !T.trim(t.replace(Wt, function(e, t, n, r) {
				return 0 === (o = i && t ? 0 : o) ? e : (i = n || t, o += !r - !n, "")
			})) ? Function("return " + t)() : T.error("Invalid JSON: " + e)
		}, T.parseXML = function(e) {
			var t;
			if (!e || "string" != typeof e) return null;
			try {
				w.DOMParser ? t = (new w.DOMParser).parseFromString(e, "text/xml") : ((t = new w.ActiveXObject(
					"Microsoft.XMLDOM")).async = "false", t.loadXML(e))
			} catch (e) {
				t = void 0
			}
			return t && t.documentElement && !t.getElementsByTagName("parsererror").length || T.error(
				"Invalid XML: " + e), t
		}, /#.*$/),
		$t = /([?&])_=[^&]*/,
		zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Xt = /^(?:GET|HEAD)$/,
		Ut = /^\/\//,
		Vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Yt = {},
		Jt = {},
		Gt = "*/".concat("*"),
		Kt = q.href,
		_ = Vt.exec(Kt.toLowerCase()) || [];

	function Qt(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(C) || [];
			if (T.isFunction(t))
				for (; n = i[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(
					t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function Zt(t, r, i, o) {
		var a = {},
			s = t === Jt;

		function l(e) {
			var n;
			return a[e] = !0, T.each(t[e] || [], function(e, t) {
				t = t(r, i, o);
				return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
					l(t), !1)
			}), n
		}
		return l(r.dataTypes[0]) || !a["*"] && l("*")
	}

	function en(e, t) {
		var n, r, i = T.ajaxSettings.flatOptions || {};
		for (r in t) void 0 !== t[r] && ((i[r] ? e : n = n || {})[r] = t[r]);
		return n && T.extend(!0, e, n), e
	}

	function tn(e) {
		if (!T.contains(e.ownerDocument || h, e)) return !0;
		for (; e && 1 === e.nodeType;) {
			if ("none" === ((t = e).style && t.style.display || T.css(t, "display")) || "hidden" === e.type)
			return !0;
			e = e.parentNode
		}
		var t;
		return !1
	}
	T.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Kt,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Gt,
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
				"text json": T.parseJSON,
				"text xml": T.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? en(en(e, T.ajaxSettings), t) : en(T.ajaxSettings, e)
		},
		ajaxPrefilter: Qt(Yt),
		ajaxTransport: Qt(Jt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0);
			var n, l, u, c, f, d, r, p = T.ajaxSetup({}, t = t || {}),
				h = p.context || p,
				g = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
				m = T.Deferred(),
				y = T.Callbacks("once memory"),
				v = p.statusCode || {},
				i = {},
				o = {},
				x = 0,
				a = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!r)
								for (r = {}; t = zt.exec(u);) r[t[1].toLowerCase()] = t[2];
							t = r[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? u : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = o[n] = o[n] || e, i[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (p.mimeType = e), this
					},
					statusCode: function(e) {
						if (e)
							if (x < 2)
								for (var t in e) v[t] = [v[t], e[t]];
							else b.always(e[b.status]);
						return this
					},
					abort: function(e) {
						e = e || a;
						return d && d.abort(e), s(0, e), this
					}
				};
			if (m.promise(b).complete = y.add, b.success = b.done, b.error = b.fail, p.url = ((e || p
					.url || Kt) + "").replace(It, "").replace(Ut, _[1] + "//"), p.type = t.method || t
				.type || p.method || p.type, p.dataTypes = T.trim(p.dataType || "*").toLowerCase()
				.match(C) || [""], null == p.crossDomain && (e = Vt.exec(p.url.toLowerCase()), p
					.crossDomain = !(!e || e[1] === _[1] && e[2] === _[2] && (e[3] || ("http:" === e[
						1] ? "80" : "443")) === (_[3] || ("http:" === _[1] ? "80" : "443")))), p.data &&
				p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)),
				Zt(Yt, p, t, b), 2 === x) return b;
			for (n in (f = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), p
				.type = p.type.toUpperCase(), p.hasContent = !Xt.test(p.type), l = p.url, p
				.hasContent || (p.data && (l = p.url += (Bt.test(l) ? "&" : "?") + p.data, delete p
					.data), !1 === p.cache && (p.url = $t.test(l) ? l.replace($t, "$1_=" + Pt++) :
					l + (Bt.test(l) ? "&" : "?") + "_=" + Pt++)), p.ifModified && (T.lastModified[l] &&
					b.setRequestHeader("If-Modified-Since", T.lastModified[l]), T.etag[l] && b
					.setRequestHeader("If-None-Match", T.etag[l])), (p.data && p.hasContent && !1 !== p
					.contentType || t.contentType) && b.setRequestHeader("Content-Type", p.contentType),
				b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p
						.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : p
					.accepts["*"]), p.headers) b.setRequestHeader(n, p.headers[n]);
			if (p.beforeSend && (!1 === p.beforeSend.call(h, b, p) || 2 === x)) return b.abort();
			for (n in a = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) b[n](p[n]);
			if (d = Zt(Jt, p, t, b)) {
				if (b.readyState = 1, f && g.trigger("ajaxSend", [b, p]), 2 === x) return b;
				p.async && 0 < p.timeout && (c = w.setTimeout(function() {
					b.abort("timeout")
				}, p.timeout));
				try {
					x = 1, d.send(i, s)
				} catch (e) {
					if (!(x < 2)) throw e;
					s(-1, e)
				}
			} else s(-1, "No Transport");

			function s(e, t, n, r) {
				var i, o, a, s = t;
				2 !== x && (x = 2, c && w.clearTimeout(c), d = void 0, u = r || "", b.readyState = 0 <
					e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
						for (var r, i, o, a, s = e.contents, l = e.dataTypes;
							"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t
							.getResponseHeader("Content-Type"));
						if (i)
							for (a in s)
								if (s[a] && s[a].test(i)) {
									l.unshift(a);
									break
								} if (l[0] in n) o = l[0];
						else {
							for (a in n) {
								if (!l[0] || e.converters[a + " " + l[0]]) {
									o = a;
									break
								}
								r = r || a
							}
							o = o || r
						}
						if (o) return o !== l[0] && l.unshift(o), n[o]
					}(p, b, n)), a = function(e, t, n, r) {
						var i, o, a, s, l, u = {},
							c = e.dataTypes.slice();
						if (c[1])
							for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
						for (o = c.shift(); o;)
							if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e
								.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c
								.shift())
								if ("*" === o) o = l;
								else if ("*" !== l && l !== o) {
							if (!(a = u[l + " " + o] || u["* " + o]))
								for (i in u)
									if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u[
											"* " + s[0]])) {
										!0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[
											1]));
										break
									} if (!0 !== a)
								if (a && e.throws) t = a(t);
								else try {
									t = a(t)
								} catch (e) {
									return {
										state: "parsererror",
										error: a ? e : "No conversion from " + l + " to " + o
									}
								}
						}
						return {
							state: "success",
							data: t
						}
					}(p, a, b, r), r ? (p.ifModified && ((n = b.getResponseHeader(
							"Last-Modified")) && (T.lastModified[l] = n), (n = b.getResponseHeader(
								"etag")) && (T.etag[l] = n)), 204 === e || "HEAD" === p.type ? s =
						"nocontent" : 304 === e ? s = "notmodified" : (s = a.state, i = a.data,
							r = !(o = a.error))) : (o = s, !e && s || (s = "error", e < 0 && (e =
						0))), b.status = e, b.statusText = (t || s) + "", r ? m.resolveWith(h, [i,
						s, b
					]) : m.rejectWith(h, [b, s, o]), b.statusCode(v), v = void 0, f && g.trigger(r ?
						"ajaxSuccess" : "ajaxError", [b, p, r ? i : o]), y.fireWith(h, [b, s]), f &&
					(g.trigger("ajaxComplete", [b, p]), --T.active || T.event.trigger("ajaxStop")))
			}
			return b
		},
		getJSON: function(e, t, n) {
			return T.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return T.get(e, void 0, t, "script")
		}
	}), T.each(["get", "post"], function(e, i) {
		T[i] = function(e, t, n, r) {
			return T.isFunction(t) && (r = r || n, n = t, t = void 0), T.ajax(T.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, T.isPlainObject(e) && e))
		}
	}), T._evalUrl = function(e) {
		return T.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, T.fn.extend({
		wrapAll: function(t) {
			return T.isFunction(t) ? this.each(function(e) {
				T(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode &&
				e.insertBefore(this[0]), e.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e
						.firstChild;
					return e
				}).append(this)), this);
			var e
		},
		wrapInner: function(n) {
			return T.isFunction(n) ? this.each(function(e) {
				T(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = T(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = T.isFunction(t);
			return this.each(function(e) {
				T(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				T.nodeName(this, "body") || T(this).replaceWith(this.childNodes)
			}).end()
		}
	}), T.expr.filters.hidden = function(e) {
		return m.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects()
			.length : tn(e)
	}, T.expr.filters.visible = function(e) {
		return !T.expr.filters.hidden(e)
	};
	var nn = /%20/g,
		rn = /\[\]$/,
		on = /\r?\n/g,
		an = /^(?:submit|button|image|reset|file)$/i,
		sn = /^(?:input|select|textarea|keygen)/i;
	T.param = function(e, t) {
		function n(e, t) {
			t = T.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" +
				encodeURIComponent(t)
		}
		var r, i = [];
		if (void 0 === t && (t = T.ajaxSettings && T.ajaxSettings.traditional), T.isArray(e) || e.jquery && !T
			.isPlainObject(e)) T.each(e, function() {
			n(this.name, this.value)
		});
		else
			for (r in e) ! function n(r, e, i, o) {
				if (T.isArray(e)) T.each(e, function(e, t) {
					i || rn.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e :
						"") + "]", t, i, o)
				});
				else if (i || "object" !== T.type(e)) o(r, e);
				else
					for (var t in e) n(r + "[" + t + "]", e[t], i, o)
			}(r, e[r], t, n);
		return i.join("&").replace(nn, "+")
	}, T.fn.extend({
		serialize: function() {
			return T.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = T.prop(this, "elements");
				return e ? T.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !T(this).is(":disabled") && sn.test(this.nodeName) && !an
					.test(e) && (this.checked || !ge.test(e))
			}).map(function(e, t) {
				var n = T(this).val();
				return null == n ? null : T.isArray(n) ? T.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(on, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(on, "\r\n")
				}
			}).get()
		}
	}), T.ajaxSettings.xhr = void 0 !== w.ActiveXObject ? function() {
		return this.isLocal ? fn() : 8 < h.documentMode ? cn() : /^(get|post|head|put|delete|options)$/i.test(
			this.type) && cn() || fn()
	} : cn;
	var ln = 0,
		un = {},
		F = T.ajaxSettings.xhr();

	function cn() {
		try {
			return new w.XMLHttpRequest
		} catch (e) {}
	}

	function fn() {
		try {
			return new w.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}
	w.attachEvent && w.attachEvent("onunload", function() {
		for (var e in un) un[e](void 0, !0)
	}), m.cors = !!F && "withCredentials" in F, (F = m.ajax = !!F) && T.ajaxTransport(function(l) {
		var u;
		if (!l.crossDomain || m.cors) return {
			send: function(e, o) {
				var t, a = l.xhr(),
					s = ++ln;
				if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
					for (t in l.xhrFields) a[t] = l.xhrFields[t];
				for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l
					.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] =
						"XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
				a.send(l.hasContent && l.data || null), u = function(e, t) {
						var n, r, i;
						if (u && (t || 4 === a.readyState))
							if (delete un[s], u = void 0, a.onreadystatechange = T.noop, t) 4 !== a
								.readyState && a.abort();
							else {
								i = {}, n = a.status, "string" == typeof a.responseText && (i.text =
									a.responseText);
								try {
									r = a.statusText
								} catch (e) {
									r = ""
								}
								n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i
									.text ? 200 : 404
							} i && o(n, r, i, a.getAllResponseHeaders())
					}, l.async ? 4 === a.readyState ? w.setTimeout(u) : a.onreadystatechange = un[
					s] = u : u()
			},
			abort: function() {
				u && u(void 0, !0)
			}
		}
	}), T.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return T.globalEval(e), e
			}
		}
	}), T.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), T.ajaxTransport("script", function(t) {
		var r, i;
		if (t.crossDomain) return i = h.head || T("head")[0] || h.documentElement, {
			send: function(e, n) {
				(r = h.createElement("script")).async = !0, t.scriptCharset && (r.charset = t
						.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange =
					function(e, t) {
						!t && r.readyState && !/loaded|complete/.test(r.readyState) || (r
							.onload = r.onreadystatechange = null, r.parentNode && r
							.parentNode.removeChild(r), r = null, t || n(200, "success"))
					}, i.insertBefore(r, i.firstChild)
			},
			abort: function() {
				r && r.onload(void 0, !0)
			}
		}
	});
	var dn = [],
		pn = /(=)\?(?=&|$)|\?\?/,
		hn = (T.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = dn.pop() || T.expando + "_" + Pt++;
				return this[e] = !0, e
			}
		}), T.ajaxPrefilter("json jsonp", function(e, t, n) {
			var r, i, o, a = !1 !== e.jsonp && (pn.test(e.url) ? "url" : "string" == typeof e.data && 0 ===
				(e.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(e.data) &&
				"data");
			if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = T.isFunction(e
				.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(pn,
					"$1" + r) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp +
					"=" + r), e.converters["script json"] = function() {
					return o || T.error(r + " was not called"), o[0]
				}, e.dataTypes[0] = "json", i = w[r], w[r] = function() {
					o = arguments
				}, n.always(function() {
					void 0 === i ? T(w).removeProp(r) : w[r] = i, e[r] && (e.jsonpCallback = t
							.jsonpCallback, dn.push(r)), o && T.isFunction(i) && i(o[0]), o = i =
						void 0
				}), "script"
		}), T.parseHTML = function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || h;
			var r = J.exec(e),
				n = !n && [];
			return r ? [t.createElement(r[1])] : (r = Ne([e], t, n), n && n.length && T(n).remove(), T.merge([],
				r.childNodes))
		}, T.fn.load);

	function gn(e) {
		return T.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	return T.fn.load = function(e, t, n) {
		if ("string" != typeof e && hn) return hn.apply(this, arguments);
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = T.trim(e.slice(s, e.length)), e = e.slice(0, s)), T.isFunction(t) ? (n = t, t =
			void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && T.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e,
	t) {
		T.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), T.expr.filters.animated = function(t) {
		return T.grep(T.timers, function(e) {
			return t === e.elem
		}).length
	}, T.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s = T.css(e, "position"),
				l = T(e),
				u = {};
			"static" === s && (e.style.position = "relative"), o = l.offset(), r = T.css(e, "top"), a = T
				.css(e, "left"), s = ("absolute" === s || "fixed" === s) && -1 < T.inArray("auto", [r, a]) ?
				(i = (s = l.position()).top, s.left) : (i = parseFloat(r) || 0, parseFloat(a) || 0), null !=
				(t = T.isFunction(t) ? t.call(e, n, T.extend({}, o)) : t).top && (u.top = t.top - o.top +
				i), null != t.left && (u.left = t.left - o.left + s), "using" in t ? t.using.call(e, u) : l
				.css(u)
		}
	}, T.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				T.offset.setOffset(this, t, e)
			});
			var e, n = {
					top: 0,
					left: 0
				},
				r = this[0],
				i = r && r.ownerDocument;
			return i ? (e = i.documentElement, T.contains(e, r) ? (void 0 !== r.getBoundingClientRect &&
				(n = r.getBoundingClientRect()), r = gn(i), {
					top: n.top + (r.pageYOffset || e.scrollTop) - (e.clientTop || 0),
					left: n.left + (r.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
				}) : n) : void 0
		},
		position: function() {
			var e, t, n, r;
			if (this[0]) return n = {
				top: 0,
				left: 0
			}, r = this[0], "fixed" === T.css(r, "position") ? t = r.getBoundingClientRect() : (
				e = this.offsetParent(), t = this.offset(), (n = T.nodeName(e[0], "html") ? n :
					e.offset()).top += T.css(e[0], "borderTopWidth", !0), n.left += T.css(e[0],
					"borderLeftWidth", !0)), {
				top: t.top - n.top - T.css(r, "marginTop", !0),
				left: t.left - n.left - T.css(r, "marginLeft", !0)
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && !T.nodeName(e, "html") && "static" === T
					.css(e, "position");) e = e.offsetParent;
				return e || ut
			})
		}
	}), T.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = /Y/.test(i);
		T.fn[t] = function(e) {
			return d(this, function(e, t, n) {
				var r = gn(e);
				if (void 0 === n) return r ? i in r ? r[i] : r.document.documentElement[t] : e[
					t];
				r ? r.scrollTo(o ? T(r).scrollLeft() : n, o ? n : T(r).scrollTop()) : e[t] = n
			}, t, e, arguments.length, null)
		}
	}), T.each(["top", "left"], function(e, n) {
		T.cssHooks[n] = ft(m.pixelPosition, function(e, t) {
			if (t) return t = p(e, n), lt.test(t) ? T(e).position()[n] + "px" : t
		})
	}), T.each({
		Height: "height",
		Width: "width"
	}, function(o, a) {
		T.each({
			padding: "inner" + o,
			content: a,
			"": "outer" + o
		}, function(r, e) {
			T.fn[e] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return d(this, function(e, t, n) {
					var r;
					return T.isWindow(e) ? e.document.documentElement["client" + o] :
						9 === e.nodeType ? (r = e.documentElement, Math.max(e.body[
								"scroll" + o], r["scroll" + o], e.body["offset" +
							o], r["offset" + o], r["client" + o])) : void 0 === n ? T
						.css(e, t, i) : T.style(e, t, n, i)
				}, a, n ? e : void 0, n, null)
			}
		})
	}), T.fn.extend({
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
	}), T.fn.size = function() {
		return this.length
	}, T.fn.andSelf = T.fn.addBack, layui.define(function(e) {
		e("jquery", layui.$ = T)
	}), T
});
! function(p) {
	"use strict";

	function t(e) {
		function t() {
			i.creat()
		}
		var i = this;
		i.index = ++g.index, i.config.maxWidth = m(f).width() - 30, i.config = m.extend({}, i.config, c.config, e),
			document.body ? t() : setTimeout(function() {
				t()
			}, 30)
	}

	function h(e) {
		return i.skin ? " " + i.skin + " " + i.skin + "-" + e : ""
	}
	var m, f, e, n = p.layui && layui.define,
		c = {
			getPath: (e = document.currentScript ? document.currentScript.src : function() {
				for (var e, t = document.scripts, i = t.length - 1, n = i; 0 < n; n--)
					if ("interactive" === t[n].readyState) {
						e = t[n].src;
						break
					} return e || t[i].src
			}(), (p.LAYUI_GLOBAL || {}).layer_dir || e.substring(0, e.lastIndexOf("/") + 1)),
			config: {},
			end: {},
			minIndex: 0,
			minLeft: [],
			btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
			type: ["dialog", "page", "iframe", "loading", "tips"],
			getStyle: function(e, t) {
				e = e.currentStyle || p.getComputedStyle(e, null);
				return e[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t)
			},
			link: function(e, n, t) {
				var i, a, o, s, r, l;
				g.path && (i = document.getElementsByTagName("head")[0], a = document.createElement("link"), o = ((
						t = "string" == typeof n ? n : t) || e).replace(/\.|\//g, ""), s = "layuicss-" + o, r =
					"creating", l = 0, a.rel = "stylesheet", a.href = g.path + e, a.id = s, document
					.getElementById(s) || i.appendChild(a), "function" == typeof n && function e(t) {
						var i = document.getElementById(s);
						return 100 < ++l ? p.console && console.error(o + ".css: Invalid") : void(1989 ===
							parseInt(c.getStyle(i, "width")) ? (t === r && i.removeAttribute("lay-status"),
								i.getAttribute("lay-status") === r ? setTimeout(e, 100) : n()) : (i
								.setAttribute("lay-status", r), setTimeout(function() {
									e(r)
								}, 100)))
					}())
			}
		},
		g = {
			v: "3.5.1",
			ie: (e = navigator.userAgent.toLowerCase(), !!(p.ActiveXObject || "ActiveXObject" in p) && ((e.match(
				/msie\s(\d+)/) || [])[1] || "11")),
			index: p.layer && p.layer.v ? 1e5 : 0,
			path: c.getPath,
			config: function(e, t) {
				return g.cache = c.config = m.extend({}, c.config, e = e || {}), g.path = c.config.path || g.path,
					"string" == typeof e.extend && (e.extend = [e.extend]), c.config.path && g.ready(), e.extend &&
					(n ? layui.addcss("modules/layer/" + e.extend) : c.link("theme/" + e.extend)), this
			},
			ready: function(e) {
				var t = "layer",
					i = (n ? "modules/layer/" : "theme/") + "default/layer.css?v=" + g.v;
				return n ? layui.addcss(i, e, t) : c.link(i, e, t), this
			},
			alert: function(e, t, i) {
				var n = "function" == typeof t;
				return g.open(m.extend({
					content: e,
					yes: i = n ? t : i
				}, n ? {} : t))
			},
			confirm: function(e, t, i, n) {
				var a = "function" == typeof t;
				return a && (n = i, i = t), g.open(m.extend({
					content: e,
					btn: c.btn,
					yes: i,
					btn2: n
				}, a ? {} : t))
			},
			msg: function(e, t, i) {
				var n = "function" == typeof t,
					a = c.config.skin,
					a = (a ? a + " " + a + "-msg" : "") || "layui-layer-msg",
					o = d.anim.length - 1;
				return n && (i = t), g.open(m.extend({
					content: e,
					time: 3e3,
					shade: !1,
					skin: a,
					title: !1,
					closeBtn: !1,
					btn: !1,
					resize: !1,
					end: i
				}, n && !c.config.skin ? {
					skin: a + " layui-layer-hui",
					anim: o
				} : (-1 !== (t = t || {}).icon && (void 0 !== t.icon || c.config.skin) || (t.skin = a +
					" " + (t.skin || "layui-layer-hui")), t)))
			},
			load: function(e, t) {
				return g.open(m.extend({
					type: 3,
					icon: e || 0,
					resize: !1,
					shade: .01
				}, t))
			},
			tips: function(e, t, i) {
				return g.open(m.extend({
					type: 4,
					content: [e, t],
					closeBtn: !1,
					time: 3e3,
					shade: !1,
					resize: !1,
					fixed: !1,
					maxWidth: 260
				}, i))
			}
		},
		d = (t.pt = t.prototype, ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog",
			"layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"
		]),
		i = (d.anim = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04",
			"layer-anim-05", "layer-anim-06"
		], d.SHADE = "layui-layer-shade", d.MOVE = "layui-layer-move", t.pt.config = {
			type: 0,
			shade: .3,
			fixed: !0,
			move: d[1],
			title: "&#x4FE1;&#x606F;",
			offset: "auto",
			area: "auto",
			closeBtn: 1,
			time: 0,
			zIndex: 19891014,
			maxWidth: 360,
			anim: 0,
			isOutAnim: !0,
			minStack: !0,
			icon: -1,
			moveType: 1,
			resize: !0,
			scrollbar: !0,
			tips: 2
		}, t.pt.vessel = function(e, t) {
			var i = this.index,
				n = this.config,
				a = n.zIndex + i,
				o = "object" == typeof n.title,
				s = n.maxmin && (1 === n.type || 2 === n.type),
				o = n.title ? '<div class="layui-layer-title" style="' + (o ? n.title[1] : "") + '">' + (o ? n
					.title[0] : n.title) + "</div>" : "";
			return n.zIndex = a, t([n.shade ? '<div class="' + d.SHADE + '" id="' + d.SHADE + i + '" times="' + i +
				'" style="z-index:' + (a - 1) + '; "></div>' : "", '<div class="' + d[0] + " layui-layer-" +
				c.type[n.type] + (0 != n.type && 2 != n.type || n.shade ? "" : " layui-layer-border") +
				" " + (n.skin || "") + '" id="' + d[0] + i + '" type="' + c.type[n.type] + '" times="' + i +
				'" showtime="' + n.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' +
				a + "; width:" + n.area[0] + ";height:" + n.area[1] + ";position:" + (n.fixed ? "fixed;" :
					"absolute;") + '">' + (e && 2 != n.type ? "" : o) + '<div id="' + (n.id || "") +
				'" class="layui-layer-content' + (0 == n.type && -1 !== n.icon ? " layui-layer-padding" :
					"") + (3 == n.type ? " layui-layer-loading" + n.icon : "") + '">' + (0 == n.type && -
					1 !== n.icon ? '<i class="layui-layer-ico layui-layer-ico' + n.icon + '"></i>' : "") + (
					(1 != n.type || !e) && n.content || "") + '</div><span class="layui-layer-setwin">' + (
					t = s ?
					'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' :
					"", n.closeBtn && (t += '<a class="layui-layer-ico ' + d[7] + " " + d[7] + (n.title ? n
						.closeBtn : 4 == n.type ? "1" : "2") + '" href="javascript:;"></a>'), t) +
				"</span>" + (n.btn ? function() {
					var e = "";
					"string" == typeof n.btn && (n.btn = [n.btn]);
					for (var t = 0, i = n.btn.length; t < i; t++) e += '<a class="' + d[6] + t + '">' +
						n.btn[t] + "</a>";
					return '<div class="' + d[6] + " layui-layer-btn-" + (n.btnAlign || "") + '">' + e +
						"</div>"
				}() : "") + (n.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"
			], o, m('<div class="' + d.MOVE + '" id="' + d.MOVE + '"></div>')), this
		}, t.pt.creat = function() {
			var e, n = this,
				a = n.config,
				o = n.index,
				s = "object" == typeof(l = a.content),
				r = m("body");
			if (!a.id || !m("#" + a.id)[0]) {
				switch ("string" == typeof a.area && (a.area = "auto" === a.area ? ["", ""] : [a.area, ""]), a
					.shift && (a.anim = a.shift), 6 == g.ie && (a.fixed = !1), a.type) {
					case 0:
						a.btn = "btn" in a ? a.btn : c.btn[0], g.closeAll("dialog");
						break;
					case 2:
						var l = a.content = s ? a.content : [a.content || "", "auto"];
						a.content = '<iframe scrolling="' + (a.content[1] || "auto") +
							'" allowtransparency="true" id="' + d[4] + o + '" name="' + d[4] + o +
							'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + a
							.content[0] + '"></iframe>';
						break;
					case 3:
						delete a.title, delete a.closeBtn, -1 === a.icon && a.icon, g.closeAll("loading");
						break;
					case 4:
						s || (a.content = [a.content, "body"]), a.follow = a.content[1], a.content = a.content[0] +
							'<i class="layui-layer-TipsG"></i>', delete a.title, a.tips = "object" == typeof a
							.tips ? a.tips : [a.tips, !0], a.tipsMore || g.closeAll("tips")
				}
				n.vessel(s, function(e, t, i) {
					r.append(e[0]), s ? 2 == a.type || 4 == a.type ? m("body").append(e[1]) : l.parents(
							"." + d[0])[0] || (l.data("display", l.css("display")).show().addClass(
								"layui-layer-wrap").wrap(e[1]), m("#" + d[0] + o).find("." + d[5]).before(
							t)) : r.append(e[1]), m("#" + d.MOVE)[0] || r.append(c.moveElem = i), n.layero =
						m("#" + d[0] + o), n.shadeo = m("#" + d.SHADE + o), a.scrollbar || d.html.css(
							"overflow", "hidden").attr("layer-full", o)
				}).auto(o), n.shadeo.css({
					"background-color": a.shade[1] || "#000",
					opacity: a.shade[0] || a.shade
				}), 2 == a.type && 6 == g.ie && n.layero.find("iframe").attr("src", l[0]), 4 == a.type ? n
				.tips() : (n.offset(), parseInt(c.getStyle(document.getElementById(d.MOVE), "z-index")) || (n
					.layero.css("visibility", "hidden"), g.ready(function() {
						n.offset(), n.layero.css("visibility", "visible")
					}))), a.fixed && f.on("resize", function() {
					n.offset(), (/^\d+%$/.test(a.area[0]) || /^\d+%$/.test(a.area[1])) && n.auto(o), 4 == a
						.type && n.tips()
				}), a.time <= 0 || setTimeout(function() {
					g.close(n.index)
				}, a.time), n.move().callback(), d.anim[a.anim] && (e = "layer-anim " + d.anim[a.anim], n.layero
					.addClass(e).one(
						"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
						function() {
							m(this).removeClass(e)
						})), a.isOutAnim && n.layero.data("isOutAnim", !0)
			}
		}, t.pt.auto = function(e) {
			function t(e) {
				(e = n.find(e)).height(a[1] - o - s - 2 * (0 | parseFloat(e.css("padding-top"))))
			}
			var i = this.config,
				n = m("#" + d[0] + e),
				a = ("" === i.area[0] && 0 < i.maxWidth && (g.ie && g.ie < 8 && i.btn && n.width(n.innerWidth()), n
					.outerWidth() > i.maxWidth && n.width(i.maxWidth)), [n.innerWidth(), n.innerHeight()]),
				o = n.find(d[1]).outerHeight() || 0,
				s = n.find("." + d[6]).outerHeight() || 0;
			return 2 === i.type ? t("iframe") : "" === i.area[1] ? 0 < i.maxHeight && n.outerHeight() > i
				.maxHeight ? (a[1] = i.maxHeight, t("." + d[5])) : i.fixed && a[1] >= f.height() && (a[1] = f
					.height(), t("." + d[5])) : t("." + d[5]), this
		}, t.pt.offset = function() {
			var e = this,
				t = e.config,
				i = e.layero,
				n = [i.outerWidth(), i.outerHeight()],
				a = "object" == typeof t.offset;
			e.offsetTop = (f.height() - n[1]) / 2, e.offsetLeft = (f.width() - n[0]) / 2, a ? (e.offsetTop = t
					.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t
					.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = f.width() - n[0] : "b" === t
					.offset ? e.offsetTop = f.height() - n[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t
					.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = f.height() -
						n[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = f.width() -
						n[0]) : "rb" === t.offset ? (e.offsetTop = f.height() - n[1], e.offsetLeft = f.width() - n[
						0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? f
				.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e
						.offsetLeft) ? f.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e
					.offsetTop += f.scrollTop(), e.offsetLeft += f.scrollLeft()), i.attr("minLeft") && (e
					.offsetTop = f.height() - (i.find(d[1]).outerHeight() || 0), e.offsetLeft = i.css("left")), i
				.css({
					top: e.offsetTop,
					left: e.offsetLeft
				})
		}, t.pt.tips = function() {
			var e = this.config,
				t = this.layero,
				i = [t.outerWidth(), t.outerHeight()],
				n = m(e.follow),
				a = {
					width: (n = n[0] ? n : m("body")).outerWidth(),
					height: n.outerHeight(),
					top: n.offset().top,
					left: n.offset().left
				},
				o = t.find(".layui-layer-TipsG"),
				n = e.tips[0];
			e.tips[1] || o.remove(), a.autoLeft = function() {
					0 < a.left + i[0] - f.width() ? (a.tipLeft = a.left + a.width - i[0], o.css({
						right: 12,
						left: "auto"
					})) : a.tipLeft = a.left
				}, a.where = [function() {
					a.autoLeft(), a.tipTop = a.top - i[1] - 10, o.removeClass("layui-layer-TipsB").addClass(
						"layui-layer-TipsT").css("border-right-color", e.tips[1])
				}, function() {
					a.tipLeft = a.left + a.width + 10, a.tipTop = a.top, o.removeClass("layui-layer-TipsL")
						.addClass("layui-layer-TipsR").css("border-bottom-color", e.tips[1])
				}, function() {
					a.autoLeft(), a.tipTop = a.top + a.height + 10, o.removeClass("layui-layer-TipsT").addClass(
						"layui-layer-TipsB").css("border-right-color", e.tips[1])
				}, function() {
					a.tipLeft = a.left - i[0] - 10, a.tipTop = a.top, o.removeClass("layui-layer-TipsR")
						.addClass("layui-layer-TipsL").css("border-bottom-color", e.tips[1])
				}], a.where[n - 1](), 1 === n ? a.top - (f.scrollTop() + i[1] + 16) < 0 && a.where[2]() : 2 === n ?
				0 < f.width() - (a.left + a.width + i[0] + 16) || a.where[3]() : 3 === n ? 0 < a.top - f
			.scrollTop() + a.height + i[1] + 16 - f.height() && a.where[0]() : 4 === n && 0 < i[0] + 16 - a.left &&
				a.where[1](), t.find("." + d[5]).css({
					"background-color": e.tips[1],
					"padding-right": e.closeBtn ? "30px" : ""
				}), t.css({
					left: a.tipLeft - (e.fixed ? f.scrollLeft() : 0),
					top: a.tipTop - (e.fixed ? f.scrollTop() : 0)
				})
		}, t.pt.move = function() {
			var o = this,
				s = o.config,
				e = m(document),
				r = o.layero,
				t = r.find(s.move),
				i = r.find(".layui-layer-resize"),
				l = {};
			return s.move && t.css("cursor", "move"), t.on("mousedown", function(e) {
				e.preventDefault(), s.move && (l.moveStart = !0, l.offset = [e.clientX - parseFloat(r.css(
					"left")), e.clientY - parseFloat(r.css("top"))], c.moveElem.css("cursor",
					"move").show())
			}), i.on("mousedown", function(e) {
				e.preventDefault(), l.resizeStart = !0, l.offset = [e.clientX, e.clientY], l.area = [r
					.outerWidth(), r.outerHeight()
				], c.moveElem.css("cursor", "se-resize").show()
			}), e.on("mousemove", function(e) {
				var t, i, n, a;
				l.moveStart && (n = e.clientX - l.offset[0], a = e.clientY - l.offset[1], t = "fixed" === r
					.css("position"), e.preventDefault(), l.stX = t ? 0 : f.scrollLeft(), l.stY = t ?
					0 : f.scrollTop(), s.moveOut || (t = f.width() - r.outerWidth() + l.stX, i = f
						.height() - r.outerHeight() + l.stY, t < (n = n < l.stX ? l.stX : n) && (n = t),
						i < (a = a < l.stY ? l.stY : a) && (a = i)), r.css({
						left: n,
						top: a
					})), s.resize && l.resizeStart && (n = e.clientX - l.offset[0], a = e.clientY - l
					.offset[1], e.preventDefault(), g.style(o.index, {
						width: l.area[0] + n,
						height: l.area[1] + a
					}), l.isResize = !0, s.resizing && s.resizing(r))
			}).on("mouseup", function(e) {
				l.moveStart && (delete l.moveStart, c.moveElem.hide(), s.moveEnd && s.moveEnd(r)), l
					.resizeStart && (delete l.resizeStart, c.moveElem.hide())
			}), o
		}, t.pt.callback = function() {
			var t = this,
				i = t.layero,
				n = t.config;
			t.openLayer(), n.success && (2 == n.type ? i.find("iframe").on("load", function() {
				n.success(i, t.index, t)
			}) : n.success(i, t.index, t)), 6 == g.ie && t.IE6(i), i.find("." + d[6]).children("a").on("click",
				function() {
					var e = m(this).index();
					0 === e ? n.yes ? n.yes(t.index, i) : n.btn1 ? n.btn1(t.index, i) : g.close(t.index) : !
						1 !== (n["btn" + (e + 1)] && n["btn" + (e + 1)](t.index, i)) && g.close(t.index)
				}), i.find("." + d[7]).on("click", function() {
				!1 !== (n.cancel && n.cancel(t.index, i)) && g.close(t.index)
			}), n.shadeClose && t.shadeo.on("click", function() {
				g.close(t.index)
			}), i.find(".layui-layer-min").on("click", function() {
				!1 !== (n.min && n.min(i, t.index)) && g.min(t.index, n)
			}), i.find(".layui-layer-max").on("click", function() {
				m(this).hasClass("layui-layer-maxmin") ? (g.restore(t.index), n.restore && n.restore(i, t
					.index)) : (g.full(t.index, n), setTimeout(function() {
					n.full && n.full(i, t.index)
				}, 100))
			}), n.end && (c.end[t.index] = n.end)
		}, c.reselect = function() {
			m.each(m("select"), function(e, t) {
				var i = m(this);
				i.parents("." + d[0])[0] || 1 == i.attr("layer") && m("." + d[0]).length < 1 && i
					.removeAttr("layer").show()
			})
		}, t.pt.IE6 = function(e) {
			m("select").each(function(e, t) {
				var i = m(this);
				i.parents("." + d[0])[0] || "none" !== i.css("display") && i.attr({
					layer: "1"
				}).hide()
			})
		}, t.pt.openLayer = function() {
			g.zIndex = this.config.zIndex, g.setTop = function(e) {
				return g.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", function() {
					g.zIndex++, e.css("z-index", g.zIndex + 1)
				}), g.zIndex
			}
		}, c.record = function(e) {
			var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
			e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({
				area: t
			})
		}, c.rescollbar = function(e) {
			d.html.attr("layer-full") == e && (d.html[0].style.removeProperty ? d.html[0].style.removeProperty(
				"overflow") : d.html[0].style.removeAttribute("overflow"), d.html.removeAttr("layer-full"))
		}, (p.layer = g).getChildFrame = function(e, t) {
			return t = t || m("." + d[4]).attr("times"), m("#" + d[0] + t).find("iframe").contents().find(e)
		}, g.getFrameIndex = function(e) {
			return m("#" + e).parents("." + d[4]).attr("times")
		}, g.iframeAuto = function(e) {
			var t, i, n;
			e && (t = g.getChildFrame("html", e).outerHeight(), i = (e = m("#" + d[0] + e)).find(d[1])
			.outerHeight() || 0, n = e.find("." + d[6]).outerHeight() || 0, e.css({
					height: t + i + n
				}), e.find("iframe").css({
					height: t
				}))
		}, g.iframeSrc = function(e, t) {
			m("#" + d[0] + e).find("iframe").attr("src", t)
		}, g.style = function(e, t, i) {
			var e = m("#" + d[0] + e),
				n = e.find(".layui-layer-content"),
				a = e.attr("type"),
				o = e.find(d[1]).outerHeight() || 0,
				s = e.find("." + d[6]).outerHeight() || 0;
			e.attr("minLeft");
			a !== c.type[3] && a !== c.type[4] && (i || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t
					.height) - o - s <= 64 && (t.height = 64 + o + s)), e.css(t), s = e.find("." + d[6])
				.outerHeight(), a === c.type[2] ? e.find("iframe").css({
					height: parseFloat(t.height) - o - s
				}) : n.css({
					height: parseFloat(t.height) - o - s - parseFloat(n.css("padding-top")) - parseFloat(n
						.css("padding-bottom"))
				}))
		}, g.min = function(e, t) {
			t = t || {};
			var i = m("#" + d[0] + e),
				n = m("#" + d.SHADE + e),
				a = i.find(d[1]).outerHeight() || 0,
				o = i.attr("minLeft") || 181 * c.minIndex + "px",
				s = i.css("position"),
				r = {
					width: 180,
					height: a,
					position: "fixed",
					overflow: "hidden"
				};
			c.record(i), c.minLeft[0] && (o = c.minLeft[0], c.minLeft.shift()), t.minStack && (r.left = o, r.top = f
					.height() - a, i.attr("minLeft") || c.minIndex++, i.attr("minLeft", o)), i.attr("position", s),
				g.style(e, r, !0), i.find(".layui-layer-min").hide(), "page" === i.attr("type") && i.find(d[4])
				.hide(), c.rescollbar(e), n.hide()
		}, g.restore = function(e) {
			var t = m("#" + d[0] + e),
				i = m("#" + d.SHADE + e),
				n = t.attr("area").split(",");
			t.attr("type");
			g.style(e, {
					width: parseFloat(n[0]),
					height: parseFloat(n[1]),
					top: parseFloat(n[2]),
					left: parseFloat(n[3]),
					position: t.attr("position"),
					overflow: "visible"
				}, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min")
				.show(), "page" === t.attr("type") && t.find(d[4]).show(), c.rescollbar(e), i.show()
		}, g.full = function(t) {
			var i = m("#" + d[0] + t);
			c.record(i), d.html.attr("layer-full") || d.html.css("overflow", "hidden").attr("layer-full", t),
				clearTimeout(void 0), setTimeout(function() {
					var e = "fixed" === i.css("position");
					g.style(t, {
						top: e ? 0 : f.scrollTop(),
						left: e ? 0 : f.scrollLeft(),
						width: f.width(),
						height: f.height()
					}, !0), i.find(".layui-layer-min").hide()
				}, 100)
		}, g.title = function(e, t) {
			m("#" + d[0] + (t || g.index)).find(d[1]).html(e)
		}, g.close = function(n, a) {
			var o, e, s = m("#" + d[0] + n),
				r = s.attr("type");
			s[0] && (o = "layui-layer-wrap", e = function() {
					if (r === c.type[1] && "object" === s.attr("conType")) {
						s.children(":not(." + d[5] + ")").remove();
						for (var e = s.find("." + o), t = 0; t < 2; t++) e.unwrap();
						e.css("display", e.data("display")).removeClass(o)
					} else {
						if (r === c.type[2]) try {
							var i = m("#" + d[4] + n)[0];
							i.contentWindow.document.write(""), i.contentWindow.close(), s.find("." + d[5])[
								0].removeChild(i)
						} catch (e) {}
						s[0].innerHTML = "", s.remove()
					}
					"function" == typeof c.end[n] && c.end[n](), delete c.end[n], "function" == typeof a && a()
				}, s.data("isOutAnim") && s.addClass("layer-anim layer-anim-close"), m("#layui-layer-moves, #" +
					d.SHADE + n).remove(), 6 == g.ie && c.reselect(), c.rescollbar(n), s.attr("minLeft") && (c
					.minIndex--, c.minLeft.push(s.attr("minLeft"))), g.ie && g.ie < 10 || !s.data("isOutAnim") ?
				e() : setTimeout(function() {
					e()
				}, 200))
		}, g.closeAll = function(n, a) {
			"function" == typeof n && (a = n, n = null);
			var o = m("." + d[0]);
			m.each(o, function(e) {
				var t = m(this),
					i = n ? t.attr("type") === n : 1;
				i && g.close(t.attr("times"), e === o.length - 1 ? a : null)
			}), 0 === o.length && "function" == typeof a && a()
		}, g.cache || {});
	g.prompt = function(i, n) {
		var e = "";
		"function" == typeof(i = i || {}) && (n = i), i.area && (e = 'style="width: ' + (t = i.area)[0] +
			"; height: " + t[1] + ';"', delete i.area);
		var a, t = 2 == i.formType ? '<textarea class="layui-layer-input"' + e + "></textarea>" : '<input type="' +
			(1 == i.formType ? "password" : "text") + '" class="layui-layer-input">',
			o = i.success;
		return delete i.success, g.open(m.extend({
			type: 1,
			btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
			content: t,
			skin: "layui-layer-prompt" + h("prompt"),
			maxWidth: f.width(),
			success: function(e) {
				(a = e.find(".layui-layer-input")).val(i.value || "").focus(), "function" ==
					typeof o && o(e)
			},
			resize: !1,
			yes: function(e) {
				var t = a.val();
				"" === t ? a.focus() : t.length > (i.maxlength || 500) ? g.tips(
					"&#x6700;&#x591A;&#x8F93;&#x5165;" + (i.maxlength || 500) +
					"&#x4E2A;&#x5B57;&#x6570;", a, {
						tips: 1
					}) : n && n(t, e, a)
			}
		}, i))
	}, g.tab = function(n) {
		var a = (n = n || {}).tab || {},
			o = "layui-this",
			s = n.success;
		return delete n.success, g.open(m.extend({
			type: 1,
			skin: "layui-layer-tab" + h("tab"),
			resize: !1,
			title: function() {
				var e = a.length,
					t = 1,
					i = "";
				if (0 < e)
					for (i = '<span class="' + o + '">' + a[0].title + "</span>"; t < e; t++) i +=
						"<span>" + a[t].title + "</span>";
				return i
			}(),
			content: '<ul class="layui-layer-tabmain">' + function() {
				var e = a.length,
					t = 1,
					i = "";
				if (0 < e)
					for (i = '<li class="layui-layer-tabli ' + o + '">' + (a[0].content ||
							"no content") + "</li>"; t < e; t++) i +=
						'<li class="layui-layer-tabli">' + (a[t].content || "no  content") +
						"</li>";
				return i
			}() + "</ul>",
			success: function(e) {
				var t = e.find(".layui-layer-title").children(),
					i = e.find(".layui-layer-tabmain").children();
				t.on("mousedown", function(e) {
					e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
					var e = m(this),
						t = e.index();
					e.addClass(o).siblings().removeClass(o), i.eq(t).show().siblings()
					.hide(), "function" == typeof n.change && n.change(t)
				}), "function" == typeof s && s(e)
			}
		}, n))
	}, g.photos = function(i, e, n) {
		var a = {};
		if ((i = i || {}).photos) {
			var t = !("string" == typeof i.photos || i.photos instanceof m),
				o = t ? i.photos : {},
				s = o.data || [],
				r = o.start || 0,
				l = (a.imgIndex = 1 + (0 | r), i.img = i.img || "img", i.success);
			if (delete i.success, t) {
				if (0 === s.length) return g.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
			} else {
				var f = m(i.photos),
					c = function() {
						s = [], f.find(i.img).each(function(e) {
							var t = m(this);
							t.attr("layer-index", e), s.push({
								alt: t.attr("alt"),
								pid: t.attr("layer-pid"),
								src: t.attr("layer-src") || t.attr("src"),
								thumb: t.attr("src")
							})
						})
					};
				if (c(), 0 === s.length) return;
				if (e || f.on("click", i.img, function() {
						c();
						var e = m(this).attr("layer-index");
						g.photos(m.extend(i, {
							photos: {
								start: e,
								data: s,
								tab: i.tab
							},
							full: i.full
						}), !0)
					}), !e) return
			}
			a.imgprev = function(e) {
				a.imgIndex--, a.imgIndex < 1 && (a.imgIndex = s.length), a.tabimg(e)
			}, a.imgnext = function(e, t) {
				a.imgIndex++, a.imgIndex > s.length && (a.imgIndex = 1, t) || a.tabimg(e)
			}, a.keyup = function(e) {
				var t;
				a.end || (t = e.keyCode, e.preventDefault(), 37 === t ? a.imgprev(!0) : 39 === t ? a.imgnext(!
					0) : 27 === t && g.close(a.index))
			}, a.tabimg = function(e) {
				if (!(s.length <= 1)) return o.start = a.imgIndex - 1, g.close(a.index), g.photos(i, !0, e)
			}, a.event = function() {
				a.bigimg.find(".layui-layer-imgprev").on("click", function(e) {
					e.preventDefault(), a.imgprev(!0)
				}), a.bigimg.find(".layui-layer-imgnext").on("click", function(e) {
					e.preventDefault(), a.imgnext(!0)
				}), m(document).on("keyup", a.keyup)
			}, a.loadi = g.load(1, {
				shade: !("shade" in i) && .9,
				scrollbar: !1
			});
			var t = s[r].src,
				d = function(e) {
					var t;
					g.close(a.loadi), n && (i.anim = -1), a.index = g.open(m.extend({
						type: 1,
						id: "layui-layer-photos",
						area: (e = [e.width, e.height], t = [m(p).width() - 100, m(p).height() - 100], !
							i.full && (e[0] > t[0] || e[1] > t[1]) && ((t = [e[0] / t[0], e[1] / t[
									1]])[1] < t[0] ? (e[0] = e[0] / t[0], e[1] = e[1] / t[0]) : t[
								0] < t[1] && (e[0] = e[0] / t[1], e[1] = e[1] / t[1])), [e[0] +
								"px", e[1] + "px"
							]),
						title: !1,
						shade: .9,
						shadeClose: !0,
						closeBtn: !1,
						move: ".layui-layer-phimg img",
						moveType: 1,
						scrollbar: !1,
						moveOut: !0,
						anim: 5,
						isOutAnim: !1,
						skin: "layui-layer-photos" + h("photos"),
						content: '<div class="layui-layer-phimg"><img src="' + s[r].src + '" alt="' + (
							s[r].alt || "") + '" layer-pid="' + s[r].pid + '">' + (1 < s.length ?
							'<div class="layui-layer-imgsee"><span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span><div class="layui-layer-imgbar" style="display:' +
							(n ? "block" : "") +
							'"><span class="layui-layer-imgtit"><a href="javascript:;">' + (s[r]
								.alt || "") + "</a><em>" + a.imgIndex + " / " + s.length +
							"</em></span></div></div>" : "") + "</div>",
						success: function(e, t) {
							a.bigimg = e.find(".layui-layer-phimg"), a.imgsee = e.find(
									".layui-layer-imgbar"), a.event(e), i.tab && i.tab(s[r], e),
								"function" == typeof l && l(e)
						},
						end: function() {
							a.end = !0, m(document).off("keyup", a.keyup)
						}
					}, i))
				},
				u = function() {
					g.close(a.loadi), g.msg(
						"&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
							time: 3e4,
							btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
							yes: function() {
								1 < s.length && a.imgnext(!0, !0)
							}
						})
				},
				y = new Image;
			(y.src = t, y.complete) ? d(y): (y.onload = function() {
				y.onload = null, d(y)
			}, y.onerror = function(e) {
				y.onerror = null, u(e)
			})
		}
	}, c.run = function(e) {
		f = (m = e)(p), d.html = m("html"), g.open = function(e) {
			return new t(e).index
		}
	}, p.layui && layui.define ? (g.ready(), layui.define("jquery", function(e) {
		g.path = layui.cache.dir, c.run(layui.$), e("layer", p.layer = g)
	})) : "function" == typeof define && define.amd ? define(["jquery"], function() {
		return c.run(p.jQuery), g
	}) : (g.ready(), c.run(p.jQuery))
}(window);
layui.define("jquery", function(e) {
	"use strict";
	var u = layui.$,
		a = layui.hint(),
		o = {
			fixbar: function(t) {
				function e() {
					r.scrollTop() >= t.showHeight ? i || (g.show(), i = 1) : i && (g.hide(), i = 0)
				}
				var i, n, o = "layui-fixbar",
					a = "layui-fixbar-top",
					r = u(document),
					l = u("body"),
					c = ((t = u.extend({
							showHeight: 200
						}, t)).bar1 = !0 === t.bar1 ? "&#xe606;" : t.bar1, t.bar2 = !0 === t.bar2 ?
						"&#xe607;" : t.bar2, t.bgcolor = t.bgcolor ? "background-color:" + t.bgcolor : "", [
							t.bar1, t.bar2, "&#xe604;"
						]),
					c = u(['<ul class="' + o + '">', t.bar1 ?
						'<li class="layui-icon" lay-type="bar1" style="' + t.bgcolor + '">' + c[0] +
						"</li>" : "", t.bar2 ? '<li class="layui-icon" lay-type="bar2" style="' + t
						.bgcolor + '">' + c[1] + "</li>" : "", '<li class="layui-icon ' + a +
						'" lay-type="top" style="' + t.bgcolor + '">' + c[2] + "</li>", "</ul>"
					].join("")),
					g = c.find("." + a);
				u("." + o)[0] || ("object" == typeof t.css && c.css(t.css), l.append(c), e(), c.find("li")
					.on("click", function() {
						var e = u(this).attr("lay-type");
						"top" === e && u("html,body").animate({
							scrollTop: 0
						}, 200), t.click && t.click.call(this, e)
					}), r.on("scroll", function() {
						clearTimeout(n), n = setTimeout(function() {
							e()
						}, 100)
					}))
			},
			countdown: function(e, t, i) {
				var n = this,
					o = "function" == typeof t,
					a = new Date(e).getTime(),
					r = new Date(!t || o ? (new Date).getTime() : t).getTime(),
					a = a - r,
					l = [Math.floor(a / 864e5), Math.floor(a / 36e5) % 24, Math.floor(a / 6e4) % 60, Math
						.floor(a / 1e3) % 60
					],
					o = (o && (i = t), setTimeout(function() {
						n.countdown(e, r + 1e3, i)
					}, 1e3));
				return i && i(0 < a ? l : [0, 0, 0, 0], t, o), a <= 0 && clearTimeout(o), o
			},
			timeAgo: function(e, t) {
				var i = this,
					n = [
						[],
						[]
					],
					o = (new Date).getTime() - new Date(e).getTime();
				return 26784e5 < o ? (o = new Date(e), n[0][0] = i.digit(o.getFullYear(), 4), n[0][1] = i
						.digit(o.getMonth() + 1), n[0][2] = i.digit(o.getDate()), t || (n[1][0] = i.digit(o
							.getHours()), n[1][1] = i.digit(o.getMinutes()), n[1][2] = i.digit(o
							.getSeconds())), n[0].join("-") + " " + n[1].join(":")) : 864e5 <= o ? (o /
						1e3 / 60 / 60 / 24 | 0) + "\u5929\u524d" : 36e5 <= o ? (o / 1e3 / 60 / 60 | 0) +
					"\u5c0f\u65f6\u524d" : 18e4 <= o ? (o / 1e3 / 60 | 0) + "\u5206\u949f\u524d" : o < 0 ?
					"\u672a\u6765" : "\u521a\u521a"
			},
			digit: function(e, t) {
				var i = "";
				t = t || 2;
				for (var n = (e = String(e)).length; n < t; n++) i += "0";
				return e < Math.pow(10, t) ? i + (0 | e) : e
			},
			toDateString: function(e, t) {
				if (null === e || "" === e) return "";
				var i = this,
					n = new Date(function() {
						if (e) return !isNaN(e) && "string" == typeof e ? parseInt(e) : e
					}() || new Date),
					o = [i.digit(n.getFullYear(), 4), i.digit(n.getMonth() + 1), i.digit(n.getDate())],
					i = [i.digit(n.getHours()), i.digit(n.getMinutes()), i.digit(n.getSeconds())];
				return n.getDate() ? (t = t || "yyyy-MM-dd HH:mm:ss").replace(/yyyy/g, o[0]).replace(/MM/g,
					o[1]).replace(/dd/g, o[2]).replace(/HH/g, i[0]).replace(/mm/g, i[1]).replace(/ss/g,
					i[2]) : (a.error('Invalid Msec for "util.toDateString(Msec)"'), "")
			},
			escape: function(e) {
				return null == e ? "" : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test(e += "") ? e.replace(
						/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
					.replace(/'/g, "&#39;").replace(/"/g, "&quot;") : e
			},
			unescape: function(e) {
				return null == e && (e = ""), (e += "").replace(/\&amp;/g, "&").replace(/\&lt;/g, "<")
					.replace(/\&gt;/g, ">").replace(/\&#39;/g, "'").replace(/\&quot;/g, '"')
			},
			toVisibleArea: function(e) {
				var t, i, n, o, a, r, l, c;
				(e = u.extend({
					margin: 160,
					duration: 200,
					type: "y"
				}, e)).scrollElem[0] && e.thisElem[0] && (t = e.scrollElem, l = e.thisElem, n = (a = "y" ===
					e.type) ? "top" : "left", o = t[i = a ? "scrollTop" : "scrollLeft"](), a = t[a ?
					"height" : "width"](), r = t.offset()[n], c = {}, ((l = l.offset()[n] - r) > a -
					e.margin || l < e.margin) && (c[i] = l - a / 2 + o, t.animate(c, e.duration)))
			},
			event: function(i, n, e) {
				var t = u("body");
				return e = e || "click", n = o.event[i] = u.extend(!0, o.event[i], n) || {}, o.event
					.UTIL_EVENT_CALLBACK = o.event.UTIL_EVENT_CALLBACK || {}, t.off(e, "*[" + i + "]", o
						.event.UTIL_EVENT_CALLBACK[i]), o.event.UTIL_EVENT_CALLBACK[i] = function() {
						var e = u(this),
							t = e.attr(i);
						"function" == typeof n[t] && n[t].call(this, e)
					}, t.on(e, "*[" + i + "]", o.event.UTIL_EVENT_CALLBACK[i]), n
			}
		};
	o.on = o.event, e("util", o)
});
layui.define(["jquery", "laytpl", "lay"], function(e) {
	"use strict";

	function a() {
		var i = this,
			e = i.config,
			t = e.id;
		return a.that[t] = i, {
			config: e,
			reload: function(e) {
				i.reload.call(i, e)
			}
		}
	}

	function i(e) {
		var i = this;
		i.index = ++p.index, i.config = s.extend({}, i.config, p.config, e), i.init()
	}
	var n, t, l, s = layui.$,
		m = layui.laytpl,
		o = layui.hint(),
		r = layui.device().mobile ? "click" : "mousedown",
		u = "dropdown",
		c = "layui_" + u + "_index",
		p = {
			config: {},
			index: layui[u] ? layui[u].index + 1e4 : 0,
			set: function(e) {
				var i = this;
				return i.config = s.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, u, e, i)
			}
		},
		d = "layui-menu-item-up",
		y = "layui-menu-item-down",
		f = "layui-menu-body-title",
		g = "layui-menu-item-group",
		h = "layui-menu-item-parent",
		v = "layui-menu-item-checked",
		w = "layui-menu-item-checked2",
		C = "layui-menu-body-panel",
		V = "layui-menu-body-panel-left",
		k = "." + g + ">." + f;
	i.prototype.config = {
		trigger: "click",
		content: "",
		className: "",
		style: "",
		show: !1,
		isAllowSpread: !0,
		isSpreadItem: !0,
		data: [],
		delay: 300
	}, i.prototype.reload = function(e) {
		var i = this;
		i.config = s.extend({}, i.config, e), i.init(!0)
	}, i.prototype.init = function(e) {
		var i = this,
			t = i.config,
			n = t.elem = s(t.elem);
		return 1 < n.length ? (layui.each(n, function() {
			p.render(s.extend({}, t, {
				elem: this
			}))
		}), i) : !e && n[0] && n.data(c) ? (n = a.getThis(n.data(c))) ? n.reload(t) : void 0 : (t.id =
			"id" in t ? t.id : i.index, t.show && i.render(e), void i.events())
	}, i.prototype.render = function(e) {
		var n = this,
			u = n.config,
			i = s("body"),
			d = function(r, e) {
				return layui.each(e, function(e, i) {
					var t, n = i.child && 0 < i.child.length,
						a = ("isSpreadItem" in i ? i : u).isSpreadItem,
						l = i.templet ? m(i.templet).render(i) : u.templet ? m(u.templet).render(
						i) : i.title,
						o = (n && (i.type = i.type || "parent"), i.type ? {
							group: "group",
							parent: "parent",
							"-": "-"
						} [i.type] || "parent" : "");
					("-" === o || i.title || i.id || n) && ((l = s(["<li" + (t = {
						group: "layui-menu-item-group" + (u.isAllowSpread ? a ?
							" layui-menu-item-down" :
							" layui-menu-item-up" : ""),
						parent: h,
						"-": "layui-menu-item-divider"
					}, n || o ? ' class="' + t[o] + '"' : "") + ">", (t = "href" in
						i ? '<a href="' + i.href + '" target="' + (i.target ||
							"_self") + '">' + l + "</a>" : l, n ? '<div class="' +
						f + '">' + t + ("parent" === o ?
							'<i class="layui-icon layui-icon-right"></i>' :
							"group" === o && u.isAllowSpread ?
							'<i class="layui-icon layui-icon-' + (a ? "up" :
							"down") + '"></i>' : "") + "</div>" : '<div class="' +
						f + '">' + t + "</div>"), "</li>"].join(""))).data("item", i), n && (a =
						s('<div class="layui-panel layui-menu-body-panel"></div>'), t = s(
							"<ul></ul>"), "parent" === o ? (a.append(d(t, i.child)), l.append(
							a)) : l.append(d(t, i.child))), r.append(l))
				}), r
			},
			t = ['<div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit">',
				"</div>"
			].join("");
		!(e = "contextmenu" !== u.trigger && !lay.isTopElem(u.elem[0]) ? e : !0) && u.elem.data(c +
			"_opened") || (n.elemView = s(t), n.elemView.append(u.content || (e = s(
				'<ul class="layui-menu layui-dropdown-menu"></ul>'), 0 < u.data.length ? d(e, u
				.data) : e.html('<li class="layui-menu-item-none">no menu</li>'), e)), u.className && n
			.elemView.addClass(u.className), u.style && n.elemView.attr("style", u.style), p.thisId = u
			.id, n.remove(), i.append(n.elemView), u.elem.data(c + "_opened", !0), n.position(), (a
				.prevElem = n.elemView).data("prevElem", u.elem), n.elemView.find(".layui-menu").on(r,
				function(e) {
					layui.stope(e)
				}), n.elemView.find(".layui-menu li").on("click", function(e) {
				var i = s(this),
					t = i.data("item") || {};
				t.child && 0 < t.child.length || "-" === t.type || (n.remove(), "function" ==
					typeof u.click && u.click(t, i))
			}), n.elemView.find(k).on("click", function(e) {
				var i = s(this).parent();
				"group" === (i.data("item") || {}).type && u.isAllowSpread && a.spread(i)
			}), "mouseenter" === u.trigger && n.elemView.on("mouseenter", function() {
				clearTimeout(a.timer)
			}).on("mouseleave", function() {
				n.delayRemove()
			}))
	}, i.prototype.position = function(e) {
		var i = this.config;
		lay.position(i.elem[0], this.elemView[0], {
			position: i.position,
			e: this.e,
			clickType: "contextmenu" === i.trigger ? "right" : null,
			align: i.align || null
		})
	}, i.prototype.remove = function() {
		this.config;
		var e = a.prevElem;
		e && (e.data("prevElem") && e.data("prevElem").data(c + "_opened", !1), e.remove())
	}, i.prototype.delayRemove = function() {
		var e = this,
			i = e.config;
		clearTimeout(a.timer), a.timer = setTimeout(function() {
			e.remove()
		}, i.delay)
	}, i.prototype.events = function() {
		var i = this,
			t = i.config;
		"hover" === t.trigger && (t.trigger = "mouseenter"), i.prevElem && i.prevElem.off(t.trigger, i
			.prevElemCallback), i.prevElem = t.elem, i.prevElemCallback = function(e) {
			clearTimeout(a.timer), i.e = e, i.render(), e.preventDefault(), "function" == typeof t
				.ready && t.ready(i.elemView, t.elem, i.e.target)
		}, t.elem.on(t.trigger, i.prevElemCallback), "mouseenter" === t.trigger && t.elem.on(
			"mouseleave",
			function() {
				i.delayRemove()
			})
	}, a.that = {}, a.getThis = function(e) {
		var i = a.that[e];
		return i || o.error(e ? u + " instance with ID '" + e + "' not found" : "ID argument required"), i
	}, a.spread = function(e) {
		var i = e.children("." + f).find(".layui-icon");
		e.hasClass(d) ? (e.removeClass(d).addClass(y), i.removeClass("layui-icon-down").addClass(
			"layui-icon-up")) : (e.removeClass(y).addClass(d), i.removeClass("layui-icon-up").addClass(
			"layui-icon-down"))
	}, n = s(window), t = s(document), n.on("resize", function() {
		if (p.thisId) {
			var e = a.getThis(p.thisId);
			if (e) {
				if (!e.elemView[0] || !s(".layui-dropdown")[0]) return !1;
				"contextmenu" === e.config.trigger ? e.remove() : e.position()
			}
		}
	}), t.on(r, function(e) {
		var i, t;
		!p.thisId || (i = a.getThis(p.thisId)) && (t = i.config, !lay.isTopElem(t.elem[0]) &&
			"contextmenu" !== t.trigger && (e.target === t.elem[0] || t.elem.find(e.target)[0] || e
				.target === i.elemView[0] || i.elemView && i.elemView.find(e.target)[0]) || i
			.remove())
	}), l = ".layui-menu:not(.layui-dropdown-menu) li", t.on("click", l, function(e) {
		var i = s(this),
			t = i.parents(".layui-menu").eq(0),
			n = i.hasClass(g) || i.hasClass(h),
			a = t.attr("lay-filter") || t.attr("id"),
			l = lay.options(this);
		i.hasClass("layui-menu-item-divider") || n || (t.find("." + v).removeClass(v), t.find("." + w)
			.removeClass(w), i.addClass(v), i.parents("." + h).addClass(w), layui.event.call(this,
				u, "click(" + a + ")", l))
	}), t.on("click", l + k, function(e) {
		var i = s(this).parents("." + g + ":eq(0)"),
			t = lay.options(i[0]);
		"isAllowSpread" in t && !t.isAllowSpread || a.spread(i)
	}), l = ".layui-menu ." + h, t.on("mouseenter", l, function(e) {
		var i, t = s(this).find("." + C);
		t[0] && ((i = t[0].getBoundingClientRect()).right > n.width() && (t.addClass(V), (i = t[0]
				.getBoundingClientRect()).left < 0 && t.removeClass(V)), i.bottom > n.height() && t
			.eq(0).css("margin-top", -(i.bottom - n.height())))
	}).on("mouseleave", l, function(e) {
		var i = s(this).children("." + C);
		i.removeClass(V), i.css("margin-top", 0)
	}), p.reload = function(e, i) {
		e = a.getThis(e);
		return e ? (e.reload(i), a.call(e)) : this
	}, p.render = function(e) {
		e = new i(e);
		return a.call(e)
	}, e(u, p)
});
layui.define("jquery", function(e) {
	"use strict";

	function i(e) {
		var i = this;
		i.index = ++t.index, i.config = h.extend({}, i.config, t.config, e), i.render()
	}
	var h = layui.jquery,
		t = {
			config: {},
			index: layui.slider ? layui.slider.index + 1e4 : 0,
			set: function(e) {
				var i = this;
				return i.config = h.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, a, e, i)
			}
		},
		a = "slider",
		d = "layui-disabled",
		y = "layui-slider-bar",
		g = "layui-slider-wrap",
		b = "layui-slider-wrap-btn",
		x = "layui-slider-tips",
		T = "layui-slider-input-txt",
		w = "layui-slider-hover";
	i.prototype.config = {
		type: "default",
		min: 0,
		max: 100,
		value: 0,
		step: 1,
		showstep: !1,
		tips: !0,
		input: !1,
		range: !1,
		height: 200,
		disabled: !1,
		theme: "#009688"
	}, i.prototype.render = function() {
		var t = this,
			a = t.config,
			e = (a.step < 1 && (a.step = 1), a.max < a.min && (a.max = a.min + a.step), a.range ? (a.value =
				"object" == typeof a.value ? a.value : [a.min, a.value], i = Math.min(a.value[0], a
					.value[1]), l = Math.max(a.value[0], a.value[1]), a.value[0] = i > a.min ? i : a
				.min, a.value[1] = l > a.min ? l : a.min, a.value[0] = a.value[0] > a.max ? a.max : a
				.value[0], a.value[1] = a.value[1] > a.max ? a.max : a.value[1], i = Math.floor((a
					.value[0] - a.min) / (a.max - a.min) * 100), n = (l = Math.floor((a.value[1] - a
					.min) / (a.max - a.min) * 100)) - i + "%", i += "%", l += "%") : ("object" ==
				typeof a.value && (a.value = Math.min.apply(null, a.value)), a.value < a.min && (a
					.value = a.min), a.value > a.max && (a.value = a.max), n = Math.floor((a.value - a
					.min) / (a.max - a.min) * 100) + "%"), a.disabled ? "#c2c2c2" : a.theme),
			i = '<div class="layui-slider ' + ("vertical" === a.type ? "layui-slider-vertical" : "") +
			'">' + (a.tips ? '<div class="layui-slider-tips"></div>' : "") +
			'<div class="layui-slider-bar" style="background:' + e + "; " + ("vertical" === a.type ?
				"height" : "width") + ":" + n + ";" + ("vertical" === a.type ? "bottom" : "left") + ":" + (
				i || 0) + ';"></div><div class="layui-slider-wrap" style="' + ("vertical" === a.type ?
				"bottom" : "left") + ":" + (i || n) +
			';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + e + ';"></div></div>' + (a
				.range ? '<div class="layui-slider-wrap" style="' + ("vertical" === a.type ? "bottom" :
					"left") + ":" + l + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' +
				e + ';"></div></div>' : "") + "</div>",
			n = h(a.elem),
			l = n.next(".layui-slider");
		if (l[0] && l.remove(), t.elemTemp = h(i), a.range ? (t.elemTemp.find("." + g).eq(0).data("value", a
				.value[0]), t.elemTemp.find("." + g).eq(1).data("value", a.value[1])) : t.elemTemp.find(
				"." + g).data("value", a.value), n.html(t.elemTemp), "vertical" === a.type && t.elemTemp
			.height(a.height + "px"), a.showstep) {
			for (var s = (a.max - a.min) / a.step, r = "", o = 1; o < 1 + s; o++) {
				var u = 100 * o / s;
				u < 100 && (r += '<div class="layui-slider-step" style="' + ("vertical" === a.type ?
					"bottom" : "left") + ":" + u + '%"></div>')
			}
			t.elemTemp.append(r)
		}
		a.input && !a.range && (e = h(
			'<div class="layui-slider-input layui-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>'
			), n.css("position", "relative"), n.append(e), n.find("." + T).children("input").val(a
			.value), "vertical" === a.type ? e.css({
			left: 0,
			top: -48
		}) : t.elemTemp.css("margin-right", e.outerWidth() + 15)), a.disabled ? (t.elemTemp.addClass(d),
			t.elemTemp.find("." + b).addClass(d)) : t.slide(), t.elemTemp.find("." + b).on("mouseover",
			function() {
				var e = "vertical" === a.type ? a.height : t.elemTemp[0].offsetWidth,
					i = t.elemTemp.find("." + g),
					i = ("vertical" === a.type ? e - h(this).parent()[0].offsetTop - i.height() : h(
						this).parent()[0].offsetLeft) / e * 100,
					e = h(this).parent().data("value"),
					e = a.setTips ? a.setTips(e) : e;
				t.elemTemp.find("." + x).html(e), "vertical" === a.type ? t.elemTemp.find("." + x).css({
					bottom: i + "%",
					"margin-bottom": "20px",
					display: "inline-block"
				}) : t.elemTemp.find("." + x).css({
					left: i + "%",
					display: "inline-block"
				})
			}).on("mouseout", function() {
			t.elemTemp.find("." + x).css("display", "none")
		})
	}, i.prototype.slide = function(e, i, t) {
		var r = this.config,
			o = this.elemTemp,
			u = function() {
				return "vertical" === r.type ? r.height : o[0].offsetWidth
			},
			d = o.find("." + g),
			s = o.next(".layui-slider-input"),
			c = s.children("." + T).children("input").val(),
			p = 100 / ((r.max - r.min) / Math.ceil(r.step)),
			v = function(e, i) {
				e = 100 < (e = 100 < Math.ceil(e) * p ? Math.ceil(e) * p : Math.round(e) * p) ? 100 : e, d
					.eq(i).css("vertical" === r.type ? "bottom" : "left", e + "%");
				var t, a = m(d[0].offsetLeft),
					n = r.range ? m(d[1].offsetLeft) : 0,
					l = ("vertical" === r.type ? (o.find("." + x).css({
							bottom: e + "%",
							"margin-bottom": "20px"
						}), a = m(u() - d[0].offsetTop - d.height()), n = r.range ? m(u() - d[1]
							.offsetTop - d.height()) : 0) : o.find("." + x).css("left", e + "%"), a = 100 <
						a ? 100 : a, n = 100 < n ? 100 : n, Math.min(a, n)),
					a = Math.abs(a - n),
					n = ("vertical" === r.type ? o.find("." + y).css({
						height: a + "%",
						bottom: l + "%"
					}) : o.find("." + y).css({
						width: a + "%",
						left: l + "%"
					}), r.min + Math.round((r.max - r.min) * e / 100));
				c = n, s.children("." + T).children("input").val(c), d.eq(i).data("value", n), o.find("." +
					x).html(r.setTips ? r.setTips(n) : n), r.range && (t = [d.eq(0).data("value"), d.eq(
					1).data("value")])[0] > t[1] && t.reverse(), r.change && r.change(r.range ? t : n)
			},
			m = function(e) {
				var i = e / u() * 100 / p,
					t = Math.round(i) * p;
				return t = e == u() ? Math.ceil(i) * p : t
			},
			f = h(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join(""));
		if ("set" === e) return v(i, t);
		o.find("." + b).each(function(l) {
			var s = h(this);
			s.on("mousedown", function(e) {
				e = e || window.event;
				var i, t = s.parent()[0].offsetLeft,
					a = e.clientX;
				"vertical" === r.type && (t = u() - s.parent()[0].offsetTop - d.height(),
					a = e.clientY);

				function n() {
					i && i(), f.remove()
				}
				e = function(e) {
					e = e || window.event;
					var i = t + ("vertical" === r.type ? a - e.clientY : e.clientX - a),
						i = (i = (i = i < 0 ? 0 : i) > u() ? u() : i) / u() * 100 / p;
					v(i, l), s.addClass(w), o.find("." + x).show(), e.preventDefault()
				}, i = function() {
					s.removeClass(w), o.find("." + x).hide()
				}, h("#LAY-slider-moving")[0] || h("body").append(f), f.on("mousemove",
					e), f.on("mouseup", n).on("mouseleave", n)
			})
		}), o.on("click", function(e) {
			var i, t = h("." + b);
			!t.is(event.target) && 0 === t.has(event.target).length && t.length && (i = (t = (t = (
					t = "vertical" === r.type ? u() - e.clientY + h(this).offset().top :
					e.clientX - h(this).offset().left) < 0 ? 0 : t) > u() ? u() : t) / u() *
				100 / p, t = r.range ? "vertical" === r.type ? Math.abs(t - parseInt(h(d[0])
					.css("bottom"))) > Math.abs(t - parseInt(h(d[1]).css("bottom"))) ? 1 : 0 :
				Math.abs(t - d[0].offsetLeft) > Math.abs(t - d[1].offsetLeft) ? 1 : 0 : 0, v(i,
					t), e.preventDefault())
		}), s.children(".layui-slider-input-btn").children("i").each(function(i) {
			h(this).on("click", function() {
				c = s.children("." + T).children("input").val();
				var e = ((c = 1 == i ? c - r.step < r.min ? r.min : Number(c) - r.step :
						Number(c) + r.step > r.max ? r.max : Number(c) + r.step) - r
					.min) / (r.max - r.min) * 100 / p;
				v(e, 0)
			})
		});

		function a() {
			var e = this.value,
				e = (e = (e = (e = isNaN(e) ? 0 : e) < r.min ? r.min : e) > r.max ? r.max : e, ((this
					.value = e) - r.min) / (r.max - r.min) * 100 / p);
			v(e, 0)
		}
		s.children("." + T).children("input").on("keydown", function(e) {
			13 === e.keyCode && (e.preventDefault(), a.call(this))
		}).on("change", a)
	}, i.prototype.events = function() {
		this.config
	}, t.render = function(e) {
		e = new i(e);
		return function() {
			var t = this,
				a = t.config;
			return {
				setValue: function(e, i) {
					return a.value = e, t.slide("set", e, i || 0)
				},
				config: a
			}
		}.call(e)
	}, e(a, t)
});
layui.define(["jquery", "lay"], function(e) {
	"use strict";

	function y(e) {
		var i = {
				h: 0,
				s: 0,
				b: 0
			},
			o = Math.min(e.r, e.g, e.b),
			r = Math.max(e.r, e.g, e.b),
			n = r - o;
		return i.b = r, i.s = 0 != r ? 255 * n / r : 0, 0 != i.s ? e.r == r ? i.h = (e.g - e.b) / n : e.g == r ?
			i.h = 2 + (e.b - e.r) / n : i.h = 4 + (e.r - e.g) / n : i.h = -1, r == o && (i.h = 0), i.h *= 60, i
			.h < 0 && (i.h += 360), i.s *= 100 / 255, i.b *= 100 / 255, i
	}

	function m(e) {
		var i, o = {},
			r = e.h,
			n = 255 * e.s / 100,
			e = 255 * e.b / 100;
		return 0 == n ? o.r = o.g = o.b = e : (e = r % 60 * ((i = e) - (n = (255 - n) * e / 255)) / 60, (r =
			360 == r ? 0 : r) < 60 ? (o.r = i, o.b = n, o.g = n + e) : r < 120 ? (o.g = i, o.b = n, o
			.r = i - e) : r < 180 ? (o.g = i, o.r = n, o.b = n + e) : r < 240 ? (o.b = i, o.r = n, o.g =
			i - e) : r < 300 ? (o.b = i, o.g = n, o.r = n + e) : r < 360 ? (o.r = i, o.g = n, o.b = i -
			e) : (o.r = 0, o.g = 0, o.b = 0)), {
			r: Math.round(o.r),
			g: Math.round(o.g),
			b: Math.round(o.b)
		}
	}

	function f(e) {
		var o = [(e = m(e)).r.toString(16), e.g.toString(16), e.b.toString(16)];
		return P.each(o, function(e, i) {
			1 == i.length && (o[e] = "0" + i)
		}), o.join("")
	}

	function x(e) {
		return {
			r: (e = e.match(/[0-9]{1,3}/g) || [])[0],
			g: e[1],
			b: e[2]
		}
	}

	function n(e) {
		this.index = ++i.index, this.config = P.extend({}, this.config, i.config, e), this.render()
	}
	var P = layui.jquery,
		o = layui.lay,
		r = layui.device().mobile ? "click" : "mousedown",
		i = {
			config: {},
			index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0,
			set: function(e) {
				var i = this;
				return i.config = P.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, "colorpicker", e, i)
			}
		},
		l = "layui-colorpicker",
		t = ".layui-colorpicker-main",
		C = "layui-icon-down",
		B = "layui-icon-close",
		w = "layui-colorpicker-trigger-span",
		D = "layui-colorpicker-trigger-i",
		j = "layui-colorpicker-side-slider",
		E = "layui-colorpicker-basis",
		F = "layui-colorpicker-alpha-bgcolor",
		H = "layui-colorpicker-alpha-slider",
		M = "layui-colorpicker-basis-cursor",
		Y = "layui-colorpicker-main-input",
		I = P(window),
		c = P(document);
	n.prototype.config = {
		color: "",
		size: null,
		alpha: !1,
		format: "hex",
		predefine: !1,
		colors: ["#009688", "#5FB878", "#1E9FFF", "#FF5722", "#FFB800", "#01AAED", "#999", "#c00",
			"#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585", "rgb(0, 186, 189)",
			"rgb(255, 120, 0)", "rgb(250, 212, 0)", "#393D49", "rgba(0,0,0,.5)",
			"rgba(255, 69, 0, 0.68)", "rgba(144, 240, 144, 0.5)", "rgba(31, 147, 255, 0.73)"
		]
	}, n.prototype.render = function() {
		var e = this,
			i = e.config,
			o = P(['<div class="layui-unselect layui-colorpicker">', "<span " + ("rgb" == i.format && i
					.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : "") + ">",
				'<span class="layui-colorpicker-trigger-span" ', 'lay-type="' + ("rgb" == i.format ? i
					.alpha ? "rgba" : "torgb" : "") + '" ', 'style="' + (o = "", i.color ? (o = i.color,
					3 < (i.color.match(/[0-9]{1,3}/g) || []).length && (i.alpha && "rgb" == i
						.format || (o = "#" + f(y(x(i.color))))), "background: " + o) : o) + '">',
				'<i class="layui-icon layui-colorpicker-trigger-i ' + (i.color ? C : B) + '"></i>',
				"</span>", "</span>", "</div>"
			].join("")),
			r = P(i.elem);
		i.size && o.addClass("layui-colorpicker-" + i.size), r.addClass("layui-inline").html(e
			.elemColorBox = o), e.color = e.elemColorBox.find("." + w)[0].style.background, e.events()
	}, n.prototype.renderPicker = function() {
		var o, e = this,
			i = e.config,
			r = e.elemColorBox[0],
			i = e.elemPicker = P(['<div id="layui-colorpicker' + e.index + '" data-index="' + e.index +
				'" class="layui-anim layui-anim-downbit layui-colorpicker-main">',
				'<div class="layui-colorpicker-main-wrapper">', '<div class="layui-colorpicker-basis">',
				'<div class="layui-colorpicker-basis-white"></div>',
				'<div class="layui-colorpicker-basis-black"></div>',
				'<div class="layui-colorpicker-basis-cursor"></div>', "</div>",
				'<div class="layui-colorpicker-side">',
				'<div class="layui-colorpicker-side-slider"></div>', "</div>", "</div>",
				'<div class="layui-colorpicker-main-alpha ' + (i.alpha ? "layui-show" : "") + '">',
				'<div class="layui-colorpicker-alpha-bgcolor">',
				'<div class="layui-colorpicker-alpha-slider"></div>', "</div>", "</div>", i.predefine ?
				(o = ['<div class="layui-colorpicker-main-pre">'], layui.each(i.colors, function(e, i) {
					o.push(['<div class="layui-colorpicker-pre' + (3 < (i.match(
								/[0-9]{1,3}/g) || []).length ?
							" layui-colorpicker-pre-isalpha" : "") + '">',
						'<div style="background:' + i + '"></div>', "</div>"
					].join(""))
				}), o.push("</div>"), o.join("")) : "", '<div class="layui-colorpicker-main-input">',
				'<div class="layui-inline">', '<input type="text" class="layui-input">', "</div>",
				'<div class="layui-btn-container">',
				'<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">\u6e05\u7a7a</button>',
				'<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">\u786e\u5b9a</button>',
				"</div", "</div>", "</div>"
			].join(""));
		e.elemColorBox.find("." + w)[0];
		P(t)[0] && P(t).data("index") == e.index ? e.removePicker(n.thisElemInd) : (e.removePicker(n
				.thisElemInd), P("body").append(i)), n.thisElemInd = e.index, n.thisColor = r.style
			.background, e.position(), e.pickerEvents()
	}, n.prototype.removePicker = function(e) {
		this.config;
		return P("#layui-colorpicker" + (e || this.index)).remove(), this
	}, n.prototype.position = function() {
		var e = this,
			i = e.config;
		return o.position(e.bindElem || e.elemColorBox[0], e.elemPicker[0], {
			position: i.position,
			align: "center"
		}), e
	}, n.prototype.val = function() {
		var e, i = this,
			o = (i.config, i.elemColorBox.find("." + w)),
			r = i.elemPicker.find("." + Y),
			n = o[0].style.backgroundColor;
		n ? (e = y(x(n)), o = o.attr("lay-type"), i.select(e.h, e.s, e.b), "torgb" === o && r.find("input")
			.val(n), "rgba" === o && (e = x(n), 3 == (n.match(/[0-9]{1,3}/g) || []).length ? (r.find(
						"input").val("rgba(" + e.r + ", " + e.g + ", " + e.b + ", 1)"), i.elemPicker
					.find("." + H).css("left", 280)) : (r.find("input").val(n), o = 280 * n.slice(n
					.lastIndexOf(",") + 1, n.length - 1), i.elemPicker.find("." + H).css("left", o)), i
				.elemPicker.find("." + F)[0].style.background = "linear-gradient(to right, rgba(" + e
				.r + ", " + e.g + ", " + e.b + ", 0), rgb(" + e.r + ", " + e.g + ", " + e.b + "))")) : (
			i.select(0, 100, 100), r.find("input").val(""), i.elemPicker.find("." + F)[0].style
			.background = "", i.elemPicker.find("." + H).css("left", 280))
	}, n.prototype.side = function() {
		function s(e, i, o, r) {
			n.select(e, i, o), e = m({
					h: e,
					s: i,
					b: o
				}), b.addClass(C).removeClass(B), t[0].style.background = "rgb(" + e.r + ", " + e.g + ", " +
				e.b + ")", "torgb" === c && n.elemPicker.find("." + Y).find("input").val("rgb(" + e.r +
					", " + e.g + ", " + e.b + ")"), "rgba" === c && (u.css("left", 280 * r), n.elemPicker
					.find("." + Y).find("input").val("rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + r +
						")"), t[0].style.background = "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + r +
					")", f[0].style.background = "linear-gradient(to right, rgba(" + e.r + ", " + e.g +
					", " + e.b + ", 0), rgb(" + e.r + ", " + e.g + ", " + e.b + "))"), l.change && l.change(
					n.elemPicker.find("." + Y).find("input").val())
		}

		function i(e) {
			P("#LAY-colorpicker-moving")[0] || P("body").append(k), k.on("mousemove", e), k.on("mouseup",
				function() {
					k.remove()
				}).on("mouseleave", function() {
				k.remove()
			})
		}
		var n = this,
			l = n.config,
			t = n.elemColorBox.find("." + w),
			c = t.attr("lay-type"),
			a = n.elemPicker.find(".layui-colorpicker-side"),
			e = n.elemPicker.find("." + j),
			d = n.elemPicker.find("." + E),
			r = n.elemPicker.find("." + M),
			f = n.elemPicker.find("." + F),
			u = n.elemPicker.find("." + H),
			p = e[0].offsetTop / 180 * 360,
			g = 100 - (r[0].offsetTop + 3) / 180 * 100,
			h = (r[0].offsetLeft + 3) / 260 * 100,
			v = Math.round(u[0].offsetLeft / 280 * 100) / 100,
			b = n.elemColorBox.find("." + D),
			o = n.elemPicker.find(".layui-colorpicker-pre").children("div"),
			k = P(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div>'].join(""));
		e.on("mousedown", function(e) {
			var r = this.offsetTop,
				n = e.clientY;
			i(function(e) {
				var i = r + (e.clientY - n),
					o = a[0].offsetHeight,
					o = (i = o < (i = i < 0 ? 0 : i) ? o : i) / 180 * 360;
				s(p = o, h, g, v), e.preventDefault()
			}), e.preventDefault()
		}), a.on("click", function(e) {
			var i = e.clientY - P(this).offset().top,
				i = (i = (i = i < 0 ? 0 : i) > this.offsetHeight ? this.offsetHeight : i) / 180 *
				360;
			s(p = i, h, g, v), e.preventDefault()
		}), r.on("mousedown", function(e) {
			var l = this.offsetTop,
				t = this.offsetLeft,
				c = e.clientY,
				a = e.clientX;
			layui.stope(e), i(function(e) {
				var i = l + (e.clientY - c),
					o = t + (e.clientX - a),
					r = d[0].offsetHeight - 3,
					n = d[0].offsetWidth - 3,
					n = ((o = n < (o = o < -3 ? -3 : o) ? n : o) + 3) / 260 * 100,
					o = 100 - ((i = r < (i = i < -3 ? -3 : i) ? r : i) + 3) / 180 * 100;
				s(p, h = n, g = o, v), e.preventDefault()
			}), e.preventDefault()
		}), d.on("mousedown", function(e) {
			var i = e.clientY - P(this).offset().top - 3 + I.scrollTop(),
				o = e.clientX - P(this).offset().left - 3 + I.scrollLeft(),
				o = ((i = i < -3 ? -3 : i) > this.offsetHeight - 3 && (i = this.offsetHeight - 3), (
					(o = (o = o < -3 ? -3 : o) > this.offsetWidth - 3 ? this.offsetWidth - 3 :
						o) + 3) / 260 * 100),
				i = 100 - (i + 3) / 180 * 100;
			s(p, h = o, g = i, v), layui.stope(e), e.preventDefault(), r.trigger(e, "mousedown")
		}), u.on("mousedown", function(e) {
			var r = this.offsetLeft,
				n = e.clientX;
			i(function(e) {
				var i = r + (e.clientX - n),
					o = f[0].offsetWidth,
					o = (o < (i = i < 0 ? 0 : i) && (i = o), Math.round(i / 280 * 100) /
						100);
				s(p, h, g, v = o), e.preventDefault()
			}), e.preventDefault()
		}), f.on("click", function(e) {
			var i = e.clientX - P(this).offset().left,
				i = ((i = i < 0 ? 0 : i) > this.offsetWidth && (i = this.offsetWidth), Math.round(
					i / 280 * 100) / 100);
			s(p, h, g, v = i), e.preventDefault()
		}), o.each(function() {
			P(this).on("click", function() {
				P(this).parent(".layui-colorpicker-pre").addClass("selected").siblings()
					.removeClass("selected");
				var e = this.style.backgroundColor,
					i = y(x(e)),
					o = e.slice(e.lastIndexOf(",") + 1, e.length - 1);
				p = i.h, h = i.s, g = i.b, 3 == (e.match(/[0-9]{1,3}/g) || []).length && (
					o = 1), v = o, s(i.h, i.s, i.b, o)
			})
		})
	}, n.prototype.select = function(e, i, o, r) {
		var n = this,
			l = (n.config, f({
				h: e,
				s: 100,
				b: 100
			})),
			t = f({
				h: e,
				s: i,
				b: o
			}),
			e = e / 360 * 180,
			o = 180 - o / 100 * 180 - 3,
			i = i / 100 * 260 - 3;
		n.elemPicker.find("." + j).css("top", e), n.elemPicker.find("." + E)[0].style.background = "#" + l,
			n.elemPicker.find("." + M).css({
				top: o,
				left: i
			}), "change" !== r && n.elemPicker.find("." + Y).find("input").val("#" + t)
	}, n.prototype.pickerEvents = function() {
		var c = this,
			a = c.config,
			s = c.elemColorBox.find("." + w),
			d = c.elemPicker.find("." + Y + " input"),
			o = {
				clear: function(e) {
					s[0].style.background = "", c.elemColorBox.find("." + D).removeClass(C).addClass(B),
						c.color = "", a.done && a.done(""), c.removePicker()
				},
				confirm: function(e, i) {
					var o, r, n = d.val(),
						l = n,
						t = {};
					if (-1 < n.indexOf(",") ? (t = y(x(n)), c.select(t.h, t.s, t.b), s[0].style
							.background = l = "#" + f(t), 3 < (n.match(/[0-9]{1,3}/g) || []).length &&
							"rgba" === s.attr("lay-type") && (o = 280 * n.slice(n.lastIndexOf(",") + 1,
									n.length - 1), c.elemPicker.find("." + H).css("left", o), l = s[0]
								.style.background = n)) : (3 == (o = -1 < (o = n).indexOf("#") ? o
							.substring(1) : o).length && (o = (r = o.split(""))[0] + r[0] + r[1] +
							r[1] + r[2] + r[2]), r = {
							r: (o = parseInt(o, 16)) >> 16,
							g: (65280 & o) >> 8,
							b: 255 & o
						}, t = y(r), s[0].style.background = l = "#" + f(t), c.elemColorBox.find(
							"." + D).removeClass(B).addClass(C)), "change" === i) return c.select(t.h, t
						.s, t.b, i), void(a.change && a.change(l));
					c.color = n, a.done && a.done(n), c.removePicker()
				}
			};
		c.elemPicker.on("click", "*[colorpicker-events]", function() {
			var e = P(this),
				i = e.attr("colorpicker-events");
			o[i] && o[i].call(this, e)
		}), d.on("keyup", function(e) {
			var i = P(this);
			o.confirm.call(this, i, 13 === e.keyCode ? null : "change")
		})
	}, n.prototype.events = function() {
		var i = this,
			e = i.config,
			o = i.elemColorBox.find("." + w);
		i.elemColorBox.on("click", function() {
			i.renderPicker(), P(t)[0] && (i.val(), i.side())
		}), e.elem[0] && !i.elemColorBox[0].eventHandler && (c.on(r, function(e) {
			P(e.target).hasClass(l) || P(e.target).parents("." + l)[0] || P(e.target).hasClass(t
				.replace(/\./g, "")) || P(e.target).parents(t)[0] || i.elemPicker && (i
				.color ? (e = y(x(i.color)), i.select(e.h, e.s, e.b)) : i.elemColorBox.find(
					"." + D).removeClass(C).addClass(B), o[0].style.background = i.color ||
				"", i.removePicker())
		}), I.on("resize", function() {
			if (!i.elemPicker || !P(t)[0]) return !1;
			i.position()
		}), i.elemColorBox[0].eventHandler = !0)
	}, i.render = function(e) {
		e = new n(e);
		return function() {
			return {
				config: this.config
			}
		}.call(e)
	}, e("colorpicker", i)
});
layui.define("jquery", function(t) {
	"use strict";

	function i() {
		this.config = {}
	}
	var u = layui.$,
		d = (layui.hint(), layui.device()),
		c = "element",
		r = "layui-this",
		y = "layui-show",
		h = (i.prototype.set = function(t) {
			return u.extend(!0, this.config, t), this
		}, i.prototype.on = function(t, i) {
			return layui.onevent.call(this, c, t, i)
		}, i.prototype.tabAdd = function(t, i) {
			var a, t = u(".layui-tab[lay-filter=" + t + "]"),
				e = t.children(".layui-tab-title"),
				l = e.children(".layui-tab-bar"),
				t = t.children(".layui-tab-content"),
				n = "<li" + (a = [], layui.each(i, function(t, i) {
					/^(title|content)$/.test(t) || a.push("lay-" + t + '="' + i + '"')
				}), 0 < a.length && a.unshift(""), a.join(" ")) + ">" + (i.title || "unnaming") + "</li>";
			return l[0] ? l.before(n) : e.append(n), t.append('<div class="layui-tab-item">' + (i.content ||
				"") + "</div>"), C.hideTabMore(!0), C.tabAuto(), this
		}, i.prototype.tabDelete = function(t, i) {
			t = u(".layui-tab[lay-filter=" + t + "]").children(".layui-tab-title").find('>li[lay-id="' + i +
				'"]');
			return C.tabDelete(null, t), this
		}, i.prototype.tabChange = function(t, i) {
			t = u(".layui-tab[lay-filter=" + t + "]").children(".layui-tab-title").find('>li[lay-id="' + i +
				'"]');
			return C.tabClick.call(t[0], null, null, t), this
		}, i.prototype.tab = function(a) {
			a = a || {}, e.on("click", a.headerElem, function(t) {
				var i = u(this).index();
				C.tabClick.call(this, t, i, null, a)
			})
		}, i.prototype.progress = function(t, i) {
			var a = "layui-progress",
				t = u("." + a + "[lay-filter=" + t + "]").find("." + a + "-bar"),
				a = t.find("." + a + "-text");
			return t.css("width", i).attr("lay-percent", i), a.text(i), this
		}, ".layui-nav"),
		f = "layui-nav-item",
		l = "layui-nav-bar",
		p = "layui-nav-tree",
		b = "layui-nav-child",
		v = "layui-nav-more",
		m = "layui-anim layui-anim-upbit",
		C = {
			tabClick: function(t, i, a, e) {
				e = e || {};
				var a = a || u(this),
					i = i || a.parent().children("li").index(a),
					l = e.headerElem ? a.parent() : a.parents(".layui-tab").eq(0),
					e = e.bodyElem ? u(e.bodyElem) : l.children(".layui-tab-content").children(
						".layui-tab-item"),
					n = a.find("a"),
					n = "javascript:;" !== n.attr("href") && "_blank" === n.attr("target"),
					s = "string" == typeof a.attr("lay-unselect"),
					o = l.attr("lay-filter");
				n || s || (a.addClass(r).siblings().removeClass(r), e.eq(i).addClass(y).siblings()
					.removeClass(y)), layui.event.call(this, c, "tab(" + o + ")", {
					elem: l,
					index: i
				})
			},
			tabDelete: function(t, i) {
				var i = i || u(this).parent(),
					a = i.index(),
					e = i.parents(".layui-tab").eq(0),
					l = e.children(".layui-tab-content").children(".layui-tab-item"),
					n = e.attr("lay-filter");
				i.hasClass(r) && (i.next()[0] ? C.tabClick.call(i.next()[0], null, a + 1) : i.prev()[0] && C
					.tabClick.call(i.prev()[0], null, a - 1)), i.remove(), l.eq(a).remove(), setTimeout(
					function() {
						C.tabAuto()
					}, 50), layui.event.call(this, c, "tabDelete(" + n + ")", {
					elem: e,
					index: a
				})
			},
			tabAuto: function() {
				var e = "layui-tab-bar",
					l = "layui-tab-close",
					n = this;
				u(".layui-tab").each(function() {
					var t = u(this),
						i = t.children(".layui-tab-title"),
						a = (t.children(".layui-tab-content").children(".layui-tab-item"),
							'lay-stope="tabmore"'),
						a = u('<span class="layui-unselect layui-tab-bar" ' + a + "><i " + a +
							' class="layui-icon">&#xe61a;</i></span>');
					n === window && 8 != d.ie && C.hideTabMore(!0), t.attr("lay-allowClose") && i
						.find("li").each(function() {
							var t, i = u(this);
							i.find("." + l)[0] || ((t = u(
								'<i class="layui-icon layui-icon-close layui-unselect ' +
								l + '"></i>')).on("click", C.tabDelete), i.append(t))
						}), "string" != typeof t.attr("lay-unauto") && (i.prop("scrollWidth") > i
							.outerWidth() + 1 ? i.find("." + e)[0] || (i.append(a), t.attr(
								"overflow", ""), a.on("click", function(t) {
								i[this.title ? "removeClass" : "addClass"](
									"layui-tab-more"), this.title = this.title ? "" :
									"\u6536\u7f29"
							})) : (i.find("." + e).remove(), t.removeAttr("overflow")))
				})
			},
			hideTabMore: function(t) {
				var i = u(".layui-tab-title");
				!0 !== t && "tabmore" === u(t.target).attr("lay-stope") || (i.removeClass("layui-tab-more"),
					i.find(".layui-tab-bar").attr("title", ""))
			},
			clickThis: function() {
				var t = u(this),
					i = t.parents(h),
					a = i.attr("lay-filter"),
					e = t.parent(),
					l = t.siblings("." + b),
					n = "string" == typeof e.attr("lay-unselect");
				"javascript:;" !== t.attr("href") && "_blank" === t.attr("target") || n || l[0] || (i.find(
					"." + r).removeClass(r), e.addClass(r)), i.hasClass(p) && (l.removeClass(m), l[0] &&
					(e["none" === l.css("display") ? "addClass" : "removeClass"](f + "ed"), "all" === i
						.attr("lay-shrink") && e.siblings().removeClass(f + "ed"))), layui.event.call(
					this, c, "nav(" + a + ")", t)
			},
			collapse: function() {
				var t = u(this),
					i = t.find(".layui-colla-icon"),
					a = t.siblings(".layui-colla-content"),
					e = t.parents(".layui-collapse").eq(0),
					l = e.attr("lay-filter"),
					n = "none" === a.css("display");
				"string" == typeof e.attr("lay-accordion") && ((e = e.children(".layui-colla-item")
						.children("." + y)).siblings(".layui-colla-title").children(".layui-colla-icon")
					.html("&#xe602;"), e.removeClass(y)), a[n ? "addClass" : "removeClass"](y), i.html(
					n ? "&#xe61a;" : "&#xe602;"), layui.event.call(this, c, "collapse(" + l + ")", {
					title: t,
					content: a,
					show: n
				})
			}
		},
		a = (i.prototype.render = i.prototype.init = function(t, i) {
			var a = i ? '[lay-filter="' + i + '"]' : "",
				i = {
					tab: function() {
						C.tabAuto.call({})
					},
					nav: function() {
						var s = {},
							o = {},
							c = {},
							r = "layui-nav-title";
						u(h + a).each(function(t) {
							var i = u(this),
								a = u('<span class="' + l + '"></span>'),
								e = i.find("." + f);
							i.find("." + l)[0] || (i.append(a), (i.hasClass(p) ? e.find(
								"dd,>." + r) : e).on("mouseenter", function() {
								! function(t, i, a) {
									var e, l = u(this),
										n = l.find("." + b);
									i.hasClass(p) ? n[0] || (e = l.children("." +
										r), t.css({
											top: l.offset().top - i.offset()
												.top,
											height: (e[0] ? e : l)
												.outerHeight(),
											opacity: 1
										})) : (n.addClass(m), n.hasClass(
											"layui-nav-child-c") && n.css({
											left: -(n.outerWidth() - l
												.width()) / 2
										}), n[0] ? t.css({
											left: t.position().left + t
												.width() / 2,
											width: 0,
											opacity: 0
										}) : t.css({
											left: l.position().left +
												parseFloat(l.css(
													"marginLeft")),
											top: l.position().top + l
												.height() - t.height()
										}), s[a] = setTimeout(function() {
											t.css({
												width: n[0] ? 0 : l
													.width(),
												opacity: n[0] ? 0 :
													1
											})
										}, d.ie && d.ie < 10 ? 0 : 200),
										clearTimeout(c[a]), "block" === n.css(
											"display") && clearTimeout(o[a]), o[
											a] = setTimeout(function() {
											n.addClass(y), l.find("." + v)
												.addClass(v + "d")
										}, 300))
								}.call(this, a, i, t)
							}).on("mouseleave", function() {
								i.hasClass(p) ? a.css({
									height: 0,
									opacity: 0
								}) : (clearTimeout(o[t]), o[t] = setTimeout(
									function() {
										i.find("." + b).removeClass(y), i
											.find("." + v).removeClass(v +
												"d")
									}, 300))
							}), i.on("mouseleave", function() {
								clearTimeout(s[t]), c[t] = setTimeout(function() {
									i.hasClass(p) || a.css({
										width: 0,
										left: a.position().left + a
											.width() / 2,
										opacity: 0
									})
								}, 200)
							})), e.find("a").each(function() {
								var t = u(this);
								t.parent();
								t.siblings("." + b)[0] && !t.children("." + v)[0] && t
									.append('<i class="layui-icon layui-icon-down ' +
										v + '"></i>'), t.off("click", C.clickThis).on(
										"click", C.clickThis)
							})
						})
					},
					breadcrumb: function() {
						u(".layui-breadcrumb" + a).each(function() {
							var t = u(this),
								i = "lay-separator",
								a = t.attr(i) || "/",
								e = t.find("a");
							e.next("span[" + i + "]")[0] || (e.each(function(t) {
								t !== e.length - 1 && u(this).after("<span " + i +
									">" + a + "</span>")
							}), t.css("visibility", "visible"))
						})
					},
					progress: function() {
						var e = "layui-progress";
						u("." + e + a).each(function() {
							var t = u(this),
								i = t.find(".layui-progress-bar"),
								a = i.attr("lay-percent");
							i.css("width", /^.+\/.+$/.test(a) ? 100 * new Function("return " +
								a)() + "%" : a), t.attr("lay-showPercent") && setTimeout(
								function() {
									i.html('<span class="' + e + '-text">' + a + "</span>")
								}, 350)
						})
					},
					collapse: function() {
						u(".layui-collapse" + a).each(function() {
							u(this).find(".layui-colla-item").each(function() {
								var t = u(this),
									i = t.find(".layui-colla-title"),
									t = "none" === t.find(".layui-colla-content").css(
										"display");
								i.find(".layui-colla-icon").remove(), i.append(
									'<i class="layui-icon layui-colla-icon">' + (t ?
										"&#xe602;" : "&#xe61a;") + "</i>"), i.off(
									"click", C.collapse).on("click", C.collapse)
							})
						})
					}
				};
			return i[t] ? i[t]() : layui.each(i, function(t, i) {
				i()
			})
		}, new i),
		e = u(document);
	u(function() {
		a.render()
	});
	e.on("click", ".layui-tab-title li", C.tabClick), e.on("click", C.hideTabMore), u(window).on("resize", C
		.tabAuto), t(c, a)
});
layui.define("layer", function(e) {
	"use strict";

	function v(e) {
		var t = this;
		t.config = y.extend({}, t.config, n.config, e), t.render()
	}
	var y = layui.$,
		t = layui.layer,
		i = layui.hint(),
		F = layui.device(),
		n = {
			config: {},
			set: function(e) {
				var t = this;
				return t.config = y.extend({}, t.config, e), t
			},
			on: function(e, t) {
				return layui.onevent.call(this, o, e, t)
			}
		},
		o = "upload",
		a = "layui-upload-file",
		l = "layui-upload-form",
		b = "layui-upload-iframe",
		x = "layui-upload-choose";
	v.prototype.config = {
		accept: "images",
		exts: "",
		auto: !0,
		bindAction: "",
		url: "",
		force: "",
		field: "file",
		acceptMime: "",
		method: "post",
		data: {},
		drag: !0,
		size: 0,
		number: 0,
		multiple: !1
	}, v.prototype.render = function(e) {
		var t = this;
		(e = t.config).elem = y(e.elem), e.bindAction = y(e.bindAction), t.file(), t.events()
	}, v.prototype.file = function() {
		var e = this,
			t = e.config,
			i = e.elemFile = y(['<input class="' + a + '" type="file" accept="' + t.acceptMime +
				'" name="' + t.field + '"', t.multiple ? " multiple" : "", ">"
			].join("")),
			n = t.elem.next();
		(n.hasClass(a) || n.hasClass(l)) && n.remove(), F.ie && F.ie < 10 && t.elem.wrap(
			'<div class="layui-upload-wrap"></div>'), e.isFile() ? (e.elemFile = t.elem, t.field = t
			.elem[0].name) : t.elem.after(i), F.ie && F.ie < 10 && e.initIE()
	}, v.prototype.initIE = function() {
		var i, e = this.config,
			t = y('<iframe id="' + b + '" class="' + b + '" name="' + b + '" frameborder="0"></iframe>'),
			n = y(['<form target="' + b + '" class="' + l +
				'" method="post" key="set-mine" enctype="multipart/form-data" action="' + e.url + '">',
				"</form>"
			].join(""));
		y("#" + b)[0] || y("body").append(t), e.elem.next().hasClass(l) || (this.elemFile.wrap(n), e.elem
			.next("." + l).append((i = [], layui.each(e.data, function(e, t) {
				t = "function" == typeof t ? t() : t, i.push('<input type="hidden" name="' +
					e + '" value="' + t + '">')
			}), i.join(""))))
	}, v.prototype.msg = function(e) {
		return t.msg(e, {
			icon: 2,
			shift: 6
		})
	}, v.prototype.isFile = function() {
		var e = this.config.elem[0];
		if (e) return "input" === e.tagName.toLocaleLowerCase() && "file" === e.type
	}, v.prototype.preview = function(n) {
		window.FileReader && layui.each(this.chooseFiles, function(e, t) {
			var i = new FileReader;
			i.readAsDataURL(t), i.onload = function() {
				n && n(e, t, this.result)
			}
		})
	}, v.prototype.upload = function(i, e) {
		var n, o, t, a, l = this,
			r = l.config,
			u = l.elemFile[0],
			c = function() {
				function t() {
					r.multiple && o + a === l.fileLength && "function" == typeof r.allDone && r.allDone({
						total: l.fileLength,
						successful: o,
						failed: a
					})
				}
				var o = 0,
					a = 0,
					e = i || l.files || l.chooseFiles || u.files;
				layui.each(e, function(i, e) {
					var n = new FormData,
						e = (n.append(r.field, e), layui.each(r.data, function(e, t) {
							t = "function" == typeof t ? t() : t, n.append(e, t)
						}), {
							url: r.url,
							type: "post",
							data: n,
							contentType: !1,
							processData: !1,
							dataType: "json",
							headers: r.headers || {},
							success: function(e) {
								o++, f(i, e), t()
							},
							error: function(e) {
								a++, l.msg("Request URL is abnormal: " + (e.statusText ||
									"error")), p(i), t()
							}
						});
					"function" == typeof r.progress && (e.xhr = function() {
						var e = y.ajaxSettings.xhr();
						return e.upload.addEventListener("progress", function(e) {
							var t;
							e.lengthComputable && (t = Math.floor(e.loaded / e
								.total * 100), r.progress(t, (r.item || r
								.elem)[0], e, i))
						}), e
					}), y.ajax(e)
				})
			},
			s = function() {
				var i = y("#" + b);
				l.elemFile.parent().submit(), clearInterval(v.timer), v.timer = setInterval(function() {
					var e, t = i.contents().find("body");
					try {
						e = t.text()
					} catch (e) {
						l.msg("Cross-domain requests are not supported"), clearInterval(v.timer),
						p()
					}
					e && (clearInterval(v.timer), t.html(""), f(0, e))
				}, 30)
			},
			f = function(e, t) {
				if (l.elemFile.next("." + x).remove(), u.value = "", "json" === r.force && "object" !=
					typeof t) try {
					t = JSON.parse(t)
				} catch (e) {
					return t = {}, l.msg("Please return JSON data format")
				}
				"function" == typeof r.done && r.done(t, e || 0, function(e) {
					l.upload(e)
				})
			},
			p = function(e) {
				r.auto && (u.value = ""), "function" == typeof r.error && r.error(e || 0, function(e) {
					l.upload(e)
				})
			},
			d = r.exts,
			m = (o = [], layui.each(i || l.chooseFiles, function(e, t) {
				o.push(t.name)
			}), o),
			h = {
				preview: function(e) {
					l.preview(e)
				},
				upload: function(e, t) {
					var i = {};
					i[e] = t, l.upload(i)
				},
				pushFile: function() {
					return l.files = l.files || {}, layui.each(l.chooseFiles, function(e, t) {
						l.files[e] = t
					}), l.files
				},
				resetFile: function(e, t, i) {
					t = new File([t], i);
					l.files = l.files || {}, l.files[e] = t
				}
			},
			g = {
				file: "\u6587\u4ef6",
				images: "\u56fe\u7247",
				video: "\u89c6\u9891",
				audio: "\u97f3\u9891"
			} [r.accept] || "\u6587\u4ef6",
			m = 0 === m.length ? u.value.match(/[^\/\\]+\..+/g) || [] || "" : m;
		if (0 !== m.length) {
			switch (r.accept) {
				case "file":
					layui.each(m, function(e, t) {
						if (d && !RegExp(".\\.(" + d + ")$", "i").test(escape(t))) return n = !0
					});
					break;
				case "video":
					layui.each(m, function(e, t) {
						if (!RegExp(".\\.(" + (d || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$",
								"i").test(escape(t))) return n = !0
					});
					break;
				case "audio":
					layui.each(m, function(e, t) {
						if (!RegExp(".\\.(" + (d || "mp3|wav|mid") + ")$", "i").test(escape(t)))
							return n = !0
					});
					break;
				default:
					layui.each(m, function(e, t) {
						if (!RegExp(".\\.(" + (d || "jpg|png|gif|bmp|jpeg") + ")$", "i").test(
								escape(t))) return n = !0
					})
			}
			if (n) return l.msg("\u9009\u62e9\u7684" + g +
				"\u4e2d\u5305\u542b\u4e0d\u652f\u6301\u7684\u683c\u5f0f"), u.value = "";
			if ("choose" !== e && !r.auto || (r.choose && r.choose(h), "choose" !== e)) {
				if (l.fileLength = (t = 0, g = i || l.files || l.chooseFiles || u.files, layui.each(g,
						function() {
							t++
						}), t), r.number && l.fileLength > r.number) return l.msg(
					"\u540c\u65f6\u6700\u591a\u53ea\u80fd\u4e0a\u4f20: " + r.number +
					" \u4e2a\u6587\u4ef6<br>\u60a8\u5f53\u524d\u5df2\u7ecf\u9009\u62e9\u4e86: " + l
					.fileLength + " \u4e2a\u6587\u4ef6");
				if (0 < r.size && !(F.ie && F.ie < 10))
					if (layui.each(l.chooseFiles, function(e, t) {
							t.size > 1024 * r.size && (t = 1 <= (t = r.size / 1024) ? t.toFixed(2) +
								"MB" : r.size + "KB", u.value = "", a = t)
						}), a) return l.msg("\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 " + a);
				if (!r.before || !1 !== r.before(h)) F.ie ? (9 < F.ie ? c : s)() : c()
			}
		}
	}, v.prototype.reload = function(e) {
		delete(e = e || {}).elem, delete e.bindAction;
		(e = this.config = y.extend({}, this.config, n.config, e)).elem.next().attr({
			name: e.name,
			accept: e.acceptMime,
			multiple: e.multiple
		})
	}, v.prototype.events = function() {
		function n(e) {
			a.chooseFiles = {}, layui.each(e, function(e, t) {
				var i = (new Date).getTime();
				a.chooseFiles[i + "-" + e] = t
			})
		}

		function o(e, t) {
			var i = a.elemFile,
				e = (l.item || l.elem, 1 < e.length ? e.length + "\u4e2a\u6587\u4ef6" : (e[0] || {}).name ||
					i[0].value.match(/[^\/\\]+\..+/g) || [] || "");
			i.next().hasClass(x) && i.next().remove(), a.upload(null, "choose"), a.isFile() || l.choose || i
				.after('<span class="layui-inline ' + x + '">' + e + "</span>")
		}
		var a = this,
			l = a.config;
		l.elem.off("upload.start").on("upload.start", function() {
			var e = y(this),
				t = e.attr("lay-data");
			if (t) try {
				t = new Function("return " + t)(), a.config = y.extend({}, l, t)
			} catch (e) {
				i.error("Upload element property lay-data configuration item has a syntax error: " +
					t)
			}
			a.config.item = e, a.elemFile[0].click()
		}), F.ie && F.ie < 10 || l.elem.off("upload.over").on("upload.over", function() {
			y(this).attr("lay-over", "")
		}).off("upload.leave").on("upload.leave", function() {
			y(this).removeAttr("lay-over")
		}).off("upload.drop").on("upload.drop", function(e, t) {
			var i = y(this),
				t = t.originalEvent.dataTransfer.files || [];
			i.removeAttr("lay-over"), n(t), l.auto ? a.upload() : o(t)
		}), a.elemFile.off("upload.change").on("upload.change", function() {
			var e = this.files || [];
			n(e), l.auto ? a.upload() : o(e)
		}), l.bindAction.off("upload.action").on("upload.action", function() {
			a.upload()
		}), l.elem.data("haveEvents") || (a.elemFile.on("change", function() {
			y(this).trigger("upload.change")
		}), l.elem.on("click", function() {
			a.isFile() || y(this).trigger("upload.start")
		}), l.drag && l.elem.on("dragover", function(e) {
			e.preventDefault(), y(this).trigger("upload.over")
		}).on("dragleave", function(e) {
			y(this).trigger("upload.leave")
		}).on("drop", function(e) {
			e.preventDefault(), y(this).trigger("upload.drop", e)
		}), l.bindAction.on("click", function() {
			y(this).trigger("upload.action")
		}), l.elem.data("haveEvents", !0))
	}, n.render = function(e) {
		e = new v(e);
		return function() {
			var t = this;
			return {
				upload: function(e) {
					t.upload.call(t, e)
				},
				reload: function(e) {
					t.reload.call(t, e)
				},
				config: t.config
			}
		}.call(e)
	}, e(o, n)
});
layui.define("layer", function(e) {
	"use strict";

	function t() {
		this.config = {
			verify: {
				required: [/[\S]+/, "\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a"],
				phone: [/^1\d{10}$/, "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"],
				email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
					"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"
				],
				url: [/^(#|(http(s?)):\/\/|\/\/)[^\s]+\.[^\s]+$/,
					"\u94fe\u63a5\u683c\u5f0f\u4e0d\u6b63\u786e"
				],
				number: function(e) {
					if (!e || isNaN(e)) return "\u53ea\u80fd\u586b\u5199\u6570\u5b57"
				},
				date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/,
					"\u65e5\u671f\u683c\u5f0f\u4e0d\u6b63\u786e"
				],
				identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/,
					"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u53f7"
				]
			},
			autocomplete: null
		}
	}

	function i() {
		var c = null,
			u = l.config.verify,
			d = "layui-form-danger",
			e = (a = x(this)).parents(o).eq(0),
			t = e.find("*[lay-verify]"),
			i = a.parents("form")[0],
			a = a.attr("lay-filter");
		return layui.each(t, function(e, l) {
			var r = x(this),
				t = r.attr("lay-verify").split("|"),
				s = r.attr("lay-verType"),
				o = r.val();
			if (r.removeClass(d), layui.each(t, function(e, t) {
					var i = "",
						a = "function" == typeof u[t];
					if (u[t]) {
						var a = a ? i = u[t](o, l) : !u[t][0].test(o),
							n = "select" === l.tagName.toLowerCase() || /^checkbox|radio$/.test(l
								.type),
							i = i || u[t][1];
						if ("required" === t && (i = r.attr("lay-reqText") || i), a)
						return "tips" === s ? f.tips(i, "string" != typeof r.attr(
								"lay-ignore") && n ? r.next() : r, {
									tips: 1
								}) : "alert" === s ? f.alert(i, {
								title: "\u63d0\u793a",
								shadeClose: !0
							}) : /\bstring|number\b/.test(typeof i) && f.msg(i, {
								icon: 5,
								shift: 6
							}), h.mobile ? y.scrollTop(function() {
								try {
									return (n ? r.next() : r).offset().top - 15
								} catch (e) {
									return 0
								}
							}()) : setTimeout(function() {
								(n ? r.next().find("input") : l).focus()
							}, 7), r.addClass(d), c = !0
					}
				}), c) return c
		}), !c && (t = l.getValue(null, e), layui.event.call(this, b, "submit(" + a + ")", {
			elem: this,
			form: i,
			field: t
		}))
	}
	var x = layui.$,
		f = layui.layer,
		n = layui.hint(),
		h = layui.device(),
		b = "form",
		o = ".layui-form",
		C = "layui-this",
		w = "layui-hide",
		T = "layui-disabled",
		l = (t.prototype.set = function(e) {
			return x.extend(!0, this.config, e), this
		}, t.prototype.verify = function(e) {
			return x.extend(!0, this.config.verify, e), this
		}, t.prototype.on = function(e, t) {
			return layui.onevent.call(this, b, e, t)
		}, t.prototype.val = function(e, i) {
			return x(o + '[lay-filter="' + e + '"]').each(function(e, t) {
				var a = x(this);
				layui.each(i, function(e, t) {
					var i, e = a.find('[name="' + e + '"]');
					e[0] && ("checkbox" === (i = e[0].type) ? e[0].checked = t : "radio" ===
						i ? e.each(function() {
							this.value == t && (this.checked = !0)
						}) : e.val(t))
				})
			}), l.render(null, e), this.getValue(e)
		}, t.prototype.getValue = function(e, t) {
			t = t || x(o + '[lay-filter="' + e + '"]').eq(0);
			var a = {},
				n = {},
				e = t.find("input,select,textarea");
			return layui.each(e, function(e, t) {
				var i;
				x(this);
				t.name = (t.name || "").replace(/^\s*|\s*&/, ""), t.name && (/^.*\[\]$/.test(t
					.name) && (i = t.name.match(/^(.*)\[\]$/g)[0], a[i] = 0 | a[i], i = t.name
						.replace(/^(.*)\[\]$/, "$1[" + a[i]++ + "]")), /^checkbox|radio$/.test(t
						.type) && !t.checked || (n[i || t.name] = t.value))
			}), n
		}, t.prototype.render = function(e, t) {
			var i = this.config,
				a = x(o + (t ? '[lay-filter="' + t + '"]' : "")),
				t = {
					input: function() {
						var e = a.find("input,textarea");
						i.autocomplete && e.attr("autocomplete", i.autocomplete)
					},
					select: function() {
						function y(e, t) {
							x(e.target).parent().hasClass(m) && !t || (x("." + p).removeClass(p +
								"ed " + p + "up"), v && k && v.val(k)), v = null
						}

						function c(a, e, t) {
							var s, i, n, o, l, r = x(this),
								c = a.find("." + m),
								u = c.find("input"),
								d = a.find("dl"),
								f = d.children("dd"),
								h = this.selectedIndex;
							e || (i = function() {
								var e = a.offset().top + a.outerHeight() + 5 - $.scrollTop(),
									t = d.outerHeight();
								h = r[0].selectedIndex, a.addClass(p + "ed"), f.removeClass(w),
									s = null, f.eq(h).addClass(C).siblings().removeClass(C), e +
									t > $.height() && t <= e && a.addClass(p + "up"), o()
							}, n = function(e) {
								a.removeClass(p + "ed " + p + "up"), u.blur(), s = null, e || l(
									u.val(),
									function(e) {
										var t = r[0].selectedIndex;
										e && (k = x(r[0].options[t]).html(), 0 === t &&
											k === u.attr("placeholder") && (k = ""), u
											.val(k || ""))
									})
							}, o = function() {
								var e, t, i = d.children("dd." + C);
								i[0] && (e = i.position().top, t = d.height(), i = i.height(),
									t < e && d.scrollTop(e + d.scrollTop() - t + i - 5), e <
									0 && d.scrollTop(e + d.scrollTop() - 5))
							}, c.on("click", function(e) {
								a.hasClass(p + "ed") ? n() : (y(e, !0), i()), d.find("." +
									g).remove()
							}), c.find(".layui-edge").on("click", function() {
								u.focus()
							}), u.on("keyup", function(e) {
								9 === e.keyCode && i()
							}).on("keydown", function(l) {
								var e = l.keyCode,
									r = (9 === e && n(), function(a, n) {
										l.preventDefault();
										var e = function() {
												var e = d.children("dd." + C);
												if (d.children("dd." + w)[0] &&
													"next" === a) {
													var t = d.children("dd:not(." + w +
															",." + T + ")"),
														i = t.eq(0).index();
													if (0 <= i && i < e.index() && !t
														.hasClass(C)) return t.eq(0)
														.prev()[0] ? t.eq(0)
													.prev() : d.children(":last")
												}
												return n && n[0] ? n : s && s[0] ? s : e
											}(),
											t = e[a](),
											i = e[a]("dd:not(." + w + ")");
										return t[0] ? (s = e[a](), i[0] && !i.hasClass(
											T) || !s[0] ? (i.addClass(C)
											.siblings().removeClass(C), void o()
											) : r(a, s)) : s = null
									});
								38 === e && r("prev"), 40 === e && r("next"), 13 === e && (l
									.preventDefault(), d.children("dd." + C).trigger(
										"click"))
							}), l = function(a, e, n) {
								var l = 0,
									t = (layui.each(f, function() {
										var e = x(this),
											t = e.text(),
											i = -1 === t.indexOf(a);
										("" === a || "blur" === n ? a !== t : i) && l++,
										"keyup" === n && e[i ? "addClass" :
											"removeClass"](w)
									}), l === f.length);
								return e(t), t
							}, t && u.on("keyup", function(e) {
								var t = this.value,
									e = e.keyCode;
								if (9 === e || 13 === e || 37 === e || 38 === e || 39 ===
									e || 40 === e) return !1;
								l(t, function(e) {
									e ? d.find("." + g)[0] || d.append(
											'<p class="' + g +
											'">\u65e0\u5339\u914d\u9879</p>') : d
										.find("." + g).remove()
								}, "keyup"), "" === t && d.find("." + g).remove(), o()
							}).on("blur", function(e) {
								var t = r[0].selectedIndex;
								v = u, k = x(r[0].options[t]).html(), 0 === t && k === u
									.attr("placeholder") && (k = ""), setTimeout(
								function() {
										l(u.val(), function(e) {
											k || u.val("")
										}, "blur")
									}, 200)
							}), f.on("click", function() {
								var e = x(this),
									t = e.attr("lay-value"),
									i = r.attr("lay-filter");
								return e.hasClass(T) || (e.hasClass("layui-select-tips") ? u
									.val("") : (u.val(e.text()), e.addClass(C)), e
									.siblings().removeClass(C), r.val(t).removeClass(
										"layui-form-danger"), layui.event.call(this, b,
										"select(" + i + ")", {
											elem: r[0],
											value: t,
											othis: a
										}), n(!0)), !1
							}), a.find("dl>dt").on("click", function(e) {
								return !1
							}), x(document).off("click", y).on("click", y))
						}
						var v, u = "\u8bf7\u9009\u62e9",
							p = "layui-form-select",
							m = "layui-select-title",
							g = "layui-select-none",
							k = "",
							e = a.find("select");
						e.each(function(e, t) {
							var i = x(this),
								a = i.next("." + p),
								n = this.disabled,
								l = t.value,
								r = x(t.options[t.selectedIndex]),
								t = t.options[0];
							if ("string" == typeof i.attr("lay-ignore")) return i.show();
							var s, o = "string" == typeof i.attr("lay-search"),
								t = t && !t.value && t.innerHTML || u,
								r = x(['<div class="' + (o ? "" : "layui-unselect ") + p, (n ?
										" layui-select-disabled" : "") + '">',
									'<div class="' + m + '">',
									'<input type="text" placeholder="' + x.trim(t) +
									'" value="' + x.trim(l ? r.html() : "") + '"' + (!n &&
										o ? "" : " readonly") + ' class="layui-input' + (o ?
										"" : " layui-unselect") + (n ? " " + T : "") + '">',
									'<i class="layui-edge"></i></div>',
									'<dl class="layui-anim layui-anim-upbit' + (i.find(
										"optgroup")[0] ? " layui-select-group" : "") + '">',
									(t = i.find("*"), s = [], layui.each(t, function(e, t) {
											0 !== e || t.value ? "optgroup" === t
												.tagName.toLowerCase() ? s.push("<dt>" +
													t.label + "</dt>") : s.push(
													'<dd lay-value="' + t.value +
													'" class="' + (l === t.value ? C :
														"") + (t.disabled ? " " + T :
														"") + '">' + x.trim(t
													.innerHTML) + "</dd>") : s.push(
													'<dd lay-value="" class="layui-select-tips">' +
													x.trim(t.innerHTML || u) + "</dd>")
										}), 0 === s.length && s.push(
											'<dd lay-value="" class="' + T +
											'">\u6ca1\u6709\u9009\u9879</dd>'), s.join("") +
										"</dl>"), "</div>"
								].join(""));
							a[0] && a.remove(), i.after(r), c.call(this, r, n, o)
						})
					},
					checkbox: function() {
						var o = {
								checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
								_switch: ["layui-form-switch", "layui-form-onswitch", "switch"]
							},
							e = a.find("input[type=checkbox]");
						e.each(function(e, t) {
							var i = x(this),
								a = i.attr("lay-skin"),
								n = (i.attr("lay-text") || "").split("|"),
								l = this.disabled,
								r = o[a = "switch" === a ? "_" + a : a] || o.checkbox;
							if ("string" == typeof i.attr("lay-ignore")) return i.show();
							var s = i.next("." + r[0]),
								t = x(['<div class="layui-unselect ' + r[0], t.checked ? " " +
									r[1] : "", l ? " layui-checkbox-disabled " + T : "",
									'"', a ? ' lay-skin="' + a + '"' : "", ">", (l = {
										checkbox: [t.title.replace(/\s/g, "") ?
											"<span>" + t.title + "</span>" : "",
											'<i class="layui-icon layui-icon-ok"></i>'
										].join(""),
										_switch: "<em>" + ((t.checked ? n[0] : n[1]) ||
											"") + "</em><i></i>"
									})[a] || l.checkbox, "</div>"
								].join(""));
							s[0] && s.remove(), i.after(t),
								function(i, a) {
									var n = x(this);
									i.on("click", function() {
										var e = n.attr("lay-filter"),
											t = (n.attr("lay-text") || "").split("|");
										n[0].disabled || (n[0].checked ? (n[0]
												.checked = !1, i.removeClass(a[1])
												.find("em").text(t[1])) : (n[0]
												.checked = !0, i.addClass(a[1])
												.find("em").text(t[0])), layui.event
											.call(n[0], b, a[2] + "(" + e + ")", {
												elem: n[0],
												value: n[0].value,
												othis: i
											}))
									})
								}.call(this, t, r)
						})
					},
					radio: function() {
						var r = "layui-form-radio",
							s = ["&#xe643;", "&#xe63f;"],
							e = a.find("input[type=radio]");
						e.each(function(e, t) {
							var i = x(this),
								a = i.next("." + r),
								n = this.disabled;
							if ("string" == typeof i.attr("lay-ignore")) return i.show();
							a[0] && a.remove();
							n = x(['<div class="layui-unselect ' + r, t.checked ? " " + r +
								"ed" : "", (n ? " layui-radio-disabled " + T : "") +
								'">', '<i class="layui-anim layui-icon">' + s[t
									.checked ? 0 : 1] + "</i>", "<div>" + (a = t
									.title || "", a = "string" == typeof i.next().attr(
										"lay-radio") ? i.next().html() : a) + "</div>",
								"</div>"
							].join(""));
							i.after(n),
								function(a) {
									var n = x(this),
										l = "layui-anim-scaleSpring";
									a.on("click", function() {
										var e = n[0].name,
											t = n.parents(o),
											i = n.attr("lay-filter"),
											t = t.find("input[name=" + e.replace(
												/(\.|#|\[|\])/g, "\\$1") + "]");
										n[0].disabled || (layui.each(t, function() {
												var e = x(this).next("." + r);
												this.checked = !1, e
													.removeClass(r + "ed"), e
													.find(".layui-icon")
													.removeClass(l).html(s[1])
											}), n[0].checked = !0, a.addClass(r +
												"ed"), a.find(".layui-icon")
											.addClass(l).html(s[0]), layui.event
											.call(n[0], b, "radio(" + i + ")", {
												elem: n[0],
												value: n[0].value,
												othis: a
											}))
									})
								}.call(this, n)
						})
					}
				};
			return e ? t[e] ? t[e]() : n.error('\u4e0d\u652f\u6301\u7684 "' + e +
				'" \u8868\u5355\u6e32\u67d3') : layui.each(t, function(e, t) {
				t()
			}), this
		}, new t),
		y = x(document),
		$ = x(window);
	x(function() {
		l.render()
	}), y.on("reset", o, function() {
		var e = x(this).attr("lay-filter");
		setTimeout(function() {
			l.render(null, e)
		}, 50)
	}), y.on("submit", o, i).on("click", "*[lay-submit]", i), e(b, l)
});
layui.define(["laytpl", "laypage", "layer", "form", "util"], function(e) {
	"use strict";

	function y() {
		var i = this,
			e = i.config,
			t = e.id || e.index;
		return t && (y.that[t] = i, y.config[t] = e), {
			config: e,
			reload: function(e, t) {
				i.reload.call(i, e, t)
			},
			setColsWidth: function() {
				i.setColsWidth.call(i)
			},
			resize: function() {
				i.resize.call(i)
			}
		}
	}

	function a(e) {
		var t = y.config[e];
		return t || p.error(e ? "The table instance with ID '" + e + "' not found" : "ID argument required"),
			t || null
	}

	function m(e) {
		var t = this.config || {},
			i = (e = e || {}).item3,
			a = e.content;
		return t.escape && (a = f.escape(a)), (t = e.text && i.exportTemplet || i.templet || i.toolbar) && (a =
			"function" == typeof t ? t.call(i, e.tplData, e.obj) : g(v(t).html() || String(a)).render(e
				.tplData)), e.text ? v("<div>" + a + "</div>").text() : a
	}

	function t(e) {
		return ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
			'{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
			"<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>",
			"{{# layui.each(item1, function(i2, item2){ }}",
			'{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}',
			'{{# if(item2.fixed === "right"){ right = true; } }}', (e = e || {}).fixed && "right" !== e
			.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ?
			'{{# if(item2.fixed === "right"){ }}' : "",
			"{{# var isSort = !(item2.colGroup) && item2.sort; }}",
			'<th data-field="{{= item2.field||i2 }}" data-key="{{=d.index}}-{{=i1}}-{{=i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{= item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{=item2.minWidth}}"{{# } }} {{#if(item2.colspan){}} colspan="{{=item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{=item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">',
			'<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group",
			"{{# } else { }}", "{{=d.index}}-{{=i1}}-{{=i2}}", '{{# if(item2.type !== "normal"){ }}',
			" laytable-cell-{{= item2.type }}", "{{# } }}", "{{# } }}",
			'" {{#if(item2.align){}}align="{{=item2.align}}"{{#}}}>',
			'{{# if(item2.type === "checkbox"){ }}',
			'<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>',
			"{{# } else { }}", '<span>{{-item2.title||""}}</span>', "{{# if(isSort){ }}",
			'<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="\u5347\u5e8f"></i><i class="layui-edge layui-table-sort-desc" title="\u964d\u5e8f"></i></span>',
			"{{# } }}", "{{# } }}", "</div>", "</th>", e.fixed ? "{{# }; }}" : "", "{{# }); }}", "</tr>",
			"{{# }); }}", "</thead>", "</table>"
		].join("")
	}

	function i(e) {
		this.index = ++k.index, this.config = v.extend({}, this.config, k.config, e), this.render()
	}
	var v = layui.$,
		g = layui.laytpl,
		o = layui.laypage,
		b = layui.layer,
		h = layui.form,
		f = layui.util,
		p = layui.hint(),
		x = layui.device(),
		k = {
			config: {
				checkName: "LAY_CHECKED",
				indexName: "LAY_TABLE_INDEX"
			},
			cache: {},
			index: layui.table ? layui.table.index + 1e4 : 0,
			set: function(e) {
				var t = this;
				return t.config = v.extend({}, t.config, e), t
			},
			on: function(e, t) {
				return layui.onevent.call(this, C, e, t)
			}
		},
		C = "table",
		w = "layui-hide",
		d = "layui-none",
		n = "layui-table-view",
		c = ".layui-table-header",
		T = ".layui-table-body",
		N = ".layui-table-sort",
		L = "layui-table-edit",
		S = "layui-table-hover",
		l = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
			'{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
			"<tbody></tbody>", "</table>"
		].join(""),
		r = [
			'<div class="layui-form layui-border-box {{=d.VIEW_CLASS}}{{# if(d.data.className){ }} {{= d.data.className }}{{# } }}" lay-filter="LAY-table-{{=d.index}}" lay-id="{{= d.data.id }}" style="{{# if(d.data.width){ }}width:{{=d.data.width}}px;{{# } }} {{# if(d.data.height){ }}height:{{=d.data.height}}px;{{# } }}">',
			"{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">',
			'<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>",
			"{{# } }}", '<div class="layui-table-box">', "{{# if(d.data.loading){ }}",
			'<div class="layui-table-init" style="background-color: #fff;">',
			'<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',
			"</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', t(), "</div>",
			'<div class="layui-table-body layui-table-main">', l, "</div>", "{{# if(left){ }}",
			'<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', t({
				fixed: !0
			}), "</div>", '<div class="layui-table-body">', l, "</div>", "</div>", "{{# }; }}",
			"{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r">',
			'<div class="layui-table-header">', t({
				fixed: "right"
			}), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', l, "</div>",
			"</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">',
			'<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
			'{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
			'<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>',
			"</table>", "</div>", "{{# } }}", "{{# if(d.data.page){ }}", '<div class="layui-table-page">',
			'<div id="layui-table-page{{=d.index}}"></div>', "</div>", "{{# } }}", "<style>",
			"{{# layui.each(d.data.cols, function(i1, item1){", "layui.each(item1, function(i2, item2){ }}",
			".laytable-cell-{{=d.index}}-{{=i1}}-{{=i2}}{ ", "{{# if(item2.width){ }}",
			"width: {{=item2.width}}px;", "{{# } }}", " }", "{{# });", "}); }}", "</style>", "</div>"
		].join(""),
		A = v(window),
		R = v(document);
	i.prototype.config = {
		limit: 10,
		loading: !0,
		escape: !0,
		cellMinWidth: 60,
		defaultToolbar: ["filter", "exports", "print"],
		autoSort: !0,
		text: {
			none: "\u65e0\u6570\u636e"
		}
	}, i.prototype.render = function() {
		var e = this,
			t = e.config;
		if (t.elem = v(t.elem), t.where = t.where || {}, t.id = t.id || t.elem.attr("id") || e.index, t
			.request = v.extend({
				pageName: "page",
				limitName: "limit"
			}, t.request), t.response = v.extend({
				statusName: "code",
				statusCode: 0,
				msgName: "msg",
				dataName: "data",
				totalRowName: "totalRow",
				countName: "count"
			}, t.response), "object" == typeof t.page && (t.limit = t.page.limit || t.limit, t.limits = t
				.page.limits || t.limits, e.page = t.page.curr = t.page.curr || 1, delete t.page.elem,
				delete t.page.jump), !t.elem[0]) return e;
		t.height && /^full-\d+$/.test(t.height) && (e.fullHeightGap = t.height.split("-")[1], t.height = A
			.height() - e.fullHeightGap), e.setInit();
		var i = t.elem,
			a = i.next("." + n),
			l = e.elem = v(g(r).render({
				VIEW_CLASS: n,
				data: t,
				index: e.index
			}));
		t.index = e.index, e.key = t.id || t.index, a[0] && a.remove(), i.after(l), e.layTool = l.find(
				".layui-table-tool"), e.layBox = l.find(".layui-table-box"), e.layHeader = l.find(c), e
			.layMain = l.find(".layui-table-main"), e.layBody = l.find(T), e.layFixed = l.find(
				".layui-table-fixed"), e.layFixLeft = l.find(".layui-table-fixed-l"), e.layFixRight = l
			.find(".layui-table-fixed-r"), e.layTotal = l.find(".layui-table-total"), e.layPage = l.find(
				".layui-table-page"), e.renderToolbar(), e.fullSize(), 1 < t.cols.length && (a = e.layFixed
				.find(c).find("th")).height(e.layHeader.height() - 1 - parseFloat(a.css("padding-top")) -
				parseFloat(a.css("padding-bottom"))), e.pullData(e.page), e.events()
	}, i.prototype.initOpts = function(e) {
		this.config;
		e.checkbox && (e.type = "checkbox"), e.space && (e.type = "space"), e.type || (e.type = "normal"),
			"normal" !== e.type && (e.unresize = !0, e.width = e.width || {
				checkbox: 48,
				radio: 48,
				space: 15,
				numbers: 40
			} [e.type])
	}, i.prototype.setInit = function(e) {
		var t = this,
			o = t.config;

		function a(e) {
			var t, i = (e = e || o.elem.parent()).width();
			try {
				t = "none" === e.css("display")
			} catch (e) {}
			return !e[0] || i && !t ? i : a(e.parent())
		}
		if (o.clientWidth = o.width || a(), "width" === e) return o.clientWidth;
		layui.each(o.cols, function(n, e) {
			layui.each(e, function(i, a) {
				var l;
				a ? (a.key = n + "-" + i, a.hide = a.hide || !1, (a.colGroup || 1 < a
					.colspan) && (l = 0, layui.each(o.cols[n + 1], function(e, t) {
					t.HAS_PARENT || 1 < l && l == a.colspan || (t
						.HAS_PARENT = !0, t.parentKey = n + "-" + i,
						l += parseInt(1 < t.colspan ? t.colspan : 1))
				}), a.colGroup = !0), t.initOpts(a)) : e.splice(i, 1)
			})
		})
	}, i.prototype.renderToolbar = function() {
		var e = this.config,
			t = [
				'<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>',
				'<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>',
				'<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'
			].join(""),
			i = this.layTool.find(".layui-table-tool-temp"),
			a = ("default" === e.toolbar ? i.html(t) : "string" == typeof e.toolbar && (t = v(e.toolbar)
				.html() || "") && i.html(g(t).render(e)), {
				filter: {
					title: "\u7b5b\u9009\u5217",
					layEvent: "LAYTABLE_COLS",
					icon: "layui-icon-cols"
				},
				exports: {
					title: "\u5bfc\u51fa",
					layEvent: "LAYTABLE_EXPORT",
					icon: "layui-icon-export"
				},
				print: {
					title: "\u6253\u5370",
					layEvent: "LAYTABLE_PRINT",
					icon: "layui-icon-print"
				}
			}),
			l = [];
		"object" == typeof e.defaultToolbar && layui.each(e.defaultToolbar, function(e, t) {
			t = "string" == typeof t ? a[t] : t;
			t && l.push('<div class="layui-inline" title="' + t.title + '" lay-event="' + t
				.layEvent + '"><i class="layui-icon ' + t.icon + '"></i></div>')
		}), this.layTool.find(".layui-table-tool-self").html(l.join(""))
	}, i.prototype.setParentCol = function(e, t) {
		var i = this.config,
			a = this.layHeader.find('th[data-key="' + i.index + "-" + t + '"]'),
			l = parseInt(a.attr("colspan")) || 0;
		a[0] && (t = t.split("-"), i = i.cols[t[0]][t[1]], e ? l-- : l++, a.attr("colspan", l), a[l < 1 ?
				"addClass" : "removeClass"](w), i.colspan = l, i.hide = l < 1, (t = a.data(
			"parentkey")) && this.setParentCol(e, t))
	}, i.prototype.setColsPatch = function() {
		var i = this,
			e = i.config;
		layui.each(e.cols, function(e, t) {
			layui.each(t, function(e, t) {
				t.hide && i.setParentCol(t.hide, t.parentKey)
			})
		})
	}, i.prototype.setColsWidth = function() {
		function e(n) {
			layui.each(o.cols, function(e, l) {
				layui.each(l, function(e, t) {
					var i = 0,
						a = t.minWidth || o.cellMinWidth;
					t ? t.colGroup || t.hide || (n ? c && c < a && (d--, i = a) : (i = t
						.width || 0, /\d+%$/.test(i) ? (i = Math.floor(parseFloat(
							i) / 100 * s)) < a && (i = a) : i || (t.width = i = 0,
							d++)), t.hide && (i = 0), r += i) : l.splice(e, 1)
				})
			}), r < s && d && (c = (s - r) / d)
		}
		var t, i, a, l = this,
			o = l.config,
			n = 0,
			d = 0,
			c = 0,
			r = 0,
			s = l.setInit("width"),
			u = (l.eachCols(function(e, t) {
					t.hide || n++
				}), s = s - ("line" === o.skin || "nob" === o.skin ? 2 : n + 1) - l.getScrollWidth(l
					.layMain[0]) - 1, e(), e(!0), l.autoColNums = d, l.eachCols(function(e, t) {
					var i = t.minWidth || o.cellMinWidth;
					t.colGroup || t.hide || (0 === t.width ? l.getCssRule(o.index + "-" + t.key,
						function(e) {
							e.style.width = Math.floor(i <= c ? c : i) + "px"
						}) : /\d+%$/.test(t.width) && l.getCssRule(o.index + "-" + t.key,
						function(e) {
							e.style.width = Math.floor(parseFloat(t.width) / 100 * s) + "px"
						}))
				}), l.layMain.width() - l.getScrollWidth(l.layMain[0]) - l.layMain.children("table")
				.outerWidth());
		l.autoColNums && -n <= u && u <= n && (a = (i = (t = function(e) {
			return !(e = e || l.layHeader.eq(0).find("thead th:last-child")).data(
				"field") && e.prev()[0] ? t(e.prev()) : e
		})()).data("key"), l.getCssRule(a, function(e) {
			var t = e.style.width || i.outerWidth();
			e.style.width = parseFloat(t) + u + "px", 0 < l.layMain.height() - l.layMain.prop(
				"clientHeight") && (e.style.width = parseFloat(e.style.width) - 1 + "px")
		})), l.loading(!0)
	}, i.prototype.resize = function() {
		this.fullSize(), this.setColsWidth(), this.scrollPatch()
	}, i.prototype.reload = function(e, t) {
		var i = this;
		e = e || {}, delete i.haveInit, layui.each(e, function(e, t) {
			"array" === layui.type(t) && delete i.config[e]
		}), i.config = v.extend(t, {}, i.config, e), i.render()
	}, i.prototype.errorView = function(e) {
		var t = this,
			i = t.layMain.find("." + d),
			e = v('<div class="' + d + '">' + (e || "Error") + "</div>");
		i[0] && (t.layNone.remove(), i.remove()), t.layFixed.addClass(w), t.layMain.find("tbody").html(""),
			t.layMain.append(t.layNone = e), k.cache[t.key] = []
	}, i.prototype.page = 1, i.prototype.pullData = function(t) {
		function i() {
			"object" == typeof l.initSort && a.sort(l.initSort.field, l.initSort.type)
		}
		var e, a = this,
			l = a.config,
			n = l.request,
			o = l.response;
		a.startTime = (new Date).getTime(), l.url ? ((e = {})[n.pageName] = t, e[n.limitName] = l.limit, n =
			v.extend(e, l.where), l.contentType && 0 == l.contentType.indexOf("application/json") && (
				n = JSON.stringify(n)), a.loading(), v.ajax({
				type: l.method || "get",
				url: l.url,
				contentType: l.contentType,
				data: n,
				dataType: "json",
				headers: l.headers || {},
				success: function(e) {
					(e = "function" == typeof l.parseData ? l.parseData(e) || e : e)[o
						.statusName] != o.statusCode ? (a.renderForm(), a.errorView(e[o
						.msgName] ||
						'\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u6b63\u786e\u7684\u6210\u529f\u72b6\u6001\u7801\u5e94\u4e3a\uff1a"' +
						o.statusName + '": ' + o.statusCode)) : (a.renderData(e, t, e[o
							.countName]), i(), l.time = (new Date).getTime() - a.startTime +
						" ms"), a.setColsWidth(), "function" == typeof l.done && l.done(e,
						t, e[o.countName])
				},
				error: function(e, t) {
					a.errorView("\u8bf7\u6c42\u5f02\u5e38\uff0c\u9519\u8bef\u63d0\u793a\uff1a" +
							t), a.renderForm(), a.setColsWidth(), "function" == typeof l
						.error && l.error(e, t)
				}
			})) : "array" === layui.type(l.data) && (e = t * l.limit - l.limit, (n = {})[o.dataName] = l
			.data.concat().splice(e, l.limit), n[o.countName] = l.data.length, "object" == typeof l
			.totalRow && (n[o.totalRowName] = v.extend({}, l.totalRow)), a.renderData(n, t, n[o
				.countName]), i(), a.setColsWidth(), "function" == typeof l.done && l.done(n, t, n[o
				.countName]))
	}, i.prototype.eachCols = function(e) {
		return k.eachCols(null, e, this.config.cols), this
	}, i.prototype.renderData = function(e, t, i, a) {
		function l() {
			var s;
			if (!a && u.sortKey) return u.sort(u.sortKey.field, u.sortKey.sort, !0);
			layui.each(n, function(l, n) {
					var o = [],
						d = [],
						c = [],
						r = l + y.limit * (t - 1) + 1;
					"array" === layui.type(n) && 0 === n.length || (a || (n[k.config.indexName] = l), u
						.eachCols(function(e, i) {
							var e = i.field || e,
								t = y.index + "-" + i.key,
								a = n[e];
							null == a && (a = ""), i.colGroup || (e = ['<td data-field="' + e +
									'" data-key="' + t + '" ' + (e = [], i.edit && e.push(
											'data-edit="' + i.edit + '"'), i.templet && e
										.push('data-content="' + a + '"'), i.toolbar && e
										.push('data-off="true"'), i.event && e.push(
											'lay-event="' + i.event + '"'), i.style && e
										.push('style="' + i.style + '"'), i.minWidth && e
										.push('data-minwidth="' + i.minWidth + '"'), e.join(
											" ")) + ' class="' + (e = [], i.hide && e.push(
											w), i.field || e.push(
										"layui-table-col-special"), e.join(" ")) + '">',
									'<div class="layui-table-cell laytable-cell-' + (
										"normal" === i.type ? t : t + " laytable-cell-" + i
										.type) + '"' + (i.align ? ' align="' + i.align +
										'"' : "") + ">" + function() {
										var e = v.extend(!0, {
												LAY_INDEX: r,
												LAY_COL: i
											}, n),
											t = k.config.checkName;
										switch (i.type) {
											case "checkbox":
												return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' +
													(i[t] ? (n[t] = i[t], i[t] ? "checked" :
														"") : e[t] ? "checked" : "") + ">";
											case "radio":
												return e[t] && (s = l),
													'<input type="radio" name="layTableRadio_' +
													y.index + '" ' + (e[t] ? "checked" :
													"") + ' lay-type="layTableRadio">';
											case "numbers":
												return r
										}
										return i.toolbar ? g(v(i.toolbar).html() || "")
											.render(e) : m.call(u, {
												item3: i,
												content: a,
												tplData: e
											})
									}(), "</div></td>"
								].join(""), o.push(e), i.fixed && "right" !== i.fixed && d
								.push(e), "right" === i.fixed && c.push(e))
						}), h.push('<tr data-index="' + l + '">' + o.join("") + "</tr>"), f.push(
							'<tr data-index="' + l + '">' + d.join("") + "</tr>"), p.push(
							'<tr data-index="' + l + '">' + c.join("") + "</tr>"))
				}), u.layBody.scrollTop(0), u.layMain.find("." + d).remove(), u.layMain.find("tbody").html(h
					.join("")), u.layFixLeft.find("tbody").html(f.join("")), u.layFixRight.find("tbody")
				.html(p.join("")), u.renderForm(), "number" == typeof s && u.setThisRowChecked(s), u
				.syncCheckAll(), u.haveInit ? u.scrollPatch() : setTimeout(function() {
					u.scrollPatch()
				}, 50), u.haveInit = !0, b.close(u.tipsIndex), y.HAS_SET_COLS_PATCH || u.setColsPatch(), y
				.HAS_SET_COLS_PATCH = !0
		}
		var u = this,
			y = u.config,
			n = e[y.response.dataName] || [],
			e = e[y.response.totalRowName],
			h = [],
			f = [],
			p = [];
		return k.cache[u.key] = n, u.layPage[0 == i || 0 === n.length && 1 == t ? "addClass" :
			"removeClass"](w), 0 === n.length ? (u.renderForm(), u.errorView(y.text.none)) : (u.layFixed
			.removeClass(w), a ? l() : (l(), u.renderTotal(n, e), void(y.page && (y.page = v.extend({
				elem: "layui-table-page" + y.index,
				count: i,
				limit: y.limit,
				limits: y.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
				groups: 3,
				layout: ["prev", "page", "next", "skip", "count", "limit"],
				prev: '<i class="layui-icon">&#xe603;</i>',
				next: '<i class="layui-icon">&#xe602;</i>',
				jump: function(e, t) {
					t || (u.page = e.curr, y.limit = e.limit, u.pullData(e.curr))
				}
			}, y.page), y.page.count = i, o.render(y.page)))))
	}, i.prototype.renderTotal = function(e, n) {
		var o, d = this,
			c = d.config,
			r = {};
		c.totalRow && (layui.each(e, function(e, a) {
			"array" === layui.type(a) && 0 === a.length || d.eachCols(function(e, t) {
				var e = t.field || e,
					i = a[e];
				t.totalRow && (r[e] = (r[e] || 0) + (parseFloat(i) || 0))
			})
		}), d.dataTotal = {}, o = [], d.eachCols(function(e, t) {
			var i, e = t.field || e,
				a = (l = t.totalRowText || "", i = parseFloat(r[e]).toFixed(2), (a = {})[e] = i,
					i = t.totalRow && m.call(d, {
						item3: t,
						content: i,
						tplData: a
					}) || l, n && n[t.field] || i),
				l = ['<td data-field="' + e + '" data-key="' + c.index + "-" + t.key + '" ' + (
						l = [], t.align && l.push('align="' + t.align + '"'), t.style && l.push(
							'style="' + t.style + '"'), t.minWidth && l.push('data-minwidth="' +
							t.minWidth + '"'), l.join(" ")) + ' class="' + (i = [], t.hide && i
						.push(w), t.field || i.push("layui-table-col-special"), i.join(" ")) +
					'">', '<div class="layui-table-cell laytable-cell-' + (l = c.index + "-" + t
						.key, "normal" === t.type ? l : l + " laytable-cell-" + t.type) + '">' +
					("string" == typeof(i = t.totalRow || c.totalRow) ? g(i).render(v.extend({
						TOTAL_NUMS: a
					}, t)) : a), "</div></td>"
				].join("");
			t.field && (d.dataTotal[e] = a), o.push(l)
		}), d.layTotal.find("tbody").html("<tr>" + o.join("") + "</tr>"))
	}, i.prototype.getColElem = function(e, t) {
		var i = this.config;
		return e.eq(0).find(".laytable-cell-" + i.index + "-" + t + ":eq(0)")
	}, i.prototype.renderForm = function(e) {
		h.render(e, "LAY-table-" + this.index)
	}, i.prototype.setThisRowChecked = function(e) {
		this.config;
		var t = "layui-table-click";
		this.layBody.find('tr[data-index="' + e + '"]').addClass(t).siblings("tr").removeClass(t)
	}, i.prototype.sort = function(l, e, t, i) {
		var a, n = this,
			o = {},
			d = n.config,
			c = d.elem.attr("lay-filter"),
			r = k.cache[n.key];
		"string" == typeof l && (s = l, n.layHeader.find("th").each(function(e, t) {
			var i = v(this),
				a = i.data("field");
			if (a === l) return l = i, s = a, !1
		}));
		try {
			var s = s || l.data("field"),
				u = l.data("key");
			if (n.sortKey && !t && s === n.sortKey.field && e === n.sortKey.sort) return;
			var y = n.layHeader.find("th .laytable-cell-" + u).find(N);
			n.layHeader.find("th").find(N).removeAttr("lay-sort"), y.attr("lay-sort", e || null), n.layFixed
				.find("th")
		} catch (e) {
			p.error("Table modules: sort field '" + s + "' not matched")
		}
		n.sortKey = {
				field: s,
				sort: e
			}, d.autoSort && ("asc" === e ? a = layui.sort(r, s) : "desc" === e ? a = layui.sort(r, s, !0) :
				(a = layui.sort(r, k.config.indexName), delete n.sortKey)), o[d.response.dataName] = a || r,
			n.renderData(o, n.page, n.count, !0), i && layui.event.call(l, C, "sort(" + c + ")", {
				field: s,
				type: e
			})
	}, i.prototype.loading = function(e) {
		var t = this;
		t.config.loading && (e ? (t.layInit && t.layInit.remove(), delete t.layInit, t.layBox.find(
			".layui-table-init").remove()) : (t.layInit = v(['<div class="layui-table-init">',
			'<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',
			"</div>"
		].join("")), t.layBox.append(t.layInit)))
	}, i.prototype.setCheckData = function(e, t) {
		var i = this.config,
			a = k.cache[this.key];
		a[e] && "array" !== layui.type(a[e]) && (a[e][i.checkName] = t)
	}, i.prototype.syncCheckAll = function() {
		function e(i) {
			t.eachCols(function(e, t) {
				"checkbox" === t.type && (t[a.checkName] = i)
			})
		}
		var t = this,
			a = t.config,
			i = t.layHeader.find('input[name="layTableCheckbox"]');
		i[0] && (k.checkStatus(t.key).isAll ? (i[0].checked || (i.prop("checked", !0), t.renderForm(
			"checkbox")), e(!0)) : (i[0].checked && (i.prop("checked", !1), t.renderForm(
			"checkbox")), e(!1)))
	}, i.prototype.getCssRule = function(i, a) {
		var e = this.elem.find("style")[0],
			e = e.sheet || e.styleSheet || {},
			e = e.cssRules || e.rules;
		layui.each(e, function(e, t) {
			if (t.selectorText === ".laytable-cell-" + i) return a(t), !0
		})
	}, i.prototype.fullSize = function() {
		var e = this,
			t = e.config,
			i = t.height;
		e.fullHeightGap && (i = A.height() - e.fullHeightGap, e.elem.css("height", i = i < 135 ? 135 : i)),
			i && (i = parseFloat(i) - (e.layHeader.outerHeight() || 38), t.toolbar && (i -= e.layTool
				.outerHeight() || 50), t.totalRow && (i -= e.layTotal.outerHeight() || 40), t.page && (
				i -= e.layPage.outerHeight() || 41), e.layMain.css("height", i - 2))
	}, i.prototype.getScrollWidth = function(e) {
		var t = 0;
		return e ? t = e.offsetWidth - e.clientWidth : ((e = document.createElement("div")).style.width =
			"100px", e.style.height = "100px", e.style.overflowY = "scroll", document.body.appendChild(
				e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), t
	}, i.prototype.scrollPatch = function() {
		function e(e) {
			var t;
			a && l ? (e = e.eq(0)).find(".layui-table-patch")[0] || ((t = v(
				'<th class="layui-table-patch"><div class="layui-table-cell"></div></th>')).find(
				"div").css({
				width: a
			}), e.find("tr").append(t)) : e.find(".layui-table-patch").remove()
		}
		var t = this,
			i = t.layMain.children("table"),
			a = t.layMain.width() - t.layMain.prop("clientWidth"),
			l = t.layMain.height() - t.layMain.prop("clientHeight"),
			n = (t.getScrollWidth(t.layMain[0]), i.outerWidth() - t.layMain.width());
		e(t.layHeader), e(t.layTotal);
		var o = t.layMain.height() - l;
		t.layFixed.find(T).css("height", i.height() >= o ? o : "auto"), t.layFixRight[0 < n ?
			"removeClass" : "addClass"](w), t.layFixRight.css("right", a - 1)
	}, i.prototype.events = function() {
		var l, r = this,
			c = r.config,
			a = v("body"),
			n = {},
			e = r.layHeader.find("th"),
			s = ".layui-table-cell",
			u = c.elem.attr("lay-filter"),
			o = (r.layTool.on("click", "*[lay-event]", function(e) {
				function t(e) {
					var t = v(e.list),
						i = v('<ul class="layui-table-tool-panel"></ul>');
					i.html(t), c.height && i.css("max-height", c.height - (r.layTool
						.outerHeight() || 50)), a.find(".layui-table-tool-panel")[0] || a.append(i),
						r.renderForm(), i.on("click", function(e) {
							layui.stope(e)
						}), e.done && e.done(i, t)
				}
				var i, a = v(this),
					l = a.attr("lay-event");
				switch (layui.stope(e), R.trigger("table.tool.panel.remove"), b.close(r.tipsIndex),
					l) {
					case "LAYTABLE_COLS":
						t({
							list: (i = [], r.eachCols(function(e, t) {
								t.field && "normal" == t.type && i.push(
									'<li><input type="checkbox" name="' + t
									.field + '" data-key="' + t.key +
									'" data-parentkey="' + (t.parentKey ||
										"") + '" lay-skin="primary" ' + (t
										.hide ? "" : "checked") +
									' title="' + f.escape(t.title || t
										.field) +
									'" lay-filter="LAY_TABLE_TOOL_COLS"></li>'
									)
							}), i.join("")),
							done: function() {
								h.on("checkbox(LAY_TABLE_TOOL_COLS)", function(e) {
									var e = v(e.elem),
										a = this.checked,
										l = e.data("key"),
										n = e.data("parentkey");
									layui.each(c.cols, function(i, e) {
										layui.each(e, function(e, t) {
											i + "-" + e === l &&
												(e = t.hide, t
													.hide = !a,
													r.elem.find(
														'*[data-key="' +
														c
														.index +
														"-" +
														l + '"]'
														)[a ?
														"removeClass" :
														"addClass"
														](w),
													e != t
													.hide && r
													.setParentCol(
														!a, n),
													r.resize())
										})
									})
								})
							}
						});
						break;
					case "LAYTABLE_EXPORT":
						x.ie ? b.tips(
							"\u5bfc\u51fa\u529f\u80fd\u4e0d\u652f\u6301 IE\uff0c\u8bf7\u7528 Chrome \u7b49\u9ad8\u7ea7\u6d4f\u89c8\u5668\u5bfc\u51fa",
							this, {
								tips: 3
							}) : t({
							list: ['<li data-type="csv">\u5bfc\u51fa csv \u683c\u5f0f\u6587\u4ef6</li>',
								'<li data-type="xls">\u5bfc\u51fa xls \u683c\u5f0f\u6587\u4ef6</li>'
							].join(""),
							done: function(e, t) {
								t.on("click", function() {
									var e = v(this).data("type");
									k.exportFile.call(r, c.id, null, e)
								})
							}
						});
						break;
					case "LAYTABLE_PRINT":
						var n = window.open("\u6253\u5370\u7a97\u53e3", "_blank"),
							o = ["<style>", "body{font-size: 12px; color: #666;}",
								"table{width: 100%; border-collapse: collapse; border-spacing: 0;}",
								"th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #666;}",
								"a{color: #666; text-decoration:none;}",
								"*.layui-hide{display: none}", "</style>"
							].join(""),
							d = v(r.layHeader.html());
						d.append(r.layMain.find("table").html()), d.append(r.layTotal.find("table")
							.html()), d.find("th.layui-table-patch").remove(), d.find(
							".layui-table-col-special").remove(), n.document.write(o + d.prop(
							"outerHTML")), n.document.close(), n.print(), n.close()
				}
				layui.event.call(this, C, "toolbar(" + u + ")", v.extend({
					event: l,
					config: c
				}, {}))
			}), e.on("mousemove", function(e) {
				var t = v(this),
					i = t.offset().left,
					e = e.clientX - i;
				t.data("unresize") || n.resizeStart || (n.allowResize = t.width() - e <= 10, a.css(
					"cursor", n.allowResize ? "col-resize" : ""))
			}).on("mouseleave", function() {
				v(this);
				n.resizeStart || a.css("cursor", "")
			}).on("mousedown", function(e) {
				var t, i = v(this);
				n.allowResize && (t = i.data("key"), e.preventDefault(), n.resizeStart = !0, n
					.offset = [e.clientX, e.clientY], r.getCssRule(t, function(e) {
						var t = e.style.width || i.outerWidth();
						n.rule = e, n.ruleWidth = parseFloat(t), n.minWidth = i.data(
							"minwidth") || c.cellMinWidth
					}))
			}), R.on("mousemove", function(e) {
				n.resizeStart && (e.preventDefault(), n.rule && ((e = n.ruleWidth + e.clientX - n
						.offset[0]) < n.minWidth && (e = n.minWidth), n.rule.style.width =
					e + "px", b.close(r.tipsIndex)), l = 1)
			}).on("mouseup", function(e) {
				n.resizeStart && (n = {}, a.css("cursor", ""), r.scrollPatch()), 2 === l && (l =
					null)
			}), e.on("click", function(e) {
				var t = v(this),
					i = t.find(N),
					a = i.attr("lay-sort");
				if (!i[0] || 1 === l) return l = 2;
				r.sort(t, "asc" === a ? "desc" : "desc" === a ? null : "asc", null, !0)
			}).find(N + " .layui-edge ").on("click", function(e) {
				var t = v(this),
					i = t.index(),
					t = t.parents("th").eq(0).data("field");
				layui.stope(e), 0 === i ? r.sort(t, "asc", null, !0) : r.sort(t, "desc", null, !0)
			}), r.commonMember = function(e) {
				var t = v(this).parents("tr").eq(0).data("index"),
					d = r.layBody.find('tr[data-index="' + t + '"]'),
					c = (c = k.cache[r.key] || [])[t] || {};
				return v.extend({
					tr: d,
					data: k.clearCacheKey(c),
					del: function() {
						k.cache[r.key][t] = [], d.remove(), r.scrollPatch()
					},
					update: function(e) {
						e = e || {}, layui.each(e, function(a, l) {
							var n = d.children('td[data-field="' + a + '"]'),
								o = n.children(s);
							a in c && (c[a] = l), r.eachCols(function(e, t) {
								var i;
								t.field == a ? (o.html(m.call(r, {
										item3: t,
										content: l,
										tplData: c
									})), n.data("content", l), t
									.templet && r.renderForm()) : (t
									.templet || t.toolbar) && (e = d
									.children('td[data-field="' + (t
										.field || e) + '"]'), i = c[t
										.field], e.children(s).html(m
										.call(r, {
											item3: t,
											content: i,
											tplData: c
										})), e.data("content", i), r
									.renderForm())
							})
						})
					}
				}, e)
			}),
			t = (r.elem.on("click", 'input[name="layTableCheckbox"]+', function() {
				var e = v(this).prev(),
					t = r.layBody.find('input[name="layTableCheckbox"]'),
					i = e.parents("tr").eq(0).data("index"),
					a = e[0].checked,
					l = "layTableAllChoose" === e.attr("lay-filter");
				l ? (t.each(function(e, t) {
					t.checked = a, r.setCheckData(e, a)
				}), r.syncCheckAll(), r.renderForm("checkbox")) : (r.setCheckData(i, a), r
					.syncCheckAll()), layui.event.call(e[0], C, "checkbox(" + u + ")", o.call(e[
					0], {
					checked: a,
					type: l ? "all" : "one"
				}))
			}), r.elem.on("click", 'input[lay-type="layTableRadio"]+', function() {
				var e = v(this).prev(),
					t = e[0].checked,
					i = k.cache[r.key],
					a = e.parents("tr").eq(0).data("index");
				layui.each(i, function(e, t) {
					a === e ? t[c.checkName] = !0 : delete t[c.checkName]
				}), r.setThisRowChecked(a), layui.event.call(this, C, "radio(" + u + ")", o
					.call(this, {
						checked: t
					}))
			}), r.layBody.on("mouseenter", "tr", function() {
				var e = v(this),
					t = e.index();
				e.data("off") || r.layBody.find("tr:eq(" + t + ")").addClass(S)
			}).on("mouseleave", "tr", function() {
				var e = v(this),
					t = e.index();
				e.data("off") || r.layBody.find("tr:eq(" + t + ")").removeClass(S)
			}).on("click", "tr", function() {
				t.call(this, "row")
			}).on("dblclick", "tr", function() {
				t.call(this, "rowDouble")
			}), function(e) {
				var t = v(this);
				t.data("off") || layui.event.call(this, C, e + "(" + u + ")", o.call(t.children("td")[
					0]))
			}),
			d = (r.layBody.on("change", "." + L, function() {
				var e = v(this),
					t = this.value,
					i = e.parent().data("field"),
					e = e.parents("tr").eq(0).data("index");
				k.cache[r.key][e][i] = t, layui.event.call(this, C, "edit(" + u + ")", o.call(
				this, {
					value: t,
					field: i
				}))
			}).on("blur", "." + L, function() {
				var i, e, t = v(this),
					a = t.parent().data("field"),
					l = t.parents("tr").eq(0).data("index"),
					l = k.cache[r.key][l];
				r.eachCols(function(e, t) {
					t.field == a && t.templet && (i = t)
				}), t.siblings(s).html((e = this.value, m.call(r, {
					item3: i || {},
					content: e,
					tplData: l
				}))), t.parent().data("content", this.value), t.remove()
			}), r.layBody.on("click", "td", function(e) {
				var t = v(this),
					i = (t.data("field"), t.data("edit")),
					a = t.children(s);
				t.data("off") || i && ((i = v('<input class="layui-input ' + L + '">'))[0].value = t
					.data("content") || a.text(), t.find("." + L)[0] || t.append(i), i.focus(),
					layui.stope(e))
			}).on("mouseenter", "td", function() {
				i.call(this)
			}).on("mouseleave", "td", function() {
				i.call(this, "hide")
			}), "layui-table-grid-down"),
			i = function(e) {
				var t = v(this),
					i = t.children(s);
				t.data("off") || (e ? t.find(".layui-table-grid-down").remove() : i.prop("scrollWidth") > i
					.outerWidth() && (i.find("." + d)[0] || t.append('<div class="' + d +
						'"><i class="layui-icon layui-icon-down"></i></div>')))
			};
		r.layBody.on("click", "." + d, function(e) {
			var t = v(this).parent().children(s);
			r.tipsIndex = b.tips(['<div class="layui-table-tips-main" style="margin-top: -' + (t
					.height() + 16) + "px;" + ("sm" === c.size ?
					"padding: 4px 15px; font-size: 12px;" : "lg" === c.size ?
					"padding: 14px 15px;" : "") + '">', t.html(), "</div>",
				'<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'
			].join(""), t[0], {
				tips: [3, ""],
				time: -1,
				anim: -1,
				maxWidth: x.ios || x.android ? 300 : r.elem.width() / 2,
				isOutAnim: !1,
				skin: "layui-table-tips",
				success: function(e, t) {
					e.find(".layui-table-tips-c").on("click", function() {
						b.close(t)
					})
				}
			}), layui.stope(e)
		}), r.layBody.on("click", "*[lay-event]", function() {
			var e = v(this),
				t = e.parents("tr").eq(0).data("index");
			layui.event.call(this, C, "tool(" + u + ")", o.call(this, {
				event: e.attr("lay-event")
			})), r.setThisRowChecked(t)
		}), r.layMain.on("scroll", function() {
			var e = v(this),
				t = e.scrollLeft(),
				e = e.scrollTop();
			r.layHeader.scrollLeft(t), r.layTotal.scrollLeft(t), r.layFixed.find(T).scrollTop(e), b
				.close(r.tipsIndex)
		}), A.on("resize", function() {
			r.resize()
		})
	}, R.on("click", function() {
		R.trigger("table.remove.tool.panel")
	}), R.on("table.remove.tool.panel", function() {
		v(".layui-table-tool-panel").remove()
	}), k.init = function(i, a) {
		a = a || {};
		var e = v(i ? 'table[lay-filter="' + i + '"]' : ".layui-table[lay-data]"),
			l = "Table element property lay-data configuration item has a syntax error: ";
		return e.each(function() {
			var e = v(this),
				t = e.attr("lay-data");
			try {
				t = new Function("return " + t)()
			} catch (e) {
				p.error(l + t, "error")
			}
			var n = [],
				o = v.extend({
					elem: this,
					cols: [],
					data: [],
					skin: e.attr("lay-skin"),
					size: e.attr("lay-size"),
					even: "string" == typeof e.attr("lay-even")
				}, k.config, a, t);
			i && e.hide(), e.find("thead>tr").each(function(a) {
				o.cols[a] = [], v(this).children().each(function(e) {
					var t = v(this),
						i = t.attr("lay-data");
					try {
						i = new Function("return " + i)()
					} catch (e) {
						return p.error(l + i)
					}
					t = v.extend({
						title: t.text(),
						colspan: t.attr("colspan") || 0,
						rowspan: t.attr("rowspan") || 0
					}, i);
					t.colspan < 2 && n.push(t), o.cols[a].push(t)
				})
			}), e.find("tbody>tr").each(function(e) {
				var i = v(this),
					l = {};
				i.children("td").each(function(e, t) {
					var i = v(this),
						a = i.data("field");
					if (a) return l[a] = i.html()
				}), layui.each(n, function(e, t) {
					e = i.children("td").eq(e);
					l[t.field] = e.html()
				}), o.data[e] = l
			}), k.render(o)
		}), this
	}, y.that = {}, y.config = {}, k.eachCols = function(e, i, l) {
		function a(e) {
			layui.each(e || n, function(e, t) {
				if (t.CHILD_COLS) return a(t.CHILD_COLS);
				"function" == typeof i && i(e, t)
			})
		}
		var e = y.config[e] || {},
			n = [],
			o = 0;
		l = v.extend(!0, [], l || e.cols), layui.each(l, function(t, e) {
			layui.each(e, function(e, i) {
				var a;
				i.colGroup && (a = 0, o++, i.CHILD_COLS = [], layui.each(l[t + 1], function(
					e, t) {
					t.PARENT_COL_INDEX || 1 < a && a == i.colspan || (t
						.PARENT_COL_INDEX = o, i.CHILD_COLS.push(t), a +=
						parseInt(1 < t.colspan ? t.colspan : 1))
				})), i.PARENT_COL_INDEX || n.push(i)
			})
		});
		a()
	}, k.checkStatus = function(e) {
		var i = 0,
			a = 0,
			l = [],
			e = k.cache[e] || [];
		return layui.each(e, function(e, t) {
			"array" === layui.type(t) ? a++ : t[k.config.checkName] && (i++, l.push(k.clearCacheKey(
				t)))
		}), {
			data: l,
			isAll: !!e.length && i === e.length - a
		}
	}, k.getData = function(e) {
		var i = [],
			e = k.cache[e] || [];
		return layui.each(e, function(e, t) {
			"array" !== layui.type(t) && i.push(k.clearCacheKey(t))
		}), i
	}, k.exportFile = function(e, t, i) {
		var d, a, l, c, r = this,
			s = (t = t || k.clearCacheKey(k.cache[e]), y.that[e]),
			n = y.config[e] || {},
			o = {
				csv: "text/csv",
				xls: "application/vnd.ms-excel"
			} [i = i || "csv"],
			u = document.createElement("a");
		if (x.ie) return p.error("IE_NOT_SUPPORT_EXPORTS");
		u.href = "data:" + o + ";charset=utf-8,\ufeff" + encodeURIComponent((d = [], a = [], l = [], c = {},
				layui.each(t, function(l, n) {
					var o = [];
					"object" == typeof e ? (layui.each(e, function(e, t) {
						0 == l && d.push(t || "")
					}), layui.each(k.clearCacheKey(n), function(e, t) {
						o.push('"' + (t || "") + '"')
					})) : k.eachCols(e, function(e, t) {
						var i, a;
						t.field && "normal" == t.type && (t.hide ? 0 == l && (c[t.field] = !
							0) : (i = n[t.field], a = r.layBody.find(
							'tr[data-index="' + l + '"]>td'), null == i && (i =
							""), 0 == l && d.push(t.title || ""), o.push('"' + m
							.call(s, {
								item3: t,
								content: i,
								tplData: n,
								text: "text",
								obj: s.commonMember.call(a.eq(0), {
									td: function(e) {
										return a.filter(
											'[data-field="' +
											e + '"]')
									}
								})
							}) + '"')))
					}), a.push(o.join(","))
				}), layui.each(r.dataTotal, function(e, t) {
					c[e] || l.push(t)
				}), d.join(",") + "\r\n" + a.join("\r\n") + "\r\n" + l.join(","))), u.download = (n.title ||
				"table_" + (n.index || "")) + "." + i, document.body.appendChild(u), u.click(), document
			.body.removeChild(u)
	}, k.resize = function(e) {
		e ? a(e) && y.that[e].resize() : layui.each(y.that, function() {
			this.resize()
		})
	}, k.reload = function(e, t, i) {
		if (a(e)) return e = y.that[e], e.reload(t, i), y.call(e)
	}, k.render = function(e) {
		e = new i(e);
		return y.call(e)
	}, k.clearCacheKey = function(e) {
		return delete(e = v.extend({}, e))[k.config.checkName], delete e[k.config.indexName], e
	}, v(function() {
		k.init()
	}), e(C, k)
});
layui.define("form", function(e) {
	"use strict";

	function a() {
		var i = this,
			e = i.config,
			n = e.id || i.index;
		return a.that[n] = i, {
			config: a.config[n] = e,
			reload: function(e) {
				i.reload.call(i, e)
			},
			getChecked: function() {
				return i.getChecked.call(i)
			},
			setChecked: function(e) {
				return i.setChecked.call(i, e)
			}
		}
	}

	function i(e) {
		var i = this;
		i.index = ++l.index, i.config = u.extend({}, i.config, l.config, e), i.render()
	}
	var u = layui.$,
		n = layui.form,
		p = layui.layer,
		t = "tree",
		l = {
			config: {},
			index: layui[t] ? layui[t].index + 1e4 : 0,
			set: function(e) {
				var i = this;
				return i.config = u.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, t, e, i)
			}
		},
		y = "layui-hide",
		d = "layui-disabled",
		f = "layui-tree-set",
		C = "layui-tree-iconClick",
		k = "layui-icon-addition",
		v = "layui-icon-subtraction",
		m = "layui-tree-entry",
		x = "layui-tree-main",
		b = "layui-tree-txt",
		g = "layui-tree-pack",
		w = "layui-tree-spread",
		N = "layui-tree-setLineShort",
		T = "layui-tree-showLine",
		L = "layui-tree-lineExtend";
	i.prototype.config = {
		data: [],
		showCheckbox: !1,
		showLine: !0,
		accordion: !1,
		onlyIconControl: !1,
		isJump: !1,
		edit: !1,
		text: {
			defaultNodeName: "\u672a\u547d\u540d",
			none: "\u65e0\u6570\u636e"
		}
	}, i.prototype.reload = function(e) {
		var n = this;
		layui.each(e, function(e, i) {
			"array" === layui.type(i) && delete n.config[e]
		}), n.config = u.extend(!0, {}, n.config, e), n.render()
	}, i.prototype.render = function() {
		var e = this,
			i = e.config,
			n = (e.checkids = [], u('<div class="layui-tree' + (i.showCheckbox ? " layui-form" : "") + (i
					.showLine ? " layui-tree-line" : "") + '" lay-filter="LAY-tree-' + e.index +
				'"></div>')),
			a = (e.tree(n), i.elem = u(i.elem));
		if (a[0]) {
			if (e.key = i.id || e.index, e.elem = n, e.elemNone = u('<div class="layui-tree-emptyText">' + i
					.text.none + "</div>"), a.html(e.elem), 0 == e.elem.find(".layui-tree-set").length)
				return e.elem.append(e.elemNone);
			i.showCheckbox && e.renderForm("checkbox"), e.elem.find(".layui-tree-set").each(function() {
				var e = u(this);
				e.parent(".layui-tree-pack")[0] || e.addClass("layui-tree-setHide"), !e.next()[0] &&
					e.parents(".layui-tree-pack").eq(1).hasClass("layui-tree-lineExtend") && e
					.addClass(N), e.next()[0] || e.parents(".layui-tree-set").eq(0).next()[0] || e
					.addClass(N)
			}), e.events()
		}
	}, i.prototype.renderForm = function(e) {
		n.render(e, "LAY-tree-" + this.index)
	}, i.prototype.tree = function(l, e) {
		var r = this,
			c = r.config,
			e = e || c.data;
		layui.each(e, function(e, i) {
			var n = i.children && 0 < i.children.length,
				a = u('<div class="layui-tree-pack" ' + (i.spread ? 'style="display: block;"' :
					"") + "></div>"),
				t = u(['<div data-id="' + i.id + '" class="layui-tree-set' + (i.spread ?
						" layui-tree-spread" : "") + (i.checked ? " layui-tree-checkedFirst" :
						"") + '">', '<div class="layui-tree-entry">',
					'<div class="layui-tree-main">', c.showLine ? n ?
					'<span class="layui-tree-iconClick layui-tree-icon"><i class="layui-icon ' +
					(i.spread ? "layui-icon-subtraction" : "layui-icon-addition") +
					'"></i></span>' :
					'<span class="layui-tree-iconClick"><i class="layui-icon layui-icon-file"></i></span>' :
					'<span class="layui-tree-iconClick"><i class="layui-tree-iconArrow ' + (n ?
						"" : y) + '"></i></span>', c.showCheckbox ?
					'<input type="checkbox" name="' + (i.field || "layuiTreeCheck_" + i.id) +
					'" same="layuiTreeCheck" lay-skin="primary" ' + (i.disabled ? "disabled" :
						"") + ' value="' + i.id + '">' : "", c.isJump && i.href ? '<a href="' +
					i.href + '" target="_blank" class="' + b + '">' + (i.title || i.label || c
						.text.defaultNodeName) + "</a>" : '<span class="' + b + (i.disabled ?
						" " + d : "") + '">' + (i.title || i.label || c.text.defaultNodeName) +
					"</span>", "</div>",
					function() {
						if (!c.edit) return "";
						var n = {
								add: '<i class="layui-icon layui-icon-add-1"  data-type="add"></i>',
								update: '<i class="layui-icon layui-icon-edit" data-type="update"></i>',
								del: '<i class="layui-icon layui-icon-delete" data-type="del"></i>'
							},
							a = ['<div class="layui-btn-group layui-tree-btnGroup">'];
						return !0 === c.edit && (c.edit = ["update", "del"]), "object" ==
							typeof c.edit ? (layui.each(c.edit, function(e, i) {
								a.push(n[i] || "")
							}), a.join("") + "</div>") : void 0
					}(), "</div></div>"
				].join(""));
			n && (t.append(a), r.tree(a, i.children)), l.append(t), t.prev("." + f)[0] && t.prev()
				.children(".layui-tree-pack").addClass("layui-tree-showLine"), n || t.parent(
					".layui-tree-pack").addClass("layui-tree-lineExtend"), r.spread(t, i), c
				.showCheckbox && (i.checked && r.checkids.push(i.id), r.checkClick(t, i)), c.edit &&
				r.operate(t, i)
		})
	}, i.prototype.spread = function(a, e) {
		var t = this.config,
			i = a.children("." + m),
			n = i.children("." + x),
			l = i.find("." + C),
			i = i.find("." + b),
			r = t.onlyIconControl ? l : n,
			c = "";
		r.on("click", function(e) {
			var i = a.children("." + g),
				n = (r.children(".layui-icon")[0] ? r : r.find(".layui-tree-icon")).children(
					".layui-icon");
			i[0] ? a.hasClass(w) ? (a.removeClass(w), i.slideUp(200), n.removeClass(v).addClass(
				k)) : (a.addClass(w), i.slideDown(200), n.addClass(v).removeClass(k), t.accordion &&
					((i = a.siblings("." + f)).removeClass(w), i.children("." + g).slideUp(200), i
						.find(".layui-tree-icon").children(".layui-icon").removeClass(v).addClass(k)
						)) : c = "normal"
		}), i.on("click", function() {
			u(this).hasClass(d) || (c = a.hasClass(w) ? t.onlyIconControl ? "open" : "close" : t
				.onlyIconControl ? "close" : "open", t.click && t.click({
					elem: a,
					state: c,
					data: e
				}))
		})
	}, i.prototype.setCheckbox = function(e, i, n) {
		this.config;
		var t, l = n.prop("checked");
		n.prop("disabled") || ("object" != typeof i.children && !e.find("." + g)[0] || e.find("." + g).find(
			'input[same="layuiTreeCheck"]').each(function() {
			this.disabled || (this.checked = l)
		}), (t = function(e) {
			var i, n, a;
			e.parents("." + f)[0] && (n = (e = e.parent("." + g)).parent(), a = e.prev().find(
				'input[same="layuiTreeCheck"]'), l ? a.prop("checked", l) : (e.find(
				'input[same="layuiTreeCheck"]').each(function() {
				this.checked && (i = !0)
			}), i || a.prop("checked", !1)), t(n))
		})(e), this.renderForm("checkbox"))
	}, i.prototype.checkClick = function(n, a) {
		var t = this,
			l = t.config;
		n.children("." + m).children("." + x).on("click", 'input[same="layuiTreeCheck"]+', function(e) {
			layui.stope(e);
			var e = u(this).prev(),
				i = e.prop("checked");
			e.prop("disabled") || (t.setCheckbox(n, a, e), l.oncheck && l.oncheck({
				elem: n,
				checked: i,
				data: a
			}))
		})
	}, i.prototype.operate = function(c, d) {
		var s = this,
			o = s.config,
			e = c.children("." + m),
			h = e.children("." + x);
		e.children(".layui-tree-btnGroup").on("click", ".layui-icon", function(e) {
			layui.stope(e);
			var i, e = u(this).data("type"),
				a = c.children("." + g),
				t = {
					data: d,
					type: e,
					elem: c
				};
			if ("add" == e) {
				a[0] || (o.showLine ? (h.find("." + C).addClass("layui-tree-icon"), h.find("." + C)
						.children(".layui-icon").addClass(k).removeClass("layui-icon-file")) : h
					.find(".layui-tree-iconArrow").removeClass(y), c.append(
						'<div class="layui-tree-pack"></div>'));
				var n, l = o.operate && o.operate(t),
					r = {};
				if (r.title = o.text.defaultNodeName, r.id = l, s.tree(c.children("." + g), [r]), o
					.showLine && (a[0] ? (a.hasClass(L) || a.addClass(L), c.find("." + g).each(
							function() {
								u(this).children("." + f).last().addClass(N)
							}), (a.children("." + f).last().prev().hasClass(N) ? a.children(
							"." + f).last().prev() : a.children("." + f).last()).removeClass(N),
						!c.parent("." + g)[0] && c.next()[0] && a.children("." + f).last()
						.removeClass(N)) : (l = c.siblings("." + f), n = 1, r = c.parent("." +
							g), layui.each(l, function(e, i) {
							u(i).children("." + g)[0] || (n = 0)
						}), 1 == n ? (l.children("." + g).addClass(T), l.children("." + g)
							.children("." + f).removeClass(N), c.children("." + g).addClass(T),
							r.removeClass(L), r.children("." + f).last().children("." + g)
							.children("." + f).last().addClass(N)) : c.children("." + g)
						.children("." + f).addClass(N))), !o.showCheckbox) return;
				h.find('input[same="layuiTreeCheck"]')[0].checked && (c.children("." + g).children(
						"." + f).last().find('input[same="layuiTreeCheck"]')[0].checked = !0), s
					.renderForm("checkbox")
			} else "update" == e ? (l = h.children("." + b).html(), h.children("." + b).html(""), h
				.append('<input type="text" class="layui-tree-editInput">'), h.children(
					".layui-tree-editInput").val(l).focus(), i = function(e) {
					var i = (i = e.val().trim()) || o.text.defaultNodeName;
					e.remove(), h.children("." + b).html(i), t.data.title = i, o.operate && o
						.operate(t)
				}, h.children(".layui-tree-editInput").blur(function() {
					i(u(this))
				}), h.children(".layui-tree-editInput").on("keydown", function(e) {
					13 === e.keyCode && (e.preventDefault(), i(u(this)))
				})) : p.confirm(
				'\u786e\u8ba4\u5220\u9664\u8be5\u8282\u70b9 "<span style="color: #999;">' + (d
					.title || "") + '</span>" \u5417\uff1f',
				function(e) {
					if (o.operate && o.operate(t), t.status = "remove", p.close(e), !c.prev(
							"." + f)[0] && !c.next("." + f)[0] && !c.parent("." + g)[0])
					return c.remove(), void s.elem.append(s.elemNone);
					var l, n, i;
					c.siblings("." + f).children("." + m)[0] ? (o.showCheckbox && (l = function(
							e) {
							var i, n, a, t;
							e.parents("." + f)[0] && (i = e.siblings("." + f).children(
									"." + m), n = (e = e.parent("." + g).prev())
								.find('input[same="layuiTreeCheck"]')[0], a = 1, (
									t = 0) == n.checked && (i.each(function(e, i) {
									i = u(i).find(
										'input[same="layuiTreeCheck"]')[
										0];
									0 != i.checked || i.disabled || (a = 0),
										i.disabled || (t = 1)
								}), 1 == a && 1 == t && (n.checked = !0, s
									.renderForm("checkbox"), l(e.parent("." +
										f)))))
						})(c), o.showLine && (e = c.siblings("." + f), n = 1, i = c.parent(
								"." + g), layui.each(e, function(e, i) {
								u(i).children("." + g)[0] || (n = 0)
							}), 1 == n ? (a[0] || (i.removeClass(L), e.children("." + g)
									.addClass(T), e.children("." + g).children("." + f)
									.removeClass(N)), (c.next()[0] ? i.children("." + f)
									.last() : c.prev()).children("." + g).children("." + f)
								.last().addClass(N), c.next()[0] || c.parents("." + f)[1] ||
								c.parents("." + f).eq(0).next()[0] || c.prev("." + f)
								.addClass(N)) : !c.next()[0] && c.hasClass(N) && c.prev()
							.addClass(N))) : (e = c.parent("." + g).prev(), o.showLine ? (e
							.find("." + C).removeClass("layui-tree-icon"), e.find("." + C)
							.children(".layui-icon").removeClass(v).addClass(
								"layui-icon-file"), (i = e.parents("." + g).eq(0)).addClass(
								L), i.children("." + f).each(function() {
								u(this).children("." + g).children("." + f).last()
									.addClass(N)
							})) : e.find(".layui-tree-iconArrow").addClass(y), c.parents(
							"." + f).eq(0).removeClass(w), c.parent("." + g).remove()), c
						.remove()
				})
		})
	}, i.prototype.events = function() {
		var i = this,
			t = i.config;
		i.elem.find(".layui-tree-checkedFirst");
		i.setChecked(i.checkids), i.elem.find(".layui-tree-search").on("keyup", function() {
			var e = u(this),
				n = e.val(),
				e = e.nextAll(),
				a = [];
			e.find("." + b).each(function() {
					var i, e = u(this).parents("." + m); - 1 != u(this).html().indexOf(n) && (a
						.push(u(this).parent()), (i = function(e) {
							e.addClass("layui-tree-searchShow"), e.parent("." + g)[0] &&
								i(e.parent("." + g).parent("." + f))
						})(e.parent("." + f)))
				}), e.find("." + m).each(function() {
					var e = u(this).parent("." + f);
					e.hasClass("layui-tree-searchShow") || e.addClass(y)
				}), 0 == e.find(".layui-tree-searchShow").length && i.elem.append(i.elemNone), t
				.onsearch && t.onsearch({
					elem: a
				})
		}), i.elem.find(".layui-tree-search").on("keydown", function() {
			u(this).nextAll().find("." + m).each(function() {
				u(this).parent("." + f).removeClass("layui-tree-searchShow " + y)
			}), u(".layui-tree-emptyText")[0] && u(".layui-tree-emptyText").remove()
		})
	}, i.prototype.getChecked = function() {
		var e = this.config,
			i = [],
			n = [],
			t = (this.elem.find(".layui-form-checked").each(function() {
				i.push(u(this).prev()[0].value)
			}), function(e, a) {
				layui.each(e, function(e, n) {
					layui.each(i, function(e, i) {
						if (n.id == i) return delete(i = u.extend({}, n)).children, a
							.push(i), n.children && (i.children = [], t(n.children,
								i.children)), !0
					})
				})
			});
		return t(u.extend({}, e.data), n), n
	}, i.prototype.setChecked = function(l) {
		this.config;
		this.elem.find("." + f).each(function(e, i) {
			var n = u(this).data("id"),
				a = u(i).children("." + m).find('input[same="layuiTreeCheck"]'),
				t = a.next();
			if ("number" == typeof l) {
				if (n == l) return a[0].checked || t.click(), !1
			} else "object" == typeof l && layui.each(l, function(e, i) {
				if (i == n && !a[0].checked) return t.click(), !0
			})
		})
	}, a.that = {}, a.config = {}, l.reload = function(e, i) {
		e = a.that[e];
		return e.reload(i), a.call(e)
	}, l.getChecked = function(e) {
		return a.that[e].getChecked()
	}, l.setChecked = function(e, i) {
		return a.that[e].setChecked(i)
	}, l.render = function(e) {
		e = new i(e);
		return a.call(e)
	}, e(t, l)
});
layui.define(["laytpl", "form"], function(e) {
	"use strict";

	function i() {
		var a = this,
			e = a.config,
			t = e.id || a.index;
		return i.that[t] = a, {
			config: i.config[t] = e,
			reload: function(e) {
				a.reload.call(a, e)
			},
			getData: function() {
				return a.getData.call(a)
			}
		}
	}

	function a(e) {
		return ['<div class="layui-transfer-box" data-index="' + (e = e || {}).index + '">',
			'<div class="layui-transfer-header">', '<input type="checkbox" name="' + e.checkAllName +
			'" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{ d.data.title[' +
			e.index + "] || 'list" + (e.index + 1) + "' }}\">", "</div>", "{{# if(d.data.showSearch){ }}",
			'<div class="layui-transfer-search">', '<i class="layui-icon layui-icon-search"></i>',
			'<input type="input" class="layui-input" placeholder="\u5173\u952e\u8bcd\u641c\u7d22">',
			"</div>", "{{# } }}", '<ul class="layui-transfer-data"></ul>', "</div>"
		].join("")
	}

	function t(e) {
		var a = this;
		a.index = ++c.index, a.config = d.extend({}, a.config, c.config, e), a.render()
	}
	var d = layui.$,
		n = layui.laytpl,
		l = layui.form,
		r = "transfer",
		c = {
			config: {},
			index: layui[r] ? layui[r].index + 1e4 : 0,
			set: function(e) {
				var a = this;
				return a.config = d.extend({}, a.config, e), a
			},
			on: function(e, a) {
				return layui.onevent.call(this, r, e, a)
			}
		},
		s = "layui-hide",
		h = "layui-btn-disabled",
		o = "layui-none",
		u = "layui-transfer-box",
		f = "layui-transfer-header",
		y = "layui-transfer-search",
		p = "layui-transfer-data",
		v = ['<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{ d.index }}">',
			a({
				index: 0,
				checkAllName: "layTransferLeftCheckAll"
			}), '<div class="layui-transfer-active">',
			'<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">',
			'<i class="layui-icon layui-icon-next"></i>', "</button>",
			'<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">',
			'<i class="layui-icon layui-icon-prev"></i>', "</button>", "</div>", a({
				index: 1,
				checkAllName: "layTransferRightCheckAll"
			}), "</div>"
		].join("");
	t.prototype.config = {
		title: ["\u5217\u8868\u4e00", "\u5217\u8868\u4e8c"],
		width: 200,
		height: 360,
		data: [],
		value: [],
		showSearch: !1,
		id: "",
		text: {
			none: "\u65e0\u6570\u636e",
			searchNone: "\u65e0\u5339\u914d\u6570\u636e"
		}
	}, t.prototype.reload = function(e) {
		var a = this;
		a.config = d.extend({}, a.config, e), a.render()
	}, t.prototype.render = function() {
		var e = this,
			a = e.config,
			t = e.elem = d(n(v).render({
				data: a,
				index: e.index
			})),
			i = a.elem = d(a.elem);
		i[0] && (a.data = a.data || [], a.value = a.value || [], e.key = a.id || e.index, i.html(e.elem), e
			.layBox = e.elem.find("." + u), e.layHeader = e.elem.find("." + f), e.laySearch = e.elem
			.find("." + y), e.layData = t.find("." + p), e.layBtn = t.find(
				".layui-transfer-active .layui-btn"), e.layBox.css({
				width: a.width,
				height: a.height
			}), e.layData.css({
				height: (i = a.height - e.layHeader.outerHeight(), a.showSearch && (i -= e.laySearch
					.outerHeight()), i - 2)
			}), e.renderData(), e.events())
	}, t.prototype.renderData = function() {
		var e = this,
			i = (e.config, [{
				checkName: "layTransferLeftCheck",
				views: []
			}, {
				checkName: "layTransferRightCheck",
				views: []
			}]);
		e.parseData(function(e) {
				var a = e.selected ? 1 : 0,
					t = ["<li>", '<input type="checkbox" name="' + i[a].checkName +
						'" lay-skin="primary" lay-filter="layTransferCheckbox" title="' + e.title +
						'"' + (e.disabled ? " disabled" : "") + (e.checked ? " checked" : "") +
						' value="' + e.value + '">', "</li>"
					].join("");
				i[a].views.push(t), delete e.selected
			}), e.layData.eq(0).html(i[0].views.join("")), e.layData.eq(1).html(i[1].views.join("")), e
			.renderCheckBtn()
	}, t.prototype.renderForm = function(e) {
		l.render(e, "LAY-transfer-" + this.index)
	}, t.prototype.renderCheckBtn = function(r) {
		var c = this,
			o = c.config;
		r = r || {}, c.layBox.each(function(e) {
			var a = d(this),
				t = a.find("." + p),
				a = a.find("." + f).find('input[type="checkbox"]'),
				i = t.find('input[type="checkbox"]'),
				n = 0,
				l = !1;
			i.each(function() {
				var e = d(this).data("hide");
				(this.checked || this.disabled || e) && n++, this.checked && !e && (l = !0)
			}), a.prop("checked", l && n === i.length), c.layBtn.eq(e)[l ? "removeClass" :
				"addClass"](h), r.stopNone || (a = t.children("li:not(." + s + ")").length, c
				.noneView(t, a ? "" : o.text.none))
		}), c.renderForm("checkbox")
	}, t.prototype.noneView = function(e, a) {
		var t = d('<p class="layui-none">' + (a || "") + "</p>");
		e.find("." + o)[0] && e.find("." + o).remove(), a.replace(/\s/g, "") && e.append(t)
	}, t.prototype.setValue = function() {
		var e = this.config,
			a = [];
		return this.layBox.eq(1).find("." + p + ' input[type="checkbox"]').each(function() {
			d(this).data("hide") || a.push(this.value)
		}), e.value = a, this
	}, t.prototype.parseData = function(a) {
		var i = this.config,
			n = [];
		return layui.each(i.data, function(e, t) {
			t = ("function" == typeof i.parseData ? i.parseData(t) : t) || t, n.push(t = d
			.extend({}, t)), layui.each(i.value, function(e, a) {
				a == t.value && (t.selected = !0)
			}), a && a(t)
		}), i.data = n, this
	}, t.prototype.getData = function(e) {
		var a = this.config,
			i = [];
		return this.setValue(), layui.each(e || a.value, function(e, t) {
			layui.each(a.data, function(e, a) {
				delete a.selected, t == a.value && i.push(a)
			})
		}), i
	}, t.prototype.events = function() {
		var l = this,
			t = l.config;
		l.elem.on("click", 'input[lay-filter="layTransferCheckbox"]+', function() {
			var e = d(this).prev(),
				a = e[0].checked,
				t = e.parents("." + u).eq(0).find("." + p);
			e[0].disabled || ("all" === e.attr("lay-type") && t.find('input[type="checkbox"]').each(
				function() {
					this.disabled || (this.checked = a)
				}), l.renderCheckBtn({
				stopNone: !0
			}))
		}), l.layBtn.on("click", function() {
			var e = d(this),
				a = e.data("index"),
				i = l.layBox.eq(a),
				n = [];
			e.hasClass(h) || (l.layBox.eq(a).each(function(e) {
				d(this).find("." + p).children("li").each(function() {
					var e = d(this),
						a = e.find('input[type="checkbox"]'),
						t = a.data("hide");
					a[0].checked && !t && (a[0].checked = !1, i.siblings("." +
							u).find("." + p).append(e.clone()), e.remove(),
						n.push(a[0].value)), l.setValue()
				})
			}), l.renderCheckBtn(), "" !== (e = i.siblings("." + u).find("." + y +
				" input")).val() && e.trigger("keyup"), t.onchange && t.onchange(l.getData(
				n), a))
		}), l.laySearch.find("input").on("keyup", function() {
			var i = this.value,
				e = d(this).parents("." + y).eq(0).siblings("." + p),
				a = e.children("li"),
				a = (a.each(function() {
					var e = d(this),
						a = e.find('input[type="checkbox"]'),
						t = -1 !== a[0].title.indexOf(i);
					e[t ? "removeClass" : "addClass"](s), a.data("hide", !t)
				}), l.renderCheckBtn(), a.length === e.children("li." + s).length);
			l.noneView(e, a ? t.text.searchNone : "")
		})
	}, i.that = {}, i.config = {}, c.reload = function(e, a) {
		e = i.that[e];
		return e.reload(a), i.call(e)
	}, c.getData = function(e) {
		return i.that[e].getData()
	}, c.render = function(e) {
		e = new t(e);
		return i.call(e)
	}, e(r, c)
});
layui.define("jquery", function(e) {
	"use strict";

	function i(e) {
		var i = this;
		i.config = a.extend({}, i.config, n.config, e), i.render()
	}
	var a = layui.$,
		n = (layui.hint(), layui.device(), {
			config: {},
			set: function(e) {
				var i = this;
				return i.config = a.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, d, e, i)
			}
		}),
		d = "carousel",
		r = "layui-this",
		s = "layui-carousel-left",
		u = "layui-carousel-right",
		c = "layui-carousel-prev",
		m = "layui-carousel-next",
		t = "layui-carousel-arrow",
		l = "layui-carousel-ind";
	i.prototype.config = {
		width: "600px",
		height: "280px",
		full: !1,
		arrow: "hover",
		indicator: "inside",
		autoplay: !0,
		interval: 3e3,
		anim: "",
		trigger: "click",
		index: 0
	}, i.prototype.render = function() {
		var e = this,
			i = e.config;
		i.elem = a(i.elem), i.elem[0] && (e.elemItem = i.elem.find(">*[carousel-item]>*"), i.index < 0 && (i
				.index = 0), i.index >= e.elemItem.length && (i.index = e.elemItem.length - 1), i
			.interval < 800 && (i.interval = 800), i.full ? i.elem.css({
				position: "fixed",
				width: "100%",
				height: "100%",
				zIndex: 9999
			}) : i.elem.css({
				width: i.width,
				height: i.height
			}), i.elem.attr("lay-anim", i.anim), e.elemItem.eq(i.index).addClass(r), e.elemItem
			.length <= 1 || (e.indicator(), e.arrow(), e.autoplay(), e.events()))
	}, i.prototype.reload = function(e) {
		var i = this;
		clearInterval(i.timer), i.config = a.extend({}, i.config, e), i.render()
	}, i.prototype.prevIndex = function() {
		var e = this.config.index - 1;
		return e = e < 0 ? this.elemItem.length - 1 : e
	}, i.prototype.nextIndex = function() {
		var e = this.config.index + 1;
		return e = e >= this.elemItem.length ? 0 : e
	}, i.prototype.addIndex = function(e) {
		var i = this.config;
		i.index = i.index + (e = e || 1), i.index >= this.elemItem.length && (i.index = 0)
	}, i.prototype.subIndex = function(e) {
		var i = this.config;
		i.index = i.index - (e = e || 1), i.index < 0 && (i.index = this.elemItem.length - 1)
	}, i.prototype.autoplay = function() {
		var e = this,
			i = e.config;
		i.autoplay && (clearInterval(e.timer), e.timer = setInterval(function() {
			e.slide()
		}, i.interval))
	}, i.prototype.arrow = function() {
		var i = this,
			e = i.config,
			n = a(['<button class="layui-icon ' + t + '" lay-type="sub">' + ("updown" === e.anim ?
					"&#xe619;" : "&#xe603;") + "</button>", '<button class="layui-icon ' + t +
				'" lay-type="add">' + ("updown" === e.anim ? "&#xe61a;" : "&#xe602;") + "</button>"
			].join(""));
		e.elem.attr("lay-arrow", e.arrow), e.elem.find("." + t)[0] && e.elem.find("." + t).remove(), e.elem
			.append(n), n.on("click", function() {
				var e = a(this).attr("lay-type");
				i.slide(e)
			})
	}, i.prototype.indicator = function() {
		var i, n = this,
			t = n.config,
			e = n.elemInd = a(['<div class="' + l + '"><ul>', (i = [], layui.each(n.elemItem, function(e) {
				i.push("<li" + (t.index === e ? ' class="layui-this"' : "") + "></li>")
			}), i.join("")), "</ul></div>"].join(""));
		t.elem.attr("lay-indicator", t.indicator), t.elem.find("." + l)[0] && t.elem.find("." + l).remove(),
			t.elem.append(e), "updown" === t.anim && e.css("margin-top", -e.height() / 2), e.find("li").on(
				"hover" === t.trigger ? "mouseover" : t.trigger,
				function() {
					var e = a(this).index();
					e > t.index ? n.slide("add", e - t.index) : e < t.index && n.slide("sub", t.index - e)
				})
	}, i.prototype.slide = function(e, i) {
		var n = this,
			t = n.elemItem,
			a = n.config,
			l = a.index,
			o = a.elem.attr("lay-filter");
		n.haveSlide || ("sub" === e ? (n.subIndex(i), t.eq(a.index).addClass(c), setTimeout(function() {
				t.eq(l).addClass(u), t.eq(a.index).addClass(u)
			}, 50)) : (n.addIndex(i), t.eq(a.index).addClass(m), setTimeout(function() {
				t.eq(l).addClass(s), t.eq(a.index).addClass(s)
			}, 50)), setTimeout(function() {
				t.removeClass(r + " " + c + " " + m + " " + s + " " + u), t.eq(a.index).addClass(r),
					n.haveSlide = !1
			}, 300), n.elemInd.find("li").eq(a.index).addClass(r).siblings().removeClass(r), n
			.haveSlide = !0, layui.event.call(this, d, "change(" + o + ")", {
				index: a.index,
				prevIndex: l,
				item: t.eq(a.index)
			}))
	}, i.prototype.events = function() {
		var e = this,
			i = e.config;
		i.elem.data("haveEvents") || (i.elem.on("mouseenter", function() {
			clearInterval(e.timer)
		}).on("mouseleave", function() {
			e.autoplay()
		}), i.elem.data("haveEvents", !0))
	}, n.render = function(e) {
		return new i(e)
	}, e(d, n)
});
layui.define("jquery", function(e) {
	"use strict";

	function a(e) {
		var a = this;
		a.index = ++l.index, a.config = u.extend({}, a.config, l.config, e), a.render()
	}
	var u = layui.jquery,
		l = {
			config: {},
			index: layui.rate ? layui.rate.index + 1e4 : 0,
			set: function(e) {
				var a = this;
				return a.config = u.extend({}, a.config, e), a
			},
			on: function(e, a) {
				return layui.onevent.call(this, i, e, a)
			}
		},
		i = "rate",
		c = "layui-icon-rate",
		r = "layui-icon-rate-solid",
		o = "layui-icon-rate-half",
		s = "layui-icon-rate-solid layui-icon-rate-half",
		f = "layui-icon-rate layui-icon-rate-half";
	a.prototype.config = {
		length: 5,
		text: !1,
		readonly: !1,
		half: !1,
		value: 0,
		theme: ""
	}, a.prototype.render = function() {
		for (var e = this, a = e.config, l = a.theme ? 'style="color: ' + a.theme + ';"' : "", i = (a.elem =
					u(a.elem), a.value > a.length && (a.value = a.length), parseInt(a.value) === a.value ||
					a.half || (a.value = Math.ceil(a.value) - a.value < .5 ? Math.ceil(a.value) : Math
						.floor(a.value)), '<ul class="layui-rate" ' + (a.readonly ? "readonly" : "") + ">"),
				n = 1; n <= a.length; n++) {
			var t = '<li class="layui-inline"><i class="layui-icon ' + (n > Math.floor(a.value) ? c : r) +
				'" ' + l + "></i></li>";
			a.half && parseInt(a.value) !== a.value && n == Math.ceil(a.value) ? i = i +
				'<li><i class="layui-icon layui-icon-rate-half" ' + l + "></i></li>" : i += t
		}
		i += "</ul>" + (a.text ? '<span class="layui-inline">' + a.value + "\u661f" : "") + "</span>";
		var o = a.elem,
			s = o.next(".layui-rate");
		s[0] && s.remove(), e.elemTemp = u(i), a.span = e.elemTemp.next("span"), a.setText && a.setText(a
			.value), o.html(e.elemTemp), o.addClass("layui-inline"), a.readonly || e.action()
	}, a.prototype.setvalue = function(e) {
		this.config.value = e, this.render()
	}, a.prototype.action = function() {
		var i = this.config,
			n = this.elemTemp,
			t = n.find("i").width();
		n.children("li").each(function(e) {
			var a = e + 1,
				l = u(this);
			l.on("click", function(e) {
				i.value = a, i.half && e.pageX - u(this).offset().left <= t / 2 && (i
					.value = i.value - .5), i.text && n.next("span").text(i.value +
					"\u661f"), i.choose && i.choose(i.value), i.setText && i.setText(i
					.value)
			}), l.on("mousemove", function(e) {
				n.find("i").each(function() {
					u(this).addClass(c).removeClass(s)
				}), n.find("i:lt(" + a + ")").each(function() {
					u(this).addClass(r).removeClass(f)
				}), i.half && e.pageX - u(this).offset().left <= t / 2 && l.children(
					"i").addClass(o).removeClass(r)
			}), l.on("mouseleave", function() {
				n.find("i").each(function() {
					u(this).addClass(c).removeClass(s)
				}), n.find("i:lt(" + Math.floor(i.value) + ")").each(function() {
					u(this).addClass(r).removeClass(f)
				}), i.half && parseInt(i.value) !== i.value && n.children("li:eq(" +
					Math.floor(i.value) + ")").children("i").addClass(o).removeClass(
					"layui-icon-rate-solid layui-icon-rate")
			})
		})
	}, a.prototype.events = function() {
		this.config
	}, l.render = function(e) {
		e = new a(e);
		return function() {
			var a = this;
			return {
				setvalue: function(e) {
					a.setvalue.call(a, e)
				},
				config: a.config
			}
		}.call(e)
	}, e(i, l)
});
layui.define("jquery", function(l) {
	"use strict";

	function e(l) {}
	var g = layui.$;
	e.prototype.load = function(l) {
		var t, i, n, e, r, o, a, c, m, s, u, f, y, d = this,
			p = 0,
			h = g((l = l || {}).elem);
		if (h[0]) return e = g(l.scrollElem || document), r = l.mb || 50, o = !("isAuto" in l) || l.isAuto,
			a = l.end || "\u6ca1\u6709\u66f4\u591a\u4e86", c = l.scrollElem && l.scrollElem !==
			document, m = "<cite>\u52a0\u8f7d\u66f4\u591a</cite>", s = g(
				'<div class="layui-flow-more"><a href="javascript:;">' + m + "</a></div>"), h.find(
				".layui-flow-more")[0] || h.append(s), u = function(l, e) {
				l = g(l), s.before(l), (e = 0 == e || null) ? s.html(a) : s.find("a").html(m), i = e,
					t = null, y && y()
			}, f = function() {
				t = !0, s.find("a").html(
					'<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>'
					), "function" == typeof l.done && l.done(++p, u)
			}, f(), s.find("a").on("click", function() {
				g(this);
				i || t || f()
			}), l.isLazyimg && (y = d.lazyimg({
				elem: l.elem + " img",
				scrollElem: l.scrollElem
			})), o && e.on("scroll", function() {
				var e = g(this),
					o = e.scrollTop();
				n && clearTimeout(n), !i && h.width() && (n = setTimeout(function() {
					var l = (c ? e : g(window)).height();
					(c ? e.prop("scrollHeight") : document.documentElement
					.scrollHeight) - o - l <= r && (t || f())
				}, 100))
			}), d
	}, e.prototype.lazyimg = function(l) {
		var e, c = this,
			m = 0,
			s = g((l = l || {}).scrollElem || document),
			u = l.elem || "img",
			f = l.scrollElem && l.scrollElem !== document,
			y = function(e, l) {
				var o, t = s.scrollTop(),
					l = t + l,
					i = f ? e.offset().top - s.offset().top + t : e.offset().top;
				t <= i && i <= l && e.attr("lay-src") && (o = e.attr("lay-src"), layui.img(o, function() {
					var l = c.lazyimg.elem.eq(m);
					e.attr("src", o).removeAttr("lay-src"), l[0] && n(l), m++
				}, function() {
					c.lazyimg.elem.eq(m);
					e.removeAttr("lay-src")
				}))
			},
			n = function(l, e) {
				var o = (f ? e || s : g(window)).height(),
					t = s.scrollTop(),
					i = t + o;
				if (c.lazyimg.elem = g(u), l) y(l, o);
				else
					for (var n = 0; n < c.lazyimg.elem.length; n++) {
						var r = c.lazyimg.elem.eq(n),
							a = f ? r.offset().top - s.offset().top + t : r.offset().top;
						if (y(r, o), m = n, i < a) break
					}
			};
		return n(), s.on("scroll", function() {
			var l = g(this);
			e && clearTimeout(e), e = setTimeout(function() {
				n(null, l)
			}, 50)
		}), n
	}, l("flow", new e)
});
layui.define(["layer", "form"], function(t) {
	"use strict";

	function e() {
		this.index = 0, this.config = {
			tool: ["strong", "italic", "underline", "del", "|", "left", "center", "right", "|", "link",
				"unlink"
			],
			hideTool: [],
			height: 280
		}
	}

	function c(t, e, i) {
		var l, a, n = this.document,
			o = document.createElement(t);
		for (l in e) o.setAttribute(l, e[l]);
		o.removeAttribute("text"), n.selection ? (a = i.text || e.text, "a" === t && !a || (a && (o.innerHTML =
			a), i.pasteHTML(d(o).prop("outerHTML")), i.select())) : (a = i.toString() || e.text, "a" ===
			t && !a || (a && (o.innerHTML = a), i.deleteContents(), i.insertNode(o)))
	}

	function u(e, t) {
		function i(t) {
			return e.find(".layedit-tool-" + t)
		}
		var l = this.document,
			a = "layedit-tool-active",
			l = b(v(l));
		t && t[t.hasClass(a) ? "removeClass" : "addClass"](a), e.find(">i").removeClass(a), i("unlink")
			.addClass(m), d(l).parents().each(function() {
				var t = this.tagName.toLowerCase(),
					e = this.style.textAlign;
				"b" !== t && "strong" !== t || i("b").addClass(a), "i" !== t && "em" !== t || i("i")
					.addClass(a), "u" === t && i("u").addClass(a), "strike" === t && i("d").addClass(a),
					"p" === t && i("center" === e ? "center" : "right" === e ? "right" : "left").addClass(
					a), "a" === t && (i("link").addClass(a), i("unlink").removeClass(m))
			})
	}
	var d = layui.$,
		y = layui.layer,
		a = layui.form,
		f = (layui.hint(), layui.device()),
		i = "layedit",
		m = "layui-disabled",
		p = (e.prototype.set = function(t) {
			return d.extend(!0, this.config, t), this
		}, e.prototype.on = function(t, e) {
			return layui.onevent(i, t, e)
		}, e.prototype.build = function(t, e) {
			e = e || {};
			var i, l, a = this,
				n = a.config,
				o = "layui-layedit",
				s = d("string" == typeof t ? "#" + t : t),
				r = "LAY_layedit_" + ++a.index,
				c = s.next("." + o),
				n = d.extend({}, n, e),
				e = (i = [], l = {}, layui.each(n.hideTool, function(t, e) {
					l[e] = !0
				}), layui.each(n.tool, function(t, e) {
					C[e] && !l[e] && i.push(C[e])
				}), i.join("")),
				o = d(['<div class="' + o + '">', '<div class="layui-unselect layui-layedit-tool">' + e +
					"</div>", '<div class="layui-layedit-iframe">', '<iframe id="' + r + '" name="' +
					r + '" textarea="' + t + '" frameborder="0"></iframe>', "</div>", "</div>"
				].join(""));
			return f.ie && f.ie < 8 ? s.removeClass("layui-hide").addClass("layui-show") : (c[0] && c
				.remove(), p.call(a, o, s[0], n), s.addClass("layui-hide").after(o), a.index)
		}, e.prototype.getContent = function(t) {
			t = n(t);
			if (t[0]) return l(t[0].document.body.innerHTML)
		}, e.prototype.getText = function(t) {
			t = n(t);
			if (t[0]) return d(t[0].document.body).text()
		}, e.prototype.setContent = function(t, e, i) {
			var l = n(t);
			l[0] && (i ? d(l[0].document.body).append(e) : d(l[0].document.body).html(e), layedit.sync(t))
		}, e.prototype.sync = function(t) {
			t = n(t);
			t[0] && d("#" + t[1].attr("textarea")).val(l(t[0].document.body.innerHTML))
		}, e.prototype.getSelection = function(t) {
			var t = n(t);
			if (t[0]) return t = v(t[0].document), document.selection ? t.text : t.toString()
		}, function(a, n, o) {
			var s = this,
				r = a.find("iframe");
			r.css({
				height: o.height
			}).on("load", function() {
				var t = r.contents(),
					e = r.prop("contentWindow"),
					i = t.find("head"),
					l = d(["<style>", "*{margin: 0; padding: 0;}",
						"body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}",
						"a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}",
						"p{margin-bottom: 10px;}",
						"img{display: inline-block; border: none; vertical-align: middle;}",
						"pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}",
						"</style>"
					].join("")),
					t = t.find("body");
				i.append(l), t.attr("contenteditable", "true").css({
					"min-height": o.height
				}).html(n.value || ""), h.apply(s, [e, r, n, o]), g.call(s, e, a, o)
			})
		}),
		n = function(t) {
			t = d("#LAY_layedit_" + t);
			return [t.prop("contentWindow"), t]
		},
		l = function(t) {
			return t = 8 == f.ie ? t.replace(/<.+>/g, function(t) {
				return t.toLowerCase()
			}) : t
		},
		h = function(e, t, i, l) {
			var a = e.document,
				n = d(a.body);
			n.on("keydown", function(t) {
				if (13 === t.keyCode) {
					var e = v(a);
					if ("pre" === b(e).parentNode.tagName.toLowerCase()) return t.shiftKey ? void 0 : (y
						.msg("\u8bf7\u6682\u65f6\u7528shift+enter"), !1);
					a.execCommand("formatBlock", !1, "<p>")
				}
			}), d(i).parents("form").on("submit", function() {
				var t = n.html();
				8 == f.ie && (t = t.replace(/<.+>/g, function(t) {
					return t.toLowerCase()
				})), i.value = t
			}), n.on("paste", function(t) {
				a.execCommand("formatBlock", !1, "<p>"), setTimeout(function() {
					o.call(e, n), i.value = n.html()
				}, 100)
			})
		},
		o = function(t) {
			this.document;
			t.find("*[style]").each(function() {
				var t = this.style.textAlign;
				this.removeAttribute("style"), d(this).css({
					"text-align": t || ""
				})
			}), t.find("table").addClass("layui-table"), t.find("script,link").remove()
		},
		v = function(t) {
			return t.selection ? t.selection.createRange() : t.getSelection().getRangeAt(0)
		},
		b = function(t) {
			return t.endContainer || t.parentElement().childNodes[0]
		},
		g = function(a, t, e) {
			function i() {
				var t, e = d(this),
					i = e.attr("layedit-event"),
					l = e.attr("lay-command");
				e.hasClass(m) || (o.focus(), (t = v(n)).commonAncestorContainer, l ? (n.execCommand(l),
					/justifyLeft|justifyCenter|justifyRight/.test(l) && n.execCommand("formatBlock", !1,
						"<p>"), setTimeout(function() {
						o.focus()
					}, 10)) : s[i] && s[i].call(this, t), u.call(a, r, e))
			}
			var n = a.document,
				o = d(n.body),
				s = {
					link: function(i) {
						var t = b(i),
							l = d(t).parent();
						x.call(o, {
							href: l.attr("href"),
							target: l.attr("target")
						}, function(t) {
							var e = l[0];
							"A" === e.tagName ? e.href = t.url : c.call(a, "a", {
								target: t.target,
								href: t.url,
								text: t.url
							}, i)
						})
					},
					unlink: function(t) {
						n.execCommand("unlink")
					},
					code: function(e) {
						k.call(o, function(t) {
							c.call(a, "pre", {
								text: t.code,
								"lay-lang": t.lang
							}, e)
						})
					},
					help: function() {
						y.open({
							type: 2,
							title: "\u5e2e\u52a9",
							area: ["600px", "380px"],
							shadeClose: !0,
							shade: .1,
							skin: "layui-layer-msg",
							content: ["", "no"]
						})
					}
				},
				r = t.find(".layui-layedit-tool"),
				l = /image/;
			r.find(">i").on("mousedown", function() {
				var t = d(this).attr("layedit-event");
				l.test(t) || i.call(this)
			}).on("click", function() {
				var t = d(this).attr("layedit-event");
				l.test(t) && i.call(this)
			}), o.on("click", function() {
				u.call(a, r)
			})
		},
		x = function(t, i) {
			var l = this,
				t = y.open({
					type: 1,
					id: "LAY_layedit_link",
					area: "350px",
					shade: .05,
					shadeClose: !0,
					moveType: 1,
					title: "\u8d85\u94fe\u63a5",
					skin: "layui-layer-msg",
					content: ['<ul class="layui-form" style="margin: 15px;">',
						'<li class="layui-form-item">',
						'<label class="layui-form-label" style="width: 60px;">URL</label>',
						'<div class="layui-input-block" style="margin-left: 90px">',
						'<input name="url" lay-verify="url" value="' + (t.href || "") +
						'" autofocus="true" autocomplete="off" class="layui-input">', "</div>", "</li>",
						'<li class="layui-form-item">',
						'<label class="layui-form-label" style="width: 60px;">\u6253\u5f00\u65b9\u5f0f</label>',
						'<div class="layui-input-block" style="margin-left: 90px">',
						'<input type="radio" name="target" value="_self" class="layui-input" title="\u5f53\u524d\u7a97\u53e3"' +
						("_self" !== t.target && t.target ? "" : "checked") + ">",
						'<input type="radio" name="target" value="_blank" class="layui-input" title="\u65b0\u7a97\u53e3" ' +
						("_blank" === t.target ? "checked" : "") + ">", "</div>", "</li>",
						'<li class="layui-form-item" style="text-align: center;">',
						'<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> \u786e\u5b9a </button>',
						'<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> \u53d6\u6d88 </button>',
						"</li>", "</ul>"
					].join(""),
					success: function(t, e) {
						a.render("radio"), t.find(".layui-btn-primary").on("click", function() {
							y.close(e), l.focus()
						}), a.on("submit(layedit-link-yes)", function(t) {
							y.close(x.index), i && i(t.field)
						})
					}
				});
			x.index = t
		},
		k = function(i) {
			var l = this,
				t = y.open({
					type: 1,
					id: "LAY_layedit_code",
					area: "550px",
					shade: .05,
					shadeClose: !0,
					moveType: 1,
					title: "\u63d2\u5165\u4ee3\u7801",
					skin: "layui-layer-msg",
					content: ['<ul class="layui-form layui-form-pane" style="margin: 15px;">',
						'<li class="layui-form-item">',
						'<label class="layui-form-label">\u8bf7\u9009\u62e9\u8bed\u8a00</label>',
						'<div class="layui-input-block">', '<select name="lang">',
						'<option value="JavaScript">JavaScript</option>',
						'<option value="HTML">HTML</option>', '<option value="CSS">CSS</option>',
						'<option value="Java">Java</option>', '<option value="PHP">PHP</option>',
						'<option value="C#">C#</option>', '<option value="Python">Python</option>',
						'<option value="Ruby">Ruby</option>', '<option value="Go">Go</option>',
						"</select>", "</div>", "</li>", '<li class="layui-form-item layui-form-text">',
						'<label class="layui-form-label">\u4ee3\u7801</label>',
						'<div class="layui-input-block">',
						'<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>',
						"</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">',
						'<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> \u786e\u5b9a </button>',
						'<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> \u53d6\u6d88 </button>',
						"</li>", "</ul>"
					].join(""),
					success: function(t, e) {
						a.render("select"), t.find(".layui-btn-primary").on("click", function() {
							y.close(e), l.focus()
						}), a.on("submit(layedit-code-yes)", function(t) {
							y.close(k.index), i && i(t.field)
						})
					}
				});
			k.index = t
		},
		C = {
			html: '<i class="layui-icon layedit-tool-html" title="HTML\u6e90\u4ee3\u7801" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>',
			strong: '<i class="layui-icon layedit-tool-b" title="\u52a0\u7c97" lay-command="Bold" layedit-event="b"">&#xe62b;</i>',
			italic: '<i class="layui-icon layedit-tool-i" title="\u659c\u4f53" lay-command="italic" layedit-event="i"">&#xe644;</i>',
			underline: '<i class="layui-icon layedit-tool-u" title="\u4e0b\u5212\u7ebf" lay-command="underline" layedit-event="u"">&#xe646;</i>',
			del: '<i class="layui-icon layedit-tool-d" title="\u5220\u9664\u7ebf" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>',
			"|": '<span class="layedit-tool-mid"></span>',
			left: '<i class="layui-icon layedit-tool-left" title="\u5de6\u5bf9\u9f50" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>',
			center: '<i class="layui-icon layedit-tool-center" title="\u5c45\u4e2d\u5bf9\u9f50" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>',
			right: '<i class="layui-icon layedit-tool-right" title="\u53f3\u5bf9\u9f50" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>',
			link: '<i class="layui-icon layedit-tool-link" title="\u63d2\u5165\u94fe\u63a5" layedit-event="link"">&#xe64c;</i>',
			unlink: '<i class="layui-icon layedit-tool-unlink layui-disabled" title="\u6e05\u9664\u94fe\u63a5" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>',
			face: '<i class="layui-icon layedit-tool-face" title="\u8868\u60c5" layedit-event="face"">&#xe650;</i>',
			image: '<i class="layui-icon layedit-tool-image" title="\u56fe\u7247" layedit-event="image">&#xe64a;<input type="file" name="file"></i>',
			code: '<i class="layui-icon layedit-tool-code" title="\u63d2\u5165\u4ee3\u7801" layedit-event="code">&#xe64e;</i>',
			help: '<i class="layui-icon layedit-tool-help" title="\u5e2e\u52a9" layedit-event="help">&#xe607;</i>'
		},
		s = new e;
	t(i, s)
});
layui.define("jquery", function(e) {
	"use strict";
	var t = layui.$;
	e("code", function(i) {
		var e = [];
		(i = i || {}).elem = t(i.elem || ".layui-code"), i.lang = "lang" in i ? i.lang : "code", i.elem
			.each(function() {
				e.push(this)
			}), layui.each(e.reverse(), function(e, a) {
				var a = t(a),
					l = a.html(),
					l = ((a.attr("lay-encode") || i.encode) && (l = l.replace(
						/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(
						/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")), a.html(
						'<ol class="layui-code-ol"><li>' + l.replace(/[\r\t\n]+/g,
						"</li><li>") + "</li></ol>"), a.find(">.layui-code-h3")[0] || a.prepend(
						'<h3 class="layui-code-h3">' + (a.attr("lay-title") || i.title ||
							"&lt;/&gt;") + '<a href="javascript:;">' + (a.attr("lay-lang") || i
							.lang || "") + "</a></h3>"), a.find(">.layui-code-ol"));
				a.addClass("layui-box layui-code-view"), (a.attr("lay-skin") || i.skin) && a
					.addClass("layui-code-" + (a.attr("lay-skin") || i.skin)), 0 < (l.find("li")
						.length / 100 | 0) && l.css("margin-left", (l.find("li").length / 100 | 0) +
						"px"), (a.attr("lay-height") || i.height) && l.css("max-height", a.attr(
						"lay-height") || i.height)
			})
	})
}).addcss("modules/code.css?v=2", "skincodecss");
