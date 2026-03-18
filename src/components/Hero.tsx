import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const floatingItems = ['⚡', '🏆', '💎', '🎯', '🔥', '⭐', '🎮', '💰'];

export default function Hero() {
  const [count, setCount] = useState(0);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; icon: string; delay: number }[]>([]);

  useEffect(() => {
    const target = 127483;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    setParticles(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        icon: floatingItems[i],
        delay: i * 0.4,
      }))
    );

    return () => clearInterval(timer);
  }, []);

  const handleGetReward = () => {
    document.querySelector('#rewards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden pt-16">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute text-2xl select-none pointer-events-none opacity-30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `float ${3 + p.delay}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.icon}
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brawl-dark pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-brawl-purple/20 border border-brawl-purple/40 rounded-full px-4 py-1.5 mb-6 animate-slide-in-up">
          <span className="w-2 h-2 rounded-full bg-brawl-gold animate-ping-gold" />
          <span className="text-sm font-rajdhani text-brawl-gold font-600 tracking-wider">НОВЫЕ НАГРАДЫ ДОСТУПНЫ</span>
        </div>

        <h1 className="font-orbitron text-5xl md:text-7xl font-900 mb-4 animate-slide-in-up stagger-1 leading-tight">
          <span className="text-white">ПОЛУЧИ </span>
          <span className="text-gradient-gold">ЭКСКЛЮЗИВНЫЕ</span>
          <br />
          <span className="text-white">НАГРАДЫ</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 font-rajdhani font-500 max-w-2xl mx-auto mb-8 animate-slide-in-up stagger-2 leading-relaxed">
          Brawl Stars раздаёт бесплатные гемы, скины и внутриигровые предметы.
          Не упусти шанс — получи свою награду прямо сейчас!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up stagger-3">
          <button
            onClick={handleGetReward}
            className="btn-brawl flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg animate-pulse-glow"
          >
            <Icon name="Gift" size={22} />
            Забрать награду
          </button>
          <button
            onClick={() => document.querySelector('#howto')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-orbitron font-700 bg-transparent border-2 border-brawl-purple text-brawl-purple hover:bg-brawl-purple/10 hover:glow-purple transition-all duration-300"
          >
            <Icon name="BookOpen" size={22} />
            Как получить?
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-slide-in-up stagger-4">
          {[
            { label: 'Наград выдано', value: count.toLocaleString('ru'), icon: '🏆' },
            { label: 'Активных игроков', value: '24K+', icon: '👥' },
            { label: 'Довольных бойцов', value: '99%', icon: '⭐' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card-brawl rounded-xl p-4 hover:border-brawl-gold/40 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-orbitron text-xl font-700 text-brawl-gold">{stat.value}</div>
              <div className="text-xs text-gray-500 font-rajdhani mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={28} className="text-brawl-gold/50" />
      </div>
    </section>
  );
}
