export default function FeaturedTournaments() {
  return (
    <section className="py-24 px-4 bg-[#0f172a] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">البطولات المميزة</h2>
            <p className="text-gray-400">انضم إلى أقوى المنافسات واربح الجوائز.</p>
          </div>
          <button className="px-6 py-2 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all font-bold">
            عرض كل البطولات
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* بطولة 1 */}
          <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)] blur-[80px] opacity-20"></div>
            <span className="bg-[var(--gold)]/20 text-[var(--gold)] px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">التسجيل مفتوح</span>
            <h3 className="text-2xl font-bold text-white mb-2">LADEN Master Cup</h3>
            <p className="text-gray-400 mb-6">5v5 • خروج مغلوب • جوائز 1000$</p>
            <button className="w-full py-3 bg-[var(--primary)] text-white font-bold rounded-lg hover:bg-purple-500 transition-all">سجل الآن</button>
          </div>
          
          {/* بطولة 2 */}
          <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)] blur-[80px] opacity-20"></div>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">قريباً</span>
            <h3 className="text-2xl font-bold text-white mb-2">Ramadan Special 1v1</h3>
            <p className="text-gray-400 mb-6">1v1 • دوري نقاط • جوائز 500$</p>
            <button className="w-full py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all">التفاصيل</button>
          </div>
        </div>
      </div>
    </section>
  );
}