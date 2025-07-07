var Ys = Object.defineProperty;
var qs = Object.getPrototypeOf;
var Hs = Reflect.get;
var pr = (e) => {
  throw TypeError(e);
};
var Ks = (e, t, r) => t in e ? Ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var j = (e, t, r) => Ks(e, typeof t != "symbol" ? t + "" : t, r), Ct = (e, t, r) => t.has(e) || pr("Cannot " + r);
var p = (e, t, r) => (Ct(e, t, "read from private field"), r ? r.call(e) : t.get(e)), D = (e, t, r) => t.has(e) ? pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), fe = (e, t, r, s) => (Ct(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r), at = (e, t, r) => (Ct(e, t, "access private method"), r);
var vr = (e, t, r) => Hs(qs(e), r, t);
const Ws = "5";
var zr;
typeof window < "u" && ((zr = window.__svelte ?? (window.__svelte = {})).v ?? (zr.v = /* @__PURE__ */ new Set())).add(Ws);
const Gs = 1, Xs = 2, Zs = 16, Qs = 2, qt = "[", Ht = "[!", Kt = "]", Ne = {}, B = Symbol(), gr = !1;
var yt = Array.isArray, en = Array.prototype.indexOf, Wt = Array.from, ft = Object.keys, ct = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, Br = Object.prototype, tn = Array.prototype, Vr = Object.getPrototypeOf, _r = Object.isExtensible;
function Jr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const H = 2, Ur = 4, wt = 8, Gt = 16, le = 32, $e = 64, Xt = 128, J = 256, dt = 512, K = 1024, ie = 2048, Se = 4096, ae = 8192, Zt = 16384, Yr = 32768, Qt = 65536, mr = 1 << 18, rn = 1 << 19, qr = 1 << 20, Pt = 1 << 21, it = Symbol("$state"), sn = Symbol("legacy props"), er = 3, Be = 8;
function Hr(e) {
  return e === this.v;
}
function nn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Kr(e) {
  return !nn(e, this.v);
}
function an(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function on() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ln(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function un() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function cn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function dn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function hn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let pn = !1;
const vn = [];
function br(e, t = !1) {
  return ot(e, /* @__PURE__ */ new Map(), "", vn);
}
function ot(e, t, r, s, n = null) {
  if (typeof e == "object" && e !== null) {
    var a = t.get(e);
    if (a !== void 0) return a;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (yt(e)) {
      var o = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, o), n !== null && t.set(n, o);
      for (var i = 0; i < e.length; i += 1) {
        var l = e[i];
        i in e && (o[i] = ot(l, t, r, s));
      }
      return o;
    }
    if (Vr(e) === Br) {
      o = {}, t.set(e, o), n !== null && t.set(n, o);
      for (var u in e)
        o[u] = ot(e[u], t, r, s);
      return o;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function")
      return ot(
        /** @type {T & { toJSON(): any } } */
        e.toJSON(),
        t,
        r,
        s,
        // Associate the instance with the toJSON clone
        e
      );
  }
  if (e instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      e
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(e)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      e
    );
  }
}
function Wr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let M = null;
function yr(e) {
  M = e;
}
function gn(e) {
  return (
    /** @type {T} */
    tr().get(e)
  );
}
function _n(e, t) {
  return tr().set(e, t), t;
}
function mn(e) {
  return tr().has(e);
}
function Gr(e, t = !1, r) {
  var s = M = {
    p: M,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  ls(() => {
    s.d = !0;
  });
}
function Xr(e) {
  const t = M;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = A, s = T;
      t.e = null;
      try {
        for (var n = 0; n < o.length; n++) {
          var a = o[n];
          ge(a.effect), Q(a.reaction), nr(a.fn);
        }
      } finally {
        ge(r), Q(s);
      }
    }
    M = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Zr() {
  return !0;
}
function tr(e) {
  return M === null && Wr(), M.c ?? (M.c = new Map(bn(M) || void 0));
}
function bn(e) {
  let t = e.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null)
      return r;
    t = t.p;
  }
  return null;
}
function ye(e) {
  if (typeof e != "object" || e === null || it in e)
    return e;
  const t = Vr(e);
  if (t !== Br && t !== tn)
    return e;
  var r = /* @__PURE__ */ new Map(), s = yt(e), n = /* @__PURE__ */ L(0), a = T, o = (i) => {
    var l = T;
    Q(a);
    var u = i();
    return Q(l), u;
  };
  return s && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(i, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && cn();
        var c = r.get(l);
        return c === void 0 ? c = o(() => {
          var f = /* @__PURE__ */ L(u.value);
          return r.set(l, f), f;
        }) : R(c, u.value, !0), !0;
      },
      deleteProperty(i, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in i) {
            const d = o(() => /* @__PURE__ */ L(B));
            r.set(l, d), kt(n);
          }
        } else {
          if (s && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              r.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && R(c, f);
          }
          R(u, B), kt(n);
        }
        return !0;
      },
      get(i, l, u) {
        var h;
        if (l === it)
          return e;
        var c = r.get(l), f = l in i;
        if (c === void 0 && (!f || (h = Re(i, l)) != null && h.writable) && (c = o(() => {
          var v = ye(f ? i[l] : B), b = /* @__PURE__ */ L(v);
          return b;
        }), r.set(l, c)), c !== void 0) {
          var d = _(c);
          return d === B ? void 0 : d;
        }
        return Reflect.get(i, l, u);
      },
      getOwnPropertyDescriptor(i, l) {
        var u = Reflect.getOwnPropertyDescriptor(i, l);
        if (u && "value" in u) {
          var c = r.get(l);
          c && (u.value = _(c));
        } else if (u === void 0) {
          var f = r.get(l), d = f == null ? void 0 : f.v;
          if (f !== void 0 && d !== B)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(i, l) {
        var d;
        if (l === it)
          return !0;
        var u = r.get(l), c = u !== void 0 && u.v !== B || Reflect.has(i, l);
        if (u !== void 0 || A !== null && (!c || (d = Re(i, l)) != null && d.writable)) {
          u === void 0 && (u = o(() => {
            var h = c ? ye(i[l]) : B, v = /* @__PURE__ */ L(h);
            return v;
          }), r.set(l, u));
          var f = _(u);
          if (f === B)
            return !1;
        }
        return c;
      },
      set(i, l, u, c) {
        var E;
        var f = r.get(l), d = l in i;
        if (s && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var v = r.get(h + "");
            v !== void 0 ? R(v, B) : h in i && (v = o(() => /* @__PURE__ */ L(B)), r.set(h + "", v));
          }
        if (f === void 0)
          (!d || (E = Re(i, l)) != null && E.writable) && (f = o(() => /* @__PURE__ */ L(void 0)), R(f, ye(u)), r.set(l, f));
        else {
          d = f.v !== B;
          var b = o(() => ye(u));
          R(f, b);
        }
        var $ = Reflect.getOwnPropertyDescriptor(i, l);
        if ($ != null && $.set && $.set.call(c, u), !d) {
          if (s && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(l);
            Number.isInteger(m) && m >= w.v && R(w, m + 1);
          }
          kt(n);
        }
        return !0;
      },
      ownKeys(i) {
        _(n);
        var l = Reflect.ownKeys(i).filter((f) => {
          var d = r.get(f);
          return d === void 0 || d.v !== B;
        });
        for (var [u, c] of r)
          c.v !== B && !(u in i) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        dn();
      }
    }
  );
}
function kt(e, t = 1) {
  R(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function Et(e) {
  var t = H | ie, r = T !== null && (T.f & H) !== 0 ? (
    /** @type {Derived} */
    T
  ) : null;
  return A === null || r !== null && (r.f & J) !== 0 ? t |= J : A.f |= qr, {
    ctx: M,
    deps: null,
    effects: null,
    equals: Hr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? A
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  const t = /* @__PURE__ */ Et(e);
  return gs(t), t;
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  const t = /* @__PURE__ */ Et(e);
  return t.equals = Kr, t;
}
function Qr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      oe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function wn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & H) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function es(e) {
  var t, r = A;
  ge(wn(e));
  try {
    Qr(e), t = ys(e);
  } finally {
    ge(r);
  }
  return t;
}
function ts(e) {
  var t = es(e);
  if (e.equals(t) || (e.v = t, e.wv = ms()), !Me) {
    var r = (pe || (e.f & J) !== 0) && e.deps !== null ? Se : K;
    ee(e, r);
  }
}
const Ve = /* @__PURE__ */ new Map();
function he(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Hr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = he(e);
  return gs(r), r;
}
// @__NO_SIDE_EFFECTS__
function rr(e, t = !1, r = !0) {
  const s = he(e);
  return t || (s.equals = Kr), s;
}
function R(e, t, r = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Z || (T.f & mr) !== 0) && Zr() && (T.f & (H | Gt | mr)) !== 0 && !(F != null && F[1].includes(e) && F[0] === T) && hn();
  let s = r ? ye(t) : t;
  return rs(e, s);
}
function rs(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Me ? Ve.set(e, t) : Ve.set(e, r), e.v = t, (e.f & H) !== 0 && ((e.f & ie) !== 0 && es(
      /** @type {Derived} */
      e
    ), ee(e, (e.f & J) === 0 ? K : Se)), e.wv = ms(), ss(e, ie), A !== null && (A.f & K) !== 0 && (A.f & (le | $e)) === 0 && (U === null ? Rn([e]) : U.push(e));
  }
  return t;
}
function ss(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, n = 0; n < s; n++) {
      var a = r[n], o = a.f;
      (o & ie) === 0 && (ee(a, t), (o & (K | J)) !== 0 && ((o & H) !== 0 ? ss(
        /** @type {Derived} */
        a,
        Se
      ) : fr(
        /** @type {Effect} */
        a
      )));
    }
}
function It(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let C = !1;
function ne(e) {
  C = e;
}
let k;
function q(e) {
  if (e === null)
    throw It(), Ne;
  return k = e;
}
function xt() {
  return q(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _e(k)
  );
}
function W(e) {
  if (C) {
    if (/* @__PURE__ */ _e(k) !== null)
      throw It(), Ne;
    k = e;
  }
}
function Mt() {
  for (var e = 0, t = k; ; ) {
    if (t.nodeType === Be) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Kt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === qt || r === Ht) && (e += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(t)
    );
    t.remove(), t = s;
  }
}
function ns(e) {
  if (!e || e.nodeType !== Be)
    throw It(), Ne;
  return (
    /** @type {Comment} */
    e.data
  );
}
var wr, as, is, os;
function Ft() {
  if (wr === void 0) {
    wr = window, as = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    is = Re(t, "firstChild").get, os = Re(t, "nextSibling").get, _r(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _r(r) && (r.__t = void 0);
  }
}
function ve(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return is.call(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return os.call(e);
}
function te(e, t) {
  if (!C)
    return /* @__PURE__ */ xe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xe(k)
  );
  if (r === null)
    r = k.appendChild(ve());
  else if (t && r.nodeType !== er) {
    var s = ve();
    return r == null || r.before(s), q(s), s;
  }
  return q(r), r;
}
function En(e, t) {
  if (!C) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ _e(r) : r;
  }
  return k;
}
function Nt(e, t = 1, r = !1) {
  let s = C ? k : e;
  for (var n; t--; )
    n = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ _e(s);
  if (!C)
    return s;
  if (r && (s == null ? void 0 : s.nodeType) !== er) {
    var a = ve();
    return s === null ? n == null || n.after(a) : s.before(a), q(a), a;
  }
  return q(s), /** @type {TemplateNode} */
  s;
}
function sr(e) {
  e.textContent = "";
}
function In(e) {
  A === null && T === null && ln(), T !== null && (T.f & J) !== 0 && A === null && on(), Me && an();
}
function xn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ae(e, t, r, s = !0) {
  var n = A, a = {
    ctx: M,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ie,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      ur(a), a.f |= Yr;
    } catch (l) {
      throw oe(a), l;
    }
  else t !== null && fr(a);
  var o = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (qr | Xt)) === 0;
  if (!o && s && (n !== null && xn(a, n), T !== null && (T.f & H) !== 0)) {
    var i = (
      /** @type {Derived} */
      T
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return a;
}
function ls(e) {
  const t = Ae(wt, null, !1);
  return ee(t, K), t.teardown = e, t;
}
function Lt(e) {
  In();
  var t = A !== null && (A.f & le) !== 0 && M !== null && !M.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      M
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: A,
      reaction: T
    });
  } else {
    var s = nr(e);
    return s;
  }
}
function Tn(e) {
  const t = Ae($e, e, !0);
  return () => {
    oe(t);
  };
}
function $n(e) {
  const t = Ae($e, e, !0);
  return (r = {}) => new Promise((s) => {
    r.outro ? ht(t, () => {
      oe(t), s(void 0);
    }) : (oe(t), s(void 0));
  });
}
function nr(e) {
  return Ae(Ur, e, !1);
}
function ar(e) {
  return Ae(wt, e, !0);
}
function Rt(e, t = [], r = Et) {
  const s = t.map(r);
  return ir(() => e(...s.map(_)));
}
function ir(e, t = 0) {
  return Ae(wt | Gt | t, e, !0);
}
function Je(e, t = !0) {
  return Ae(wt | le, e, !0, t);
}
function us(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Me, s = T;
    Er(!0), Q(null);
    try {
      t.call(null);
    } finally {
      Er(r), Q(s);
    }
  }
}
function fs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var s = r.next;
    (r.f & $e) !== 0 ? r.parent = null : oe(r, t), r = s;
  }
}
function Sn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & le) === 0 && oe(t), t = r;
  }
}
function oe(e, t = !0) {
  var r = !1;
  (t || (e.f & rn) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (An(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), fs(e, t && !r), gt(e, 0), ee(e, Zt);
  var s = e.transitions;
  if (s !== null)
    for (const a of s)
      a.stop();
  us(e);
  var n = e.parent;
  n !== null && n.first !== null && cs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function An(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(e)
    );
    e.remove(), e = r;
  }
}
function cs(e) {
  var t = e.parent, r = e.prev, s = e.next;
  r !== null && (r.next = s), s !== null && (s.prev = r), t !== null && (t.first === e && (t.first = s), t.last === e && (t.last = r));
}
function ht(e, t) {
  var r = [];
  or(e, r, !0), ds(r, () => {
    oe(e), t && t();
  });
}
function ds(e, t) {
  var r = e.length;
  if (r > 0) {
    var s = () => --r || t();
    for (var n of e)
      n.out(s);
  } else
    t();
}
function or(e, t, r) {
  if ((e.f & ae) === 0) {
    if (e.f ^= ae, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var n = s.next, a = (s.f & Qt) !== 0 || (s.f & le) !== 0;
      or(s, t, a ? r : !1), s = n;
    }
  }
}
function pt(e) {
  hs(e, !0);
}
function hs(e, t) {
  if ((e.f & ae) !== 0) {
    e.f ^= ae;
    for (var r = e.first; r !== null; ) {
      var s = r.next, n = (r.f & Qt) !== 0 || (r.f & le) !== 0;
      hs(r, n ? t : !1), r = s;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Ue = [], jt = [];
function ps() {
  var e = Ue;
  Ue = [], Jr(e);
}
function Cn() {
  var e = jt;
  jt = [], Jr(e);
}
function lr(e) {
  Ue.length === 0 && queueMicrotask(ps), Ue.push(e);
}
function kn() {
  Ue.length > 0 && ps(), jt.length > 0 && Cn();
}
function Nn(e) {
  var t = (
    /** @type {Effect} */
    A
  );
  if ((t.f & Yr) === 0) {
    if ((t.f & Xt) === 0)
      throw e;
    t.fn(e);
  } else
    vs(e, t);
}
function vs(e, t) {
  for (; t !== null; ) {
    if ((t.f & Xt) !== 0)
      try {
        t.fn(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let Ye = !1, qe = null, Ie = !1, Me = !1;
function Er(e) {
  Me = e;
}
let ze = [];
let T = null, Z = !1;
function Q(e) {
  T = e;
}
let A = null;
function ge(e) {
  A = e;
}
let F = null;
function gs(e) {
  T !== null && T.f & Pt && (F === null ? F = [T, [e]] : F[1].push(e));
}
let z = null, V = 0, U = null;
function Rn(e) {
  U = e;
}
let _s = 1, vt = 0, pe = !1;
function ms() {
  return ++_s;
}
function Tt(e) {
  var f;
  var t = e.f;
  if ((t & ie) !== 0)
    return !0;
  if ((t & Se) !== 0) {
    var r = e.deps, s = (t & J) !== 0;
    if (r !== null) {
      var n, a, o = (t & dt) !== 0, i = s && A !== null && !pe, l = r.length;
      if (o || i) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (n = 0; n < l; n++)
          a = r[n], (o || !((f = a == null ? void 0 : a.reactions) != null && f.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= dt), i && c !== null && (c.f & J) === 0 && (u.f ^= J);
      }
      for (n = 0; n < l; n++)
        if (a = r[n], Tt(
          /** @type {Derived} */
          a
        ) && ts(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!s || A !== null && !pe) && ee(e, K);
  }
  return !1;
}
function bs(e, t, r = !0) {
  var s = e.reactions;
  if (s !== null)
    for (var n = 0; n < s.length; n++) {
      var a = s[n];
      F != null && F[1].includes(e) && F[0] === T || ((a.f & H) !== 0 ? bs(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ee(a, ie) : (a.f & K) !== 0 && ee(a, Se), fr(
        /** @type {Effect} */
        a
      )));
    }
}
function ys(e) {
  var h;
  var t = z, r = V, s = U, n = T, a = pe, o = F, i = M, l = Z, u = e.f;
  z = /** @type {null | Value[]} */
  null, V = 0, U = null, pe = (u & J) !== 0 && (Z || !Ie || T === null), T = (u & (le | $e)) === 0 ? e : null, F = null, yr(e.ctx), Z = !1, vt++, e.f |= Pt;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (z !== null) {
      var d;
      if (gt(e, V), f !== null && V > 0)
        for (f.length = V + z.length, d = 0; d < z.length; d++)
          f[V + d] = z[d];
      else
        e.deps = f = z;
      if (!pe || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (u & H) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (d = V; d < f.length; d++)
          ((h = f[d]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && V < f.length && (gt(e, V), f.length = V);
    if (Zr() && U !== null && !Z && f !== null && (e.f & (H | Se | ie)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      U.length; d++)
        bs(
          U[d],
          /** @type {Effect} */
          e
        );
    return n !== null && n !== e && (vt++, U !== null && (s === null ? s = U : s.push(.../** @type {Source[]} */
    U))), c;
  } catch (v) {
    Nn(v);
  } finally {
    z = t, V = r, U = s, T = n, pe = a, F = o, yr(i), Z = l, e.f ^= Pt;
  }
}
function Dn(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var s = en.call(r, e);
    if (s !== -1) {
      var n = r.length - 1;
      n === 0 ? r = t.reactions = null : (r[s] = r[n], r.pop());
    }
  }
  r === null && (t.f & H) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (z === null || !z.includes(t)) && (ee(t, Se), (t.f & (J | dt)) === 0 && (t.f ^= dt), Qr(
    /** @type {Derived} **/
    t
  ), gt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function gt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var s = t; s < r.length; s++)
      Dn(e, r[s]);
}
function ur(e) {
  var t = e.f;
  if ((t & Zt) === 0) {
    ee(e, K);
    var r = A, s = Ie;
    A = e, Ie = !0;
    try {
      (t & Gt) !== 0 ? Sn(e) : fs(e), us(e);
      var n = ys(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = _s;
      var a;
      gr && pn && (e.f & ie) !== 0 && e.deps;
    } finally {
      Ie = s, A = r;
    }
  }
}
function On() {
  try {
    un();
  } catch (e) {
    if (qe !== null)
      vs(e, qe);
    else
      throw e;
  }
}
function ws() {
  var e = Ie;
  try {
    var t = 0;
    for (Ie = !0; ze.length > 0; ) {
      t++ > 1e3 && On();
      var r = ze, s = r.length;
      ze = [];
      for (var n = 0; n < s; n++) {
        var a = Mn(r[n]);
        Pn(a);
      }
      Ve.clear();
    }
  } finally {
    Ye = !1, Ie = e, qe = null;
  }
}
function Pn(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var s = e[r];
      (s.f & (Zt | ae)) === 0 && Tt(s) && (ur(s), s.deps === null && s.first === null && s.nodes_start === null && (s.teardown === null ? cs(s) : s.fn = null));
    }
}
function fr(e) {
  Ye || (Ye = !0, queueMicrotask(ws));
  for (var t = qe = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & ($e | le)) !== 0) {
      if ((r & K) === 0) return;
      t.f ^= K;
    }
  }
  ze.push(t);
}
function Mn(e) {
  for (var t = [], r = e; r !== null; ) {
    var s = r.f, n = (s & (le | $e)) !== 0, a = n && (s & K) !== 0;
    if (!a && (s & ae) === 0) {
      (s & Ur) !== 0 ? t.push(r) : n ? r.f ^= K : Tt(r) && ur(r);
      var o = r.first;
      if (o !== null) {
        r = o;
        continue;
      }
    }
    var i = r.parent;
    for (r = r.next; r === null && i !== null; )
      r = i.next, i = i.parent;
  }
  return t;
}
function zt(e) {
  for (var t; ; ) {
    if (kn(), ze.length === 0)
      return Ye = !1, qe = null, /** @type {T} */
      t;
    Ye = !0, ws();
  }
}
function _(e) {
  var t = e.f, r = (t & H) !== 0;
  if (T !== null && !Z) {
    if (!(F != null && F[1].includes(e)) || F[0] !== T) {
      var s = T.deps;
      e.rv < vt && (e.rv = vt, z === null && s !== null && s[V] === e ? V++ : z === null ? z = [e] : (!pe || !z.includes(e)) && z.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var n = (
      /** @type {Derived} */
      e
    ), a = n.parent;
    a !== null && (a.f & J) === 0 && (n.f ^= J);
  }
  return r && (n = /** @type {Derived} */
  e, Tt(n) && ts(n)), Me && Ve.has(e) ? Ve.get(e) : e.v;
}
function Fe(e) {
  var t = Z;
  try {
    return Z = !0, e();
  } finally {
    Z = t;
  }
}
const Fn = -7169;
function ee(e, t) {
  e.f = e.f & Fn | t;
}
function Ln(e) {
  C && /* @__PURE__ */ xe(e) !== null && sr(e);
}
let Ir = !1;
function jn() {
  Ir || (Ir = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Es(e) {
  var t = T, r = A;
  Q(null), ge(null);
  try {
    return e();
  } finally {
    Q(t), ge(r);
  }
}
function zn(e, t, r, s = r) {
  e.addEventListener(t, () => Es(r));
  const n = e.__on_r;
  n ? e.__on_r = () => {
    n(), s(!0);
  } : e.__on_r = () => s(!0), jn();
}
const Bn = /* @__PURE__ */ new Set(), xr = /* @__PURE__ */ new Set();
function Vn(e, t, r, s = {}) {
  function n(a) {
    if (s.capture || je.call(t, a), !a.cancelBubble)
      return Es(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? lr(() => {
    t.addEventListener(e, n, s);
  }) : t.addEventListener(e, n, s), n;
}
function Jn(e, t, r, s, n) {
  var a = { capture: s, passive: n }, o = Vn(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ls(() => {
    t.removeEventListener(e, o, a);
  });
}
function je(e) {
  var m;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), s = e.type, n = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], a = (
    /** @type {null | Element} */
    n[0] || e.target
  ), o = 0, i = e.__root;
  if (i) {
    var l = n.indexOf(i);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = n.indexOf(t);
    if (u === -1)
      return;
    l <= u && (o = l);
  }
  if (a = /** @type {Element} */
  n[o] || e.target, a !== t) {
    ct(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = T, f = A;
    Q(null), ge(null);
    try {
      for (var d, h = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + s];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (yt(b)) {
              var [$, ...w] = b;
              $.apply(a, [e, ...w]);
            } else
              b.call(a, e);
        } catch (E) {
          d ? h.push(E) : d = E;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        a = v;
      }
      if (d) {
        for (let E of h)
          queueMicrotask(() => {
            throw E;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Q(c), ge(f);
    }
  }
}
function Un(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Te(e, t) {
  var r = (
    /** @type {Effect} */
    A
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function $t(e, t) {
  var r = (t & Qs) !== 0, s, n = !e.startsWith("<!>");
  return () => {
    if (C)
      return Te(k, null), k;
    s === void 0 && (s = Un(n ? e : "<!>" + e), s = /** @type {Node} */
    /* @__PURE__ */ xe(s));
    var a = (
      /** @type {TemplateNode} */
      r || as ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    return Te(a, a), a;
  };
}
function Yn(e = "") {
  if (!C) {
    var t = ve(e + "");
    return Te(t, t), t;
  }
  var r = k;
  return r.nodeType !== er && (r.before(r = ve()), q(r)), Te(r, r), r;
}
function qn() {
  if (C)
    return Te(k, null), k;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ve();
  return e.append(t, r), Te(t, r), e;
}
function be(e, t) {
  if (C) {
    A.nodes_end = k, xt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Hn = ["touchstart", "touchmove"];
function Kn(e) {
  return Hn.includes(e);
}
function Tr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Is(e, t) {
  return xs(e, t);
}
function Wn(e, t) {
  Ft(), t.intro = t.intro ?? !1;
  const r = t.target, s = C, n = k;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xe(r)
    ); a && (a.nodeType !== Be || /** @type {Comment} */
    a.data !== qt); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ _e(a);
    if (!a)
      throw Ne;
    ne(!0), q(
      /** @type {Comment} */
      a
    ), xt();
    const o = xs(e, { ...t, anchor: a });
    if (k === null || k.nodeType !== Be || /** @type {Comment} */
    k.data !== Kt)
      throw It(), Ne;
    return ne(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Ne)
      return t.recover === !1 && fn(), Ft(), sr(r), ne(!1), Is(e, t);
    throw o;
  } finally {
    ne(s), q(n);
  }
}
const ke = /* @__PURE__ */ new Map();
function xs(e, { target: t, anchor: r, props: s = {}, events: n, context: a, intro: o = !0 }) {
  Ft();
  var i = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var h = f[d];
      if (!i.has(h)) {
        i.add(h);
        var v = Kn(h);
        t.addEventListener(h, je, { passive: v });
        var b = ke.get(h);
        b === void 0 ? (document.addEventListener(h, je, { passive: v }), ke.set(h, 1)) : ke.set(h, b + 1);
      }
    }
  };
  l(Wt(Bn)), xr.add(l);
  var u = void 0, c = $n(() => {
    var f = r ?? t.appendChild(ve());
    return Je(() => {
      if (a) {
        Gr({});
        var d = (
          /** @type {ComponentContext} */
          M
        );
        d.c = a;
      }
      n && (s.$$events = n), C && Te(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, s) || {}, C && (A.nodes_end = k), a && Xr();
    }), () => {
      var v;
      for (var d of i) {
        t.removeEventListener(d, je);
        var h = (
          /** @type {number} */
          ke.get(d)
        );
        --h === 0 ? (document.removeEventListener(d, je), ke.delete(d)) : ke.set(d, h);
      }
      xr.delete(l), f !== r && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return Bt.set(u, c), u;
}
let Bt = /* @__PURE__ */ new WeakMap();
function Gn(e, t) {
  const r = Bt.get(e);
  return r ? (Bt.delete(e), r(t)) : Promise.resolve();
}
function Xn(e) {
  M === null && Wr(), Lt(() => {
    const t = Fe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $r(e, t, [r, s] = [0, 0]) {
  C && r === 0 && xt();
  var n = e, a = null, o = null, i = B, l = r > 0 ? Qt : 0, u = !1;
  const c = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (i === (i = d)) return;
    let v = !1;
    if (C && s !== -1) {
      if (r === 0) {
        const $ = ns(n);
        $ === qt ? s = 0 : $ === Ht ? s = 1 / 0 : (s = parseInt($.substring(1)), s !== s && (s = i ? 1 / 0 : -1));
      }
      const b = s > r;
      !!i === b && (n = Mt(), q(n), ne(!1), v = !0, s = -1);
    }
    i ? (a ? pt(a) : h && (a = Je(() => h(n))), o && ht(o, () => {
      o = null;
    })) : (o ? pt(o) : h && (o = Je(() => h(n, [r + 1, s]))), a && ht(a, () => {
      a = null;
    })), v && ne(!0);
  };
  ir(() => {
    u = !1, t(c), u || f(null, null);
  }, l), C && (n = k);
}
function Sr(e, t) {
  return t;
}
function Zn(e, t, r, s) {
  for (var n = [], a = t.length, o = 0; o < a; o++)
    or(t[o].e, n, !0);
  var i = a > 0 && n.length === 0 && r !== null;
  if (i) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    sr(l), l.append(
      /** @type {Element} */
      r
    ), s.clear(), ce(e, t[0].prev, t[a - 1].next);
  }
  ds(n, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      i || (s.delete(c.k), ce(e, c.prev, c.next)), oe(c.e, !i);
    }
  });
}
function Ar(e, t, r, s, n, a = null) {
  var o = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = C ? q(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xe(l)
    ) : l.appendChild(ve());
  }
  C && xt();
  var u = null, c = !1, f = /* @__PURE__ */ yn(() => {
    var d = r();
    return yt(d) ? d : d == null ? [] : Wt(d);
  });
  ir(() => {
    var d = _(f), h = d.length;
    if (c && h === 0)
      return;
    c = h === 0;
    let v = !1;
    if (C) {
      var b = ns(o) === Ht;
      b !== (h === 0) && (o = Mt(), q(o), ne(!1), v = !0);
    }
    if (C) {
      for (var $ = null, w, m = 0; m < h; m++) {
        if (k.nodeType === Be && /** @type {Comment} */
        k.data === Kt) {
          o = /** @type {Comment} */
          k, v = !0, ne(!1);
          break;
        }
        var E = d[m], S = s(E, m);
        w = Ts(
          k,
          i,
          $,
          null,
          E,
          S,
          m,
          n,
          t,
          r
        ), i.items.set(S, w), $ = w;
      }
      h > 0 && q(Mt());
    }
    C || Qn(d, i, o, n, t, s, r), a !== null && (h === 0 ? u ? pt(u) : u = Je(() => a(o)) : u !== null && ht(u, () => {
      u = null;
    })), v && ne(!0), _(f);
  }), C && (o = k);
}
function Qn(e, t, r, s, n, a, o) {
  var i = e.length, l = t.items, u = t.first, c = u, f, d = null, h = [], v = [], b, $, w, m;
  for (m = 0; m < i; m += 1) {
    if (b = e[m], $ = a(b, m), w = l.get($), w === void 0) {
      var E = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : r;
      d = Ts(
        E,
        t,
        d,
        d === null ? t.first : d.next,
        b,
        $,
        m,
        s,
        n,
        o
      ), l.set($, d), h = [], v = [], c = d.next;
      continue;
    }
    if (ea(w, b, m), (w.e.f & ae) !== 0 && pt(w.e), w !== c) {
      if (f !== void 0 && f.has(w)) {
        if (h.length < v.length) {
          var S = v[0], I;
          d = S.prev;
          var g = h[0], y = h[h.length - 1];
          for (I = 0; I < h.length; I += 1)
            Cr(h[I], S, r);
          for (I = 0; I < v.length; I += 1)
            f.delete(v[I]);
          ce(t, g.prev, y.next), ce(t, d, g), ce(t, y, S), c = S, d = y, m -= 1, h = [], v = [];
        } else
          f.delete(w), Cr(w, c, r), ce(t, w.prev, w.next), ce(t, w, d === null ? t.first : d.next), ce(t, d, w), d = w;
        continue;
      }
      for (h = [], v = []; c !== null && c.k !== $; )
        (c.e.f & ae) === 0 && (f ?? (f = /* @__PURE__ */ new Set())).add(c), v.push(c), c = c.next;
      if (c === null)
        continue;
      w = c;
    }
    h.push(w), d = w, c = w.next;
  }
  if (c !== null || f !== void 0) {
    for (var N = f === void 0 ? [] : Wt(f); c !== null; )
      (c.e.f & ae) === 0 && N.push(c), c = c.next;
    var x = N.length;
    if (x > 0) {
      var ue = i === 0 ? r : null;
      Zn(t, N, ue, l);
    }
  }
  A.first = t.first && t.first.e, A.last = d && d.e;
}
function ea(e, t, r, s) {
  rs(e.v, t), e.i = r;
}
function Ts(e, t, r, s, n, a, o, i, l, u) {
  var c = (l & Gs) !== 0, f = (l & Zs) === 0, d = c ? f ? /* @__PURE__ */ rr(n, !1, !1) : he(n) : n, h = (l & Xs) === 0 ? o : he(o), v = {
    i: h,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: s
  };
  try {
    return v.e = Je(() => i(e, d, h, u), C), v.e.prev = r && r.e, v.e.next = s && s.e, r === null ? t.first = v : (r.next = v, r.e.next = v.e), s !== null && (s.prev = v, s.e.prev = v.e), v;
  } finally {
  }
}
function Cr(e, t, r) {
  for (var s = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, n = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== s; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(a)
    );
    n.before(a), a = o;
  }
}
function ce(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function ta(e, t) {
  lr(() => {
    var r = e.getRootNode(), s = (
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
    if (!s.querySelector("#" + t.hash)) {
      const n = document.createElement("style");
      n.id = t.hash, n.textContent = t.code, s.appendChild(n);
    }
  });
}
function ra(e, t, r) {
  var s = e == null ? "" : "" + e;
  return s = s ? s + " " + t : t, s === "" ? null : s;
}
function sa(e, t, r, s, n, a) {
  var o = e.__className;
  if (C || o !== r || o === void 0) {
    var i = ra(r, s);
    (!C || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : e.className = i), e.__className = r;
  }
  return a;
}
function na(e, t, r = t) {
  zn(e, "input", (s) => {
    var n = s ? e.defaultValue : e.value;
    if (n = Dt(e) ? Ot(n) : n, r(n), n !== (n = t())) {
      var a = e.selectionStart, o = e.selectionEnd;
      e.value = n ?? "", o !== null && (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (C && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Fe(t) == null && e.value) && r(Dt(e) ? Ot(e.value) : e.value), ar(() => {
    var s = t();
    Dt(e) && s === Ot(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Dt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ot(e) {
  return e === "" ? null : +e;
}
function kr(e, t) {
  return e === t || (e == null ? void 0 : e[it]) === t;
}
function aa(e = {}, t, r, s) {
  return nr(() => {
    var n, a;
    return ar(() => {
      n = a, a = [], Fe(() => {
        e !== r(...a) && (t(e, ...a), n && kr(r(...n), e) && t(null, ...n));
      });
    }), () => {
      lr(() => {
        a && kr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Nr(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function Rr(e, t, r, s) {
  var n;
  n = /** @type {V} */
  e[t];
  var a = (
    /** @type {V} */
    s
  ), o = !0, i = !1, l = () => (i = !0, o && (o = !1, a = /** @type {V} */
  s), a);
  n === void 0 && s !== void 0 && (n = l());
  var u;
  u = () => {
    var h = (
      /** @type {V} */
      e[t]
    );
    return h === void 0 ? l() : (o = !0, i = !1, h);
  };
  var c = !1, f = /* @__PURE__ */ rr(n), d = /* @__PURE__ */ Et(() => {
    var h = u(), v = _(f);
    return c ? (c = !1, v) : f.v = h;
  });
  return function(h, v) {
    if (arguments.length > 0) {
      const b = v ? _(d) : h;
      if (!d.equals(b)) {
        if (c = !0, R(f, b), i && a !== void 0 && (a = b), Nr(d))
          return h;
        Fe(() => _(d));
      }
      return h;
    }
    return Nr(d) ? d.v : _(d);
  };
}
function ia(e) {
  return new oa(e);
}
var re, Y;
class oa {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    D(this, re);
    /** @type {Record<string, any>} */
    D(this, Y);
    var a;
    var r = /* @__PURE__ */ new Map(), s = (o, i) => {
      var l = /* @__PURE__ */ rr(i, !1, !1);
      return r.set(o, l), l;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, i) {
          return _(r.get(i) ?? s(i, Reflect.get(o, i)));
        },
        has(o, i) {
          return i === sn ? !0 : (_(r.get(i) ?? s(i, Reflect.get(o, i))), Reflect.has(o, i));
        },
        set(o, i, l) {
          return R(r.get(i) ?? s(i, l), l), Reflect.set(o, i, l);
        }
      }
    );
    fe(this, Y, (t.hydrate ? Wn : Is)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && zt(), fe(this, re, n.$$events);
    for (const o of Object.keys(p(this, Y)))
      o === "$set" || o === "$destroy" || o === "$on" || ct(this, o, {
        get() {
          return p(this, Y)[o];
        },
        /** @param {any} value */
        set(i) {
          p(this, Y)[o] = i;
        },
        enumerable: !0
      });
    p(this, Y).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(n, o);
    }, p(this, Y).$destroy = () => {
      Gn(p(this, Y));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    p(this, Y).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    p(this, re)[t] = p(this, re)[t] || [];
    const s = (...n) => r.call(this, ...n);
    return p(this, re)[t].push(s), () => {
      p(this, re)[t] = p(this, re)[t].filter(
        /** @param {any} fn */
        (n) => n !== s
      );
    };
  }
  $destroy() {
    p(this, Y).$destroy();
  }
}
re = new WeakMap(), Y = new WeakMap();
let $s;
typeof HTMLElement == "function" && ($s = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, s) {
    super();
    /** The Svelte component constructor */
    j(this, "$$ctor");
    /** Slots */
    j(this, "$$s");
    /** @type {any} The Svelte component instance */
    j(this, "$$c");
    /** Whether or not the custom element is connected */
    j(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    j(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    j(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    j(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    j(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    j(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    j(this, "$$me");
    this.$$ctor = t, this.$$s = r, s && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const n = this.$$c.$on(t, r);
      this.$$l_u.set(r, n);
    }
    super.addEventListener(t, r, s);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, s) {
    if (super.removeEventListener(t, r, s), this.$$c) {
      const n = this.$$l_u.get(r);
      n && (n(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(n) {
        return (a) => {
          const o = document.createElement("slot");
          n !== "default" && (o.name = n), be(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, s = la(this);
      for (const n of this.$$s)
        n in s && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), r.default = !0) : r[n] = t(n));
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = lt(a, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = ia({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Tn(() => {
        ar(() => {
          var n;
          this.$$r = !0;
          for (const a of ft(this.$$c)) {
            if (!((n = this.$$p_d[a]) != null && n.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = lt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const a of this.$$l[n]) {
          const o = this.$$c.$on(n, a);
          this.$$l_u.set(a, o);
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
  attributeChangedCallback(t, r, s) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = lt(t, s, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
    return ft(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function lt(e, t, r, s) {
  var a;
  const n = (a = r[e]) == null ? void 0 : a.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !r[e])
    return t;
  if (s === "toAttribute")
    switch (n) {
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
    switch (n) {
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
function la(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ua(e, t, r, s, n, a) {
  let o = class extends $s {
    constructor() {
      super(e, r, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ft(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return ft(t).forEach((i) => {
    ct(o.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(l) {
        var f;
        l = lt(i, l, t), this.$$d[i] = l;
        var u = this.$$c;
        if (u) {
          var c = (f = Re(u, i)) == null ? void 0 : f.get;
          c ? u[i] = l : u.$set({ [i]: l });
        }
      }
    });
  }), s.forEach((i) => {
    ct(o.prototype, i, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[i];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
var Ss = "vercel.ai.error", fa = Symbol.for(Ss), As, ca = class Cs extends Error {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: t,
    message: r,
    cause: s
  }) {
    super(r), this[As] = !0, this.name = t, this.cause = s;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Cs.hasMarker(t, Ss);
  }
  static hasMarker(t, r) {
    const s = Symbol.for(r);
    return t != null && typeof t == "object" && s in t && typeof t[s] == "boolean" && t[s] === !0;
  }
};
As = fa;
var Pe = ca;
function ks(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Ns = "AI_InvalidArgumentError", Rs = `vercel.ai.error.${Ns}`, da = Symbol.for(Rs), Ds, ha = class extends Pe {
  constructor({
    message: e,
    cause: t,
    argument: r
  }) {
    super({ name: Ns, message: e, cause: t }), this[Ds] = !0, this.argument = r;
  }
  static isInstance(e) {
    return Pe.hasMarker(e, Rs);
  }
};
Ds = da;
var Os = "AI_JSONParseError", Ps = `vercel.ai.error.${Os}`, pa = Symbol.for(Ps), Ms, Dr = class extends Pe {
  constructor({ text: e, cause: t }) {
    super({
      name: Os,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${ks(t)}`,
      cause: t
    }), this[Ms] = !0, this.text = e;
  }
  static isInstance(e) {
    return Pe.hasMarker(e, Ps);
  }
};
Ms = pa;
var Fs = "AI_TypeValidationError", Ls = `vercel.ai.error.${Fs}`, va = Symbol.for(Ls), js, ga = class Vt extends Pe {
  constructor({ value: t, cause: r }) {
    super({
      name: Fs,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${ks(r)}`,
      cause: r
    }), this[js] = !0, this.value = t;
  }
  static isInstance(t) {
    return Pe.hasMarker(t, Ls);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value: t,
    cause: r
  }) {
    return Vt.isInstance(r) && r.value === t ? r : new Vt({ value: t, cause: r });
  }
};
js = va;
var Or = ga;
let _a = (e, t = 21) => (r = t) => {
  let s = "", n = r | 0;
  for (; n--; )
    s += e[Math.random() * e.length | 0];
  return s;
};
function ma(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var me = { exports: {} }, Pr;
function ba() {
  if (Pr) return me.exports;
  Pr = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, r = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function s(i, l, u) {
    u == null && l !== null && typeof l == "object" && (u = l, l = void 0), e && Buffer.isBuffer(i) && (i = i.toString()), i && i.charCodeAt(0) === 65279 && (i = i.slice(1));
    const c = JSON.parse(i, l);
    if (c === null || typeof c != "object")
      return c;
    const f = u && u.protoAction || "error", d = u && u.constructorAction || "error";
    if (f === "ignore" && d === "ignore")
      return c;
    if (f !== "ignore" && d !== "ignore") {
      if (t.test(i) === !1 && r.test(i) === !1)
        return c;
    } else if (f !== "ignore" && d === "ignore") {
      if (t.test(i) === !1)
        return c;
    } else if (r.test(i) === !1)
      return c;
    return n(c, { protoAction: f, constructorAction: d, safe: u && u.safe });
  }
  function n(i, { protoAction: l = "error", constructorAction: u = "error", safe: c } = {}) {
    let f = [i];
    for (; f.length; ) {
      const d = f;
      f = [];
      for (const h of d) {
        if (l !== "ignore" && Object.prototype.hasOwnProperty.call(h, "__proto__")) {
          if (c === !0)
            return null;
          if (l === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete h.__proto__;
        }
        if (u !== "ignore" && Object.prototype.hasOwnProperty.call(h, "constructor") && Object.prototype.hasOwnProperty.call(h.constructor, "prototype")) {
          if (c === !0)
            return null;
          if (u === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete h.constructor;
        }
        for (const v in h) {
          const b = h[v];
          b && typeof b == "object" && f.push(b);
        }
      }
    }
    return i;
  }
  function a(i, l, u) {
    const c = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return s(i, l, u);
    } finally {
      Error.stackTraceLimit = c;
    }
  }
  function o(i, l) {
    const u = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return s(i, l, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = u;
    }
  }
  return me.exports = a, me.exports.default = a, me.exports.parse = a, me.exports.safeParse = o, me.exports.scan = n, me.exports;
}
var ya = ba();
const wa = /* @__PURE__ */ ma(ya);
var Ea = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: s = "-"
} = {}) => {
  const n = _a(r, t);
  if (e == null)
    return n;
  if (r.includes(s))
    throw new ha({
      argument: "separator",
      message: `The separator "${s}" must not be part of the alphabet "${r}".`
    });
  return (a) => `${e}${s}${n(a)}`;
}, cr = Ea();
function Ia(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
var Jt = Symbol.for("vercel.ai.validator");
function xa(e) {
  return { [Jt]: !0, validate: e };
}
function Ta(e) {
  return typeof e == "object" && e !== null && Jt in e && e[Jt] === !0 && "validate" in e;
}
function $a(e) {
  return Ta(e) ? e : Sa(e);
}
function Sa(e) {
  return xa((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function Aa({
  value: e,
  schema: t
}) {
  const r = $a(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const s = r.validate(e);
    return s.success ? s : {
      success: !1,
      error: Or.wrap({ value: e, cause: s.error })
    };
  } catch (s) {
    return {
      success: !1,
      error: Or.wrap({ value: e, cause: s })
    };
  }
}
function Mr({
  text: e,
  schema: t
}) {
  try {
    const r = wa.parse(e);
    if (t == null)
      return { success: !0, value: r, rawValue: r };
    const s = Aa({ value: r, schema: t });
    return s.success ? { ...s, rawValue: r } : s;
  } catch (r) {
    return {
      success: !1,
      error: Dr.isInstance(r) ? r : new Dr({ text: e, cause: r })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var He = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Ke = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, We = {
  code: "4",
  name: "assistant_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("id" in e) || !("role" in e) || !("content" in e) || typeof e.id != "string" || typeof e.role != "string" || e.role !== "assistant" || !Array.isArray(e.content) || !e.content.every(
      (t) => t != null && typeof t == "object" && "type" in t && t.type === "text" && "text" in t && t.text != null && typeof t.text == "object" && "value" in t.text && typeof t.text.value == "string"
    ))
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    return {
      type: "assistant_message",
      value: e
    };
  }
}, Ge = {
  code: "5",
  name: "assistant_control_data",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("threadId" in e) || !("messageId" in e) || typeof e.threadId != "string" || typeof e.messageId != "string")
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    return {
      type: "assistant_control_data",
      value: {
        threadId: e.threadId,
        messageId: e.messageId
      }
    };
  }
}, Xe = {
  code: "6",
  name: "data_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("role" in e) || !("data" in e) || typeof e.role != "string" || e.role !== "data")
      throw new Error(
        '"data_message" parts expect an object with a "role" and "data" property.'
      );
    return {
      type: "data_message",
      value: e
    };
  }
}, Ca = [
  He,
  Ke,
  We,
  Ge,
  Xe
];
He.code + "", Ke.code + "", We.code + "", Ge.code + "", Xe.code + "";
He.name + "", He.code, Ke.name + "", Ke.code, We.name + "", We.code, Ge.name + "", Ge.code, Xe.name + "", Xe.code;
Ca.map((e) => e.code);
function ka({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Na(e) {
  const t = ["ROOT"];
  let r = -1, s = null;
  function n(l, u, c) {
    switch (l) {
      case '"': {
        r = u, t.pop(), t.push(c), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        r = u, s = u, t.pop(), t.push(c), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(c), t.push("INSIDE_NUMBER");
        break;
      }
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        r = u, t.pop(), t.push(c), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        r = u, t.pop(), t.push(c), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        r = u, t.pop(), t.push(c), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function a(l, u) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        r = u, t.pop();
        break;
      }
    }
  }
  function o(l, u) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        r = u, t.pop();
        break;
      }
    }
  }
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    switch (t[t.length - 1]) {
      case "ROOT":
        n(u, l, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            r = l, t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (u) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        n(u, l, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        a(u, l);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
          case '"': {
            t.pop(), r = l;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            r = l;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (u) {
          case "]": {
            r = l, t.pop();
            break;
          }
          default: {
            r = l, n(u, l, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (u) {
          case ",": {
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            r = l, t.pop();
            break;
          }
          default: {
            r = l;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        n(u, l, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), r = l;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (u) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            r = l;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(u, l), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(u, l);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(u, l);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(u, l);
            break;
          }
          default: {
            t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const f = e.substring(s, l + 1);
        !"false".startsWith(f) && !"true".startsWith(f) && !"null".startsWith(f) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? a(u, l) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && o(u, l)) : r = l;
        break;
      }
    }
  }
  let i = e.slice(0, r + 1);
  for (let l = t.length - 1; l >= 0; l--)
    switch (t[l]) {
      case "INSIDE_STRING": {
        i += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        i += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        i += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const c = e.substring(s, e.length);
        "true".startsWith(c) ? i += "true".slice(c.length) : "false".startsWith(c) ? i += "false".slice(c.length) : "null".startsWith(c) && (i += "null".slice(c.length));
      }
    }
  return i;
}
function Ra(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = Mr({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = Mr({ text: Na(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var Da = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Oa = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Pa = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Ma = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Fa = {
  code: "9",
  name: "tool_call",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string" || !("args" in e) || typeof e.args != "object")
      throw new Error(
        '"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.'
      );
    return {
      type: "tool_call",
      value: e
    };
  }
}, La = {
  code: "a",
  name: "tool_result",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("result" in e))
      throw new Error(
        '"tool_result" parts expect an object with a "toolCallId" and a "result" property.'
      );
    return {
      type: "tool_result",
      value: e
    };
  }
}, ja = {
  code: "b",
  name: "tool_call_streaming_start",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string")
      throw new Error(
        '"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.'
      );
    return {
      type: "tool_call_streaming_start",
      value: e
    };
  }
}, za = {
  code: "c",
  name: "tool_call_delta",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("argsTextDelta" in e) || typeof e.argsTextDelta != "string")
      throw new Error(
        '"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.'
      );
    return {
      type: "tool_call_delta",
      value: e
    };
  }
}, Ba = {
  code: "d",
  name: "finish_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string")
      throw new Error(
        '"finish_message" parts expect an object with a "finishReason" property.'
      );
    const t = {
      finishReason: e.finishReason
    };
    return "usage" in e && e.usage != null && typeof e.usage == "object" && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = {
      promptTokens: typeof e.usage.promptTokens == "number" ? e.usage.promptTokens : Number.NaN,
      completionTokens: typeof e.usage.completionTokens == "number" ? e.usage.completionTokens : Number.NaN
    }), {
      type: "finish_message",
      value: t
    };
  }
}, Va = {
  code: "e",
  name: "finish_step",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string")
      throw new Error(
        '"finish_step" parts expect an object with a "finishReason" property.'
      );
    const t = {
      finishReason: e.finishReason,
      isContinued: !1
    };
    return "usage" in e && e.usage != null && typeof e.usage == "object" && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = {
      promptTokens: typeof e.usage.promptTokens == "number" ? e.usage.promptTokens : Number.NaN,
      completionTokens: typeof e.usage.completionTokens == "number" ? e.usage.completionTokens : Number.NaN
    }), "isContinued" in e && typeof e.isContinued == "boolean" && (t.isContinued = e.isContinued), {
      type: "finish_step",
      value: t
    };
  }
}, Ja = {
  code: "f",
  name: "start_step",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("messageId" in e) || typeof e.messageId != "string")
      throw new Error(
        '"start_step" parts expect an object with an "id" property.'
      );
    return {
      type: "start_step",
      value: {
        messageId: e.messageId
      }
    };
  }
}, Ua = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, Ya = {
  code: "h",
  name: "source",
  parse: (e) => {
    if (e == null || typeof e != "object")
      throw new Error('"source" parts expect a Source object.');
    return {
      type: "source",
      value: e
    };
  }
}, qa = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, Ha = {
  code: "j",
  name: "reasoning_signature",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("signature" in e) || typeof e.signature != "string")
      throw new Error(
        '"reasoning_signature" parts expect an object with a "signature" property.'
      );
    return {
      type: "reasoning_signature",
      value: { signature: e.signature }
    };
  }
}, Ka = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, dr = [
  Da,
  Oa,
  Pa,
  Ma,
  Fa,
  La,
  ja,
  za,
  Ba,
  Va,
  Ja,
  Ua,
  Ya,
  qa,
  Ha,
  Ka
], Wa = Object.fromEntries(
  dr.map((e) => [e.code, e])
);
Object.fromEntries(
  dr.map((e) => [e.name, e.code])
);
var Ga = dr.map((e) => e.code), Xa = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const r = e.slice(0, t);
  if (!Ga.includes(r))
    throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
  const s = r, n = e.slice(t + 1), a = JSON.parse(n);
  return Wa[s].parse(a);
}, Za = 10;
function Qa(e, t) {
  const r = new Uint8Array(t);
  let s = 0;
  for (const n of e)
    r.set(n, s), s += n.length;
  return e.length = 0, r;
}
async function ei({
  stream: e,
  onTextPart: t,
  onReasoningPart: r,
  onReasoningSignaturePart: s,
  onRedactedReasoningPart: n,
  onSourcePart: a,
  onFilePart: o,
  onDataPart: i,
  onErrorPart: l,
  onToolCallStreamingStartPart: u,
  onToolCallDeltaPart: c,
  onToolCallPart: f,
  onToolResultPart: d,
  onMessageAnnotationsPart: h,
  onFinishMessagePart: v,
  onFinishStepPart: b,
  onStartStepPart: $
}) {
  const w = e.getReader(), m = new TextDecoder(), E = [];
  let S = 0;
  for (; ; ) {
    const { value: I } = await w.read();
    if (I && (E.push(I), S += I.length, I[I.length - 1] !== Za))
      continue;
    if (E.length === 0)
      break;
    const g = Qa(E, S);
    S = 0;
    const y = m.decode(g, { stream: !0 }).split(`
`).filter((N) => N !== "").map(Xa);
    for (const { type: N, value: x } of y)
      switch (N) {
        case "text":
          await (t == null ? void 0 : t(x));
          break;
        case "reasoning":
          await (r == null ? void 0 : r(x));
          break;
        case "reasoning_signature":
          await (s == null ? void 0 : s(x));
          break;
        case "redacted_reasoning":
          await (n == null ? void 0 : n(x));
          break;
        case "file":
          await (o == null ? void 0 : o(x));
          break;
        case "source":
          await (a == null ? void 0 : a(x));
          break;
        case "data":
          await (i == null ? void 0 : i(x));
          break;
        case "error":
          await (l == null ? void 0 : l(x));
          break;
        case "message_annotations":
          await (h == null ? void 0 : h(x));
          break;
        case "tool_call_streaming_start":
          await (u == null ? void 0 : u(x));
          break;
        case "tool_call_delta":
          await (c == null ? void 0 : c(x));
          break;
        case "tool_call":
          await (f == null ? void 0 : f(x));
          break;
        case "tool_result":
          await (d == null ? void 0 : d(x));
          break;
        case "finish_message":
          await (v == null ? void 0 : v(x));
          break;
        case "finish_step":
          await (b == null ? void 0 : b(x));
          break;
        case "start_step":
          await ($ == null ? void 0 : $(x));
          break;
        default: {
          const ue = N;
          throw new Error(`Unknown stream part type: ${ue}`);
        }
      }
  }
}
async function ti({
  stream: e,
  update: t,
  onToolCall: r,
  onFinish: s,
  generateId: n = cr,
  getCurrentDate: a = () => /* @__PURE__ */ new Date(),
  lastMessage: o
}) {
  var i, l;
  const u = (o == null ? void 0 : o.role) === "assistant";
  let c = u ? 1 + // find max step in existing tool invocations:
  ((l = (i = o.toolInvocations) == null ? void 0 : i.reduce((g, y) => {
    var N;
    return Math.max(g, (N = y.step) != null ? N : 0);
  }, 0)) != null ? l : 0) : 0;
  const f = u ? structuredClone(o) : {
    id: n(),
    createdAt: a(),
    role: "assistant",
    content: "",
    parts: []
  };
  let d, h, v;
  function b(g, y) {
    const N = f.parts.find(
      (x) => x.type === "tool-invocation" && x.toolInvocation.toolCallId === g
    );
    N != null ? N.toolInvocation = y : f.parts.push({
      type: "tool-invocation",
      toolInvocation: y
    });
  }
  const $ = [];
  let w = u ? o == null ? void 0 : o.annotations : void 0;
  const m = {};
  let E = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, S = "unknown";
  function I() {
    const g = [...$];
    w != null && w.length && (f.annotations = w);
    const y = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(f),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: n()
    };
    t({
      message: y,
      data: g,
      replaceLastMessage: u
    });
  }
  await ei({
    stream: e,
    onTextPart(g) {
      d == null ? (d = {
        type: "text",
        text: g
      }, f.parts.push(d)) : d.text += g, f.content += g, I();
    },
    onReasoningPart(g) {
      var y;
      v == null ? (v = { type: "text", text: g }, h != null && h.details.push(v)) : v.text += g, h == null ? (h = {
        type: "reasoning",
        reasoning: g,
        details: [v]
      }, f.parts.push(h)) : h.reasoning += g, f.reasoning = ((y = f.reasoning) != null ? y : "") + g, I();
    },
    onReasoningSignaturePart(g) {
      v != null && (v.signature = g.signature);
    },
    onRedactedReasoningPart(g) {
      h == null && (h = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, f.parts.push(h)), h.details.push({
        type: "redacted",
        data: g.data
      }), v = void 0, I();
    },
    onFilePart(g) {
      f.parts.push({
        type: "file",
        mimeType: g.mimeType,
        data: g.data
      }), I();
    },
    onSourcePart(g) {
      f.parts.push({
        type: "source",
        source: g
      }), I();
    },
    onToolCallStreamingStartPart(g) {
      f.toolInvocations == null && (f.toolInvocations = []), m[g.toolCallId] = {
        text: "",
        step: c,
        toolName: g.toolName,
        index: f.toolInvocations.length
      };
      const y = {
        state: "partial-call",
        step: c,
        toolCallId: g.toolCallId,
        toolName: g.toolName,
        args: void 0
      };
      f.toolInvocations.push(y), b(g.toolCallId, y), I();
    },
    onToolCallDeltaPart(g) {
      const y = m[g.toolCallId];
      y.text += g.argsTextDelta;
      const { value: N } = Ra(y.text), x = {
        state: "partial-call",
        step: y.step,
        toolCallId: g.toolCallId,
        toolName: y.toolName,
        args: N
      };
      f.toolInvocations[y.index] = x, b(g.toolCallId, x), I();
    },
    async onToolCallPart(g) {
      const y = {
        state: "call",
        step: c,
        ...g
      };
      if (m[g.toolCallId] != null ? f.toolInvocations[m[g.toolCallId].index] = y : (f.toolInvocations == null && (f.toolInvocations = []), f.toolInvocations.push(y)), b(g.toolCallId, y), I(), r) {
        const N = await r({ toolCall: g });
        if (N != null) {
          const x = {
            state: "result",
            step: c,
            ...g,
            result: N
          };
          f.toolInvocations[f.toolInvocations.length - 1] = x, b(g.toolCallId, x), I();
        }
      }
    },
    onToolResultPart(g) {
      const y = f.toolInvocations;
      if (y == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const N = y.findIndex(
        (ue) => ue.toolCallId === g.toolCallId
      );
      if (N === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const x = {
        ...y[N],
        state: "result",
        ...g
      };
      y[N] = x, b(g.toolCallId, x), I();
    },
    onDataPart(g) {
      $.push(...g), I();
    },
    onMessageAnnotationsPart(g) {
      w == null ? w = [...g] : w.push(...g), I();
    },
    onFinishStepPart(g) {
      c += 1, d = g.isContinued ? d : void 0, h = void 0, v = void 0;
    },
    onStartStepPart(g) {
      u || (f.id = g.messageId), f.parts.push({ type: "step-start" }), I();
    },
    onFinishMessagePart(g) {
      S = g.finishReason, g.usage != null && (E = ka(g.usage));
    },
    onErrorPart(g) {
      throw new Error(g);
    }
  }), s == null || s({ message: f, finishReason: S, usage: E });
}
async function ri({
  stream: e,
  onTextPart: t
}) {
  const r = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: s, value: n } = await r.read();
    if (s)
      break;
    await t(n);
  }
}
async function si({
  stream: e,
  update: t,
  onFinish: r,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  generateId: n = cr
}) {
  const a = { type: "text", text: "" }, o = {
    id: n(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: [a]
  };
  await ri({
    stream: e,
    onTextPart: (i) => {
      o.content += i, a.text += i, t({
        message: { ...o },
        data: [],
        replaceLastMessage: !1
      });
    }
  }), r == null || r(o, {
    usage: { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
    finishReason: "unknown"
  });
}
var ni = () => fetch;
async function ai({
  api: e,
  body: t,
  streamProtocol: r = "data",
  credentials: s,
  headers: n,
  abortController: a,
  restoreMessagesOnFailure: o,
  onResponse: i,
  onUpdate: l,
  onFinish: u,
  onToolCall: c,
  generateId: f,
  fetch: d = ni(),
  lastMessage: h,
  requestType: v = "generate"
}) {
  var b, $, w;
  const E = await (v === "resume" ? d(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...n
    },
    signal: (b = a == null ? void 0 : a()) == null ? void 0 : b.signal,
    credentials: s
  }) : d(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...n
    },
    signal: ($ = a == null ? void 0 : a()) == null ? void 0 : $.signal,
    credentials: s
  })).catch((S) => {
    throw S;
  });
  if (i)
    try {
      await i(E);
    } catch (S) {
      throw S;
    }
  if (!E.ok)
    throw new Error(
      (w = await E.text()) != null ? w : "Failed to fetch the chat response."
    );
  if (!E.body)
    throw new Error("The response body is empty.");
  switch (r) {
    case "text": {
      await si({
        stream: E.body,
        update: l,
        onFinish: u,
        generateId: f
      });
      return;
    }
    case "data": {
      await ti({
        stream: E.body,
        update: l,
        lastMessage: h,
        onToolCall: c,
        onFinish({ message: S, finishReason: I, usage: g }) {
          u && S != null && u(S, { usage: g, finishReason: I });
        },
        generateId: f
      });
      return;
    }
    default: {
      const S = r;
      throw new Error(`Unknown stream protocol: ${S}`);
    }
  }
}
function Ut(e) {
  return e == null ? void 0 : e.reduce((t, r) => {
    var s;
    return Math.max(t, (s = r.step) != null ? s : 0);
  }, 0);
}
function zs(e) {
  var t;
  return (t = e.parts) != null ? t : [
    ...e.toolInvocations ? e.toolInvocations.map((r) => ({
      type: "tool-invocation",
      toolInvocation: r
    })) : [],
    ...e.reasoning ? [
      {
        type: "reasoning",
        reasoning: e.reasoning,
        details: [{ type: "text", text: e.reasoning }]
      }
    ] : [],
    ...e.content ? [{ type: "text", text: e.content }] : []
  ];
}
function Fr(e) {
  return e.map((t) => ({
    ...t,
    parts: zs(t)
  }));
}
async function Lr(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: r, type: s } = t, n = await new Promise((a, o) => {
          const i = new FileReader();
          i.onload = (l) => {
            var u;
            a((u = l.target) == null ? void 0 : u.result);
          }, i.onerror = (l) => o(l), i.readAsDataURL(t);
        });
        return {
          name: r,
          contentType: s,
          url: n
        };
      })
    );
  if (Array.isArray(e))
    return e;
  throw new Error("Invalid attachments type");
}
function ii({
  originalMaxToolInvocationStep: e,
  originalMessageCount: t,
  maxSteps: r,
  messages: s
}) {
  var n;
  const a = s[s.length - 1];
  return (
    // check if the feature is enabled:
    r > 1 && // ensure there is a last message:
    a != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (s.length > t || Ut(a.toolInvocations) !== e) && // check that next step is possible:
    Bs(a) && // limit the number of automatic steps:
    ((n = Ut(a.toolInvocations)) != null ? n : 0) < r
  );
}
function Bs(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((s, n, a) => n.type === "step-start" ? a : s, -1), r = e.parts.slice(t + 1).filter((s) => s.type === "tool-invocation");
  return r.length > 0 && r.every((s) => "result" in s.toolInvocation);
}
function oi({
  messages: e,
  toolCallId: t,
  toolResult: r
}) {
  var s;
  const n = e[e.length - 1], a = n.parts.find(
    (i) => i.type === "tool-invocation" && i.toolInvocation.toolCallId === t
  );
  if (a == null)
    return;
  const o = {
    ...a.toolInvocation,
    state: "result",
    result: r
  };
  a.toolInvocation = o, n.toolInvocations = (s = n.toolInvocations) == null ? void 0 : s.map(
    (i) => i.toolCallId === t ? o : i
  );
}
function Le(e) {
  R(e, e.v + 1);
}
var G, X, se, De, ut;
const hr = class hr extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(r) {
    super();
    D(this, De);
    /** @type {Map<K, Source<number>>} */
    D(this, G, /* @__PURE__ */ new Map());
    D(this, X, /* @__PURE__ */ L(0));
    D(this, se, /* @__PURE__ */ L(0));
    if (r) {
      for (var [s, n] of r)
        super.set(s, n);
      p(this, se).v = super.size;
    }
  }
  /** @param {K} key */
  has(r) {
    var s = p(this, G), n = s.get(r);
    if (n === void 0) {
      var a = super.get(r);
      if (a !== void 0)
        n = he(0), s.set(r, n);
      else
        return _(p(this, X)), !1;
    }
    return _(n), !0;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(r, s) {
    at(this, De, ut).call(this), super.forEach(r, s);
  }
  /** @param {K} key */
  get(r) {
    var s = p(this, G), n = s.get(r);
    if (n === void 0) {
      var a = super.get(r);
      if (a !== void 0)
        n = he(0), s.set(r, n);
      else {
        _(p(this, X));
        return;
      }
    }
    return _(n), super.get(r);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(r, s) {
    var f;
    var n = p(this, G), a = n.get(r), o = super.get(r), i = super.set(r, s), l = p(this, X);
    if (a === void 0)
      a = he(0), n.set(r, a), R(p(this, se), super.size), Le(l);
    else if (o !== s) {
      Le(a);
      var u = l.reactions === null ? null : new Set(l.reactions), c = u === null || !((f = a.reactions) != null && f.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          u.has(d)
        )
      ));
      c && Le(l);
    }
    return i;
  }
  /** @param {K} key */
  delete(r) {
    var s = p(this, G), n = s.get(r), a = super.delete(r);
    return n !== void 0 && (s.delete(r), R(p(this, se), super.size), R(n, -1), Le(p(this, X))), a;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var r = p(this, G);
      R(p(this, se), 0);
      for (var s of r.values())
        R(s, -1);
      Le(p(this, X)), r.clear();
    }
  }
  keys() {
    return _(p(this, X)), super.keys();
  }
  values() {
    return at(this, De, ut).call(this), super.values();
  }
  entries() {
    return at(this, De, ut).call(this), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return _(p(this, se)), super.size;
  }
};
G = new WeakMap(), X = new WeakMap(), se = new WeakMap(), De = new WeakSet(), ut = function() {
  _(p(this, X));
  var r = p(this, G);
  if (p(this, se).v !== r.size) {
    for (var s of vr(hr.prototype, this, "keys").call(this))
      if (!r.has(s)) {
        var n = he(0);
        r.set(s, n);
      }
  }
  for ([, n] of p(this, G))
    _(n);
};
let Yt = hr;
function li(e) {
  const t = Symbol(e);
  return {
    hasContext: () => {
      var r;
      try {
        return mn(t);
      } catch (s) {
        if (typeof s == "object" && s !== null && "message" in s && typeof s.message == "string" && ((r = s.message) != null && r.includes("lifecycle_outside_component")))
          return !1;
        throw s;
      }
    },
    getContext: () => gn(t),
    setContext: (r) => _n(t, r)
  };
}
var Ze;
class ui extends Yt {
  constructor(r, s) {
    super(s);
    D(this, Ze);
    fe(this, Ze, r);
  }
  get(r) {
    return super.get(r) ?? // Untrack here because this is technically a state mutation, meaning
    // deriveds downstream would fail. Because this is idempotent (even
    // though it's not pure), it's safe.
    Fe(() => this.set(r, new (p(this, Ze))())).get(r);
  }
}
Ze = new WeakMap();
var Qe, et, tt, rt;
class fi {
  constructor() {
    D(this, Qe, /* @__PURE__ */ L(ye([])));
    D(this, et, /* @__PURE__ */ L());
    D(this, tt, /* @__PURE__ */ L("ready"));
    D(this, rt, /* @__PURE__ */ L());
  }
  get messages() {
    return _(p(this, Qe));
  }
  set messages(t) {
    R(p(this, Qe), t, !0);
  }
  get data() {
    return _(p(this, et));
  }
  set data(t) {
    R(p(this, et), t, !0);
  }
  get status() {
    return _(p(this, tt));
  }
  set status(t) {
    R(p(this, tt), t, !0);
  }
  get error() {
    return _(p(this, rt));
  }
  set error(t) {
    R(p(this, rt), t, !0);
  }
}
Qe = new WeakMap(), et = new WeakMap(), tt = new WeakMap(), rt = new WeakMap();
class ci extends ui {
  constructor(t) {
    super(fi, t);
  }
}
const {
  hasContext: di,
  getContext: hi
} = li("Chat");
var O, _t, we, mt, bt, Oe, st, P, Ee, nt, de;
class jr {
  constructor(t = {}) {
    D(this, O, {});
    D(this, _t, /* @__PURE__ */ Ce(() => p(this, O).api ?? "/api/chat"));
    D(this, we, /* @__PURE__ */ Ce(() => p(this, O).generateId ?? cr));
    D(this, mt, /* @__PURE__ */ Ce(() => p(this, O).maxSteps ?? 1));
    D(this, bt, /* @__PURE__ */ Ce(() => p(this, O).streamProtocol ?? "data"));
    D(this, Oe, /* @__PURE__ */ L());
    D(this, st, /* @__PURE__ */ Ce(() => p(this, O).id ?? _(p(this, we))()));
    D(this, P, /* @__PURE__ */ Ce(() => _(p(this, Oe)).get(this.id)));
    D(this, Ee);
    D(this, nt, /* @__PURE__ */ L());
    /**
     * Append a user message to the chat list. This triggers the API call to fetch
     * the assistant's response.
     * @param message The message to append
     * @param options Additional options to pass to the API call
     */
    j(this, "append", async (t, {
      data: r,
      headers: s,
      body: n,
      experimental_attachments: a
    } = {}) => {
      const o = await Lr(a), i = this.messages.concat({
        ...t,
        id: t.id ?? _(p(this, we))(),
        createdAt: t.createdAt ?? /* @__PURE__ */ new Date(),
        experimental_attachments: o.length > 0 ? o : void 0,
        parts: zs(t)
      });
      return p(this, de).call(this, { messages: i, headers: s, body: n, data: r });
    });
    /**
     * Reload the last AI chat response for the given chat history. If the last
     * message isn't from the assistant, it will request the API to generate a
     * new response.
     */
    j(this, "reload", async ({ data: t, headers: r, body: s } = {}) => {
      if (this.messages.length === 0)
        return;
      const n = this.messages[this.messages.length - 1];
      await p(this, de).call(this, {
        messages: n.role === "assistant" ? this.messages.slice(0, -1) : this.messages,
        headers: r,
        body: s,
        data: t
      });
    });
    /**
     * Abort the current request immediately, keep the generated tokens if any.
     */
    j(this, "stop", () => {
      var t;
      try {
        (t = p(this, Ee)) == null || t.abort();
      } catch {
      } finally {
        _(p(this, P)).status = "ready", fe(this, Ee, void 0);
      }
    });
    /** Form submission handler to automatically reset input and append a user message */
    j(this, "handleSubmit", async (t, r = {}) => {
      var i;
      if ((i = t == null ? void 0 : t.preventDefault) == null || i.call(t), !this.input && !r.allowEmptySubmit) return;
      const s = await Lr(r.experimental_attachments), a = {
        messages: this.messages.concat({
          id: _(p(this, we))(),
          createdAt: /* @__PURE__ */ new Date(),
          role: "user",
          content: this.input,
          experimental_attachments: s.length > 0 ? s : void 0,
          parts: [{ type: "text", text: this.input }]
        }),
        headers: r.headers,
        body: r.body,
        data: r.data
      }, o = p(this, de).call(this, a);
      this.input = "", await o;
    });
    j(this, "addToolResult", async ({ toolCallId: t, result: r }) => {
      if (oi({
        messages: this.messages,
        toolCallId: t,
        toolResult: r
      }), _(p(this, P)).status === "submitted" || _(p(this, P)).status === "streaming")
        return;
      const s = this.messages[this.messages.length - 1];
      Bs(s) && await p(this, de).call(this, { messages: this.messages });
    });
    D(this, de, async (t) => {
      var a;
      _(p(this, P)).status = "submitted", _(p(this, P)).error = void 0;
      const r = Fr(t.messages), s = r.length, n = Ut((a = r[r.length - 1]) == null ? void 0 : a.toolInvocations);
      try {
        const o = new AbortController();
        fe(this, Ee, o), this.messages = r;
        const i = p(this, O).sendExtraMessageFields ? r : r.map(({
          role: u,
          content: c,
          experimental_attachments: f,
          data: d,
          annotations: h,
          toolInvocations: v,
          parts: b
        }) => ({
          role: u,
          content: c,
          ...f !== void 0 && { experimental_attachments: f },
          ...d !== void 0 && { data: d },
          ...h !== void 0 && { annotations: h },
          ...v !== void 0 && { toolInvocations: v },
          ...b !== void 0 && { parts: b }
        })), l = this.data ?? [];
        await ai({
          api: _(p(this, _t)),
          body: {
            id: this.id,
            messages: i,
            data: t.data,
            ...br(p(this, O).body),
            ...t.body
          },
          streamProtocol: _(p(this, bt)),
          credentials: p(this, O).credentials,
          headers: {
            ...p(this, O).headers,
            ...t.headers
          },
          abortController: () => o,
          restoreMessagesOnFailure: () => {
          },
          onResponse: p(this, O).onResponse,
          onUpdate: ({ message: u, data: c, replaceLastMessage: f }) => {
            _(p(this, P)).status = "streaming", this.messages = r, f ? this.messages[this.messages.length - 1] = u : this.messages.push(u), c != null && c.length && (this.data = l, this.data.push(...c));
          },
          onToolCall: p(this, O).onToolCall,
          onFinish: p(this, O).onFinish,
          generateId: _(p(this, we)),
          fetch: p(this, O).fetch,
          // callChatApi calls structuredClone on the message
          lastMessage: br(this.messages[this.messages.length - 1])
        }), fe(this, Ee, void 0), _(p(this, P)).status = "ready";
      } catch (o) {
        if (Ia(o))
          return;
        const i = o instanceof Error ? o : new Error(String(o));
        p(this, O).onError && p(this, O).onError(i), _(p(this, P)).status = "error", _(p(this, P)).error = i;
      }
      ii({
        originalMaxToolInvocationStep: n,
        originalMessageCount: s,
        maxSteps: _(p(this, mt)),
        messages: this.messages
      }) && await p(this, de).call(this, { messages: this.messages });
    });
    di() ? R(p(this, Oe), hi(), !0) : R(p(this, Oe), new ci(), !0), fe(this, O, t), this.messages = t.initialMessages ?? [], this.input = t.initialInput ?? "";
  }
  get id() {
    return _(p(this, st));
  }
  set id(t) {
    R(p(this, st), t);
  }
  /**
   * Additional data added on the server via StreamData.
   *
   * This is writable, so you can use it to transform or clear the chat data.
   */
  get data() {
    return _(p(this, P)).data;
  }
  set data(t) {
    _(p(this, P)).data = t;
  }
  /**
   * Hook status:
   *
   * - `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
   * - `streaming`: The response is actively streaming in from the API, receiving chunks of data.
   * - `ready`: The full response has been received and processed; a new user message can be submitted.
   * - `error`: An error occurred during the API request, preventing successful completion.
   */
  get status() {
    return _(p(this, P)).status;
  }
  /** The error object of the API request */
  get error() {
    return _(p(this, P)).error;
  }
  get input() {
    return _(p(this, nt));
  }
  set input(t) {
    R(p(this, nt), t, !0);
  }
  /**
   * Current messages in the chat.
   *
   * This is writable, which is useful when you want to edit the messages on the client, and then
   * trigger {@link reload} to regenerate the AI response.
   */
  get messages() {
    return _(p(this, P)).messages;
  }
  set messages(t) {
    Fe(() => _(p(this, P)).messages = Fr(t));
  }
}
O = new WeakMap(), _t = new WeakMap(), we = new WeakMap(), mt = new WeakMap(), bt = new WeakMap(), Oe = new WeakMap(), st = new WeakMap(), P = new WeakMap(), Ee = new WeakMap(), nt = new WeakMap(), de = new WeakMap();
var pi = /* @__PURE__ */ $t('<div class="message-text svelte-1f52vz9"> </div>'), vi = /* @__PURE__ */ $t('<li><div class="message-role svelte-1f52vz9"> </div> <div class="message-content svelte-1f52vz9"></div></li>'), gi = /* @__PURE__ */ $t('<span class="loading-spinner svelte-1f52vz9"></span>'), _i = /* @__PURE__ */ $t('<div class="valis-conversation svelte-1f52vz9"><div class="messages-container svelte-1f52vz9"><ul class="messages-list svelte-1f52vz9"></ul></div> <form class="input-form svelte-1f52vz9"><div class="input-container svelte-1f52vz9"><textarea class="message-input svelte-1f52vz9" placeholder="Type your message..." rows="3"></textarea></div> <div class="input-actions-container svelte-1f52vz9"><button class="send-button svelte-1f52vz9" type="submit"><!></button></div></form></div>');
const mi = {
  hash: "svelte-1f52vz9",
  code: `
  /* CSS Custom Properties for customization */:host {
    /* Container styles */--valis-container-bg: #ffffff;--valis-container-border: 1px solid #e5e7eb;--valis-container-border-radius: 12px;--valis-container-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);--valis-container-padding: 16px;--valis-container-max-width: 600px;--valis-container-min-height: 400px;
    
    /* Typography */--valis-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;--valis-font-size: 14px;--valis-line-height: 1.5;--valis-text-color: #374151;
    
    /* Messages */--valis-messages-bg: #f9fafb;--valis-messages-border-radius: 8px;--valis-messages-padding: 12px;--valis-messages-margin-bottom: 16px;--valis-messages-max-height: 300px;
    
    /* Message items */--valis-message-margin: 8px 0;--valis-message-padding: 12px;--valis-message-border-radius: 8px;--valis-user-message-bg: #3b82f6;--valis-user-message-color: #ffffff;--valis-assistant-message-bg: #f3f4f6;--valis-assistant-message-color: #374151;--valis-role-font-size: 12px;--valis-role-font-weight: 600;--valis-role-text-transform: uppercase;--valis-role-margin-bottom: 4px;
    
    /* Input area */--valis-input-bg: #ffffff;--valis-input-border: 1px solid #d1d5db;--valis-input-border-radius: 8px;--valis-input-padding: 12px;--valis-input-focus-border: 1px solid #3b82f6;--valis-input-focus-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    
    /* Button */--valis-button-bg: #3b82f6;--valis-button-color: #ffffff;--valis-button-border: none;--valis-button-border-radius: 8px;--valis-button-padding: 12px 20px;--valis-button-font-weight: 600;--valis-button-hover-bg: #2563eb;--valis-button-disabled-bg: #9ca3af;--valis-button-transition: all 0.2s ease;
    
    /* Loading spinner */--valis-spinner-size: 16px;--valis-spinner-color: #ffffff;--valis-spinner-border-width: 2px;}

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {:host {--valis-container-bg: #1f2937;--valis-container-border: 1px solid #374151;--valis-text-color: #f9fafb;--valis-messages-bg: #111827;--valis-assistant-message-bg: #374151;--valis-assistant-message-color: #f9fafb;--valis-input-bg: #374151;--valis-input-border: 1px solid #4b5563;--valis-input-color: #f9fafb;}
  }.valis-conversation.svelte-1f52vz9 {display:flex;flex-direction:column;background:var(--valis-container-bg);border:var(--valis-container-border);border-radius:var(--valis-container-border-radius);box-shadow:var(--valis-container-shadow);padding:var(--valis-container-padding);max-width:var(--valis-container-max-width);min-height:var(--valis-container-min-height);font-family:var(--valis-font-family);font-size:var(--valis-font-size);line-height:var(--valis-line-height);color:var(--valis-text-color);}.messages-container.svelte-1f52vz9 {flex:1;background:var(--valis-messages-bg);border-radius:var(--valis-messages-border-radius);padding:var(--valis-messages-padding);margin-bottom:var(--valis-messages-margin-bottom);max-height:var(--valis-messages-max-height);overflow-y:auto;}.messages-list.svelte-1f52vz9 {list-style:none;margin:0;padding:0;}.message-item.svelte-1f52vz9 {margin:var(--valis-message-margin);padding:var(--valis-message-padding);border-radius:var(--valis-message-border-radius);}.message-item.user.svelte-1f52vz9 {background:var(--valis-user-message-bg);color:var(--valis-user-message-color);margin-left:20%;}.message-item.assistant.svelte-1f52vz9 {background:var(--valis-assistant-message-bg);color:var(--valis-assistant-message-color);margin-right:20%;}.message-role.svelte-1f52vz9 {font-size:var(--valis-role-font-size);font-weight:var(--valis-role-font-weight);text-transform:var(--valis-role-text-transform);margin-bottom:var(--valis-role-margin-bottom);opacity:0.8;}.message-content.svelte-1f52vz9 {word-wrap:break-word;}.message-text.svelte-1f52vz9 {white-space:pre-wrap;}.input-form.svelte-1f52vz9 {margin-top:auto;}.input-container.svelte-1f52vz9 {display:flex;gap:8px;align-items:flex-end;}.input-actions-container.svelte-1f52vz9 {display:flex;justify-content:flex-end;gap:8px;}.message-input.svelte-1f52vz9 {flex:1;background:var(--valis-input-bg);border:var(--valis-input-border);border-radius:var(--valis-input-border-radius);padding:var(--valis-input-padding);font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;resize:vertical;min-height:60px;max-height:120px;transition:border-color 0.2s ease, box-shadow 0.2s ease;}.message-input.svelte-1f52vz9:focus {outline:none;border:var(--valis-input-focus-border);box-shadow:var(--valis-input-focus-shadow);}.message-input.svelte-1f52vz9::placeholder {color:#9ca3af;}.send-button.svelte-1f52vz9 {background:var(--valis-button-bg);color:var(--valis-button-color);border:var(--valis-button-border);border-radius:var(--valis-button-border-radius);padding:var(--valis-button-padding);font-family:inherit;font-size:inherit;font-weight:var(--valis-button-font-weight);cursor:pointer;transition:var(--valis-button-transition);display:flex;align-items:center;justify-content:center;min-width:80px;height:44px;}.send-button.svelte-1f52vz9:hover:not(:disabled) {background:var(--valis-button-hover-bg);}.send-button.svelte-1f52vz9:disabled {background:var(--valis-button-disabled-bg);cursor:not-allowed;}.loading-spinner.svelte-1f52vz9 {width:var(--valis-spinner-size);height:var(--valis-spinner-size);border:var(--valis-spinner-border-width) solid transparent;border-top:var(--valis-spinner-border-width) solid var(--valis-spinner-color);border-radius:50%;
    animation: svelte-1f52vz9-spin 1s linear infinite;}

  @keyframes svelte-1f52vz9-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Responsive design */
  @media (max-width: 768px) {.valis-conversation.svelte-1f52vz9 {border-radius:0;min-height:100vh;}.message-item.user.svelte-1f52vz9 {margin-left:10%;}.message-item.assistant.svelte-1f52vz9 {margin-right:10%;}
  }`
};
function bi(e, t) {
  Gr(t, !0), ta(e, mi);
  let r = Rr(t, "conversationId"), s = Rr(t, "useCredentials", 7, !1), n;
  const a = () => {
    const m = document.querySelector("valis-conversation");
    m && (console.log("Updating props from attributes..."), m.hasAttribute("conversation-id") && (r(m.getAttribute("conversation-id") || ""), console.log("Set conversationId to:", r())), m.hasAttribute("use-credentials") && (s(m.getAttribute("use-credentials") === "true"), console.log("Set useCredentials to:", s())));
  };
  Xn(() => {
    console.log("Component mounted, initializing..."), a();
    const m = document.querySelector("valis-conversation");
    m ? (new MutationObserver((S) => {
      let I = !1;
      S.forEach((g) => {
        if (g.type === "attributes") {
          const y = g.attributeName;
          y && ["conversation-id"].includes(y) && (I = !0, console.log("Attribute changed:", y, "New value:", m.getAttribute(y))), y && ["use-credentials"].includes(y) && (I = !0, console.log("Attribute changed:", y, "New value:", m.getAttribute(y)));
        }
      }), I && (console.log("Attributes changed, updating props..."), a());
    }).observe(m, {
      attributes: !0,
      attributeFilter: ["conversation-id", "use-credentials"]
    }), console.log("MutationObserver set up to watch for attribute changes")) : console.log("Element not found!");
  });
  let o = /* @__PURE__ */ L(ye(new jr({
    id: r(),
    api: `https://ai.valis.jala.university/api/v1/chat/completions/conversations/${r()}`,
    sendExtraMessageFields: !0,
    body: { stream: !0 },
    credentials: s() ? "include" : "same-origin",
    onError: (m) => {
      console.error(m);
    },
    onFinish: async () => {
      console.log("onFinish");
    }
  })));
  Lt(() => {
    _(o).status !== "submitted" && _(o).status !== "streaming" && setTimeout(() => n == null ? void 0 : n.focus(), 200);
  }), Lt(() => {
    r() && (console.log("conversationId changed, updating chat instance:", r()), R(
      o,
      new jr({
        id: r(),
        api: `https://ai.valis.jala.university/api/v1/chat/completions/conversations/${r()}`,
        sendExtraMessageFields: !0,
        body: { stream: !0 },
        credentials: s() ? "include" : "same-origin",
        onError: (m) => {
          console.error(m);
        },
        onFinish: async () => {
          console.log("onFinish");
        }
      }),
      !0
    ));
  });
  var i = _i(), l = te(i), u = te(l);
  Ar(u, 21, () => _(o).messages, Sr, (m, E) => {
    var S = vi(), I = te(S), g = te(I, !0);
    W(I);
    var y = Nt(I, 2);
    Ar(y, 21, () => _(E).parts, Sr, (N, x) => {
      var ue = qn(), Vs = En(ue);
      {
        var Js = (St) => {
          var At = pi(), Us = te(At, !0);
          W(At), Rt(() => Tr(Us, _(x).text)), be(St, At);
        };
        $r(Vs, (St) => {
          _(x).type === "text" && St(Js);
        });
      }
      be(N, ue);
    }), W(y), W(S), Rt(() => {
      sa(S, 1, `message-item ${_(E).role ?? ""}`, "svelte-1f52vz9"), Tr(g, _(E).role);
    }), be(m, S);
  }), W(u), W(l);
  var c = Nt(l, 2), f = te(c), d = te(f);
  Ln(d), aa(d, (m) => n = m, () => n), W(f);
  var h = Nt(f, 2), v = te(h), b = te(v);
  {
    var $ = (m) => {
      var E = gi();
      be(m, E);
    }, w = (m) => {
      var E = Yn("Send");
      be(m, E);
    };
    $r(b, (m) => {
      _(o).status === "submitted" || _(o).status === "streaming" ? m($) : m(w, !1);
    });
  }
  return W(v), W(h), W(c), W(i), Rt(() => v.disabled = _(o).status === "submitted" || _(o).status === "streaming"), Jn("submit", c, function(...m) {
    var E;
    (E = _(o).handleSubmit) == null || E.apply(this, m);
  }), na(d, () => _(o).input, (m) => _(o).input = m), be(e, i), Xr({
    get conversationId() {
      return r();
    },
    set conversationId(m) {
      r(m), zt();
    },
    get useCredentials() {
      return s();
    },
    set useCredentials(m = !1) {
      s(m), zt();
    }
  });
}
customElements.define("valis-conversation", ua(bi, { conversationId: {}, useCredentials: {} }, [], [], !0));
export {
  bi as default
};
