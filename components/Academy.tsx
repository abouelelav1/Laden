export default function Academy() {  return (
    <section className="py-24 px-4 bg-[#0f172a] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            أكاديمية <span className="text-[var(--gold)]">LADEN</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            طور مهاراتك مع أفضل المدربين والمحتوى التعليمي المخصص لكل مستوى.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* كوتشينج */}
          <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/5 relative overflow-hidden group hover:border-[var(--primary)] transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-purple-400"></div>
            <h3 className="text-2xl font-bold text-white mb-4">جلسات كوتشينج فردية</h3>
            <p className="text-gray-400 mb-6">احجز جلسة مع مدرب محترف لتحليل مهاراتك وتطوير مستواك في اللعبة.</p>
            <button className="text-[var(--primary)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              احجز جلستك <span>←</span>
            </button>
          </div>

          {/* شروحات */}
          <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/5 relative overflow-hidden group hover:border-[var(--gold)] transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gold)] to-yellow-400"></div>
            <h3 className="text-2xl font-bold text-white mb-4">شروحات ودروس</h3>
            <p className="text-gray-400 mb-6">تصفح مكتبتنا الضخمة من الدروس والمقالات لكل بطل ودور في اللعبة.</p>
            <button className="text-[var(--gold)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              ابدأ التعلم <span>←</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}