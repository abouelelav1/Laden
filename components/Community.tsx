export default function Community() {
  return (
    <section className="py-24 px-4 bg-[#0b1120] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              انضم إلى <span className="text-[var(--primary)]">مجتمع</span> لا يقهر
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              تواصل مع آلاف اللاعبين، كوّن فرقتك الخاصة (Squad)، وشارك في بطولات ودوريات تنافسية. LADEN هي المكان الذي يجمعك بأفضل اللاعبين في العالم العربي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[var(--primary)] rounded-lg text-white font-bold hover:bg-purple-500 transition-all text-center">
                ابحث عن فريق
              </button>
              <button className="px-6 py-3 border border-white/20 rounded-lg text-white font-bold hover:bg-white/5 transition-all text-center">
                استكشف اللاعبين
              </button>
            </div>
          </div>

                    {/* الكروت الأربعة المتناسقة */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 h-40 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[var(--gold)] transition-all">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[var(--gold)] blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <span className="text-4xl mb-3 relative z-10 group-hover:scale-110 transition-transform">🛡️</span>
               <h4 className="text-white font-bold relative z-10 text-sm">إنشاء Squad</h4>
            </div>
            
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 h-40 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[var(--primary)] transition-all">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[var(--primary)] blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <span className="text-4xl mb-3 relative z-10 group-hover:scale-110 transition-transform">🤝</span>
               <h4 className="text-white font-bold relative z-10 text-sm">أصدقاء جدد</h4>
            </div>
            
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 h-40 flex flex-col items-center justify-center relative overflow-hidden group hover:border-blue-500 transition-all">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500 blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <span className="text-4xl mb-3 relative z-10 group-hover:scale-110 transition-transform">🏆</span>
               <h4 className="text-white font-bold relative z-10 text-sm">بطولات مجتمعية</h4>
            </div>
            
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 h-40 flex flex-col items-center justify-center relative overflow-hidden group hover:border-green-500 transition-all">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-500 blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <span className="text-4xl mb-3 relative z-10 group-hover:scale-110 transition-transform">💬</span>
               <h4 className="text-white font-bold relative z-10 text-sm">نقاشات واستراتيجيات</h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}