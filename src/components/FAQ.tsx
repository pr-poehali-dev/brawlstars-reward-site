import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    question: 'Это бесплатно?',
    answer: 'Да, все награды предоставляются абсолютно бесплатно! Это официальные промоакции от Brawl Stars, которые мы агрегируем в одном месте для удобства игроков.',
  },
  {
    question: 'Когда обновляются награды?',
    answer: 'Новые награды появляются ежедневно в 12:00 по московскому времени. Мы также оповещаем о срочных акциях в режиме реального времени. Включи уведомления, чтобы не пропустить!',
  },
  {
    question: 'Сколько раз можно получить награды?',
    answer: 'Каждый игрок может активировать до 3 разных промокодов в день. Один и тот же код можно использовать только один раз на один аккаунт.',
  },
  {
    question: 'Что делать, если код не работает?',
    answer: 'Проверь срок действия кода — он отображается под каждой наградой. Если код свежий, но не работает, попробуй перезапустить игру. При сохранении проблемы напиши нам в Контактах.',
  },
  {
    question: 'Нужно ли регистрироваться на сайте?',
    answer: 'Нет! Для получения наград регистрация на нашем сайте не требуется. Просто нажми "Забрать", скопируй код и активируй его в игре.',
  },
  {
    question: 'Как узнать о новых наградах первым?',
    answer: 'Нажми кнопку "Разрешить уведомления" при первом посещении сайта, или подпишись на наш Telegram-канал в разделе Контакты. Мы сообщим мгновенно!',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 relative" style={{ background: 'linear-gradient(180deg, #0D1117 0%, #111827 50%, #0D1117 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brawl-cyan/10 border border-brawl-cyan/30 rounded-full px-4 py-1.5 mb-4">
            <Icon name="HelpCircle" size={14} className="text-brawl-cyan" />
            <span className="text-sm font-rajdhani text-brawl-cyan font-600 tracking-wider">ЧАСТЫЕ ВОПРОСЫ</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-900 text-white mb-3">
            FAQ — <span className="text-gradient-gold">ОТВЕТЫ</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-lg max-w-xl mx-auto">
            Самые частые вопросы от игроков — и чёткие ответы
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-card-brawl rounded-xl border transition-all duration-300 overflow-hidden ${
                open === index ? 'border-brawl-gold/40' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span className={`font-rajdhani font-700 text-base transition-colors ${open === index ? 'text-brawl-gold' : 'text-white'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === index ? 'bg-brawl-gold text-brawl-dark rotate-180' : 'bg-white/5 text-gray-400'
                }`}>
                  <Icon name="ChevronDown" size={16} />
                </div>
              </button>

              {open === index && (
                <div className="px-6 pb-4">
                  <div className="h-px bg-brawl-gold/20 mb-4" />
                  <p className="text-gray-300 font-rajdhani text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
