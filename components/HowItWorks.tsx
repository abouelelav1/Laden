export default function HowItWorks() {
  const steps = [
    { title: "قبل المباراة", desc: "جهز فريقك، اختر أبطالك، وادرس الخصوم باستخدام موسوعة اللعبة.", icon: "📚" },
    { title: "أثناء المباراة", desc: "تابع الإحصائيات، وطبق الاستراتيجيات، واحصل على نصائح فورية.", icon: "⚔️" },
    { title: "بعد المباراة", desc: "حلل أداءك، راجع المباراة مع المدرب، وارتقِ في التصنيف.", icon: "📈" },
  ];

  return (
    <section className="py-24 px-4 bg-[#0b1120] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">كيف نساعدك لتصبح لاعباً أفضل؟</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">رحلتك من مبتدئ إلى محترف تبدأ من هنا.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#1e293b] p-8 rounded-2xl border border-white/5 hover:border-[var(--gold)] transition-all text-center group">
              <div className="text-4xl mb-6 bg-[#0f172a] w-16 h-16 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}