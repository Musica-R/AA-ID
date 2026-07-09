import { useEffect, useRef, useState, useCallback } from "react";
import "../styles/Hero.css";

const TOTAL_FRAMES = 200; // you have 240 images
const START_INDEX = 1;   // your files start at 001, not 000
const FRAME_PATH = (n) =>
    `/frame/ezgif-frame-${String(n).padStart(3, "0")}.png`; // matches ezgif-frame-001.png style

const CONCURRENCY = 6;

const SMOOTHING = 0.045;

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

async function loadFrames(total, startIndex, onProgress) {
    const imgs = new Array(total);
    let loaded = 0;

    async function loadOne(i) {
        return new Promise((resolve) => {
            const img = new Image();
            img.decoding = "async";
            img.onload = () => { imgs[i] = img; loaded++; onProgress(loaded / total); resolve(); };
            img.onerror = () => { loaded++; onProgress(loaded / total); resolve(); };
            img.src = FRAME_PATH(i + startIndex);
        });
    }

    let idx = 0;
    async function worker() {
        while (idx < total) { const cur = idx++; await loadOne(cur); }
    }
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
    return imgs;
}

// ─────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────
export default function Hero() {
    const sectionRef = useRef(null);
    const stickyRef = useRef(null);
    const canvasRef = useRef(null);
    const framesRef = useRef([]);
    const rafRef = useRef(null);
    const progressRef = useRef(0);
    const targetRef = useRef(0);
    const frameIdxRef = useRef(0);
    const ctxRef = useRef(null);
    const isReadyRef = useRef(false);

    const [loadProgress, setLoadProgress] = useState(0);
    const [ready, setReady] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // ── Draw a single frame onto the canvas, cropped to cover ──
    const drawFrame = useCallback((index) => {
        const img = framesRef.current[index];
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!img || !canvas || !ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const cw = canvas.width / dpr;
        const ch = canvas.height / dpr;

        ctx.fillStyle = "#080808";
        ctx.fillRect(0, 0, cw, ch);

        const ir = img.naturalWidth / img.naturalHeight;
        const cr = cw / ch;
        let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

        if (ir > cr) {
            sw = img.naturalHeight * cr;
            sx = (img.naturalWidth - sw) / 2;
        } else {
            sh = img.naturalWidth / cr;
            sy = (img.naturalHeight - sh) / 2;
        }

        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    }, []);

    // ── Keep canvas pixel size matched to its displayed size ──
    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.parentElement;
        if (!parent) return;

        const dpr = window.devicePixelRatio || 1;
        const w = parent.offsetWidth;
        const h = parent.offsetHeight;
        if (!w || !h) return;

        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";

        const ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);
        ctxRef.current = ctx;

        drawFrame(frameIdxRef.current);
    }, [drawFrame]);

    // ── How far the user has scrolled through the pinned section (0-1) ──
    const getScrollProgress = useCallback(() => {
        const section = sectionRef.current;
        if (!section) return 0;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        const viewH = window.innerHeight;

        const scrolled = scrollY - sectionTop;
        const scrollable = sectionHeight - viewH;

        return clamp(scrolled / scrollable, 0, 1);
    }, []);

    // ── Animation loop: smoothly chase the scroll target, pick a frame ──
    const tick = useCallback(() => {
        rafRef.current = requestAnimationFrame(tick);
        if (!isReadyRef.current) return;

        const prev = progressRef.current;
        const next = lerp(prev, targetRef.current, SMOOTHING);

        if (Math.abs(next - prev) < 0.00005) return;
        progressRef.current = next;

        const eased = easeInOutCubic(next);
        const fi = clamp(Math.round(eased * (TOTAL_FRAMES - 1)), 0, TOTAL_FRAMES - 1);

        if (fi !== frameIdxRef.current) {
            frameIdxRef.current = fi;
            drawFrame(fi);
        }

        if (next > 0.02) setScrolled(true);
    }, [drawFrame]);

   
    useEffect(() => {
    const prevRestoration = window.history.scrollRestoration;

    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }

    const forceTop = () => {
        window.scrollTo(0, 0);
        progressRef.current = 0;
        targetRef.current = 0;
        frameIdxRef.current = 0;
    };

    forceTop();
    requestAnimationFrame(forceTop);
    window.addEventListener("load", forceTop);
    const timeouts = [50, 150, 300, 600].map((ms) =>
        setTimeout(forceTop, ms)
    );

    return () => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = prevRestoration;
        }
        window.removeEventListener("load", forceTop);
        timeouts.forEach(clearTimeout);
    };
}, []);
  

    useEffect(() => {
        const onScroll = () => {
            if (!isReadyRef.current) return;
            targetRef.current = getScrollProgress();
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [getScrollProgress]);

    // ── Preload all frames once on mount ──
    useEffect(() => {
        let cancelled = false;
        (async () => {
            const frames = await loadFrames(TOTAL_FRAMES, START_INDEX, (p) => {
                if (!cancelled) setLoadProgress(p);
            });
            if (cancelled) return;
            framesRef.current = frames;

            window.scrollTo(0, 0);
            progressRef.current = 0;
            targetRef.current = 0;
            frameIdxRef.current = 0;

            isReadyRef.current = true;
            setReady(true);
            drawFrame(0);
        })();
        return () => { cancelled = true; };
    }, [drawFrame]);

    // ── Start the RAF loop ──
    useEffect(() => {
        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [tick]);

    // ── Keep canvas sized correctly ──
    useEffect(() => {
        const t = setTimeout(resizeCanvas, 50);
        const ro = new ResizeObserver(() => resizeCanvas());
        if (stickyRef.current) ro.observe(stickyRef.current);

        const onOrient = () => setTimeout(resizeCanvas, 100);
        window.addEventListener("orientationchange", onOrient);

        return () => {
            clearTimeout(t);
            ro.disconnect();
            window.removeEventListener("orientationchange", onOrient);
        };
    }, [resizeCanvas]);

    return (
        <section className="hero" ref={sectionRef}>

            {!ready && (
                <div className="hero-loader">
                    <div className="hero-loader__brand">AA<span>&</span>ID</div>
                    <div className="hero-loader__track">
                        <div className="hero-loader__fill" style={{ width: `${Math.round(loadProgress * 100)}%` }} />
                    </div>
                    <div className="hero-loader__pct">{Math.round(loadProgress * 100)}%</div>
                </div>
            )}

            <div className="hero-sticky" ref={stickyRef}>
                <canvas className="hero-canvas" ref={canvasRef} />

                <div className="hero-overlay" aria-hidden="true" />

                <div className="hero-title">
                    <h1>AA<span>&</span>ID</h1>
                    <p>Architecture & Interior Design</p>
                </div>

                <div className={`hero-scroll-hint${scrolled ? " is-hidden" : ""}`}>
                    <span>scroll</span>
                </div>
            </div>
        </section>
    );
}