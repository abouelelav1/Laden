export default function Stats() {
  const stats = [
    { label: "لاعب مسجل", value: "---" },
    { label: "بطولة منظمة", value: "---" },
    { label: "مباراة ملعوبة", value: "---" },
    { label: "مدرب معتمد", value: "---" },
  ];

  return (
    <section className="py-16 border-y border-white/10 bg-[#0b1120] relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}