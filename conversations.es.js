var hr = Object.defineProperty;
var ht = (e) => {
  throw TypeError(e);
};
var $r = (e, t, r) => t in e ? hr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var M = (e, t, r) => $r(e, typeof t != "symbol" ? t + "" : t, r), $t = (e, t, r) => t.has(e) || ht("Cannot " + r);
var C = (e, t, r) => ($t(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Be = (e, t, r) => t.has(e) ? ht("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ve = (e, t, r, n) => ($t(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const wr = "5";
var Ct;
typeof window < "u" && ((Ct = window.__svelte ?? (window.__svelte = {})).v ?? (Ct.v = /* @__PURE__ */ new Set())).add(wr);
const pr = 1, gr = 2, mr = 16, yr = 2, et = "[", tt = "[!", rt = "]", ue = {}, O = Symbol(), wt = !1;
var nt = Array.isArray, Er = Array.prototype.indexOf, lt = Array.from, Re = Object.keys, Se = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, br = Object.prototype, kr = Array.prototype, Tr = Object.getPrototypeOf, pt = Object.isExtensible;
function Ot(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const F = 2, Rt = 4, Le = 8, it = 16, W = 32, re = 64, st = 128, S = 256, De = 512, j = 1024, G = 2048, ne = 4096, K = 8192, ft = 16384, St = 32768, ut = 65536, gt = 1 << 18, Nr = 1 << 19, Dt = 1 << 20, Ge = 1 << 21, Ye = Symbol("$state"), xr = Symbol("legacy props"), It = 3, pe = 8;
function Pt(e) {
  return e === this.v;
}
function Ar(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ft(e) {
  return !Ar(e, this.v);
}
function Cr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Or() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Rr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Dr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ir() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let jr = !1, P = null;
function mt(e) {
  P = e;
}
function jt(e, t = !1, r) {
  var n = P = {
    p: P,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Vr(() => {
    n.d = !0;
  });
}
function Mt(e) {
  const t = P;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = p, n = $;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var i = s[l];
          oe(i.effect), Q(i.reaction), zt(i.fn);
        }
      } finally {
        oe(r), Q(n);
      }
    }
    P = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Lt() {
  return !0;
}
function fe(e) {
  if (typeof e != "object" || e === null || Ye in e)
    return e;
  const t = Tr(e);
  if (t !== br && t !== kr)
    return e;
  var r = /* @__PURE__ */ new Map(), n = nt(e), l = /* @__PURE__ */ L(0), i = $, s = (f) => {
    var u = $;
    Q(i);
    var o = f();
    return Q(u), o;
  };
  return n && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, u, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Ir();
        var d = r.get(u);
        return d === void 0 ? d = s(() => {
          var v = /* @__PURE__ */ L(o.value);
          return r.set(u, v), v;
        }) : T(d, o.value, !0), !0;
      },
      deleteProperty(f, u) {
        var o = r.get(u);
        if (o === void 0) {
          if (u in f) {
            const a = s(() => /* @__PURE__ */ L(O));
            r.set(u, a), Ue(l);
          }
        } else {
          if (n && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(u);
            Number.isInteger(v) && v < d.v && T(d, v);
          }
          T(o, O), Ue(l);
        }
        return !0;
      },
      get(f, u, o) {
        var c;
        if (u === Ye)
          return e;
        var d = r.get(u), v = u in f;
        if (d === void 0 && (!v || (c = ae(f, u)) != null && c.writable) && (d = s(() => {
          var _ = fe(v ? f[u] : O), w = /* @__PURE__ */ L(_);
          return w;
        }), r.set(u, d)), d !== void 0) {
          var a = b(d);
          return a === O ? void 0 : a;
        }
        return Reflect.get(f, u, o);
      },
      getOwnPropertyDescriptor(f, u) {
        var o = Reflect.getOwnPropertyDescriptor(f, u);
        if (o && "value" in o) {
          var d = r.get(u);
          d && (o.value = b(d));
        } else if (o === void 0) {
          var v = r.get(u), a = v == null ? void 0 : v.v;
          if (v !== void 0 && a !== O)
            return {
              enumerable: !0,
              configurable: !0,
              value: a,
              writable: !0
            };
        }
        return o;
      },
      has(f, u) {
        var a;
        if (u === Ye)
          return !0;
        var o = r.get(u), d = o !== void 0 && o.v !== O || Reflect.has(f, u);
        if (o !== void 0 || p !== null && (!d || (a = ae(f, u)) != null && a.writable)) {
          o === void 0 && (o = s(() => {
            var c = d ? fe(f[u]) : O, _ = /* @__PURE__ */ L(c);
            return _;
          }), r.set(u, o));
          var v = b(o);
          if (v === O)
            return !1;
        }
        return d;
      },
      set(f, u, o, d) {
        var N;
        var v = r.get(u), a = u in f;
        if (n && u === "length")
          for (var c = o; c < /** @type {Source<number>} */
          v.v; c += 1) {
            var _ = r.get(c + "");
            _ !== void 0 ? T(_, O) : c in f && (_ = s(() => /* @__PURE__ */ L(O)), r.set(c + "", _));
          }
        if (v === void 0)
          (!a || (N = ae(f, u)) != null && N.writable) && (v = s(() => /* @__PURE__ */ L(void 0)), T(v, fe(o)), r.set(u, v));
        else {
          a = v.v !== O;
          var w = s(() => fe(o));
          T(v, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(f, u);
        if (y != null && y.set && y.set.call(d, o), !a) {
          if (n && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              r.get("length")
            ), g = Number(u);
            Number.isInteger(g) && g >= h.v && T(h, g + 1);
          }
          Ue(l);
        }
        return !0;
      },
      ownKeys(f) {
        b(l);
        var u = Reflect.ownKeys(f).filter((v) => {
          var a = r.get(v);
          return a === void 0 || a.v !== O;
        });
        for (var [o, d] of r)
          d.v !== O && !(o in f) && u.push(o);
        return u;
      },
      setPrototypeOf() {
        Pr();
      }
    }
  );
}
function Ue(e, t = 1) {
  T(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  var t = F | G, r = $ !== null && ($.f & F) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return p === null || r !== null && (r.f & S) !== 0 ? t |= S : p.f |= Dt, {
    ctx: P,
    deps: null,
    effects: null,
    equals: Pt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? p
  };
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  const t = /* @__PURE__ */ at(e);
  return t.equals = Ft, t;
}
function qt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      J(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Lr(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & F) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Ht(e) {
  var t, r = p;
  oe(Lr(e));
  try {
    qt(e), t = fr(e);
  } finally {
    oe(r);
  }
  return t;
}
function Bt(e) {
  var t = Ht(e);
  if (e.equals(t) || (e.v = t, e.wv = ir()), !ce) {
    var r = (Z || (e.f & S) !== 0) && e.deps !== null ? ne : j;
    B(e, r);
  }
}
const ge = /* @__PURE__ */ new Map();
function Ie(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Pt,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = Ie(e);
  return en(r), r;
}
// @__NO_SIDE_EFFECTS__
function ot(e, t = !1, r = !0) {
  const n = Ie(e);
  return t || (n.equals = Ft), n;
}
function T(e, t, r = !1) {
  $ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!H || ($.f & gt) !== 0) && Lt() && ($.f & (F | it | gt)) !== 0 && !(k != null && k[1].includes(e) && k[0] === $) && Fr();
  let n = r ? fe(t) : t;
  return Vt(e, n);
}
function Vt(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    ce ? ge.set(e, t) : ge.set(e, r), e.v = t, (e.f & F) !== 0 && ((e.f & G) !== 0 && Ht(
      /** @type {Derived} */
      e
    ), B(e, (e.f & S) === 0 ? j : ne)), e.wv = ir(), Yt(e, G), p !== null && (p.f & j) !== 0 && (p.f & (W | re)) === 0 && (D === null ? tn([e]) : D.push(e));
  }
  return t;
}
function Yt(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, l = 0; l < n; l++) {
      var i = r[l], s = i.f;
      (s & G) === 0 && (B(i, t), (s & (j | S)) !== 0 && ((s & F) !== 0 ? Yt(
        /** @type {Derived} */
        i,
        ne
      ) : _t(
        /** @type {Effect} */
        i
      )));
    }
}
function qe(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let E = !1;
function U(e) {
  E = e;
}
let m;
function q(e) {
  if (e === null)
    throw qe(), ue;
  return m = e;
}
function Ne() {
  return q(
    /** @type {TemplateNode} */
    /* @__PURE__ */ le(m)
  );
}
function $e(e) {
  if (E) {
    if (/* @__PURE__ */ le(m) !== null)
      throw qe(), ue;
    m = e;
  }
}
function Je() {
  for (var e = 0, t = m; ; ) {
    if (t.nodeType === pe) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === rt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === et || r === tt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ le(t)
    );
    t.remove(), t = n;
  }
}
function Ut(e) {
  if (!e || e.nodeType !== pe)
    throw qe(), ue;
  return (
    /** @type {Comment} */
    e.data
  );
}
var yt, Kt, Gt, Jt;
function We() {
  if (yt === void 0) {
    yt = window, Kt = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Gt = ae(t, "firstChild").get, Jt = ae(t, "nextSibling").get, pt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), pt(r) && (r.__t = void 0);
  }
}
function me(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return Gt.call(e);
}
// @__NO_SIDE_EFFECTS__
function le(e) {
  return Jt.call(e);
}
function Ae(e, t) {
  if (!E)
    return /* @__PURE__ */ ye(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ye(m)
  );
  if (r === null)
    r = m.appendChild(me());
  else if (t && r.nodeType !== It) {
    var n = me();
    return r == null || r.before(n), q(n), n;
  }
  return q(r), r;
}
function qr(e, t = 1, r = !1) {
  let n = E ? m : e;
  for (var l; t--; )
    l = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ le(n);
  if (!E)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== It) {
    var i = me();
    return n === null ? l == null || l.after(i) : n.before(i), q(i), i;
  }
  return q(n), /** @type {TemplateNode} */
  n;
}
function Wt(e) {
  e.textContent = "";
}
function Hr(e) {
  p === null && $ === null && Rr(), $ !== null && ($.f & S) !== 0 && p === null && Or(), ce && Cr();
}
function Br(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ie(e, t, r, n = !0) {
  var l = p, i = {
    ctx: P,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | G,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      dt(i), i.f |= St;
    } catch (u) {
      throw J(i), u;
    }
  else t !== null && _t(i);
  var s = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Dt | st)) === 0;
  if (!s && n && (l !== null && Br(i, l), $ !== null && ($.f & F) !== 0)) {
    var f = (
      /** @type {Derived} */
      $
    );
    (f.effects ?? (f.effects = [])).push(i);
  }
  return i;
}
function Vr(e) {
  const t = ie(Le, null, !1);
  return B(t, j), t.teardown = e, t;
}
function Yr(e) {
  Hr();
  var t = p !== null && (p.f & W) !== 0 && P !== null && !P.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      P
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: p,
      reaction: $
    });
  } else {
    var n = zt(e);
    return n;
  }
}
function Ur(e) {
  const t = ie(re, e, !0);
  return () => {
    J(t);
  };
}
function Kr(e) {
  const t = ie(re, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Pe(t, () => {
      J(t), n(void 0);
    }) : (J(t), n(void 0));
  });
}
function zt(e) {
  return ie(Rt, e, !1);
}
function Gr(e) {
  return ie(Le, e, !0);
}
function Et(e, t = [], r = at) {
  const n = t.map(r);
  return ct(() => e(...n.map(b)));
}
function ct(e, t = 0) {
  return ie(Le | it | t, e, !0);
}
function Ee(e, t = !0) {
  return ie(Le | W, e, !0, t);
}
function Xt(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ce, n = $;
    bt(!0), Q(null);
    try {
      t.call(null);
    } finally {
      bt(r), Q(n);
    }
  }
}
function Zt(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    (r.f & re) !== 0 ? r.parent = null : J(r, t), r = n;
  }
}
function Jr(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & W) === 0 && J(t), t = r;
  }
}
function J(e, t = !0) {
  var r = !1;
  (t || (e.f & Nr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Wr(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Zt(e, t && !r), Me(e, 0), B(e, ft);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  Xt(e);
  var l = e.parent;
  l !== null && l.first !== null && Qt(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Wr(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ le(e)
    );
    e.remove(), e = r;
  }
}
function Qt(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Pe(e, t) {
  var r = [];
  vt(e, r, !0), er(r, () => {
    J(e), t && t();
  });
}
function er(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var l of e)
      l.out(n);
  } else
    t();
}
function vt(e, t, r) {
  if ((e.f & K) === 0) {
    if (e.f ^= K, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var l = n.next, i = (n.f & ut) !== 0 || (n.f & W) !== 0;
      vt(n, t, i ? r : !1), n = l;
    }
  }
}
function Fe(e) {
  tr(e, !0);
}
function tr(e, t) {
  if ((e.f & K) !== 0) {
    e.f ^= K;
    for (var r = e.first; r !== null; ) {
      var n = r.next, l = (r.f & ut) !== 0 || (r.f & W) !== 0;
      tr(r, l ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let be = [], ze = [];
function rr() {
  var e = be;
  be = [], Ot(e);
}
function zr() {
  var e = ze;
  ze = [], Ot(e);
}
function Xr(e) {
  be.length === 0 && queueMicrotask(rr), be.push(e);
}
function Zr() {
  be.length > 0 && rr(), ze.length > 0 && zr();
}
function Qr(e) {
  var t = (
    /** @type {Effect} */
    p
  );
  if ((t.f & St) === 0) {
    if ((t.f & st) === 0)
      throw e;
    t.fn(e);
  } else
    nr(e, t);
}
function nr(e, t) {
  for (; t !== null; ) {
    if ((t.f & st) !== 0)
      try {
        t.fn(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let ke = !1, Te = null, te = !1, ce = !1;
function bt(e) {
  ce = e;
}
let we = [];
let $ = null, H = !1;
function Q(e) {
  $ = e;
}
let p = null;
function oe(e) {
  p = e;
}
let k = null;
function en(e) {
  $ !== null && $.f & Ge && (k === null ? k = [$, [e]] : k[1].push(e));
}
let A = null, R = 0, D = null;
function tn(e) {
  D = e;
}
let lr = 1, je = 0, Z = !1;
function ir() {
  return ++lr;
}
function He(e) {
  var v;
  var t = e.f;
  if ((t & G) !== 0)
    return !0;
  if ((t & ne) !== 0) {
    var r = e.deps, n = (t & S) !== 0;
    if (r !== null) {
      var l, i, s = (t & De) !== 0, f = n && p !== null && !Z, u = r.length;
      if (s || f) {
        var o = (
          /** @type {Derived} */
          e
        ), d = o.parent;
        for (l = 0; l < u; l++)
          i = r[l], (s || !((v = i == null ? void 0 : i.reactions) != null && v.includes(o))) && (i.reactions ?? (i.reactions = [])).push(o);
        s && (o.f ^= De), f && d !== null && (d.f & S) === 0 && (o.f ^= S);
      }
      for (l = 0; l < u; l++)
        if (i = r[l], He(
          /** @type {Derived} */
          i
        ) && Bt(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || p !== null && !Z) && B(e, j);
  }
  return !1;
}
function sr(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var l = 0; l < n.length; l++) {
      var i = n[l];
      k != null && k[1].includes(e) && k[0] === $ || ((i.f & F) !== 0 ? sr(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? B(i, G) : (i.f & j) !== 0 && B(i, ne), _t(
        /** @type {Effect} */
        i
      )));
    }
}
function fr(e) {
  var c;
  var t = A, r = R, n = D, l = $, i = Z, s = k, f = P, u = H, o = e.f;
  A = /** @type {null | Value[]} */
  null, R = 0, D = null, Z = (o & S) !== 0 && (H || !te || $ === null), $ = (o & (W | re)) === 0 ? e : null, k = null, mt(e.ctx), H = !1, je++, e.f |= Ge;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (A !== null) {
      var a;
      if (Me(e, R), v !== null && R > 0)
        for (v.length = R + A.length, a = 0; a < A.length; a++)
          v[R + a] = A[a];
      else
        e.deps = v = A;
      if (!Z || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (o & F) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (a = R; a < v.length; a++)
          ((c = v[a]).reactions ?? (c.reactions = [])).push(e);
    } else v !== null && R < v.length && (Me(e, R), v.length = R);
    if (Lt() && D !== null && !H && v !== null && (e.f & (F | ne | G)) === 0)
      for (a = 0; a < /** @type {Source[]} */
      D.length; a++)
        sr(
          D[a],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (je++, D !== null && (n === null ? n = D : n.push(.../** @type {Source[]} */
    D))), d;
  } catch (_) {
    Qr(_);
  } finally {
    A = t, R = r, D = n, $ = l, Z = i, k = s, mt(f), H = u, e.f ^= Ge;
  }
}
function rn(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Er.call(r, e);
    if (n !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[n] = r[l], r.pop());
    }
  }
  r === null && (t.f & F) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (A === null || !A.includes(t)) && (B(t, ne), (t.f & (S | De)) === 0 && (t.f ^= De), qt(
    /** @type {Derived} **/
    t
  ), Me(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Me(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      rn(e, r[n]);
}
function dt(e) {
  var t = e.f;
  if ((t & ft) === 0) {
    B(e, j);
    var r = p, n = te;
    p = e, te = !0;
    try {
      (t & it) !== 0 ? Jr(e) : Zt(e), Xt(e);
      var l = fr(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = lr;
      var i;
      wt && jr && (e.f & G) !== 0 && e.deps;
    } finally {
      te = n, p = r;
    }
  }
}
function nn() {
  try {
    Sr();
  } catch (e) {
    if (Te !== null)
      nr(e, Te);
    else
      throw e;
  }
}
function ur() {
  var e = te;
  try {
    var t = 0;
    for (te = !0; we.length > 0; ) {
      t++ > 1e3 && nn();
      var r = we, n = r.length;
      we = [];
      for (var l = 0; l < n; l++) {
        var i = sn(r[l]);
        ln(i);
      }
      ge.clear();
    }
  } finally {
    ke = !1, te = e, Te = null;
  }
}
function ln(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      (n.f & (ft | K)) === 0 && He(n) && (dt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Qt(n) : n.fn = null));
    }
}
function _t(e) {
  ke || (ke = !0, queueMicrotask(ur));
  for (var t = Te = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (re | W)) !== 0) {
      if ((r & j) === 0) return;
      t.f ^= j;
    }
  }
  we.push(t);
}
function sn(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, l = (n & (W | re)) !== 0, i = l && (n & j) !== 0;
    if (!i && (n & K) === 0) {
      (n & Rt) !== 0 ? t.push(r) : l ? r.f ^= j : He(r) && dt(r);
      var s = r.first;
      if (s !== null) {
        r = s;
        continue;
      }
    }
    var f = r.parent;
    for (r = r.next; r === null && f !== null; )
      r = f.next, f = f.parent;
  }
  return t;
}
function Xe(e) {
  for (var t; ; ) {
    if (Zr(), we.length === 0)
      return ke = !1, Te = null, /** @type {T} */
      t;
    ke = !0, ur();
  }
}
function b(e) {
  var t = e.f, r = (t & F) !== 0;
  if ($ !== null && !H) {
    if (!(k != null && k[1].includes(e)) || k[0] !== $) {
      var n = $.deps;
      e.rv < je && (e.rv = je, A === null && n !== null && n[R] === e ? R++ : A === null ? A = [e] : (!Z || !A.includes(e)) && A.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), i = l.parent;
    i !== null && (i.f & S) === 0 && (l.f ^= S);
  }
  return r && (l = /** @type {Derived} */
  e, He(l) && Bt(l)), ce && ge.has(e) ? ge.get(e) : e.v;
}
function fn(e) {
  var t = H;
  try {
    return H = !0, e();
  } finally {
    H = t;
  }
}
const un = -7169;
function B(e, t) {
  e.f = e.f & un | t;
}
const an = /* @__PURE__ */ new Set(), kt = /* @__PURE__ */ new Set();
function Ce(e) {
  var g;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, l = ((g = e.composedPath) == null ? void 0 : g.call(e)) || [], i = (
    /** @type {null | Element} */
    l[0] || e.target
  ), s = 0, f = e.__root;
  if (f) {
    var u = l.indexOf(f);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var o = l.indexOf(t);
    if (o === -1)
      return;
    u <= o && (s = u);
  }
  if (i = /** @type {Element} */
  l[s] || e.target, i !== t) {
    Se(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = $, v = p;
    Q(null), oe(null);
    try {
      for (var a, c = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + n];
          if (w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (nt(w)) {
              var [y, ...h] = w;
              y.apply(i, [e, ...h]);
            } else
              w.call(i, e);
        } catch (N) {
          a ? c.push(N) : a = N;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        i = _;
      }
      if (a) {
        for (let N of c)
          queueMicrotask(() => {
            throw N;
          });
        throw a;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Q(d), oe(v);
    }
  }
}
function on(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ze(e, t) {
  var r = (
    /** @type {Effect} */
    p
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  var r = (t & yr) !== 0, n, l = !e.startsWith("<!>");
  return () => {
    if (E)
      return Ze(m, null), m;
    n === void 0 && (n = on(l ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ ye(n));
    var i = (
      /** @type {TemplateNode} */
      r || Kt ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Ze(i, i), i;
  };
}
function ee(e, t) {
  if (E) {
    p.nodes_end = m, Ne();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const cn = ["touchstart", "touchmove"];
function vn(e) {
  return cn.includes(e);
}
function Tt(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function ar(e, t) {
  return or(e, t);
}
function dn(e, t) {
  We(), t.intro = t.intro ?? !1;
  const r = t.target, n = E, l = m;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(r)
    ); i && (i.nodeType !== pe || /** @type {Comment} */
    i.data !== et); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ le(i);
    if (!i)
      throw ue;
    U(!0), q(
      /** @type {Comment} */
      i
    ), Ne();
    const s = or(e, { ...t, anchor: i });
    if (m === null || m.nodeType !== pe || /** @type {Comment} */
    m.data !== rt)
      throw qe(), ue;
    return U(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === ue)
      return t.recover === !1 && Dr(), We(), Wt(r), U(!1), ar(e, t);
    throw s;
  } finally {
    U(n), q(l);
  }
}
const se = /* @__PURE__ */ new Map();
function or(e, { target: t, anchor: r, props: n = {}, events: l, context: i, intro: s = !0 }) {
  We();
  var f = /* @__PURE__ */ new Set(), u = (v) => {
    for (var a = 0; a < v.length; a++) {
      var c = v[a];
      if (!f.has(c)) {
        f.add(c);
        var _ = vn(c);
        t.addEventListener(c, Ce, { passive: _ });
        var w = se.get(c);
        w === void 0 ? (document.addEventListener(c, Ce, { passive: _ }), se.set(c, 1)) : se.set(c, w + 1);
      }
    }
  };
  u(lt(an)), kt.add(u);
  var o = void 0, d = Kr(() => {
    var v = r ?? t.appendChild(me());
    return Ee(() => {
      if (i) {
        jt({});
        var a = (
          /** @type {ComponentContext} */
          P
        );
        a.c = i;
      }
      l && (n.$$events = l), E && Ze(
        /** @type {TemplateNode} */
        v,
        null
      ), o = e(v, n) || {}, E && (p.nodes_end = m), i && Mt();
    }), () => {
      var _;
      for (var a of f) {
        t.removeEventListener(a, Ce);
        var c = (
          /** @type {number} */
          se.get(a)
        );
        --c === 0 ? (document.removeEventListener(a, Ce), se.delete(a)) : se.set(a, c);
      }
      kt.delete(u), v !== r && ((_ = v.parentNode) == null || _.removeChild(v));
    };
  });
  return Qe.set(o, d), o;
}
let Qe = /* @__PURE__ */ new WeakMap();
function _n(e, t) {
  const r = Qe.get(e);
  return r ? (Qe.delete(e), r(t)) : Promise.resolve();
}
function Ke(e, t, [r, n] = [0, 0]) {
  E && r === 0 && Ne();
  var l = e, i = null, s = null, f = O, u = r > 0 ? ut : 0, o = !1;
  const d = (a, c = !0) => {
    o = !0, v(c, a);
  }, v = (a, c) => {
    if (f === (f = a)) return;
    let _ = !1;
    if (E && n !== -1) {
      if (r === 0) {
        const y = Ut(l);
        y === et ? n = 0 : y === tt ? n = 1 / 0 : (n = parseInt(y.substring(1)), n !== n && (n = f ? 1 / 0 : -1));
      }
      const w = n > r;
      !!f === w && (l = Je(), q(l), U(!1), _ = !0, n = -1);
    }
    f ? (i ? Fe(i) : c && (i = Ee(() => c(l))), s && Pe(s, () => {
      s = null;
    })) : (s ? Fe(s) : c && (s = Ee(() => c(l, [r + 1, n]))), i && Pe(i, () => {
      i = null;
    })), _ && U(!0);
  };
  ct(() => {
    o = !1, t(d), o || v(null, null);
  }, u), E && (l = m);
}
function hn(e, t) {
  return t;
}
function $n(e, t, r, n) {
  for (var l = [], i = t.length, s = 0; s < i; s++)
    vt(t[s].e, l, !0);
  var f = i > 0 && l.length === 0 && r !== null;
  if (f) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Wt(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), X(e, t[0].prev, t[i - 1].next);
  }
  er(l, () => {
    for (var o = 0; o < i; o++) {
      var d = t[o];
      f || (n.delete(d.k), X(e, d.prev, d.next)), J(d.e, !f);
    }
  });
}
function wn(e, t, r, n, l, i = null) {
  var s = e, f = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var u = (
      /** @type {Element} */
      e
    );
    s = E ? q(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ye(u)
    ) : u.appendChild(me());
  }
  E && Ne();
  var o = null, d = !1, v = /* @__PURE__ */ Mr(() => {
    var a = r();
    return nt(a) ? a : a == null ? [] : lt(a);
  });
  ct(() => {
    var a = b(v), c = a.length;
    if (d && c === 0)
      return;
    d = c === 0;
    let _ = !1;
    if (E) {
      var w = Ut(s) === tt;
      w !== (c === 0) && (s = Je(), q(s), U(!1), _ = !0);
    }
    if (E) {
      for (var y = null, h, g = 0; g < c; g++) {
        if (m.nodeType === pe && /** @type {Comment} */
        m.data === rt) {
          s = /** @type {Comment} */
          m, _ = !0, U(!1);
          break;
        }
        var N = a[g], V = n(N, g);
        h = cr(
          m,
          f,
          y,
          null,
          N,
          V,
          g,
          l,
          t,
          r
        ), f.items.set(V, h), y = h;
      }
      c > 0 && q(Je());
    }
    E || pn(a, f, s, l, t, n, r), i !== null && (c === 0 ? o ? Fe(o) : o = Ee(() => i(s)) : o !== null && Pe(o, () => {
      o = null;
    })), _ && U(!0), b(v);
  }), E && (s = m);
}
function pn(e, t, r, n, l, i, s) {
  var f = e.length, u = t.items, o = t.first, d = o, v, a = null, c = [], _ = [], w, y, h, g;
  for (g = 0; g < f; g += 1) {
    if (w = e[g], y = i(w, g), h = u.get(y), h === void 0) {
      var N = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : r;
      a = cr(
        N,
        t,
        a,
        a === null ? t.first : a.next,
        w,
        y,
        g,
        n,
        l,
        s
      ), u.set(y, a), c = [], _ = [], d = a.next;
      continue;
    }
    if (gn(h, w, g), (h.e.f & K) !== 0 && Fe(h.e), h !== d) {
      if (v !== void 0 && v.has(h)) {
        if (c.length < _.length) {
          var V = _[0], x;
          a = V.prev;
          var z = c[0], de = c[c.length - 1];
          for (x = 0; x < c.length; x += 1)
            Nt(c[x], V, r);
          for (x = 0; x < _.length; x += 1)
            v.delete(_[x]);
          X(t, z.prev, de.next), X(t, a, z), X(t, de, V), d = V, a = de, g -= 1, c = [], _ = [];
        } else
          v.delete(h), Nt(h, d, r), X(t, h.prev, h.next), X(t, h, a === null ? t.first : a.next), X(t, a, h), a = h;
        continue;
      }
      for (c = [], _ = []; d !== null && d.k !== y; )
        (d.e.f & K) === 0 && (v ?? (v = /* @__PURE__ */ new Set())).add(d), _.push(d), d = d.next;
      if (d === null)
        continue;
      h = d;
    }
    c.push(h), a = h, d = h.next;
  }
  if (d !== null || v !== void 0) {
    for (var _e = v === void 0 ? [] : lt(v); d !== null; )
      (d.e.f & K) === 0 && _e.push(d), d = d.next;
    var he = _e.length;
    if (he > 0) {
      var xe = f === 0 ? r : null;
      $n(t, _e, xe, u);
    }
  }
  p.first = t.first && t.first.e, p.last = a && a.e;
}
function gn(e, t, r, n) {
  Vt(e.v, t), e.i = r;
}
function cr(e, t, r, n, l, i, s, f, u, o) {
  var d = (u & pr) !== 0, v = (u & mr) === 0, a = d ? v ? /* @__PURE__ */ ot(l, !1, !1) : Ie(l) : l, c = (u & gr) === 0 ? s : Ie(s), _ = {
    i: c,
    v: a,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return _.e = Ee(() => f(e, a, c, o), E), _.e.prev = r && r.e, _.e.next = n && n.e, r === null ? t.first = _ : (r.next = _, r.e.next = _.e), n !== null && (n.prev = _, n.e.prev = _.e), _;
  } finally {
  }
}
function Nt(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, l = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ le(i)
    );
    l.before(i), i = s;
  }
}
function X(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function mn(e, t, r, n, l) {
  var f;
  E && Ne();
  var i = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  i === !0 && (i = t.children, s = !0), i === void 0 || i(e, s ? () => n : n);
}
function yn(e, t) {
  Xr(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const l = document.createElement("style");
      l.id = t.hash, l.textContent = t.code, n.appendChild(l);
    }
  });
}
function xt(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function At(e, t, r, n) {
  var l;
  l = /** @type {V} */
  e[t];
  var i = (
    /** @type {V} */
    n
  ), s = !0, f = !1, u = () => (f = !0, s && (s = !1, i = /** @type {V} */
  n), i);
  l === void 0 && n !== void 0 && (l = u());
  var o;
  o = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? u() : (s = !0, f = !1, c);
  };
  var d = !1, v = /* @__PURE__ */ ot(l), a = /* @__PURE__ */ at(() => {
    var c = o(), _ = b(v);
    return d ? (d = !1, _) : v.v = c;
  });
  return function(c, _) {
    if (arguments.length > 0) {
      const w = _ ? b(a) : c;
      if (!a.equals(w)) {
        if (d = !0, T(v, w), f && i !== void 0 && (i = w), xt(a))
          return c;
        fn(() => b(a));
      }
      return c;
    }
    return xt(a) ? a.v : b(a);
  };
}
function En(e) {
  return new bn(e);
}
var Y, I;
class bn {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Be(this, Y);
    /** @type {Record<string, any>} */
    Be(this, I);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (s, f) => {
      var u = /* @__PURE__ */ ot(f, !1, !1);
      return r.set(s, u), u;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return b(r.get(f) ?? n(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === xr ? !0 : (b(r.get(f) ?? n(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, u) {
          return T(r.get(f) ?? n(f, u), u), Reflect.set(s, f, u);
        }
      }
    );
    Ve(this, I, (t.hydrate ? dn : ar)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && Xe(), Ve(this, Y, l.$$events);
    for (const s of Object.keys(C(this, I)))
      s === "$set" || s === "$destroy" || s === "$on" || Se(this, s, {
        get() {
          return C(this, I)[s];
        },
        /** @param {any} value */
        set(f) {
          C(this, I)[s] = f;
        },
        enumerable: !0
      });
    C(this, I).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, C(this, I).$destroy = () => {
      _n(C(this, I));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    C(this, I).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    C(this, Y)[t] = C(this, Y)[t] || [];
    const n = (...l) => r.call(this, ...l);
    return C(this, Y)[t].push(n), () => {
      C(this, Y)[t] = C(this, Y)[t].filter(
        /** @param {any} fn */
        (l) => l !== n
      );
    };
  }
  $destroy() {
    C(this, I).$destroy();
  }
}
Y = new WeakMap(), I = new WeakMap();
let vr;
typeof HTMLElement == "function" && (vr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    M(this, "$$ctor");
    /** Slots */
    M(this, "$$s");
    /** @type {any} The Svelte component instance */
    M(this, "$$c");
    /** Whether or not the custom element is connected */
    M(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    M(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    M(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    M(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    M(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    M(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    M(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const l = this.$$c.$on(t, r);
      this.$$l_u.set(r, l);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const l = this.$$l_u.get(r);
      l && (l(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(l) {
        return (i) => {
          const s = document.createElement("slot");
          l !== "default" && (s.name = l), ee(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = kn(this);
      for (const l of this.$$s)
        l in n && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const i = this.$$g_p(l.name);
        i in this.$$d || (this.$$d[i] = Oe(i, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = En({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Ur(() => {
        Gr(() => {
          var l;
          this.$$r = !0;
          for (const i of Re(this.$$c)) {
            if (!((l = this.$$p_d[i]) != null && l.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Oe(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const i of this.$$l[l]) {
          const s = this.$$c.$on(l, i);
          this.$$l_u.set(i, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var l;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Oe(t, n, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Re(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Oe(e, t, r, n) {
  var i;
  const l = (i = r[e]) == null ? void 0 : i.type;
  if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function kn(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Tn(e, t, r, n, l, i) {
  let s = class extends vr {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Re(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Re(t).forEach((f) => {
    Se(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(u) {
        var v;
        u = Oe(f, u, t), this.$$d[f] = u;
        var o = this.$$c;
        if (o) {
          var d = (v = ae(o, f)) == null ? void 0 : v.get;
          d ? o[f] = u : o.$set({ [f]: u });
        }
      }
    });
  }), n.forEach((f) => {
    Se(s.prototype, f, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Nn = /* @__PURE__ */ ve('<div class="loading svelte-vn2jwk">Loading...</div>'), xn = /* @__PURE__ */ ve('<div class="error svelte-vn2jwk"> </div>'), An = /* @__PURE__ */ ve('<div class="empty svelte-vn2jwk">No items found</div>'), Cn = /* @__PURE__ */ ve('<div class="item svelte-vn2jwk"><pre class="svelte-vn2jwk"> </pre></div>'), On = /* @__PURE__ */ ve('<div class="items-list svelte-vn2jwk"></div>'), Rn = /* @__PURE__ */ ve('<div class="api-data-container svelte-vn2jwk"><!> <!></div>');
const Sn = {
  hash: "svelte-vn2jwk",
  code: ".api-data-container.svelte-vn2jwk {font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;padding:1rem;border:1px solid #e1e5e9;border-radius:8px;background:white;}.loading.svelte-vn2jwk {color:#666;text-align:center;padding:1rem;}.error.svelte-vn2jwk {color:#dc3545;background:#f8d7da;border:1px solid #f5c6cb;border-radius:4px;padding:0.75rem;margin-bottom:1rem;}.empty.svelte-vn2jwk {color:#666;text-align:center;padding:1rem;font-style:italic;}.items-list.svelte-vn2jwk {display:flex;flex-direction:column;gap:1rem;}.item.svelte-vn2jwk {background:#f8f9fa;border:1px solid #e9ecef;border-radius:4px;padding:1rem;}.item.svelte-vn2jwk pre:where(.svelte-vn2jwk) {margin:0;white-space:pre-wrap;word-break:break-word;font-size:0.875rem;color:#495057;}"
};
function Dn(e, t) {
  jt(t, !0), yn(e, Sn);
  let r = At(t, "url", 7, ""), n = At(t, "accessToken", 7, ""), l = /* @__PURE__ */ L(fe([])), i = /* @__PURE__ */ L(!1), s = /* @__PURE__ */ L(null);
  const f = async () => {
    if (!r()) {
      T(s, "URL is required");
      return;
    }
    T(i, !0), T(s, null);
    try {
      const c = {
        // 'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json"
      };
      n() && (c.Authorization = `Bearer ${n()}`);
      const _ = await fetch(r(), { method: "GET", headers: c });
      if (!_.ok)
        throw new Error(`HTTP error! status: ${_.status}`);
      const w = await _.json();
      T(l, Array.isArray(w.data) ? w.data : [w.data], !0);
    } catch (c) {
      T(s, c instanceof Error ? c.message : "Failed to fetch data", !0), T(l, [], !0);
    } finally {
      T(i, !1);
    }
  };
  Yr(() => {
    r() && f();
  });
  var u = Rn(), o = Ae(u);
  {
    var d = (c) => {
      var _ = Nn();
      ee(c, _);
    }, v = (c, _) => {
      {
        var w = (h) => {
          var g = xn(), N = Ae(g);
          $e(g), Et(() => Tt(N, `Error: ${b(s) ?? ""}`)), ee(h, g);
        }, y = (h, g) => {
          {
            var N = (x) => {
              var z = An();
              ee(x, z);
            }, V = (x) => {
              var z = On();
              wn(z, 21, () => b(l), hn, (de, _e) => {
                var he = Cn(), xe = Ae(he), dr = Ae(xe, !0);
                $e(xe), $e(he), Et((_r) => Tt(dr, _r), [
                  () => JSON.stringify(b(_e), null, 2)
                ]), ee(de, he);
              }), $e(z), ee(x, z);
            };
            Ke(
              h,
              (x) => {
                b(l).length === 0 ? x(N) : x(V, !1);
              },
              g
            );
          }
        };
        Ke(
          c,
          (h) => {
            b(s) ? h(w) : h(y, !1);
          },
          _
        );
      }
    };
    Ke(o, (c) => {
      b(i) ? c(d) : c(v, !1);
    });
  }
  var a = qr(o, 2);
  return mn(a, t, "default", {}), $e(u), ee(e, u), Mt({
    get url() {
      return r();
    },
    set url(c = "") {
      r(c), Xe();
    },
    get accessToken() {
      return n();
    },
    set accessToken(c = "") {
      n(c), Xe();
    }
  });
}
customElements.define("api-data-display", Tn(Dn, { url: {}, accessToken: {} }, ["default"], [], !0));
export {
  Dn as default
};
