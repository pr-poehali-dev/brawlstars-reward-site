import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const rewards = [
  {
    id: 1,
    title: 'Пакет Гемов',
    description: '100 бесплатных гемов для покупки скинов и боевых пропусков',
    value: '100 💎',
    rarity: 'rare',
    rarityLabel: 'Редкий',
    timeLeft: '2д 14ч',
    available: true,
    icon: '💎',
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/40',
  },
  {
    id: 2,
    title: 'Легендарный Скин',
    description: 'Эксклюзивный скин для Шелли "Золотой Рассвет"',
    value: 'Легенда',
    rarity: 'legendary',
    rarityLabel: 'Легендарный',
    timeLeft: '5ч 30мин',
    available: true,
    icon: '🏆',
    color: 'from-brawl-gold to-brawl-orange',
    borderColor: 'border-brawl-gold/40',
  },
  {
    id: 3,
    title: 'Монеты Силы',
    description: '500 монет для прокачки бойцов до максимума',
    value: '500 🪙',
    rarity: 'common',
    rarityLabel: 'Обычный',
    timeLeft: '3д 8ч',
    available: true,
    icon: '🪙',
    color: 'from-yellow-400 to-amber-500',
    borderColor: 'border-yellow-400/40',
  },
  {
    id: 4,
    title: 'Жетоны Клуба',
    description: '200 клубных жетонов — поднимись в рейтинге клуба',
    value: '200 🎯',
    rarity: 'epic',
    rarityLabel: 'Эпический',
    timeLeft: '1д 2ч',
    available: true,
    icon: '🎯',
    color: 'from-brawl-purple to-pink-600',
    borderColor: 'border-brawl-purple/40',
  },
  {
    id: 5,
    title: 'Набор Ресурсов',
    description: 'Комплект ресурсов: гемы + монеты + жетоны',
    value: 'Набор',
    rarity: 'epic',
    rarityLabel: 'Эпический',
    timeLeft: '12ч',
    available: true,
    icon: '🎮',
    color: 'from-green-400 to-emerald-600',
    borderColor: 'border-green-400/40',
  },
  {
    id: 6,
    title: 'Боевой Пропуск',
    description: 'Бесплатный боевой пропуск на текущий сезон',
    value: 'Сезон',
    rarity: 'legendary',
    rarityLabel: 'Легендарный',
    timeLeft: 'ЗАВТРА',
    available: false,
    icon: '⚡',
    color: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-500/40',
  },
];

const rarityColors: Record<string, string> = {
  common: 'text-gray-300 bg-gray-700/50',
  rare: 'text-cyan-400 bg-cyan-900/30',
  epic: 'text-brawl-purple bg-purple-900/30',
  legendary: 'text-brawl-gold bg-yellow-900/30',
};

export default function Rewards() {
  const [claimed, setClaimed] = useState<number[]>([]);
  const { toast } = useToast();

  const handleClaim = (id: number, title: string) => {
    if (claimed.includes(id)) return;
    setClaimed((prev) => [...prev, id]);
    toast({
      title: `🏆 Награда получена!`,
      description: `"${title}" успешно добавлена в твой аккаунт Brawl Stars!`,
    });
  };

  return (
    <section id="rewards" className="py-20 bg-brawl-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,89,255,0.08)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brawl-gold/10 border border-brawl-gold/30 rounded-full px-4 py-1.5 mb-4">
            <Icon name="Gift" size={14} className="text-brawl-gold" />
            <span className="text-sm font-rajdhani text-brawl-gold font-600 tracking-wider">АКТИВНЫЕ НАГРАДЫ</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-900 text-white mb-3">
            ДОСТУПНЫЕ <span className="text-gradient-gold">НАГРАДЫ</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-lg max-w-xl mx-auto">
            Выбирай награду и забирай её одним кликом — они обновляются каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => {
            const isClaimed = claimed.includes(reward.id);
            return (
              <div
                key={reward.id}
                className={`bg-card-brawl rounded-2xl border ${reward.borderColor} p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden ${!reward.available ? 'opacity-70' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${reward.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reward.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {reward.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs font-rajdhani font-700 px-2.5 py-0.5 rounded-full tracking-wide ${rarityColors[reward.rarity]}`}>
                      {reward.rarityLabel}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Icon name="Clock" size={11} />
                      <span>{reward.timeLeft}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-orbitron font-700 text-white text-lg mb-1">{reward.title}</h3>
                <p className="text-gray-400 font-rajdhani text-sm mb-4 leading-relaxed">{reward.description}</p>

                <div className="flex items-center justify-between">
                  <span className="font-orbitron font-700 text-brawl-gold text-lg">{reward.value}</span>
                  {reward.available ? (
                    <button
                      onClick={() => handleClaim(reward.id, reward.title)}
                      disabled={isClaimed}
                      className={`flex items-center gap-2 px-5 py-2 rounded-lg font-orbitron text-sm font-700 transition-all duration-300 ${
                        isClaimed
                          ? 'bg-green-600/20 border border-green-500/40 text-green-400 cursor-default'
                          : 'btn-brawl'
                      }`}
                    >
                      <Icon name={isClaimed ? 'CheckCircle' : 'Download'} size={14} />
                      {isClaimed ? 'Получено' : 'Забрать'}
                    </button>
                  ) : (
                    <button className="flex items-center gap-2 px-5 py-2 rounded-lg font-orbitron text-sm font-700 bg-gray-700/50 border border-gray-600/40 text-gray-400 cursor-not-allowed">
                      <Icon name="Lock" size={14} />
                      Скоро
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
