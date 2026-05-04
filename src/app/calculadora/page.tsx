"use client";

import React, { useState } from 'react';

const CATEGORIES = [
  {
    id: "quarto",
    name: "Quarto",
    icon: "bed",
    items: [
      { id: "cama_casal", name: "Cama (Casal/Queen)", volume: 1.5 },
      { id: "cama_solteiro", name: "Cama (Solteiro)", volume: 1.0 },
      { id: "guarda_roupa", name: "Guarda-roupa (2/4)", volume: 1.8 },
      { id: "comoda", name: "Cômoda", volume: 0.4 },
      { id: "criado_mudo", name: "Criado-mudo", volume: 0.1 },
    ]
  },
  {
    id: "sala",
    name: "Sala",
    icon: "chair",
    items: [
      { id: "sofa_3", name: "Sofá (3 lugares)", volume: 1.6 },
      { id: "sofa_2", name: "Sofá (2 lugares)", volume: 1.2 },
      { id: "poltrona", name: "Poltrona", volume: 0.6 },
      { id: "mesa_jantar", name: "Mesa Jantar (4/6/8)", volume: 1.5 },
      { id: "tv_rack", name: "TV (Rack+Painel)", volume: 0.6 },
    ]
  },
  {
    id: "escritorio",
    name: "Escritório",
    icon: "desk",
    items: [
      { id: "mesa_escritorio", name: "Mesa", volume: 0.5 },
      { id: "cadeira_escritorio", name: "Cadeira", volume: 0.2 },
      { id: "estante", name: "Estante", volume: 0.4 },
      { id: "arquivo", name: "Arquivo", volume: 0.2 },
    ]
  },
  {
    id: "cozinha_lavanderia",
    name: "Cozinha / Lavanderia",
    icon: "kitchen",
    items: [
      { id: "geladeira", name: "Geladeira", volume: 0.9 },
      { id: "maq_lavar", name: "Mák. Lavar", volume: 0.3 },
      { id: "secadora", name: "Secadora", volume: 0.3 },
      { id: "fogao", name: "Fogão", volume: 0.3 },
      { id: "microondas", name: "Microondas", volume: 0.10 },
    ]
  },
  {
    id: "geral",
    name: "Geral / Outros",
    icon: "category",
    items: [
      { id: "bicicleta", name: "Bicicleta", volume: 0.4 },
      { id: "berco", name: "Berço", volume: 0.9 },
      { id: "bau", name: "Baú", volume: 0.3 },
      { id: "caixa_pequena", name: "Caixa Pequena", volume: 0.05 },
      { id: "caixa_media", name: "Caixa Média", volume: 0.1 },
      { id: "caixa_grande", name: "Caixa Grande", volume: 0.2 },
    ]
  }
];

export default function Calculadora() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  const handleAdd = (id: string) => {
    setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemove = (id: string) => {
    setCounts(prev => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      return { ...prev, [id]: current - 1 };
    });
  };

  let totalVolume = 0;
  const selectedItems: { count: number; name: string; volume: string }[] = [];

  CATEGORIES.forEach(cat => {
    cat.items.forEach(item => {
      const count = counts[item.id] || 0;
      if (count > 0) {
        const itemVolume = count * item.volume;
        totalVolume += itemVolume;
        selectedItems.push({ count, name: item.name, volume: itemVolume.toFixed(2) });
      }
    });
  });

  let recommendation = {
    title: "Box Pequeno",
    desc: "Ideal para volumes menores, caixas, arquivos ou itens sazonais.",
    link: "https://wa.me/5544991666498?text=Ol%C3%A1!%20Fiz%20o%20c%C3%A1lculo%20no%20site%20e%20gostaria%20de%20reservar%20um%20Box%20Pequeno."
  };
  
  if (totalVolume > 18) {
    recommendation = {
      title: "Box Grande",
      desc: "Espaço generoso para grandes mudanças ou estoques comerciais.",
      link: "https://wa.me/5544991666498?text=Ol%C3%A1!%20Fiz%20o%20c%C3%A1lculo%20no%20site%20e%20gostaria%20de%20reservar%20um%20Box%20Grande."
    };
  } else if (totalVolume > 6) {
    recommendation = {
      title: "Box Médio",
      desc: "Ideal para armazenar móveis de um apartamento de 1 dormitório.",
      link: "https://wa.me/5544991666498?text=Ol%C3%A1!%20Fiz%20o%20c%C3%A1lculo%20no%20site%20e%20gostaria%20de%20reservar%20um%20Box%20M%C3%A9dio."
    };
  }

  return (
    <main className="flex-grow w-full max-w-[1536px] mx-auto px-12 py-16 bg-surface overflow-x-hidden">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
        <h1 className="text-5xl md:text-6xl font-black tracking-[-0.04em] text-on-surface mb-6 leading-[1.0] font-['Plus_Jakarta_Sans']">
          Quanto espaço você realmente precisa?
        </h1>
        <p className="text-xl text-on-surface-variant font-['Inter']">
          Selecione seus itens abaixo e nós calcularemos o box ideal para você.
        </p>
      </div>

      {/* Calculator Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Inventory (Bento Grid) */}
        <div className="lg:col-span-8 space-y-6">
          {CATEGORIES.map(category => (
            <section key={category.id} className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant">
              <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3 font-['Plus_Jakarta_Sans']">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>{category.icon}</span>
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map(item => {
                  const count = counts[item.id] || 0;
                  return (
                    <div key={item.id} className="flex justify-between items-center bg-surface-container-low p-3 rounded-xl border border-transparent hover:border-outline-variant transition-colors">
                      <span className="text-on-surface font-medium text-sm font-['Inter'] truncate pr-2">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2 bg-surface-container p-0.5 rounded-lg shrink-0">
                        <button 
                          onClick={() => handleRemove(item.id)}
                          className="w-7 h-7 flex items-center justify-center rounded bg-surface-container-lowest text-on-surface hover:text-primary transition-colors shadow-sm active:scale-95"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className={`font-semibold w-5 text-center text-sm font-['Inter'] ${count > 0 ? 'text-primary' : 'text-on-surface-variant'}`}>
                          {count}
                        </span>
                        <button 
                          onClick={() => handleAdd(item.id)}
                          className="w-7 h-7 flex items-center justify-center rounded bg-surface-container-lowest text-on-surface hover:text-primary transition-colors shadow-sm active:scale-95"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Right Column: Result / Sticky */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-2xl border border-outline-variant flex flex-col gap-8 relative overflow-hidden">
            {/* Decorative Top Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-container"></div>
            
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-4 font-['Plus_Jakarta_Sans']">Resumo do Inventário</h3>
              
              {selectedItems.length > 0 ? (
                <ul className="space-y-3 text-on-surface-variant text-sm mb-6 pb-6 border-b border-outline-variant/50 font-['Inter'] max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {selectedItems.map((item, idx) => (
                    <li key={idx} className="flex justify-between">
                      <span className="truncate pr-4">{item.count}x {item.name}</span> 
                      <span className="shrink-0 font-medium">~{item.volume}m³</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-on-surface-variant/70 italic mb-6 pb-6 border-b border-outline-variant/50 font-['Inter']">
                  Nenhum item selecionado ainda. Adicione itens para calcular.
                </div>
              )}
              
              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-on-surface-variant font-['Inter']">Volume Estimado</span>
                <span className="text-4xl font-black text-primary font-['Plus_Jakarta_Sans'] tracking-tight">
                  ~{totalVolume.toFixed(2)}<span className="text-xl ml-0.5">m³</span>
                </span>
              </div>
            </div>
            
            {/* Recommendation Highlight */}
            {totalVolume > 0 && (
              <div className="bg-surface-container-high rounded-2xl p-6 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <span className="text-xs uppercase tracking-widest text-primary font-black font-['Plus_Jakarta_Sans']">Recomendação Ideal</span>
                </div>
                <h4 className="text-2xl font-black text-on-surface mb-2 font-['Plus_Jakarta_Sans']">{recommendation.title}</h4>
                <p className="text-sm text-on-surface-variant mb-4 font-['Inter'] leading-relaxed">
                  {recommendation.desc}
                </p>
                <div className="rounded-xl overflow-hidden mb-6 h-40 bg-surface-container-low border border-surface-container-highest">
                  <img 
                    alt="Self-storage unit interior" 
                    className="w-full h-full object-cover" 
                    src="https://xiqzt7r8be3t3l2t.public.blob.vercel-storage.com/box%20medio%20guarda%20espaco.webp"
                  />
                </div>
                <a 
                  href={recommendation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary-container text-white font-bold text-lg py-4 rounded-xl transition-all duration-200 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98] font-['Plus_Jakarta_Sans']"
                >
                  Alugar este Box
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            )}

            {totalVolume === 0 && (
              <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/30 text-center opacity-70">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 opacity-50">inventory_2</span>
                <p className="text-sm text-on-surface-variant font-['Inter']">Selecione itens ao lado para ver nossa recomendação.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
