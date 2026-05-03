import React from "react";
import Link from "next/link";

export default function Seguranca() {
  return (
    <main className="pt-24 bg-surface overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1536px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-['Plus_Jakarta_Sans'] text-sm text-primary mb-4 block font-black tracking-widest uppercase">
              INFRAESTRUTURA DE ELITE
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-on-surface mb-8 leading-tight font-['Plus_Jakarta_Sans'] tracking-tighter">
              Segurança Nível <br /><span className="text-primary-container">Bancário.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-['Inter']">
              Protegemos seus ativos em Maringá com tecnologia de ponta. Monitoramento ininterrupto e acesso biométrico exclusivo em uma infraestrutura projetada para ser inexpugnável.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="bg-white p-6 rounded-xl shadow-2xl shadow-slate-900/5 flex flex-col border border-surface-variant w-full sm:w-auto">
                <span className="text-xs font-black tracking-widest text-secondary uppercase">A PARTIR DE</span>
                <span className="text-4xl font-black text-on-surface font-['Plus_Jakarta_Sans']">R$ 50<span className="text-lg font-medium">/m²</span></span>
              </div>
              <Link 
                href="/como-funciona"
                className="bg-slate-950 text-white px-10 py-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-95 w-full sm:w-auto shadow-xl"
              >
                Ver Unidades
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50">
              <img 
                className="w-full h-full object-cover" 
                alt="Interior of a ultra-modern server room and security hub" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8xlcBfJgkNkmRvEKkAh1XgcSS6mhPEykYC7ZDVoObkLzaRBQovbP9woccp-OjtQpFI5G0HqoGhHluSJVd_mbbi07pii68OuwAUcEBcHFTDNJPxH_sy3kAkV2XnhWgSrtL0gMCtkwk4FWNeVckLHJJuLdVX3bS6D-niPA_qmniDtLok8HTjwQ5B0jRW3zrs1G1W8vhzbT_tL0JCh1VjplHg12Up9-Pzonf-CS4GP_zkrfiQ1qHO0W9O0xKKE_IjGb4nAuNbIjNLWc" 
              />
            </div>
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-primary-container p-8 rounded-2xl text-white shadow-2xl border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-2">verified_user</span>
              <div className="text-2xl font-bold font-['Plus_Jakarta_Sans']">100% Seguro</div>
              <div className="text-sm opacity-90 font-['Inter'] mt-1">Protocolos Rigorosos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Infrastructure Bento Grid */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-12">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="text-xs text-primary-container mb-4 block uppercase font-black tracking-widest">
                Tecnologia e Controle
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-['Plus_Jakarta_Sans'] tracking-tight">Blindagem <br />Operacional</h2>
            </div>
            <p className="text-lg text-slate-400 max-w-md md:text-right font-['Inter'] leading-relaxed">
              Utilizamos os mesmos sistemas de controle de acesso de instituições financeiras globais para garantir que apenas você toque no que é seu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:h-[700px]">
            {/* 24h Monitoring */}
            <div className="md:col-span-7 bg-[#2A2B2B] rounded-3xl p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group min-h-[350px]">
              <div className="z-10 relative">
                <span className="material-symbols-outlined text-primary-container text-5xl mb-6">visibility</span>
                <h3 className="text-3xl font-bold font-['Plus_Jakarta_Sans'] mb-4">Monitoramento 24h</h3>
                <p className="text-lg text-slate-400 max-w-sm leading-relaxed">Central de inteligência dedicada com vigilância por vídeo em alta definição e resposta imediata.</p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <img className="w-full h-full object-cover" alt="CCTV monitor screens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3VHU5NOxf1vVjJSAKSDeTTXVWTima3VrqXf_J2U6QrH5yYY4BmMEKD9BhNT3SY6LdyEN3mHBVXw_DmJ0sIBk-4eVsuGf9BJlhNdh1WqTbXumfD-U38msRT8qloEPN7-vprZvrO_K1UV7yCl6H6iRojNPeWy9rjTubLoLcQxEJSRDqRkmaDZxNy7MQf7TEV7A5JRShCVmMwBZzxugQmKR32lEx2G_78-fq3F8WrkjywFejWWSXOut7nwTmNqCf3uJ9LrphuwsCxw4" />
              </div>
            </div>

            {/* Individual Alarms */}
            <div className="md:col-span-5 bg-primary-container rounded-3xl p-10 flex flex-col justify-between text-on-primary-container shadow-2xl shadow-orange-600/30 min-h-[350px] relative overflow-hidden group">
              <div className="absolute -right-24 -top-24 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/30 transition-colors"></div>
              <div className="z-10">
                <span className="material-symbols-outlined text-5xl mb-6 text-white">notification_important</span>
                <h3 className="text-3xl font-bold font-['Plus_Jakarta_Sans'] mb-4 text-white">Alarmes</h3>
                <p className="text-lg opacity-90 text-white leading-relaxed">Possuímos alarmes com sensores de movimento para monitoramento 24h/7 dias por semana.</p>
              </div>
              <div className="mt-8 z-10">
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"></div>
                </div>
                <div className="mt-4 text-xs uppercase font-black tracking-widest text-white">Status: Ativo e Protegido</div>
              </div>
            </div>

            {/* Biometric Access */}
            <div className="md:col-span-5 bg-[#2A2B2B] rounded-3xl p-10 flex flex-col justify-between border border-white/5 min-h-[300px]">
              <span className="material-symbols-outlined text-primary-container text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>fingerprint</span>
              <div>
                <h3 className="text-3xl font-bold font-['Plus_Jakarta_Sans'] mb-4">Biometria</h3>
                <p className="text-lg text-slate-400 leading-relaxed">Acesso via digital. Esqueça chaves ou senhas que podem ser perdidas. Só traga a chave do seu cadeado.</p>
              </div>
            </div>

            {/* Banking Level */}
            <div className="md:col-span-7 bg-white/5 rounded-3xl p-10 flex items-center gap-8 border border-white/10 backdrop-blur-sm min-h-[300px]">
              <div className="flex-1">
                <h3 className="text-3xl font-bold font-['Plus_Jakarta_Sans'] mb-4">Protocolo Bancário</h3>
                <p className="text-lg text-slate-400 leading-relaxed">Seguros inclusos em todas as locações, perímetros com cercas pulsativas de alta voltagem e blindagem estrutural.</p>
              </div>
              <div className="hidden sm:flex w-32 h-32 rounded-3xl bg-white/10 items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary-container text-6xl">account_balance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Differentiator */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-[1536px] mx-auto px-12">
          <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-['Plus_Jakarta_Sans'] text-on-surface mb-8 leading-tight tracking-tight">
                O Melhor Preço <br />de Maringá.
              </h2>
              <p className="text-xl text-on-surface-variant mb-10 leading-relaxed font-['Inter']">
                Não cobramos IPTU, condomínio ou taxas de manutenção. O valor é fixo, transparente e imbatível para a qualidade de infraestrutura oferecida.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface">
                  <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                  Zero Burocracia
                </li>
                <li className="flex items-center gap-4 text-xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface">
                  <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                  Cancelamento Grátis
                </li>
                <li className="flex items-center gap-4 text-xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface">
                  <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                  Seguro Incluso
                </li>
              </ul>
            </div>
            <div className="bg-slate-950 p-12 rounded-[2.5rem] text-center transform lg:rotate-2 shadow-2xl hover:rotate-0 transition-transform duration-500">
              <span className="text-xs font-black text-primary-container block mb-4 uppercase tracking-widest">
                VALOR POR METRO QUADRADO
              </span>
              <div className="text-7xl font-black font-['Plus_Jakarta_Sans'] text-white mb-2 tracking-tighter">
                R$ 50
              </div>
              <div className="text-xl font-bold text-slate-400 mb-10 font-['Plus_Jakarta_Sans']">
                Investimento Mensal
              </div>
              <a 
                href="https://wa.me/5544991666498"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary-container text-white py-6 rounded-xl font-bold text-xl hover:bg-orange-600 transition-colors flex items-center justify-center active:scale-95 shadow-xl"
              >
                Reservar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface border-t border-slate-200">
        <div className="max-w-[1536px] mx-auto px-12 text-center">
          <span className="material-symbols-outlined text-7xl text-primary-container mb-6">lock_open</span>
          <h2 className="text-4xl md:text-5xl font-black font-['Plus_Jakarta_Sans'] tracking-tight text-on-surface mb-8">
            Pronto para guardar com segurança?
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-['Inter'] leading-relaxed">
            Escolha o tamanho do seu box e comece a utilizar hoje mesmo. Atendimento presencial e online para sua total comodidade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/como-funciona"
              className="bg-slate-950 text-white px-12 py-5 rounded-xl font-bold text-lg font-['Plus_Jakarta_Sans'] hover:bg-slate-800 transition-all flex items-center justify-center active:scale-95 shadow-xl"
            >
              Ver Unidades
            </Link>
            <a 
              href="https://wa.me/5544991666498"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-950 text-slate-950 px-12 py-5 rounded-xl font-bold text-lg font-['Plus_Jakarta_Sans'] hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center active:scale-95"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
