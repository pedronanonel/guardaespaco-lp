import React from "react";

export default function ComoFunciona() {
  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-12">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-primary uppercase bg-primary-fixed-dim/20 rounded">
            Processo Simples
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-on-surface leading-[0.95] tracking-tighter mb-8">
            Como <span className="text-primary-container">Funciona</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Eliminamos a burocracia tradicional. Nosso sistema foi desenhado para quem precisa de agilidade, segurança máxima e flexibilidade total. Aprovado por mais de 200 clientes em Maringá/PR.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Step 1 */}
          <div className="bg-surface-container-low p-12 rounded-3xl group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg">
              <span className="text-2xl font-black">1</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-on-surface tracking-tight">Escolha seu box</h3>
            <p className="text-secondary mb-8 text-lg">
              Utilize nossa calculadora inteligente para encontrar o tamanho perfeito, de 1m² a 50m².
            </p>
            <ul className="space-y-3 font-medium text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Calculadora de espaço
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Visualização 3D
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-surface-container-low p-12 rounded-3xl group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg">
              <span className="text-2xl font-black">2</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-on-surface tracking-tight">Reserve Online</h3>
            <p className="text-secondary mb-8 text-lg">
              Contratação 100% digital. Sem fiador, sem burocracia e com assinatura eletrônica instantânea.
            </p>
            <ul className="space-y-3 font-medium text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Sem carência
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Preço garantido
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-surface-container-low p-12 rounded-3xl group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg">
              <span className="text-2xl font-black">3</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-on-surface tracking-tight">Guarde seus bens</h3>
            <p className="text-secondary mb-8 text-lg">
              Traga suas chaves ou use nossa trava digital. Oferecemos docas de carga e descarga cobertas.
            </p>
            <ul className="space-y-3 font-medium text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Doca para carga e descarga
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Carrinhos grátis
              </li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="bg-surface-container-low p-12 rounded-3xl group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg">
              <span className="text-2xl font-black">4</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-on-surface tracking-tight">Acesso quando quiser</h3>
            <p className="text-secondary mb-8 text-lg">
              Acesso em horário comercial. Monitoramento nível bancário e total liberdade de horário.
            </p>
            <ul className="space-y-3 font-medium text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Acesso App Bio
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Monitoramento 24h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 bg-[#1b1c1c] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#656464]/20 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para começar?</h2>
            <p className="text-gray-300 text-lg">
              Junte-se a centenas de empresas e famílias que confiam na Guarda Espaço para cuidar do que é importante. A solução definitiva em self-storage para Maringá e região.
            </p>
          </div>
          <button
            className="w-full md:w-auto relative z-10 bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 active:scale-95 transition-all whitespace-nowrap"
            style={{ backgroundColor: "rgb(255, 87, 34)" }}
          >
            Ver Preços e Tamanhos
          </button>
          <div className="absolute -right-24 top-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </main>
  );
}
