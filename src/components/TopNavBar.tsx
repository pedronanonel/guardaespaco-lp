"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-screen-xl z-50 bg-white/70 dark:bg-[#1b1c1c]/70 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300">
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
              href="/calculadora"
            >
              Calculadora
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
            <a
              href="https://wa.me/5544991666498"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-6 py-3 rounded font-bold hover:opacity-80 transition-all duration-300 active:scale-95"
              style={{ backgroundColor: "rgb(255, 87, 34)" }}
            >
              Alugar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between px-6 h-16 bg-[#fcf9f8]/70 dark:bg-[#1b1c1c]/70 backdrop-blur-xl z-50 border-b border-black/5 dark:border-white/5">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-primary hover:opacity-80 transition-opacity scale-95 active:transition-all"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu</span>
        </button>
        <Link href="/" className="font-['Plus_Jakarta_Sans'] font-black uppercase tracking-tighter text-primary">
          Guarda Espaço
        </Link>
        <button 
          className="text-primary hover:opacity-80 transition-opacity scale-95 active:transition-all cursor-not-allowed opacity-50"
          title="Login em breve"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
        </button>
      </header>

      {/* Mobile Side Drawer (Menu) */}
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Drawer Content */}
      <div 
        className={`md:hidden fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white dark:bg-[#1b1c1c] shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
          <span className="font-['Plus_Jakarta_Sans'] font-black uppercase tracking-tighter text-primary text-xl">
            Menu
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-secondary hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="flex flex-col p-6 gap-6">
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] flex items-center gap-4"
            href="/"
          >
            <span className="material-symbols-outlined">home</span>
            Início
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] flex items-center gap-4"
            href="/como-funciona"
          >
            <span className="material-symbols-outlined">info</span>
            Como funciona
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] flex items-center gap-4"
            href="/calculadora"
          >
            <span className="material-symbols-outlined">calculate</span>
            Calculadora
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] flex items-center gap-4"
            href="/precos"
          >
            <span className="material-symbols-outlined">payments</span>
            Preços
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] flex items-center gap-4"
            href="/seguranca"
          >
            <span className="material-symbols-outlined">verified_user</span>
            Segurança
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#656464] dark:text-[#e4e2e1] hover:text-[#ad3300] flex items-center gap-4"
            href="/faq"
          >
            <span className="material-symbols-outlined">help</span>
            FAQ
          </Link>
          
          <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5">
            <a
              href="https://wa.me/5544991666498"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-on-primary px-6 py-4 rounded-xl font-bold hover:opacity-80 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              style={{ backgroundColor: "rgb(255, 87, 34)" }}
            >
              <span className="material-symbols-outlined">chat</span>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Bottom NavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#fcf9f8]/90 dark:bg-[#1b1c1c]/90 backdrop-blur-lg rounded-t-[2rem] shadow-[0_-12px_40px_-15px_rgba(0,0,0,0.1)]">
        <Link className="flex flex-col items-center justify-center text-primary bg-[#f0eded] dark:bg-white/10 rounded-2xl px-4 py-2 tap-highlight-transparent active:scale-90 transition-transform" href="/">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-[#656464] dark:text-[#e4e2e1] px-4 py-2 hover:bg-[#e5e2e1] dark:hover:bg-white/10 transition-colors rounded-2xl tap-highlight-transparent active:scale-90 transition-transform" href="/como-funciona">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Unidades</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-[#656464] dark:text-[#e4e2e1] px-4 py-2 hover:bg-[#e5e2e1] dark:hover:bg-white/10 transition-colors rounded-2xl tap-highlight-transparent active:scale-90 transition-transform" href="/precos">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Preços</span>
        </Link>
        <a className="flex flex-col items-center justify-center text-[#656464] dark:text-[#e4e2e1] px-4 py-2 hover:bg-[#e5e2e1] dark:hover:bg-white/10 transition-colors rounded-2xl tap-highlight-transparent active:scale-90 transition-transform" href="https://wa.me/5544991666498" target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Contato</span>
        </a>
      </nav>
    </>
  );
}
