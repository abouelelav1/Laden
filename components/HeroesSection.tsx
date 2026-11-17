export default function HeroesSection() {
  const roles = [
    { name: "Tank", title: "المدافعون", color: "from-blue-500 to-cyan-500" },
    { name: "Fighter", title: "المقاتلون", color: "from-red-500 to-orange-500" },
    { name: "Assassin", title: "القتلة", color: "from-purple-500 to-pink-500" },
    { name: "Mage", title: "السحرة", color: "from-indigo-500 to-purple-500" },
    { name: "Marksman", title: "الرماة", color: "from-yellow-500 to-amber-500" },
    { name: "Support", title: "الدعم", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section className="py-24 px-4 bg-[#0f172a] relative z-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            أبطال <span className="text-[var(--primary)]">Mobile Legends</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            استكشف الأبطال حسب الأدوار الستة، وتعلم كيفية اللعب بكل بطل للسيطرة على الساحة.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {roles.map((role, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[var(--primary)] transition-all bg-[#1e293b]">
              <div className={`h-32 bg-gradient-to-br ${role.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-white font-bold text-lg">{role.name}</span>
                <span className="text-gray-300 text-sm">{role.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}