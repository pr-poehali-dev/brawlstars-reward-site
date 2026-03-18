import Icon from '@/components/ui/icon';

const players = [
  { rank: 1, name: 'StarBrawler_Pro', rewards: 47, trophies: '52,841', avatar: '👑', badge: 'gold' },
  { rank: 2, name: 'NightShadow_X', rewards: 38, trophies: '48,320', avatar: '🦊', badge: 'silver' },
  { rank: 3, name: 'CyberColt777', rewards: 35, trophies: '45,100', avatar: '⚡', badge: 'bronze' },
  { rank: 4, name: 'BrawlKing_RU', rewards: 29, trophies: '41,550', avatar: '🔥', badge: 'none' },
  { rank: 5, name: 'ShadowBolt99', rewards: 26, trophies: '39,200', avatar: '💀', badge: 'none' },
  { rank: 6, name: 'GemHunter_Pro', rewards: 24, trophies: '37,800', avatar: '💎', badge: 'none' },
  { rank: 7, name: 'TopBrawler_RUS', rewards: 21, trophies: '35,600', avatar: '🏆', badge: 'none' },
  { rank: 8, name: 'DarkMatter_X', rewards: 19, trophies: '33,100', avatar: '🌑', badge: 'none' },
];

const badgeStyles: Record<string, string> = {
  gold: 'bg-gradient-to-r from-brawl-gold to-brawl-orange text-brawl-dark',
  silver: 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800',
  bronze: 'bg-gradient-to-r from-amber-600 to-amber-700 text-white',
  none: 'bg-brawl-card text-gray-400 border border-white/10',
};

const rankIcons: Record<number, string> = {
  1: '🥇',
  2: '🥈',
  3: '🥉',
};

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-20 bg-brawl-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,170,0,0.06)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brawl-gold/10 border border-brawl-gold/30 rounded-full px-4 py-1.5 mb-4">
            <Icon name="Trophy" size={14} className="text-brawl-gold" />
            <span className="text-sm font-rajdhani text-brawl-gold font-600 tracking-wider">ТОП ИГРОКОВ</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-900 text-white mb-3">
            РЕЙТИНГ <span className="text-gradient-gold">ЛУЧШИХ</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-lg max-w-xl mx-auto">
            Игроки, которые получили больше всего наград этого месяца
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {players.slice(0, 3).map((player) => (
              <div
                key={player.rank}
                className={`bg-card-brawl rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-2 ${
                  player.badge === 'gold' ? 'border-brawl-gold/50 glow-gold' : player.badge === 'silver' ? 'border-gray-400/40' : 'border-amber-600/40'
                } ${player.rank === 1 ? 'md:-mt-4' : ''}`}
              >
                <div className="text-4xl mb-2">{rankIcons[player.rank]}</div>
                <div className="text-3xl mb-2">{player.avatar}</div>
                <div className="font-orbitron font-700 text-white text-sm mb-1">{player.name}</div>
                <div className="text-brawl-gold font-rajdhani font-700 text-sm">{player.rewards} наград</div>
                <div className="text-gray-500 font-rajdhani text-xs mt-1">🏆 {player.trophies}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {players.slice(3).map((player) => (
              <div
                key={player.rank}
                className="bg-card-brawl rounded-xl border border-white/5 px-5 py-3 flex items-center gap-4 hover:border-brawl-purple/30 transition-all duration-200 hover:bg-brawl-purple/5"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-orbitron font-900 text-sm flex-shrink-0 ${badgeStyles[player.badge]}`}>
                  #{player.rank}
                </div>
                <div className="text-xl flex-shrink-0">{player.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-orbitron font-700 text-white text-sm truncate">{player.name}</div>
                  <div className="text-gray-500 font-rajdhani text-xs">🏆 {player.trophies}</div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <Icon name="Gift" size={13} className="text-brawl-gold" />
                  <span className="font-orbitron font-700 text-brawl-gold text-sm">{player.rewards}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-brawl-purple/10 border border-brawl-purple/30 rounded-xl p-4 flex items-center gap-3">
            <Icon name="Info" size={18} className="text-brawl-purple flex-shrink-0" />
            <p className="text-gray-300 font-rajdhani text-sm">
              Рейтинг обновляется каждые 24 часа. Получай больше наград — попади в топ!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
