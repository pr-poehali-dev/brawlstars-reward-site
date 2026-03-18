/* Точная копия https://lemmekryt.github.io/brawllstars.github.io/
   Все картинки, иконки, фон — с оригинала. Ссылка заменена на Telegram. */

const TG   = 'https://t.me/+Rnh7PMMzGqBiNWY6';
const GP   = 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars';
const AS   = 'https://apps.apple.com/app/brawl-stars/id1229016807';
const RAW  = 'https://raw.githubusercontent.com/lemmekryt/brawllstars.github.io/main';

/* Все иконки соцсетей встроены SVG — не зависят от внешних файлов */
const FbIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const XIcon  = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const IgIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="white"/></svg>;
const TtIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 12.67 0V8.69a8.17 8.17 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/></svg>;
const YtIcon = () => <svg width="30" height="22" viewBox="0 0 576 512" fill="white"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597C15 167.014 15 256 15 256s0 88.986 11.345 131.917c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821C561 344.986 561 256 561 256s0-88.986-11.345-131.917zM232.145 337.591V174.409L374.884 256 232.145 337.591z"/></svg>;
const RdIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>;

const GpIcon = () => (
  <svg width="36" height="36" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="g1" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#00BCD4"/><stop offset="100%" stopColor="#00E5A0"/></linearGradient>
      <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFD740"/><stop offset="100%" stopColor="#FF6D00"/></linearGradient>
      <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FF3D57"/><stop offset="100%" stopColor="#B71C6B"/></linearGradient>
      <linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#40C4FF"/><stop offset="100%" stopColor="#1565C0"/></linearGradient>
    </defs>
    <path fill="url(#g4)" d="M60 36 L60 476 L268 256 Z"/>
    <path fill="url(#g2)" d="M60 36 L268 256 L415 172 L148 20 Z"/>
    <path fill="url(#g3)" d="M60 476 L268 256 L415 340 L148 492 Z"/>
    <path fill="url(#g1)" d="M268 256 L415 172 L462 200 L462 312 L415 340 Z"/>
  </svg>
);

const AplIcon = () => (
  <svg width="30" height="36" viewBox="0 0 384 512" fill="white">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-16.9 75.8-16.9 31.8 0 48.3 16.9 76.4 16.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

export default function Index() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* === MAIN BLUE SECTION === */
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-grow: 1;
          padding: 0 28px 60px;
          background-color: #2563EB;
          background-image: url('${RAW}/img/bg.WEBP');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          position: relative;
        }

        /* === LANGUAGE DROPDOWN === */
        .top-line {
          position: absolute;
          top: 8px;
          right: 16px;
        }
        .top-line__language-dropdown {
          width: 128px;
          padding: 10px 26px 10px 34px;
          border: 0;
          border-radius: 25px;
          appearance: none;
          -webkit-appearance: none;
          outline: none;
          cursor: pointer;
          font-family: 'Lilita One', sans-serif;
          font-size: 13px;
          color: #fff;
          text-shadow: none;
          background-color: rgba(0,0,0,0.22);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3C/svg%3E"),
                          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-size: 18px, 12px;
          background-repeat: no-repeat, no-repeat;
          background-position: 9px center, right 10px center;
        }
        .top-line__language-dropdown option { color: #000; background: #fff; }

        /* === LOGO === */
        .main-logo {
          width: 280px;
          margin-top: 56px;
          filter: drop-shadow(0 6px 20px rgba(0,0,0,0.55));
          animation: logoIn 0.6s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes logoIn {
          from { opacity:0; transform:translateY(-20px) scale(0.9); }
          to   { opacity:1; transform:none; }
        }

        /* === TEXT === */
        .text-epic {
          font-family: 'Lilita One', sans-serif;
          font-size: 30px;
          color: #fff;
          text-align: center;
          text-shadow: 0 3px 10px rgba(0,0,0,0.65);
          margin-top: 22px;
          margin-bottom: 28px;
          max-width: 300px;
          line-height: 1.25;
          animation: fadeUp 0.5s 0.12s ease both;
        }

        /* === GOLD BUTTON === */
        .btn-open-br {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 320px;
          min-height: 62px;
          text-align: center;
          text-decoration: none;
          font-family: 'Lilita One', sans-serif;
          font-size: 24px;
          color: #fff;
          text-shadow: 0 2px 6px rgba(70,25,0,0.7);
          letter-spacing: 0.5px;
          border-radius: 16px;
          border: 3px solid #ffe870;
          border-bottom: 5px solid #7a3500;
          background: linear-gradient(180deg, #ffe96a 0%, #ffb800 32%, #e07500 66%, #b95000 100%);
          box-shadow: 0 8px 0 #6a2c00, 0 12px 30px rgba(0,0,0,0.42);
          position: relative;
          overflow: hidden;
          transition: transform 0.1s, box-shadow 0.1s;
          animation: fadeUp 0.5s 0.26s ease both, btnPulse 3s 2s ease-in-out infinite;
          cursor: pointer;
        }
        .btn-open-br::after {
          content: '';
          position: absolute; top: 0; left: -120%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
          animation: shimmer 3s 1s ease-in-out infinite;
        }
        @keyframes shimmer { 0%{left:-120%} 55%{left:140%} 100%{left:140%} }
        .btn-open-br:active {
          transform: translateY(6px);
          box-shadow: 0 2px 0 #6a2c00, 0 4px 12px rgba(0,0,0,0.4);
        }
        @keyframes btnPulse {
          0%,100%{ box-shadow:0 8px 0 #6a2c00, 0 0 0 0 rgba(255,196,0,0); }
          50%    { box-shadow:0 8px 0 #6a2c00, 0 0 0 18px rgba(255,196,0,0.25); }
        }

        /* === DOWNLOAD SECTION === */
        .text-under-down {
          font-family: 'Lilita One', sans-serif;
          font-size: 22px;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.55);
          margin-top: 40px;
          margin-bottom: 16px;
          text-align: center;
          animation: fadeUp 0.5s 0.4s ease both;
        }

        .battons-down-app {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 320px;
          animation: fadeUp 0.5s 0.5s ease both;
        }

        .battons-down-app__btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 20px;
          border-radius: 14px;
          background: #0e0e0e;
          border: 2px solid #484848;
          text-decoration: none;
          transition: transform 0.15s, background 0.15s;
          cursor: pointer;
        }
        .battons-down-app__btn:hover { background: #1c1c1c; }
        .battons-down-app__btn:active { transform: scale(0.97); }

        .store-icon { display:flex; align-items:center; justify-content:center; width:40px; flex-shrink:0; }
        .store-text-small { color:#888; font-size:11px; font-family:Arial,sans-serif; font-weight:600; letter-spacing:0.7px; margin-bottom:2px; }
        .store-text-big   { color:#fff; font-size:22px; font-family:Arial,sans-serif; font-weight:700; line-height:1.1; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:none; }
        }

        /* === FOOTER === */
        .footer {
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 20px 28px;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 22px;
          margin-bottom: 22px;
        }
        .footer-link {
          color: #c5c5c5;
          font-size: 13.5px;
          font-family: Arial, sans-serif;
          text-decoration: none;
          text-align: center;
          transition: color 0.2s;
          line-height: 1.4;
        }
        .footer-link:hover { color: #fff; }

        .footer-divider {
          border: none;
          border-top: 1px solid #242424;
          width: 100%;
          max-width: 340px;
          margin-bottom: 22px;
        }

        .footer-sub-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .supercell-logo {
          font-family: 'Lilita One', sans-serif;
          font-size: 32px;
          letter-spacing: 4px;
          color: #fff;
          line-height: 0.92;
          text-align: center;
        }

        .logo-sub-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .logo-sub-link span {
          color: #4a4a4a;
          font-size: 12px;
          font-family: Arial, sans-serif;
          cursor: pointer;
          transition: color 0.2s;
        }
        .logo-sub-link span:hover { color: #888; }

        .footer-links-icons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 24px;
        }

        .social-icon-btn {
          width: 48px; height: 48px;
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: transform 0.15s, opacity 0.15s;
          flex-shrink: 0;
        }
        .social-icon-btn:hover  { transform: scale(1.1); opacity: 0.88; }
        .social-icon-btn:active { transform: scale(0.95); }
      `}</style>

      {/* ══════════ MAIN BLUE BLOCK ══════════ */}
      <div className="main">

        {/* Language */}
        <div className="top-line">
          <select className="top-line__language-dropdown" defaultValue="ru" aria-label="Select a language">
            <option value="ar">العربية</option>
            <option value="cn">简体中文</option>
            <option value="cnt">繁體中文</option>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fi">Suomi</option>
            <option value="fr">Français</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="jp">日本語</option>
            <option value="kr">한국어</option>
            <option value="ms">Bahasa Melayu</option>
            <option value="nl">Nederlands</option>
            <option value="no">Norsk</option>
            <option value="pl">Polski</option>
            <option value="pt">Português</option>
            <option value="ru">ру́сский</option>
            <option value="th">ไทย</option>
            <option value="tr">Türkçe</option>
            <option value="vi">Tiếng Việt</option>
          </select>
        </div>

        {/* Logo — с оригинального репозитория */}
        <img className="main-logo" src={`${RAW}/img/logo.WEBP`} alt="Brawl Stars logo" />

        {/* Headline */}
        <p className="text-epic">Получите награду в Brawl Stars!</p>

        {/* CTA — ведёт в Telegram */}
        <a href={TG} target="_blank" rel="noopener noreferrer" className="btn-open-br">
          <span>Получить награду</span>
        </a>

        {/* Download */}
        <p className="text-under-down">Скачать Brawl Stars</p>

        <div className="battons-down-app">
          {/* Google Play */}
          <a href={GP} target="_blank" rel="noopener noreferrer" className="battons-down-app__btn">
            <div className="store-icon"><GpIcon /></div>
            <div>
              <div className="store-text-small">GET IT ON</div>
              <div className="store-text-big">Google Play</div>
            </div>
          </a>
          {/* App Store */}
          <a href={AS} target="_blank" rel="noopener noreferrer" className="battons-down-app__btn">
            <div className="store-icon"><AplIcon /></div>
            <div>
              <div className="store-text-small">Download on the</div>
              <div className="store-text-big">App Store</div>
            </div>
          </a>
        </div>
      </div>

      {/* ══════════ BLACK FOOTER ══════════ */}
      <div className="footer">

        <div className="footer-links">
          <a href="#" className="footer-link">Справочник для родителей</a>
          <a href="#" className="footer-link">Условия пользования</a>
          <a href="#" className="footer-link">Политика конфиденциальности</a>
        </div>

        <hr className="footer-divider" />

        <div className="footer-sub-line">
          <div className="supercell-logo">SUPERC<br/>ELL</div>
          <div className="logo-sub-link">
            <span>Управление файлами cookie</span>
          </div>
        </div>

        {/* Social icons */}
        <div className="footer-links-icons">
          <a href={TG} target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ background: '#1877F2' }}>
            <FbIcon />
          </a>
          <a href={TG} target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ background: '#111', border: '1px solid #2a2a2a' }}>
            <XIcon />
          </a>
          <a href={TG} target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
            <IgIcon />
          </a>
          <a href={TG} target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ background: '#010101', border: '1px solid #2a2a2a' }}>
            <TtIcon />
          </a>
          <a href={TG} target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ background: '#FF0000' }}>
            <YtIcon />
          </a>
          <a href={TG} target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ background: '#FF4500' }}>
            <RdIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
