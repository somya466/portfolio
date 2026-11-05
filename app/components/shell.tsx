"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

const links = [
  ["#about", "About", "01"],
  ["#skills", "Toolkit", "02"],
  ["#explorations", "Explorations", "03"],
  ["#education", "Journey", "04"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/#top" className="brand" aria-label="Shristi Kumari home" onClick={() => setOpen(false)}>
          s<span>k</span><i>.</i>
        </Link>

        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"} <span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>

        <nav id="navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Main navigation">
          {links.map(([href, label, number]) => (
            <a href={href} key={href} className="nav-link" data-nav={href.slice(1)} onClick={() => setOpen(false)}>
              <span className="nav-no" aria-hidden="true">{number}</span>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-link nav-contact" onClick={() => setOpen(false)}>
            <span className="nav-no" aria-hidden="true">05</span>
            Contact
          </a>
        </nav>

        <a href="#contact" className="header-name" onClick={() => setOpen(false)}>
          Shristi Kumari <span className="name-dot" />
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  const marquee = (
    <span>
      SHRISTI KUMARI <i>✧</i> CURIOUS MIND <i>✧</i> BUILDER AT HEART <i>✧</i>
    </span>
  );

  return (
    <footer className="site-footer">
      <div className="footer-marquee" aria-hidden="true">
        <div className="footer-marquee-track">
          <div className="footer-marquee-group">{marquee}{marquee}</div>
          <div className="footer-marquee-group">{marquee}{marquee}</div>
        </div>
      </div>

      <div className="footer-top wrap">
        <a className="footer-name" href="#top">
          Shristi Kumari
          <span>A curious mind. A story still unfolding.</span>
        </a>
        <p>Thoughtfully learning.<br />Intentionally building.</p>
        <a href="#contact" className="footer-connect">
          Let’s start a conversation <span className="footer-connect-icon"><Arrow diagonal /></span>
        </a>
      </div>

      <div className="footer-bottom wrap">
        <span>© 2026 Shristi Kumari</span>
        <span>Patna, India · Made with curiosity <span className="tiny-star">✳</span></span>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}

export function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    /* Scroll-triggered reveals ------------------------------------------------- */
    let revealObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    if (!reduced) {
      const prepared = new WeakSet<HTMLElement>();

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -7% 0px" }
      );

      const prepare = (element: HTMLElement) => {
        if (prepared.has(element)) return;
        prepared.add(element);
        element.classList.add("will-reveal");
        revealObserver?.observe(element);
      };

      const prepareAll = () => {
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(prepare);
      };

      prepareAll();

      mutationObserver = new MutationObserver(() => {
        window.requestAnimationFrame(prepareAll);
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });

      cleanups.push(() => {
        revealObserver?.disconnect();
        mutationObserver?.disconnect();
      });
    } else {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        element.classList.add("revealed");
      });
    }

    /* Word-by-word reading highlight ------------------------------------------- */
    const wordElements = Array.from(document.querySelectorAll<HTMLElement>("[data-words]"));

    if (!reduced) {
      wordElements.forEach((element) => {
        if (element.dataset.wordsReady) return;
        element.dataset.wordsReady = "true";

        const split = (node: Node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent ?? "";
            if (!text.trim()) return;
            const fragment = document.createDocumentFragment();
            text.split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) {
                fragment.appendChild(document.createTextNode(part));
              } else {
                const word = document.createElement("span");
                word.className = "word";
                word.textContent = part;
                fragment.appendChild(word);
              }
            });
            node.parentNode?.replaceChild(fragment, node);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const elementNode = node as HTMLElement;
            if (elementNode.tagName === "BR" || elementNode.tagName === "A") return;
            Array.from(node.childNodes).forEach(split);
          }
        };

        Array.from(element.childNodes).forEach(split);
        element.querySelectorAll<HTMLElement>(".word").forEach((word) => {
          word.style.opacity = "0.16";
        });
      });
    }

    /* Cursor aura --------------------------------------------------------------- */
    const aura = document.querySelector<HTMLElement>(".cursor-aura");
    if (finePointer && !reduced && aura) {
      aura.classList.add("is-visible");
      const moveAura = (event: PointerEvent) => {
        aura.style.transform = `translate3d(${event.clientX - 160}px, ${event.clientY - 160}px, 0)`;
      };
      window.addEventListener("pointermove", moveAura, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", moveAura));
    }

    /* Magnetic buttons ---------------------------------------------------------- */
    if (finePointer && !reduced) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => {
        const move = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.24;
          element.style.setProperty("--mx", `${x.toFixed(2)}px`);
          element.style.setProperty("--my", `${y.toFixed(2)}px`);
        };
        const leave = () => {
          element.style.setProperty("--mx", "0px");
          element.style.setProperty("--my", "0px");
        };
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
        });
      });

      /* Three-dimensional card tilt (delegated so filtered cards inherit it) --- */
      let activeTilt: HTMLElement | null = null;

      const resetTilt = (element: HTMLElement) => {
        element.style.setProperty("--rx", "0deg");
        element.style.setProperty("--ry", "0deg");
      };

      if (finePointer) {
        const moveTilt = (event: PointerEvent) => {
          const target = (event.target as Element | null)?.closest<HTMLElement>("[data-tilt]") ?? null;

          if (activeTilt && activeTilt !== target) {
            resetTilt(activeTilt);
          }

          if (!target) {
            activeTilt = null;
            return;
          }

          const rect = target.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const rotateX = ((y / rect.height) - 0.5) * -3.2;
          const rotateY = ((x / rect.width) - 0.5) * 3.2;
          target.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
          target.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
          target.style.setProperty("--gx", `${x.toFixed(0)}px`);
          target.style.setProperty("--gy", `${y.toFixed(0)}px`);
          activeTilt = target;
        };

        const leaveTilt = () => {
          if (activeTilt) resetTilt(activeTilt);
          activeTilt = null;
        };

        document.addEventListener("pointermove", moveTilt, { passive: true });
        document.addEventListener("pointerleave", leaveTilt);
        cleanups.push(() => {
          document.removeEventListener("pointermove", moveTilt);
          document.removeEventListener("pointerleave", leaveTilt);
        });
      }
    }

    /* One throttled scroll loop ------------------------------------------------- */
    const progress = document.getElementById("scroll-progress");
    const header = document.querySelector<HTMLElement>(".site-header");
    const railLinks = Array.from(document.querySelectorAll<HTMLElement>("[data-rail]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLElement>("[data-nav]"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-section]"));
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const timeline = document.querySelector<HTMLElement>("[data-timeline]");
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const viewport = window.innerHeight;
      const max = document.documentElement.scrollHeight - viewport;

      if (progress) {
        progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }

      header?.classList.toggle("is-scrolled", y > 24);

      let activeSection = "top";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= viewport * 0.4) {
          activeSection = section.id;
        }
      });

      railLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${activeSection}`);
      });
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.nav === activeSection);
      });

      parallaxElements.forEach((element) => {
        const speed = Number(element.dataset.parallax ?? 0);
        const rect = element.getBoundingClientRect();
        const offset = rect.top + rect.height / 2 - viewport / 2;
        element.style.setProperty("--parallax", `${(offset * -speed).toFixed(1)}px`);
      });

      wordElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const start = viewport * 0.92;
        const length = viewport * 0.55 + rect.height;
        const progressValue = Math.max(0, Math.min(1, (start - rect.top) / length));
        const words = element.querySelectorAll<HTMLElement>(".word");
        const visible =
          rect.top < viewport * 0.9
            ? words.length
            : Math.floor(progressValue * words.length * 2.2);

        words.forEach((word, index) => {
          word.style.opacity = index < visible ? "1" : "0.16";
        });
      });

      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const amount = Math.max(0, Math.min(1, (viewport * 0.72 - rect.top) / rect.height));
        timeline.style.setProperty("--timeline", amount.toFixed(3));
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();

    cleanups.push(() => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      document.querySelectorAll<HTMLElement>(".will-reveal").forEach((element) => {
        element.classList.remove("will-reveal");
      });
    };
  }, []);

  return (
    <>
      <div className="intro" aria-hidden="true">
        <div className="intro-inner">
          <span className="intro-mark">s<span>k</span><i>.</i></span>
          <span className="intro-line"><i /></span>
          <span className="intro-caption">PORTFOLIO · MMXXVI</span>
        </div>
      </div>

      <div id="scroll-progress" aria-hidden="true" />
      <div className="cursor-aura" aria-hidden="true" />

      <aside className="section-rail" aria-hidden="true">
        <span className="rail-line"><i /></span>
        {[
          ["#top", "Intro", "00"],
          ["#about", "About", "01"],
          ["#skills", "Toolkit", "02"],
          ["#explorations", "Ideas", "03"],
          ["#education", "Journey", "04"],
          ["#contact", "Hello", "05"],
        ].map(([href, label, number]) => (
          <a href={href} key={href} data-rail={label} className={href === "#top" ? "rail-link is-active" : "rail-link"} tabIndex={-1}>
            <span>{number}</span>
            <i />
            <em>{label}</em>
          </a>
        ))}
      </aside>
    </>
  );
}
