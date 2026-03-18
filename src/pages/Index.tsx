const TELEGRAM_URL = 'https://t.me/+Rnh7PMMzGqBiNWY6';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars';
const APP_STORE_URL = 'https://apps.apple.com/app/brawl-stars/id1229016807';

const BrawlPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute opacity-[0.12] text-white"
        style={{
          fontSize: `${40 + (i % 4) * 20}px`,
          left: `${(i * 137) % 100}%`,
          top: `${(i * 97) % 100}%`,
          transform: `rotate(${(i * 23) % 360}deg)`,
        }}
      >
        💀
      </div>
    ))}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#3b82f6' }}>
      {/* Main blue section */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center px-6 py-12 text-center"
        style={{ background: 'linear-gradient(180deg, #4a9eff 0%, #1d6ed8 100%)' }}
      >
        <BrawlPattern />

        {/* Language selector */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-blue-800/40 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-semibold cursor-pointer border border-white/20">
          <span>🌐</span>
          <span>русский</span>
          <span>▾</span>
        </div>

        {/* Logo */}
        <div className="relative z-10 mb-6">
          <div className="flex flex-col items-center">
            <span
              className="text-5xl font-black tracking-widest leading-none"
              style={{
                color: '#fff',
                textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.3)',
                fontFamily: 'Impact, Arial Black, sans-serif',
                WebkitTextStroke: '2px rgba(0,0,0,0.4)',
              }}
            >
              BRAWL
            </span>
            <span
              className="text-6xl font-black tracking-widest leading-none"
              style={{
                color: '#e63232',
                textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 0 40px rgba(230,50,50,0.5)',
                fontFamily: 'Impact, Arial Black, sans-serif',
                WebkitTextStroke: '2px #8b0000',
              }}
            >
              STARS
            </span>
            {/* Skull badge */}
            <div
              className="w-20 h-20 flex items-center justify-center text-5xl mt-1"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))' }}
            >
              ☠️
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className="relative z-10 text-2xl font-black text-white mb-8 leading-tight max-w-xs"
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            fontFamily: 'Arial Black, sans-serif',
          }}
        >
          Получите награду в Brawl Stars!
        </h1>

        {/* Main CTA button */}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 w-full max-w-xs block text-center"
        >
          <div
            className="relative px-8 py-4 rounded-xl text-white text-2xl font-black cursor-pointer select-none active:scale-95 transition-transform"
            style={{
              background: 'linear-gradient(180deg, #f9d423 0%, #e8a000 50%, #c87800 100%)',
              boxShadow: '0 6px 0 #7a4800, 0 8px 20px rgba(0,0,0,0.4)',
              fontFamily: 'Arial Black, Impact, sans-serif',
              textShadow: '0 2px 4px rgba(0,0,0,0.4)',
              border: '3px solid #ffec80',
              letterSpacing: '0.02em',
            }}
          >
            Получить награду
          </div>
        </a>

        {/* Download section */}
        <div className="relative z-10 mt-10 w-full max-w-xs">
          <h2
            className="text-xl font-black text-white mb-4"
            style={{
              textShadow: '0 2px 6px rgba(0,0,0,0.4)',
              fontFamily: 'Arial Black, sans-serif',
            }}
          >
            Скачать Brawl Stars
          </h2>

          {/* Google Play */}
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mb-3"
          >
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-gray-600 cursor-pointer active:scale-95 transition-transform"
              style={{ background: '#1a1a1a' }}
            >
              <div className="text-3xl">▶</div>
              <div className="text-left">
                <div className="text-gray-300 text-xs">GET IT ON</div>
                <div className="text-white text-xl font-bold">Google Play</div>
              </div>
            </div>
          </a>

          {/* App Store */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-gray-600 cursor-pointer active:scale-95 transition-transform"
              style={{ background: '#1a1a1a' }}
            >
              <div className="text-3xl text-white"></div>
              <div className="text-left">
                <div className="text-gray-300 text-xs">Download on the</div>
                <div className="text-white text-xl font-bold">App Store</div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Black footer section */}
      <div className="bg-black px-6 py-8 text-center">
        {/* Footer links */}
        <div className="flex justify-center gap-6 flex-wrap mb-6">
          {['Справочник для родителей', 'Условия пользования', 'Политика конфиденциальности'].map((link) => (
            <a
              key={link}
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-sm hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Supercell logo */}
        <div className="mb-4">
          <span
            className="text-white text-2xl font-black tracking-widest"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            SUPERC<br />ELL
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-6">Управление файлами cookie</p>

        {/* Social icons */}
        <div className="flex justify-center gap-5 text-white text-2xl">
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">f</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">✕</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">📷</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">♪</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">▶</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
