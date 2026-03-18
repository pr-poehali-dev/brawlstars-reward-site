import { useEffect, useState } from 'react';

const TELEGRAM_URL = 'https://t.me/+Rnh7PMMzGqBiNWY6';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars';
const APP_STORE_URL = 'https://apps.apple.com/app/brawl-stars/id1229016807';
const BG_PATTERN = 'https://cdn.poehali.dev/projects/db3ec8df-38e5-4bbe-bc0a-aa34909cd66a/files/9665deaa-2fd7-4943-8694-7848fe8e3898.jpg';

const GooglePlayIcon = () => (
  <svg width="34" height="34" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="gp_a" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#00C6FF"/>
        <stop offset="100%" stopColor="#1DE9B6"/>
      </linearGradient>
      <linearGradient id="gp_b" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD000"/>
        <stop offset="100%" stopColor="#FF6D00"/>
      </linearGradient>
      <linearGradient id="gp_c" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF3A44"/>
        <stop offset="100%" stopColor="#C9145C"/>
      </linearGradient>
      <linearGradient id="gp_d" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#32BAFF"/>
        <stop offset="100%" stopColor="#243ED4"/>
      </linearGradient>
    </defs>
    <path fill="url(#gp_d)" d="M48 76v360l208-180z"/>
    <path fill="url(#gp_a)" d="M256 256l159 110L48 436z"/>
    <path fill="url(#gp_c)" d="M256 256L48 436l167.1-77.5z"/>
    <path fill="url(#gp_b)" d="M256 256L48 76l167.1 77.5z"/>
    <path fill="url(#gp_a)" d="M415 221L256 256 48 76l367 145z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="28" height="34" viewBox="0 0 814 1000" fill="white">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 681.7 0 576.8 0 405.6 119.8 315 237.3 315c65.8 0 120.8 43.4 162.1 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
  </svg>
);

export default function Index() {
  const [pulse, setPulse] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    const iv = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 700);
    }, 2800);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

        .bs-bg {
          background-color: #1E6FE0;
          background-image: url('${BG_PATTERN}');
          background-size: 200px 200px;
          background-repeat: repeat;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .fade-up.show { opacity: 1; transform: translateY(0); }

        .skull-float {
          animation: skullFloat 2.8s ease-in-out infinite;
        }
        @keyframes skullFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-10px) scale(1.04); }
        }

        .btn-gold {
          display: block;
          width: 100%;
          text-align: center;
          padding: 17px 28px;
          border-radius: 14px;
          font-family: 'Lilita One', 'Arial Black', sans-serif;
          font-size: 24px;
          color: #fff;
          text-shadow: 0 2px 6px rgba(80,30,0,0.7);
          letter-spacing: 1px;
          text-decoration: none;
          background: linear-gradient(180deg, #FFEC6A 0%, #FFB800 35%, #E07800 70%, #B85500 100%);
          border: 3px solid #FFE070;
          border-bottom-color: #7A3500;
          box-shadow: 0 7px 0 #6A2D00, 0 12px 28px rgba(0,0,0,0.45);
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.1s;
          position: relative;
          overflow: hidden;
        }
        .btn-gold::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: shimmerBtn 2.5s ease-in-out infinite;
        }
        @keyframes shimmerBtn {
          0%   { left: -100%; }
          60%  { left: 150%; }
          100% { left: 150%; }
        }
        .btn-gold:active {
          transform: translateY(5px);
          box-shadow: 0 2px 0 #6A2D00, 0 4px 10px rgba(0,0,0,0.4);
        }
        .btn-gold.pulse-anim {
          animation: btnPulse 0.7s ease-out;
        }
        @keyframes btnPulse {
          0%   { box-shadow: 0 7px 0 #6A2D00, 0 0 0 0 rgba(255,200,0,0); }
          40%  { box-shadow: 0 7px 0 #6A2D00, 0 0 0 16px rgba(255,200,0,0.35); }
          100% { box-shadow: 0 7px 0 #6A2D00, 0 0 0 28px rgba(255,200,0,0); }
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 13px 20px;
          border-radius: 14px;
          background: #0d0d0d;
          border: 2px solid #444;
          cursor: pointer;
          transition: transform 0.15s, background 0.15s;
          text-decoration: none;
        }
        .store-btn:active { transform: scale(0.97); background: #1a1a1a; }

        .lang-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(0,0,80,0.3);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.22);
          color: white;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .social-btn {
          width: 46px; height: 46px;
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.15s, opacity 0.15s;
          text-decoration: none;
        }
        .social-btn:hover { transform: scale(1.1); opacity: 0.85; }
        .social-btn:active { transform: scale(0.95); }

        .supercell-text {
          font-family: 'Lilita One', Impact, sans-serif;
          font-size: 34px;
          letter-spacing: 4px;
          color: white;
          line-height: 1;
          text-transform: uppercase;
        }
      `}</style>

      {/* ── Blue patterned section ── */}
      <div className="bs-bg flex flex-col items-center px-5 pt-5 pb-12">

        {/* Language pill — top right */}
        <div className="self-end mb-5">
          <div className="lang-pill">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            русский
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        {/* Logo */}
        <div className={`flex flex-col items-center mb-5 fade-up ${visible ? 'show' : ''}`} style={{ transitionDelay: '0.05s' }}>
          {/* BRAWL */}
          <div style={{
            fontFamily: "'Lilita One', Impact, 'Arial Black', sans-serif",
            fontSize: '76px',
            lineHeight: 1,
            color: '#ffffff',
            textShadow: '0 5px 0 rgba(0,0,0,0.55), 0 0 30px rgba(255,255,255,0.15)',
            WebkitTextStroke: '3px rgba(0,0,0,0.5)',
            letterSpacing: '5px',
          }}>
            BRAWL
          </div>
          {/* STARS */}
          <div style={{
            fontFamily: "'Lilita One', Impact, 'Arial Black', sans-serif",
            fontSize: '92px',
            lineHeight: 1,
            color: '#EE1A1A',
            textShadow: '0 6px 0 rgba(60,0,0,0.9), 0 0 40px rgba(240,30,30,0.4)',
            WebkitTextStroke: '4px #500000',
            letterSpacing: '5px',
          }}>
            STARS
          </div>
          {/* Golden skull badge */}
          <div className="skull-float mt-3 flex items-center justify-center" style={{
            width: 96, height: 96,
            background: 'radial-gradient(circle at 38% 32%, #FFE040, #C88000)',
            borderRadius: '50%',
            border: '5px solid #7A5000',
            boxShadow: '0 6px 24px rgba(0,0,0,0.65), inset 0 2px 5px rgba(255,255,200,0.3)',
            fontSize: 54,
          }}>
            ☠️
          </div>
        </div>

        {/* Headline */}
        <div className={`text-center mb-7 fade-up ${visible ? 'show' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <h1 style={{
            fontFamily: "'Lilita One', 'Arial Black', sans-serif",
            fontSize: '26px',
            color: 'white',
            textShadow: '0 3px 10px rgba(0,0,0,0.6)',
            maxWidth: 280,
            lineHeight: 1.3,
            margin: 0,
          }}>
            Получите награду в Brawl Stars!
          </h1>
        </div>

        {/* CTA Button */}
        <div className={`w-full max-w-xs mb-10 fade-up ${visible ? 'show' : ''}`} style={{ transitionDelay: '0.35s' }}>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-gold ${pulse ? 'pulse-anim' : ''}`}
          >
            Получить награду
          </a>
        </div>

        {/* Download section */}
        <div className={`w-full max-w-xs fade-up ${visible ? 'show' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <div style={{
            fontFamily: "'Lilita One', 'Arial Black', sans-serif",
            fontSize: '22px',
            color: 'white',
            textShadow: '0 3px 8px rgba(0,0,0,0.5)',
            textAlign: 'center',
            marginBottom: 14,
          }}>
            Скачать Brawl Stars
          </div>

          {/* Google Play */}
          <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="store-btn" style={{ marginBottom: 12 }}>
            <GooglePlayIcon />
            <div>
              <div style={{ color: '#999', fontSize: '11px', fontWeight: 600, letterSpacing: '0.8px', fontFamily: 'Arial, sans-serif' }}>GET IT ON</div>
              <div style={{ color: 'white', fontSize: '21px', fontWeight: 700, fontFamily: 'Arial, sans-serif', lineHeight: 1.2 }}>Google Play</div>
            </div>
          </a>

          {/* App Store */}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="store-btn">
            <AppleIcon />
            <div>
              <div style={{ color: '#999', fontSize: '11px', fontWeight: 600, letterSpacing: '0.8px', fontFamily: 'Arial, sans-serif' }}>Download on the</div>
              <div style={{ color: 'white', fontSize: '21px', fontWeight: 700, fontFamily: 'Arial, sans-serif', lineHeight: 1.2 }}>App Store</div>
            </div>
          </a>
        </div>
      </div>

      {/* ── Black footer ── */}
      <div className="bg-black flex flex-col items-center px-6 py-9">

        {/* Footer links */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mb-6" style={{ maxWidth: 340 }}>
          {['Справочник для родителей', 'Условия пользования', 'Политика конфиденциальности'].map((l) => (
            <a key={l} href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
              style={{ color: '#bbb', fontSize: 13, textDecoration: 'none', textAlign: 'center', fontFamily: 'Arial, sans-serif', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#bbb')}
            >{l}</a>
          ))}
        </div>

        <hr style={{ borderColor: '#2a2a2a', width: '100%', maxWidth: 320, marginBottom: 24 }} />

        {/* Supercell */}
        <div className="supercell-text text-center mb-3">
          SUPERC<br />ELL
        </div>

        <div style={{ color: '#555', fontSize: 13, fontFamily: 'Arial, sans-serif', marginBottom: 22 }}>
          Управление файлами cookie
        </div>

        {/* Social icons */}
        <div className="flex gap-3 flex-wrap justify-center">
          {/* Facebook */}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#1877F2' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          {/* X */}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#111' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          {/* Instagram */}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          {/* TikTok */}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#010101', border: '1px solid #333' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/></svg>
          </a>
          {/* YouTube */}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#FF0000' }}>
            <svg width="22" height="16" viewBox="0 0 576 512" fill="white"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
          </a>
          {/* Reddit */}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ background: '#FF4500' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
