import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* اللوجو */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-yellow-200">
              LADEN
            </Link>
          </div>

          {/* اللينكات */}
          <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-[#8b5cf6] transition-colors text-sm font-medium">الرئيسية</Link>
              <Link href="/tournaments" className="text-gray-300 hover:text-[#8b5cf6] transition-colors text-sm font-medium">البطولات</Link>
              <Link href="/squads" className="text-gray-300 hover:text-[#8b5cf6] transition-colors text-sm font-medium">الفرق</Link>
              <Link href="/academy" className="text-gray-300 hover:text-[#8b5cf6] transition-colors text-sm font-medium">الأكاديمية</Link>
          </div>

          {/* أزرار الدخول */}
          <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">تسجيل الدخول</Link>
              <Link href="/register" className="bg-[#8b5cf6] hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                إنشاء حساب
              </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}