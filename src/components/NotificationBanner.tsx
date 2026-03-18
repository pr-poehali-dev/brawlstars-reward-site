import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Notification {
  id: number;
  message: string;
  icon: string;
  type: 'reward' | 'update';
}

const notifications: Notification[] = [
  { id: 1, message: 'Новая награда: 150 гемов доступны прямо сейчас!', icon: '💎', type: 'reward' },
  { id: 2, message: 'Обновление: добавлен легендарный скин "Ночной Пришелец"', icon: '🏆', type: 'update' },
  { id: 3, message: 'Ограниченная акция: двойные монеты ещё 2 часа!', icon: '⚡', type: 'reward' },
  { id: 4, message: 'Рейтинг обновлён — новые лидеры этой недели!', icon: '🎯', type: 'update' },
];

export default function NotificationBanner() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const notif = notifications[current];

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
      <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl max-w-sm border backdrop-blur-md ${
        notif.type === 'reward'
          ? 'bg-brawl-dark/90 border-brawl-gold/50 glow-gold'
          : 'bg-brawl-dark/90 border-brawl-purple/50 glow-purple'
      }`}>
        <span className="text-xl flex-shrink-0">{notif.icon}</span>
        <p className="text-white font-rajdhani text-sm font-600 leading-tight flex-1">{notif.message}</p>
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-500 hover:text-white transition-colors flex-shrink-0 ml-1"
        >
          <Icon name="X" size={14} />
        </button>
      </div>
    </div>
  );
}
