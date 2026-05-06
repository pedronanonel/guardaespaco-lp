import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-12 bg-[#1b1c1c] dark:bg-[#000000] border-t border-[#656464]/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">
            Guarda Espaço
          </div>
          <div className="text-gray-300 font-['Inter'] text-sm leading-relaxed max-w-sm space-y-4">
            <p>
              © 2026 GUARDA ESPACO SELF STORAGE LTDA.<br />
              Todos os direitos reservados.<br />
              CNPJ: 64.624.506/0001-54
            </p>
            <p>
              <a href="mailto:contato@guardaespaco.com.br" className="flex items-center gap-2 hover:text-[#ff5716] transition-colors">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                contato@guardaespaco.com.br
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/guardaespaco/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff5716] transition-colors">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @guardaespaco
              </a>
            </p>
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Links Rápidos</h5>
          <ul className="space-y-4 font-['Inter'] text-sm leading-relaxed">
            <li>
              <Link
                className="text-gray-300 hover:text-[#ff5716] transition-colors cursor-pointer"
                href="/como-funciona"
              >
                Como funciona
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-300 hover:text-[#ff5716] transition-colors cursor-pointer"
                href="/faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-300 hover:text-[#ff5716] transition-colors cursor-pointer"
                href="#"
              >
                Trabalhe Conosco
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Legal</h5>
          <ul className="space-y-4 font-['Inter'] text-sm leading-relaxed">
            <li>
              <Link
                className="text-gray-300 hover:text-[#ff5716] transition-colors cursor-pointer"
                href="#"
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-300 hover:text-[#ff5716] transition-colors cursor-pointer"
                href="#"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
