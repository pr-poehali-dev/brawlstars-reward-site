const TELEGRAM_URL = 'https://t.me/+Rnh7PMMzGqBiNWY6';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars';
const APP_STORE_URL = 'https://apps.apple.com/app/brawl-stars/id1229016807';
const BASE = 'https://lemmekryt.github.io/brawllstars.github.io';

/* ── SVG иконки встроенные ── */
const IconGooglePlay = () => (
  <svg width="38" height="38" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gp1" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00BCD4"/><stop offset="100%" stopColor="#00E5A0"/></linearGradient>
      <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFD740"/><stop offset="100%" stopColor="#FF6D00"/></linearGradient>
      <linearGradient id="gp3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF3D57"/><stop offset="100%" stopColor="#B71C6B"/></linearGradient>
      <linearGradient id="gp4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#40C4FF"/><stop offset="100%" stopColor="#1565C0"/></linearGradient>
    </defs>
    <path fill="url(#gp4)" d="M55 32 L55 480 L270 256 Z"/>
    <path fill="url(#gp2)" d="M55 32 L270 256 L420 170 L140 16 Z"/>
    <path fill="url(#gp3)" d="M55 480 L270 256 L420 342 L140 496 Z"/>
    <path fill="url(#gp1)" d="M270 256 L420 170 L470 200 L470 312 L420 342 Z"/>
  </svg>
);

const IconApple = () => (
  <svg width="34" height="38" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-16.9 75.8-16.9 31.8 0 48.3 16.9 76.4 16.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const IconX = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconTikTok = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.33 6.34 6.34 0 0 0 12.67 0V8.69a8.17 8.17 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
  </svg>
);

const IconYoutube = () => (
  <svg width="26" height="20" viewBox="0 0 576 512" fill="white">
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597C15 167.014 15 256.009 15 256.009s0 88.99 11.345 131.913c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821C561 344.997 561 256.002 561 256.002s0-88.996-11.345-131.919zM232.145 337.591V175.185l142.739 81.205-142.739 81.201z"/>
  </svg>
);

const IconReddit = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

const socials = [
  { key: 'fb',  bg: '#1877F2', Icon: IconFacebook },
  { key: 'x',   bg: '#0f0f0f', Icon: IconX, border: '1px solid #333' },
  { key: 'ig',  bg: 'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', Icon: IconInstagram },
  { key: 'tt',  bg: '#010101', Icon: IconTikTok, border: '1px solid #2a2a2a' },
  { key: 'yt',  bg: '#FF0000', Icon: IconYoutube },
  { key: 'rd',  bg: '#FF4500', Icon: IconReddit },
];

export default function Index() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .bs-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding: 0 28px 64px;
          background-color: #1E6FE0;
          background-image: url('${BASE}/img/bg.WEBP');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          min-height: 100vh;
        }

        /* Language */
        .bs-lang {
          position: absolute; top: 10px; right: 14px;
          display: flex; align-items: center; gap: 6px;
          padding: 8px 14px 8px 12px;
          border-radius: 25px;
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(6px);
          border: 1.5px solid rgba(255,255,255,0.18);
          color: #fff;
          font-family: 'Lilita One', sans-serif;
          font-size: 14px;
          cursor: pointer;
          user-select: none;
        }

        /* Logo */
        .bs-logo {
          width: 270px;
          margin-top: 56px;
          filter: drop-shadow(0 6px 20px rgba(0,0,0,0.55));
          animation: logoIn 0.55s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes logoIn {
          from { opacity:0; transform: translateY(-22px) scale(0.9); }
          to   { opacity:1; transform: none; }
        }

        /* Headline */
        .bs-title {
          font-family: 'Lilita One', sans-serif;
          font-size: 30px;
          color: #fff;
          text-align: center;
          text-shadow: 0 3px 12px rgba(0,0,0,0.65);
          margin-top: 22px;
          margin-bottom: 30px;
          max-width: 290px;
          line-height: 1.25;
          animation: fadeUp 0.5s 0.12s ease both;
        }

        /* Gold button */
        .bs-btn {
          display: block;
          width: 100%; max-width: 320px;
          text-align: center;
          text-decoration: none;
          font-family: 'Lilita One', sans-serif;
          font-size: 24px;
          color: #fff;
          text-shadow: 0 2px 6px rgba(70,25,0,0.7);
          letter-spacing: 0.5px;
          padding: 17px 24px;
          border-radius: 16px;
          border: 3px solid #ffe870;
          border-bottom-color: #7a3500;
          background: linear-gradient(180deg, #ffe96a 0%, #ffb800 32%, #e07500 66%, #b95000 100%);
          box-shadow: 0 8px 0 #6a2c00, 0 12px 30px rgba(0,0,0,0.42);
          position: relative; overflow: hidden;
          transition: transform 0.1s, box-shadow 0.1s;
          animation: fadeUp 0.5s 0.26s ease both, btnPulse 3s 1.8s ease-in-out infinite;
          cursor: pointer;
        }
        .bs-btn::after {
          content: '';
          position: absolute; top: 0; left: -120%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
          animation: shimmer 3s 1.2s ease-in-out infinite;
        }
        @keyframes shimmer { 0%{left:-120%} 50%{left:140%} 100%{left:140%} }
        .bs-btn:active { transform:translateY(6px); box-shadow:0 2px 0 #6a2c00,0 4px 12px rgba(0,0,0,0.4); }
        @keyframes btnPulse {
          0%,100%{ box-shadow:0 8px 0 #6a2c00,0 0 0 0 rgba(255,196,0,0); }
          50%    { box-shadow:0 8px 0 #6a2c00,0 0 0 16px rgba(255,196,0,0.28); }
        }

        /* Store section */
        .bs-download-title {
          font-family: 'Lilita One', sans-serif;
          font-size: 22px; color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.55);
          margin-top: 40px; margin-bottom: 16px;
          text-align: center;
          animation: fadeUp 0.5s 0.4s ease both;
        }
        .bs-stores {
          display:flex; flex-direction:column; gap:12px;
          width:100%; max-width:320px;
          animation: fadeUp 0.5s 0.5s ease both;
        }
        .bs-store-btn {
          display:flex; align-items:center; gap:14px;
          padding: 13px 20px;
          border-radius: 14px;
          background: #0e0e0e;
          border: 2px solid #484848;
          text-decoration: none;
          transition: transform 0.15s, background 0.15s;
        }
        .bs-store-btn:hover { background: #1a1a1a; }
        .bs-store-btn:active { transform:scale(0.97); }
        .bs-store-icon { flex-shrink:0; display:flex; align-items:center; justify-content:center; width:40px; }
        .bs-store-small { color:#888; font-size:11px; font-family:Arial,sans-serif; font-weight:600; letter-spacing:0.7px; line-height:1; margin-bottom:3px; }
        .bs-store-big   { color:#fff; font-size:22px; font-family:Arial,sans-serif; font-weight:700; line-height:1.1; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:none; }
        }

        /* ── Footer ── */
        .bs-footer {
          background: #000;
          display:flex; flex-direction:column; align-items:center;
          padding: 30px 20px 26px;
        }
        .bs-footer-links {
          display:flex; flex-wrap:wrap; justify-content:center;
          gap: 8px 22px; margin-bottom:22px;
        }
        .bs-footer-link {
          color:#c0c0c0; font-size:13.5px; font-family:Arial,sans-serif;
          text-decoration:none; text-align:center;
          transition:color 0.2s;
        }
        .bs-footer-link:hover { color:#fff; }
        .bs-footer-hr {
          border:none; border-top:1px solid #252525;
          width:100%; max-width:340px; margin-bottom:22px;
        }
        .bs-supercell {
          font-family: 'Lilita One', sans-serif;
          font-size: 34px; letter-spacing:4px; color:#fff;
          line-height:0.95; text-align:center;
          margin-bottom:10px;
          text-shadow: 0 2px 8px rgba(255,255,255,0.08);
        }
        .bs-cookie { color:#4a4a4a; font-size:12px; font-family:Arial,sans-serif; margin-bottom:24px; }
        .bs-socials { display:flex; gap:10px; flex-wrap:wrap; justify-content:center; }
        .bs-soc {
          width:48px; height:48px; border-radius:11px;
          display:flex; align-items:center; justify-content:center;
          text-decoration:none;
          transition:transform 0.15s, opacity 0.15s;
          flex-shrink:0;
        }
        .bs-soc:hover { transform:scale(1.1); opacity:0.88; }
        .bs-soc:active { transform:scale(0.95); }
      `}</style>

      {/* ── Blue section ── */}
      <div className="bs-main">

        {/* Language pill */}
        <div className="bs-lang">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          ру́сский
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>

        {/* Logo с оригинального сайта */}
        <img className="bs-logo" src={`${BASE}/img/logo.WEBP`} alt="Brawl Stars" />

        {/* Headline */}
        <p className="bs-title">Получите награду в Brawl Stars!</p>

        {/* CTA */}
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="bs-btn">
          Получить награду
        </a>

        {/* Download */}
        <p className="bs-download-title">Скачать Brawl Stars</p>

        <div className="bs-stores">
          <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="bs-store-btn">
            <div className="bs-store-icon"><IconGooglePlay /></div>
            <div>
              <div className="bs-store-small">GET IT ON</div>
              <div className="bs-store-big">Google Play</div>
            </div>
          </a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="bs-store-btn">
            <div className="bs-store-icon"><IconApple /></div>
            <div>
              <div className="bs-store-small">Download on the</div>
              <div className="bs-store-big">App Store</div>
            </div>
          </a>
        </div>
      </div>

      {/* ── Black footer ── */}
      <div className="bs-footer">
        <div className="bs-footer-links">
          <a href="#" className="bs-footer-link">Справочник для родителей</a>
          <a href="#" className="bs-footer-link">Условия пользования</a>
          <a href="#" className="bs-footer-link">Политика конфиденциальности</a>
        </div>

        <hr className="bs-footer-hr" />

        <div className="bs-supercell">SUPERC<br/>ELL</div>

        <p className="bs-cookie">Управление файлами cookie</p>

        <div className="bs-socials">
          {socials.map(({ key, bg, Icon, border }) => (
            <a
              key={key}
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bs-soc"
              style={{ background: bg, border: border ?? 'none' }}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
