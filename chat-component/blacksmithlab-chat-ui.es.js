var ls = Object.defineProperty;
var Lr = (e) => {
  throw TypeError(e);
};
var us = (e, t, n) => t in e ? ls(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Y = (e, t, n) => us(e, typeof t != "symbol" ? t + "" : t, n), $r = (e, t, n) => t.has(e) || Lr("Cannot " + n);
var at = (e, t, n) => ($r(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Un = (e, t, n) => t.has(e) ? Lr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Fn = (e, t, n, r) => ($r(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const cs = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(cs);
let _e = !1, fs = !1;
function hs() {
  _e = !0;
}
hs();
const ds = 1, ps = 2, ms = 16, vs = 2, _s = 8, gs = 1, bs = 2, oi = "[", rr = "[!", ir = "]", he = {}, ut = Symbol(), Pr = !1, Et = 2, ai = 4, En = 8, sr = 16, It = 32, ge = 64, cn = 128, mt = 256, fn = 512, et = 1024, Ut = 2048, be = 4096, Pt = 8192, Tn = 16384, ys = 32768, or = 65536, Es = 1 << 17, Ts = 1 << 19, li = 1 << 20, Jt = Symbol("$state"), ui = Symbol("legacy props"), ws = Symbol("");
var ar = Array.isArray, Ss = Array.prototype.indexOf, lr = Array.from, hn = Object.keys, Ie = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, ci = Object.getOwnPropertyDescriptors, As = Object.prototype, Cs = Array.prototype, ur = Object.getPrototypeOf;
const de = () => {
};
function Rs(e) {
  return e();
}
function dn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const xs = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ue = [], Fe = [];
function fi() {
  var e = Ue;
  Ue = [], dn(e);
}
function hi() {
  var e = Fe;
  Fe = [], dn(e);
}
function di(e) {
  Ue.length === 0 && queueMicrotask(fi), Ue.push(e);
}
function ks(e) {
  Fe.length === 0 && xs(hi), Fe.push(e);
}
function Ir() {
  Ue.length > 0 && fi(), Fe.length > 0 && hi();
}
function pi(e) {
  return e === this.v;
}
function cr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function fr(e) {
  return !cr(e, this.v);
}
function Ms(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ds() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Os(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ns() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ls() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $s(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ps() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Is() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Us() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function pt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: pi,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function He(e, t = !1) {
  var r;
  const n = pt(e);
  return t || (n.equals = fr), _e && U !== null && U.l !== null && ((r = U.l).s ?? (r.s = [])).push(n), n;
}
function xe(e, t = !1) {
  return /* @__PURE__ */ Ws(/* @__PURE__ */ He(e, t));
}
// @__NO_SIDE_EFFECTS__
function Ws(e) {
  return D !== null && !bt && (D.f & Et) !== 0 && (At === null ? zs([e]) : At.push(e)), e;
}
function z(e, t) {
  return D !== null && !bt && je() && (D.f & (Et | sr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (At === null || !At.includes(e)) && Fs(), mi(e, t);
}
function mi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ai(), vi(e, Ut), je() && M !== null && (M.f & et) !== 0 && (M.f & (It | ge)) === 0 && (Nt === null ? Gs([e]) : Nt.push(e))), t;
}
function vi(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = je(), i = n.length, s = 0; s < i; s++) {
      var o = n[s], l = o.f;
      (l & Ut) === 0 && (!r && o === M || (Ct(o, t), (l & (et | mt)) !== 0 && ((l & Et) !== 0 ? vi(
        /** @type {Derived} */
        o,
        be
      ) : Cn(
        /** @type {Effect} */
        o
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  var t = Et | Ut, n = D !== null && (D.f & Et) !== 0 ? (
    /** @type {Derived} */
    D
  ) : null;
  return M === null || n !== null && (n.f & mt) !== 0 ? t |= mt : M.f |= li, {
    ctx: U,
    deps: null,
    effects: null,
    equals: pi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? M
  };
}
// @__NO_SIDE_EFFECTS__
function _i(e) {
  const t = /* @__PURE__ */ wn(e);
  return t.equals = fr, t;
}
function gi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Rt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Hs(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Et) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Bs(e) {
  var t, n = M;
  Yt(Hs(e));
  try {
    gi(e), t = Ri(e);
  } finally {
    Yt(n);
  }
  return t;
}
function bi(e) {
  var t = Bs(e), n = (Bt || (e.f & mt) !== 0) && e.deps !== null ? be : et;
  Ct(e, n), e.equals(t) || (e.v = t, e.wv = Ai());
}
function Sn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let k = !1;
function $t(e) {
  k = e;
}
let L;
function yt(e) {
  if (e === null)
    throw Sn(), he;
  return L = e;
}
function pe() {
  return yt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ft(L)
  );
}
function Z(e) {
  if (k) {
    if (/* @__PURE__ */ Ft(L) !== null)
      throw Sn(), he;
    L = e;
  }
}
function Xn() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ir) {
        if (e === 0) return t;
        e -= 1;
      } else (n === oi || n === rr) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ft(t)
    );
    t.remove(), t = r;
  }
}
function fe(e, t = null, n) {
  if (typeof e != "object" || e === null || Jt in e)
    return e;
  const r = ur(e);
  if (r !== As && r !== Cs)
    return e;
  var i = /* @__PURE__ */ new Map(), s = ar(e), o = pt(0);
  s && i.set("length", pt(
    /** @type {any[]} */
    e.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, u, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Ps();
        var d = i.get(u);
        return d === void 0 ? (d = pt(f.value), i.set(u, d)) : z(d, fe(f.value, l)), !0;
      },
      deleteProperty(c, u) {
        var f = i.get(u);
        if (f === void 0)
          u in c && i.set(u, pt(ut));
        else {
          if (s && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              i.get("length")
            ), h = Number(u);
            Number.isInteger(h) && h < d.v && z(d, h);
          }
          z(f, ut), Ur(o);
        }
        return !0;
      },
      get(c, u, f) {
        var m;
        if (u === Jt)
          return e;
        var d = i.get(u), h = u in c;
        if (d === void 0 && (!h || (m = zt(c, u)) != null && m.writable) && (d = pt(fe(h ? c[u] : ut, l)), i.set(u, d)), d !== void 0) {
          var p = S(d);
          return p === ut ? void 0 : p;
        }
        return Reflect.get(c, u, f);
      },
      getOwnPropertyDescriptor(c, u) {
        var f = Reflect.getOwnPropertyDescriptor(c, u);
        if (f && "value" in f) {
          var d = i.get(u);
          d && (f.value = S(d));
        } else if (f === void 0) {
          var h = i.get(u), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== ut)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return f;
      },
      has(c, u) {
        var p;
        if (u === Jt)
          return !0;
        var f = i.get(u), d = f !== void 0 && f.v !== ut || Reflect.has(c, u);
        if (f !== void 0 || M !== null && (!d || (p = zt(c, u)) != null && p.writable)) {
          f === void 0 && (f = pt(d ? fe(c[u], l) : ut), i.set(u, f));
          var h = S(f);
          if (h === ut)
            return !1;
        }
        return d;
      },
      set(c, u, f, d) {
        var C;
        var h = i.get(u), p = u in c;
        if (s && u === "length")
          for (var m = f; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var A = i.get(m + "");
            A !== void 0 ? z(A, ut) : m in c && (A = pt(ut), i.set(m + "", A));
          }
        h === void 0 ? (!p || (C = zt(c, u)) != null && C.writable) && (h = pt(void 0), z(h, fe(f, l)), i.set(u, h)) : (p = h.v !== ut, z(h, fe(f, l)));
        var T = Reflect.getOwnPropertyDescriptor(c, u);
        if (T != null && T.set && T.set.call(d, f), !p) {
          if (s && typeof u == "string") {
            var b = (
              /** @type {Source<number>} */
              i.get("length")
            ), E = Number(u);
            Number.isInteger(E) && E >= b.v && z(b, E + 1);
          }
          Ur(o);
        }
        return !0;
      },
      ownKeys(c) {
        S(o);
        var u = Reflect.ownKeys(c).filter((h) => {
          var p = i.get(h);
          return p === void 0 || p.v !== ut;
        });
        for (var [f, d] of i)
          d.v !== ut && !(f in c) && u.push(f);
        return u;
      },
      setPrototypeOf() {
        Is();
      }
    }
  );
}
function Ur(e, t = 1) {
  z(e, e.v + t);
}
var Fr, yi, Ei, Ti;
function Kn() {
  if (Fr === void 0) {
    Fr = window, yi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Ei = zt(t, "firstChild").get, Ti = zt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Be(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return Ei.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  return Ti.call(e);
}
function lt(e, t) {
  if (!k)
    return /* @__PURE__ */ jt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ jt(L)
  );
  return n === null && (n = L.appendChild(Be())), yt(n), n;
}
function Wr(e, t) {
  if (!k) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ jt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ft(n) : n;
  }
  return L;
}
function St(e, t = 1, n = !1) {
  let r = k ? L : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ft(r);
  if (!k)
    return r;
  var s = r == null ? void 0 : r.nodeType;
  if (n && s !== 3) {
    var o = Be();
    return r === null ? i == null || i.after(o) : r.before(o), yt(o), o;
  }
  return yt(r), /** @type {TemplateNode} */
  r;
}
function wi(e) {
  e.textContent = "";
}
let on = !1, pn = !1, mn = null, an = !1, hr = !1;
function Hr(e) {
  hr = e;
}
let Pe = [];
let D = null, bt = !1;
function qt(e) {
  D = e;
}
let M = null;
function Yt(e) {
  M = e;
}
let At = null;
function zs(e) {
  At = e;
}
let tt = null, ht = 0, Nt = null;
function Gs(e) {
  Nt = e;
}
let Si = 1, vn = 0, Bt = !1;
function Ai() {
  return ++Si;
}
function ze(e) {
  var d;
  var t = e.f;
  if ((t & Ut) !== 0)
    return !0;
  if ((t & be) !== 0) {
    var n = e.deps, r = (t & mt) !== 0;
    if (n !== null) {
      var i, s, o = (t & fn) !== 0, l = r && M !== null && !Bt, c = n.length;
      if (o || l) {
        var u = (
          /** @type {Derived} */
          e
        ), f = u.parent;
        for (i = 0; i < c; i++)
          s = n[i], (o || !((d = s == null ? void 0 : s.reactions) != null && d.includes(u))) && (s.reactions ?? (s.reactions = [])).push(u);
        o && (u.f ^= fn), l && f !== null && (f.f & mt) === 0 && (u.f ^= mt);
      }
      for (i = 0; i < c; i++)
        if (s = n[i], ze(
          /** @type {Derived} */
          s
        ) && bi(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!r || M !== null && !Bt) && Ct(e, et);
  }
  return !1;
}
function js(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & cn) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= cn;
      }
    n = n.parent;
  }
  throw on = !1, e;
}
function qs(e) {
  return (e.f & Tn) === 0 && (e.parent === null || (e.parent.f & cn) === 0);
}
function An(e, t, n, r) {
  if (on) {
    if (n === null && (on = !1), qs(t))
      throw e;
    return;
  }
  n !== null && (on = !0);
  {
    js(e, t);
    return;
  }
}
function Ci(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Et) !== 0 ? Ci(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? Ct(s, Ut) : (s.f & et) !== 0 && Ct(s, be), Cn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ri(e) {
  var p;
  var t = tt, n = ht, r = Nt, i = D, s = Bt, o = At, l = U, c = bt, u = e.f;
  tt = /** @type {null | Value[]} */
  null, ht = 0, Nt = null, Bt = (u & mt) !== 0 && (bt || !an || D === null), D = (u & (It | ge)) === 0 ? e : null, At = null, Br(e.ctx), bt = !1, vn++;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), d = e.deps;
    if (tt !== null) {
      var h;
      if (_n(e, ht), d !== null && ht > 0)
        for (d.length = ht + tt.length, h = 0; h < tt.length; h++)
          d[ht + h] = tt[h];
      else
        e.deps = d = tt;
      if (!Bt)
        for (h = ht; h < d.length; h++)
          ((p = d[h]).reactions ?? (p.reactions = [])).push(e);
    } else d !== null && ht < d.length && (_n(e, ht), d.length = ht);
    if (je() && Nt !== null && !bt && d !== null && (e.f & (Et | be | Ut)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Nt.length; h++)
        Ci(
          Nt[h],
          /** @type {Effect} */
          e
        );
    return i !== null && vn++, f;
  } finally {
    tt = t, ht = n, Nt = r, D = i, Bt = s, At = o, Br(l), bt = c;
  }
}
function Ys(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ss.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & Et) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (tt === null || !tt.includes(t)) && (Ct(t, be), (t.f & (mt | fn)) === 0 && (t.f ^= fn), gi(
    /** @type {Derived} **/
    t
  ), _n(
    /** @type {Derived} **/
    t,
    0
  ));
}
function _n(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ys(e, n[r]);
}
function dr(e) {
  var t = e.f;
  if ((t & Tn) === 0) {
    Ct(e, et);
    var n = M, r = U, i = an;
    M = e, an = !0;
    try {
      (t & sr) !== 0 ? no(e) : Ni(e), Oi(e);
      var s = Ri(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Si;
      var o = e.deps, l;
      Pr && fs && e.f & Ut;
    } catch (c) {
      An(c, e, n, r || e.ctx);
    } finally {
      an = i, M = n;
    }
  }
}
function Vs() {
  try {
    Ns();
  } catch (e) {
    if (mn !== null)
      An(e, mn, null);
    else
      throw e;
  }
}
function xi() {
  try {
    for (var e = 0; Pe.length > 0; ) {
      e++ > 1e3 && Vs();
      var t = Pe, n = t.length;
      Pe = [];
      for (var r = 0; r < n; r++) {
        var i = t[r];
        (i.f & et) === 0 && (i.f ^= et);
        var s = Ks(i);
        Xs(s);
      }
    }
  } finally {
    pn = !1, mn = null;
  }
}
function Xs(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Tn | Pt)) === 0)
        try {
          ze(r) && (dr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Li(r) : r.fn = null));
        } catch (i) {
          An(i, r, null, r.ctx);
        }
    }
}
function Cn(e) {
  pn || (pn = !0, queueMicrotask(xi));
  for (var t = mn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (ge | It)) !== 0) {
      if ((n & et) === 0) return;
      t.f ^= et;
    }
  }
  Pe.push(t);
}
function Ks(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, i = (r & It) !== 0, s = i && (r & et) !== 0;
    if (!s && (r & Pt) === 0) {
      if ((r & ai) !== 0)
        t.push(n);
      else if (i)
        n.f ^= et;
      else {
        var o = D;
        try {
          D = n, ze(n) && dr(n);
        } catch (u) {
          An(u, n, null, n.ctx);
        } finally {
          D = o;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    var c = n.parent;
    for (n = n.next; n === null && c !== null; )
      n = c.next, c = c.parent;
  }
  return t;
}
function gn(e) {
  var t;
  for (Ir(); Pe.length > 0; )
    pn = !0, xi(), Ir();
  return (
    /** @type {T} */
    t
  );
}
async function ki() {
  await Promise.resolve(), gn();
}
function S(e) {
  var t = e.f, n = (t & Et) !== 0;
  if (D !== null && !bt) {
    At !== null && At.includes(e) && Us();
    var r = D.deps;
    e.rv < vn && (e.rv = vn, tt === null && r !== null && r[ht] === e ? ht++ : tt === null ? tt = [e] : (!Bt || !tt.includes(e)) && tt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), s = i.parent;
    s !== null && (s.f & mt) === 0 && (i.f ^= mt);
  }
  return n && (i = /** @type {Derived} */
  e, ze(i) && bi(i)), e.v;
}
function Zt(e) {
  var t = bt;
  try {
    return bt = !0, e();
  } finally {
    bt = t;
  }
}
const Js = -7169;
function Ct(e, t) {
  e.f = e.f & Js | t;
}
function Mi(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Jt in e)
      Jn(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Jt in n && Jn(n);
      }
  }
}
function Jn(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Jn(e[r], t);
      } catch {
      }
    const n = ur(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ci(n);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(e);
          } catch {
          }
      }
    }
  }
}
function Di(e) {
  M === null && D === null && Os(), D !== null && (D.f & mt) !== 0 && M === null && Ds(), hr && Ms();
}
function Zs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qt(e, t, n, r = !0) {
  var i = (e & ge) !== 0, s = M, o = {
    ctx: U,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ut,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      dr(o), o.f |= ys;
    } catch (u) {
      throw Rt(o), u;
    }
  else t !== null && Cn(o);
  var l = n && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (li | cn)) === 0;
  if (!l && !i && r && (s !== null && Zs(o, s), D !== null && (D.f & Et) !== 0)) {
    var c = (
      /** @type {Derived} */
      D
    );
    (c.effects ?? (c.effects = [])).push(o);
  }
  return o;
}
function pr(e) {
  const t = Qt(En, null, !1);
  return Ct(t, et), t.teardown = e, t;
}
function Zn(e) {
  Di();
  var t = M !== null && (M.f & It) !== 0 && U !== null && !U.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      U
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: M,
      reaction: D
    });
  } else {
    var r = Rn(e);
    return r;
  }
}
function Qs(e) {
  return Di(), Ge(e);
}
function to(e) {
  const t = Qt(ge, e, !0);
  return () => {
    Rt(t);
  };
}
function eo(e) {
  const t = Qt(ge, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? bn(t, () => {
      Rt(t), r(void 0);
    }) : (Rt(t), r(void 0));
  });
}
function Rn(e) {
  return Qt(ai, e, !1);
}
function Ge(e) {
  return Qt(En, e, !0);
}
function Wn(e, t = [], n = wn) {
  const r = t.map(n);
  return xn(() => e(...r.map(S)));
}
function xn(e, t = 0) {
  return Qt(En | sr | t, e, !0);
}
function me(e, t = !0) {
  return Qt(En | It, e, !0, t);
}
function Oi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = hr, r = D;
    Hr(!0), qt(null);
    try {
      t.call(null);
    } finally {
      Hr(n), qt(r);
    }
  }
}
function Ni(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    Rt(n, t), n = r;
  }
}
function no(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & It) === 0 && Rt(t), t = n;
  }
}
function Rt(e, t = !0) {
  var n = !1;
  if ((t || (e.f & Ts) !== 0) && e.nodes_start !== null) {
    for (var r = e.nodes_start, i = e.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ft(r)
      );
      r.remove(), r = s;
    }
    n = !0;
  }
  Ni(e, t && !n), _n(e, 0), Ct(e, Tn);
  var o = e.transitions;
  if (o !== null)
    for (const c of o)
      c.stop();
  Oi(e);
  var l = e.parent;
  l !== null && l.first !== null && Li(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Li(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function bn(e, t) {
  var n = [];
  mr(e, n, !0), $i(n, () => {
    Rt(e), t && t();
  });
}
function $i(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function mr(e, t, n) {
  if ((e.f & Pt) === 0) {
    if (e.f ^= Pt, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var i = r.next, s = (r.f & or) !== 0 || (r.f & It) !== 0;
      mr(r, t, s ? n : !1), r = i;
    }
  }
}
function yn(e) {
  Pi(e, !0);
}
function Pi(e, t) {
  if ((e.f & Pt) !== 0) {
    e.f ^= Pt, (e.f & et) === 0 && (e.f ^= et), ze(e) && (Ct(e, Ut), Cn(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & or) !== 0 || (n.f & It) !== 0;
      Pi(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
function ro(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let U = null;
function Br(e) {
  U = e;
}
function Ii(e, t = !1, n) {
  U = {
    p: U,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, _e && !t && (U.l = {
    s: null,
    u: null,
    r1: [],
    r2: pt(!1)
  });
}
function Ui(e) {
  const t = U;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var n = M, r = D;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var s = o[i];
          Yt(s.effect), qt(s.reaction), Rn(s.fn);
        }
      } finally {
        Yt(n), qt(r);
      }
    }
    U = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function je() {
  return !_e || U !== null && U.l === null;
}
const io = ["touchstart", "touchmove"];
function so(e) {
  return io.includes(e);
}
let zr = !1;
function Fi() {
  zr || (zr = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Wi(e) {
  var t = D, n = M;
  qt(null), Yt(null);
  try {
    return e();
  } finally {
    qt(t), Yt(n);
  }
}
function oo(e, t, n, r = n) {
  e.addEventListener(t, () => Wi(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Fi();
}
const ao = /* @__PURE__ */ new Set(), Gr = /* @__PURE__ */ new Set();
function lo(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || $e.call(t, s), !s.cancelBubble)
      return Wi(() => n == null ? void 0 : n.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? di(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function le(e, t, n, r, i) {
  var s = { capture: r, passive: i }, o = lo(e, t, n, s);
  (t === document.body || t === window || t === document) && pr(() => {
    t.removeEventListener(e, o, s);
  });
}
function $e(e) {
  var E;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((E = e.composedPath) == null ? void 0 : E.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, l = e.__root;
  if (l) {
    var c = i.indexOf(l);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    c <= u && (o = c);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    Ie(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = D, d = M;
    qt(null), Yt(null);
    try {
      for (var h, p = []; s !== null; ) {
        var m = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var A = s["__" + r];
          if (A !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (ar(A)) {
              var [T, ...b] = A;
              T.apply(s, [e, ...b]);
            } else
              A.call(s, e);
        } catch (C) {
          h ? p.push(C) : h = C;
        }
        if (e.cancelBubble || m === t || m === null)
          break;
        s = m;
      }
      if (h) {
        for (let C of p)
          queueMicrotask(() => {
            throw C;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qt(f), Yt(d);
    }
  }
}
function Hi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Gt(e, t) {
  var n = (
    /** @type {Effect} */
    M
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & gs) !== 0, r = (t & bs) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (k)
      return Gt(L, null), L;
    i === void 0 && (i = Hi(s ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ jt(i)));
    var o = (
      /** @type {TemplateNode} */
      r || yi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ jt(o)
      ), c = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Gt(l, c);
    } else
      Gt(o, o);
    return o;
  };
}
function uo() {
  if (k)
    return Gt(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Be();
  return e.append(t, n), Gt(t, n), e;
}
function Ot(e, t) {
  if (k) {
    M.nodes_end = L, pe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Bi(e, t) {
  return zi(e, t);
}
function co(e, t) {
  Kn(), t.intro = t.intro ?? !1;
  const n = t.target, r = k, i = L;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ jt(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== oi); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Ft(s);
    if (!s)
      throw he;
    $t(!0), yt(
      /** @type {Comment} */
      s
    ), pe();
    const o = zi(e, { ...t, anchor: s });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== ir)
      throw Sn(), he;
    return $t(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === he)
      return t.recover === !1 && Ls(), Kn(), wi(n), $t(!1), Bi(e, t);
    throw o;
  } finally {
    $t(r), yt(i);
  }
}
const ue = /* @__PURE__ */ new Map();
function zi(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: o = !0 }) {
  Kn();
  var l = /* @__PURE__ */ new Set(), c = (d) => {
    for (var h = 0; h < d.length; h++) {
      var p = d[h];
      if (!l.has(p)) {
        l.add(p);
        var m = so(p);
        t.addEventListener(p, $e, { passive: m });
        var A = ue.get(p);
        A === void 0 ? (document.addEventListener(p, $e, { passive: m }), ue.set(p, 1)) : ue.set(p, A + 1);
      }
    }
  };
  c(lr(ao)), Gr.add(c);
  var u = void 0, f = eo(() => {
    var d = n ?? t.appendChild(Be());
    return me(() => {
      if (s) {
        Ii({});
        var h = (
          /** @type {ComponentContext} */
          U
        );
        h.c = s;
      }
      i && (r.$$events = i), k && Gt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, k && (M.nodes_end = L), s && Ui();
    }), () => {
      var m;
      for (var h of l) {
        t.removeEventListener(h, $e);
        var p = (
          /** @type {number} */
          ue.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, $e), ue.delete(h)) : ue.set(h, p);
      }
      Gr.delete(c), d !== n && ((m = d.parentNode) == null || m.removeChild(d));
    };
  });
  return Qn.set(u, f), u;
}
let Qn = /* @__PURE__ */ new WeakMap();
function fo(e, t) {
  const n = Qn.get(e);
  return n ? (Qn.delete(e), n(t)) : Promise.resolve();
}
function ke(e, t, n = !1) {
  k && pe();
  var r = e, i = null, s = null, o = ut, l = n ? or : 0, c = !1;
  const u = (d, h = !0) => {
    c = !0, f(h, d);
  }, f = (d, h) => {
    if (o === (o = d)) return;
    let p = !1;
    if (k) {
      const m = (
        /** @type {Comment} */
        r.data === rr
      );
      !!o === m && (r = Xn(), yt(r), $t(!1), p = !0);
    }
    o ? (i ? yn(i) : h && (i = me(() => h(r))), s && bn(s, () => {
      s = null;
    })) : (s ? yn(s) : h && (s = me(() => h(r))), i && bn(i, () => {
      i = null;
    })), p && $t(!0);
  };
  xn(() => {
    c = !1, t(u), c || f(null, null);
  }, l), k && (r = L);
}
function ho(e, t) {
  return t;
}
function po(e, t, n, r) {
  for (var i = [], s = t.length, o = 0; o < s; o++)
    mr(t[o].e, i, !0);
  var l = s > 0 && i.length === 0 && n !== null;
  if (l) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    wi(c), c.append(
      /** @type {Element} */
      n
    ), r.clear(), Ht(e, t[0].prev, t[s - 1].next);
  }
  $i(i, () => {
    for (var u = 0; u < s; u++) {
      var f = t[u];
      l || (r.delete(f.k), Ht(e, f.prev, f.next)), Rt(f.e, !l);
    }
  });
}
function mo(e, t, n, r, i, s = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var c = (
      /** @type {Element} */
      e
    );
    o = k ? yt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ jt(c)
    ) : c.appendChild(Be());
  }
  k && pe();
  var u = null, f = !1, d = /* @__PURE__ */ _i(() => {
    var h = n();
    return ar(h) ? h : h == null ? [] : lr(h);
  });
  xn(() => {
    var h = S(d), p = h.length;
    if (f && p === 0)
      return;
    f = p === 0;
    let m = !1;
    if (k) {
      var A = (
        /** @type {Comment} */
        o.data === rr
      );
      A !== (p === 0) && (o = Xn(), yt(o), $t(!1), m = !0);
    }
    if (k) {
      for (var T = null, b, E = 0; E < p; E++) {
        if (L.nodeType === 8 && /** @type {Comment} */
        L.data === ir) {
          o = /** @type {Comment} */
          L, m = !0, $t(!1);
          break;
        }
        var C = h[E], w = r(C, E);
        b = Gi(
          L,
          l,
          T,
          null,
          C,
          w,
          E,
          i,
          t,
          n
        ), l.items.set(w, b), T = b;
      }
      p > 0 && yt(Xn());
    }
    k || vo(h, l, o, i, t, r, n), s !== null && (p === 0 ? u ? yn(u) : u = me(() => s(o)) : u !== null && bn(u, () => {
      u = null;
    })), m && $t(!0), S(d);
  }), k && (o = L);
}
function vo(e, t, n, r, i, s, o) {
  var l = e.length, c = t.items, u = t.first, f = u, d, h = null, p = [], m = [], A, T, b, E;
  for (E = 0; E < l; E += 1) {
    if (A = e[E], T = s(A, E), b = c.get(T), b === void 0) {
      var C = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = Gi(
        C,
        t,
        h,
        h === null ? t.first : h.next,
        A,
        T,
        E,
        r,
        i,
        o
      ), c.set(T, h), p = [], m = [], f = h.next;
      continue;
    }
    if (_o(b, A, E), (b.e.f & Pt) !== 0 && yn(b.e), b !== f) {
      if (d !== void 0 && d.has(b)) {
        if (p.length < m.length) {
          var w = m[0], g;
          h = w.prev;
          var x = p[0], H = p[p.length - 1];
          for (g = 0; g < p.length; g += 1)
            jr(p[g], w, n);
          for (g = 0; g < m.length; g += 1)
            d.delete(m[g]);
          Ht(t, x.prev, H.next), Ht(t, h, x), Ht(t, H, w), f = w, h = H, E -= 1, p = [], m = [];
        } else
          d.delete(b), jr(b, f, n), Ht(t, b.prev, b.next), Ht(t, b, h === null ? t.first : h.next), Ht(t, h, b), h = b;
        continue;
      }
      for (p = [], m = []; f !== null && f.k !== T; )
        (f.e.f & Pt) === 0 && (d ?? (d = /* @__PURE__ */ new Set())).add(f), m.push(f), f = f.next;
      if (f === null)
        continue;
      b = f;
    }
    p.push(b), h = b, f = b.next;
  }
  if (f !== null || d !== void 0) {
    for (var G = d === void 0 ? [] : lr(d); f !== null; )
      (f.e.f & Pt) === 0 && G.push(f), f = f.next;
    var K = G.length;
    if (K > 0) {
      var ct = l === 0 ? n : null;
      po(t, G, ct, c);
    }
  }
  M.first = t.first && t.first.e, M.last = h && h.e;
}
function _o(e, t, n, r) {
  mi(e.v, t), e.i = n;
}
function Gi(e, t, n, r, i, s, o, l, c, u) {
  var f = (c & ds) !== 0, d = (c & ms) === 0, h = f ? d ? /* @__PURE__ */ He(i) : pt(i) : i, p = (c & ps) === 0 ? o : pt(o), m = {
    i: p,
    v: h,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return m.e = me(() => l(e, h, p, u), k), m.e.prev = n && n.e, m.e.next = r && r.e, n === null ? t.first = m : (n.next = m, n.e.next = m.e), r !== null && (r.prev = m, r.e.prev = m.e), m;
  } finally {
  }
}
function jr(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== r; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ft(s)
    );
    i.before(s), s = o;
  }
}
function Ht(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function go(e, t, n, r, i) {
  var s = e, o = "", l;
  xn(() => {
    if (o === (o = t() ?? "")) {
      k && pe();
      return;
    }
    l !== void 0 && (Rt(l), l = void 0), o !== "" && (l = me(() => {
      if (k) {
        L.data;
        for (var c = pe(), u = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          u = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Ft(c);
        if (c === null)
          throw Sn(), he;
        Gt(L, u), s = yt(c);
        return;
      }
      var f = o + "", d = Hi(f);
      Gt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ jt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), s.before(d);
    }));
  });
}
function bo(e, t, n) {
  Rn(() => {
    var r = Zt(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, s = (
        /** @type {any} */
        {}
      );
      Ge(() => {
        var o = n();
        Mi(o), i && cr(s, o) && (s = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function yo(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r === "" ? null : r;
}
function Eo(e, t, n, r, i, s) {
  var o = e.__className;
  if (k || o !== n) {
    var l = yo(n);
    (!k || l !== e.getAttribute("class")) && (l == null ? e.removeAttribute("class") : e.className = l), e.__className = n;
  }
  return s;
}
function To(e) {
  if (k) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          Kt(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          Kt(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = n, ks(n), Fi();
  }
}
function Kt(e, t, n, r) {
  var i = e.__attributes ?? (e.__attributes = {});
  k && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[ws] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && wo(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
var qr = /* @__PURE__ */ new Map();
function wo(e) {
  var t = qr.get(e.nodeName);
  if (t) return t;
  qr.set(e.nodeName, t = []);
  for (var n, r = e, i = Element.prototype; i !== r; ) {
    n = ci(r);
    for (var s in n)
      n[s].set && t.push(s);
    r = ur(r);
  }
  return t;
}
function So(e, t, n = t) {
  var r = je();
  oo(e, "input", (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Hn(e) ? Bn(s) : s, n(s), r && s !== (s = t())) {
      var o = e.selectionStart, l = e.selectionEnd;
      e.value = s ?? "", l !== null && (e.selectionStart = o, e.selectionEnd = Math.min(l, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (k && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Zt(t) == null && e.value) && n(Hn(e) ? Bn(e.value) : e.value), Ge(() => {
    var i = t();
    Hn(e) && i === Bn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Hn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Bn(e) {
  return e === "" ? null : +e;
}
function Ao(e, t, n) {
  var r = zt(e, t);
  r && r.set && (e[t] = n, pr(() => {
    e[t] = null;
  }));
}
function Yr(e, t) {
  return e === t || (e == null ? void 0 : e[Jt]) === t;
}
function Co(e = {}, t, n, r) {
  return Rn(() => {
    var i, s;
    return Ge(() => {
      i = s, s = [], Zt(() => {
        e !== n(...s) && (t(e, ...s), i && Yr(n(...i), e) && t(null, ...i));
      });
    }), () => {
      di(() => {
        s && Yr(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
function Ro(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    U
  ), n = t.l.u;
  if (!n) return;
  let r = () => Mi(t.s);
  if (e) {
    let i = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ wn(() => {
      let l = !1;
      const c = t.s;
      for (const u in c)
        c[u] !== s[u] && (s[u] = c[u], l = !0);
      return l && i++, i;
    });
    r = () => S(o);
  }
  n.b.length && Qs(() => {
    Vr(t, r), dn(n.b);
  }), Zn(() => {
    const i = Zt(() => n.m.map(Rs));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), n.a.length && Zn(() => {
    Vr(t, r), dn(n.a);
  });
}
function Vr(e, t) {
  if (e.l.s)
    for (const n of e.l.s) S(n);
  t();
}
function xo(e) {
  U === null && ro(), _e && U.l !== null ? ko(U).m.push(e) : Zn(() => {
    const t = Zt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ko(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ji(e, t, n) {
  if (e == null)
    return t(void 0), de;
  const r = Zt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const ce = [];
function Mo(e, t = de) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (cr(e, l) && (e = l, n)) {
      const c = !ce.length;
      for (const u of r)
        u[1](), ce.push(u, e);
      if (c) {
        for (let u = 0; u < ce.length; u += 2)
          ce[u][0](ce[u + 1]);
        ce.length = 0;
      }
    }
  }
  function s(l) {
    i(l(
      /** @type {T} */
      e
    ));
  }
  function o(l, c = de) {
    const u = [l, c];
    return r.add(u), r.size === 1 && (n = t(i, s) || de), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function Do(e) {
  let t;
  return ji(e, (n) => t = n)(), t;
}
let en = !1, tr = Symbol();
function Oo(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ He(void 0),
    unsubscribe: de
  });
  if (r.store !== e && !(tr in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = de;
    else {
      var i = !0;
      r.unsubscribe = ji(e, (s) => {
        i ? r.source.v = s : z(r.source, s);
      }), i = !1;
    }
  return e && tr in n ? Do(e) : S(r.source);
}
function No() {
  const e = {};
  function t() {
    pr(() => {
      for (var n in e)
        e[n].unsubscribe();
      Ie(e, tr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Lo(e) {
  var t = en;
  try {
    return en = !1, [e(), en];
  } finally {
    en = t;
  }
}
function Xr(e, t, n, r) {
  var w;
  var i = !_e || (n & vs) !== 0, s = (n & _s) !== 0, o = !1, l;
  [l, o] = Lo(() => (
    /** @type {V} */
    e[t]
  ));
  var c = Jt in e || ui in e, u = (((w = zt(e, t)) == null ? void 0 : w.set) ?? (c && t in e && ((g) => e[t] = g))) || void 0, f = (
    /** @type {V} */
    r
  ), d = !0, h = !1, p = () => (h = !0, d && (d = !1, f = /** @type {V} */
  r), f);
  l === void 0 && r !== void 0 && (u && i && $s(), l = p(), u && u(l));
  var m;
  if (i)
    m = () => {
      var g = (
        /** @type {V} */
        e[t]
      );
      return g === void 0 ? p() : (d = !0, h = !1, g);
    };
  else {
    var A = /* @__PURE__ */ _i(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    A.f |= Es, m = () => {
      var g = S(A);
      return g !== void 0 && (f = /** @type {V} */
      void 0), g === void 0 ? f : g;
    };
  }
  if (u) {
    var T = e.$$legacy;
    return function(g, x) {
      return arguments.length > 0 ? ((!i || !x || T || o) && u(x ? m() : g), g) : m();
    };
  }
  var b = !1, E = /* @__PURE__ */ He(l), C = /* @__PURE__ */ wn(() => {
    var g = m(), x = S(E);
    return b ? (b = !1, x) : E.v = g;
  });
  return C.equals = fr, function(g, x) {
    if (arguments.length > 0) {
      const H = x ? S(C) : i && s ? fe(g) : g;
      return C.equals(H) || (b = !0, z(E, H), h && f !== void 0 && (f = H), Zt(() => S(C))), g;
    }
    return S(C);
  };
}
function $o(e) {
  return new Po(e);
}
var Lt, dt;
class Po {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Un(this, Lt);
    /** @type {Record<string, any>} */
    Un(this, dt);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (o, l) => {
      var c = /* @__PURE__ */ He(l);
      return n.set(o, c), c;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, l) {
          return S(n.get(l) ?? r(l, Reflect.get(o, l)));
        },
        has(o, l) {
          return l === ui ? !0 : (S(n.get(l) ?? r(l, Reflect.get(o, l))), Reflect.has(o, l));
        },
        set(o, l, c) {
          return z(n.get(l) ?? r(l, c), c), Reflect.set(o, l, c);
        }
      }
    );
    Fn(this, dt, (t.hydrate ? co : Bi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && gn(), Fn(this, Lt, i.$$events);
    for (const o of Object.keys(at(this, dt)))
      o === "$set" || o === "$destroy" || o === "$on" || Ie(this, o, {
        get() {
          return at(this, dt)[o];
        },
        /** @param {any} value */
        set(l) {
          at(this, dt)[o] = l;
        },
        enumerable: !0
      });
    at(this, dt).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, at(this, dt).$destroy = () => {
      fo(at(this, dt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    at(this, dt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    at(this, Lt)[t] = at(this, Lt)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return at(this, Lt)[t].push(r), () => {
      at(this, Lt)[t] = at(this, Lt)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    at(this, dt).$destroy();
  }
}
Lt = new WeakMap(), dt = new WeakMap();
let qi;
typeof HTMLElement == "function" && (qi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    Y(this, "$$ctor");
    /** Slots */
    Y(this, "$$s");
    /** @type {any} The Svelte component instance */
    Y(this, "$$c");
    /** Whether or not the custom element is connected */
    Y(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Y(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Y(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Y(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Y(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Y(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Y(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), Ot(s, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Io(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = ln(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = $o({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = to(() => {
        Ge(() => {
          var i;
          this.$$r = !0;
          for (const s of hn(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const o = ln(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const o = this.$$c.$on(i, s);
          this.$$l_u.set(s, o);
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
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ln(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return hn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function ln(e, t, n, r) {
  var s;
  const i = (s = n[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function Io(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Uo(e, t, n, r, i, s) {
  let o = class extends qi {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return hn(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return hn(t).forEach((l) => {
    Ie(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(c) {
        var d;
        c = ln(l, c, t), this.$$d[l] = c;
        var u = this.$$c;
        if (u) {
          var f = (d = zt(u, l)) == null ? void 0 : d.get;
          f ? u[l] = c : u.$set({ [l]: c });
        }
      }
    });
  }), r.forEach((l) => {
    Ie(o.prototype, l, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Fo = async (e) => {
  console.log("Sending request to server:", e);
  const t = {
    ...e,
    user_id: e.user_id
  }, n = await fetch("https://api.blacksmith-lab.com/blacksmith_web_user_request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(t)
  });
  if (!n.ok) {
    let i;
    try {
      i = await n.json();
    } catch {
      i = await n.text();
    }
    throw console.error(`Error processing request (${n.status}):`, i), new Error(`Error processing request: ${n.status} - ${JSON.stringify(i)}`);
  }
  const r = await n.json();
  return console.log("Server response data:", r), r;
}, Wo = async (e) => {
  console.log("Sending TTS request:", e);
  const t = await fetch("https://api.blacksmith-lab.com/blacksmith_web_tts_request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    let r;
    try {
      r = await t.json();
    } catch {
      r = await t.text();
    }
    throw console.error(`TTS Error (${t.status}):`, r), new Error(`TTS Error: ${t.status} - ${JSON.stringify(r)}`);
  }
  const n = await t.json();
  return console.log("TTS response received"), n;
}, Ho = async (e, t) => {
  console.log("Fetching chat history for user:", e);
  const n = await fetch(`https://api.blacksmith-lab.com/blacksmith_web_chat_fetch?user_id=${e}&app_name=${t}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  if (!n.ok) {
    let i;
    try {
      i = await n.json();
    } catch {
      i = await n.text();
    }
    throw console.error(`Error fetching chat history (${n.status}):`, i), new Error(`Error fetching chat history: ${n.status} - ${JSON.stringify(i)}`);
  }
  const r = await n.json();
  return console.log("Loaded chat history for user:", e, ":", r), r;
};
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: Yi,
  setPrototypeOf: Kr,
  isFrozen: Bo,
  getPrototypeOf: zo,
  getOwnPropertyDescriptor: Go
} = Object;
let {
  freeze: nt,
  seal: vt,
  create: Vi
} = Object, {
  apply: er,
  construct: nr
} = typeof Reflect < "u" && Reflect;
nt || (nt = function(t) {
  return t;
});
vt || (vt = function(t) {
  return t;
});
er || (er = function(t, n, r) {
  return t.apply(n, r);
});
nr || (nr = function(t, n) {
  return new t(...n);
});
const nn = rt(Array.prototype.forEach), jo = rt(Array.prototype.lastIndexOf), Jr = rt(Array.prototype.pop), Me = rt(Array.prototype.push), qo = rt(Array.prototype.splice), un = rt(String.prototype.toLowerCase), zn = rt(String.prototype.toString), Zr = rt(String.prototype.match), De = rt(String.prototype.replace), Yo = rt(String.prototype.indexOf), Vo = rt(String.prototype.trim), gt = rt(Object.prototype.hasOwnProperty), Q = rt(RegExp.prototype.test), Oe = Xo(TypeError);
function rt(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return er(e, t, r);
  };
}
function Xo(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return nr(e, n);
  };
}
function R(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : un;
  Kr && Kr(e, null);
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (Bo(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Ko(e) {
  for (let t = 0; t < e.length; t++)
    gt(e, t) || (e[t] = null);
  return e;
}
function Xt(e) {
  const t = Vi(null);
  for (const [n, r] of Yi(e))
    gt(e, n) && (Array.isArray(r) ? t[n] = Ko(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Xt(r) : t[n] = r);
  return t;
}
function Ne(e, t) {
  for (; e !== null; ) {
    const r = Go(e, t);
    if (r) {
      if (r.get)
        return rt(r.get);
      if (typeof r.value == "function")
        return rt(r.value);
    }
    e = zo(e);
  }
  function n() {
    return null;
  }
  return n;
}
const Qr = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Gn = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), jn = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Jo = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), qn = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Zo = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ti = nt(["#text"]), ei = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Yn = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ni = nt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), rn = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Qo = vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ta = vt(/<%[\w\W]*|[\w\W]*%>/gm), ea = vt(/\$\{[\w\W]*/gm), na = vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), ra = vt(/^aria-[\-\w]+$/), Xi = vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ia = vt(/^(?:\w+script|data):/i), sa = vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ki = vt(/^html$/i), oa = vt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ri = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: ra,
  ATTR_WHITESPACE: sa,
  CUSTOM_ELEMENT: oa,
  DATA_ATTR: na,
  DOCTYPE_NAME: Ki,
  ERB_EXPR: ta,
  IS_ALLOWED_URI: Xi,
  IS_SCRIPT_OR_DATA: ia,
  MUSTACHE_EXPR: Qo,
  TMPLIT_EXPR: ea
});
const Le = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, aa = function() {
  return typeof window > "u" ? null : window;
}, la = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, ii = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Ji() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : aa();
  const t = (y) => Ji(y);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Le.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, i = r.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: o,
    Node: l,
    Element: c,
    NodeFilter: u,
    NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: h,
    trustedTypes: p
  } = e, m = c.prototype, A = Ne(m, "cloneNode"), T = Ne(m, "remove"), b = Ne(m, "nextSibling"), E = Ne(m, "childNodes"), C = Ne(m, "parentNode");
  if (typeof o == "function") {
    const y = n.createElement("template");
    y.content && y.content.ownerDocument && (n = y.content.ownerDocument);
  }
  let w, g = "";
  const {
    implementation: x,
    createNodeIterator: H,
    createDocumentFragment: G,
    getElementsByTagName: K
  } = n, {
    importNode: ct
  } = r;
  let F = ii();
  t.isSupported = typeof Yi == "function" && typeof C == "function" && x && x.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Wt,
    ERB_EXPR: ye,
    TMPLIT_EXPR: Ee,
    DATA_ATTR: kn,
    ARIA_ATTR: Mn,
    IS_SCRIPT_OR_DATA: Dn,
    ATTR_WHITESPACE: O,
    CUSTOM_ELEMENT: $
  } = ri;
  let {
    IS_ALLOWED_URI: W
  } = ri, N = null;
  const ee = R({}, [...Qr, ...Gn, ...jn, ...qn, ...ti]);
  let B = null;
  const Ye = R({}, [...ei, ...Yn, ...ni, ...rn]);
  let I = Object.seal(Vi(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Vt = null, Te = null, ft = !0, it = !0, _t = !1, ne = !0, st = !1, xt = !0, kt = !1, we = !1, Se = !1, re = !1, Ve = !1, Xe = !1, vr = !0, _r = !1;
  const ts = "user-content-";
  let On = !0, Ae = !1, ie = {}, se = null;
  const gr = R({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let br = null;
  const yr = R({}, ["audio", "video", "img", "source", "image", "track"]);
  let Nn = null;
  const Er = R({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ke = "http://www.w3.org/1998/Math/MathML", Je = "http://www.w3.org/2000/svg", Mt = "http://www.w3.org/1999/xhtml";
  let oe = Mt, Ln = !1, $n = null;
  const es = R({}, [Ke, Je, Mt], zn);
  let Ze = R({}, ["mi", "mo", "mn", "ms", "mtext"]), Qe = R({}, ["annotation-xml"]);
  const ns = R({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const rs = ["application/xhtml+xml", "text/html"], is = "text/html";
  let j = null, ae = null;
  const ss = n.createElement("form"), Tr = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Pn = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ae && ae === a)) {
      if ((!a || typeof a != "object") && (a = {}), a = Xt(a), Ce = // eslint-disable-next-line unicorn/prefer-includes
      rs.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? is : a.PARSER_MEDIA_TYPE, j = Ce === "application/xhtml+xml" ? zn : un, N = gt(a, "ALLOWED_TAGS") ? R({}, a.ALLOWED_TAGS, j) : ee, B = gt(a, "ALLOWED_ATTR") ? R({}, a.ALLOWED_ATTR, j) : Ye, $n = gt(a, "ALLOWED_NAMESPACES") ? R({}, a.ALLOWED_NAMESPACES, zn) : es, Nn = gt(a, "ADD_URI_SAFE_ATTR") ? R(Xt(Er), a.ADD_URI_SAFE_ATTR, j) : Er, br = gt(a, "ADD_DATA_URI_TAGS") ? R(Xt(yr), a.ADD_DATA_URI_TAGS, j) : yr, se = gt(a, "FORBID_CONTENTS") ? R({}, a.FORBID_CONTENTS, j) : gr, Vt = gt(a, "FORBID_TAGS") ? R({}, a.FORBID_TAGS, j) : {}, Te = gt(a, "FORBID_ATTR") ? R({}, a.FORBID_ATTR, j) : {}, ie = gt(a, "USE_PROFILES") ? a.USE_PROFILES : !1, ft = a.ALLOW_ARIA_ATTR !== !1, it = a.ALLOW_DATA_ATTR !== !1, _t = a.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, st = a.SAFE_FOR_TEMPLATES || !1, xt = a.SAFE_FOR_XML !== !1, kt = a.WHOLE_DOCUMENT || !1, re = a.RETURN_DOM || !1, Ve = a.RETURN_DOM_FRAGMENT || !1, Xe = a.RETURN_TRUSTED_TYPE || !1, Se = a.FORCE_BODY || !1, vr = a.SANITIZE_DOM !== !1, _r = a.SANITIZE_NAMED_PROPS || !1, On = a.KEEP_CONTENT !== !1, Ae = a.IN_PLACE || !1, W = a.ALLOWED_URI_REGEXP || Xi, oe = a.NAMESPACE || Mt, Ze = a.MATHML_TEXT_INTEGRATION_POINTS || Ze, Qe = a.HTML_INTEGRATION_POINTS || Qe, I = a.CUSTOM_ELEMENT_HANDLING || {}, a.CUSTOM_ELEMENT_HANDLING && Tr(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (I.tagNameCheck = a.CUSTOM_ELEMENT_HANDLING.tagNameCheck), a.CUSTOM_ELEMENT_HANDLING && Tr(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (I.attributeNameCheck = a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), a.CUSTOM_ELEMENT_HANDLING && typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), st && (it = !1), Ve && (re = !0), ie && (N = R({}, ti), B = [], ie.html === !0 && (R(N, Qr), R(B, ei)), ie.svg === !0 && (R(N, Gn), R(B, Yn), R(B, rn)), ie.svgFilters === !0 && (R(N, jn), R(B, Yn), R(B, rn)), ie.mathMl === !0 && (R(N, qn), R(B, ni), R(B, rn))), a.ADD_TAGS && (N === ee && (N = Xt(N)), R(N, a.ADD_TAGS, j)), a.ADD_ATTR && (B === Ye && (B = Xt(B)), R(B, a.ADD_ATTR, j)), a.ADD_URI_SAFE_ATTR && R(Nn, a.ADD_URI_SAFE_ATTR, j), a.FORBID_CONTENTS && (se === gr && (se = Xt(se)), R(se, a.FORBID_CONTENTS, j)), On && (N["#text"] = !0), kt && R(N, ["html", "head", "body"]), N.table && (R(N, ["tbody"]), delete Vt.tbody), a.TRUSTED_TYPES_POLICY) {
        if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = a.TRUSTED_TYPES_POLICY, g = w.createHTML("");
      } else
        w === void 0 && (w = la(p, i)), w !== null && typeof g == "string" && (g = w.createHTML(""));
      nt && nt(a), ae = a;
    }
  }, wr = R({}, [...Gn, ...jn, ...Jo]), Sr = R({}, [...qn, ...Zo]), os = function(a) {
    let v = C(a);
    (!v || !v.tagName) && (v = {
      namespaceURI: oe,
      tagName: "template"
    });
    const _ = un(a.tagName), P = un(v.tagName);
    return $n[a.namespaceURI] ? a.namespaceURI === Je ? v.namespaceURI === Mt ? _ === "svg" : v.namespaceURI === Ke ? _ === "svg" && (P === "annotation-xml" || Ze[P]) : !!wr[_] : a.namespaceURI === Ke ? v.namespaceURI === Mt ? _ === "math" : v.namespaceURI === Je ? _ === "math" && Qe[P] : !!Sr[_] : a.namespaceURI === Mt ? v.namespaceURI === Je && !Qe[P] || v.namespaceURI === Ke && !Ze[P] ? !1 : !Sr[_] && (ns[_] || !wr[_]) : !!(Ce === "application/xhtml+xml" && $n[a.namespaceURI]) : !1;
  }, Tt = function(a) {
    Me(t.removed, {
      element: a
    });
    try {
      C(a).removeChild(a);
    } catch {
      T(a);
    }
  }, tn = function(a, v) {
    try {
      Me(t.removed, {
        attribute: v.getAttributeNode(a),
        from: v
      });
    } catch {
      Me(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(a), a === "is")
      if (re || Ve)
        try {
          Tt(v);
        } catch {
        }
      else
        try {
          v.setAttribute(a, "");
        } catch {
        }
  }, Ar = function(a) {
    let v = null, _ = null;
    if (Se)
      a = "<remove></remove>" + a;
    else {
      const q = Zr(a, /^[\r\n\t ]+/);
      _ = q && q[0];
    }
    Ce === "application/xhtml+xml" && oe === Mt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const P = w ? w.createHTML(a) : a;
    if (oe === Mt)
      try {
        v = new h().parseFromString(P, Ce);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = x.createDocument(oe, "template", null);
      try {
        v.documentElement.innerHTML = Ln ? g : P;
      } catch {
      }
    }
    const X = v.body || v.documentElement;
    return a && _ && X.insertBefore(n.createTextNode(_), X.childNodes[0] || null), oe === Mt ? K.call(v, kt ? "html" : "body")[0] : kt ? v.documentElement : X;
  }, Cr = function(a) {
    return H.call(
      a.ownerDocument || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, In = function(a) {
    return a instanceof d && (typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || !(a.attributes instanceof f) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function");
  }, Rr = function(a) {
    return typeof l == "function" && a instanceof l;
  };
  function Dt(y, a, v) {
    nn(y, (_) => {
      _.call(t, a, v, ae);
    });
  }
  const xr = function(a) {
    let v = null;
    if (Dt(F.beforeSanitizeElements, a, null), In(a))
      return Tt(a), !0;
    const _ = j(a.nodeName);
    if (Dt(F.uponSanitizeElement, a, {
      tagName: _,
      allowedTags: N
    }), a.hasChildNodes() && !Rr(a.firstElementChild) && Q(/<[/\w]/g, a.innerHTML) && Q(/<[/\w]/g, a.textContent) || a.nodeType === Le.progressingInstruction || xt && a.nodeType === Le.comment && Q(/<[/\w]/g, a.data))
      return Tt(a), !0;
    if (!N[_] || Vt[_]) {
      if (!Vt[_] && Mr(_) && (I.tagNameCheck instanceof RegExp && Q(I.tagNameCheck, _) || I.tagNameCheck instanceof Function && I.tagNameCheck(_)))
        return !1;
      if (On && !se[_]) {
        const P = C(a) || a.parentNode, X = E(a) || a.childNodes;
        if (X && P) {
          const q = X.length;
          for (let ot = q - 1; ot >= 0; --ot) {
            const wt = A(X[ot], !0);
            wt.__removalCount = (a.__removalCount || 0) + 1, P.insertBefore(wt, b(a));
          }
        }
      }
      return Tt(a), !0;
    }
    return a instanceof c && !os(a) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && Q(/<\/no(script|embed|frames)/i, a.innerHTML) ? (Tt(a), !0) : (st && a.nodeType === Le.text && (v = a.textContent, nn([Wt, ye, Ee], (P) => {
      v = De(v, P, " ");
    }), a.textContent !== v && (Me(t.removed, {
      element: a.cloneNode()
    }), a.textContent = v)), Dt(F.afterSanitizeElements, a, null), !1);
  }, kr = function(a, v, _) {
    if (vr && (v === "id" || v === "name") && (_ in n || _ in ss))
      return !1;
    if (!(it && !Te[v] && Q(kn, v))) {
      if (!(ft && Q(Mn, v))) {
        if (!B[v] || Te[v]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Mr(a) && (I.tagNameCheck instanceof RegExp && Q(I.tagNameCheck, a) || I.tagNameCheck instanceof Function && I.tagNameCheck(a)) && (I.attributeNameCheck instanceof RegExp && Q(I.attributeNameCheck, v) || I.attributeNameCheck instanceof Function && I.attributeNameCheck(v)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            v === "is" && I.allowCustomizedBuiltInElements && (I.tagNameCheck instanceof RegExp && Q(I.tagNameCheck, _) || I.tagNameCheck instanceof Function && I.tagNameCheck(_)))
          ) return !1;
        } else if (!Nn[v]) {
          if (!Q(W, De(_, O, ""))) {
            if (!((v === "src" || v === "xlink:href" || v === "href") && a !== "script" && Yo(_, "data:") === 0 && br[a])) {
              if (!(_t && !Q(Dn, De(_, O, "")))) {
                if (_)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Mr = function(a) {
    return a !== "annotation-xml" && Zr(a, $);
  }, Dr = function(a) {
    Dt(F.beforeSanitizeAttributes, a, null);
    const {
      attributes: v
    } = a;
    if (!v || In(a))
      return;
    const _ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: B,
      forceKeepAttr: void 0
    };
    let P = v.length;
    for (; P--; ) {
      const X = v[P], {
        name: q,
        namespaceURI: ot,
        value: wt
      } = X, Re = j(q);
      let J = q === "value" ? wt : Vo(wt);
      if (_.attrName = Re, _.attrValue = J, _.keepAttr = !0, _.forceKeepAttr = void 0, Dt(F.uponSanitizeAttribute, a, _), J = _.attrValue, _r && (Re === "id" || Re === "name") && (tn(q, a), J = ts + J), xt && Q(/((--!?|])>)|<\/(style|title)/i, J)) {
        tn(q, a);
        continue;
      }
      if (_.forceKeepAttr || (tn(q, a), !_.keepAttr))
        continue;
      if (!ne && Q(/\/>/i, J)) {
        tn(q, a);
        continue;
      }
      st && nn([Wt, ye, Ee], (Nr) => {
        J = De(J, Nr, " ");
      });
      const Or = j(a.nodeName);
      if (kr(Or, Re, J)) {
        if (w && typeof p == "object" && typeof p.getAttributeType == "function" && !ot)
          switch (p.getAttributeType(Or, Re)) {
            case "TrustedHTML": {
              J = w.createHTML(J);
              break;
            }
            case "TrustedScriptURL": {
              J = w.createScriptURL(J);
              break;
            }
          }
        try {
          ot ? a.setAttributeNS(ot, q, J) : a.setAttribute(q, J), In(a) ? Tt(a) : Jr(t.removed);
        } catch {
        }
      }
    }
    Dt(F.afterSanitizeAttributes, a, null);
  }, as = function y(a) {
    let v = null;
    const _ = Cr(a);
    for (Dt(F.beforeSanitizeShadowDOM, a, null); v = _.nextNode(); )
      Dt(F.uponSanitizeShadowNode, v, null), xr(v), Dr(v), v.content instanceof s && y(v.content);
    Dt(F.afterSanitizeShadowDOM, a, null);
  };
  return t.sanitize = function(y) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, _ = null, P = null, X = null;
    if (Ln = !y, Ln && (y = "<!-->"), typeof y != "string" && !Rr(y))
      if (typeof y.toString == "function") {
        if (y = y.toString(), typeof y != "string")
          throw Oe("dirty is not a string, aborting");
      } else
        throw Oe("toString is not a function");
    if (!t.isSupported)
      return y;
    if (we || Pn(a), t.removed = [], typeof y == "string" && (Ae = !1), Ae) {
      if (y.nodeName) {
        const wt = j(y.nodeName);
        if (!N[wt] || Vt[wt])
          throw Oe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (y instanceof l)
      v = Ar("<!---->"), _ = v.ownerDocument.importNode(y, !0), _.nodeType === Le.element && _.nodeName === "BODY" || _.nodeName === "HTML" ? v = _ : v.appendChild(_);
    else {
      if (!re && !st && !kt && // eslint-disable-next-line unicorn/prefer-includes
      y.indexOf("<") === -1)
        return w && Xe ? w.createHTML(y) : y;
      if (v = Ar(y), !v)
        return re ? null : Xe ? g : "";
    }
    v && Se && Tt(v.firstChild);
    const q = Cr(Ae ? y : v);
    for (; P = q.nextNode(); )
      xr(P), Dr(P), P.content instanceof s && as(P.content);
    if (Ae)
      return y;
    if (re) {
      if (Ve)
        for (X = G.call(v.ownerDocument); v.firstChild; )
          X.appendChild(v.firstChild);
      else
        X = v;
      return (B.shadowroot || B.shadowrootmode) && (X = ct.call(r, X, !0)), X;
    }
    let ot = kt ? v.outerHTML : v.innerHTML;
    return kt && N["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && Q(Ki, v.ownerDocument.doctype.name) && (ot = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + ot), st && nn([Wt, ye, Ee], (wt) => {
      ot = De(ot, wt, " ");
    }), w && Xe ? w.createHTML(ot) : ot;
  }, t.setConfig = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pn(y), we = !0;
  }, t.clearConfig = function() {
    ae = null, we = !1;
  }, t.isValidAttribute = function(y, a, v) {
    ae || Pn({});
    const _ = j(y), P = j(a);
    return kr(_, P, v);
  }, t.addHook = function(y, a) {
    typeof a == "function" && Me(F[y], a);
  }, t.removeHook = function(y, a) {
    if (a !== void 0) {
      const v = jo(F[y], a);
      return v === -1 ? void 0 : qo(F[y], v, 1)[0];
    }
    return Jr(F[y]);
  }, t.removeHooks = function(y) {
    F[y] = [];
  }, t.removeAllHooks = function() {
    F = ii();
  }, t;
}
var ua = Ji();
class Zi {
  constructor({
    messages: t,
    dotsUpdateInterval: n = 500,
    baseText: r = "печатает"
  }) {
    Y(this, "messages");
    Y(this, "isAnimating", !1);
    Y(this, "intervalId");
    Y(this, "tempMessageId");
    Y(this, "dotsUpdateInterval");
    Y(this, "baseText");
    this.messages = t, this.tempMessageId = Date.now(), this.dotsUpdateInterval = n, this.baseText = r;
  }
  start() {
    this.isAnimating = !0;
    let t = 1;
    this.messages.update((n) => [
      ...n,
      {
        id: this.tempMessageId,
        text: `${this.baseText} .`,
        sender: "server",
        type: "text"
      }
    ]), this.intervalId = setInterval(() => {
      this.isAnimating && (t = t % 3 + 1, this.messages.update((n) => {
        const r = n.findIndex((i) => "id" in i && i.id === this.tempMessageId);
        return r !== -1 && (n[r] = {
          id: this.tempMessageId,
          text: `${this.baseText} ${".".repeat(t)}`,
          sender: "server",
          type: "text"
        }), n;
      }));
    }, this.dotsUpdateInterval);
  }
  stop(t) {
    this.isAnimating = !1, this.intervalId && clearInterval(this.intervalId), this.messages.update((n) => {
      const r = n.findIndex((i) => "id" in i && i.id === this.tempMessageId);
      return r !== -1 ? [
        ...n.slice(0, r),
        {
          text: t,
          sender: "server",
          type: "text"
        },
        ...n.slice(r + 1)
      ] : n;
    });
  }
  getTempMessageId() {
    return this.tempMessageId;
  }
}
function ca(e) {
  navigator.clipboard.writeText(e).then(() => console.log("Copied:", e)).catch((t) => console.error("Error copying:", t));
}
async function fa(e, t, n, r, i) {
  const s = new Zi({
    messages: n,
    baseText: "🔊 записывает аудио-сообщение"
  });
  s.start(), await r();
  try {
    const o = await Wo({
      text: e,
      user_id: t,
      app_name: i
    }), l = ha(o.audio_data, "audio/mpeg"), c = URL.createObjectURL(l);
    n.update((u) => {
      const f = u.findIndex((d) => "id" in d && d.id === s.getTempMessageId());
      if (f !== -1) {
        const d = [...u];
        return d[f] = {
          text: "",
          sender: "server",
          type: "audio",
          audioUrl: c
        }, d;
      }
      return u;
    }), await ki(), setTimeout(r, 50);
  } catch (o) {
    console.error("Error in TTS request:", o), s.stop("Произошла ошибка при озвучивании сообщения"), await r();
  }
}
function ha(e, t) {
  try {
    const n = atob(e), r = [];
    for (let i = 0; i < n.length; i += 512) {
      const s = n.slice(i, i + 512), o = new Array(s.length);
      for (let c = 0; c < s.length; c++)
        o[c] = s.charCodeAt(c);
      const l = new Uint8Array(o);
      r.push(l);
    }
    return new Blob(r, { type: t });
  } catch (n) {
    throw console.error("Base64 decoding error:", n), new Error("Invalid base64 string");
  }
}
function da(e) {
  return ua.sanitize(e);
}
function pa() {
  const e = _a("userId");
  if (e) return e;
  const t = ma();
  return va("userId", t, 365), t;
}
function ma() {
  return crypto.randomUUID();
}
function va(e, t, n) {
  const r = /* @__PURE__ */ new Date();
  r.setDate(r.getDate() + n), document.cookie = `${e}=${t}; expires=${r.toUTCString()}; path=/`;
}
function _a(e) {
  const t = document.cookie.match(`(^|;)\\s*${e}\\s*=\\s*([^;]+)`);
  return t ? t[2] : null;
}
function ga() {
  return localStorage.setItem("cookie_consent", "true"), !1;
}
function V(e, t, n, r) {
  return new (n || (n = Promise))(function(i, s) {
    function o(u) {
      try {
        c(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      var f;
      u.done ? i(u.value) : (f = u.value, f instanceof n ? f : new n(function(d) {
        d(f);
      })).then(o, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
class qe {
  constructor() {
    this.listeners = {};
  }
  on(t, n, r) {
    if (this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), this.listeners[t].add(n), r == null ? void 0 : r.once) {
      const i = () => {
        this.un(t, i), this.un(t, n);
      };
      return this.on(t, i), i;
    }
    return () => this.un(t, n);
  }
  un(t, n) {
    var r;
    (r = this.listeners[t]) === null || r === void 0 || r.delete(n);
  }
  once(t, n) {
    return this.on(t, n, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t, ...n) {
    this.listeners[t] && this.listeners[t].forEach((r) => r(...n));
  }
}
const sn = { decode: function(e, t) {
  return V(this, void 0, void 0, function* () {
    const n = new AudioContext({ sampleRate: t });
    return n.decodeAudioData(e).finally(() => n.close());
  });
}, createBuffer: function(e, t) {
  return typeof e[0] == "number" && (e = [e]), function(n) {
    const r = n[0];
    if (r.some((i) => i > 1 || i < -1)) {
      const i = r.length;
      let s = 0;
      for (let o = 0; o < i; o++) {
        const l = Math.abs(r[o]);
        l > s && (s = l);
      }
      for (const o of n) for (let l = 0; l < i; l++) o[l] /= s;
    }
  }(e), { duration: t, length: e[0].length, sampleRate: e[0].length / t, numberOfChannels: e.length, getChannelData: (n) => e == null ? void 0 : e[n], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function Qi(e, t) {
  const n = t.xmlns ? document.createElementNS(t.xmlns, e) : document.createElement(e);
  for (const [r, i] of Object.entries(t)) if (r === "children") for (const [s, o] of Object.entries(t)) typeof o == "string" ? n.appendChild(document.createTextNode(o)) : n.appendChild(Qi(s, o));
  else r === "style" ? Object.assign(n.style, i) : r === "textContent" ? n.textContent = i : n.setAttribute(r, i.toString());
  return n;
}
function si(e, t, n) {
  const r = Qi(e, t || {});
  return n == null || n.appendChild(r), r;
}
var ba = Object.freeze({ __proto__: null, createElement: si, default: si });
const ya = { fetchBlob: function(e, t, n) {
  return V(this, void 0, void 0, function* () {
    const r = yield fetch(e, n);
    if (r.status >= 400) throw new Error(`Failed to fetch ${e}: ${r.status} (${r.statusText})`);
    return function(i, s) {
      V(this, void 0, void 0, function* () {
        if (!i.body || !i.headers) return;
        const o = i.body.getReader(), l = Number(i.headers.get("Content-Length")) || 0;
        let c = 0;
        const u = (d) => V(this, void 0, void 0, function* () {
          c += (d == null ? void 0 : d.length) || 0;
          const h = Math.round(c / l * 100);
          s(h);
        }), f = () => V(this, void 0, void 0, function* () {
          let d;
          try {
            d = yield o.read();
          } catch {
            return;
          }
          d.done || (u(d.value), yield f());
        });
        f();
      });
    }(r.clone(), t), r.blob();
  });
} };
class Ea extends qe {
  constructor(t) {
    super(), this.isExternalMedia = !1, t.media ? (this.media = t.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), t.mediaControls && (this.media.controls = !0), t.autoplay && (this.media.autoplay = !0), t.playbackRate != null && this.onMediaEvent("canplay", () => {
      t.playbackRate != null && (this.media.playbackRate = t.playbackRate);
    }, { once: !0 });
  }
  onMediaEvent(t, n, r) {
    return this.media.addEventListener(t, n, r), () => this.media.removeEventListener(t, n, r);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const t = this.getSrc();
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  }
  canPlayType(t) {
    return this.media.canPlayType(t) !== "";
  }
  setSrc(t, n) {
    const r = this.getSrc();
    if (t && r === t) return;
    this.revokeSrc();
    const i = n instanceof Blob && (this.canPlayType(n.type) || !t) ? URL.createObjectURL(n) : t;
    r && (this.media.src = "");
    try {
      this.media.src = i;
    } catch {
      this.media.src = t;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.media.remove(), this.revokeSrc(), this.media.src = "", this.media.load());
  }
  setMediaElement(t) {
    this.media = t;
  }
  play() {
    return V(this, void 0, void 0, function* () {
      return this.media.play();
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(t) {
    this.media.currentTime = Math.max(0, Math.min(t, this.getDuration()));
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(t) {
    this.media.volume = t;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(t) {
    this.media.muted = t;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(t, n) {
    n != null && (this.media.preservesPitch = n), this.media.playbackRate = t;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(t) {
    return this.media.setSinkId(t);
  }
}
class ve extends qe {
  constructor(t, n) {
    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = t;
    const r = this.parentFromOptionsContainer(t.container);
    this.parent = r;
    const [i, s] = this.initHtml();
    r.appendChild(i), this.container = i, this.scrollContainer = s.querySelector(".scroll"), this.wrapper = s.querySelector(".wrapper"), this.canvasWrapper = s.querySelector(".canvases"), this.progressWrapper = s.querySelector(".progress"), this.cursor = s.querySelector(".cursor"), n && s.appendChild(n), this.initEvents();
  }
  parentFromOptionsContainer(t) {
    let n;
    if (typeof t == "string" ? n = document.querySelector(t) : t instanceof HTMLElement && (n = t), !n) throw new Error("Container not found");
    return n;
  }
  initEvents() {
    const t = (n) => {
      const r = this.wrapper.getBoundingClientRect(), i = n.clientX - r.left, s = n.clientY - r.top;
      return [i / r.width, s / r.height];
    };
    if (this.wrapper.addEventListener("click", (n) => {
      const [r, i] = t(n);
      this.emit("click", r, i);
    }), this.wrapper.addEventListener("dblclick", (n) => {
      const [r, i] = t(n);
      this.emit("dblclick", r, i);
    }), this.options.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const { scrollLeft: n, scrollWidth: r, clientWidth: i } = this.scrollContainer, s = n / r, o = (n + i) / r;
      this.emit("scroll", s, o, n, n + i);
    }), typeof ResizeObserver == "function") {
      const n = this.createDelay(100);
      this.resizeObserver = new ResizeObserver(() => {
        n().then(() => this.onContainerResize()).catch(() => {
        });
      }), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const t = this.parent.clientWidth;
    t === this.lastContainerWidth && this.options.height !== "auto" || (this.lastContainerWidth = t, this.reRender());
  }
  initDrag() {
    this.subscriptions.push(function(t, n, r, i, s = 3, o = 0, l = 100) {
      if (!t) return () => {
      };
      const c = matchMedia("(pointer: coarse)").matches;
      let u = () => {
      };
      const f = (d) => {
        if (d.button !== o) return;
        d.preventDefault(), d.stopPropagation();
        let h = d.clientX, p = d.clientY, m = !1;
        const A = Date.now(), T = (g) => {
          if (g.preventDefault(), g.stopPropagation(), c && Date.now() - A < l) return;
          const x = g.clientX, H = g.clientY, G = x - h, K = H - p;
          if (m || Math.abs(G) > s || Math.abs(K) > s) {
            const ct = t.getBoundingClientRect(), { left: F, top: Wt } = ct;
            m || (r == null || r(h - F, p - Wt), m = !0), n(G, K, x - F, H - Wt), h = x, p = H;
          }
        }, b = (g) => {
          if (m) {
            const x = g.clientX, H = g.clientY, G = t.getBoundingClientRect(), { left: K, top: ct } = G;
            i == null || i(x - K, H - ct);
          }
          u();
        }, E = (g) => {
          g.relatedTarget && g.relatedTarget !== document.documentElement || b(g);
        }, C = (g) => {
          m && (g.stopPropagation(), g.preventDefault());
        }, w = (g) => {
          m && g.preventDefault();
        };
        document.addEventListener("pointermove", T), document.addEventListener("pointerup", b), document.addEventListener("pointerout", E), document.addEventListener("pointercancel", E), document.addEventListener("touchmove", w, { passive: !1 }), document.addEventListener("click", C, { capture: !0 }), u = () => {
          document.removeEventListener("pointermove", T), document.removeEventListener("pointerup", b), document.removeEventListener("pointerout", E), document.removeEventListener("pointercancel", E), document.removeEventListener("touchmove", w), setTimeout(() => {
            document.removeEventListener("click", C, { capture: !0 });
          }, 10);
        };
      };
      return t.addEventListener("pointerdown", f), () => {
        u(), t.removeEventListener("pointerdown", f);
      };
    }(this.wrapper, (t, n, r) => {
      this.emit("drag", Math.max(0, Math.min(1, r / this.wrapper.getBoundingClientRect().width)));
    }, (t) => {
      this.isDragging = !0, this.emit("dragstart", Math.max(0, Math.min(1, t / this.wrapper.getBoundingClientRect().width)));
    }, (t) => {
      this.isDragging = !1, this.emit("dragend", Math.max(0, Math.min(1, t / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(t, n) {
    var r;
    const i = ((r = this.audioData) === null || r === void 0 ? void 0 : r.numberOfChannels) || 1;
    if (t == null) return 128;
    if (!isNaN(Number(t))) return Number(t);
    if (t === "auto") {
      const s = this.parent.clientHeight || 128;
      return n != null && n.every((o) => !o.overlay) ? s / i : s;
    }
    return 128;
  }
  initHtml() {
    const t = document.createElement("div"), n = t.attachShadow({ mode: "open" }), r = this.options.cspNonce && typeof this.options.cspNonce == "string" ? this.options.cspNonce.replace(/"/g, "") : "";
    return n.innerHTML = `
      <style${r ? ` nonce="${r}"` : ""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [t, n];
  }
  setOptions(t) {
    if (this.options.container !== t.container) {
      const n = this.parentFromOptionsContainer(t.container);
      n.appendChild(this.container), this.parent = n;
    }
    t.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.options = t, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(t) {
    this.scrollContainer.scrollLeft = t;
  }
  setScrollPercentage(t) {
    const { scrollWidth: n } = this.scrollContainer, r = n * t;
    this.setScroll(r);
  }
  destroy() {
    var t, n;
    this.subscriptions.forEach((r) => r()), this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (n = this.unsubscribeOnScroll) === null || n === void 0 || n.forEach((r) => r()), this.unsubscribeOnScroll = [];
  }
  createDelay(t = 10) {
    let n, r;
    const i = () => {
      n && clearTimeout(n), r && r();
    };
    return this.timeouts.push(i), () => new Promise((s, o) => {
      i(), r = o, n = setTimeout(() => {
        n = void 0, r = void 0, s();
      }, t);
    });
  }
  convertColorValues(t) {
    if (!Array.isArray(t)) return t || "";
    if (t.length < 2) return t[0] || "";
    const n = document.createElement("canvas"), r = n.getContext("2d"), i = n.height * (window.devicePixelRatio || 1), s = r.createLinearGradient(0, 0, 0, i), o = 1 / (t.length - 1);
    return t.forEach((l, c) => {
      const u = c * o;
      s.addColorStop(u, l);
    }), s;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(t, n, r, i) {
    const s = t[0], o = t[1] || t[0], l = s.length, { width: c, height: u } = r.canvas, f = u / 2, d = this.getPixelRatio(), h = n.barWidth ? n.barWidth * d : 1, p = n.barGap ? n.barGap * d : n.barWidth ? h / 2 : 0, m = n.barRadius || 0, A = c / (h + p) / l, T = m && "roundRect" in r ? "roundRect" : "rect";
    r.beginPath();
    let b = 0, E = 0, C = 0;
    for (let w = 0; w <= l; w++) {
      const g = Math.round(w * A);
      if (g > b) {
        const G = Math.round(E * f * i), K = G + Math.round(C * f * i) || 1;
        let ct = f - G;
        n.barAlign === "top" ? ct = 0 : n.barAlign === "bottom" && (ct = u - K), r[T](b * (h + p), ct, h, K, m), b = g, E = 0, C = 0;
      }
      const x = Math.abs(s[w] || 0), H = Math.abs(o[w] || 0);
      x > E && (E = x), H > C && (C = H);
    }
    r.fill(), r.closePath();
  }
  renderLineWaveform(t, n, r, i) {
    const s = (o) => {
      const l = t[o] || t[0], c = l.length, { height: u } = r.canvas, f = u / 2, d = r.canvas.width / c;
      r.moveTo(0, f);
      let h = 0, p = 0;
      for (let m = 0; m <= c; m++) {
        const A = Math.round(m * d);
        if (A > h) {
          const b = f + (Math.round(p * f * i) || 1) * (o === 0 ? -1 : 1);
          r.lineTo(h, b), h = A, p = 0;
        }
        const T = Math.abs(l[m] || 0);
        T > p && (p = T);
      }
      r.lineTo(h, f);
    };
    r.beginPath(), s(0), s(1), r.fill(), r.closePath();
  }
  renderWaveform(t, n, r) {
    if (r.fillStyle = this.convertColorValues(n.waveColor), n.renderFunction) return void n.renderFunction(t, r);
    let i = n.barHeight || 1;
    if (n.normalize) {
      const s = Array.from(t[0]).reduce((o, l) => Math.max(o, Math.abs(l)), 0);
      i = s ? 1 / s : 1;
    }
    n.barWidth || n.barGap || n.barAlign ? this.renderBarWaveform(t, n, r, i) : this.renderLineWaveform(t, n, r, i);
  }
  renderSingleCanvas(t, n, r, i, s, o, l) {
    const c = this.getPixelRatio(), u = document.createElement("canvas");
    u.width = Math.round(r * c), u.height = Math.round(i * c), u.style.width = `${r}px`, u.style.height = `${i}px`, u.style.left = `${Math.round(s)}px`, o.appendChild(u);
    const f = u.getContext("2d");
    if (this.renderWaveform(t, n, f), u.width > 0 && u.height > 0) {
      const d = u.cloneNode(), h = d.getContext("2d");
      h.drawImage(u, 0, 0), h.globalCompositeOperation = "source-in", h.fillStyle = this.convertColorValues(n.progressColor), h.fillRect(0, 0, u.width, u.height), l.appendChild(d);
    }
  }
  renderMultiCanvas(t, n, r, i, s, o) {
    const l = this.getPixelRatio(), { clientWidth: c } = this.scrollContainer, u = r / l;
    let f = Math.min(ve.MAX_CANVAS_WIDTH, c, u), d = {};
    if (f === 0) return;
    if (n.barWidth || n.barGap) {
      const T = n.barWidth || 0.5, b = T + (n.barGap || T / 2);
      f % b != 0 && (f = Math.floor(f / b) * b);
    }
    const h = (T) => {
      if (T < 0 || T >= p || d[T]) return;
      d[T] = !0;
      const b = T * f, E = Math.min(u - b, f);
      if (E <= 0) return;
      const C = t.map((w) => {
        const g = Math.floor(b / u * w.length), x = Math.floor((b + E) / u * w.length);
        return w.slice(g, x);
      });
      this.renderSingleCanvas(C, n, E, i, b, s, o);
    }, p = Math.ceil(u / f);
    if (!this.isScrollable) {
      for (let T = 0; T < p; T++) h(T);
      return;
    }
    const m = this.scrollContainer.scrollLeft / u, A = Math.floor(m * p);
    if (h(A - 1), h(A), h(A + 1), p > 1) {
      const T = this.on("scroll", () => {
        const { scrollLeft: b } = this.scrollContainer, E = Math.floor(b / u * p);
        Object.keys(d).length > ve.MAX_NODES && (s.innerHTML = "", o.innerHTML = "", d = {}), h(E - 1), h(E), h(E + 1);
      });
      this.unsubscribeOnScroll.push(T);
    }
  }
  renderChannel(t, n, r, i) {
    var { overlay: s } = n, o = function(f, d) {
      var h = {};
      for (var p in f) Object.prototype.hasOwnProperty.call(f, p) && d.indexOf(p) < 0 && (h[p] = f[p]);
      if (f != null && typeof Object.getOwnPropertySymbols == "function") {
        var m = 0;
        for (p = Object.getOwnPropertySymbols(f); m < p.length; m++) d.indexOf(p[m]) < 0 && Object.prototype.propertyIsEnumerable.call(f, p[m]) && (h[p[m]] = f[p[m]]);
      }
      return h;
    }(n, ["overlay"]);
    const l = document.createElement("div"), c = this.getHeight(o.height, o.splitChannels);
    l.style.height = `${c}px`, s && i > 0 && (l.style.marginTop = `-${c}px`), this.canvasWrapper.style.minHeight = `${c}px`, this.canvasWrapper.appendChild(l);
    const u = l.cloneNode();
    this.progressWrapper.appendChild(u), this.renderMultiCanvas(t, o, r, c, l, u);
  }
  render(t) {
    return V(this, void 0, void 0, function* () {
      var n;
      this.timeouts.forEach((c) => c()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.options.width != null && (this.scrollContainer.style.width = typeof this.options.width == "number" ? `${this.options.width}px` : this.options.width);
      const r = this.getPixelRatio(), i = this.scrollContainer.clientWidth, s = Math.ceil(t.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = s > i;
      const o = this.options.fillParent && !this.isScrollable, l = (o ? i : s) * r;
      if (this.wrapper.style.width = o ? "100%" : `${s}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = t, this.emit("render"), this.options.splitChannels) for (let c = 0; c < t.numberOfChannels; c++) {
        const u = Object.assign(Object.assign({}, this.options), (n = this.options.splitChannels) === null || n === void 0 ? void 0 : n[c]);
        this.renderChannel([t.getChannelData(c)], u, l, c);
      }
      else {
        const c = [t.getChannelData(0)];
        t.numberOfChannels > 1 && c.push(t.getChannelData(1)), this.renderChannel(c, this.options, l, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach((r) => r()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const { scrollWidth: t } = this.scrollContainer, { right: n } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && t !== this.scrollContainer.scrollWidth) {
      const { right: r } = this.progressWrapper.getBoundingClientRect();
      let i = r - n;
      i *= 2, i = i < 0 ? Math.floor(i) : Math.ceil(i), i /= 2, this.scrollContainer.scrollLeft += i;
    }
  }
  zoom(t) {
    this.options.minPxPerSec = t, this.reRender();
  }
  scrollIntoView(t, n = !1) {
    const { scrollLeft: r, scrollWidth: i, clientWidth: s } = this.scrollContainer, o = t * i, l = r, c = r + s, u = s / 2;
    if (this.isDragging)
      o + 30 > c ? this.scrollContainer.scrollLeft += 30 : o - 30 < l && (this.scrollContainer.scrollLeft -= 30);
    else {
      (o < l || o > c) && (this.scrollContainer.scrollLeft = o - (this.options.autoCenter ? u : 0));
      const f = o - r - u;
      n && this.options.autoCenter && f > 0 && (this.scrollContainer.scrollLeft += Math.min(f, 10));
    }
    {
      const f = this.scrollContainer.scrollLeft, d = f / i, h = (f + s) / i;
      this.emit("scroll", d, h, f, f + s);
    }
  }
  renderProgress(t, n) {
    if (isNaN(t)) return;
    const r = 100 * t;
    this.canvasWrapper.style.clipPath = `polygon(${r}% 0, 100% 0, 100% 100%, ${r}% 100%)`, this.progressWrapper.style.width = `${r}%`, this.cursor.style.left = `${r}%`, this.cursor.style.transform = `translateX(-${Math.round(r) === 100 ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(t, n);
  }
  exportImage(t, n, r) {
    return V(this, void 0, void 0, function* () {
      const i = this.canvasWrapper.querySelectorAll("canvas");
      if (!i.length) throw new Error("No waveform data");
      if (r === "dataURL") {
        const s = Array.from(i).map((o) => o.toDataURL(t, n));
        return Promise.resolve(s);
      }
      return Promise.all(Array.from(i).map((s) => new Promise((o, l) => {
        s.toBlob((c) => {
          c ? o(c) : l(new Error("Could not export image"));
        }, t, n);
      })));
    });
  }
}
ve.MAX_CANVAS_WIDTH = 8e3, ve.MAX_NODES = 10;
class Ta extends qe {
  constructor() {
    super(...arguments), this.unsubscribe = () => {
    };
  }
  start() {
    this.unsubscribe = this.on("tick", () => {
      requestAnimationFrame(() => {
        this.emit("tick");
      });
    }), this.emit("tick");
  }
  stop() {
    this.unsubscribe();
  }
  destroy() {
    this.unsubscribe();
  }
}
class Vn extends qe {
  constructor(t = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return V(this, void 0, void 0, function* () {
    });
  }
  get src() {
    return this.currentSrc;
  }
  set src(t) {
    if (this.currentSrc = t, this._duration = void 0, !t) return this.buffer = null, void this.emit("emptied");
    fetch(t).then((n) => {
      if (n.status >= 400) throw new Error(`Failed to fetch ${t}: ${n.status} (${n.statusText})`);
      return n.arrayBuffer();
    }).then((n) => this.currentSrc !== t ? null : this.audioContext.decodeAudioData(n)).then((n) => {
      this.currentSrc === t && (this.buffer = n, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    });
  }
  _play() {
    var t;
    if (!this.paused) return;
    this.paused = !1, (t = this.bufferNode) === null || t === void 0 || t.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let n = this.playedDuration * this._playbackRate;
    (n >= this.duration || n < 0) && (n = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, n), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var t;
    this.paused = !0, (t = this.bufferNode) === null || t === void 0 || t.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return V(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(t) {
    var n, r;
    const i = t - this.currentTime;
    (n = this.bufferNode) === null || n === void 0 || n.stop(this.audioContext.currentTime + i), (r = this.bufferNode) === null || r === void 0 || r.addEventListener("ended", () => {
      this.bufferNode = null, this.pause();
    }, { once: !0 });
  }
  setSinkId(t) {
    return V(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(t);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(t) {
    this._playbackRate = t, this.bufferNode && (this.bufferNode.playbackRate.value = t);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(t) {
    const n = !this.paused;
    n && this._pause(), this.playedDuration = t / this._playbackRate, n && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var t, n;
    return (t = this._duration) !== null && t !== void 0 ? t : ((n = this.buffer) === null || n === void 0 ? void 0 : n.duration) || 0;
  }
  set duration(t) {
    this._duration = t;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(t) {
    this.gainNode.gain.value = t, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(t) {
    this._muted !== t && (this._muted = t, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(t) {
    return /^(audio|video)\//.test(t);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const t = [];
    if (!this.buffer) return t;
    const n = this.buffer.numberOfChannels;
    for (let r = 0; r < n; r++) t.push(this.buffer.getChannelData(r));
    return t;
  }
}
const wa = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class We extends Ea {
  static create(t) {
    return new We(t);
  }
  constructor(t) {
    const n = t.media || (t.backend === "WebAudio" ? new Vn() : void 0);
    super({ media: n, mediaControls: t.mediaControls, autoplay: t.autoplay, playbackRate: t.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, wa, t), this.timer = new Ta();
    const r = n ? void 0 : this.getMediaElement();
    this.renderer = new ve(this.options, r), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const i = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: s, duration: o } = this.options;
      (i || s && o) && this.load(i, s, o).catch(() => null);
    });
  }
  updateProgress(t = this.getCurrentTime()) {
    return this.renderer.renderProgress(t / this.getDuration(), this.isPlaying()), t;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const t = this.updateProgress();
        this.emit("timeupdate", t), this.emit("audioprocess", t), this.stopAtPosition != null && this.isPlaying() && t >= this.stopAtPosition && this.pause();
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const t = this.updateProgress();
      this.emit("timeupdate", t);
    }), this.onMediaEvent("play", () => {
      this.emit("play"), this.timer.start();
    }), this.onMediaEvent("pause", () => {
      this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("ended", () => {
      this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", () => {
      var t;
      this.emit("error", (t = this.getMediaElement().error) !== null && t !== void 0 ? t : new Error("Media error")), this.stopAtPosition = null;
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (t, n) => {
      this.options.interact && (this.seekTo(t), this.emit("interaction", t * this.getDuration()), this.emit("click", t, n));
    }), this.renderer.on("dblclick", (t, n) => {
      this.emit("dblclick", t, n);
    }), this.renderer.on("scroll", (t, n, r, i) => {
      const s = this.getDuration();
      this.emit("scroll", t * s, n * s, r, i);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", (t) => {
      this.emit("dragstart", t);
    }), this.renderer.on("dragend", (t) => {
      this.emit("dragend", t);
    }));
    {
      let t;
      this.subscriptions.push(this.renderer.on("drag", (n) => {
        if (!this.options.interact) return;
        let r;
        this.renderer.renderProgress(n), clearTimeout(t), this.isPlaying() ? r = 0 : this.options.dragToSeek === !0 ? r = 200 : typeof this.options.dragToSeek == "object" && this.options.dragToSeek !== void 0 && (r = this.options.dragToSeek.debounceTime), t = setTimeout(() => {
          this.seekTo(n);
        }, r), this.emit("interaction", n * this.getDuration()), this.emit("drag", n);
      }));
    }
  }
  initPlugins() {
    var t;
    !((t = this.options.plugins) === null || t === void 0) && t.length && this.options.plugins.forEach((n) => {
      this.registerPlugin(n);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach((t) => t()), this.mediaSubscriptions = [];
  }
  setOptions(t) {
    this.options = Object.assign({}, this.options, t), t.duration && !t.peaks && (this.decodedData = sn.createBuffer(this.exportPeaks(), t.duration)), t.peaks && t.duration && (this.decodedData = sn.createBuffer(t.peaks, t.duration)), this.renderer.setOptions(this.options), t.audioRate && this.setPlaybackRate(t.audioRate), t.mediaControls != null && (this.getMediaElement().controls = t.mediaControls);
  }
  registerPlugin(t) {
    return t._init(this), this.plugins.push(t), this.subscriptions.push(t.once("destroy", () => {
      this.plugins = this.plugins.filter((n) => n !== t);
    })), t;
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(t) {
    return this.renderer.setScroll(t);
  }
  setScrollTime(t) {
    const n = t / this.getDuration();
    this.renderer.setScrollPercentage(n);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(t, n, r, i) {
    return V(this, void 0, void 0, function* () {
      var s;
      if (this.emit("load", t), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !n && !r) {
        const l = this.options.fetchParams || {};
        window.AbortController && !l.signal && (this.abortController = new AbortController(), l.signal = (s = this.abortController) === null || s === void 0 ? void 0 : s.signal);
        const c = (f) => this.emit("loading", f);
        n = yield ya.fetchBlob(t, c, l);
        const u = this.options.blobMimeType;
        u && (n = new Blob([n], { type: u }));
      }
      this.setSrc(t, n);
      const o = yield new Promise((l) => {
        const c = i || this.getDuration();
        c ? l(c) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => l(this.getDuration()), { once: !0 }));
      });
      if (!t && !n) {
        const l = this.getMediaElement();
        l instanceof Vn && (l.duration = o);
      }
      if (r) this.decodedData = sn.createBuffer(r, o || 0);
      else if (n) {
        const l = yield n.arrayBuffer();
        this.decodedData = yield sn.decode(l, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(t, n, r) {
    return V(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(t, void 0, n, r);
      } catch (i) {
        throw this.emit("error", i), i;
      }
    });
  }
  loadBlob(t, n, r) {
    return V(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", t, n, r);
      } catch (i) {
        throw this.emit("error", i), i;
      }
    });
  }
  zoom(t) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(t), this.emit("zoom", t);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({ channels: t = 2, maxLength: n = 8e3, precision: r = 1e4 } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const i = Math.min(t, this.decodedData.numberOfChannels), s = [];
    for (let o = 0; o < i; o++) {
      const l = this.decodedData.getChannelData(o), c = [], u = l.length / n;
      for (let f = 0; f < n; f++) {
        const d = l.slice(Math.floor(f * u), Math.ceil((f + 1) * u));
        let h = 0;
        for (let p = 0; p < d.length; p++) {
          const m = d[p];
          Math.abs(m) > Math.abs(h) && (h = m);
        }
        c.push(Math.round(h * r) / r);
      }
      s.push(c);
    }
    return s;
  }
  getDuration() {
    let t = super.getDuration() || 0;
    return t !== 0 && t !== 1 / 0 || !this.decodedData || (t = this.decodedData.duration), t;
  }
  toggleInteraction(t) {
    this.options.interact = t;
  }
  setTime(t) {
    this.stopAtPosition = null, super.setTime(t), this.updateProgress(t), this.emit("timeupdate", t);
  }
  seekTo(t) {
    const n = this.getDuration() * t;
    this.setTime(n);
  }
  play(t, n) {
    const r = Object.create(null, { play: { get: () => super.play } });
    return V(this, void 0, void 0, function* () {
      return t != null && this.setTime(t), n != null && (this.media instanceof Vn ? this.media.stopAt(n) : this.stopAtPosition = n), r.play.call(this);
    });
  }
  playPause() {
    return V(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(t) {
    this.setTime(this.getCurrentTime() + t);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(t) {
    this.unsubscribePlayerEvents(), super.setMediaElement(t), this.initPlayerEvents();
  }
  exportImage() {
    return V(this, arguments, void 0, function* (t = "image/png", n = 1, r = "dataURL") {
      return this.renderer.exportImage(t, n, r);
    });
  }
  destroy() {
    var t;
    this.emit("destroy"), (t = this.abortController) === null || t === void 0 || t.abort(), this.plugins.forEach((n) => n.destroy()), this.subscriptions.forEach((n) => n()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
We.BasePlugin = class extends qe {
  constructor(e) {
    super(), this.subscriptions = [], this.options = e;
  }
  onInit() {
  }
  _init(e) {
    this.wavesurfer = e, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((e) => e());
  }
}, We.dom = ba;
var Sa = /* @__PURE__ */ te("<p><!></p>"), Aa = /* @__PURE__ */ te('<div class="audio-message"><div class="wavesurfer-container"><div class="wave"></div></div></div>'), Ca = /* @__PURE__ */ te('<div class="message-actions"><button class="copy-btn" aria-label="Copy" title="Copy message"><img alt="Copy"></button> <button class="speak-btn" aria-label="Voice message" title="Voice message"><img alt="Speak"></button></div>'), Ra = /* @__PURE__ */ te('<div><div class="message-container"><div class="message"><!></div> <!></div></div>'), xa = /* @__PURE__ */ te('<div class="mic-notice"><p>🎤<br>Терпение, мой друг<br>Эта функция будет доступна<br>чуть позже</p></div>'), ka = /* @__PURE__ */ te('<div class="cookie-notice"><p>Мы используем файлы cookie для улучшения работы приложения<br> Продолжая использование, вы соглашаетесь с нашей политикой cookie</p> <button>Ok</button></div>'), Ma = /* @__PURE__ */ te('<div class="chat-box"><div class="header-banner-container"></div> <div class="messages-container"></div> <div class="bottom-row"><button class="mic-btn"><img alt="Voice Message"></button> <input type="text" placeholder="Type your message here..." class="input-field"> <button class="send-btn"><img alt="Send"></button></div> <div class="basement"><img alt="Chat Basement Logo" class="basement-logo"></div> <!></div> <!>', 1);
function Da(e, t) {
  Ii(t, !1);
  const [n, r] = No(), i = () => Oo(l, "$messages", n);
  let s = Xr(t, "app_name", 12, "blacksmith_web"), o = Xr(t, "basePath", 12, "/blacksmith_web/chat_component_res");
  const l = Mo([]);
  let c = xe(""), u = xe(), f = xe(), d = xe(!0), h = xe(!1);
  xo(async () => {
    console.log("basePath:", o()), window.location.hostname !== "0xthecableguy.github.io" && (o("https://0xthecableguy.github.io/blacksmith_web/chat_component_res"), console.log("Using absolute path for resources:", o())), z(f, pa()), console.log("User ID:", S(f)), localStorage.getItem("cookie_consent") === "true" && z(d, !1);
    try {
      const W = await Ho(S(f), s());
      l.set(W.map((N) => ({
        text: N.message,
        sender: N.sender,
        type: "text"
      }))), await m();
    } catch (W) {
      console.error("Error fetching chat history:", W);
    }
  });
  async function p() {
    if (!S(c).trim()) return;
    l.update((W) => [
      ...W,
      {
        text: S(c),
        sender: "user",
        type: "text"
      }
    ]), await m();
    const O = S(c);
    z(c, "");
    const $ = new Zi({ messages: l });
    $.start(), await m();
    try {
      const W = await Fo({
        text: O,
        user_id: S(f),
        app_name: s()
      });
      $.stop(W.text), await m();
    } catch (W) {
      console.error("Error sending request to server:", W), $.stop("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже");
    }
  }
  async function m() {
    await ki(), S(u) && S(u).scrollTo({
      top: S(u).scrollHeight,
      behavior: "smooth"
    });
  }
  function A() {
    z(d, ga());
  }
  function T(O, $) {
    if (!$) return;
    const W = {
      container: O,
      waveColor: "#6578fe",
      progressColor: "#bec5fc",
      cursorColor: "#d5deff",
      backgroundColor: "#d5deff",
      mediaControls: !0,
      height: 64,
      interact: !0,
      dragToSeek: !1,
      hideScrollbar: !1,
      autoScroll: !0,
      autoCenter: !0,
      normalize: !0,
      fillParent: !0
    }, N = We.create(W);
    return N.load($), N;
  }
  function b() {
    z(h, !0), setTimeout(() => z(h, !1), 3e3);
  }
  Ro();
  var E = Ma(), C = Wr(E), w = St(lt(C), 2);
  mo(w, 5, i, ho, (O, $) => {
    var W = Ra(), N = lt(W), ee = lt(N), B = lt(ee);
    {
      var Ye = (ft) => {
        var it = Sa(), _t = lt(it);
        go(_t, () => da(S($).text)), Z(it), Ot(ft, it);
      }, I = (ft) => {
        var it = uo(), _t = Wr(it);
        {
          var ne = (st) => {
            var xt = Aa(), kt = lt(xt);
            bo(kt, (we, Se) => T == null ? void 0 : T(we, Se), () => S($).audioUrl), Z(xt), Ot(st, xt);
          };
          ke(
            _t,
            (st) => {
              S($).type === "audio" && st(ne);
            },
            !0
          );
        }
        Ot(ft, it);
      };
      ke(B, (ft) => {
        S($).type === "text" ? ft(Ye) : ft(I, !1);
      });
    }
    Z(ee);
    var Vt = St(ee, 2);
    {
      var Te = (ft) => {
        var it = Ca(), _t = lt(it), ne = lt(_t);
        Z(_t);
        var st = St(_t, 2), xt = lt(st);
        Z(st), Z(it), Wn(() => {
          Kt(ne, "src", `${o() ?? ""}/copy_icon.png`), Kt(xt, "src", `${o() ?? ""}/speak_icon.png`);
        }), le("click", _t, () => ca(S($).text)), le("click", st, () => fa(S($).text, S(f), l, m, s())), Ot(ft, it);
      };
      ke(Vt, (ft) => {
        S($).sender === "server" && S($).type === "text" && ft(Te);
      });
    }
    Z(N), Z(W), Wn(() => Eo(W, 1, `message-wrapper ${(S($).sender === "user" ? "user-message" : "server-message") ?? ""}`)), Ot(O, W);
  }), Z(w), Co(w, (O) => z(u, O), () => S(u));
  var g = St(w, 2), x = lt(g), H = lt(x);
  Z(x);
  var G = St(x, 2);
  To(G);
  var K = St(G, 2), ct = lt(K);
  Z(K), Z(g);
  var F = St(g, 2), Wt = lt(F);
  Z(F);
  var ye = St(F, 2);
  {
    var Ee = (O) => {
      var $ = xa();
      Ot(O, $);
    };
    ke(ye, (O) => {
      S(h) && O(Ee);
    });
  }
  Z(C);
  var kn = St(C, 2);
  {
    var Mn = (O) => {
      var $ = ka(), W = St(lt($), 2);
      Z($), le("click", W, A), Ot(O, $);
    };
    ke(kn, (O) => {
      S(d) && O(Mn);
    });
  }
  Wn(() => {
    Kt(H, "src", `${o() ?? ""}/mic_icon.png`), Kt(ct, "src", `${o() ?? ""}/mini_logo.png`), Kt(Wt, "src", `${o() ?? ""}/logo_black.png`);
  }), le("click", x, b), So(G, () => S(c), (O) => z(c, O)), le("keydown", G, (O) => O.key === "Enter" && p()), le("click", K, p), Ot(e, E), Ao(t, "scrollToBottom", m);
  var Dn = Ui({
    scrollToBottom: m,
    get app_name() {
      return s();
    },
    set app_name(O) {
      s(O), gn();
    },
    get basePath() {
      return o();
    },
    set basePath(O) {
      o(O), gn();
    }
  });
  return r(), Dn;
}
customElements.define("blacksmithlab-chat-ui", Uo(Da, { app_name: {}, basePath: {} }, [], ["scrollToBottom"], !0));
export {
  Da as default
};
