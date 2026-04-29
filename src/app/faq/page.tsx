import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FAQ() {
  return (
    <main>
      {/* Hero FAQ */}
      <section className="bg-slate-950 text-white py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[1536px] mx-auto px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="font-label text-xs text-primary-container tracking-[0.2em] mb-4 block uppercase">Dúvidas Frequentes</span>
            <h1 className="font-display text-5xl md:text-7xl mb-8 leading-none font-black">
              Tudo o que você precisa <br/>
              <span className="text-primary-container">saber sobre o seu box.</span>
            </h1>
            <p className="font-body text-xl text-slate-400 max-w-2xl">
              Encontre respostas rápidas sobre tamanhos, contratos flexíveis, segurança e como funciona o auto-armazenamento mais moderno de Maringá.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Categories & Accordion */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1536px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar Links (Asymmetric Layout) */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="sticky top-32">
                <h3 className="font-title text-2xl mb-6 font-bold">Categorias</h3>
                <nav className="flex flex-col space-y-2">
                  <a className="px-4 py-3 bg-white shadow-sm border-l-4 border-primary text-primary font-bold flex items-center justify-between group" href="#contratos">
                    Contratos & Prazos
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </a>
                  <a className="px-4 py-3 text-secondary font-medium hover:bg-slate-100 transition-colors flex items-center justify-between group" href="#boxes">
                    Tamanhos & Boxes
                    <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">chevron_right</span>
                  </a>
                  <a className="px-4 py-3 text-secondary font-medium hover:bg-slate-100 transition-colors flex items-center justify-between group" href="#seguranca">
                    Segurança & Acesso
                    <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">chevron_right</span>
                  </a>
                  <a className="px-4 py-3 text-secondary font-medium hover:bg-slate-100 transition-colors flex items-center justify-between group" href="#pagamento">
                    Pagamentos & Taxas
                    <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">chevron_right</span>
                  </a>
                </nav>
              </div>
            </aside>
            
            {/* Main Accordion List */}
            <div className="lg:col-span-9 space-y-12">
              {/* Section: Contratos */}
              <div className="space-y-6" id="contratos">
                <h2 className="font-headline text-3xl flex items-center gap-4 font-bold">
                  <span className="w-12 h-12 bg-primary-container flex items-center justify-center text-white rounded-lg">
                    <span className="material-symbols-outlined">description</span>
                  </span>
                  Contratos & Prazos
                </h2>
                <div className="space-y-4">
                  <details className="faq-accordion group bg-white p-6 rounded-xl shadow-lg shadow-slate-900/5 cursor-pointer border border-slate-100 transition-all hover:border-primary-container/20">
                    <summary className="list-none flex items-center justify-between font-title text-xl font-bold">
                      <span>Existe fidelidade ou tempo mínimo de contrato?</span>
                      <span className="material-symbols-outlined transition-transform text-primary group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-6 font-body text-secondary border-t border-slate-100 mt-6 leading-relaxed">
                      Não. Na Guarda Espaço trabalhamos com contratos mensais renováveis. Você utiliza o box pelo tempo que precisar e pode cancelar a qualquer momento, sem multas ou taxas de rescisão, bastando apenas um aviso prévio de 15 dias.
                    </div>
                  </details>
                  <details className="faq-accordion group bg-white p-6 rounded-xl shadow-lg shadow-slate-900/5 cursor-pointer border border-slate-100 transition-all hover:border-primary-container/20">
                    <summary className="list-none flex items-center justify-between font-title text-xl font-bold">
                      <span>Quais documentos são necessários para alugar?</span>
                      <span className="material-symbols-outlined transition-transform text-primary group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-6 font-body text-secondary border-t border-slate-100 mt-6 leading-relaxed">
                      Para pessoas físicas: RG, CPF e comprovante de residência atualizado. Para empresas: Contrato Social, cartão CNPJ e documentos dos sócios. Todo o processo é feito de forma digital e rápida.
                    </div>
                  </details>
                </div>
              </div>
              
              {/* Section: Boxes */}
              <div className="space-y-6" id="boxes">
                <h2 className="font-headline text-3xl flex items-center gap-4 font-bold">
                  <span className="w-12 h-12 bg-primary-container flex items-center justify-center text-white rounded-lg">
                    <span className="material-symbols-outlined">inventory_2</span>
                  </span>
                  Tamanhos & Boxes
                </h2>
                <div className="space-y-4">
                  <details className="faq-accordion group bg-white p-6 rounded-xl shadow-lg shadow-slate-900/5 cursor-pointer border border-slate-100 transition-all hover:border-primary-container/20">
                    <summary className="list-none flex items-center justify-between font-title text-xl font-bold">
                      <span>Como saber qual o tamanho de box ideal para mim?</span>
                      <span className="material-symbols-outlined transition-transform text-primary group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-6 font-body text-secondary border-t border-slate-100 mt-6 leading-relaxed">
                      Temos boxes que variam de 1m² (para malas e volumes pequenos) até 50m² (para grandes estoques). Nossa equipe técnica pode te ajudar a calcular o volume exato, ou você pode usar nosso simulador visual no site.
                    </div>
                  </details>
                  <details className="faq-accordion group bg-white p-6 rounded-xl shadow-lg shadow-slate-900/5 cursor-pointer border border-slate-100 transition-all hover:border-primary-container/20">
                    <summary className="list-none flex items-center justify-between font-title text-xl font-bold">
                      <span>Quais itens são proibidos de armazenar?</span>
                      <span className="material-symbols-outlined transition-transform text-primary group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-6 font-body text-secondary border-t border-slate-100 mt-6 leading-relaxed">
                      Para a segurança de todos, é estritamente proibido armazenar: produtos inflamáveis, explosivos, químicos perigosos, itens perecíveis (alimentos frescos), plantas vivas, animais ou qualquer objeto de origem ilegal/ilícita.
                    </div>
                  </details>
                </div>
              </div>

              {/* Section: Pagamento */}
              <div className="space-y-6" id="pagamento">
                <h2 className="font-headline text-3xl flex items-center gap-4 font-bold">
                  <span className="w-12 h-12 bg-primary-container flex items-center justify-center text-white rounded-lg">
                    <span className="material-symbols-outlined">payments</span>
                  </span>
                  Pagamentos & Taxas
                </h2>
                <div className="space-y-4">
                  <details className="faq-accordion group bg-white p-6 rounded-xl shadow-lg shadow-slate-900/5 cursor-pointer border border-slate-100 transition-all hover:border-primary-container/20">
                    <summary className="list-none flex items-center justify-between font-title text-xl font-bold">
                      <span>Quais as formas de pagamento aceitas?</span>
                      <span className="material-symbols-outlined transition-transform text-primary group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-6 font-body text-secondary border-t border-slate-100 mt-6 leading-relaxed">
                      Aceitamos Cartão de Crédito (com opção de recorrência automática), Boleto Bancário e PIX. O faturamento é mensal e enviado antecipadamente por e-mail e WhatsApp.
                    </div>
                  </details>
                  <details className="faq-accordion group bg-white p-6 rounded-xl shadow-lg shadow-slate-900/5 cursor-pointer border border-slate-100 transition-all hover:border-primary-container/20">
                    <summary className="list-none flex items-center justify-between font-title text-xl font-bold">
                      <span>Preciso pagar IPTU ou Condomínio?</span>
                      <span className="material-symbols-outlined transition-transform text-primary group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-6 font-body text-secondary border-t border-slate-100 mt-6 leading-relaxed">
                      Não! Diferente do aluguel comercial tradicional, no self-storage você paga apenas o valor do box. IPTU, Condomínio, Energia e Manutenção já estão inclusos no valor mensal do contrato.
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Still have questions */}
      <section className="py-32 bg-slate-100">
        <div className="max-w-[1536px] mx-auto px-12">
          <div className="bg-slate-950 rounded-[2rem] overflow-hidden relative p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="relative z-10 lg:max-w-2xl text-center lg:text-left">
              <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6">Ainda tem <br/> <span className="text-primary-container">dúvidas específicas?</span></h2>
              <p className="font-body text-lg text-slate-400 mb-8">Nossa equipe de especialistas está pronta para ajudar você a escolher o melhor plano ou agendar uma visita técnica à unidade.</p>
              <a 
                href="https://wa.me/5544991666498"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-primary-container text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-500 transition-all shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                Falar no WhatsApp
              </a>
            </div>
            <div className="relative w-full lg:w-1/2 aspect-square max-w-md">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                alt="Customer Service Representative" 
                className="w-full h-full object-cover rounded-3xl relative z-10 border border-white/10" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvZHjmq6DptgvJuLtjqT-MuBWtkr62Q4UvcjFDpn5ersTzcbN1uxVuh9TOmz4mkoqHeMJP-0wEgkUI-7FOotjmDxOHzfqI_-OlBZUDGiscP_SLxDWjSOPVtPv95EEvSDdWkG6nXNYRk_OoF0d1gCtxvwsBj9uvsxqVWy5fO3DJlzXkwVIkr4r6Zp58gHCsnmr4sfO5p3ebr4U6soSHGgu2gduOYvtxPAIj0nc2jYmN35ibAPDXh4kHlSdWWj8G4cXOwi24-5kx4Hg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
