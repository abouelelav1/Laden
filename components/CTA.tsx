export default function CTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#0f172a]">
      <div className="absolute inset-0 bg-[var(--primary)] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          جاهز تصبح <span className="text-[var(--gold)]">أسطورة؟</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          انضم لأكبر مجتمع للاعبي Mobile Legends في الوطن العربي. سجل الآن وابدأ رحلتك نحو الاحتراف.
        </p>
        <button className="px-10 py-4 rounded-xl bg-[var(--primary)] hover:bg-purple-500 text-white font-bold text-xl shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all hover:scale-105">
          إنشاء حساب مجاني
        </button>
      </div>
    </section>
  );
}