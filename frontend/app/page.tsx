// export default function Home() {
//   return <h1>Welcome to Team Task Manager 🚀</h1>;
// }
"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const FEATURES = [
  {
    icon: "⬡",
    title: "Project Command Center",
    desc: "Architect projects with precision. Set milestones, define scope, and give every initiative a clear north star.",
  },
  {
    icon: "◈",
    title: "Intelligent Task Routing",
    desc: "Assign tasks to the right people at the right time. Drag-and-drop workflows that adapt to your team's rhythm.",
  },
  {
    icon: "◉",
    title: "Real-Time Progress Radar",
    desc: "Live dashboards surface what's on track, what's at risk, and what needs your attention — before it's too late.",
  },
  {
    icon: "⬘",
    title: "Role-Based Access Control",
    desc: "Admins lead, Members execute. Fine-grained permissions ensure everyone sees exactly what they need.",
  },
];

const STATS = [
  { value: "10K+", label: "Active Teams" },
  { value: "2.4M", label: "Tasks Completed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.9★", label: "User Rating" },
];

const AVATARS = ["A", "B", "C", "D", "E"];

export default function Home() {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouse);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouse);
      }
    };
  }, []);
  let parallaxX = 0, parallaxY = 0;
  
  if (typeof window !== "undefined") {
     parallaxX = (mousePos.x / window.innerWidth - 0.5) * 18;
     parallaxY = (mousePos.y / window.innerHeight - 0.5) * 18;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #0a0a0f;
          --ink-soft: #16161f;
          --ink-muted: #1e1e2e;
          --surface: #12121a;
          --line: rgba(255,255,255,0.07);
          --line-bright: rgba(255,255,255,0.14);
          --gold: #e8c84a;
          --gold-dim: rgba(232,200,74,0.15);
          --gold-glow: rgba(232,200,74,0.35);
          --ice: #a8c4d4;
          --ice-dim: rgba(168,196,212,0.12);
          --text-primary: #f0ede8;
          --text-secondary: rgba(240,237,232,0.55);
          --text-muted: rgba(240,237,232,0.3);
          --radius: 2px;
          --font-display: 'Bebas Neue', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --font-mono: 'DM Mono', monospace;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--ink);
          color: var(--text-primary);
          font-family: var(--font-body);
          overflow-x: hidden;
          cursor: crosshair;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: var(--ink); }
        ::-webkit-scrollbar-thumb { background: var(--gold); }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 48px;
          border-bottom: 1px solid var(--line);
          background: rgba(10,10,15,0.85);
          backdrop-filter: blur(20px);
          transition: opacity 0.8s ease;
          opacity: 0;
        }
        .nav.show { opacity: 1; }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 22px;
          letter-spacing: 3px;
          color: var(--text-primary);
          display: flex; align-items: center; gap: 10px;
        }
        .nav-logo-dot {
          width: 8px; height: 8px;
          background: var(--gold);
          border-radius: 50%;
          animation: pulse 2s ease infinite;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 var(--gold-glow); }
          50% { box-shadow: 0 0 0 6px transparent; }
        }

        .nav-links {
          display: flex; align-items: center; gap: 36px;
          list-style: none;
        }
        .nav-links a {
          font-size: 13px; font-weight: 500; letter-spacing: 1.5px;
          text-transform: uppercase; text-decoration: none;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--text-primary); }

        .nav-auth {
          display: flex; align-items: center; gap: 10px;
        }
        .nav-signin {
          font-family: var(--font-mono);
          font-size: 12px; font-weight: 500; letter-spacing: 1px;
          padding: 10px 20px;
          background: transparent; color: var(--text-secondary);
          border: 1px solid var(--line-bright); border-radius: var(--radius);
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-signin:hover {
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
        }
        .nav-signup {
          font-family: var(--font-mono);
          font-size: 12px; font-weight: 500; letter-spacing: 1px;
          padding: 10px 22px;
          background: var(--gold); color: var(--ink);
          border: none; border-radius: var(--radius);
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-signup:hover {
          background: #f5d96e;
          box-shadow: 0 0 24px var(--gold-glow);
          transform: translateY(-1px);
        }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          justify-content: center; align-items: flex-start;
          padding: 120px 48px 80px;
          position: relative; overflow: hidden;
        }

        .hero-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%);
        }

        .hero-orb {
          position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
          transition: transform 0.15s ease-out;
        }
        .hero-orb-1 {
          width: 600px; height: 600px;
          top: -150px; right: -100px;
          background: radial-gradient(circle, rgba(232,200,74,0.12) 0%, transparent 70%);
        }
        .hero-orb-2 {
          width: 400px; height: 400px;
          bottom: 50px; left: -50px;
          background: radial-gradient(circle, rgba(168,196,212,0.08) 0%, transparent 70%);
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          border: 1px solid var(--line-bright);
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 11px; letter-spacing: 1.5px;
          color: var(--gold);
          background: var(--gold-dim);
          margin-bottom: 28px;
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hero-badge.show { opacity: 1; transform: translateY(0); }
        .hero-badge::before {
          content: ''; width: 6px; height: 6px;
          background: var(--gold); border-radius: 50%;
          animation: pulse 1.5s ease infinite;
        }

        .hero-headline {
          font-family: var(--font-display);
          font-size: clamp(72px, 9vw, 140px);
          line-height: 0.9; letter-spacing: 2px;
          max-width: 900px;
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .hero-headline.show { opacity: 1; transform: translateY(0); }

        .hero-headline .accent {
          -webkit-text-stroke: 1.5px var(--gold);
          color: transparent;
        }

        .hero-sub {
          max-width: 540px;
          margin-top: 28px;
          font-size: 17px; font-weight: 300;
          line-height: 1.7; letter-spacing: 0.2px;
          color: var(--text-secondary);
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s;
        }
        .hero-sub.show { opacity: 1; transform: translateY(0); }

        .hero-actions {
          display: flex; align-items: center; gap: 20px;
          margin-top: 44px;
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s;
        }
        .hero-actions.show { opacity: 1; transform: translateY(0); }

        .btn-primary {
          display: flex; align-items: center; gap: 10px;
          padding: 16px 32px;
          background: var(--gold); color: var(--ink);
          font-family: var(--font-mono);
          font-size: 13px; font-weight: 500; letter-spacing: 1px;
          border: none; border-radius: var(--radius);
          cursor: pointer;
          transition: all 0.25s;
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: #f5d96e;
          box-shadow: 0 8px 32px var(--gold-glow), 0 2px 8px rgba(0,0,0,0.4);
          transform: translateY(-2px);
        }
        .btn-primary svg { transition: transform 0.25s; }
        .btn-primary:hover svg { transform: translateX(4px); }

        .btn-ghost {
          display: flex; align-items: center; gap: 10px;
          padding: 16px 28px;
          background: transparent; color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 14px; font-weight: 400; letter-spacing: 0.3px;
          border: 1px solid var(--line-bright); border-radius: var(--radius);
          cursor: pointer;
          transition: all 0.25s;
        }
        .btn-ghost:hover {
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
        }

        .hero-social-proof {
          display: flex; align-items: center; gap: 14px;
          margin-top: 56px;
          position: relative; z-index: 1;
          opacity: 0;
          transition: opacity 0.7s ease 0.55s;
        }
        .hero-social-proof.show { opacity: 1; }

        .avatar-stack { display: flex; }
        .avatar {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid var(--ink);
          background: var(--ink-muted);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 600; color: var(--gold);
          margin-left: -8px;
        }
        .avatar:first-child { margin-left: 0; }

        .social-text {
          font-size: 13px; color: var(--text-secondary); line-height: 1.4;
        }
        .social-text strong { color: var(--text-primary); font-weight: 500; }

        /* Hero right card */
        .hero-visual {
          position: absolute; right: 80px; top: 50%;
          transform: translateY(-50%);
          width: 380px;
          z-index: 2;
          opacity: 0; transform: translateY(calc(-50% + 30px));
          transition: opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s;
        }
        .hero-visual.show {
          opacity: 1;
          transform: translateY(-50%);
        }

        .task-card {
          background: var(--ink-soft);
          border: 1px solid var(--line-bright);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .task-card:hover {
          transform: translateX(-4px);
          box-shadow: 4px 0 20px rgba(232,200,74,0.1);
        }
        .task-card-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 12px;
        }
        .task-tag {
          font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 1px;
          padding: 3px 8px; border-radius: 3px;
        }
        .tag-design { background: rgba(168,196,212,0.15); color: var(--ice); }
        .tag-dev { background: rgba(232,200,74,0.15); color: var(--gold); }
        .tag-qa { background: rgba(130,255,180,0.1); color: #82ffb4; }

        .task-status {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; color: var(--text-muted);
        }
        .status-dot {
          width: 6px; height: 6px; border-radius: 50%;
        }
        .status-active { background: #82ffb4; box-shadow: 0 0 6px #82ffb455; }
        .status-progress { background: var(--gold); }
        .status-review { background: var(--ice); }

        .task-title {
          font-size: 14px; font-weight: 500; margin-bottom: 12px;
          color: var(--text-primary);
        }
        .task-progress-bar {
          height: 3px; background: var(--line-bright); border-radius: 2px; overflow: hidden;
          margin-bottom: 10px;
        }
        .task-progress-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, var(--gold), #f5d96e);
          transition: width 1.5s ease 0.8s;
        }
        .task-meta {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 11px; color: var(--text-muted);
        }
        .mini-avatar-stack { display: flex; }
        .mini-avatar {
          width: 20px; height: 20px; border-radius: 50%;
          border: 1.5px solid var(--ink-soft);
          background: var(--ink-muted);
          display: flex; align-items: center; justify-content: center;
          font-size: 8px; font-weight: 700; color: var(--gold);
          margin-left: -5px;
        }
        .mini-avatar:first-child { margin-left: 0; }

        /* ── STATS ── */
        .stats-strip {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 40px 48px;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--line);
        }
        .stat-item {
          background: var(--ink);
          padding: 32px 40px;
          display: flex; flex-direction: column; gap: 6px;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: 52px; letter-spacing: 1px;
          color: var(--text-primary);
          line-height: 1;
        }
        .stat-label {
          font-size: 12px; letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
        }
        .stat-accent { color: var(--gold); }

        /* ── FEATURES ── */
        .features {
          padding: 100px 48px;
        }
        .section-eyebrow {
          font-family: var(--font-mono);
          font-size: 11px; letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 5vw, 64px);
          letter-spacing: 1px; line-height: 1;
          max-width: 600px;
          margin-bottom: 64px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        .feature-cell {
          background: var(--ink);
          padding: 48px 40px;
          position: relative; overflow: hidden;
          transition: background 0.3s;
        }
        .feature-cell::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--gold-dim);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feature-cell:hover { background: var(--ink-soft); }
        .feature-cell:hover::before { opacity: 1; }

        .feature-icon {
          font-size: 28px; color: var(--gold);
          margin-bottom: 20px; display: block;
          line-height: 1;
        }
        .feature-title {
          font-size: 18px; font-weight: 500;
          margin-bottom: 12px; letter-spacing: 0.3px;
        }
        .feature-desc {
          font-size: 14px; font-weight: 300;
          line-height: 1.7; color: var(--text-secondary);
        }
        .feature-number {
          position: absolute; top: 24px; right: 28px;
          font-family: var(--font-mono);
          font-size: 11px; color: var(--text-muted); letter-spacing: 1px;
        }

        /* ── ROLES ── */
        .roles {
          padding: 100px 48px;
          background: var(--ink-soft);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .roles-inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
          align-items: center;
        }
        .roles-left {}
        .roles-cards {
          display: flex; flex-direction: column; gap: 16px;
        }
        .role-card {
          padding: 28px 32px;
          border: 1px solid var(--line-bright);
          border-radius: 8px;
          background: var(--ink);
          transition: all 0.3s;
          cursor: default;
        }
        .role-card:hover {
          border-color: var(--gold);
          box-shadow: 0 0 32px var(--gold-dim);
          transform: translateX(8px);
        }
        .role-card-header {
          display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
        }
        .role-icon {
          width: 36px; height: 36px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
        }
        .role-admin { background: rgba(232,200,74,0.15); }
        .role-member { background: rgba(168,196,212,0.12); }
        .role-name {
          font-weight: 600; font-size: 15px; letter-spacing: 0.3px;
        }
        .role-badge {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 1px; padding: 3px 8px;
          border-radius: 3px;
        }
        .badge-admin { background: var(--gold-dim); color: var(--gold); border: 1px solid rgba(232,200,74,0.3); }
        .badge-member { background: var(--ice-dim); color: var(--ice); border: 1px solid rgba(168,196,212,0.2); }
        .role-perms {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .perm {
          font-size: 11px; padding: 3px 10px;
          background: var(--ink-muted); border-radius: 3px;
          color: var(--text-muted); letter-spacing: 0.5px;
        }

        /* ── CTA ── */
        .cta-section {
          padding: 120px 48px;
          text-align: center; position: relative; overflow: hidden;
        }
        .cta-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,200,74,0.06) 0%, transparent 70%);
        }
        .cta-section .section-title { max-width: 700px; margin: 0 auto 16px; }
        .cta-sub {
          font-size: 16px; font-weight: 300;
          color: var(--text-secondary); max-width: 440px;
          margin: 0 auto 44px; line-height: 1.7;
        }
        .cta-buttons {
          display: flex; align-items: center; justify-content: center; gap: 16px;
        }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid var(--line);
          padding: 32px 48px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .footer-brand {
          font-family: var(--font-display);
          font-size: 18px; letter-spacing: 2px;
          display: flex; align-items: center; gap: 8px;
        }
        .footer-copy {
          font-size: 12px; color: var(--text-muted); letter-spacing: 0.5px;
        }
        .footer-links {
          display: flex; gap: 24px; list-style: none;
        }
        .footer-links a {
          font-size: 12px; letter-spacing: 1px; text-transform: uppercase;
          color: var(--text-muted); text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--gold); }

        /* Marquee */
        .marquee-wrap {
          overflow: hidden; border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 0;
          background: var(--ink-soft);
        }
        .marquee-track {
          display: flex; width: max-content;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-item {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 40px;
          font-family: var(--font-display);
          font-size: 14px; letter-spacing: 4px; color: var(--text-muted);
          white-space: nowrap;
        }
        .marquee-dot { color: var(--gold); font-size: 18px; }

        @media (max-width: 1100px) {
          .hero-visual { display: none; }
          .stats-strip { grid-template-columns: repeat(2,1fr); }
          .features-grid { grid-template-columns: 1fr; }
          .roles-inner { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 680px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .hero { padding: 100px 20px 60px; }
          .stats-strip { grid-template-columns: 1fr 1fr; padding: 0; }
          .features, .roles, .cta-section { padding: 60px 20px; }
          .footer { flex-direction: column; gap: 16px; text-align: center; }
          .hero-actions { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${loaded ? "show" : ""}`}>
        <div className="nav-logo">
          <div className="nav-logo-dot" />
          TEAM TASK MANAGER
        </div>
        {/* <ul className="nav-links">
          {["Features", "Pricing", "Docs", "Blog"].map((l) => (
            <li key={l}><a href="#">{l}</a></li>
          ))}
        </ul> */}
        <div className="nav-auth">
          <button className="nav-signin" onClick={() => router.push("/login")}>SIGN IN</button>
          <button className="nav-signup" onClick={() => router.push("/signup")}>SIGN UP →</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-grid" />
        <div
          className="hero-orb hero-orb-1"
          style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
        />
        <div
          className="hero-orb hero-orb-2"
          style={{ transform: `translate(${-parallaxX * 0.6}px, ${-parallaxY * 0.6}px)` }}
        />

        {/* <div className={`hero-badge ${loaded ? "show" : ""}`}>
          ✦ NOW WITH AI-POWERED PRIORITIZATION
        </div> */}

        <h1 className={`hero-headline ${loaded ? "show" : ""}`}>
          TEAMS THAT<br />
          <span className="accent">SHIP</span> FASTER
        </h1>

        <p className={`hero-sub ${loaded ? "show" : ""}`}>
          The task manager built for teams that refuse to slow down. Create projects, assign work, and hit every deadline — with role-based precision.
        </p>

        <div className={`hero-actions ${loaded ? "show" : ""}`}>
          <button className="btn-primary" onClick={() => router.push("/signup")}>
            SIGN UP FREE
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-ghost" style={{ gap: 8 }} onClick={() => router.push("/login")}>
            Already have an account?&nbsp;
            <span style={{ color: "var(--gold)", fontWeight: 500 }}>Sign In</span>
          </button>
        </div>

        <div className={`hero-social-proof ${loaded ? "show" : ""}`}>
          <div className="avatar-stack">
            {AVATARS.map((a, i) => (
              <div className="avatar" key={i}>{a}</div>
            ))}
          </div>
          {/* <p className="social-text">
            <strong>10,000+ teams</strong> already shipping faster<br />
            with TEAM TASK MANAGER
          </p> */}
        </div>

        {/* Floating Task Cards */}
        <div className={`hero-visual ${loaded ? "show" : ""}`}>
          {[
            { tag: "DESIGN", tagClass: "tag-design", title: "Redesign onboarding flow", prog: 72, status: "In Review", statusClass: "status-review", users: ["K","M"], due: "Due in 2d" },
            { tag: "DEVELOPMENT", tagClass: "tag-dev", title: "Auth API integration", prog: 45, status: "Active", statusClass: "status-active", users: ["A","B","C"], due: "Due tomorrow" },
            { tag: "QA", tagClass: "tag-qa", title: "Mobile regression suite", prog: 91, status: "Almost done", statusClass: "status-progress", users: ["R"], due: "Due today" },
          ].map((t, i) => (
            <div className="task-card" key={i}>
              <div className="task-card-header">
                <span className={`task-tag ${t.tagClass}`}>{t.tag}</span>
                <span className="task-status">
                  <span className={`status-dot ${t.statusClass}`} />
                  {t.status}
                </span>
              </div>
              <p className="task-title">{t.title}</p>
              <div className="task-progress-bar">
                <div className="task-progress-fill" style={{ width: loaded ? `${t.prog}%` : "0%" }} />
              </div>
              <div className="task-meta">
                <div className="mini-avatar-stack">
                  {t.users.map((u, j) => <div className="mini-avatar" key={j}>{u}</div>)}
                </div>
                <span>{t.due} · {t.prog}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {Array(2).fill(null).map((_, gi) => (
            <div key={gi} style={{ display: "flex" }}>
              {["MANAGE PROJECTS", "ASSIGN TASKS", "TRACK PROGRESS", "SHIP ON TIME", "COLLABORATE SMARTER", "BUILD FASTER", "STAY ALIGNED"].map((t, i) => (
                <span className="marquee-item" key={i}>
                  {t} <span className="marquee-dot">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="stats-strip">
        {STATS.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-value">
              {s.value.includes("★")
                ? <>{s.value.replace("★", "")}<span className="stat-accent">★</span></>
                : <>{s.value.slice(0, -1)}<span className="stat-accent">{s.value.slice(-1)}</span></>
              }
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section className="features">
        <p className="section-eyebrow">// CAPABILITIES</p>
        <h2 className="section-title">EVERYTHING YOUR<br />TEAM NEEDS</h2>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-cell" key={i}>
              <span className="feature-number">0{i + 1}</span>
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="roles">
        <div className="roles-inner">
          <div className="roles-left">
            <p className="section-eyebrow">// ACCESS CONTROL</p>
            <h2 className="section-title">THE RIGHT<br />PERMISSIONS</h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 380 }}>
              Admins have full visibility and control. Members stay focused on what matters to them. No information overload, no permission headaches.
            </p>
          </div>
          <div className="roles-cards">
            <div className="role-card">
              <div className="role-card-header">
                <div className="role-icon role-admin">👑</div>
                <span className="role-name">Administrator</span>
                <span className="role-badge badge-admin">ADMIN</span>
              </div>
              <div className="role-perms">
                {["Create Projects", "Manage Team", "Assign Tasks", "View All Reports", "Delete Records", "Billing Access"].map(p => (
                  <span className="perm" key={p}>{p}</span>
                ))}
              </div>
            </div>
            <div className="role-card">
              <div className="role-card-header">
                <div className="role-icon role-member">🧩</div>
                <span className="role-name">Team Member</span>
                <span className="role-badge badge-member">MEMBER</span>
              </div>
              <div className="role-perms">
                {["View Projects", "Update Tasks", "Comment", "Upload Files", "Track Time", "View Own Reports"].map(p => (
                  <span className="perm" key={p}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg" />
        <p className="section-eyebrow" style={{ position: "relative", zIndex: 1 }}>// GET STARTED</p>
        <h2 className="section-title" style={{ position: "relative", zIndex: 1 }}>
          YOUR TEAM<br />DESERVES BETTER
        </h2>
        <p className="cta-sub" style={{ position: "relative", zIndex: 1 }}>
          Join thousands of teams already delivering more, stressing less, and shipping on time — every time.
        </p>
        <div className="cta-buttons" style={{ position: "relative", zIndex: 1 }}>
          <button className="btn-primary" style={{ fontSize: 14 }} onClick={() => router.push("/signup")}>
            CREATE FREE ACCOUNT
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-ghost" onClick={() => router.push("/login")}>Already a member? Sign in</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="nav-logo-dot" />
          TEAM TASK MANAGER
        </div>
        <p className="footer-copy">© 2026 Team Task Manager Inc. All rights reserved.</p>
        <ul className="footer-links">
          {["Privacy", "Terms", "Status", "Twitter"].map(l => (
            <li key={l}><a href="#">{l}</a></li>
          ))}
        </ul>
      </footer>
    </>
  );
}