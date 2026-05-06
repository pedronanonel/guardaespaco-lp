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
