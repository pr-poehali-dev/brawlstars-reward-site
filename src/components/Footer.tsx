import Icon from '@/components/ui/icon';

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brawl-card border-t border-white/5 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brawl-gold to-brawl-orange flex items-center justify-center">
                <Icon name="Zap" size={18} className="text-brawl-dark" />
              </div>
              <span className="font-orbitron font-900 text-brawl-gold tracking-wider">BRAWL REWARDS</span>
            </div>
            <p className="text-gray-500 font-rajdhani text-sm leading-relaxed">
              Крупнейший агрегатор наград и промокодов для Brawl Stars. Получай ресурсы бесплатно каждый день!
            </p>
          </div>

          <div>
            <h4 className="font-orbitron font-700 text-white text-sm mb-4 tracking-wide">РАЗДЕЛЫ</h4>
            <ul className="space-y-2">
              {[
                { label: 'Главная', href: '#hero' },
                { label: 'Награды', href: '#rewards' },
                { label: 'Инструкция', href: '#howto' },
                { label: 'Рейтинг', href: '#leaderboard' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Контакты', href: '#contacts' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-500 hover:text-brawl-gold transition-colors font-rajdhani text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-700 text-white text-sm mb-4 tracking-wide">УВЕДОМЛЕНИЯ</h4>
            <p className="text-gray-500 font-rajdhani text-sm mb-3">
              Подпишись на уведомления и узнавай о новых наградах первым
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="твой@email.com"
                className="flex-1 bg-brawl-dark border border-white/10 rounded-lg px-3 py-2 text-white font-rajdhani text-sm placeholder-gray-600 focus:outline-none focus:border-brawl-gold/40"
              />
              <button className="btn-brawl px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                <Icon name="Bell" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 font-rajdhani text-sm">
            © 2025 Brawl Rewards. Не аффилирован с Supercell.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-rajdhani text-xs hover:text-gray-400 cursor-pointer transition-colors">Политика конфиденциальности</span>
            <span className="text-gray-600 font-rajdhani text-xs hover:text-gray-400 cursor-pointer transition-colors">Условия использования</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
