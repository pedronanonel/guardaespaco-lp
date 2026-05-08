import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Guarda Espaço",
  description: "Entre em contato conosco pelo WhatsApp para alugar o seu box.",
};

export default function ContatoPage() {
  return (
    <main className="flex-grow w-full max-w-[1536px] mx-auto px-6 py-20 md:py-32 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8 bg-surface-container-lowest p-8 md:p-14 rounded-2xl shadow-sm border border-surface-container-high">
        <span className="inline-block px-4 py-1 bg-surface-container-highest text-on-surface-variant text-sm uppercase tracking-[0.15em] rounded-full font-bold">
          Atendimento
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface leading-[0.95]">
          Fale Conosco
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed pb-4">
          Estamos prontos para te ajudar a encontrar o espaço ideal. Clique no botão abaixo para falar conosco pelo WhatsApp.
        </p>
        <div className="pt-4 pb-4">
          <a
            href="https://wa.me/5544991666498?text=quero%20alugar%20um%20box"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-bold rounded-full bg-primary text-on-primary hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
            Entre em contato
          </a>
        </div>
      </div>
    </main>
  );
}
