import React from "react";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-screen-xl z-50 bg-white/70 dark:bg-[#1b1c1c]/70 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="flex justify-between items-center px-10 py-4 w-full">
        <Link
          className="text-2xl font-black text-[#ad3300] dark:text-[#ff5716] uppercase font-['Plus_Jakarta_Sans'] tracking-[-0.02em]"
          href="/"
        >
          Guarda Espaço
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link
            className="font-['Plus_Jakarta_Sans'] font-bold tracking-[-0.02em] text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] transition-all duration-300"
            href="/como-funciona"
          >
            Como funciona
          </Link>
          <Link
            className="font-['Plus_Jakarta_Sans'] font-bold tracking-[-0.02em] text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] transition-all duration-300"
            href="/precos"
          >
            Preços
          </Link>
          <Link
            className="font-['Plus_Jakarta_Sans'] font-bold tracking-[-0.02em] text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] transition-all duration-300"
            href="/seguranca"
          >
            Segurança
          </Link>
          <Link
            className="font-['Plus_Jakarta_Sans'] font-bold tracking-[-0.02em] text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] transition-all duration-300"
            href="/faq"
          >
            FAQ
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden lg:block text-[#656464] dark:text-[#e4e2e1] font-bold active:scale-95 duration-200">
            Entrar
          </button>
          <button
            className="bg-primary text-on-primary px-6 py-3 rounded font-bold hover:opacity-80 transition-all duration-300 active:scale-95"
            style={{ backgroundColor: "rgb(255, 87, 34)" }}
          >
            Alugar Agora
          </button>
        </div>
      </div>
    </nav>
  );
}
