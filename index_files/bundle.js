(async t => {
    if (!t) return;
    let e = t.document,
        a = e.querySelector("#box"),
        i = e.querySelector("#box-wrapper"),
        r = e.querySelector("#box-text"),
        s = e.querySelector("#capit"),
        n = e.querySelector("#flipper"),
        o = (e.querySelector("#browser"), e.querySelector("#browser-text")),
        l = e.querySelector("#final"),
        d = e.querySelector("#scale"),
        c = {},
        h = ["self", "project", "social"],
        w = [1],
        y = !0,
        u = 0,
        f = 0,
        p = !1,
        g = (t, e) => {
            let a = parseInt(t, 10);
            return `${a*e}${t.replace(`
            $ {
                a
            }
            `,"").trim()}`
        };
    let b = (t = !1) => {
            if (t) {
                let t = e.body.offsetWidth,
                    a = e.body.offsetHeight;
                if (!(718 <= a && 1220 <= t)) {
                    let e = Math.max(718 / a, 1220 / t) + .1,
                        i = 1 / e;
                    return d.style.transform = `scale(${i})`, d.style.height = `${100*e}%`, d.style.width = `${100*e}%`, d.style.marginLeft = `-${t*(1-i)/2*e}px`, d.style.marginTop = `-${a*(1-i)/2*e}px`, !0
                } {
                    let e = Math.min(a / 718, t / 1220);
                    if (e > 1.2) return e /= 1.2, d.style.transform = `scale(${e})`, !0
                }
            }
            return d.style.transform = null, d.style.height = null, d.style.width = null, d.style.marginLeft = null, d.style.marginTop = null, !1
        },
        x = (t = 1e3) => new Promise(e => {
            setTimeout(e, t)
        }),
        m = t => Math.floor(Math.random() * Math.pow(10, t)),
        k = null,
        L = !0,
        _ = (t, e) => {
            L && (t.flashOn = e, t.flashOn ? t.innerHTML += "▌" : t.innerHTML.endsWith("▌") && (t.innerHTML = t.innerHTML.substr(0, t.innerHTML.length - 1)))
        },
        v = (t, a = "") => {
            _(k, !1);
            let i = e.createElement("a");
            if (i.style.display = "inline-block", i.style.width = "4px", k = i, t.appendChild(i), a) {
                let i = e.createElement("div");
                i.innerHTML = a, t.appendChild(i.firstChild)
            }
            _(k, !0)
        },
        M = (setInterval(() => {
            k && _(k, !k.flashOn)
        }, 500), !1),
        $ = async(t, e, a, i = 50, r = "", s = "", n = "", o = !0) => {
            M = !1, k === t && (_(k, !1), L = !1);
            let l = t.innerHTML || "";
            if (l && i && i > 0)
                for (let e = l.length - 1; e >= 0; e--) t.innerHTML = l.substr(0, e), (!M || !o) && await x(i);
            i >= 0 && (l = ""), l += r, r && (t.innerHTML = l);
            let d = "";
            for (let i = 0; i < e.length; i++) d += e[i], t.innerHTML = l + d, s && (t.innerHTML += s.repeat(e.length - d.length)), n && (t.innerHTML += n), a > 0 && (!M || !o) && await x(a);
            k === t && (L = !0)
        },
        j = async() => {
            let d = !1;
            switch (p = !0, u) {
                case 0:
                    let L = !1;
                    switch (f) {
                        case 0:
                            s.classList.add("show"), await x(200);
                            break;
                        case 1:
                            await $(s, "I'm Koileo", 100, 0);
                            break;
                        case 2:
                            await $(s, "Aka, Koileo", 100, 25);
                            break;
                        case 3:
                            await $(s, "Welcome ~", 100);
                            break;
                        case 4:
                            s.classList.add("open"), s.classList.add("small"), n.classList.add("open"), i.classList.add("show"), await x(600), a.classList.add("tend"), r.classList.add("tend"), n.classList.add("tend"), await x(400), await $(r, "~ sh ./start.sh", 75), k = r, await v(r, "<a class='ls-p showp' style='color: #EEE'><i class='triangle'></i>Press Enter or Click to Continue</a>");
                            break;
                        case 6:
                            n.classList.remove("open"), s.classList.remove("open"), s.classList.remove("show"), await $(r, "~ sh ./start.sh", 0, 0), k = r, await x(600), (async() => {
                                y = !1;
                                try {
                                    for (let e = 0; e < h.length; e++) {
                                        let a = h[e],
                                            i = w[e],
                                            r = `./index_files/${a}.json`,
                                            s = await t.fetch(r);
                                        c[a] = await(1 === i ? s.text() : s.json())
                                    }
                                } catch (t) {
                                    return void console.error("[Error] Fetching Error!")
                                }
                                y = !0
                            })(), await $(r, ".........", 250, -1, "\n\n> Starting ");
                            for (let t of h) {
                                let e = "project" === t ? 3 : 8;
                                await x(400), await $(r, "", 250, -1, `\n\n> Downloading ${t}.json `), await $(r, "=".repeat(108), e, -1, "\n> [", " ", "]", !1), await $(r, "", 250, -1, `\n> Finished ${t}.json `)
                            }
                            if (await x(600), await $(r, "", 250, -1, "\n\n> Building bundles "), await $(r, "=".repeat(108), 12, -1, "\n> [", " ", "]", !1), await $(r, "", 250, -1, "\n> Finished Building "), !y) return await $(r, ".........", 250, -1, "\n\n> Engine Starts Failed "), void await $(r, "", 250, -1, "\n\n> [Please Try Again Later] ");
                            await $(r, "", 250, -1, "\n\n> Engine Starts "), await x(600), await $(r, "", 250, -1, "\n\n[Press Enter or Click to Continue]");
                            break;
                        default:
                            5 !== f ? (f = 0, u++) : f++, L = !0
                    }
                    if (L) break;
                    f++, d = !0, await x(800);
                    break;
                case 1:
                    n.classList.add("flip"), await x(800), n.style.width = g(n.offsetWidth + "px", 1.3), n.style.height = g(n.offsetHeight + "px", 1.3), n.style.top = `calc(50% - ${g(n.offsetHeight+"px",.65)})`, await x(800), await $(o, "parseJSON(response);", 50, 0, "> "), await $(o, "........", 100, -1, "\n> "), await $(o, "", 100, 0, " "), await x(200), k = o, await $(o, "cat result\n", 50, 0, "> "), await x(400), _(k, !1), o.classList.add("json"), await $(o, "", 100, -1, c.self + "\n"), t.hljs && t.hljs.highlightBlock(o), _(k, !0), await x(1200), await $(o, "", 250, -1, "\n[Press Enter or Click to Continue]"), v(o), u++;
                    break;
                case 2:
                    await $(o, "ls -al ./projects\n", 50, 0, "> "), await x(400), await(async(t, a = !0) => {
                        let i = c.project;
                        if (!(i && i.info && i.personal && i.contribution)) return;
                        let r = i.color || {};
                        await $(t, "# " + i.info + "\n", 50, -1, "\n<a style='color: #666'>  ", "", "</a>");
                        for (let e of["contribution", "personal"]) {
                            let s = i[e],
                                n = r[e] || "#EEE";
                            for (let i in s) await $(t, `  -rwxrw-r--\t1 ${e[0].toLocaleUpperCase()+e.substr(1,5)}\tYufan\t${m(5)}\tOct 31 00:00 `, 5, -1), await $(t, i, 5, -1, `<a class='ls' style='color: ${n}' href='${s[i][0]}' target='_blank'>`, "", `</a><a class='ls-p' style='color: ${n}'><i class='triangle'></i>${s[i][1]}</a>${a?"<a id='ls-hint' class='ls-p ls-hint' style='color: #FFF'><i class='triangle'></i>Hover to show more, Click to Go ~</a>":""}\n`), a = !1
                        }
                        setTimeout(() => {
                            let t = e.querySelector("#ls-hint");
                            t && t.remove()
                        }, 1e4)
                    })(o), await x(400), await $(o, "", 250, -1, "\n[Press Enter or Click to Continue]"), v(o), u++;
                    break;
                case 3:
                    _(k, !1), _(k = o, !0), await $(o, "display ./social\n", 50, 0, "> "), await x(400), await(async t => {
                        let e = c.social;
                        await $(t, "", 50, -1, "\n");
                        let a = "<div id='brick' class='brick'>";
                        for (let t in e) a += `<a class='ls-brick' target='_blank' href="${e[t].url}" style="color: ${e[t].color};border-color: ${e[t].color}"><b>${e[t].icon||""}</b>${t}</a>`;
                        a += "</div>", await $(t, "", 50, -1, a)
                    })(o), await x(400), await $(o, "", 250, -1, "\n[Press Enter or Click to Continue]"), v(o), u = 5;
                    break;
                case 5:
                    await $(o, "clear\n", 150, 0, "> "), await x(500), n.style.width = "calc(100% + 10px)", n.style.height = "calc(100% + 50px)", n.style.top = "-43px", n.style.left = "-5px", await x(800), b(), n.classList.add("hide"), await x(800), l.classList.add("show"), window._startAni && window._startAni()
            }
            p = !1, d && setTimeout(j, 0)
        };
    t.onload = (() => {
        b(!0), j()
    }), t.onresize = (() => {
        b(!0)
    }), t.onkeydown = n.onclick = (t => {
        let e = t.keyCode && 13 === t.keyCode,
            a = !t.keyCode && t.target && t.target.id && ["brick", "flipper", "browser-text"].includes(t.target.id);
        (e || a) && (p ? M = !0 : (j(), t.preventDefault()))
    })
})("undefine" == typeof window ? null : window), (async t => {
    if (!t) return;
    let e = t.document,
        a = t => Math.floor(255 * Math.random() + t),
        r = (t, e, a) => "rgba(" + t + "," + e + "," + a + ", 0.5)",
        s = function(t) {
            t = t || 0, this.r = a(t), this.g = a(t), this.b = a(t), this.style = r(this.r, this.g, this.b)
        },
        n = e.querySelector("#canvas"),
        o = n.getContext("2d");
    n.width = t.innerWidth, n.height = t.innerHeight, o.lineWidth = .3, o.strokeStyle = new s(150).style;
    let l = () => {
            n.width = t.innerWidth, n.height = t.innerHeight, c.nb = parseInt(t.innerWidth * t.innerHeight / 2e3, 10), c.array = [], u()
        },
        d = {
            x: -1,
            y: -1
        },
        c = {
            nb: 750,
            distance: 50,
            d_radius: 100,
            array: []
        },
        h = (t, e, a, i) => (t * e + a * i) / (e + i),
        w = (t, e) => {
            let a = t.color,
                i = e.color,
                s = h(a.r, t.radius, i.r, e.radius),
                n = h(a.g, t.radius, i.g, e.radius),
                o = h(a.b, t.radius, i.b, e.radius);
            return r(Math.floor(s), Math.floor(n), Math.floor(o))
        },
        y = function() {
            this.x = Math.random() * n.width, this.y = Math.random() * n.height, this.vx = -.5 + Math.random(), this.vy = -.5 + Math.random(), this.radius = 2 * Math.random(), this.color = new s
        };
    y.prototype = {
        draw: function() {
            o.beginPath(), o.fillStyle = this.color.style, o.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), o.fill()
        }
    };
    let u = () => {
            for (i = 0; i < c.nb; i++) c.array.push(new y)
        },
        f = () => {
            o.clearRect(0, 0, n.width, n.height), (() => {
                for (i = 1; i < c.nb; i++) {
                    var t = c.array[i];
                    t.y < 0 || t.y > n.height ? (t.vx = t.vx, t.vy = -t.vy) : (t.x < 0 || t.x > n.width) && (t.vx = -t.vx, t.vy = t.vy), t.x += t.vx, t.y += t.vy
                }
            })(), (() => {
                if (!(d.x < 0 || d.y < 0))
                    for (i = 0; i < c.nb; i++)
                        for (j = i; j < c.nb; j++) i_dot = c.array[i], j_dot = c.array[j], i_dot.x - j_dot.x < c.distance && i_dot.y - j_dot.y < c.distance && i_dot.x - j_dot.x > -c.distance && i_dot.y - j_dot.y > -c.distance && i_dot.x - d.x < c.d_radius && i_dot.y - d.y < c.d_radius && i_dot.x - d.x > -c.d_radius && i_dot.y - d.y > -c.d_radius && (o.beginPath(), o.strokeStyle = w(i_dot, j_dot), o.moveTo(i_dot.x, i_dot.y), o.lineTo(j_dot.x, j_dot.y), o.stroke(), o.closePath())
            })(), (() => {
                for (i = 0; i < c.nb; i++) c.array[i].draw()
            })(), requestAnimationFrame(f)
        };
    window._startAni = (() => {
        window.addEventListener("mousemove", function(t) {
            d.x = t.pageX, d.y = t.pageY, c.array[0] && (c.array[0].x = d.x, c.array[0].y = d.y)
        }), t.onresize = l, l(), requestAnimationFrame(f)
    })
})("undefine" == typeof window ? null : window);