import React, { useEffect, useRef, useState } from "react";
import "../styles/process.css";

/* Brand palette — anchored on the site's accent #9c6b30,
   stepping from a lighter gold to a deeper brown across the 6 stages. */
const PALETTE = ["#D9B679", "#CBA463", "#BC924E", "#AD803A", "#9C6B30", "#7C5424"];

const STEPS = [
  {
    title: "Requirement Form",
    desc: "Fill your details, and project requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M14 3v4h4" />
        <path d="M9 13h6M9 16.5h4" />
      </svg>
    ),
  },
  {
    title: "Quick Connect",
    desc: "Our team reaches out via WhatsApp/call to understand requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.36 7.59L4 20l1.05-4.24A8.5 8.5 0 1 1 21 11.5z" />
        <circle cx="8.5" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="12" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Package & Booking",
    desc: "Confirm with a booking fee, and get your timeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="16" height="15" rx="1.5" />
        <path d="M4 9.5h16M8 3v4M16 3v4" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Design Creation",
    desc: "We share layouts, mood boards, and 3D views based on your package.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="8" height="8" rx="0.5" />
        <path d="M4 16.5h6M4 19h4" />
        <path d="M14.5 3.5l6 6M20.5 3.5l-6 6" />
      </svg>
    ),
  },
  {
    title: "Review & Consult",
    desc: "Finalize designs through online meetings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="13" height="12" rx="1.5" />
        <path d="M16 10l5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    title: "Final Delivery",
    desc: "Receive your complete PDF package with drawings & specs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
        <path d="M4.5 7.5L12 12l7.5-4.5M12 12v9" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="11" height="11">
    <path d="M6 4l12 8-12 8V4z" fill="#fff" />
  </svg>
);

export default function ProcessFlow() {
  const trackRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="process-section">
      <div className="process-header">
        <span className="process-eyebrow">Process Flow</span>
        <h2 className="process-title">
          From First Sketch to Final Delivery
        </h2>
        <p className="process-sub">
          A clear, six-step path from your first message to the finished design package — no guesswork, no surprises.
        </p>
      </div>

      <div className={`process-track${inView ? " is-inview" : ""}`} ref={trackRef}>
        {STEPS.map((step, i) => (
          <div
            className="process-step"
            key={step.title}
            style={{
              "--accent": PALETTE[i],
              "--delay": `${i * 0.13}s`,
            }}
          >
            <div className="process-node-col">
              <div className="process-node">
                {step.icon}
                <span className="process-num">{i + 1}</span>
              </div>

              {i < STEPS.length - 1 && (
                <div
                  className="process-arrow"
                  style={{ "--accent-next": PALETTE[i + 1] }}
                  aria-hidden="true"
                >
                  <span className="process-arrow-dot">
                    <ArrowIcon />
                  </span>
                </div>
              )}
            </div>

            <div className="process-card">
              <span className="corner tl" />
              <span className="corner br" />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}