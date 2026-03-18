import Icon from '@/components/ui/icon';

const steps = [
  {
    step: '01',
    title: 'Выбери награду',
    description: 'Перейди в раздел "Награды" и выбери понравившийся приз из доступных предложений',
    icon: 'Search',
    color: 'from-brawl-cyan to-blue-500',
  },
  {
    step: '02',
    title: 'Нажми "Забрать"',
    description: 'Кликни на кнопку "Забрать" под выбранной наградой и скопируй промокод или ссылку',
    icon: 'MousePointerClick',
    color: 'from-brawl-gold to-brawl-orange',
  },
  {
    step: '03',
    title: 'Открой Brawl Stars',
    description: 'Запусти игру на своём устройстве и перейди в настройки аккаунта',
    icon: 'Smartphone',
    color: 'from-brawl-purple to-pink-500',
  },
  {
    step: '04',
    title: 'Активируй код',
    description: 'Введи полученный код в разделе "Активировать код" и подтверди получение',
    icon: 'Key',
    color: 'from-green-400 to-emerald-500',
  },
];

export default function HowTo() {
  return (
    <section id="howto" className="py-20 relative" style={{ background: 'linear-gradient(180deg, #0D1117 0%, #111827 50%, #0D1117 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brawl-cyan/10 border border-brawl-cyan/30 rounded-full px-4 py-1.5 mb-4">
            <Icon name="BookOpen" size={14} className="text-brawl-cyan" />
            <span className="text-sm font-rajdhani text-brawl-cyan font-600 tracking-wider">КАК ЭТО РАБОТАЕТ</span>
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-900 text-white mb-3">
            ПРОСТАЯ <span className="text-gradient-gold">ИНСТРУКЦИЯ</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-lg max-w-xl mx-auto">
            Всего 4 шага — и награда уже в твоём аккаунте
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brawl-purple/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:-translate-y-2 transition-transform duration-300`}>
                    <Icon name={step.icon} size={28} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brawl-dark border-2 border-brawl-gold flex items-center justify-center">
                    <span className="font-orbitron text-xs font-900 text-brawl-gold">{index + 1}</span>
                  </div>
                </div>

                <div className="font-orbitron text-4xl font-900 text-white/5 mb-2 leading-none select-none">{step.step}</div>
                <h3 className="font-orbitron font-700 text-white text-lg mb-2 -mt-4">{step.title}</h3>
                <p className="text-gray-400 font-rajdhani text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-card-brawl rounded-2xl border border-brawl-gold/20 p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brawl-gold/5 via-transparent to-brawl-gold/5" />
          <div className="relative z-10">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-orbitron font-900 text-white text-xl mb-2">Важно знать</h3>
            <p className="text-gray-300 font-rajdhani text-base max-w-2xl mx-auto">
              Каждый промокод действует <span className="text-brawl-gold font-700">24 часа</span> с момента получения.
              Один игрок может активировать <span className="text-brawl-gold font-700">не более 3 кодов в день</span>.
              Коды нельзя передавать другим игрокам.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}