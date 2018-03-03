! function(e, t) {
    for (var n in t) e[n] = t[n]
}(window, function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 6)
}([function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = {
        createElement: function(e, t) {
            var n = document.createElement(e);
            t && Array.prototype.forEach.call(Object.keys(t), function(e) {
                n.setAttribute(e, t[e])
            });
            for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
            return function e(t) {
                Array.prototype.forEach.call(t, function(t) {
                    "string" == typeof t || "number" == typeof t ? n.textContent += t : Array.isArray(t) ? e(t) : void 0 !== t.__html ? n.innerHTML += t.__html : t instanceof Node && n.appendChild(t)
                })
            }(i), n
        }
    }, e.exports = t.default
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof fetch ? fetch.bind() : function(e, t) {
        return t = t || {}, new Promise(function(n, r) {
            function i() {
                var e, t = [],
                    n = [],
                    r = {};
                return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function(i, o, a) {
                    t.push(o = o.toLowerCase()), n.push([o, a]), e = r[o], r[o] = e ? e + "," + a : a
                }), {
                    ok: 1 == (o.status / 200 | 0),
                    status: o.status,
                    statusText: o.statusText,
                    url: o.responseURL,
                    clone: i,
                    text: function() {
                        return Promise.resolve(o.responseText)
                    },
                    json: function() {
                        return Promise.resolve(o.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([o.response]))
                    },
                    headers: {
                        keys: function() {
                            return t
                        },
                        entries: function() {
                            return n
                        },
                        get: function(e) {
                            return r[e.toLowerCase()]
                        },
                        has: function(e) {
                            return e.toLowerCase() in r
                        }
                    }
                }
            }
        })
    };
    t.default = r
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t, n, i) {
            var o = this;
            r(this, e), this.els_ = Array.prototype.slice.call("string" == typeof t ? document.querySelectorAll(t) : [].concat(t)), this.handler_ = "function" == typeof i ? {
                update: i
            } : i, this.events_ = [].concat(n), this.update_ = function(e) {
                return o.handler_.update(e)
            }
        }
        return e.prototype.listen = function() {
            var e = this;
            this.els_.forEach(function(t) {
                e.events_.forEach(function(n) {
                    t.addEventListener(n, e.update_, !1)
                })
            }), "function" == typeof this.handler_.setup && this.handler_.setup()
        }, e.prototype.unlisten = function() {
            var e = this;
            this.els_.forEach(function(t) {
                e.events_.forEach(function(n) {
                    t.removeEventListener(n, e.update_)
                })
            }), "function" == typeof this.handler_.reset && this.handler_.reset()
        }, e
    }();
    t.default = i
}, , , function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(t) {
            new f.default.Event.Listener(document, "DOMContentLoaded", function() {
                if (!(document.body instanceof HTMLElement)) throw new ReferenceError;
                var t = document.querySelectorAll("table:not([class])");
                
                if (!Modernizr.details) {
                    var r = document.querySelectorAll("details > summary");
                    Array.prototype.forEach.call(r, function(e) {
                        e.addEventListener("click", function(e) {
                            var t = e.target.parentNode;
                            t.hasAttribute("open") ? t.removeAttribute("open") : t.setAttribute("open", "")
                        })
                    })
                }
                var i = function() {
                    if (document.location.hash) {
                        var e = document.getElementById(document.location.hash.substring(1));
                        if (!e) return;
                        for (var t = e.parentNode; t && !(t instanceof HTMLDetailsElement);) t = t.parentNode;
                        if (t && !t.open) {
                            t.open = !0;
                            var n = location.hash;
                            location.hash = " ", location.hash = n
                        }
                    }
                };
                if (window.addEventListener("hashchange", i), i(), Modernizr.ios) {
                    var o = document.querySelectorAll("[data-md-scrollfix]");
                    Array.prototype.forEach.call(o, function(e) {
                        e.addEventListener("touchstart", function() {
                            var t = e.scrollTop;
                            0 === t ? e.scrollTop = 1 : t + e.offsetHeight === e.scrollHeight && (e.scrollTop = t - 1)
                        })
                    })
                }
            }).listen(), new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen(), new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen(), document.querySelector("[data-md-component=hero]") && new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Tabs.Toggle("[data-md-component=hero]")).listen(), document.querySelector("[data-md-component=tabs]") && new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Tabs.Toggle("[data-md-component=tabs]")).listen(), new f.default.Event.MatchMedia("(min-width: 1220px)", new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Sidebar.Position("[data-md-component=navigation]", "[data-md-component=header]"))), document.querySelector("[data-md-component=toc]") && new f.default.Event.MatchMedia("(min-width: 960px)", new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Sidebar.Position("[data-md-component=toc]", "[data-md-component=header]"))), new f.default.Event.MatchMedia("(min-width: 960px)", new f.default.Event.Listener(window, "scroll", new f.default.Nav.Blur("[data-md-component=toc] [href]")));
            var n = document.querySelectorAll("[data-md-component=collapsible]");
            Array.prototype.forEach.call(n, function(e) {
                    new f.default.Event.MatchMedia("(min-width: 1220px)", new f.default.Event.Listener(e.previousElementSibling, "click", new f.default.Nav.Collapse(e)))
                }), new f.default.Event.MatchMedia("(max-width: 1219px)", new f.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new f.default.Nav.Scrolling("[data-md-component=navigation] nav"))), document.querySelector("[data-md-component=search]") && (new f.default.Event.MatchMedia("(max-width: 959px)", new f.default.Event.Listener("[data-md-toggle=search]", "change", new f.default.Search.Lock("[data-md-toggle=search]"))), new f.default.Event.Listener("[data-md-component=query]", ["focus", "keyup", "change"], new f.default.Search.Result("[data-md-component=result]", function() {
                    return fetch(t.url.base + "/" + (t.version < "0.17" ? "mkdocs" : "search") + "/search_index.json", {
                        credentials: "same-origin"
                    }).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        return e.docs.map(function(e) {
                            return e.location = t.url.base + e.location, e
                        })
                    })
                })).listen(), new f.default.Event.Listener("[data-md-component=reset]", "click", function() {
                    setTimeout(function() {
                        var e = document.querySelector("[data-md-component=query]");
                        if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                        e.focus()
                    }, 10)
                }).listen(), new f.default.Event.Listener("[data-md-toggle=search]", "change", function(e) {
                    setTimeout(function(e) {
                        if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                        if (e.checked) {
                            var t = document.querySelector("[data-md-component=query]");
                            if (!(t instanceof HTMLInputElement)) throw new ReferenceError;
                            t.focus()
                        }
                    }, 400, e.target)
                }).listen(), new f.default.Event.MatchMedia("(min-width: 960px)", new f.default.Event.Listener("[data-md-component=query]", "focus", function() {
                    var e = document.querySelector("[data-md-toggle=search]");
                    if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                    e.checked || (e.checked = !0, e.dispatchEvent(new CustomEvent("change")))
                })), new f.default.Event.Listener(window, "keydown", function(e) {
                    var t = document.querySelector("[data-md-toggle=search]");
                    if (!(t instanceof HTMLInputElement)) throw new ReferenceError;
                    var n = document.querySelector("[data-md-component=query]");
                    if (!(n instanceof HTMLInputElement)) throw new ReferenceError;
                    if (!e.metaKey && !e.ctrlKey)
                        if (t.checked) {
                            if (13 === e.keyCode) {
                                if (n === document.activeElement) {
                                    e.preventDefault();
                                    var r = document.querySelector("[data-md-component=search] [href][data-md-state=active]");
                                    r instanceof HTMLLinkElement && (window.location = r.getAttribute("href"), t.checked = !1, t.dispatchEvent(new CustomEvent("change")), n.blur())
                                }
                            } else if (9 === e.keyCode || 27 === e.keyCode) t.checked = !1, t.dispatchEvent(new CustomEvent("change")), n.blur();
                            else if (-1 !== [8, 37, 39].indexOf(e.keyCode)) n !== document.activeElement && n.focus();
                            else if (-1 !== [38, 40].indexOf(e.keyCode)) {
                                var i = e.keyCode,
                                    o = Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]")),
                                    a = o.find(function(e) {
                                        if (!(e instanceof HTMLElement)) throw new ReferenceError;
                                        return "active" === e.dataset.mdState
                                    });
                                a && (a.dataset.mdState = "");
                                var s = Math.max(0, (o.indexOf(a) + o.length + (38 === i ? -1 : 1)) % o.length);
                                return o[s] && (o[s].dataset.mdState = "active", o[s].focus()), e.preventDefault(), e.stopPropagation(), !1
                            }
                        } else document.activeElement && !document.activeElement.form && (70 !== e.keyCode && 83 !== e.keyCode || (n.focus(), e.preventDefault()))
                }).listen(), new f.default.Event.Listener(window, "keypress", function() {
                    var e = document.querySelector("[data-md-toggle=search]");
                    if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                    if (e.checked) {
                        var t = document.querySelector("[data-md-component=query]");
                        if (!(t instanceof HTMLInputElement)) throw new ReferenceError;
                        t !== document.activeElement && t.focus()
                    }
                }).listen()), new f.default.Event.Listener(document.body, "keydown", function(e) {
                    if (9 === e.keyCode) {
                        var t = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
                        Array.prototype.forEach.call(t, function(e) {
                            e.offsetHeight && (e.tabIndex = 0)
                        })
                    }
                }).listen(), new f.default.Event.Listener(document.body, "mousedown", function() {
                    var e = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
                    Array.prototype.forEach.call(e, function(e) {
                        e.removeAttribute("tabIndex")
                    })
                }).listen(), document.body.addEventListener("click", function() {
                    "tabbing" === document.body.dataset.mdState && (document.body.dataset.mdState = "")
                }), new f.default.Event.MatchMedia("(max-width: 959px)", new f.default.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function() {
                    var e = document.querySelector("[data-md-toggle=drawer]");
                    if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                    e.checked && (e.checked = !1, e.dispatchEvent(new CustomEvent("change")))
                }))
        }
        t.__esModule = !0, t.app = void 0, n(7), n(8), n(9), n(10), n(11), n(12), n(13);
        var o = n(14),
            a = r(o),
            s = n(18),
            c = r(s),
            u = n(26),
            l = r(u),
            d = n(27),
            f = r(d);
        window.Promise = window.Promise || a.default;
        var h = function(e) {
                var t = document.getElementsByName("lang:" + e)[0];
                if (!(t instanceof HTMLMetaElement)) throw new ReferenceError;
                return t.content
            },
            p = {
                initialize: i
            };
        t.app = p
    }).call(t, n(0))
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/bitbucket.4ebea66e.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/github.a4034fb1.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/gitlab.d80e5efc.svg"
}, function(e, t) {}, function(e, t) {}, function(e, t) {
   
}, function(e, t, n) {
    window.fetch || (window.fetch = n(2).default || n(2))
}, function(e, t, n) {
}, function(e, t, n) {
}, function(e, t, n) {
}, function(e, t) {
}, function(e, t, n) {
}, function(e, t, n) {
}, function(e, t) {
}, function(e, t) {
}, function(e, t, n) {
}, function(e, t) {
}, function(e, t, n) {
   
}, function(e, t) {
   
}, function(e, t, n) {
   
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(28),
        o = r(i),
        a = n(30),
        s = r(a),
        c = n(33),
        u = r(c),
        l = n(37),
        d = r(l),
        f = n(43),
        h = r(f),
        p = n(45),
        m = r(p),
        v = n(51),
        y = r(v);
    t.default = {
        Event: o.default,
        Header: s.default,
        Nav: u.default,
        Search: d.default,
        Sidebar: h.default,
        Source: m.default,
        Tabs: y.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(3),
        o = r(i),
        a = n(29),
        s = r(a);
    t.default = {
        Listener: o.default,
        MatchMedia: s.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = n(3),
        o = (function(e) {
            e && e.__esModule
        }(i), function e(t, n) {
            r(this, e), this.handler_ = function(e) {
                e.matches ? n.listen() : n.unlisten()
            };
            var i = window.matchMedia(t);
            i.addListener(this.handler_), this.handler_(i)
        });
    t.default = o
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(31),
        o = r(i),
        a = n(32),
        s = r(a);
    t.default = {
        Shadow: o.default,
        Title: s.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t, n) {
            r(this, e);
            var i = "string" == typeof t ? document.querySelector(t) : t;
            if (!(i instanceof HTMLElement && i.parentNode instanceof HTMLElement)) throw new ReferenceError;
            if (this.el_ = i.parentNode, !((i = "string" == typeof n ? document.querySelector(n) : n) instanceof HTMLElement)) throw new ReferenceError;
            this.header_ = i, this.height_ = 0, this.active_ = !1
        }
        return e.prototype.setup = function() {
            for (var e = this.el_; e = e.previousElementSibling;) {
                if (!(e instanceof HTMLElement)) throw new ReferenceError;
                this.height_ += e.offsetHeight
            }
            this.update()
        }, e.prototype.update = function(e) {
            if (!e || "resize" !== e.type && "orientationchange" !== e.type) {
                var t = window.pageYOffset >= this.height_;
                t !== this.active_ && (this.header_.dataset.mdState = (this.active_ = t) ? "shadow" : "")
            } else this.height_ = 0, this.setup()
        }, e.prototype.reset = function() {
            this.header_.dataset.mdState = "", this.height_ = 0, this.active_ = !1
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t, n) {
            r(this, e);
            var i = "string" == typeof t ? document.querySelector(t) : t;
            if (!(i instanceof HTMLElement)) throw new ReferenceError;
            if (this.el_ = i, !((i = "string" == typeof n ? document.querySelector(n) : n) instanceof HTMLHeadingElement)) throw new ReferenceError;
            this.header_ = i, this.active_ = !1
        }
        return e.prototype.setup = function() {
            var e = this;
            Array.prototype.forEach.call(this.el_.children, function(t) {
                t.style.width = e.el_.offsetWidth - 20 + "px"
            })
        }, e.prototype.update = function(e) {
            var t = this,
                n = window.pageYOffset >= this.header_.offsetTop;
            n !== this.active_ && (this.el_.dataset.mdState = (this.active_ = n) ? "active" : ""), "resize" !== e.type && "orientationchange" !== e.type || Array.prototype.forEach.call(this.el_.children, function(e) {
                e.style.width = t.el_.offsetWidth - 20 + "px"
            })
        }, e.prototype.reset = function() {
            this.el_.dataset.mdState = "", this.el_.style.width = "", this.active_ = !1
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(34),
        o = r(i),
        a = n(35),
        s = r(a),
        c = n(36),
        u = r(c);
    t.default = {
        Blur: o.default,
        Collapse: s.default,
        Scrolling: u.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e), this.els_ = "string" == typeof t ? document.querySelectorAll(t) : t, this.index_ = 0, this.offset_ = window.pageYOffset, this.dir_ = !1, this.anchors_ = [].reduce.call(this.els_, function(e, t) {
                return e.concat(document.getElementById(t.hash.substring(1)) || [])
            }, [])
        }
        return e.prototype.setup = function() {
            this.update()
        }, e.prototype.update = function() {
            var e = window.pageYOffset,
                t = this.offset_ - e < 0;
            if (this.dir_ !== t && (this.index_ = this.index_ = t ? 0 : this.els_.length - 1), 0 !== this.anchors_.length) {
                if (this.offset_ <= e)
                    for (var n = this.index_ + 1; n < this.els_.length && this.anchors_[n].offsetTop - 80 <= e; n++) n > 0 && (this.els_[n - 1].dataset.mdState = "blur"), this.index_ = n;
                else
                    for (var r = this.index_; r >= 0; r--) {
                        if (!(this.anchors_[r].offsetTop - 80 > e)) {
                            this.index_ = r;
                            break
                        }
                        r > 0 && (this.els_[r - 1].dataset.mdState = "")
                    }
                this.offset_ = e, this.dir_ = t
            }
        }, e.prototype.reset = function() {
            Array.prototype.forEach.call(this.els_, function(e) {
                e.dataset.mdState = ""
            }), this.index_ = 0, this.offset_ = window.pageYOffset
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e);
            var n = "string" == typeof t ? document.querySelector(t) : t;
            if (!(n instanceof HTMLElement)) throw new ReferenceError;
            this.el_ = n
        }
        return e.prototype.setup = function() {
            var e = this.el_.getBoundingClientRect().height;
            this.el_.style.display = e ? "block" : "none", this.el_.style.overflow = e ? "visible" : "hidden"
        }, e.prototype.update = function() {
            var e = this,
                t = this.el_.getBoundingClientRect().height;
            if (this.el_.style.display = "block", this.el_.style.overflow = "", t) this.el_.style.maxHeight = t + "px", requestAnimationFrame(function() {
                e.el_.setAttribute("data-md-state", "animate"), e.el_.style.maxHeight = "0px"
            });
            else {
                this.el_.setAttribute("data-md-state", "expand"), this.el_.style.maxHeight = "";
                var n = this.el_.getBoundingClientRect().height;
                this.el_.removeAttribute("data-md-state"), this.el_.style.maxHeight = "0px", requestAnimationFrame(function() {
                    e.el_.setAttribute("data-md-state", "animate"), e.el_.style.maxHeight = n + "px"
                })
            }
            var r = function e(n) {
                var r = n.target;
                if (!(r instanceof HTMLElement)) throw new ReferenceError;
                r.removeAttribute("data-md-state"), r.style.maxHeight = "", r.style.display = t ? "none" : "block", r.style.overflow = t ? "hidden" : "visible", r.removeEventListener("transitionend", e)
            };
            this.el_.addEventListener("transitionend", r, !1)
        }, e.prototype.reset = function() {
            this.el_.dataset.mdState = "", this.el_.style.maxHeight = "", this.el_.style.display = "", this.el_.style.overflow = ""
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e);
            var n = "string" == typeof t ? document.querySelector(t) : t;
            if (!(n instanceof HTMLElement)) throw new ReferenceError;
            this.el_ = n
        }
        return e.prototype.setup = function() {
            this.el_.children[this.el_.children.length - 1].style.webkitOverflowScrolling = "touch";
            var e = this.el_.querySelectorAll("[data-md-toggle]");
            Array.prototype.forEach.call(e, function(e) {
                if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                if (e.checked) {
                    var t = e.nextElementSibling;
                    if (!(t instanceof HTMLElement)) throw new ReferenceError;
                    for (;
                        "NAV" !== t.tagName && t.nextElementSibling;) t = t.nextElementSibling;
                    if (!(e.parentNode instanceof HTMLElement && e.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
                    var n = e.parentNode.parentNode,
                        r = t.children[t.children.length - 1];
                    n.style.webkitOverflowScrolling = "", r.style.webkitOverflowScrolling = "touch"
                }
            })
        }, e.prototype.update = function(e) {
            var t = e.target;
            if (!(t instanceof HTMLElement)) throw new ReferenceError;
            var n = t.nextElementSibling;
            if (!(n instanceof HTMLElement)) throw new ReferenceError;
            for (;
                "NAV" !== n.tagName && n.nextElementSibling;) n = n.nextElementSibling;
            if (!(t.parentNode instanceof HTMLElement && t.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
            var r = t.parentNode.parentNode,
                i = n.children[n.children.length - 1];
            if (r.style.webkitOverflowScrolling = "", i.style.webkitOverflowScrolling = "", !t.checked) {
                var o = function e() {
                    n instanceof HTMLElement && (r.style.webkitOverflowScrolling = "touch", n.removeEventListener("transitionend", e))
                };
                n.addEventListener("transitionend", o, !1)
            }
            if (t.checked) {
                var a = function e() {
                    n instanceof HTMLElement && (i.style.webkitOverflowScrolling = "touch", n.removeEventListener("transitionend", e))
                };
                n.addEventListener("transitionend", a, !1)
            }
        }, e.prototype.reset = function() {
            this.el_.children[1].style.webkitOverflowScrolling = "";
            var e = this.el_.querySelectorAll("[data-md-toggle]");
            Array.prototype.forEach.call(e, function(e) {
                if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                if (e.checked) {
                    var t = e.nextElementSibling;
                    if (!(t instanceof HTMLElement)) throw new ReferenceError;
                    for (;
                        "NAV" !== t.tagName && t.nextElementSibling;) t = t.nextElementSibling;
                    if (!(e.parentNode instanceof HTMLElement && e.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
                    var n = e.parentNode.parentNode,
                        r = t.children[t.children.length - 1];
                    n.style.webkitOverflowScrolling = "", r.style.webkitOverflowScrolling = ""
                }
            })
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(38),
        o = r(i),
        a = n(39),
        s = r(a);
    t.default = {
        Lock: o.default,
        Result: s.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e);
            var n = "string" == typeof t ? document.querySelector(t) : t;
            if (!(n instanceof HTMLInputElement)) throw new ReferenceError;
            if (this.el_ = n, !document.body) throw new ReferenceError;
            this.lock_ = document.body
        }
        return e.prototype.setup = function() {
            this.update()
        }, e.prototype.update = function() {
            var e = this;
            this.el_.checked ? (this.offset_ = window.pageYOffset, setTimeout(function() {
                window.scrollTo(0, 0), e.el_.checked && (e.lock_.dataset.mdState = "lock")
            }, 400)) : (this.lock_.dataset.mdState = "", setTimeout(function() {
                void 0 !== e.offset_ && window.scrollTo(0, e.offset_)
            }, 100))
        }, e.prototype.reset = function() {
            "lock" === this.lock_.dataset.mdState && window.scrollTo(0, this.offset_), this.lock_.dataset.mdState = ""
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var o = n(40),
            a = r(o),
            s = n(41),
            c = r(s),
            u = function(e, t) {
                var n = t;
                if (e.length > n) {
                    for (;
                        " " !== e[n] && --n > 0;);
                    return e.substring(0, n) + "..."
                }
                return e
            },
            l = function(e) {
                var t = document.getElementsByName("lang:" + e)[0];
                if (!(t instanceof HTMLMetaElement)) throw new ReferenceError;
                return t.content
            },
            d = function() {
                function t(e, n) {
                }
                return t.prototype.update = function(t) {
                    var n = this;
                    if ("focus" !== t.type || this.index_) {
                        if ("focus" === t.type || "keyup" === t.type) {
                            var r = t.target;
                            if (!(r instanceof HTMLInputElement)) throw new ReferenceError;
                            if (!this.index_ || r.value === this.value_) return;
                            for (; this.list_.firstChild;) this.list_.removeChild(this.list_.firstChild);
                            if (this.value_ = r.value, 0 === this.value_.length) return void(this.meta_.textContent = this.message_.placeholder);
                            var i = this.index_.query(function(e) {
                                    n.value_.toLowerCase().split(" ").filter(Boolean).forEach(function(t) {
                                        e.term(t, {
                                            wildcard: c.default.Query.wildcard.TRAILING
                                        })
                                    })
                                }).reduce(function(e, t) {
                                    var r = n.docs_.get(t.ref);
                                    if (r.parent) {
                                        var i = r.parent.location;
                                        e.set(i, (e.get(i) || []).concat(t))
                                    } else {
                                        var o = r.location;
                                        e.set(o, e.get(o) || [])
                                    }
                                    return e
                                }, new Map),
                                o = (0, a.default)(this.value_.trim()).replace(new RegExp(c.default.tokenizer.separator, "img"), "|"),
                                s = new RegExp("(^|" + c.default.tokenizer.separator + ")(" + o + ")", "img"),
                                d = function(e, t, n) {
                                    return t + "<em>" + n + "</em>"
                                };
                            this.stack_ = [], i.forEach(function(t, r) {
                                var i, o = n.docs_.get(r),
                                    a = e.createElement("li", {
                                        class: "md-search-result__item"
                                    }, e.createElement("a", {
                                        href: o.location,
                                        title: o.title,
                                        class: "md-search-result__link",
                                        tabindex: "-1"
                                    }, e.createElement("article", {
                                        class: "md-search-result__article md-search-result__article--document"
                                    }, e.createElement("h1", {
                                        class: "md-search-result__title"
                                    }, {
                                        __html: o.title.replace(s, d)
                                    }), o.text.length ? e.createElement("p", {
                                        class: "md-search-result__teaser"
                                    }, {
                                        __html: o.text.replace(s, d)
                                    }) : {}))),
                                    c = t.map(function(t) {
                                        return function() {
                                            var r = n.docs_.get(t.ref);
                                            a.appendChild(e.createElement("a", {
                                                href: r.location,
                                                title: r.title,
                                                class: "md-search-result__link",
                                                "data-md-rel": "anchor",
                                                tabindex: "-1"
                                            }, e.createElement("article", {
                                                class: "md-search-result__article"
                                            }, e.createElement("h1", {
                                                class: "md-search-result__title"
                                            }, {
                                                __html: r.title.replace(s, d)
                                            }), r.text.length ? e.createElement("p", {
                                                class: "md-search-result__teaser"
                                            }, {
                                                __html: u(r.text.replace(s, d), 400)
                                            }) : {})))
                                        }
                                    });
                                (i = n.stack_).push.apply(i, [function() {
                                    return n.list_.appendChild(a)
                                }].concat(c))
                            });
                            var f = this.el_.parentNode;
                            if (!(f instanceof HTMLElement)) throw new ReferenceError;
                            for (; this.stack_.length && f.offsetHeight >= f.scrollHeight - 16;) this.stack_.shift()();
                            var h = this.list_.querySelectorAll("[data-md-rel=anchor]");
                            switch (Array.prototype.forEach.call(h, function(e) {
                                ["click", "keydown"].forEach(function(t) {
                                    e.addEventListener(t, function(n) {
                                        if ("keydown" !== t || 13 === n.keyCode) {
                                            var r = document.querySelector("[data-md-toggle=search]");
                                            if (!(r instanceof HTMLInputElement)) throw new ReferenceError;
                                            r.checked && (r.checked = !1, r.dispatchEvent(new CustomEvent("change"))), n.preventDefault(), setTimeout(function() {
                                                document.location.href = e.href
                                            }, 100)
                                        }
                                    })
                                })
                            }), i.size) {
                                case 0:
                                    this.meta_.textContent = this.message_.none;
                                    break;
                                case 1:
                                    this.meta_.textContent = this.message_.one;
                                    break;
                                default:
                                    this.meta_.textContent = this.message_.other.replace("#", i.size)
                            }
                        }
                    } else {
                        var p = function(e) {
                            n.docs_ = e.reduce(function(e, t) {
                                var n = t.location.split("#"),
                                    r = n[0];
                                return n[1] && (t.parent = e.get(r), t.parent && !t.parent.done && (t.parent.title = t.title, t.parent.text = t.text, t.parent.done = !0)), t.text = t.text.replace(/\n/g, " ").replace(/\s+/g, " ").replace(/\s+([,.:;!?])/g, function(e, t) {
                                    return t
                                }), t.parent && t.parent.title === t.title || e.set(t.location, t), e
                            }, new Map);
                            var t = n.docs_,
                                r = n.lang_;
                            n.stack_ = [], n.index_ = (0, c.default)(function() {
                                var e, n = this,
                                    i = {
                                        "search.pipeline.trimmer": c.default.trimmer,
                                        "search.pipeline.stopwords": c.default.stopWordFilter
                                    },
                                    o = Object.keys(i).reduce(function(e, t) {
                                        return l(t).match(/^false$/i) || e.push(i[t]), e
                                    }, []);
                                this.pipeline.reset(), o && (e = this.pipeline).add.apply(e, o), 1 === r.length && "en" !== r[0] && c.default[r[0]] ? this.use(c.default[r[0]]) : r.length > 1 && this.use(c.default.multiLanguage.apply(c.default, r)), this.field("title", {
                                    boost: 10
                                }), this.field("text"), this.ref("location"), t.forEach(function(e) {
                                    return n.add(e)
                                })
                            });
                            var i = n.el_.parentNode;
                            if (!(i instanceof HTMLElement)) throw new ReferenceError;
                            i.addEventListener("scroll", function() {
                                for (; n.stack_.length && i.scrollTop + i.offsetHeight >= i.scrollHeight - 16;) n.stack_.splice(0, 10).forEach(function(e) {
                                    return e()
                                })
                            })
                        };
                        setTimeout(function() {
                            return "function" == typeof n.data_ ? n.data_().then(p) : p(n.data_)
                        }, 250)
                    }
                }, t
            }();
        t.default = d
    }).call(t, n(0))
}, function(e, t, n) {
    "use strict";
    var r = /[|\\{}()[\]^$+*?.]/g;
    e.exports = function(e) {
        if ("string" != typeof e) throw new TypeError("Expected a string");
        return e.replace(r, "\\$&")
    }
}, function(e, t, n) {
    (function(t) {
        e.exports = t.lunr = n(42)
    }).call(t, n(1))
}, function(e, t, n) {
   
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(44),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = {
        Position: i.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t, n) {
            r(this, e);
            var i = "string" == typeof t ? document.querySelector(t) : t;
            if (!(i instanceof HTMLElement && i.parentNode instanceof HTMLElement)) throw new ReferenceError;
            if (this.el_ = i, this.parent_ = i.parentNode, !((i = "string" == typeof n ? document.querySelector(n) : n) instanceof HTMLElement)) throw new ReferenceError;
            this.header_ = i, this.height_ = 0, this.pad_ = "fixed" === window.getComputedStyle(this.header_).position
        }
        return e.prototype.setup = function() {
            var e = Array.prototype.reduce.call(this.parent_.children, function(e, t) {
                return Math.max(e, t.offsetTop)
            }, 0);
            this.offset_ = e - (this.pad_ ? this.header_.offsetHeight : 0), this.update()
        }, e.prototype.update = function(e) {
            var t = window.pageYOffset,
                n = window.innerHeight;
            e && "resize" === e.type && this.setup();
            var r = {
                    top: this.pad_ ? this.header_.offsetHeight : 0,
                    bottom: this.parent_.offsetTop + this.parent_.offsetHeight
                },
                i = n - r.top - Math.max(0, this.offset_ - t) - Math.max(0, t + n - r.bottom);
            i !== this.height_ && (this.el_.style.height = (this.height_ = i) + "px"), t >= this.offset_ ? "lock" !== this.el_.dataset.mdState && (this.el_.dataset.mdState = "lock") : "lock" === this.el_.dataset.mdState && (this.el_.dataset.mdState = "")
        }, e.prototype.reset = function() {
            this.el_.dataset.mdState = "", this.el_.style.height = "", this.height_ = 0
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    
}, function(e, t, n) {

}, function(e, t, n) {
    
}, function(e, t, n) {
   
}, function(e, t, n) {
   
}, function(e, t, n) {
    
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(52),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = {
        Toggle: i.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e);
            var n = "string" == typeof t ? document.querySelector(t) : t;
            if (!(n instanceof Node)) throw new ReferenceError;
            this.el_ = n, this.active_ = !1
        }
        return e.prototype.update = function() {
            var e = window.pageYOffset >= this.el_.children[0].offsetTop + -43;
            e !== this.active_ && (this.el_.dataset.mdState = (this.active_ = e) ? "hidden" : "")
        }, e.prototype.reset = function() {
            this.el_.dataset.mdState = "", this.active_ = !1
        }, e
    }();
    t.default = i
}]));