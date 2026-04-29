import React from "react";
import Link from "next/link";

export default function Precos() {
  return (
    <main className="pt-32 pb-24 bg-[#1b1c1c] text-white min-h-screen">
      <div className="container mx-auto px-12">
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-primary-container uppercase bg-primary-container/10 border border-primary-container/20 rounded">
            Tamanhos e Preços
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 max-w-4xl leading-[0.95]">
            Múltiplas necessidades,<br />
            <span className="text-primary-container">espaços sob medida.</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Encontre o módulo ideal para o que você precisa guardar. Sem fiador, sem IPTU e sem taxas escondidas. O valor é fixo e transparente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box Pequeno */}
          <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border border-[#656464]/20 hover:border-primary/50 transition-colors group">
            <div>
              <span className="text-primary-container font-black text-sm uppercase tracking-widest mb-6 block">1m² a 3m²</span>
              <h3 className="text-3xl font-bold mb-4">Box Pequeno</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">Perfeito para volumes menores, caixas, malas, arquivos ou itens sazonais que ocupam espaço em casa.</p>
              <ul className="space-y-4 mb-8 text-gray-300 font-medium">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Acomoda ~20 caixas médias</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Ideal para arquivos vivos</li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="mb-8">
                <span className="text-4xl font-black">R$ 117</span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>
              <button
                className="w-full py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-white bg-surface-container-highest/20 hover:bg-primary-container"
              >
                Reservar Box
              </button>
            </div>
          </div>

          {/* Box Médio */}
          <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border-2 border-primary-container relative group transform md:-translate-y-4 shadow-2xl">
            <div className="absolute -top-4 right-8 bg-primary-container text-on-primary-container text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Mais procurado</div>
            <div>
              <span className="text-primary-container font-black text-sm uppercase tracking-widest mb-6 block">4m² a 9m²</span>
              <h3 className="text-3xl font-bold mb-4">Box Médio</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">Ideal para o mobiliário completo de um apartamento de 1 dormitório ou estoques médios para e-commerce.</p>
              <ul className="space-y-4 mb-8 text-gray-300 font-medium">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Móveis de apartamento pequeno</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Estoque e-commerce</li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="mb-8">
                <span className="text-4xl font-black">R$ 289</span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>
              <button
                className="w-full py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-white shadow-lg"
                style={{ backgroundColor: "rgb(255, 87, 34)" }}
              >
                Reservar Box
              </button>
            </div>
          </div>

          {/* Box Grande */}
          <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border border-[#656464]/20 hover:border-primary/50 transition-colors group">
            <div>
              <span className="text-primary-container font-black text-sm uppercase tracking-widest mb-6 block">10m² a 50m²</span>
              <h3 className="text-3xl font-bold mb-4">Box Grande</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">A solução corporativa para grandes estoques, maquinários, ou mobília de residências acima de 3 dormitórios.</p>
              <ul className="space-y-4 mb-8 text-gray-300 font-medium">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Estoque comercial amplo</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Mobília de casa completa</li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="mb-8">
                <span className="text-4xl font-black">Sob consulta</span>
              </div>
              <button
                className="w-full py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-white bg-surface-container-highest/20 hover:bg-primary-container"
              >
                Falar com consultor
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Banner */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#2a2b2b]/50 p-8 rounded-2xl border border-[#656464]/10 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary-container text-3xl">contract_delete</span>
            <div>
              <h4 className="font-bold text-white mb-1">Zero Burocracia</h4>
              <p className="text-sm text-gray-400">Contrato online sem fiador</p>
            </div>
          </div>
          <div className="bg-[#2a2b2b]/50 p-8 rounded-2xl border border-[#656464]/10 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary-container text-3xl">event_busy</span>
            <div>
              <h4 className="font-bold text-white mb-1">Cancelamento Grátis</h4>
              <p className="text-sm text-gray-400">A qualquer momento</p>
            </div>
          </div>
          <div className="bg-[#2a2b2b]/50 p-8 rounded-2xl border border-[#656464]/10 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary-container text-3xl">shield_locked</span>
            <div>
              <h4 className="font-bold text-white mb-1">Seguro Incluso</h4>
              <p className="text-sm text-gray-400">Para total tranquilidade</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
