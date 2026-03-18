import { useEffect, useState } from 'react';

const TELEGRAM_URL = 'https://t.me/+Rnh7PMMzGqBiNWY6';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars';
const APP_STORE_URL = 'https://apps.apple.com/app/brawl-stars/id1229016807';
const BASE = 'https://lemmekryt.github.io/brawllstars.github.io';

export default function Index() {
  const [_visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
        * { box-sizing: border-box; }

        .bs-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding: 0 28px 60px;
          background-color: #1a6de0;
          background-image: url('${BASE}/img/bg.WEBP');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
        }

        .bs-lang-select {
          appearance: none;
          -webkit-appearance: none;
          width: 128px;
          padding: 9px 28px 9px 34px;
          border: 0;
          border-radius: 25px;
          background-color: rgba(0,0,0,0.2);
          background-image: url('${BASE}/img/icons/global.svg'), url('${BASE}/img/icons/caret.svg');
          background-size: 18px, 12px;
          background-repeat: no-repeat, no-repeat;
          background-position: 10px center, right 11px center;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          font-family: Arial, sans-serif;
          outline: none;
          cursor: pointer;
        }

        .bs-logo {
          width: 260px;
          margin-top: 52px;
          animation: logoIn 0.6s ease both;
          filter: drop-shadow(0 6px 18px rgba(0,0,0,0.5));
        }
        @keyframes logoIn {
          from { opacity: 0; transform: translateY(-18px) scale(0.93); }
          to   { opacity: 1; transform: none; }
        }

        .bs-text-epic {
          font-family: 'Lilita One', 'Arial Black', sans-serif;
          font-size: 28px;
          color: #fff;
          text-align: center;
          text-shadow: 0 3px 10px rgba(0,0,0,0.6);
          margin-top: 24px;
          margin-bottom: 28px;
          max-width: 300px;
          line-height: 1.28;
          animation: fadeUp 0.55s 0.15s ease both;
        }

        .bs-btn {
          display: block;
          width: 100%;
          max-width: 320px;
          text-align: center;
          text-decoration: none;
          font-family: 'Lilita One', 'Arial Black', sans-serif;
          font-size: 22px;
          color: #fff;
          text-shadow: 0 2px 6px rgba(80,30,0,0.65);
          padding: 16px 20px;
          border-radius: 14px;
          border: 3px solid #ffe870;
          border-bottom-color: #7a3500;
          background: linear-gradient(180deg, #ffe96a 0%, #fbb500 35%, #e07500 68%, #b85000 100%);
          box-shadow: 0 7px 0 #6a2c00, 0 10px 28px rgba(0,0,0,0.4);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.1s, box-shadow 0.1s;
          animation: fadeUp 0.55s 0.3s ease both, btnPulse 2.8s 1.5s ease-in-out infinite;
        }
        .bs-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -110%;
          width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
          animation: shimmer 2.6s 1s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%   { left: -110%; }
          55%  { left: 140%; }
          100% { left: 140%; }
        }
        .bs-btn:active {
          transform: translateY(5px);
          box-shadow: 0 2px 0 #6a2c00, 0 4px 10px rgba(0,0,0,0.4);
        }
        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 7px 0 #6a2c00, 0 0 0 0 rgba(255,196,0,0); }
          50%       { box-shadow: 0 7px 0 #6a2c00, 0 0 0 14px rgba(255,196,0,0.32); }
        }

        .bs-text-under {
          font-family: 'Lilita One', 'Arial Black', sans-serif;
          font-size: 21px;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          margin-top: 38px;
          margin-bottom: 16px;
          text-align: center;
          animation: fadeUp 0.55s 0.45s ease both;
        }

        .bs-stores {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 320px;
          animation: fadeUp 0.55s 0.55s ease both;
        }

        .bs-store-btn {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 12px 20px;
          border-radius: 13px;
          background: #0d0d0d;
          border: 2px solid #4a4a4a;
          text-decoration: none;
          transition: transform 0.15s;
        }
        .bs-store-btn:active { transform: scale(0.97); }

        .bs-store-icon {
          width: 36px; height: 36px;
          object-fit: contain;
          flex-shrink: 0;
        }
        .bs-store-small {
          color: #999; font-size: 11px; font-family: Arial,sans-serif;
          font-weight: 600; letter-spacing: 0.6px; line-height: 1; margin-bottom: 2px;
        }
        .bs-store-big {
          color: #fff; font-size: 20px; font-family: Arial,sans-serif;
          font-weight: 700; line-height: 1.15;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: none; }
        }

        /* Footer */
        .bs-footer {
          background: #000;
          display: flex; flex-direction: column; align-items: center;
          padding: 28px 20px 24px;
        }
        .bs-footer-links {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 6px 20px; margin-bottom: 20px;
        }
        .bs-footer-link {
          color: #ccc; font-size: 13px; font-family: Arial,sans-serif;
          text-decoration: none; text-align: center; transition: color 0.2s;
        }
        .bs-footer-link:hover { color: #fff; }
        .bs-footer-hr {
          border: none; border-top: 1px solid #2a2a2a;
          width: 100%; max-width: 340px; margin-bottom: 20px;
        }
        .bs-supercell-img { height: 38px; object-fit: contain; margin-bottom: 8px; }
        .bs-cookie {
          color: #555; font-size: 12px; font-family: Arial,sans-serif; margin-bottom: 22px;
        }
        .bs-socials {
          display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;
        }
        .bs-soc {
          width: 46px; height: 46px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none; overflow: hidden;
          transition: transform 0.15s, opacity 0.15s;
          flex-shrink: 0;
        }
        .bs-soc:hover { transform: scale(1.1); opacity: 0.85; }
        .bs-soc:active { transform: scale(0.95); }
        .bs-soc img { width: 26px; height: 26px; object-fit: contain; }
      `}</style>

      {/* Blue section */}
      <div className="bs-main">
        {/* Language dropdown */}
        <div style={{ position: 'absolute', top: 8, right: 16 }}>
          <select className="bs-lang-select" defaultValue="ru">
            <option value="ar">العربية</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="ru">ру́сский</option>
            <option value="tr">Türkçe</option>
            <option value="zh">中文</option>
          </select>
        </div>

        {/* Logo — берём прямо с оригинального сайта */}
        <img
          className="bs-logo"
          src={`${BASE}/img/logo.WEBP`}
          alt="Brawl Stars"
        />

        <p className="bs-text-epic">Получите награду в Brawl Stars!</p>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bs-btn"
        >
          Получить награду
        </a>

        <p className="bs-text-under">Скачать Brawl Stars</p>

        <div className="bs-stores">
          <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="bs-store-btn">
            <img className="bs-store-icon" src={`${BASE}/img/icons/google-play.svg`} alt="Google Play" />
            <div>
              <div className="bs-store-small">GET IT ON</div>
              <div className="bs-store-big">Google Play</div>
            </div>
          </a>

          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="bs-store-btn">
            <img className="bs-store-icon" src={`${BASE}/img/icons/app-store.svg`} alt="App Store" />
            <div>
              <div className="bs-store-small">Download on the</div>
              <div className="bs-store-big">App Store</div>
            </div>
          </a>
        </div>
      </div>

      {/* Black footer */}
      <div className="bs-footer">
        <div className="bs-footer-links">
          <a href="#" className="bs-footer-link">Справочник для родителей</a>
          <a href="#" className="bs-footer-link">Условия пользования</a>
          <a href="#" className="bs-footer-link">Политика конфиденциальности</a>
        </div>

        <hr className="bs-footer-hr" />

        <img
          className="bs-supercell-img"
          src={`${BASE}/img/icons/supercell.WEBP`}
          alt="Supercell"
        />

        <p className="bs-cookie">Управление файлами cookie</p>

        <div className="bs-socials">
          {[
            { name: 'facebook',  bg: '#1877F2', src: `${BASE}/img/icons/facebook.svg` },
            { name: 'twitter',   bg: '#111111', src: `${BASE}/img/icons/twitter.svg` },
            { name: 'instagram', bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', src: `${BASE}/img/icons/instagram.svg` },
            { name: 'tiktok',    bg: '#010101', src: `${BASE}/img/icons/tiktok.svg` },
            { name: 'youtube',   bg: '#FF0000', src: `${BASE}/img/icons/youtube.svg` },
            { name: 'reddit',    bg: '#FF4500', src: `${BASE}/img/icons/reddit.svg` },
          ].map(({ name, bg, src }) => (
            <a
              key={name}
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bs-soc"
              style={{ background: bg }}
            >
              <img src={src} alt={name} style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
