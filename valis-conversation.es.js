var Un = Object.defineProperty;
var Yn = Object.getPrototypeOf;
var qn = Reflect.get;
var hr = (e) => {
  throw TypeError(e);
};
var Hn = (e, t, r) => t in e ? Un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var j = (e, t, r) => Hn(e, typeof t != "symbol" ? t + "" : t, r), kt = (e, t, r) => t.has(e) || hr("Cannot " + r);
var p = (e, t, r) => (kt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), D = (e, t, r) => t.has(e) ? hr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ue = (e, t, r, n) => (kt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), at = (e, t, r) => (kt(e, t, "access private method"), r);
var pr = (e, t, r) => qn(Yn(e), r, t);
const Kn = "5";
var Lr;
typeof window < "u" && ((Lr = window.__svelte ?? (window.__svelte = {})).v ?? (Lr.v = /* @__PURE__ */ new Set())).add(Kn);
const Wn = 1, Gn = 2, Xn = 16, Zn = 2, Yt = "[", qt = "[!", Ht = "]", Ne = {}, B = Symbol(), vr = !1;
var yt = Array.isArray, Qn = Array.prototype.indexOf, Kt = Array.from, ft = Object.keys, ct = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, jr = Object.prototype, es = Array.prototype, zr = Object.getPrototypeOf, gr = Object.isExtensible;
function Br(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const H = 2, Vr = 4, wt = 8, Wt = 16, le = 32, $e = 64, Gt = 128, J = 256, dt = 512, K = 1024, ie = 2048, Se = 4096, ae = 8192, Xt = 16384, Jr = 32768, Zt = 65536, _r = 1 << 18, ts = 1 << 19, Ur = 1 << 20, Pt = 1 << 21, it = Symbol("$state"), rs = Symbol("legacy props"), Qt = 3, Be = 8;
function Yr(e) {
  return e === this.v;
}
function ns(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qr(e) {
  return !ns(e, this.v);
}
function ss(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function as() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function is(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function os() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ls() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function us() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function fs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ds = !1;
const hs = [];
function mr(e, t = !1) {
  return ot(e, /* @__PURE__ */ new Map(), "", hs);
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
      var l = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, l), s !== null && t.set(s, l);
      for (var i = 0; i < e.length; i += 1) {
        var o = e[i];
        i in e && (l[i] = ot(o, t, r, n));
      }
      return l;
    }
    if (zr(e) === jr) {
      l = {}, t.set(e, l), s !== null && t.set(s, l);
      for (var u in e)
        l[u] = ot(e[u], t, r, n);
      return l;
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
function Hr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let M = null;
function br(e) {
  M = e;
}
function ps(e) {
  return (
    /** @type {T} */
    er().get(e)
  );
}
function vs(e, t) {
  return er().set(e, t), t;
}
function gs(e) {
  return er().has(e);
}
function Kr(e, t = !1, r) {
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
  on(() => {
    n.d = !0;
  });
}
function Wr(e) {
  const t = M;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const l = t.e;
    if (l !== null) {
      var r = A, n = T;
      t.e = null;
      try {
        for (var s = 0; s < l.length; s++) {
          var a = l[s];
          ve(a.effect), Q(a.reaction), nr(a.fn);
        }
      } finally {
        ve(r), Q(n);
      }
    }
    M = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Gr() {
  return !0;
}
function er(e) {
  return M === null && Hr(), M.c ?? (M.c = new Map(_s(M) || void 0));
}
function _s(e) {
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
  const t = zr(e);
  if (t !== jr && t !== es)
    return e;
  var r = /* @__PURE__ */ new Map(), n = yt(e), s = /* @__PURE__ */ L(0), a = T, l = (i) => {
    var o = T;
    Q(a);
    var u = i();
    return Q(o), u;
  };
  return n && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(i, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && us();
        var c = r.get(o);
        return c === void 0 ? c = l(() => {
          var f = /* @__PURE__ */ L(u.value);
          return r.set(o, f), f;
        }) : R(c, u.value, !0), !0;
      },
      deleteProperty(i, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in i) {
            const d = l(() => /* @__PURE__ */ L(B));
            r.set(o, d), Ct(s);
          }
        } else {
          if (n && typeof o == "string") {
            var c = (
              /** @type {Source<number>} */
              r.get("length")
            ), f = Number(o);
            Number.isInteger(f) && f < c.v && R(c, f);
          }
          R(u, B), Ct(s);
        }
        return !0;
      },
      get(i, o, u) {
        var h;
        if (o === it)
          return e;
        var c = r.get(o), f = o in i;
        if (c === void 0 && (!f || (h = Re(i, o)) != null && h.writable) && (c = l(() => {
          var g = ye(f ? i[o] : B), b = /* @__PURE__ */ L(g);
          return b;
        }), r.set(o, c)), c !== void 0) {
          var d = m(c);
          return d === B ? void 0 : d;
        }
        return Reflect.get(i, o, u);
      },
      getOwnPropertyDescriptor(i, o) {
        var u = Reflect.getOwnPropertyDescriptor(i, o);
        if (u && "value" in u) {
          var c = r.get(o);
          c && (u.value = m(c));
        } else if (u === void 0) {
          var f = r.get(o), d = f == null ? void 0 : f.v;
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
      has(i, o) {
        var d;
        if (o === it)
          return !0;
        var u = r.get(o), c = u !== void 0 && u.v !== B || Reflect.has(i, o);
        if (u !== void 0 || A !== null && (!c || (d = Re(i, o)) != null && d.writable)) {
          u === void 0 && (u = l(() => {
            var h = c ? ye(i[o]) : B, g = /* @__PURE__ */ L(h);
            return g;
          }), r.set(o, u));
          var f = m(u);
          if (f === B)
            return !1;
        }
        return c;
      },
      set(i, o, u, c) {
        var I;
        var f = r.get(o), d = o in i;
        if (n && o === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = r.get(h + "");
            g !== void 0 ? R(g, B) : h in i && (g = l(() => /* @__PURE__ */ L(B)), r.set(h + "", g));
          }
        if (f === void 0)
          (!d || (I = Re(i, o)) != null && I.writable) && (f = l(() => /* @__PURE__ */ L(void 0)), R(f, ye(u)), r.set(o, f));
        else {
          d = f.v !== B;
          var b = l(() => ye(u));
          R(f, b);
        }
        var $ = Reflect.getOwnPropertyDescriptor(i, o);
        if ($ != null && $.set && $.set.call(c, u), !d) {
          if (n && typeof o == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), y = Number(o);
            Number.isInteger(y) && y >= _.v && R(_, y + 1);
          }
          Ct(s);
        }
        return !0;
      },
      ownKeys(i) {
        m(s);
        var o = Reflect.ownKeys(i).filter((f) => {
          var d = r.get(f);
          return d === void 0 || d.v !== B;
        });
        for (var [u, c] of r)
          c.v !== B && !(u in i) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        fs();
      }
    }
  );
}
function Ct(e, t = 1) {
  R(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function Et(e) {
  var t = H | ie, r = T !== null && (T.f & H) !== 0 ? (
    /** @type {Derived} */
    T
  ) : null;
  return A === null || r !== null && (r.f & J) !== 0 ? t |= J : A.f |= Ur, {
    ctx: M,
    deps: null,
    effects: null,
    equals: Yr,
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
function ke(e) {
  const t = /* @__PURE__ */ Et(e);
  return vn(t), t;
}
// @__NO_SIDE_EFFECTS__
function ms(e) {
  const t = /* @__PURE__ */ Et(e);
  return t.equals = qr, t;
}
function Xr(e) {
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
function bs(e) {
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
function Zr(e) {
  var t, r = A;
  ve(bs(e));
  try {
    Xr(e), t = bn(e);
  } finally {
    ve(r);
  }
  return t;
}
function Qr(e) {
  var t = Zr(e);
  if (e.equals(t) || (e.v = t, e.wv = _n()), !Me) {
    var r = (he || (e.f & J) !== 0) && e.deps !== null ? Se : K;
    ee(e, r);
  }
}
const Ve = /* @__PURE__ */ new Map();
function de(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Yr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = de(e);
  return vn(r), r;
}
// @__NO_SIDE_EFFECTS__
function tr(e, t = !1, r = !0) {
  const n = de(e);
  return t || (n.equals = qr), n;
}
function R(e, t, r = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Z || (T.f & _r) !== 0) && Gr() && (T.f & (H | Wt | _r)) !== 0 && !(F != null && F[1].includes(e) && F[0] === T) && cs();
  let n = r ? ye(t) : t;
  return en(e, n);
}
function en(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Me ? Ve.set(e, t) : Ve.set(e, r), e.v = t, (e.f & H) !== 0 && ((e.f & ie) !== 0 && Zr(
      /** @type {Derived} */
      e
    ), ee(e, (e.f & J) === 0 ? K : Se)), e.wv = _n(), tn(e, ie), A !== null && (A.f & K) !== 0 && (A.f & (le | $e)) === 0 && (U === null ? Cs([e]) : U.push(e));
  }
  return t;
}
function tn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var a = r[s], l = a.f;
      (l & ie) === 0 && (ee(a, t), (l & (K | J)) !== 0 && ((l & H) !== 0 ? tn(
        /** @type {Derived} */
        a,
        Se
      ) : ur(
        /** @type {Effect} */
        a
      )));
    }
}
function It(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let k = !1;
function se(e) {
  k = e;
}
let N;
function q(e) {
  if (e === null)
    throw It(), Ne;
  return N = e;
}
function xt() {
  return q(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ge(N)
  );
}
function W(e) {
  if (k) {
    if (/* @__PURE__ */ ge(N) !== null)
      throw It(), Ne;
    N = e;
  }
}
function Mt() {
  for (var e = 0, t = N; ; ) {
    if (t.nodeType === Be) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Ht) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Yt || r === qt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ge(t)
    );
    t.remove(), t = n;
  }
}
function rn(e) {
  if (!e || e.nodeType !== Be)
    throw It(), Ne;
  return (
    /** @type {Comment} */
    e.data
  );
}
var yr, nn, sn, an;
function Ft() {
  if (yr === void 0) {
    yr = window, nn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    sn = Re(t, "firstChild").get, an = Re(t, "nextSibling").get, gr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), gr(r) && (r.__t = void 0);
  }
}
function pe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return sn.call(e);
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return an.call(e);
}
function te(e, t) {
  if (!k)
    return /* @__PURE__ */ xe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xe(N)
  );
  if (r === null)
    r = N.appendChild(pe());
  else if (t && r.nodeType !== Qt) {
    var n = pe();
    return r == null || r.before(n), q(n), n;
  }
  return q(r), r;
}
function ys(e, t) {
  if (!k) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ge(r) : r;
  }
  return N;
}
function Nt(e, t = 1, r = !1) {
  let n = k ? N : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ ge(n);
  if (!k)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== Qt) {
    var a = pe();
    return n === null ? s == null || s.after(a) : n.before(a), q(a), a;
  }
  return q(n), /** @type {TemplateNode} */
  n;
}
function rr(e) {
  e.textContent = "";
}
function ws(e) {
  A === null && T === null && is(), T !== null && (T.f & J) !== 0 && A === null && as(), Me && ss();
}
function Es(e, t) {
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
      lr(a), a.f |= Jr;
    } catch (o) {
      throw oe(a), o;
    }
  else t !== null && ur(a);
  var l = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Ur | Gt)) === 0;
  if (!l && n && (s !== null && Es(a, s), T !== null && (T.f & H) !== 0)) {
    var i = (
      /** @type {Derived} */
      T
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return a;
}
function on(e) {
  const t = Ae(wt, null, !1);
  return ee(t, K), t.teardown = e, t;
}
function Lt(e) {
  ws();
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
    var n = nr(e);
    return n;
  }
}
function Is(e) {
  const t = Ae($e, e, !0);
  return () => {
    oe(t);
  };
}
function xs(e) {
  const t = Ae($e, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? ht(t, () => {
      oe(t), n(void 0);
    }) : (oe(t), n(void 0));
  });
}
function nr(e) {
  return Ae(Vr, e, !1);
}
function sr(e) {
  return Ae(wt, e, !0);
}
function Rt(e, t = [], r = Et) {
  const n = t.map(r);
  return ar(() => e(...n.map(m)));
}
function ar(e, t = 0) {
  return Ae(wt | Wt | t, e, !0);
}
function Je(e, t = !0) {
  return Ae(wt | le, e, !0, t);
}
function ln(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Me, n = T;
    wr(!0), Q(null);
    try {
      t.call(null);
    } finally {
      wr(r), Q(n);
    }
  }
}
function un(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    (r.f & $e) !== 0 ? r.parent = null : oe(r, t), r = n;
  }
}
function Ts(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & le) === 0 && oe(t), t = r;
  }
}
function oe(e, t = !0) {
  var r = !1;
  (t || (e.f & ts) !== 0) && e.nodes_start !== null && e.nodes_end !== null && ($s(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), un(e, t && !r), gt(e, 0), ee(e, Xt);
  var n = e.transitions;
  if (n !== null)
    for (const a of n)
      a.stop();
  ln(e);
  var s = e.parent;
  s !== null && s.first !== null && fn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function $s(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ge(e)
    );
    e.remove(), e = r;
  }
}
function fn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ht(e, t) {
  var r = [];
  ir(e, r, !0), cn(r, () => {
    oe(e), t && t();
  });
}
function cn(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var s of e)
      s.out(n);
  } else
    t();
}
function ir(e, t, r) {
  if ((e.f & ae) === 0) {
    if (e.f ^= ae, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || r) && t.push(l);
    for (var n = e.first; n !== null; ) {
      var s = n.next, a = (n.f & Zt) !== 0 || (n.f & le) !== 0;
      ir(n, t, a ? r : !1), n = s;
    }
  }
}
function pt(e) {
  dn(e, !0);
}
function dn(e, t) {
  if ((e.f & ae) !== 0) {
    e.f ^= ae;
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Zt) !== 0 || (r.f & le) !== 0;
      dn(r, s ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Ue = [], jt = [];
function hn() {
  var e = Ue;
  Ue = [], Br(e);
}
function Ss() {
  var e = jt;
  jt = [], Br(e);
}
function or(e) {
  Ue.length === 0 && queueMicrotask(hn), Ue.push(e);
}
function As() {
  Ue.length > 0 && hn(), jt.length > 0 && Ss();
}
function ks(e) {
  var t = (
    /** @type {Effect} */
    A
  );
  if ((t.f & Jr) === 0) {
    if ((t.f & Gt) === 0)
      throw e;
    t.fn(e);
  } else
    pn(e, t);
}
function pn(e, t) {
  for (; t !== null; ) {
    if ((t.f & Gt) !== 0)
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
function wr(e) {
  Me = e;
}
let ze = [];
let T = null, Z = !1;
function Q(e) {
  T = e;
}
let A = null;
function ve(e) {
  A = e;
}
let F = null;
function vn(e) {
  T !== null && T.f & Pt && (F === null ? F = [T, [e]] : F[1].push(e));
}
let z = null, V = 0, U = null;
function Cs(e) {
  U = e;
}
let gn = 1, vt = 0, he = !1;
function _n() {
  return ++gn;
}
function Tt(e) {
  var f;
  var t = e.f;
  if ((t & ie) !== 0)
    return !0;
  if ((t & Se) !== 0) {
    var r = e.deps, n = (t & J) !== 0;
    if (r !== null) {
      var s, a, l = (t & dt) !== 0, i = n && A !== null && !he, o = r.length;
      if (l || i) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (s = 0; s < o; s++)
          a = r[s], (l || !((f = a == null ? void 0 : a.reactions) != null && f.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        l && (u.f ^= dt), i && c !== null && (c.f & J) === 0 && (u.f ^= J);
      }
      for (s = 0; s < o; s++)
        if (a = r[s], Tt(
          /** @type {Derived} */
          a
        ) && Qr(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || A !== null && !he) && ee(e, K);
  }
  return !1;
}
function mn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var a = n[s];
      F != null && F[1].includes(e) && F[0] === T || ((a.f & H) !== 0 ? mn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ee(a, ie) : (a.f & K) !== 0 && ee(a, Se), ur(
        /** @type {Effect} */
        a
      )));
    }
}
function bn(e) {
  var h;
  var t = z, r = V, n = U, s = T, a = he, l = F, i = M, o = Z, u = e.f;
  z = /** @type {null | Value[]} */
  null, V = 0, U = null, he = (u & J) !== 0 && (Z || !Ie || T === null), T = (u & (le | $e)) === 0 ? e : null, F = null, br(e.ctx), Z = !1, vt++, e.f |= Pt;
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
      if (!he || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (u & H) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (d = V; d < f.length; d++)
          ((h = f[d]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && V < f.length && (gt(e, V), f.length = V);
    if (Gr() && U !== null && !Z && f !== null && (e.f & (H | Se | ie)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      U.length; d++)
        mn(
          U[d],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (vt++, U !== null && (n === null ? n = U : n.push(.../** @type {Source[]} */
    U))), c;
  } catch (g) {
    ks(g);
  } finally {
    z = t, V = r, U = n, T = s, he = a, F = l, br(i), Z = o, e.f ^= Pt;
  }
}
function Ns(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Qn.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  r === null && (t.f & H) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (z === null || !z.includes(t)) && (ee(t, Se), (t.f & (J | dt)) === 0 && (t.f ^= dt), Xr(
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
      Ns(e, r[n]);
}
function lr(e) {
  var t = e.f;
  if ((t & Xt) === 0) {
    ee(e, K);
    var r = A, n = Ie;
    A = e, Ie = !0;
    try {
      (t & Wt) !== 0 ? Ts(e) : un(e), ln(e);
      var s = bn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = gn;
      var a;
      vr && ds && (e.f & ie) !== 0 && e.deps;
    } finally {
      Ie = n, A = r;
    }
  }
}
function Rs() {
  try {
    os();
  } catch (e) {
    if (qe !== null)
      pn(e, qe);
    else
      throw e;
  }
}
function yn() {
  var e = Ie;
  try {
    var t = 0;
    for (Ie = !0; ze.length > 0; ) {
      t++ > 1e3 && Rs();
      var r = ze, n = r.length;
      ze = [];
      for (var s = 0; s < n; s++) {
        var a = Os(r[s]);
        Ds(a);
      }
      Ve.clear();
    }
  } finally {
    Ye = !1, Ie = e, qe = null;
  }
}
function Ds(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      (n.f & (Xt | ae)) === 0 && Tt(n) && (lr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? fn(n) : n.fn = null));
    }
}
function ur(e) {
  Ye || (Ye = !0, queueMicrotask(yn));
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
function Os(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, s = (n & (le | $e)) !== 0, a = s && (n & K) !== 0;
    if (!a && (n & ae) === 0) {
      (n & Vr) !== 0 ? t.push(r) : s ? r.f ^= K : Tt(r) && lr(r);
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var i = r.parent;
    for (r = r.next; r === null && i !== null; )
      r = i.next, i = i.parent;
  }
  return t;
}
function wn(e) {
  for (var t; ; ) {
    if (As(), ze.length === 0)
      return Ye = !1, qe = null, /** @type {T} */
      t;
    Ye = !0, yn();
  }
}
function m(e) {
  var t = e.f, r = (t & H) !== 0;
  if (T !== null && !Z) {
    if (!(F != null && F[1].includes(e)) || F[0] !== T) {
      var n = T.deps;
      e.rv < vt && (e.rv = vt, z === null && n !== null && n[V] === e ? V++ : z === null ? z = [e] : (!he || !z.includes(e)) && z.push(e));
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
  e, Tt(s) && Qr(s)), Me && Ve.has(e) ? Ve.get(e) : e.v;
}
function Fe(e) {
  var t = Z;
  try {
    return Z = !0, e();
  } finally {
    Z = t;
  }
}
const Ps = -7169;
function ee(e, t) {
  e.f = e.f & Ps | t;
}
function Ms(e) {
  k && /* @__PURE__ */ xe(e) !== null && rr(e);
}
let Er = !1;
function Fs() {
  Er || (Er = !0, document.addEventListener(
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
function En(e) {
  var t = T, r = A;
  Q(null), ve(null);
  try {
    return e();
  } finally {
    Q(t), ve(r);
  }
}
function Ls(e, t, r, n = r) {
  e.addEventListener(t, () => En(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), Fs();
}
const js = /* @__PURE__ */ new Set(), Ir = /* @__PURE__ */ new Set();
function zs(e, t, r, n = {}) {
  function s(a) {
    if (n.capture || je.call(t, a), !a.cancelBubble)
      return En(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? or(() => {
    t.addEventListener(e, s, n);
  }) : t.addEventListener(e, s, n), s;
}
function Bs(e, t, r, n, s) {
  var a = { capture: n, passive: s }, l = zs(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && on(() => {
    t.removeEventListener(e, l, a);
  });
}
function je(e) {
  var y;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  ), l = 0, i = e.__root;
  if (i) {
    var o = s.indexOf(i);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    o <= u && (l = o);
  }
  if (a = /** @type {Element} */
  s[l] || e.target, a !== t) {
    ct(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = T, f = A;
    Q(null), ve(null);
    try {
      for (var d, h = []; a !== null; ) {
        var g = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var b = a["__" + n];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (yt(b)) {
              var [$, ..._] = b;
              $.apply(a, [e, ..._]);
            } else
              b.call(a, e);
        } catch (I) {
          d ? h.push(I) : d = I;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        a = g;
      }
      if (d) {
        for (let I of h)
          queueMicrotask(() => {
            throw I;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Q(c), ve(f);
    }
  }
}
function Vs(e) {
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
  var r = (t & Zn) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    if (k)
      return Te(N, null), N;
    n === void 0 && (n = Vs(s ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ xe(n));
    var a = (
      /** @type {TemplateNode} */
      r || nn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Te(a, a), a;
  };
}
function Js(e = "") {
  if (!k) {
    var t = pe(e + "");
    return Te(t, t), t;
  }
  var r = N;
  return r.nodeType !== Qt && (r.before(r = pe()), q(r)), Te(r, r), r;
}
function Us() {
  if (k)
    return Te(N, null), N;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = pe();
  return e.append(t, r), Te(t, r), e;
}
function be(e, t) {
  if (k) {
    A.nodes_end = N, xt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ys = ["touchstart", "touchmove"];
function qs(e) {
  return Ys.includes(e);
}
function xr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function In(e, t) {
  return xn(e, t);
}
function Hs(e, t) {
  Ft(), t.intro = t.intro ?? !1;
  const r = t.target, n = k, s = N;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xe(r)
    ); a && (a.nodeType !== Be || /** @type {Comment} */
    a.data !== Yt); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ ge(a);
    if (!a)
      throw Ne;
    se(!0), q(
      /** @type {Comment} */
      a
    ), xt();
    const l = xn(e, { ...t, anchor: a });
    if (N === null || N.nodeType !== Be || /** @type {Comment} */
    N.data !== Ht)
      throw It(), Ne;
    return se(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === Ne)
      return t.recover === !1 && ls(), Ft(), rr(r), se(!1), In(e, t);
    throw l;
  } finally {
    se(n), q(s);
  }
}
const Ce = /* @__PURE__ */ new Map();
function xn(e, { target: t, anchor: r, props: n = {}, events: s, context: a, intro: l = !0 }) {
  Ft();
  var i = /* @__PURE__ */ new Set(), o = (f) => {
    for (var d = 0; d < f.length; d++) {
      var h = f[d];
      if (!i.has(h)) {
        i.add(h);
        var g = qs(h);
        t.addEventListener(h, je, { passive: g });
        var b = Ce.get(h);
        b === void 0 ? (document.addEventListener(h, je, { passive: g }), Ce.set(h, 1)) : Ce.set(h, b + 1);
      }
    }
  };
  o(Kt(js)), Ir.add(o);
  var u = void 0, c = xs(() => {
    var f = r ?? t.appendChild(pe());
    return Je(() => {
      if (a) {
        Kr({});
        var d = (
          /** @type {ComponentContext} */
          M
        );
        d.c = a;
      }
      s && (n.$$events = s), k && Te(
        /** @type {TemplateNode} */
        f,
        null
      ), u = e(f, n) || {}, k && (A.nodes_end = N), a && Wr();
    }), () => {
      var g;
      for (var d of i) {
        t.removeEventListener(d, je);
        var h = (
          /** @type {number} */
          Ce.get(d)
        );
        --h === 0 ? (document.removeEventListener(d, je), Ce.delete(d)) : Ce.set(d, h);
      }
      Ir.delete(o), f !== r && ((g = f.parentNode) == null || g.removeChild(f));
    };
  });
  return zt.set(u, c), u;
}
let zt = /* @__PURE__ */ new WeakMap();
function Ks(e, t) {
  const r = zt.get(e);
  return r ? (zt.delete(e), r(t)) : Promise.resolve();
}
function Ws(e) {
  M === null && Hr(), Lt(() => {
    const t = Fe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Tr(e, t, [r, n] = [0, 0]) {
  k && r === 0 && xt();
  var s = e, a = null, l = null, i = B, o = r > 0 ? Zt : 0, u = !1;
  const c = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (i === (i = d)) return;
    let g = !1;
    if (k && n !== -1) {
      if (r === 0) {
        const $ = rn(s);
        $ === Yt ? n = 0 : $ === qt ? n = 1 / 0 : (n = parseInt($.substring(1)), n !== n && (n = i ? 1 / 0 : -1));
      }
      const b = n > r;
      !!i === b && (s = Mt(), q(s), se(!1), g = !0, n = -1);
    }
    i ? (a ? pt(a) : h && (a = Je(() => h(s))), l && ht(l, () => {
      l = null;
    })) : (l ? pt(l) : h && (l = Je(() => h(s, [r + 1, n]))), a && ht(a, () => {
      a = null;
    })), g && se(!0);
  };
  ar(() => {
    u = !1, t(c), u || f(null, null);
  }, o), k && (s = N);
}
function $r(e, t) {
  return t;
}
function Gs(e, t, r, n) {
  for (var s = [], a = t.length, l = 0; l < a; l++)
    ir(t[l].e, s, !0);
  var i = a > 0 && s.length === 0 && r !== null;
  if (i) {
    var o = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    rr(o), o.append(
      /** @type {Element} */
      r
    ), n.clear(), fe(e, t[0].prev, t[a - 1].next);
  }
  cn(s, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      i || (n.delete(c.k), fe(e, c.prev, c.next)), oe(c.e, !i);
    }
  });
}
function Sr(e, t, r, n, s, a = null) {
  var l = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var o = (
      /** @type {Element} */
      e
    );
    l = k ? q(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xe(o)
    ) : o.appendChild(pe());
  }
  k && xt();
  var u = null, c = !1, f = /* @__PURE__ */ ms(() => {
    var d = r();
    return yt(d) ? d : d == null ? [] : Kt(d);
  });
  ar(() => {
    var d = m(f), h = d.length;
    if (c && h === 0)
      return;
    c = h === 0;
    let g = !1;
    if (k) {
      var b = rn(l) === qt;
      b !== (h === 0) && (l = Mt(), q(l), se(!1), g = !0);
    }
    if (k) {
      for (var $ = null, _, y = 0; y < h; y++) {
        if (N.nodeType === Be && /** @type {Comment} */
        N.data === Ht) {
          l = /** @type {Comment} */
          N, g = !0, se(!1);
          break;
        }
        var I = d[y], S = n(I, y);
        _ = Tn(
          N,
          i,
          $,
          null,
          I,
          S,
          y,
          s,
          t,
          r
        ), i.items.set(S, _), $ = _;
      }
      h > 0 && q(Mt());
    }
    k || Xs(d, i, l, s, t, n, r), a !== null && (h === 0 ? u ? pt(u) : u = Je(() => a(l)) : u !== null && ht(u, () => {
      u = null;
    })), g && se(!0), m(f);
  }), k && (l = N);
}
function Xs(e, t, r, n, s, a, l) {
  var i = e.length, o = t.items, u = t.first, c = u, f, d = null, h = [], g = [], b, $, _, y;
  for (y = 0; y < i; y += 1) {
    if (b = e[y], $ = a(b, y), _ = o.get($), _ === void 0) {
      var I = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : r;
      d = Tn(
        I,
        t,
        d,
        d === null ? t.first : d.next,
        b,
        $,
        y,
        n,
        s,
        l
      ), o.set($, d), h = [], g = [], c = d.next;
      continue;
    }
    if (Zs(_, b, y), (_.e.f & ae) !== 0 && pt(_.e), _ !== c) {
      if (f !== void 0 && f.has(_)) {
        if (h.length < g.length) {
          var S = g[0], w;
          d = S.prev;
          var v = h[0], E = h[h.length - 1];
          for (w = 0; w < h.length; w += 1)
            Ar(h[w], S, r);
          for (w = 0; w < g.length; w += 1)
            f.delete(g[w]);
          fe(t, v.prev, E.next), fe(t, d, v), fe(t, E, S), c = S, d = E, y -= 1, h = [], g = [];
        } else
          f.delete(_), Ar(_, c, r), fe(t, _.prev, _.next), fe(t, _, d === null ? t.first : d.next), fe(t, d, _), d = _;
        continue;
      }
      for (h = [], g = []; c !== null && c.k !== $; )
        (c.e.f & ae) === 0 && (f ?? (f = /* @__PURE__ */ new Set())).add(c), g.push(c), c = c.next;
      if (c === null)
        continue;
      _ = c;
    }
    h.push(_), d = _, c = _.next;
  }
  if (c !== null || f !== void 0) {
    for (var C = f === void 0 ? [] : Kt(f); c !== null; )
      (c.e.f & ae) === 0 && C.push(c), c = c.next;
    var x = C.length;
    if (x > 0) {
      var _e = i === 0 ? r : null;
      Gs(t, C, _e, o);
    }
  }
  A.first = t.first && t.first.e, A.last = d && d.e;
}
function Zs(e, t, r, n) {
  en(e.v, t), e.i = r;
}
function Tn(e, t, r, n, s, a, l, i, o, u) {
  var c = (o & Wn) !== 0, f = (o & Xn) === 0, d = c ? f ? /* @__PURE__ */ tr(s, !1, !1) : de(s) : s, h = (o & Gn) === 0 ? l : de(l), g = {
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
    return g.e = Je(() => i(e, d, h, u), k), g.e.prev = r && r.e, g.e.next = n && n.e, r === null ? t.first = g : (r.next = g, r.e.next = g.e), n !== null && (n.prev = g, n.e.prev = g.e), g;
  } finally {
  }
}
function Ar(e, t, r) {
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
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ge(a)
    );
    s.before(a), a = l;
  }
}
function fe(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Qs(e, t) {
  or(() => {
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
function ea(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n = n ? n + " " + t : t, n === "" ? null : n;
}
function ta(e, t, r, n, s, a) {
  var l = e.__className;
  if (k || l !== r || l === void 0) {
    var i = ea(r, n);
    (!k || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : e.className = i), e.__className = r;
  }
  return a;
}
function ra(e, t, r = t) {
  Ls(e, "input", (n) => {
    var s = n ? e.defaultValue : e.value;
    if (s = Dt(e) ? Ot(s) : s, r(s), s !== (s = t())) {
      var a = e.selectionStart, l = e.selectionEnd;
      e.value = s ?? "", l !== null && (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (k && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Fe(t) == null && e.value) && r(Dt(e) ? Ot(e.value) : e.value), sr(() => {
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
function na(e = {}, t, r, n) {
  return nr(() => {
    var s, a;
    return sr(() => {
      s = a, a = [], Fe(() => {
        e !== r(...a) && (t(e, ...a), s && kr(r(...s), e) && t(null, ...s));
      });
    }), () => {
      or(() => {
        a && kr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Cr(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function sa(e, t, r, n) {
  var s;
  s = /** @type {V} */
  e[t];
  var a = (
    /** @type {V} */
    n
  ), l = !0, i = !1, o = () => (i = !0, l && (l = !1, a = /** @type {V} */
  n), a), u;
  u = () => {
    var h = (
      /** @type {V} */
      e[t]
    );
    return h === void 0 ? o() : (l = !0, i = !1, h);
  };
  var c = !1, f = /* @__PURE__ */ tr(s), d = /* @__PURE__ */ Et(() => {
    var h = u(), g = m(f);
    return c ? (c = !1, g) : f.v = h;
  });
  return function(h, g) {
    if (arguments.length > 0) {
      const b = g ? m(d) : h;
      if (!d.equals(b)) {
        if (c = !0, R(f, b), i && a !== void 0 && (a = b), Cr(d))
          return h;
        Fe(() => m(d));
      }
      return h;
    }
    return Cr(d) ? d.v : m(d);
  };
}
function aa(e) {
  return new ia(e);
}
var re, Y;
class ia {
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
    var r = /* @__PURE__ */ new Map(), n = (l, i) => {
      var o = /* @__PURE__ */ tr(i, !1, !1);
      return r.set(l, o), o;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, i) {
          return m(r.get(i) ?? n(i, Reflect.get(l, i)));
        },
        has(l, i) {
          return i === rs ? !0 : (m(r.get(i) ?? n(i, Reflect.get(l, i))), Reflect.has(l, i));
        },
        set(l, i, o) {
          return R(r.get(i) ?? n(i, o), o), Reflect.set(l, i, o);
        }
      }
    );
    ue(this, Y, (t.hydrate ? Hs : In)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && wn(), ue(this, re, s.$$events);
    for (const l of Object.keys(p(this, Y)))
      l === "$set" || l === "$destroy" || l === "$on" || ct(this, l, {
        get() {
          return p(this, Y)[l];
        },
        /** @param {any} value */
        set(i) {
          p(this, Y)[l] = i;
        },
        enumerable: !0
      });
    p(this, Y).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(s, l);
    }, p(this, Y).$destroy = () => {
      Ks(p(this, Y));
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
let $n;
typeof HTMLElement == "function" && ($n = class extends HTMLElement {
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
          const l = document.createElement("slot");
          s !== "default" && (l.name = s), be(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = oa(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), r.default = !0) : r[s] = t(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = lt(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = aa({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Is(() => {
        sr(() => {
          var s;
          this.$$r = !0;
          for (const a of ft(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = lt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, l);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const l = this.$$c.$on(s, a);
          this.$$l_u.set(a, l);
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
function oa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function la(e, t, r, n, s, a) {
  let l = class extends $n {
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
    ct(l.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(o) {
        var f;
        o = lt(i, o, t), this.$$d[i] = o;
        var u = this.$$c;
        if (u) {
          var c = (f = Re(u, i)) == null ? void 0 : f.get;
          c ? u[i] = o : u.$set({ [i]: o });
        }
      }
    });
  }), n.forEach((i) => {
    ct(l.prototype, i, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[i];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var Sn = "vercel.ai.error", ua = Symbol.for(Sn), An, fa = class kn extends Error {
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
    super(r), this[An] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return kn.hasMarker(t, Sn);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
An = ua;
var Pe = fa;
function Cn(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Nn = "AI_InvalidArgumentError", Rn = `vercel.ai.error.${Nn}`, ca = Symbol.for(Rn), Dn, da = class extends Pe {
  constructor({
    message: e,
    cause: t,
    argument: r
  }) {
    super({ name: Nn, message: e, cause: t }), this[Dn] = !0, this.argument = r;
  }
  static isInstance(e) {
    return Pe.hasMarker(e, Rn);
  }
};
Dn = ca;
var On = "AI_JSONParseError", Pn = `vercel.ai.error.${On}`, ha = Symbol.for(Pn), Mn, Nr = class extends Pe {
  constructor({ text: e, cause: t }) {
    super({
      name: On,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Cn(t)}`,
      cause: t
    }), this[Mn] = !0, this.text = e;
  }
  static isInstance(e) {
    return Pe.hasMarker(e, Pn);
  }
};
Mn = ha;
var Fn = "AI_TypeValidationError", Ln = `vercel.ai.error.${Fn}`, pa = Symbol.for(Ln), jn, va = class Bt extends Pe {
  constructor({ value: t, cause: r }) {
    super({
      name: Fn,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Cn(r)}`,
      cause: r
    }), this[jn] = !0, this.value = t;
  }
  static isInstance(t) {
    return Pe.hasMarker(t, Ln);
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
    return Bt.isInstance(r) && r.value === t ? r : new Bt({ value: t, cause: r });
  }
};
jn = pa;
var Rr = va;
let ga = (e, t = 21) => (r = t) => {
  let n = "", s = r | 0;
  for (; s--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function _a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var me = { exports: {} }, Dr;
function ma() {
  if (Dr) return me.exports;
  Dr = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, r = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function n(i, o, u) {
    u == null && o !== null && typeof o == "object" && (u = o, o = void 0), e && Buffer.isBuffer(i) && (i = i.toString()), i && i.charCodeAt(0) === 65279 && (i = i.slice(1));
    const c = JSON.parse(i, o);
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
  function s(i, { protoAction: o = "error", constructorAction: u = "error", safe: c } = {}) {
    let f = [i];
    for (; f.length; ) {
      const d = f;
      f = [];
      for (const h of d) {
        if (o !== "ignore" && Object.prototype.hasOwnProperty.call(h, "__proto__")) {
          if (c === !0)
            return null;
          if (o === "error")
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
        for (const g in h) {
          const b = h[g];
          b && typeof b == "object" && f.push(b);
        }
      }
    }
    return i;
  }
  function a(i, o, u) {
    const c = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return n(i, o, u);
    } finally {
      Error.stackTraceLimit = c;
    }
  }
  function l(i, o) {
    const u = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return n(i, o, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = u;
    }
  }
  return me.exports = a, me.exports.default = a, me.exports.parse = a, me.exports.safeParse = l, me.exports.scan = s, me.exports;
}
var ba = ma();
const ya = /* @__PURE__ */ _a(ba);
var wa = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const s = ga(r, t);
  if (e == null)
    return s;
  if (r.includes(n))
    throw new da({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (a) => `${e}${n}${s(a)}`;
}, fr = wa();
function Ea(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
var Vt = Symbol.for("vercel.ai.validator");
function Ia(e) {
  return { [Vt]: !0, validate: e };
}
function xa(e) {
  return typeof e == "object" && e !== null && Vt in e && e[Vt] === !0 && "validate" in e;
}
function Ta(e) {
  return xa(e) ? e : $a(e);
}
function $a(e) {
  return Ia((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function Sa({
  value: e,
  schema: t
}) {
  const r = Ta(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: Rr.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: Rr.wrap({ value: e, cause: n })
    };
  }
}
function Or({
  text: e,
  schema: t
}) {
  try {
    const r = ya.parse(e);
    if (t == null)
      return { success: !0, value: r, rawValue: r };
    const n = Sa({ value: r, schema: t });
    return n.success ? { ...n, rawValue: r } : n;
  } catch (r) {
    return {
      success: !1,
      error: Nr.isInstance(r) ? r : new Nr({ text: e, cause: r })
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
}, Aa = [
  He,
  Ke,
  We,
  Ge,
  Xe
];
He.code + "", Ke.code + "", We.code + "", Ge.code + "", Xe.code + "";
He.name + "", He.code, Ke.name + "", Ke.code, We.name + "", We.code, Ge.name + "", Ge.code, Xe.name + "", Xe.code;
Aa.map((e) => e.code);
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
function Ca(e) {
  const t = ["ROOT"];
  let r = -1, n = null;
  function s(o, u, c) {
    switch (o) {
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
  function a(o, u) {
    switch (o) {
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
  function l(o, u) {
    switch (o) {
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
  for (let o = 0; o < e.length; o++) {
    const u = e[o];
    switch (t[t.length - 1]) {
      case "ROOT":
        s(u, o, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            r = o, t.pop();
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
        s(u, o, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        a(u, o);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
          case '"': {
            t.pop(), r = o;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            r = o;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (u) {
          case "]": {
            r = o, t.pop();
            break;
          }
          default: {
            r = o, s(u, o, "INSIDE_ARRAY_AFTER_VALUE");
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
            r = o, t.pop();
            break;
          }
          default: {
            r = o;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        s(u, o, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), r = o;
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
            r = o;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && l(u, o), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(u, o);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(u, o);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && l(u, o);
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
        const f = e.substring(n, o + 1);
        !"false".startsWith(f) && !"true".startsWith(f) && !"null".startsWith(f) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? a(u, o) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && l(u, o)) : r = o;
        break;
      }
    }
  }
  let i = e.slice(0, r + 1);
  for (let o = t.length - 1; o >= 0; o--)
    switch (t[o]) {
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
function Na(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = Or({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = Or({ text: Ca(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var Ra = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Da = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Oa = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Pa = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Ma = {
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
}, Fa = {
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
}, La = {
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
}, ja = {
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
}, za = {
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
}, Ba = {
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
}, Va = {
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
}, Ja = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, Ua = {
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
}, Ya = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, qa = {
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
}, Ha = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, cr = [
  Ra,
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
  Ha
], Ka = Object.fromEntries(
  cr.map((e) => [e.code, e])
);
Object.fromEntries(
  cr.map((e) => [e.name, e.code])
);
var Wa = cr.map((e) => e.code), Ga = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const r = e.slice(0, t);
  if (!Wa.includes(r))
    throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
  const n = r, s = e.slice(t + 1), a = JSON.parse(s);
  return Ka[n].parse(a);
}, Xa = 10;
function Za(e, t) {
  const r = new Uint8Array(t);
  let n = 0;
  for (const s of e)
    r.set(s, n), n += s.length;
  return e.length = 0, r;
}
async function Qa({
  stream: e,
  onTextPart: t,
  onReasoningPart: r,
  onReasoningSignaturePart: n,
  onRedactedReasoningPart: s,
  onSourcePart: a,
  onFilePart: l,
  onDataPart: i,
  onErrorPart: o,
  onToolCallStreamingStartPart: u,
  onToolCallDeltaPart: c,
  onToolCallPart: f,
  onToolResultPart: d,
  onMessageAnnotationsPart: h,
  onFinishMessagePart: g,
  onFinishStepPart: b,
  onStartStepPart: $
}) {
  const _ = e.getReader(), y = new TextDecoder(), I = [];
  let S = 0;
  for (; ; ) {
    const { value: w } = await _.read();
    if (w && (I.push(w), S += w.length, w[w.length - 1] !== Xa))
      continue;
    if (I.length === 0)
      break;
    const v = Za(I, S);
    S = 0;
    const E = y.decode(v, { stream: !0 }).split(`
`).filter((C) => C !== "").map(Ga);
    for (const { type: C, value: x } of E)
      switch (C) {
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
          await (l == null ? void 0 : l(x));
          break;
        case "source":
          await (a == null ? void 0 : a(x));
          break;
        case "data":
          await (i == null ? void 0 : i(x));
          break;
        case "error":
          await (o == null ? void 0 : o(x));
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
          await (g == null ? void 0 : g(x));
          break;
        case "finish_step":
          await (b == null ? void 0 : b(x));
          break;
        case "start_step":
          await ($ == null ? void 0 : $(x));
          break;
        default: {
          const _e = C;
          throw new Error(`Unknown stream part type: ${_e}`);
        }
      }
  }
}
async function ei({
  stream: e,
  update: t,
  onToolCall: r,
  onFinish: n,
  generateId: s = fr,
  getCurrentDate: a = () => /* @__PURE__ */ new Date(),
  lastMessage: l
}) {
  var i, o;
  const u = (l == null ? void 0 : l.role) === "assistant";
  let c = u ? 1 + // find max step in existing tool invocations:
  ((o = (i = l.toolInvocations) == null ? void 0 : i.reduce((v, E) => {
    var C;
    return Math.max(v, (C = E.step) != null ? C : 0);
  }, 0)) != null ? o : 0) : 0;
  const f = u ? structuredClone(l) : {
    id: s(),
    createdAt: a(),
    role: "assistant",
    content: "",
    parts: []
  };
  let d, h, g;
  function b(v, E) {
    const C = f.parts.find(
      (x) => x.type === "tool-invocation" && x.toolInvocation.toolCallId === v
    );
    C != null ? C.toolInvocation = E : f.parts.push({
      type: "tool-invocation",
      toolInvocation: E
    });
  }
  const $ = [];
  let _ = u ? l == null ? void 0 : l.annotations : void 0;
  const y = {};
  let I = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, S = "unknown";
  function w() {
    const v = [...$];
    _ != null && _.length && (f.annotations = _);
    const E = {
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
      message: E,
      data: v,
      replaceLastMessage: u
    });
  }
  await Qa({
    stream: e,
    onTextPart(v) {
      d == null ? (d = {
        type: "text",
        text: v
      }, f.parts.push(d)) : d.text += v, f.content += v, w();
    },
    onReasoningPart(v) {
      var E;
      g == null ? (g = { type: "text", text: v }, h != null && h.details.push(g)) : g.text += v, h == null ? (h = {
        type: "reasoning",
        reasoning: v,
        details: [g]
      }, f.parts.push(h)) : h.reasoning += v, f.reasoning = ((E = f.reasoning) != null ? E : "") + v, w();
    },
    onReasoningSignaturePart(v) {
      g != null && (g.signature = v.signature);
    },
    onRedactedReasoningPart(v) {
      h == null && (h = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, f.parts.push(h)), h.details.push({
        type: "redacted",
        data: v.data
      }), g = void 0, w();
    },
    onFilePart(v) {
      f.parts.push({
        type: "file",
        mimeType: v.mimeType,
        data: v.data
      }), w();
    },
    onSourcePart(v) {
      f.parts.push({
        type: "source",
        source: v
      }), w();
    },
    onToolCallStreamingStartPart(v) {
      f.toolInvocations == null && (f.toolInvocations = []), y[v.toolCallId] = {
        text: "",
        step: c,
        toolName: v.toolName,
        index: f.toolInvocations.length
      };
      const E = {
        state: "partial-call",
        step: c,
        toolCallId: v.toolCallId,
        toolName: v.toolName,
        args: void 0
      };
      f.toolInvocations.push(E), b(v.toolCallId, E), w();
    },
    onToolCallDeltaPart(v) {
      const E = y[v.toolCallId];
      E.text += v.argsTextDelta;
      const { value: C } = Na(E.text), x = {
        state: "partial-call",
        step: E.step,
        toolCallId: v.toolCallId,
        toolName: E.toolName,
        args: C
      };
      f.toolInvocations[E.index] = x, b(v.toolCallId, x), w();
    },
    async onToolCallPart(v) {
      const E = {
        state: "call",
        step: c,
        ...v
      };
      if (y[v.toolCallId] != null ? f.toolInvocations[y[v.toolCallId].index] = E : (f.toolInvocations == null && (f.toolInvocations = []), f.toolInvocations.push(E)), b(v.toolCallId, E), w(), r) {
        const C = await r({ toolCall: v });
        if (C != null) {
          const x = {
            state: "result",
            step: c,
            ...v,
            result: C
          };
          f.toolInvocations[f.toolInvocations.length - 1] = x, b(v.toolCallId, x), w();
        }
      }
    },
    onToolResultPart(v) {
      const E = f.toolInvocations;
      if (E == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const C = E.findIndex(
        (_e) => _e.toolCallId === v.toolCallId
      );
      if (C === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const x = {
        ...E[C],
        state: "result",
        ...v
      };
      E[C] = x, b(v.toolCallId, x), w();
    },
    onDataPart(v) {
      $.push(...v), w();
    },
    onMessageAnnotationsPart(v) {
      _ == null ? _ = [...v] : _.push(...v), w();
    },
    onFinishStepPart(v) {
      c += 1, d = v.isContinued ? d : void 0, h = void 0, g = void 0;
    },
    onStartStepPart(v) {
      u || (f.id = v.messageId), f.parts.push({ type: "step-start" }), w();
    },
    onFinishMessagePart(v) {
      S = v.finishReason, v.usage != null && (I = ka(v.usage));
    },
    onErrorPart(v) {
      throw new Error(v);
    }
  }), n == null || n({ message: f, finishReason: S, usage: I });
}
async function ti({
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
async function ri({
  stream: e,
  update: t,
  onFinish: r,
  getCurrentDate: n = () => /* @__PURE__ */ new Date(),
  generateId: s = fr
}) {
  const a = { type: "text", text: "" }, l = {
    id: s(),
    createdAt: n(),
    role: "assistant",
    content: "",
    parts: [a]
  };
  await ti({
    stream: e,
    onTextPart: (i) => {
      l.content += i, a.text += i, t({
        message: { ...l },
        data: [],
        replaceLastMessage: !1
      });
    }
  }), r == null || r(l, {
    usage: { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
    finishReason: "unknown"
  });
}
var ni = () => fetch;
async function si({
  api: e,
  body: t,
  streamProtocol: r = "data",
  credentials: n,
  headers: s,
  abortController: a,
  restoreMessagesOnFailure: l,
  onResponse: i,
  onUpdate: o,
  onFinish: u,
  onToolCall: c,
  generateId: f,
  fetch: d = ni(),
  lastMessage: h,
  requestType: g = "generate"
}) {
  var b, $, _;
  const I = await (g === "resume" ? d(`${e}?chatId=${t.id}`, {
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
      await i(I);
    } catch (S) {
      throw S;
    }
  if (!I.ok)
    throw new Error(
      (_ = await I.text()) != null ? _ : "Failed to fetch the chat response."
    );
  if (!I.body)
    throw new Error("The response body is empty.");
  switch (r) {
    case "text": {
      await ri({
        stream: I.body,
        update: o,
        onFinish: u,
        generateId: f
      });
      return;
    }
    case "data": {
      await ei({
        stream: I.body,
        update: o,
        lastMessage: h,
        onToolCall: c,
        onFinish({ message: S, finishReason: w, usage: v }) {
          u && S != null && u(S, { usage: v, finishReason: w });
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
function Jt(e) {
  return e == null ? void 0 : e.reduce((t, r) => {
    var n;
    return Math.max(t, (n = r.step) != null ? n : 0);
  }, 0);
}
function zn(e) {
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
function Pr(e) {
  return e.map((t) => ({
    ...t,
    parts: zn(t)
  }));
}
async function Mr(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: r, type: n } = t, s = await new Promise((a, l) => {
          const i = new FileReader();
          i.onload = (o) => {
            var u;
            a((u = o.target) == null ? void 0 : u.result);
          }, i.onerror = (o) => l(o), i.readAsDataURL(t);
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
function ai({
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
    (n.length > t || Jt(a.toolInvocations) !== e) && // check that next step is possible:
    Bn(a) && // limit the number of automatic steps:
    ((s = Jt(a.toolInvocations)) != null ? s : 0) < r
  );
}
function Bn(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((n, s, a) => s.type === "step-start" ? a : n, -1), r = e.parts.slice(t + 1).filter((n) => n.type === "tool-invocation");
  return r.length > 0 && r.every((n) => "result" in n.toolInvocation);
}
function ii({
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
  const l = {
    ...a.toolInvocation,
    state: "result",
    result: r
  };
  a.toolInvocation = l, s.toolInvocations = (n = s.toolInvocations) == null ? void 0 : n.map(
    (i) => i.toolCallId === t ? l : i
  );
}
function Le(e) {
  R(e, e.v + 1);
}
var G, X, ne, De, ut;
const dr = class dr extends Map {
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
        s = de(0), n.set(r, s);
      else
        return m(p(this, X)), !1;
    }
    return m(s), !0;
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
        s = de(0), n.set(r, s);
      else {
        m(p(this, X));
        return;
      }
    }
    return m(s), super.get(r);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(r, n) {
    var f;
    var s = p(this, G), a = s.get(r), l = super.get(r), i = super.set(r, n), o = p(this, X);
    if (a === void 0)
      a = de(0), s.set(r, a), R(p(this, ne), super.size), Le(o);
    else if (l !== n) {
      Le(a);
      var u = o.reactions === null ? null : new Set(o.reactions), c = u === null || !((f = a.reactions) != null && f.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          u.has(d)
        )
      ));
      c && Le(o);
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
    return m(p(this, X)), super.keys();
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
    return m(p(this, ne)), super.size;
  }
};
G = new WeakMap(), X = new WeakMap(), ne = new WeakMap(), De = new WeakSet(), ut = function() {
  m(p(this, X));
  var r = p(this, G);
  if (p(this, ne).v !== r.size) {
    for (var n of pr(dr.prototype, this, "keys").call(this))
      if (!r.has(n)) {
        var s = de(0);
        r.set(n, s);
      }
  }
  for ([, s] of p(this, G))
    m(s);
};
let Ut = dr;
function oi(e) {
  const t = Symbol(e);
  return {
    hasContext: () => {
      var r;
      try {
        return gs(t);
      } catch (n) {
        if (typeof n == "object" && n !== null && "message" in n && typeof n.message == "string" && ((r = n.message) != null && r.includes("lifecycle_outside_component")))
          return !1;
        throw n;
      }
    },
    getContext: () => ps(t),
    setContext: (r) => vs(t, r)
  };
}
var Ze;
class li extends Ut {
  constructor(r, n) {
    super(n);
    D(this, Ze);
    ue(this, Ze, r);
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
class ui {
  constructor() {
    D(this, Qe, /* @__PURE__ */ L(ye([])));
    D(this, et, /* @__PURE__ */ L());
    D(this, tt, /* @__PURE__ */ L("ready"));
    D(this, rt, /* @__PURE__ */ L());
  }
  get messages() {
    return m(p(this, Qe));
  }
  set messages(t) {
    R(p(this, Qe), t, !0);
  }
  get data() {
    return m(p(this, et));
  }
  set data(t) {
    R(p(this, et), t, !0);
  }
  get status() {
    return m(p(this, tt));
  }
  set status(t) {
    R(p(this, tt), t, !0);
  }
  get error() {
    return m(p(this, rt));
  }
  set error(t) {
    R(p(this, rt), t, !0);
  }
}
Qe = new WeakMap(), et = new WeakMap(), tt = new WeakMap(), rt = new WeakMap();
class fi extends li {
  constructor(t) {
    super(ui, t);
  }
}
const {
  hasContext: ci,
  getContext: di
} = oi("Chat");
var O, _t, we, mt, bt, Oe, nt, P, Ee, st, ce;
class Fr {
  constructor(t = {}) {
    D(this, O, {});
    D(this, _t, /* @__PURE__ */ ke(() => p(this, O).api ?? "/api/chat"));
    D(this, we, /* @__PURE__ */ ke(() => p(this, O).generateId ?? fr));
    D(this, mt, /* @__PURE__ */ ke(() => p(this, O).maxSteps ?? 1));
    D(this, bt, /* @__PURE__ */ ke(() => p(this, O).streamProtocol ?? "data"));
    D(this, Oe, /* @__PURE__ */ L());
    D(this, nt, /* @__PURE__ */ ke(() => p(this, O).id ?? m(p(this, we))()));
    D(this, P, /* @__PURE__ */ ke(() => m(p(this, Oe)).get(this.id)));
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
      const l = await Mr(a), i = this.messages.concat({
        ...t,
        id: t.id ?? m(p(this, we))(),
        createdAt: t.createdAt ?? /* @__PURE__ */ new Date(),
        experimental_attachments: l.length > 0 ? l : void 0,
        parts: zn(t)
      });
      return p(this, ce).call(this, { messages: i, headers: n, body: s, data: r });
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
      await p(this, ce).call(this, {
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
        m(p(this, P)).status = "ready", ue(this, Ee, void 0);
      }
    });
    /** Form submission handler to automatically reset input and append a user message */
    j(this, "handleSubmit", async (t, r = {}) => {
      var i;
      if ((i = t == null ? void 0 : t.preventDefault) == null || i.call(t), !this.input && !r.allowEmptySubmit) return;
      const n = await Mr(r.experimental_attachments), a = {
        messages: this.messages.concat({
          id: m(p(this, we))(),
          createdAt: /* @__PURE__ */ new Date(),
          role: "user",
          content: this.input,
          experimental_attachments: n.length > 0 ? n : void 0,
          parts: [{ type: "text", text: this.input }]
        }),
        headers: r.headers,
        body: r.body,
        data: r.data
      }, l = p(this, ce).call(this, a);
      this.input = "", await l;
    });
    j(this, "addToolResult", async ({ toolCallId: t, result: r }) => {
      if (ii({
        messages: this.messages,
        toolCallId: t,
        toolResult: r
      }), m(p(this, P)).status === "submitted" || m(p(this, P)).status === "streaming")
        return;
      const n = this.messages[this.messages.length - 1];
      Bn(n) && await p(this, ce).call(this, { messages: this.messages });
    });
    D(this, ce, async (t) => {
      var a;
      m(p(this, P)).status = "submitted", m(p(this, P)).error = void 0;
      const r = Pr(t.messages), n = r.length, s = Jt((a = r[r.length - 1]) == null ? void 0 : a.toolInvocations);
      try {
        const l = new AbortController();
        ue(this, Ee, l), this.messages = r;
        const i = p(this, O).sendExtraMessageFields ? r : r.map(({
          role: u,
          content: c,
          experimental_attachments: f,
          data: d,
          annotations: h,
          toolInvocations: g,
          parts: b
        }) => ({
          role: u,
          content: c,
          ...f !== void 0 && { experimental_attachments: f },
          ...d !== void 0 && { data: d },
          ...h !== void 0 && { annotations: h },
          ...g !== void 0 && { toolInvocations: g },
          ...b !== void 0 && { parts: b }
        })), o = this.data ?? [];
        await si({
          api: m(p(this, _t)),
          body: {
            id: this.id,
            messages: i,
            data: t.data,
            ...mr(p(this, O).body),
            ...t.body
          },
          streamProtocol: m(p(this, bt)),
          credentials: p(this, O).credentials,
          headers: {
            ...p(this, O).headers,
            ...t.headers
          },
          abortController: () => l,
          restoreMessagesOnFailure: () => {
          },
          onResponse: p(this, O).onResponse,
          onUpdate: ({ message: u, data: c, replaceLastMessage: f }) => {
            m(p(this, P)).status = "streaming", this.messages = r, f ? this.messages[this.messages.length - 1] = u : this.messages.push(u), c != null && c.length && (this.data = o, this.data.push(...c));
          },
          onToolCall: p(this, O).onToolCall,
          onFinish: p(this, O).onFinish,
          generateId: m(p(this, we)),
          fetch: p(this, O).fetch,
          // callChatApi calls structuredClone on the message
          lastMessage: mr(this.messages[this.messages.length - 1])
        }), ue(this, Ee, void 0), m(p(this, P)).status = "ready";
      } catch (l) {
        if (Ea(l))
          return;
        const i = l instanceof Error ? l : new Error(String(l));
        p(this, O).onError && p(this, O).onError(i), m(p(this, P)).status = "error", m(p(this, P)).error = i;
      }
      ai({
        originalMaxToolInvocationStep: s,
        originalMessageCount: n,
        maxSteps: m(p(this, mt)),
        messages: this.messages
      }) && await p(this, ce).call(this, { messages: this.messages });
    });
    ci() ? R(p(this, Oe), di(), !0) : R(p(this, Oe), new fi(), !0), ue(this, O, t), this.messages = t.initialMessages ?? [], this.input = t.initialInput ?? "";
  }
  get id() {
    return m(p(this, nt));
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
    return m(p(this, P)).data;
  }
  set data(t) {
    m(p(this, P)).data = t;
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
    return m(p(this, P)).status;
  }
  /** The error object of the API request */
  get error() {
    return m(p(this, P)).error;
  }
  get input() {
    return m(p(this, st));
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
    return m(p(this, P)).messages;
  }
  set messages(t) {
    Fe(() => m(p(this, P)).messages = Pr(t));
  }
}
O = new WeakMap(), _t = new WeakMap(), we = new WeakMap(), mt = new WeakMap(), bt = new WeakMap(), Oe = new WeakMap(), nt = new WeakMap(), P = new WeakMap(), Ee = new WeakMap(), st = new WeakMap(), ce = new WeakMap();
var hi = /* @__PURE__ */ $t('<div class="message-text svelte-1f52vz9"> </div>'), pi = /* @__PURE__ */ $t('<li><div class="message-role svelte-1f52vz9"> </div> <div class="message-content svelte-1f52vz9"></div></li>'), vi = /* @__PURE__ */ $t('<span class="loading-spinner svelte-1f52vz9"></span>'), gi = /* @__PURE__ */ $t('<div class="valis-conversation svelte-1f52vz9"><div class="messages-container svelte-1f52vz9"><ul class="messages-list svelte-1f52vz9"></ul></div> <form class="input-form svelte-1f52vz9"><div class="input-container svelte-1f52vz9"><textarea class="message-input svelte-1f52vz9" placeholder="Type your message..." rows="3"></textarea></div> <div class="input-actions-container svelte-1f52vz9"><button class="send-button svelte-1f52vz9" type="submit"><!></button></div></form></div>');
const _i = {
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
function mi(e, t) {
  Kr(t, !0), Qs(e, _i);
  let r = sa(t, "conversationId"), n;
  const s = () => {
    const _ = document.querySelector("valis-conversation");
    _ && (console.log("Updating props from attributes..."), _.hasAttribute("conversation-id") && (r(_.getAttribute("conversation-id") || ""), console.log("Set conversationId to:", r())));
  };
  Ws(() => {
    console.log("Component mounted, initializing..."), s();
    const _ = document.querySelector("valis-conversation");
    _ ? (new MutationObserver((I) => {
      let S = !1;
      I.forEach((w) => {
        if (w.type === "attributes") {
          const v = w.attributeName;
          v && ["conversation-id"].includes(v) && (S = !0, console.log("Attribute changed:", v, "New value:", _.getAttribute(v)));
        }
      }), S && (console.log("Attributes changed, updating props..."), s());
    }).observe(_, {
      attributes: !0,
      attributeFilter: ["conversation-id"]
    }), console.log("MutationObserver set up to watch for attribute changes")) : console.log("Element not found!");
  });
  let a = /* @__PURE__ */ L(ye(new Fr({
    id: r(),
    api: `https://ai.valis.jala.university/api/v1/chat/completions/conversations/${r()}`,
    sendExtraMessageFields: !0,
    body: { stream: !0 },
    onError: (_) => {
      console.error(_);
    },
    onFinish: async () => {
      console.log("onFinish");
    }
  })));
  Lt(() => {
    m(a).status !== "submitted" && m(a).status !== "streaming" && setTimeout(() => n == null ? void 0 : n.focus(), 200);
  }), Lt(() => {
    r() && (console.log("conversationId changed, updating chat instance:", r()), R(
      a,
      new Fr({
        id: r(),
        api: `https://ai.valis.jala.university/api/v1/chat/completions/conversations/${r()}`,
        sendExtraMessageFields: !0,
        body: { stream: !0 },
        onError: (_) => {
          console.error(_);
        },
        onFinish: async () => {
          console.log("onFinish");
        }
      }),
      !0
    ));
  });
  var l = gi(), i = te(l), o = te(i);
  Sr(o, 21, () => m(a).messages, $r, (_, y) => {
    var I = pi(), S = te(I), w = te(S, !0);
    W(S);
    var v = Nt(S, 2);
    Sr(v, 21, () => m(y).parts, $r, (E, C) => {
      var x = Us(), _e = ys(x);
      {
        var Vn = (St) => {
          var At = hi(), Jn = te(At, !0);
          W(At), Rt(() => xr(Jn, m(C).text)), be(St, At);
        };
        Tr(_e, (St) => {
          m(C).type === "text" && St(Vn);
        });
      }
      be(E, x);
    }), W(v), W(I), Rt(() => {
      ta(I, 1, `message-item ${m(y).role ?? ""}`, "svelte-1f52vz9"), xr(w, m(y).role);
    }), be(_, I);
  }), W(o), W(i);
  var u = Nt(i, 2), c = te(u), f = te(c);
  Ms(f), na(f, (_) => n = _, () => n), W(c);
  var d = Nt(c, 2), h = te(d), g = te(h);
  {
    var b = (_) => {
      var y = vi();
      be(_, y);
    }, $ = (_) => {
      var y = Js("Send");
      be(_, y);
    };
    Tr(g, (_) => {
      m(a).status === "submitted" || m(a).status === "streaming" ? _(b) : _($, !1);
    });
  }
  return W(h), W(d), W(u), W(l), Rt(() => h.disabled = m(a).status === "submitted" || m(a).status === "streaming"), Bs("submit", u, function(..._) {
    var y;
    (y = m(a).handleSubmit) == null || y.apply(this, _);
  }), ra(f, () => m(a).input, (_) => m(a).input = _), be(e, l), Wr({
    get conversationId() {
      return r();
    },
    set conversationId(_) {
      r(_), wn();
    }
  });
}
customElements.define("valis-conversation", la(mi, { conversationId: {} }, [], [], !0));
export {
  mi as default
};
