import Navbar from "../components/Navbar";
import HeroesSection from "../components/HeroesSection";
import HowItWorks from "../components/HowItWorks";
import FeaturedTournaments from "../components/FeaturedTournaments";
import Community from "../components/Community";
import Academy from "../components/Academy";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white overflow-hidden relative">
      
      <Navbar />

      {/* قسم الـ Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a] z-10"></div>

        <div className="relative z-20 text-center flex flex-col items-center gap-6 px-4 max-w-4xl mx-auto mt-20">
          <span className="text-[var(--gold)] font-bold tracking-widest text-sm md:text-base uppercase border border-[var(--gold)]/30 px-4 py-1 rounded-full bg-[var(--gold)]/10 backdrop-blur-sm">
            Welcome to LADEN
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            THE ULTIMATE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-yellow-200">
              GAMING COMPANION
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            منصة مجتمع Mobile Legends الشاملة. تعلم، نافس، وانضم لمجتمع عالمي من اللاعبين.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
            <button className="px-8 py-4 rounded-lg bg-[var(--primary)] hover:bg-purple-500 transition-all font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] text-lg">
              انضم الآن مجانًا
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-white/20 hover:border-white text-white transition-all font-bold bg-white/5 backdrop-blur-sm text-lg">
              استكشف البطولات
            </button>
          </div>
        </div>
      </section>

      {/* باقي الأقسام */}
      <HeroesSection />
      <HowItWorks />
      <FeaturedTournaments />
      <Community />
      <Academy />
      <Stats />
      <CTA />
      
      <Footer />

    </main>
  );
}