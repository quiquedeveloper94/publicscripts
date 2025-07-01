var De = Object.defineProperty;
var Lt = (t) => {
  throw TypeError(t);
};
var Pe = (t, e, r) =>
  e in t
    ? De(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var O = (t, e, r) => Pe(t, typeof e != "symbol" ? e + "" : e, r),
  Ft = (t, e, r) => e.has(t) || Lt("Cannot " + r);
var y = (t, e, r) => (
    Ft(t, e, "read from private field"), r ? r.call(t) : e.get(t)
  ),
  wt = (t, e, r) =>
    e.has(t)
      ? Lt("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, r),
  pt = (t, e, r, n) => (
    Ft(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r
  );
const Ie = "5";
var Wt;
typeof window < "u" &&
  (
    (Wt = window.__svelte ?? (window.__svelte = {})).v ??
    (Wt.v = /* @__PURE__ */ new Set())
  ).add(Ie);
const Le = 2,
  Fe = "[",
  Me = "]",
  ft = {},
  m = Symbol(),
  je = "http://www.w3.org/1999/xhtml",
  Mt = !1;
var Gt = Array.isArray,
  qe = Array.prototype.indexOf,
  He = Array.from,
  ot = Object.keys,
  ct = Object.defineProperty,
  z = Object.getOwnPropertyDescriptor,
  Be = Object.getOwnPropertyDescriptors,
  Ye = Object.prototype,
  Ue = Array.prototype,
  Jt = Object.getPrototypeOf,
  jt = Object.isExtensible;
function Zt(t) {
  for (var e = 0; e < t.length; e++) t[e]();
}
const N = 2,
  zt = 4,
  $t = 8,
  St = 16,
  U = 32,
  V = 64,
  Ct = 128,
  T = 256,
  _t = 512,
  k = 1024,
  I = 2048,
  K = 4096,
  vt = 8192,
  Rt = 16384,
  Qt = 32768,
  Ve = 65536,
  qt = 1 << 18,
  Ke = 1 << 19,
  Xt = 1 << 20,
  Et = 1 << 21,
  yt = Symbol("$state"),
  We = Symbol("legacy props"),
  Ht = 8;
function te(t) {
  return t === this.v;
}
function Ge(t, e) {
  return t != t
    ? e == e
    : t !== e || (t !== null && typeof t == "object") || typeof t == "function";
}
function Je(t) {
  return !Ge(t, this.v);
}
function Ze() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ze() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Qe() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xe() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function tr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let er = !1,
  L = null;
function Bt(t) {
  L = t;
}
function ee(t, e = !1, r) {
  var n = (L = {
    p: L,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null,
  });
  ur(() => {
    n.d = !0;
  });
}
function re(t) {
  const e = L;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const f = e.e;
    if (f !== null) {
      var r = $,
        n = h;
      e.e = null;
      try {
        for (var s = 0; s < f.length; s++) {
          var l = f[s];
          Q(l.effect), q(l.reaction), or(l.fn);
        }
      } finally {
        Q(r), q(n);
      }
    }
    (L = e.p), (e.m = !0);
  }
  return t || /** @type {T} */ {};
}
function ne() {
  return !0;
}
function X(t) {
  if (typeof t != "object" || t === null || yt in t) return t;
  const e = Jt(t);
  if (e !== Ye && e !== Ue) return t;
  var r = /* @__PURE__ */ new Map(),
    n = Gt(t),
    s = /* @__PURE__ */ F(0),
    l = h,
    f = (i) => {
      var u = h;
      q(l);
      var a = i();
      return q(u), a;
    };
  return (
    n &&
      r.set(
        "length",
        /* @__PURE__ */ F(
          /** @type {any[]} */
          t.length
        )
      ),
    new Proxy(
      /** @type {any} */
      t,
      {
        defineProperty(i, u, a) {
          (!("value" in a) ||
            a.configurable === !1 ||
            a.enumerable === !1 ||
            a.writable === !1) &&
            Qe();
          var _ = r.get(u);
          return (
            _ === void 0
              ? (_ = f(() => {
                  var o = /* @__PURE__ */ F(a.value);
                  return r.set(u, o), o;
                }))
              : S(_, a.value, !0),
            !0
          );
        },
        deleteProperty(i, u) {
          var a = r.get(u);
          if (a === void 0) {
            if (u in i) {
              const c = f(() => /* @__PURE__ */ F(m));
              r.set(u, c), mt(s);
            }
          } else {
            if (n && typeof u == "string") {
              var _ =
                  /** @type {Source<number>} */
                  r.get("length"),
                o = Number(u);
              Number.isInteger(o) && o < _.v && S(_, o);
            }
            S(a, m), mt(s);
          }
          return !0;
        },
        get(i, u, a) {
          var v;
          if (u === yt) return t;
          var _ = r.get(u),
            o = u in i;
          if (
            (_ === void 0 &&
              (!o || ((v = z(i, u)) != null && v.writable)) &&
              ((_ = f(() => {
                var d = X(o ? i[u] : m),
                  w = /* @__PURE__ */ F(d);
                return w;
              })),
              r.set(u, _)),
            _ !== void 0)
          ) {
            var c = A(_);
            return c === m ? void 0 : c;
          }
          return Reflect.get(i, u, a);
        },
        getOwnPropertyDescriptor(i, u) {
          var a = Reflect.getOwnPropertyDescriptor(i, u);
          if (a && "value" in a) {
            var _ = r.get(u);
            _ && (a.value = A(_));
          } else if (a === void 0) {
            var o = r.get(u),
              c = o == null ? void 0 : o.v;
            if (o !== void 0 && c !== m)
              return {
                enumerable: !0,
                configurable: !0,
                value: c,
                writable: !0,
              };
          }
          return a;
        },
        has(i, u) {
          var c;
          if (u === yt) return !0;
          var a = r.get(u),
            _ = (a !== void 0 && a.v !== m) || Reflect.has(i, u);
          if (
            a !== void 0 ||
            ($ !== null && (!_ || ((c = z(i, u)) != null && c.writable)))
          ) {
            a === void 0 &&
              ((a = f(() => {
                var v = _ ? X(i[u]) : m,
                  d = /* @__PURE__ */ F(v);
                return d;
              })),
              r.set(u, a));
            var o = A(a);
            if (o === m) return !1;
          }
          return _;
        },
        set(i, u, a, _) {
          var H;
          var o = r.get(u),
            c = u in i;
          if (n && u === "length")
            for (var v = a; v < /** @type {Source<number>} */ o.v; v += 1) {
              var d = r.get(v + "");
              d !== void 0
                ? S(d, m)
                : v in i &&
                  ((d = f(() => /* @__PURE__ */ F(m))), r.set(v + "", d));
            }
          if (o === void 0)
            (!c || ((H = z(i, u)) != null && H.writable)) &&
              ((o = f(() => /* @__PURE__ */ F(void 0))),
              S(o, X(a)),
              r.set(u, o));
          else {
            c = o.v !== m;
            var w = f(() => X(a));
            S(o, w);
          }
          var G = Reflect.getOwnPropertyDescriptor(i, u);
          if ((G != null && G.set && G.set.call(_, a), !c)) {
            if (n && typeof u == "string") {
              var lt =
                  /** @type {Source<number>} */
                  r.get("length"),
                J = Number(u);
              Number.isInteger(J) && J >= lt.v && S(lt, J + 1);
            }
            mt(s);
          }
          return !0;
        },
        ownKeys(i) {
          A(s);
          var u = Reflect.ownKeys(i).filter((o) => {
            var c = r.get(o);
            return c === void 0 || c.v !== m;
          });
          for (var [a, _] of r) _.v !== m && !(a in i) && u.push(a);
          return u;
        },
        setPrototypeOf() {
          Xe();
        },
      }
    )
  );
}
function mt(t, e = 1) {
  S(t, t.v + e);
}
// @__NO_SIDE_EFFECTS__
function se(t) {
  var e = N | I,
    r =
      h !== null && (h.f & N) !== 0
        ? /** @type {Derived} */
          h
        : null;
  return (
    $ === null || (r !== null && (r.f & T) !== 0) ? (e |= T) : ($.f |= Xt),
    {
      ctx: L,
      deps: null,
      effects: null,
      equals: te,
      f: e,
      fn: t,
      reactions: null,
      rv: 0,
      v:
        /** @type {V} */
        null,
      wv: 0,
      parent: r ?? $,
    }
  );
}
function le(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      j(
        /** @type {Effect} */
        e[r]
      );
  }
}
function rr(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & N) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ie(t) {
  var e,
    r = $;
  Q(rr(t));
  try {
    le(t), (e = Te(t));
  } finally {
    Q(r);
  }
  return e;
}
function ue(t) {
  var e = ie(t);
  if ((t.equals(e) || ((t.v = e), (t.wv = be())), !st)) {
    var r = (M || (t.f & T) !== 0) && t.deps !== null ? K : k;
    D(t, r);
  }
}
const et = /* @__PURE__ */ new Map();
function fe(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: te,
    rv: 0,
    wv: 0,
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function F(t, e) {
  const r = fe(t);
  return br(r), r;
}
// @__NO_SIDE_EFFECTS__
function ae(t, e = !1, r = !0) {
  const n = fe(t);
  return e || (n.equals = Je), n;
}
function S(t, e, r = !1) {
  h !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
    // to ensure we error if state is set inside an inspect effect
    (!C || (h.f & qt) !== 0) &&
    ne() &&
    (h.f & (N | St | qt)) !== 0 &&
    !(g != null && g[1].includes(t) && g[0] === h) &&
    tr();
  let n = r ? X(e) : e;
  return nr(t, n);
}
function nr(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    st ? et.set(t, e) : et.set(t, r),
      (t.v = e),
      (t.f & N) !== 0 &&
        ((t.f & I) !== 0 &&
          ie(
            /** @type {Derived} */
            t
          ),
        D(t, (t.f & T) === 0 ? k : K)),
      (t.wv = be()),
      oe(t, I),
      $ !== null &&
        ($.f & k) !== 0 &&
        ($.f & (U | V)) === 0 &&
        (b === null ? xr([t]) : b.push(t));
  }
  return e;
}
function oe(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var l = r[s],
        f = l.f;
      (f & I) === 0 &&
        (D(l, e),
        (f & (k | T)) !== 0 &&
          ((f & N) !== 0
            ? oe(
                /** @type {Derived} */
                l,
                K
              )
            : It(
                /** @type {Effect} */
                l
              )));
    }
}
function ce(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Y = !1;
function it(t) {
  Y = t;
}
let R;
function bt(t) {
  if (t === null) throw (ce(), ft);
  return (R = t);
}
function _e() {
  return bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Dt(R)
  );
}
var Yt, ve, he, de;
function xt() {
  if (Yt === void 0) {
    (Yt = window), (ve = /Firefox/.test(navigator.userAgent));
    var t = Element.prototype,
      e = Node.prototype,
      r = Text.prototype;
    (he = z(e, "firstChild").get),
      (de = z(e, "nextSibling").get),
      jt(t) &&
        ((t.__click = void 0),
        (t.__className = void 0),
        (t.__attributes = null),
        (t.__style = void 0),
        (t.__e = void 0)),
      jt(r) && (r.__t = void 0);
  }
}
function sr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function $e(t) {
  return he.call(t);
}
// @__NO_SIDE_EFFECTS__
function Dt(t) {
  return de.call(t);
}
function lr(t) {
  t.textContent = "";
}
function ir(t, e) {
  var r = e.last;
  r === null
    ? (e.last = e.first = t)
    : ((r.next = t), (t.prev = r), (e.last = t));
}
function W(t, e, r, n = !0) {
  var s = $,
    l = {
      ctx: L,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: t | I,
      first: null,
      fn: e,
      last: null,
      next: null,
      parent: s,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
    };
  if (r)
    try {
      Pt(l), (l.f |= Qt);
    } catch (u) {
      throw (j(l), u);
    }
  else e !== null && It(l);
  var f =
    r &&
    l.deps === null &&
    l.first === null &&
    l.nodes_start === null &&
    l.teardown === null &&
    (l.f & (Xt | Ct)) === 0;
  if (!f && n && (s !== null && ir(l, s), h !== null && (h.f & N) !== 0)) {
    var i =
      /** @type {Derived} */
      h;
    (i.effects ?? (i.effects = [])).push(l);
  }
  return l;
}
function ur(t) {
  const e = W($t, null, !1);
  return D(e, k), (e.teardown = t), e;
}
function fr(t) {
  const e = W(V, t, !0);
  return () => {
    j(e);
  };
}
function ar(t) {
  const e = W(V, t, !0);
  return (r = {}) =>
    new Promise((n) => {
      r.outro
        ? gr(e, () => {
            j(e), n(void 0);
          })
        : (j(e), n(void 0));
    });
}
function or(t) {
  return W(zt, t, !1);
}
function cr(t) {
  return W($t, t, !0);
}
function _r(t, e = [], r = se) {
  const n = e.map(r);
  return vr(() => t(...n.map(A)));
}
function vr(t, e = 0) {
  return W($t | St | e, t, !0);
}
function hr(t, e = !0) {
  return W($t | U, t, !0, e);
}
function ge(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = st,
      n = h;
    Ut(!0), q(null);
    try {
      e.call(null);
    } finally {
      Ut(r), q(n);
    }
  }
}
function we(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    (r.f & V) !== 0 ? (r.parent = null) : j(r, e), (r = n);
  }
}
function dr(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & U) === 0 && j(e), (e = r);
  }
}
function j(t, e = !0) {
  var r = !1;
  (e || (t.f & Ke) !== 0) &&
    t.nodes_start !== null &&
    t.nodes_end !== null &&
    ($r(
      t.nodes_start,
      /** @type {TemplateNode} */
      t.nodes_end
    ),
    (r = !0)),
    we(t, e && !r),
    dt(t, 0),
    D(t, Rt);
  var n = t.transitions;
  if (n !== null) for (const l of n) l.stop();
  ge(t);
  var s = t.parent;
  s !== null && s.first !== null && pe(t),
    (t.next =
      t.prev =
      t.teardown =
      t.ctx =
      t.deps =
      t.fn =
      t.nodes_start =
      t.nodes_end =
        null);
}
function $r(t, e) {
  for (; t !== null; ) {
    var r =
      t === e
        ? null
        : /** @type {TemplateNode} */
          /* @__PURE__ */ Dt(t);
    t.remove(), (t = r);
  }
}
function pe(t) {
  var e = t.parent,
    r = t.prev,
    n = t.next;
  r !== null && (r.next = n),
    n !== null && (n.prev = r),
    e !== null &&
      (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function gr(t, e) {
  var r = [];
  ye(t, r, !0),
    wr(r, () => {
      j(t), e && e();
    });
}
function wr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var s of t) s.out(n);
  } else e();
}
function ye(t, e, r) {
  if ((t.f & vt) === 0) {
    if (((t.f ^= vt), t.transitions !== null))
      for (const f of t.transitions) (f.is_global || r) && e.push(f);
    for (var n = t.first; n !== null; ) {
      var s = n.next,
        l = (n.f & Ve) !== 0 || (n.f & U) !== 0;
      ye(n, e, l ? r : !1), (n = s);
    }
  }
}
let Tt = [],
  Nt = [];
function pr() {
  var t = Tt;
  (Tt = []), Zt(t);
}
function yr() {
  var t = Nt;
  (Nt = []), Zt(t);
}
function mr() {
  Tt.length > 0 && pr(), Nt.length > 0 && yr();
}
function Er(t) {
  var e =
    /** @type {Effect} */
    $;
  if ((e.f & Qt) === 0) {
    if ((e.f & Ct) === 0) throw t;
    e.fn(t);
  } else me(t, e);
}
function me(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ct) !== 0)
      try {
        e.fn(t);
        return;
      } catch {}
    e = e.parent;
  }
  throw t;
}
let rt = !1,
  nt = null,
  B = !1,
  st = !1;
function Ut(t) {
  st = t;
}
let tt = [];
let h = null,
  C = !1;
function q(t) {
  h = t;
}
let $ = null;
function Q(t) {
  $ = t;
}
let g = null;
function br(t) {
  h !== null && h.f & Et && (g === null ? (g = [h, [t]]) : g[1].push(t));
}
let p = null,
  E = 0,
  b = null;
function xr(t) {
  b = t;
}
let Ee = 1,
  ht = 0,
  M = !1;
function be() {
  return ++Ee;
}
function gt(t) {
  var o;
  var e = t.f;
  if ((e & I) !== 0) return !0;
  if ((e & K) !== 0) {
    var r = t.deps,
      n = (e & T) !== 0;
    if (r !== null) {
      var s,
        l,
        f = (e & _t) !== 0,
        i = n && $ !== null && !M,
        u = r.length;
      if (f || i) {
        var a =
            /** @type {Derived} */
            t,
          _ = a.parent;
        for (s = 0; s < u; s++)
          (l = r[s]),
            (f ||
              !(
                (o = l == null ? void 0 : l.reactions) != null && o.includes(a)
              )) &&
              (l.reactions ?? (l.reactions = [])).push(a);
        f && (a.f ^= _t), i && _ !== null && (_.f & T) === 0 && (a.f ^= T);
      }
      for (s = 0; s < u; s++)
        if (
          ((l = r[s]),
          gt(
            /** @type {Derived} */
            l
          ) &&
            ue(
              /** @type {Derived} */
              l
            ),
          l.wv > t.wv)
        )
          return !0;
    }
    (!n || ($ !== null && !M)) && D(t, k);
  }
  return !1;
}
function xe(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var l = n[s];
      (g != null && g[1].includes(t) && g[0] === h) ||
        ((l.f & N) !== 0
          ? xe(
              /** @type {Derived} */
              l,
              e,
              !1
            )
          : e === l &&
            (r ? D(l, I) : (l.f & k) !== 0 && D(l, K),
            It(
              /** @type {Effect} */
              l
            )));
    }
}
function Te(t) {
  var v;
  var e = p,
    r = E,
    n = b,
    s = h,
    l = M,
    f = g,
    i = L,
    u = C,
    a = t.f;
  (p = /** @type {null | Value[]} */ null),
    (E = 0),
    (b = null),
    (M = (a & T) !== 0 && (C || !B || h === null)),
    (h = (a & (U | V)) === 0 ? t : null),
    (g = null),
    Bt(t.ctx),
    (C = !1),
    ht++,
    (t.f |= Et);
  try {
    var _ =
        /** @type {Function} */
        (0, t.fn)(),
      o = t.deps;
    if (p !== null) {
      var c;
      if ((dt(t, E), o !== null && E > 0))
        for (o.length = E + p.length, c = 0; c < p.length; c++) o[E + c] = p[c];
      else t.deps = o = p;
      if (
        !M || // Deriveds that already have reactions can cleanup, so we still add them as reactions
        ((a & N) !== 0 &&
          /** @type {import('#client').Derived} */
          t.reactions !== null)
      )
        for (c = E; c < o.length; c++)
          ((v = o[c]).reactions ?? (v.reactions = [])).push(t);
    } else o !== null && E < o.length && (dt(t, E), (o.length = E));
    if (ne() && b !== null && !C && o !== null && (t.f & (N | K | I)) === 0)
      for (c = 0; c < /** @type {Source[]} */ b.length; c++)
        xe(
          b[c],
          /** @type {Effect} */
          t
        );
    return (
      s !== null &&
        s !== t &&
        (ht++,
        b !== null &&
          (n === null ? (n = b) : n.push(.../** @type {Source[]} */ b))),
      _
    );
  } catch (d) {
    Er(d);
  } finally {
    (p = e),
      (E = r),
      (b = n),
      (h = s),
      (M = l),
      (g = f),
      Bt(i),
      (C = u),
      (t.f ^= Et);
  }
}
function Tr(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = qe.call(r, t);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? (r = e.reactions = null) : ((r[n] = r[s]), r.pop());
    }
  }
  r === null &&
    (e.f & N) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (p === null || !p.includes(e)) &&
    (D(e, K),
    (e.f & (T | _t)) === 0 && (e.f ^= _t),
    le(
      /** @type {Derived} **/
      e
    ),
    dt(
      /** @type {Derived} **/
      e,
      0
    ));
}
function dt(t, e) {
  var r = t.deps;
  if (r !== null) for (var n = e; n < r.length; n++) Tr(t, r[n]);
}
function Pt(t) {
  var e = t.f;
  if ((e & Rt) === 0) {
    D(t, k);
    var r = $,
      n = B;
    ($ = t), (B = !0);
    try {
      (e & St) !== 0 ? dr(t) : we(t), ge(t);
      var s = Te(t);
      (t.teardown = typeof s == "function" ? s : null), (t.wv = Ee);
      var l;
      Mt && er && (t.f & I) !== 0 && t.deps;
    } finally {
      (B = n), ($ = r);
    }
  }
}
function Nr() {
  try {
    Ze();
  } catch (t) {
    if (nt !== null) me(t, nt);
    else throw t;
  }
}
function Ne() {
  var t = B;
  try {
    var e = 0;
    for (B = !0; tt.length > 0; ) {
      e++ > 1e3 && Nr();
      var r = tt,
        n = r.length;
      tt = [];
      for (var s = 0; s < n; s++) {
        var l = Or(r[s]);
        kr(l);
      }
      et.clear();
    }
  } finally {
    (rt = !1), (B = t), (nt = null);
  }
}
function kr(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      (n.f & (Rt | vt)) === 0 &&
        gt(n) &&
        (Pt(n),
        n.deps === null &&
          n.first === null &&
          n.nodes_start === null &&
          (n.teardown === null ? pe(n) : (n.fn = null)));
    }
}
function It(t) {
  rt || ((rt = !0), queueMicrotask(Ne));
  for (var e = (nt = t); e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if ((r & (V | U)) !== 0) {
      if ((r & k) === 0) return;
      e.f ^= k;
    }
  }
  tt.push(e);
}
function Or(t) {
  for (var e = [], r = t; r !== null; ) {
    var n = r.f,
      s = (n & (U | V)) !== 0,
      l = s && (n & k) !== 0;
    if (!l && (n & vt) === 0) {
      (n & zt) !== 0 ? e.push(r) : s ? (r.f ^= k) : gt(r) && Pt(r);
      var f = r.first;
      if (f !== null) {
        r = f;
        continue;
      }
    }
    var i = r.parent;
    for (r = r.next; r === null && i !== null; ) (r = i.next), (i = i.parent);
  }
  return e;
}
function ke(t) {
  for (var e; ; ) {
    if ((mr(), tt.length === 0))
      return (rt = !1), (nt = null), /** @type {T} */ e;
    (rt = !0), Ne();
  }
}
function A(t) {
  var e = t.f,
    r = (e & N) !== 0;
  if (h !== null && !C) {
    if (!(g != null && g[1].includes(t)) || g[0] !== h) {
      var n = h.deps;
      t.rv < ht &&
        ((t.rv = ht),
        p === null && n !== null && n[E] === t
          ? E++
          : p === null
          ? (p = [t])
          : (!M || !p.includes(t)) && p.push(t));
    }
  } else if (
    r &&
    /** @type {Derived} */
    t.deps === null &&
    /** @type {Derived} */
    t.effects === null
  ) {
    var s =
        /** @type {Derived} */
        t,
      l = s.parent;
    l !== null && (l.f & T) === 0 && (s.f ^= T);
  }
  return (
    r && ((s = /** @type {Derived} */ t), gt(s) && ue(s)),
    st && et.has(t) ? et.get(t) : t.v
  );
}
function Ar(t) {
  var e = C;
  try {
    return (C = !0), t();
  } finally {
    C = e;
  }
}
const Sr = -7169;
function D(t, e) {
  t.f = (t.f & Sr) | e;
}
const Oe = /* @__PURE__ */ new Set(),
  kt = /* @__PURE__ */ new Set();
function Cr(t) {
  for (var e = 0; e < t.length; e++) Oe.add(t[e]);
  for (var r of kt) r(t);
}
function ut(t) {
  var J;
  var e = this,
    r =
      /** @type {Node} */
      e.ownerDocument,
    n = t.type,
    s = ((J = t.composedPath) == null ? void 0 : J.call(t)) || [],
    l =
      /** @type {null | Element} */
      s[0] || t.target,
    f = 0,
    i = t.__root;
  if (i) {
    var u = s.indexOf(i);
    if (u !== -1 && (e === document || e === /** @type {any} */ window)) {
      t.__root = e;
      return;
    }
    var a = s.indexOf(e);
    if (a === -1) return;
    u <= a && (f = u);
  }
  if (((l = /** @type {Element} */ s[f] || t.target), l !== e)) {
    ct(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      },
    });
    var _ = h,
      o = $;
    q(null), Q(null);
    try {
      for (var c, v = []; l !== null; ) {
        var d =
          l.assignedSlot || l.parentNode || /** @type {any} */ l.host || null;
        try {
          var w = l["__" + n];
          if (
            w != null &&
            (!(/** @type {any} */ l.disabled) || // DOM could've been updated already by the time this is reached, so we check this as well
              // -> the target could not have been disabled because it emits the event in the first place
              t.target === l)
          )
            if (Gt(w)) {
              var [G, ...lt] = w;
              G.apply(l, [t, ...lt]);
            } else w.call(l, t);
        } catch (H) {
          c ? v.push(H) : (c = H);
        }
        if (t.cancelBubble || d === e || d === null) break;
        l = d;
      }
      if (c) {
        for (let H of v)
          queueMicrotask(() => {
            throw H;
          });
        throw c;
      }
    } finally {
      (t.__root = e), delete t.currentTarget, q(_), Q(o);
    }
  }
}
function Rr(t) {
  var e = document.createElement("template");
  return (e.innerHTML = t.replaceAll("<!>", "<!---->")), e.content;
}
function Ot(t, e) {
  var r =
    /** @type {Effect} */
    $;
  r.nodes_start === null && ((r.nodes_start = t), (r.nodes_end = e));
}
// @__NO_SIDE_EFFECTS__
function Dr(t, e) {
  var r = (e & Le) !== 0,
    n,
    s = !t.startsWith("<!>");
  return () => {
    if (Y) return Ot(R, null), R;
    n === void 0 &&
      ((n = Rr(s ? t : "<!>" + t)),
      (n = /** @type {Node} */ /* @__PURE__ */ $e(n)));
    var l =
      /** @type {TemplateNode} */
      r || ve ? document.importNode(n, !0) : n.cloneNode(!0);
    return Ot(l, l), l;
  };
}
function Ae(t, e) {
  if (Y) {
    ($.nodes_end = R), _e();
    return;
  }
  t !== null &&
    t.before(
      /** @type {Node} */
      e
    );
}
const Pr = ["touchstart", "touchmove"];
function Ir(t) {
  return Pr.includes(t);
}
function Se(t, e) {
  return Ce(t, e);
}
function Lr(t, e) {
  xt(), (e.intro = e.intro ?? !1);
  const r = e.target,
    n = Y,
    s = R;
  try {
    for (
      var l =
        /** @type {TemplateNode} */
        /* @__PURE__ */ $e(r);
      l && (l.nodeType !== Ht || /** @type {Comment} */ l.data !== Fe);

    )
      l = /** @type {TemplateNode} */ /* @__PURE__ */ Dt(l);
    if (!l) throw ft;
    it(!0),
      bt(
        /** @type {Comment} */
        l
      ),
      _e();
    const f = Ce(t, { ...e, anchor: l });
    if (R === null || R.nodeType !== Ht || /** @type {Comment} */ R.data !== Me)
      throw (ce(), ft);
    return it(!1), /**  @type {Exports} */ f;
  } catch (f) {
    if (f === ft)
      return e.recover === !1 && ze(), xt(), lr(r), it(!1), Se(t, e);
    throw f;
  } finally {
    it(n), bt(s);
  }
}
const Z = /* @__PURE__ */ new Map();
function Ce(
  t,
  { target: e, anchor: r, props: n = {}, events: s, context: l, intro: f = !0 }
) {
  xt();
  var i = /* @__PURE__ */ new Set(),
    u = (o) => {
      for (var c = 0; c < o.length; c++) {
        var v = o[c];
        if (!i.has(v)) {
          i.add(v);
          var d = Ir(v);
          e.addEventListener(v, ut, { passive: d });
          var w = Z.get(v);
          w === void 0
            ? (document.addEventListener(v, ut, { passive: d }), Z.set(v, 1))
            : Z.set(v, w + 1);
        }
      }
    };
  u(He(Oe)), kt.add(u);
  var a = void 0,
    _ = ar(() => {
      var o = r ?? e.appendChild(sr());
      return (
        hr(() => {
          if (l) {
            ee({});
            var c =
              /** @type {ComponentContext} */
              L;
            c.c = l;
          }
          s && (n.$$events = s),
            Y &&
              Ot(
                /** @type {TemplateNode} */
                o,
                null
              ),
            (a = t(o, n) || {}),
            Y && ($.nodes_end = R),
            l && re();
        }),
        () => {
          var d;
          for (var c of i) {
            e.removeEventListener(c, ut);
            var v =
              /** @type {number} */
              Z.get(c);
            --v === 0
              ? (document.removeEventListener(c, ut), Z.delete(c))
              : Z.set(c, v);
          }
          kt.delete(u),
            o !== r && ((d = o.parentNode) == null || d.removeChild(o));
        }
      );
    });
  return At.set(a, _), a;
}
let At = /* @__PURE__ */ new WeakMap();
function Fr(t, e) {
  const r = At.get(t);
  return r ? (At.delete(t), r(e)) : Promise.resolve();
}
const Mr = Symbol("is custom element"),
  jr = Symbol("is html");
function qr(t, e, r, n) {
  var s = Hr(t);
  (Y && ((s[e] = t.getAttribute(e)), t.nodeName === "LINK")) ||
    (s[e] !== (s[e] = r) &&
      (r == null
        ? t.removeAttribute(e)
        : typeof r != "string" && Br(t).includes(e)
        ? (t[e] = r)
        : t.setAttribute(e, r)));
}
function Hr(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??
    (t.__attributes = {
      [Mr]: t.nodeName.includes("-"),
      [jr]: t.namespaceURI === je,
    })
  );
}
var Vt = /* @__PURE__ */ new Map();
function Br(t) {
  var e = Vt.get(t.nodeName);
  if (e) return e;
  Vt.set(t.nodeName, (e = []));
  for (var r, n = t, s = Element.prototype; s !== n; ) {
    r = Be(n);
    for (var l in r) r[l].set && e.push(l);
    n = Jt(n);
  }
  return e;
}
function Kt(t) {
  var e;
  return ((e = t.ctx) == null ? void 0 : e.d) ?? !1;
}
function Yr(t, e, r, n) {
  var s;
  s = /** @type {V} */ t[e];
  var l =
      /** @type {V} */
      n,
    f = !0,
    i = !1,
    u = () => ((i = !0), f && ((f = !1), (l = /** @type {V} */ n)), l);
  s === void 0 && n !== void 0 && (s = u());
  var a;
  a = () => {
    var v =
      /** @type {V} */
      t[e];
    return v === void 0 ? u() : ((f = !0), (i = !1), v);
  };
  var _ = !1,
    o = /* @__PURE__ */ ae(s),
    c = /* @__PURE__ */ se(() => {
      var v = a(),
        d = A(o);
      return _ ? ((_ = !1), d) : (o.v = v);
    });
  return function (v, d) {
    if (arguments.length > 0) {
      const w = d ? A(c) : v;
      if (!c.equals(w)) {
        if (((_ = !0), S(o, w), i && l !== void 0 && (l = w), Kt(c))) return v;
        Ar(() => A(c));
      }
      return v;
    }
    return Kt(c) ? c.v : A(c);
  };
}
function Ur(t) {
  return new Vr(t);
}
var P, x;
class Vr {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    wt(this, P);
    /** @type {Record<string, any>} */
    wt(this, x);
    var l;
    var r = /* @__PURE__ */ new Map(),
      n = (f, i) => {
        var u = /* @__PURE__ */ ae(i, !1, !1);
        return r.set(f, u), u;
      };
    const s = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get(f, i) {
          return A(r.get(i) ?? n(i, Reflect.get(f, i)));
        },
        has(f, i) {
          return i === We
            ? !0
            : (A(r.get(i) ?? n(i, Reflect.get(f, i))), Reflect.has(f, i));
        },
        set(f, i, u) {
          return S(r.get(i) ?? n(i, u), u), Reflect.set(f, i, u);
        },
      }
    );
    pt(
      this,
      x,
      (e.hydrate ? Lr : Se)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: s,
        context: e.context,
        intro: e.intro ?? !1,
        recover: e.recover,
      })
    ),
      (!((l = e == null ? void 0 : e.props) != null && l.$$host) ||
        e.sync === !1) &&
        ke(),
      pt(this, P, s.$$events);
    for (const f of Object.keys(y(this, x)))
      f === "$set" ||
        f === "$destroy" ||
        f === "$on" ||
        ct(this, f, {
          get() {
            return y(this, x)[f];
          },
          /** @param {any} value */
          set(i) {
            y(this, x)[f] = i;
          },
          enumerable: !0,
        });
    (y(this, x).$set =
      /** @param {Record<string, any>} next */
      (f) => {
        Object.assign(s, f);
      }),
      (y(this, x).$destroy = () => {
        Fr(y(this, x));
      });
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    y(this, x).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    y(this, P)[e] = y(this, P)[e] || [];
    const n = (...s) => r.call(this, ...s);
    return (
      y(this, P)[e].push(n),
      () => {
        y(this, P)[e] = y(this, P)[e].filter(
          /** @param {any} fn */
          (s) => s !== n
        );
      }
    );
  }
  $destroy() {
    y(this, x).$destroy();
  }
}
(P = new WeakMap()), (x = new WeakMap());
let Re;
typeof HTMLElement == "function" &&
  (Re = class extends HTMLElement {
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {*} use_shadow_dom
     */
    constructor(e, r, n) {
      super();
      /** The Svelte component constructor */
      O(this, "$$ctor");
      /** Slots */
      O(this, "$$s");
      /** @type {any} The Svelte component instance */
      O(this, "$$c");
      /** Whether or not the custom element is connected */
      O(this, "$$cn", !1);
      /** @type {Record<string, any>} Component props data */
      O(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      O(this, "$$r", !1);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      O(this, "$$p_d", {});
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      O(this, "$$l", {});
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      O(this, "$$l_u", /* @__PURE__ */ new Map());
      /** @type {any} The managed render effect for reflecting attributes */
      O(this, "$$me");
      (this.$$ctor = e),
        (this.$$s = r),
        n && this.attachShadow({ mode: "open" });
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(e, r, n) {
      if (((this.$$l[e] = this.$$l[e] || []), this.$$l[e].push(r), this.$$c)) {
        const s = this.$$c.$on(e, r);
        this.$$l_u.set(r, s);
      }
      super.addEventListener(e, r, n);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(e, r, n) {
      if ((super.removeEventListener(e, r, n), this.$$c)) {
        const s = this.$$l_u.get(r);
        s && (s(), this.$$l_u.delete(r));
      }
    }
    async connectedCallback() {
      if (((this.$$cn = !0), !this.$$c)) {
        let e = function (s) {
          return (l) => {
            const f = document.createElement("slot");
            s !== "default" && (f.name = s), Ae(l, f);
          };
        };
        if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
        const r = {},
          n = Kr(this);
        for (const s of this.$$s)
          s in n &&
            (s === "default" && !this.$$d.children
              ? ((this.$$d.children = e(s)), (r.default = !0))
              : (r[s] = e(s)));
        for (const s of this.attributes) {
          const l = this.$$g_p(s.name);
          l in this.$$d || (this.$$d[l] = at(l, s.value, this.$$p_d, "toProp"));
        }
        for (const s in this.$$p_d)
          !(s in this.$$d) &&
            this[s] !== void 0 &&
            ((this.$$d[s] = this[s]), delete this[s]);
        (this.$$c = Ur({
          component: this.$$ctor,
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots: r,
            $$host: this,
          },
        })),
          (this.$$me = fr(() => {
            cr(() => {
              var s;
              this.$$r = !0;
              for (const l of ot(this.$$c)) {
                if (!((s = this.$$p_d[l]) != null && s.reflect)) continue;
                this.$$d[l] = this.$$c[l];
                const f = at(l, this.$$d[l], this.$$p_d, "toAttribute");
                f == null
                  ? this.removeAttribute(this.$$p_d[l].attribute || l)
                  : this.setAttribute(this.$$p_d[l].attribute || l, f);
              }
              this.$$r = !1;
            });
          }));
        for (const s in this.$$l)
          for (const l of this.$$l[s]) {
            const f = this.$$c.$on(s, l);
            this.$$l_u.set(l, f);
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
    attributeChangedCallback(e, r, n) {
      var s;
      this.$$r ||
        ((e = this.$$g_p(e)),
        (this.$$d[e] = at(e, n, this.$$p_d, "toProp")),
        (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
    }
    disconnectedCallback() {
      (this.$$cn = !1),
        Promise.resolve().then(() => {
          !this.$$cn &&
            this.$$c &&
            (this.$$c.$destroy(), this.$$me(), (this.$$c = void 0));
        });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(e) {
      return (
        ot(this.$$p_d).find(
          (r) =>
            this.$$p_d[r].attribute === e ||
            (!this.$$p_d[r].attribute && r.toLowerCase() === e)
        ) || e
      );
    }
  });
function at(t, e, r, n) {
  var l;
  const s = (l = r[t]) == null ? void 0 : l.type;
  if (
    ((e = s === "Boolean" && typeof e != "boolean" ? e != null : e),
    !n || !r[t])
  )
    return e;
  if (n === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Kr(t) {
  const e = {};
  return (
    t.childNodes.forEach((r) => {
      e[
        /** @type {Element} node */
        r.slot || "default"
      ] = !0;
    }),
    e
  );
}
function Wr(t, e, r, n, s, l) {
  let f = class extends Re {
    constructor() {
      super(t, r, s), (this.$$p_d = e);
    }
    static get observedAttributes() {
      return ot(e).map((i) => (e[i].attribute || i).toLowerCase());
    }
  };
  return (
    ot(e).forEach((i) => {
      ct(f.prototype, i, {
        get() {
          return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
        },
        set(u) {
          var o;
          (u = at(i, u, e)), (this.$$d[i] = u);
          var a = this.$$c;
          if (a) {
            var _ = (o = z(a, i)) == null ? void 0 : o.get;
            _ ? (a[i] = u) : a.$set({ [i]: u });
          }
        },
      });
    }),
    n.forEach((i) => {
      ct(f.prototype, i, {
        get() {
          var u;
          return (u = this.$$c) == null ? void 0 : u[i];
        },
      });
    }),
    (t.element = /** @type {any} */ f),
    f
  );
}
const Gr = (t, e) => {
  window.location.href = e();
};
var Jr = /* @__PURE__ */ Dr("<a>Login</a>");
function Zr(t, e) {
  ee(e, !0);
  let r = Yr(
    e,
    "url",
    7,
    "http://localhost:5050/auth/login/google?redirect=http://localhost:5173/conversations"
  );
  var n = Jr();
  return (
    (n.__click = [Gr, r]),
    _r(() => qr(n, "href", r())),
    Ae(t, n),
    re({
      get url() {
        return r();
      },
      set url(
        s = "http://localhost:5050/auth/login/google?redirect=http://localhost:5173/conversations"
      ) {
        r(s), ke();
      },
    })
  );
}
Cr(["click"]);
customElements.define("valis-login", Wr(Zr, { url: {} }, [], [], !0));
export { Zr as default };
