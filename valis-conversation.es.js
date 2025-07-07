var qn = Object.defineProperty;
var Hn = Object.getPrototypeOf;
var Kn = Reflect.get;
var pr = (e) => {
  throw TypeError(e);
};
var Wn = (e, t, r) => t in e ? qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var j = (e, t, r) => Wn(e, typeof t != "symbol" ? t + "" : t, r), Ct = (e, t, r) => t.has(e) || pr("Cannot " + r);
var p = (e, t, r) => (Ct(e, t, "read from private field"), r ? r.call(e) : t.get(e)), D = (e, t, r) => t.has(e) ? pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), fe = (e, t, r, n) => (Ct(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), at = (e, t, r) => (Ct(e, t, "access private method"), r);
var vr = (e, t, r) => Kn(Hn(e), r, t);
const Gn = "5";
var zr;
typeof window < "u" && ((zr = window.__svelte ?? (window.__svelte = {})).v ?? (zr.v = /* @__PURE__ */ new Set())).add(Gn);
const Xn = 1, Zn = 2, Qn = 16, es = 2, qt = "[", Ht = "[!", Kt = "]", Ne = {}, B = Symbol(), gr = !1;
var yt = Array.isArray, ts = Array.prototype.indexOf, Wt = Array.from, ft = Object.keys, ct = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, Br = Object.prototype, rs = Array.prototype, Vr = Object.getPrototypeOf, _r = Object.isExtensible;
function Jr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const H = 2, Ur = 4, wt = 8, Gt = 16, le = 32, $e = 64, Xt = 128, J = 256, dt = 512, K = 1024, ie = 2048, Se = 4096, ae = 8192, Zt = 16384, Yr = 32768, Qt = 65536, mr = 1 << 18, ns = 1 << 19, qr = 1 << 20, Pt = 1 << 21, it = Symbol("$state"), ss = Symbol("legacy props"), er = 3, Be = 8;
function Hr(e) {
  return e === this.v;
}
function as(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Kr(e) {
  return !as(e, this.v);
}
function is(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function os() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ls(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function us() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fs() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function hs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ps = !1;
const vs = [];
function br(e, t = !1) {
  return ot(e, /* @__PURE__ */ new Map(), "", vs);
}
function ot(e, t, r, n, s = null) {
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
      t.set(e, o), s !== null && t.set(s, o);
      for (var i = 0; i < e.length; i += 1) {
        var l = e[i];
        i in e && (o[i] = ot(l, t, r, n));
      }
      return o;
    }
    if (Vr(e) === Br) {
      o = {}, t.set(e, o), s !== null && t.set(s, o);
      for (var u in e)
        o[u] = ot(e[u], t, r, n);
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
        n,
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
function gs(e) {
  return (
    /** @type {T} */
    tr().get(e)
  );
}
function _s(e, t) {
  return tr().set(e, t), t;
}
function ms(e) {
  return tr().has(e);
}
function Gr(e, t = !1, r) {
  var n = M = {
    p: M,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  un(() => {
    n.d = !0;
  });
}
function Xr(e) {
  const t = M;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = A, n = T;
      t.e = null;
      try {
        for (var s = 0; s < o.length; s++) {
          var a = o[s];
          ge(a.effect), Q(a.reaction), sr(a.fn);
        }
      } finally {
        ge(r), Q(n);
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
  return M === null && Wr(), M.c ?? (M.c = new Map(bs(M) || void 0));
}
function bs(e) {
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
  if (t !== Br && t !== rs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = yt(e), s = /* @__PURE__ */ L(0), a = T, o = (i) => {
    var l = T;
    Q(a);
    var u = i();
    return Q(l), u;
  };
  return n && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(i, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && cs();
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
            r.set(l, d), kt(s);
          }
        } else {
          if (n && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              r.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && R(c, f);
          }
          R(u, B), kt(s);
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
        if (n && l === "length")
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
          if (n && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(l);
            Number.isInteger(m) && m >= y.v && R(y, m + 1);
          }
          kt(s);
        }
        return !0;
      },
      ownKeys(i) {
        _(s);
        var l = Reflect.ownKeys(i).filter((f) => {
          var d = r.get(f);
          return d === void 0 || d.v !== B;
        });
        for (var [u, c] of r)
          c.v !== B && !(u in i) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ds();
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
  return _n(t), t;
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
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
function ws(e) {
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
function en(e) {
  var t, r = A;
  ge(ws(e));
  try {
    Qr(e), t = wn(e);
  } finally {
    ge(r);
  }
  return t;
}
function tn(e) {
  var t = en(e);
  if (e.equals(t) || (e.v = t, e.wv = bn()), !Me) {
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
  return _n(r), r;
}
// @__NO_SIDE_EFFECTS__
function rr(e, t = !1, r = !0) {
  const n = he(e);
  return t || (n.equals = Kr), n;
}
function R(e, t, r = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Z || (T.f & mr) !== 0) && Zr() && (T.f & (H | Gt | mr)) !== 0 && !(F != null && F[1].includes(e) && F[0] === T) && hs();
  let n = r ? ye(t) : t;
  return rn(e, n);
}
function rn(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Me ? Ve.set(e, t) : Ve.set(e, r), e.v = t, (e.f & H) !== 0 && ((e.f & ie) !== 0 && en(
      /** @type {Derived} */
      e
    ), ee(e, (e.f & J) === 0 ? K : Se)), e.wv = bn(), nn(e, ie), A !== null && (A.f & K) !== 0 && (A.f & (le | $e)) === 0 && (U === null ? Rs([e]) : U.push(e));
  }
  return t;
}
function nn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var a = r[s], o = a.f;
      (o & ie) === 0 && (ee(a, t), (o & (K | J)) !== 0 && ((o & H) !== 0 ? nn(
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
function se(e) {
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
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(t)
    );
    t.remove(), t = n;
  }
}
function sn(e) {
  if (!e || e.nodeType !== Be)
    throw It(), Ne;
  return (
    /** @type {Comment} */
    e.data
  );
}
var wr, an, on, ln;
function Ft() {
  if (wr === void 0) {
    wr = window, an = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    on = Re(t, "firstChild").get, ln = Re(t, "nextSibling").get, _r(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _r(r) && (r.__t = void 0);
  }
}
function ve(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return on.call(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return ln.call(e);
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
    var n = ve();
    return r == null || r.before(n), q(n), n;
  }
  return q(r), r;
}
function Es(e, t) {
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
  let n = C ? k : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ _e(n);
  if (!C)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== er) {
    var a = ve();
    return n === null ? s == null || s.after(a) : n.before(a), q(a), a;
  }
  return q(n), /** @type {TemplateNode} */
  n;
}
function nr(e) {
  e.textContent = "";
}
function Is(e) {
  A === null && T === null && ls(), T !== null && (T.f & J) !== 0 && A === null && os(), Me && is();
}
function xs(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ae(e, t, r, n = !0) {
  var s = A, a = {
    ctx: M,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ie,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
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
  if (!o && n && (s !== null && xs(a, s), T !== null && (T.f & H) !== 0)) {
    var i = (
      /** @type {Derived} */
      T
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return a;
}
function un(e) {
  const t = Ae(wt, null, !1);
  return ee(t, K), t.teardown = e, t;
}
function Lt(e) {
  Is();
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
    var n = sr(e);
    return n;
  }
}
function Ts(e) {
  const t = Ae($e, e, !0);
  return () => {
    oe(t);
  };
}
function $s(e) {
  const t = Ae($e, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? ht(t, () => {
      oe(t), n(void 0);
    }) : (oe(t), n(void 0));
  });
}
function sr(e) {
  return Ae(Ur, e, !1);
}
function ar(e) {
  return Ae(wt, e, !0);
}
function Rt(e, t = [], r = Et) {
  const n = t.map(r);
  return ir(() => e(...n.map(_)));
}
function ir(e, t = 0) {
  return Ae(wt | Gt | t, e, !0);
}
function Je(e, t = !0) {
  return Ae(wt | le, e, !0, t);
}
function fn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Me, n = T;
    Er(!0), Q(null);
    try {
      t.call(null);
    } finally {
      Er(r), Q(n);
    }
  }
}
function cn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    (r.f & $e) !== 0 ? r.parent = null : oe(r, t), r = n;
  }
}
function Ss(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & le) === 0 && oe(t), t = r;
  }
}
function oe(e, t = !0) {
  var r = !1;
  (t || (e.f & ns) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (As(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), cn(e, t && !r), gt(e, 0), ee(e, Zt);
  var n = e.transitions;
  if (n !== null)
    for (const a of n)
      a.stop();
  fn(e);
  var s = e.parent;
  s !== null && s.first !== null && dn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function As(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(e)
    );
    e.remove(), e = r;
  }
}
function dn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ht(e, t) {
  var r = [];
  or(e, r, !0), hn(r, () => {
    oe(e), t && t();
  });
}
function hn(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var s of e)
      s.out(n);
  } else
    t();
}
function or(e, t, r) {
  if ((e.f & ae) === 0) {
    if (e.f ^= ae, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var s = n.next, a = (n.f & Qt) !== 0 || (n.f & le) !== 0;
      or(n, t, a ? r : !1), n = s;
    }
  }
}
function pt(e) {
  pn(e, !0);
}
function pn(e, t) {
  if ((e.f & ae) !== 0) {
    e.f ^= ae;
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Qt) !== 0 || (r.f & le) !== 0;
      pn(r, s ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Ue = [], jt = [];
function vn() {
  var e = Ue;
  Ue = [], Jr(e);
}
function Cs() {
  var e = jt;
  jt = [], Jr(e);
}
function lr(e) {
  Ue.length === 0 && queueMicrotask(vn), Ue.push(e);
}
function ks() {
  Ue.length > 0 && vn(), jt.length > 0 && Cs();
}
function Ns(e) {
  var t = (
    /** @type {Effect} */
    A
  );
  if ((t.f & Yr) === 0) {
    if ((t.f & Xt) === 0)
      throw e;
    t.fn(e);
  } else
    gn(e, t);
}
function gn(e, t) {
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
function _n(e) {
  T !== null && T.f & Pt && (F === null ? F = [T, [e]] : F[1].push(e));
}
let z = null, V = 0, U = null;
function Rs(e) {
  U = e;
}
let mn = 1, vt = 0, pe = !1;
function bn() {
  return ++mn;
}
function Tt(e) {
  var f;
  var t = e.f;
  if ((t & ie) !== 0)
    return !0;
  if ((t & Se) !== 0) {
    var r = e.deps, n = (t & J) !== 0;
    if (r !== null) {
      var s, a, o = (t & dt) !== 0, i = n && A !== null && !pe, l = r.length;
      if (o || i) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (s = 0; s < l; s++)
          a = r[s], (o || !((f = a == null ? void 0 : a.reactions) != null && f.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= dt), i && c !== null && (c.f & J) === 0 && (u.f ^= J);
      }
      for (s = 0; s < l; s++)
        if (a = r[s], Tt(
          /** @type {Derived} */
          a
        ) && tn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || A !== null && !pe) && ee(e, K);
  }
  return !1;
}
function yn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var a = n[s];
      F != null && F[1].includes(e) && F[0] === T || ((a.f & H) !== 0 ? yn(
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
function wn(e) {
  var h;
  var t = z, r = V, n = U, s = T, a = pe, o = F, i = M, l = Z, u = e.f;
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
        yn(
          U[d],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (vt++, U !== null && (n === null ? n = U : n.push(.../** @type {Source[]} */
    U))), c;
  } catch (v) {
    Ns(v);
  } finally {
    z = t, V = r, U = n, T = s, pe = a, F = o, yr(i), Z = l, e.f ^= Pt;
  }
}
function Ds(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ts.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
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
    for (var n = t; n < r.length; n++)
      Ds(e, r[n]);
}
function ur(e) {
  var t = e.f;
  if ((t & Zt) === 0) {
    ee(e, K);
    var r = A, n = Ie;
    A = e, Ie = !0;
    try {
      (t & Gt) !== 0 ? Ss(e) : cn(e), fn(e);
      var s = wn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = mn;
      var a;
      gr && ps && (e.f & ie) !== 0 && e.deps;
    } finally {
      Ie = n, A = r;
    }
  }
}
function Os() {
  try {
    us();
  } catch (e) {
    if (qe !== null)
      gn(e, qe);
    else
      throw e;
  }
}
function En() {
  var e = Ie;
  try {
    var t = 0;
    for (Ie = !0; ze.length > 0; ) {
      t++ > 1e3 && Os();
      var r = ze, n = r.length;
      ze = [];
      for (var s = 0; s < n; s++) {
        var a = Ms(r[s]);
        Ps(a);
      }
      Ve.clear();
    }
  } finally {
    Ye = !1, Ie = e, qe = null;
  }
}
function Ps(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      (n.f & (Zt | ae)) === 0 && Tt(n) && (ur(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? dn(n) : n.fn = null));
    }
}
function fr(e) {
  Ye || (Ye = !0, queueMicrotask(En));
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
function Ms(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, s = (n & (le | $e)) !== 0, a = s && (n & K) !== 0;
    if (!a && (n & ae) === 0) {
      (n & Ur) !== 0 ? t.push(r) : s ? r.f ^= K : Tt(r) && ur(r);
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
    if (ks(), ze.length === 0)
      return Ye = !1, qe = null, /** @type {T} */
      t;
    Ye = !0, En();
  }
}
function _(e) {
  var t = e.f, r = (t & H) !== 0;
  if (T !== null && !Z) {
    if (!(F != null && F[1].includes(e)) || F[0] !== T) {
      var n = T.deps;
      e.rv < vt && (e.rv = vt, z === null && n !== null && n[V] === e ? V++ : z === null ? z = [e] : (!pe || !z.includes(e)) && z.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && (a.f & J) === 0 && (s.f ^= J);
  }
  return r && (s = /** @type {Derived} */
  e, Tt(s) && tn(s)), Me && Ve.has(e) ? Ve.get(e) : e.v;
}
function Fe(e) {
  var t = Z;
  try {
    return Z = !0, e();
  } finally {
    Z = t;
  }
}
const Fs = -7169;
function ee(e, t) {
  e.f = e.f & Fs | t;
}
function Ls(e) {
  C && /* @__PURE__ */ xe(e) !== null && nr(e);
}
let Ir = !1;
function js() {
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
function In(e) {
  var t = T, r = A;
  Q(null), ge(null);
  try {
    return e();
  } finally {
    Q(t), ge(r);
  }
}
function zs(e, t, r, n = r) {
  e.addEventListener(t, () => In(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), js();
}
const Bs = /* @__PURE__ */ new Set(), xr = /* @__PURE__ */ new Set();
function Vs(e, t, r, n = {}) {
  function s(a) {
    if (n.capture || je.call(t, a), !a.cancelBubble)
      return In(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? lr(() => {
    t.addEventListener(e, s, n);
  }) : t.addEventListener(e, s, n), s;
}
function Js(e, t, r, n, s) {
  var a = { capture: n, passive: s }, o = Vs(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && un(() => {
    t.removeEventListener(e, o, a);
  });
}
function je(e) {
  var m;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  ), o = 0, i = e.__root;
  if (i) {
    var l = s.indexOf(i);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    l <= u && (o = l);
  }
  if (a = /** @type {Element} */
  s[o] || e.target, a !== t) {
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
          var b = a["__" + n];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (yt(b)) {
              var [$, ...y] = b;
              $.apply(a, [e, ...y]);
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
function Us(e) {
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
  var r = (t & es) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    if (C)
      return Te(k, null), k;
    n === void 0 && (n = Us(s ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ xe(n));
    var a = (
      /** @type {TemplateNode} */
      r || an ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Te(a, a), a;
  };
}
function Ys(e = "") {
  if (!C) {
    var t = ve(e + "");
    return Te(t, t), t;
  }
  var r = k;
  return r.nodeType !== er && (r.before(r = ve()), q(r)), Te(r, r), r;
}
function qs() {
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
const Hs = ["touchstart", "touchmove"];
function Ks(e) {
  return Hs.includes(e);
}
function Tr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function xn(e, t) {
  return Tn(e, t);
}
function Ws(e, t) {
  Ft(), t.intro = t.intro ?? !1;
  const r = t.target, n = C, s = k;
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
    se(!0), q(
      /** @type {Comment} */
      a
    ), xt();
    const o = Tn(e, { ...t, anchor: a });
    if (k === null || k.nodeType !== Be || /** @type {Comment} */
    k.data !== Kt)
      throw It(), Ne;
    return se(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Ne)
      return t.recover === !1 && fs(), Ft(), nr(r), se(!1), xn(e, t);
    throw o;
  } finally {
    se(n), q(s);
  }
}
const ke = /* @__PURE__ */ new Map();
function Tn(e, { target: t, anchor: r, props: n = {}, events: s, context: a, intro: o = !0 }) {
  Ft();
  var i = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var h = f[d];
      if (!i.has(h)) {
        i.add(h);
        var v = Ks(h);
        t.addEventListener(h, je, { passive: v });
        var b = ke.get(h);
        b === void 0 ? (document.addEventListener(h, je, { passive: v }), ke.set(h, 1)) : ke.set(h, b + 1);
      }
    }
  };
  l(Wt(Bs)), xr.add(l);
  var u = void 0, c = $s(() => {
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
      s && (n.$$events = s), C && Te(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, n) || {}, C && (A.nodes_end = k), a && Xr();
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
function Gs(e, t) {
  const r = Bt.get(e);
  return r ? (Bt.delete(e), r(t)) : Promise.resolve();
}
function Xs(e) {
  M === null && Wr(), Lt(() => {
    const t = Fe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $r(e, t, [r, n] = [0, 0]) {
  C && r === 0 && xt();
  var s = e, a = null, o = null, i = B, l = r > 0 ? Qt : 0, u = !1;
  const c = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (i === (i = d)) return;
    let v = !1;
    if (C && n !== -1) {
      if (r === 0) {
        const $ = sn(s);
        $ === qt ? n = 0 : $ === Ht ? n = 1 / 0 : (n = parseInt($.substring(1)), n !== n && (n = i ? 1 / 0 : -1));
      }
      const b = n > r;
      !!i === b && (s = Mt(), q(s), se(!1), v = !0, n = -1);
    }
    i ? (a ? pt(a) : h && (a = Je(() => h(s))), o && ht(o, () => {
      o = null;
    })) : (o ? pt(o) : h && (o = Je(() => h(s, [r + 1, n]))), a && ht(a, () => {
      a = null;
    })), v && se(!0);
  };
  ir(() => {
    u = !1, t(c), u || f(null, null);
  }, l), C && (s = k);
}
function Sr(e, t) {
  return t;
}
function Zs(e, t, r, n) {
  for (var s = [], a = t.length, o = 0; o < a; o++)
    or(t[o].e, s, !0);
  var i = a > 0 && s.length === 0 && r !== null;
  if (i) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    nr(l), l.append(
      /** @type {Element} */
      r
    ), n.clear(), ce(e, t[0].prev, t[a - 1].next);
  }
  hn(s, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      i || (n.delete(c.k), ce(e, c.prev, c.next)), oe(c.e, !i);
    }
  });
}
function Ar(e, t, r, n, s, a = null) {
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
  var u = null, c = !1, f = /* @__PURE__ */ ys(() => {
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
      var b = sn(o) === Ht;
      b !== (h === 0) && (o = Mt(), q(o), se(!1), v = !0);
    }
    if (C) {
      for (var $ = null, y, m = 0; m < h; m++) {
        if (k.nodeType === Be && /** @type {Comment} */
        k.data === Kt) {
          o = /** @type {Comment} */
          k, v = !0, se(!1);
          break;
        }
        var E = d[m], S = n(E, m);
        y = $n(
          k,
          i,
          $,
          null,
          E,
          S,
          m,
          s,
          t,
          r
        ), i.items.set(S, y), $ = y;
      }
      h > 0 && q(Mt());
    }
    C || Qs(d, i, o, s, t, n, r), a !== null && (h === 0 ? u ? pt(u) : u = Je(() => a(o)) : u !== null && ht(u, () => {
      u = null;
    })), v && se(!0), _(f);
  }), C && (o = k);
}
function Qs(e, t, r, n, s, a, o) {
  var i = e.length, l = t.items, u = t.first, c = u, f, d = null, h = [], v = [], b, $, y, m;
  for (m = 0; m < i; m += 1) {
    if (b = e[m], $ = a(b, m), y = l.get($), y === void 0) {
      var E = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : r;
      d = $n(
        E,
        t,
        d,
        d === null ? t.first : d.next,
        b,
        $,
        m,
        n,
        s,
        o
      ), l.set($, d), h = [], v = [], c = d.next;
      continue;
    }
    if (ea(y, b, m), (y.e.f & ae) !== 0 && pt(y.e), y !== c) {
      if (f !== void 0 && f.has(y)) {
        if (h.length < v.length) {
          var S = v[0], I;
          d = S.prev;
          var g = h[0], w = h[h.length - 1];
          for (I = 0; I < h.length; I += 1)
            Cr(h[I], S, r);
          for (I = 0; I < v.length; I += 1)
            f.delete(v[I]);
          ce(t, g.prev, w.next), ce(t, d, g), ce(t, w, S), c = S, d = w, m -= 1, h = [], v = [];
        } else
          f.delete(y), Cr(y, c, r), ce(t, y.prev, y.next), ce(t, y, d === null ? t.first : d.next), ce(t, d, y), d = y;
        continue;
      }
      for (h = [], v = []; c !== null && c.k !== $; )
        (c.e.f & ae) === 0 && (f ?? (f = /* @__PURE__ */ new Set())).add(c), v.push(c), c = c.next;
      if (c === null)
        continue;
      y = c;
    }
    h.push(y), d = y, c = y.next;
  }
  if (c !== null || f !== void 0) {
    for (var N = f === void 0 ? [] : Wt(f); c !== null; )
      (c.e.f & ae) === 0 && N.push(c), c = c.next;
    var x = N.length;
    if (x > 0) {
      var ue = i === 0 ? r : null;
      Zs(t, N, ue, l);
    }
  }
  A.first = t.first && t.first.e, A.last = d && d.e;
}
function ea(e, t, r, n) {
  rn(e.v, t), e.i = r;
}
function $n(e, t, r, n, s, a, o, i, l, u) {
  var c = (l & Xn) !== 0, f = (l & Qn) === 0, d = c ? f ? /* @__PURE__ */ rr(s, !1, !1) : he(s) : s, h = (l & Zn) === 0 ? o : he(o), v = {
    i: h,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return v.e = Je(() => i(e, d, h, u), C), v.e.prev = r && r.e, v.e.next = n && n.e, r === null ? t.first = v : (r.next = v, r.e.next = v.e), n !== null && (n.prev = v, n.e.prev = v.e), v;
  } finally {
  }
}
function Cr(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, s = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== n; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(a)
    );
    s.before(a), a = o;
  }
}
function ce(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function ta(e, t) {
  lr(() => {
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
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function ra(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n = n ? n + " " + t : t, n === "" ? null : n;
}
function na(e, t, r, n, s, a) {
  var o = e.__className;
  if (C || o !== r || o === void 0) {
    var i = ra(r, n);
    (!C || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : e.className = i), e.__className = r;
  }
  return a;
}
function sa(e, t, r = t) {
  zs(e, "input", (n) => {
    var s = n ? e.defaultValue : e.value;
    if (s = Dt(e) ? Ot(s) : s, r(s), s !== (s = t())) {
      var a = e.selectionStart, o = e.selectionEnd;
      e.value = s ?? "", o !== null && (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (C && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Fe(t) == null && e.value) && r(Dt(e) ? Ot(e.value) : e.value), ar(() => {
    var n = t();
    Dt(e) && n === Ot(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
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
function aa(e = {}, t, r, n) {
  return sr(() => {
    var s, a;
    return ar(() => {
      s = a, a = [], Fe(() => {
        e !== r(...a) && (t(e, ...a), s && kr(r(...s), e) && t(null, ...s));
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
function Rr(e, t, r, n) {
  var s;
  s = /** @type {V} */
  e[t];
  var a = (
    /** @type {V} */
    n
  ), o = !0, i = !1, l = () => (i = !0, o && (o = !1, a = /** @type {V} */
  n), a);
  s === void 0 && n !== void 0 && (s = l());
  var u;
  u = () => {
    var h = (
      /** @type {V} */
      e[t]
    );
    return h === void 0 ? l() : (o = !0, i = !1, h);
  };
  var c = !1, f = /* @__PURE__ */ rr(s), d = /* @__PURE__ */ Et(() => {
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
    var r = /* @__PURE__ */ new Map(), n = (o, i) => {
      var l = /* @__PURE__ */ rr(i, !1, !1);
      return r.set(o, l), l;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, i) {
          return _(r.get(i) ?? n(i, Reflect.get(o, i)));
        },
        has(o, i) {
          return i === ss ? !0 : (_(r.get(i) ?? n(i, Reflect.get(o, i))), Reflect.has(o, i));
        },
        set(o, i, l) {
          return R(r.get(i) ?? n(i, l), l), Reflect.set(o, i, l);
        }
      }
    );
    fe(this, Y, (t.hydrate ? Ws : xn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && zt(), fe(this, re, s.$$events);
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
      Object.assign(s, o);
    }, p(this, Y).$destroy = () => {
      Gs(p(this, Y));
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
    const n = (...s) => r.call(this, ...s);
    return p(this, re)[t].push(n), () => {
      p(this, re)[t] = p(this, re)[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    p(this, Y).$destroy();
  }
}
re = new WeakMap(), Y = new WeakMap();
let Sn;
typeof HTMLElement == "function" && (Sn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
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
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const s = this.$$c.$on(t, r);
      this.$$l_u.set(r, s);
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
      const s = this.$$l_u.get(r);
      s && (s(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return (a) => {
          const o = document.createElement("slot");
          s !== "default" && (o.name = s), be(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = la(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), r.default = !0) : r[s] = t(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = lt(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = ia({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Ts(() => {
        ar(() => {
          var s;
          this.$$r = !0;
          for (const a of ft(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
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
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const o = this.$$c.$on(s, a);
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
  attributeChangedCallback(t, r, n) {
    var s;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = lt(t, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
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
function lt(e, t, r, n) {
  var a;
  const s = (a = r[e]) == null ? void 0 : a.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (s) {
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
    switch (s) {
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
function ua(e, t, r, n, s, a) {
  let o = class extends Sn {
    constructor() {
      super(e, r, s), this.$$p_d = t;
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
  }), n.forEach((i) => {
    ct(o.prototype, i, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[i];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
var An = "vercel.ai.error", fa = Symbol.for(An), Cn, ca = class kn extends Error {
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
    cause: n
  }) {
    super(r), this[Cn] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return kn.hasMarker(t, An);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
Cn = fa;
var Pe = ca;
function Nn(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Rn = "AI_InvalidArgumentError", Dn = `vercel.ai.error.${Rn}`, da = Symbol.for(Dn), On, ha = class extends Pe {
  constructor({
    message: e,
    cause: t,
    argument: r
  }) {
    super({ name: Rn, message: e, cause: t }), this[On] = !0, this.argument = r;
  }
  static isInstance(e) {
    return Pe.hasMarker(e, Dn);
  }
};
On = da;
var Pn = "AI_JSONParseError", Mn = `vercel.ai.error.${Pn}`, pa = Symbol.for(Mn), Fn, Dr = class extends Pe {
  constructor({ text: e, cause: t }) {
    super({
      name: Pn,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Nn(t)}`,
      cause: t
    }), this[Fn] = !0, this.text = e;
  }
  static isInstance(e) {
    return Pe.hasMarker(e, Mn);
  }
};
Fn = pa;
var Ln = "AI_TypeValidationError", jn = `vercel.ai.error.${Ln}`, va = Symbol.for(jn), zn, ga = class Vt extends Pe {
  constructor({ value: t, cause: r }) {
    super({
      name: Ln,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Nn(r)}`,
      cause: r
    }), this[zn] = !0, this.value = t;
  }
  static isInstance(t) {
    return Pe.hasMarker(t, jn);
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
zn = va;
var Or = ga;
let _a = (e, t = 21) => (r = t) => {
  let n = "", s = r | 0;
  for (; s--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function ma(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var me = { exports: {} }, Pr;
function ba() {
  if (Pr) return me.exports;
  Pr = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, r = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function n(i, l, u) {
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
    return s(c, { protoAction: f, constructorAction: d, safe: u && u.safe });
  }
  function s(i, { protoAction: l = "error", constructorAction: u = "error", safe: c } = {}) {
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
      return n(i, l, u);
    } finally {
      Error.stackTraceLimit = c;
    }
  }
  function o(i, l) {
    const u = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return n(i, l, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = u;
    }
  }
  return me.exports = a, me.exports.default = a, me.exports.parse = a, me.exports.safeParse = o, me.exports.scan = s, me.exports;
}
var ya = ba();
const wa = /* @__PURE__ */ ma(ya);
var Ea = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const s = _a(r, t);
  if (e == null)
    return s;
  if (r.includes(n))
    throw new ha({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (a) => `${e}${n}${s(a)}`;
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
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: Or.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: Or.wrap({ value: e, cause: n })
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
    const n = Aa({ value: r, schema: t });
    return n.success ? { ...n, rawValue: r } : n;
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
  let r = -1, n = null;
  function s(l, u, c) {
    switch (l) {
      case '"': {
        r = u, t.pop(), t.push(c), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        r = u, n = u, t.pop(), t.push(c), t.push("INSIDE_LITERAL");
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
        s(u, l, "FINISH");
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
        s(u, l, "INSIDE_OBJECT_AFTER_VALUE");
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
            r = l, s(u, l, "INSIDE_ARRAY_AFTER_VALUE");
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
        s(u, l, "INSIDE_ARRAY_AFTER_VALUE");
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
        const f = e.substring(n, l + 1);
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
        const c = e.substring(n, e.length);
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
  const n = r, s = e.slice(t + 1), a = JSON.parse(s);
  return Wa[n].parse(a);
}, Za = 10;
function Qa(e, t) {
  const r = new Uint8Array(t);
  let n = 0;
  for (const s of e)
    r.set(s, n), n += s.length;
  return e.length = 0, r;
}
async function ei({
  stream: e,
  onTextPart: t,
  onReasoningPart: r,
  onReasoningSignaturePart: n,
  onRedactedReasoningPart: s,
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
  const y = e.getReader(), m = new TextDecoder(), E = [];
  let S = 0;
  for (; ; ) {
    const { value: I } = await y.read();
    if (I && (E.push(I), S += I.length, I[I.length - 1] !== Za))
      continue;
    if (E.length === 0)
      break;
    const g = Qa(E, S);
    S = 0;
    const w = m.decode(g, { stream: !0 }).split(`
`).filter((N) => N !== "").map(Xa);
    for (const { type: N, value: x } of w)
      switch (N) {
        case "text":
          await (t == null ? void 0 : t(x));
          break;
        case "reasoning":
          await (r == null ? void 0 : r(x));
          break;
        case "reasoning_signature":
          await (n == null ? void 0 : n(x));
          break;
        case "redacted_reasoning":
          await (s == null ? void 0 : s(x));
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
  onFinish: n,
  generateId: s = cr,
  getCurrentDate: a = () => /* @__PURE__ */ new Date(),
  lastMessage: o
}) {
  var i, l;
  const u = (o == null ? void 0 : o.role) === "assistant";
  let c = u ? 1 + // find max step in existing tool invocations:
  ((l = (i = o.toolInvocations) == null ? void 0 : i.reduce((g, w) => {
    var N;
    return Math.max(g, (N = w.step) != null ? N : 0);
  }, 0)) != null ? l : 0) : 0;
  const f = u ? structuredClone(o) : {
    id: s(),
    createdAt: a(),
    role: "assistant",
    content: "",
    parts: []
  };
  let d, h, v;
  function b(g, w) {
    const N = f.parts.find(
      (x) => x.type === "tool-invocation" && x.toolInvocation.toolCallId === g
    );
    N != null ? N.toolInvocation = w : f.parts.push({
      type: "tool-invocation",
      toolInvocation: w
    });
  }
  const $ = [];
  let y = u ? o == null ? void 0 : o.annotations : void 0;
  const m = {};
  let E = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, S = "unknown";
  function I() {
    const g = [...$];
    y != null && y.length && (f.annotations = y);
    const w = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(f),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: s()
    };
    t({
      message: w,
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
      var w;
      v == null ? (v = { type: "text", text: g }, h != null && h.details.push(v)) : v.text += g, h == null ? (h = {
        type: "reasoning",
        reasoning: g,
        details: [v]
      }, f.parts.push(h)) : h.reasoning += g, f.reasoning = ((w = f.reasoning) != null ? w : "") + g, I();
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
      const w = {
        state: "partial-call",
        step: c,
        toolCallId: g.toolCallId,
        toolName: g.toolName,
        args: void 0
      };
      f.toolInvocations.push(w), b(g.toolCallId, w), I();
    },
    onToolCallDeltaPart(g) {
      const w = m[g.toolCallId];
      w.text += g.argsTextDelta;
      const { value: N } = Ra(w.text), x = {
        state: "partial-call",
        step: w.step,
        toolCallId: g.toolCallId,
        toolName: w.toolName,
        args: N
      };
      f.toolInvocations[w.index] = x, b(g.toolCallId, x), I();
    },
    async onToolCallPart(g) {
      const w = {
        state: "call",
        step: c,
        ...g
      };
      if (m[g.toolCallId] != null ? f.toolInvocations[m[g.toolCallId].index] = w : (f.toolInvocations == null && (f.toolInvocations = []), f.toolInvocations.push(w)), b(g.toolCallId, w), I(), r) {
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
      const w = f.toolInvocations;
      if (w == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const N = w.findIndex(
        (ue) => ue.toolCallId === g.toolCallId
      );
      if (N === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const x = {
        ...w[N],
        state: "result",
        ...g
      };
      w[N] = x, b(g.toolCallId, x), I();
    },
    onDataPart(g) {
      $.push(...g), I();
    },
    onMessageAnnotationsPart(g) {
      y == null ? y = [...g] : y.push(...g), I();
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
  }), n == null || n({ message: f, finishReason: S, usage: E });
}
async function ri({
  stream: e,
  onTextPart: t
}) {
  const r = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: n, value: s } = await r.read();
    if (n)
      break;
    await t(s);
  }
}
async function ni({
  stream: e,
  update: t,
  onFinish: r,
  getCurrentDate: n = () => /* @__PURE__ */ new Date(),
  generateId: s = cr
}) {
  const a = { type: "text", text: "" }, o = {
    id: s(),
    createdAt: n(),
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
var si = () => fetch;
async function ai({
  api: e,
  body: t,
  streamProtocol: r = "data",
  credentials: n,
  headers: s,
  abortController: a,
  restoreMessagesOnFailure: o,
  onResponse: i,
  onUpdate: l,
  onFinish: u,
  onToolCall: c,
  generateId: f,
  fetch: d = si(),
  lastMessage: h,
  requestType: v = "generate"
}) {
  var b, $, y;
  const E = await (v === "resume" ? d(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...s
    },
    signal: (b = a == null ? void 0 : a()) == null ? void 0 : b.signal,
    credentials: n
  }) : d(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...s
    },
    signal: ($ = a == null ? void 0 : a()) == null ? void 0 : $.signal,
    credentials: n
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
      (y = await E.text()) != null ? y : "Failed to fetch the chat response."
    );
  if (!E.body)
    throw new Error("The response body is empty.");
  switch (r) {
    case "text": {
      await ni({
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
    var n;
    return Math.max(t, (n = r.step) != null ? n : 0);
  }, 0);
}
function Bn(e) {
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
    parts: Bn(t)
  }));
}
async function Lr(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: r, type: n } = t, s = await new Promise((a, o) => {
          const i = new FileReader();
          i.onload = (l) => {
            var u;
            a((u = l.target) == null ? void 0 : u.result);
          }, i.onerror = (l) => o(l), i.readAsDataURL(t);
        });
        return {
          name: r,
          contentType: n,
          url: s
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
  messages: n
}) {
  var s;
  const a = n[n.length - 1];
  return (
    // check if the feature is enabled:
    r > 1 && // ensure there is a last message:
    a != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (n.length > t || Ut(a.toolInvocations) !== e) && // check that next step is possible:
    Vn(a) && // limit the number of automatic steps:
    ((s = Ut(a.toolInvocations)) != null ? s : 0) < r
  );
}
function Vn(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((n, s, a) => s.type === "step-start" ? a : n, -1), r = e.parts.slice(t + 1).filter((n) => n.type === "tool-invocation");
  return r.length > 0 && r.every((n) => "result" in n.toolInvocation);
}
function oi({
  messages: e,
  toolCallId: t,
  toolResult: r
}) {
  var n;
  const s = e[e.length - 1], a = s.parts.find(
    (i) => i.type === "tool-invocation" && i.toolInvocation.toolCallId === t
  );
  if (a == null)
    return;
  const o = {
    ...a.toolInvocation,
    state: "result",
    result: r
  };
  a.toolInvocation = o, s.toolInvocations = (n = s.toolInvocations) == null ? void 0 : n.map(
    (i) => i.toolCallId === t ? o : i
  );
}
function Le(e) {
  R(e, e.v + 1);
}
var G, X, ne, De, ut;
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
    D(this, ne, /* @__PURE__ */ L(0));
    if (r) {
      for (var [n, s] of r)
        super.set(n, s);
      p(this, ne).v = super.size;
    }
  }
  /** @param {K} key */
  has(r) {
    var n = p(this, G), s = n.get(r);
    if (s === void 0) {
      var a = super.get(r);
      if (a !== void 0)
        s = he(0), n.set(r, s);
      else
        return _(p(this, X)), !1;
    }
    return _(s), !0;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(r, n) {
    at(this, De, ut).call(this), super.forEach(r, n);
  }
  /** @param {K} key */
  get(r) {
    var n = p(this, G), s = n.get(r);
    if (s === void 0) {
      var a = super.get(r);
      if (a !== void 0)
        s = he(0), n.set(r, s);
      else {
        _(p(this, X));
        return;
      }
    }
    return _(s), super.get(r);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(r, n) {
    var f;
    var s = p(this, G), a = s.get(r), o = super.get(r), i = super.set(r, n), l = p(this, X);
    if (a === void 0)
      a = he(0), s.set(r, a), R(p(this, ne), super.size), Le(l);
    else if (o !== n) {
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
    var n = p(this, G), s = n.get(r), a = super.delete(r);
    return s !== void 0 && (n.delete(r), R(p(this, ne), super.size), R(s, -1), Le(p(this, X))), a;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var r = p(this, G);
      R(p(this, ne), 0);
      for (var n of r.values())
        R(n, -1);
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
    return _(p(this, ne)), super.size;
  }
};
G = new WeakMap(), X = new WeakMap(), ne = new WeakMap(), De = new WeakSet(), ut = function() {
  _(p(this, X));
  var r = p(this, G);
  if (p(this, ne).v !== r.size) {
    for (var n of vr(hr.prototype, this, "keys").call(this))
      if (!r.has(n)) {
        var s = he(0);
        r.set(n, s);
      }
  }
  for ([, s] of p(this, G))
    _(s);
};
let Yt = hr;
function li(e) {
  const t = Symbol(e);
  return {
    hasContext: () => {
      var r;
      try {
        return ms(t);
      } catch (n) {
        if (typeof n == "object" && n !== null && "message" in n && typeof n.message == "string" && ((r = n.message) != null && r.includes("lifecycle_outside_component")))
          return !1;
        throw n;
      }
    },
    getContext: () => gs(t),
    setContext: (r) => _s(t, r)
  };
}
var Ze;
class ui extends Yt {
  constructor(r, n) {
    super(n);
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
var O, _t, we, mt, bt, Oe, nt, P, Ee, st, de;
class jr {
  constructor(t = {}) {
    D(this, O, {});
    D(this, _t, /* @__PURE__ */ Ce(() => p(this, O).api ?? "/api/chat"));
    D(this, we, /* @__PURE__ */ Ce(() => p(this, O).generateId ?? cr));
    D(this, mt, /* @__PURE__ */ Ce(() => p(this, O).maxSteps ?? 1));
    D(this, bt, /* @__PURE__ */ Ce(() => p(this, O).streamProtocol ?? "data"));
    D(this, Oe, /* @__PURE__ */ L());
    D(this, nt, /* @__PURE__ */ Ce(() => p(this, O).id ?? _(p(this, we))()));
    D(this, P, /* @__PURE__ */ Ce(() => _(p(this, Oe)).get(this.id)));
    D(this, Ee);
    D(this, st, /* @__PURE__ */ L());
    /**
     * Append a user message to the chat list. This triggers the API call to fetch
     * the assistant's response.
     * @param message The message to append
     * @param options Additional options to pass to the API call
     */
    j(this, "append", async (t, {
      data: r,
      headers: n,
      body: s,
      experimental_attachments: a
    } = {}) => {
      const o = await Lr(a), i = this.messages.concat({
        ...t,
        id: t.id ?? _(p(this, we))(),
        createdAt: t.createdAt ?? /* @__PURE__ */ new Date(),
        experimental_attachments: o.length > 0 ? o : void 0,
        parts: Bn(t)
      });
      return p(this, de).call(this, { messages: i, headers: n, body: s, data: r });
    });
    /**
     * Reload the last AI chat response for the given chat history. If the last
     * message isn't from the assistant, it will request the API to generate a
     * new response.
     */
    j(this, "reload", async ({ data: t, headers: r, body: n } = {}) => {
      if (this.messages.length === 0)
        return;
      const s = this.messages[this.messages.length - 1];
      await p(this, de).call(this, {
        messages: s.role === "assistant" ? this.messages.slice(0, -1) : this.messages,
        headers: r,
        body: n,
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
      const n = await Lr(r.experimental_attachments), a = {
        messages: this.messages.concat({
          id: _(p(this, we))(),
          createdAt: /* @__PURE__ */ new Date(),
          role: "user",
          content: this.input,
          experimental_attachments: n.length > 0 ? n : void 0,
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
      const n = this.messages[this.messages.length - 1];
      Vn(n) && await p(this, de).call(this, { messages: this.messages });
    });
    D(this, de, async (t) => {
      var a;
      _(p(this, P)).status = "submitted", _(p(this, P)).error = void 0;
      const r = Fr(t.messages), n = r.length, s = Ut((a = r[r.length - 1]) == null ? void 0 : a.toolInvocations);
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
        originalMaxToolInvocationStep: s,
        originalMessageCount: n,
        maxSteps: _(p(this, mt)),
        messages: this.messages
      }) && await p(this, de).call(this, { messages: this.messages });
    });
    di() ? R(p(this, Oe), hi(), !0) : R(p(this, Oe), new ci(), !0), fe(this, O, t), this.messages = t.initialMessages ?? [], this.input = t.initialInput ?? "";
  }
  get id() {
    return _(p(this, nt));
  }
  set id(t) {
    R(p(this, nt), t);
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
    return _(p(this, st));
  }
  set input(t) {
    R(p(this, st), t, !0);
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
O = new WeakMap(), _t = new WeakMap(), we = new WeakMap(), mt = new WeakMap(), bt = new WeakMap(), Oe = new WeakMap(), nt = new WeakMap(), P = new WeakMap(), Ee = new WeakMap(), st = new WeakMap(), de = new WeakMap();
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
  let r = Rr(t, "conversationId"), n = Rr(t, "useCredentials", 7, !1), s;
  const a = () => {
    const m = document.querySelector("valis-conversation");
    m && (console.log("Updating props from attributes..."), m.hasAttribute("conversation-id") && (r(m.getAttribute("conversation-id") || ""), console.log("Set conversationId to:", r())));
  };
  Xs(() => {
    console.log("Component mounted, initializing..."), a();
    const m = document.querySelector("valis-conversation");
    m ? (new MutationObserver((S) => {
      let I = !1;
      S.forEach((g) => {
        if (g.type === "attributes") {
          const w = g.attributeName;
          w && ["conversation-id"].includes(w) && (I = !0, console.log("Attribute changed:", w, "New value:", m.getAttribute(w)));
        }
      }), I && (console.log("Attributes changed, updating props..."), a());
    }).observe(m, {
      attributes: !0,
      attributeFilter: ["conversation-id"]
    }), console.log("MutationObserver set up to watch for attribute changes")) : console.log("Element not found!");
  });
  let o = /* @__PURE__ */ L(ye(new jr({
    id: r(),
    api: `https://ai.valis.jala.university/api/v1/chat/completions/conversations/${r()}`,
    sendExtraMessageFields: !0,
    body: { stream: !0 },
    credentials: n() ? "include" : "same-origin",
    onError: (m) => {
      console.error(m);
    },
    onFinish: async () => {
      console.log("onFinish");
    }
  })));
  Lt(() => {
    _(o).status !== "submitted" && _(o).status !== "streaming" && setTimeout(() => s == null ? void 0 : s.focus(), 200);
  }), Lt(() => {
    r() && (console.log("conversationId changed, updating chat instance:", r()), R(
      o,
      new jr({
        id: r(),
        api: `https://ai.valis.jala.university/api/v1/chat/completions/conversations/${r()}`,
        sendExtraMessageFields: !0,
        body: { stream: !0 },
        credentials: n() ? "include" : "same-origin",
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
    var w = Nt(I, 2);
    Ar(w, 21, () => _(E).parts, Sr, (N, x) => {
      var ue = qs(), Jn = Es(ue);
      {
        var Un = (St) => {
          var At = pi(), Yn = te(At, !0);
          W(At), Rt(() => Tr(Yn, _(x).text)), be(St, At);
        };
        $r(Jn, (St) => {
          _(x).type === "text" && St(Un);
        });
      }
      be(N, ue);
    }), W(w), W(S), Rt(() => {
      na(S, 1, `message-item ${_(E).role ?? ""}`, "svelte-1f52vz9"), Tr(g, _(E).role);
    }), be(m, S);
  }), W(u), W(l);
  var c = Nt(l, 2), f = te(c), d = te(f);
  Ls(d), aa(d, (m) => s = m, () => s), W(f);
  var h = Nt(f, 2), v = te(h), b = te(v);
  {
    var $ = (m) => {
      var E = gi();
      be(m, E);
    }, y = (m) => {
      var E = Ys("Send");
      be(m, E);
    };
    $r(b, (m) => {
      _(o).status === "submitted" || _(o).status === "streaming" ? m($) : m(y, !1);
    });
  }
  return W(v), W(h), W(c), W(i), Rt(() => v.disabled = _(o).status === "submitted" || _(o).status === "streaming"), Js("submit", c, function(...m) {
    var E;
    (E = _(o).handleSubmit) == null || E.apply(this, m);
  }), sa(d, () => _(o).input, (m) => _(o).input = m), be(e, i), Xr({
    get conversationId() {
      return r();
    },
    set conversationId(m) {
      r(m), zt();
    },
    get useCredentials() {
      return n();
    },
    set useCredentials(m = !1) {
      n(m), zt();
    }
  });
}
customElements.define("valis-conversation", ua(bi, { conversationId: {}, useCredentials: {} }, [], [], !0));
export {
  bi as default
};
