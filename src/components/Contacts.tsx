import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({
      title: '✅ Сообщение отправлено!',
      description: 'Мы ответим в течение 24 часов. Спасибо за обращение!',
    });
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  const contacts = [
    { icon: 'Send', label: 'Telegram-канал', value: '@BrawlRewards', color: 'text-brawl-cyan', bg: 'bg-brawl-cyan/10 border-brawl-cyan/30' },
    { icon: 'Mail', label: 'Email поддержки', value: 'support@brawlrewards.gg', color: 'text-brawl-gold', bg: 'bg-brawl-gold/10 border-brawl-gold/30' },
    { icon: 'MessageCircle', label: 'Discord', value: 'BrawlRewards#0001', color: 'text-brawl-purple', bg: 'bg-brawl-purple/10 border-brawl-purple/30' },
  ];

  return (
    <section id="contacts" className="py-20 bg-brawl-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(155,89,255,0.08)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brawl-purple/10 border border-brawl-purple/30 rounded-full px-4 py-1.5 mb-4">
            <Icon name="MessageSquare" size={14} className="text-brawl-purple" />
            <span className="text-sm font-rajdhani text-brawl-purple font-600 tracking-wider">СВЯЗАТЬСЯ С НАМИ</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-900 text-white mb-3">
            <span className="text-gradient-gold">КОНТАКТЫ</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-lg max-w-xl mx-auto">
            Есть вопрос или проблема? Мы всегда на связи!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-4">
            {contacts.map((c) => (
              <div key={c.label} className={`flex items-center gap-4 bg-card-brawl rounded-xl border ${c.bg} p-5 transition-all duration-300 hover:-translate-x-1`}>
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center border`}>
                  <Icon name={c.icon} size={22} className={c.color} />
                </div>
                <div>
                  <div className="text-gray-400 font-rajdhani text-sm">{c.label}</div>
                  <div className={`font-orbitron font-700 text-base ${c.color}`}>{c.value}</div>
                </div>
              </div>
            ))}

            <div className="bg-card-brawl rounded-xl border border-brawl-gold/20 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Clock" size={16} className="text-brawl-gold" />
                <span className="font-orbitron font-700 text-white text-sm">Время ответа</span>
              </div>
              <p className="text-gray-400 font-rajdhani text-sm">
                Среднее время ответа — <span className="text-brawl-gold font-700">менее 4 часов</span> в рабочее время (09:00–22:00 МСК)
              </p>
            </div>
          </div>

          <div className="bg-card-brawl rounded-2xl border border-white/10 p-6">
            <h3 className="font-orbitron font-700 text-white text-lg mb-5">Написать нам</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-gray-400 font-rajdhani text-sm mb-1.5 block">Имя</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Твой никнейм в Brawl Stars"
                  className="w-full bg-brawl-dark border border-white/10 rounded-xl px-4 py-3 text-white font-rajdhani placeholder-gray-600 focus:outline-none focus:border-brawl-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 font-rajdhani text-sm mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="твой@email.com"
                  className="w-full bg-brawl-dark border border-white/10 rounded-xl px-4 py-3 text-white font-rajdhani placeholder-gray-600 focus:outline-none focus:border-brawl-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 font-rajdhani text-sm mb-1.5 block">Сообщение</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Опиши свой вопрос..."
                  className="w-full bg-brawl-dark border border-white/10 rounded-xl px-4 py-3 text-white font-rajdhani placeholder-gray-600 focus:outline-none focus:border-brawl-gold/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-orbitron font-700 text-sm transition-all duration-300 ${
                  sent ? 'bg-green-600/20 border border-green-500/40 text-green-400' : 'btn-brawl'
                }`}
              >
                <Icon name={sent ? 'CheckCircle' : 'Send'} size={16} />
                {sent ? 'Отправлено!' : 'Отправить'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
