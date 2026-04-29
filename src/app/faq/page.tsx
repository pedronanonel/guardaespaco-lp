import React from "react";
import Link from "next/link";

export default function FAQ() {
  return (
    <main className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-primary uppercase bg-primary-fixed-dim/20 rounded">
            Central de Ajuda
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-on-surface leading-[0.95] tracking-tighter mb-8">
            Dúvidas <span className="text-primary-container">Frequentes</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Encontre respostas rápidas sobre tamanhos, contratos flexíveis, segurança e como funciona o auto-armazenamento mais moderno de Maringá.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-on-surface">Contratos & Prazos</h3>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
            <p className="mt-4 text-secondary text-lg">
              Oferecemos contratos flexíveis sem fiador e sem prazo mínimo de permanência. O cancelamento é gratuito e pode ser feito a qualquer momento.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-on-surface">Tamanhos & Boxes</h3>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
            <p className="mt-4 text-secondary text-lg">
              Temos opções que variam de 1m² (ideal para malas e caixas) até 50m² (estoques corporativos). Você pode mudar para um box maior ou menor sempre que precisar, pagando apenas o proporcional.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-on-surface">Segurança & Acesso</h3>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
            <p className="mt-4 text-secondary text-lg">
              O acesso é liberado em horário estendido via reconhecimento facial ou senha. Você tranca o seu box com seu próprio cadeado (ou fechadura digital) e leva a chave. A infraestrutura conta com monitoramento 24h e alarme individual.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-on-surface">Pagamentos & Taxas</h3>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
            <p className="mt-4 text-secondary text-lg">
              Não cobramos IPTU, condomínio ou taxa de limpeza. O seguro já está incluso no valor da mensalidade, que é paga de forma recorrente no cartão de crédito, PIX ou boleto.
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 max-w-4xl mx-auto bg-primary/10 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-on-surface mb-2">Ainda com dúvidas?</h3>
            <p className="text-secondary text-lg">
              Nossa equipe de especialistas está pronta para ajudar você a escolher o melhor plano ou agendar uma visita técnica à unidade.
            </p>
          </div>
          <button
            className="w-full md:w-auto bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 active:scale-95 transition-all whitespace-nowrap flex items-center justify-center gap-3 shadow-lg"
          >
            <span className="material-symbols-outlined">forum</span>
            Falar no WhatsApp
          </button>
        </div>

      </div>
    </main>
  );
}
