import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-white/10 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        <div className="md:col-span-1">
          <Link href="/" className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-yellow-200 mb-4 inline-block">
            LADEN
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            منصة المجتمع الشاملة للاعبي Mobile Legends في العالم العربي. تعلم، نافس، وانضم.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">المنصة</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">الرئيسية</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">البطولات</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">الفرق</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">الأكاديمية</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">المجتمع</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">الأخبار</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">الشروحات</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">المدربون</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">المتجر</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">الدعم</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">تواصل معنا</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">الأسئلة الشائعة</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">سياسة الخصوصية</Link></li>
            <li><Link href="#" className="hover:text-[var(--primary)] transition-colors">شروط الاستخدام</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">© 2024 LADEN. جميع الحقوق محفوظة.</p>
        <p className="text-gray-500 text-sm">LADEN غير تابعة لـ Moonton. Mobile Legends هي علامة تجارية مسجلة لـ Moonton.</p>
      </div>
    </footer>
  );
}