import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Награды', href: '#rewards' },
  { label: 'Инструкция', href: '#howto' },
  { label: 'Рейтинг', href: '#leaderboard' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brawl-dark/95 backdrop-blur-md border-b border-brawl-purple/30 shadow-lg shadow-brawl-purple/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('#hero')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brawl-gold to-brawl-orange flex items-center justify-center glow-gold">
            <Icon name="Zap" size={18} className="text-brawl-dark" />
          </div>
          <span className="font-orbitron font-900 text-lg text-gradient-gold tracking-wider">BRAWL REWARDS</span>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-gray-300 hover:text-brawl-gold transition-colors duration-200 font-rajdhani font-600 text-base tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brawl-gold transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button
          className="btn-brawl hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-sm"
          onClick={() => handleNav('#rewards')}
        >
          <Icon name="Gift" size={16} />
          Получить награду
        </button>

        <button
          className="md:hidden text-gray-300 hover:text-brawl-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-brawl-dark/98 backdrop-blur-md border-b border-brawl-purple/30">
          <ul className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left text-gray-300 hover:text-brawl-gold transition-colors font-rajdhani font-600 text-lg py-2 border-b border-white/5"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button className="btn-brawl w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg">
                <Icon name="Gift" size={16} />
                Получить награду
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
