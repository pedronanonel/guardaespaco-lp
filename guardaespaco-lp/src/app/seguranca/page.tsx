import React from "react";
import Link from "next/link";

export default function Seguranca() {
  return (
    <main className="pt-32 pb-24 bg-[#1b1c1c] text-white min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-primary-container uppercase bg-primary-container/10 border border-primary-container/20 rounded">
              Proteção Máxima
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95]">
              Segurança nível <br />
              <span className="text-primary-container">bancário.</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-lg">
              Protegemos seus ativos em Maringá com tecnologia de ponta. Monitoramento ininterrupto e acesso biométrico exclusivo em uma infraestrutura projetada para ser inexpugnável.
            </p>
            <p className="text-gray-400 mt-6 max-w-lg">
              Utilizamos os mesmos sistemas de controle de acesso de instituições financeiras globais para garantir que apenas você toque no que é seu.
            </p>
          </div>
          
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-[#656464]/20 shadow-2xl">
            <img
              className="w-full h-full object-cover"
              alt="Security cameras and digital access panel in a modern storage facility"
              src="https://images.unsplash.com/photo-1555861496-faa66bfcb974?q=80&w=2940&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c] via-[#1b1c1c]/40 to-transparent"></div>
            
            {/* Overlay UI element */}
            <div className="absolute bottom-8 left-8 right-8 bg-[#2a2b2b]/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div>
                <div className="text-primary-container text-xs font-bold uppercase tracking-widest mb-1">Status do Sistema</div>
                <div className="text-white font-bold">Monitoramento Ativo 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2a2b2b] p-10 rounded-3xl border border-[#656464]/20 hover:border-primary/40 transition-all duration-300">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">videocam</span>
            <h3 className="text-2xl font-bold mb-4">Monitoramento 24h</h3>
            <p className="text-gray-300 leading-relaxed">
              Central de inteligência dedicada com vigilância por vídeo em alta definição e resposta imediata.
            </p>
          </div>

          <div className="bg-[#2a2b2b] p-10 rounded-3xl border border-[#656464]/20 hover:border-primary/40 transition-all duration-300">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">sensors</span>
            <h3 className="text-2xl font-bold mb-4">Alarmes Individuais</h3>
            <p className="text-gray-300 leading-relaxed">
              Cada box possui um sensor de movimento independente conectado diretamente ao seu smartphone via app.
            </p>
          </div>

          <div className="bg-[#2a2b2b] p-10 rounded-3xl border border-[#656464]/20 hover:border-primary/40 transition-all duration-300">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">fingerprint</span>
            <h3 className="text-2xl font-bold mb-4">Biometria</h3>
            <p className="text-gray-300 leading-relaxed">
              Acesso via reconhecimento facial e digital. Esqueça chaves ou senhas que podem ser perdidas.
            </p>
          </div>

          <div className="bg-[#2a2b2b] p-10 rounded-3xl border border-[#656464]/20 hover:border-primary/40 transition-all duration-300">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">gavel</span>
            <h3 className="text-2xl font-bold mb-4">Protocolo Bancário</h3>
            <p className="text-gray-300 leading-relaxed">
              Seguros inclusos em todas as locações, perímetros com cercas pulsativas de alta voltagem e blindagem estrutural.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
