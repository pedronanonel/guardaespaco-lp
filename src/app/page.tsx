import React from "react";

export default function Home() {
  return (
    <main className="pt-24 bg-surface overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-surface overflow-hidden">
        <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-[#FF5722] uppercase bg-[#ffb5a0]/20 rounded">
              Soluções Premium de Armazenagem
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-on-surface leading-[0.95] tracking-tighter mb-8 font-['Plus_Jakarta_Sans']">
              O seu espaço, <br />pelo <span className="text-[#FF5722]">menor preço</span>.
            </h1>
            <p className="text-xl text-secondary mb-10 max-w-md leading-relaxed font-['Inter']">
              Privacidade total e segurança de nível bancário para o que você mais valoriza. O Self Storage definitivo para você ou seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a
                href="https://wa.me/5544991666498"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5722] text-white text-lg px-10 py-5 rounded-lg font-bold shadow-xl hover:translate-y-[-2px] transition-all duration-300 active:scale-95 text-center inline-block"
              >
                Começar agora
              </a>
              <div className="flex flex-col">
                <span className="text-secondary text-sm font-medium font-['Inter']">Planos flexíveis</span>
                <span className="text-2xl font-black text-on-surface font-['Plus_Jakarta_Sans']">A partir de R$ 50/m²</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] lg:h-[800px] w-full bg-surface-container-low rounded-3xl overflow-hidden group">
            <img 
              alt="Interior of a ultra-modern and clean self-storage facility with orange accents, bright lighting, and shiny metallic doors" 
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDmHHrb-aEot9B1BJFTql8yc70ZZZZvAD9BuLV3xcp6QppRKtbRqoWTSbhEBwkt2Uyhc3tbF5Nkdxt29-2B0cqxiAx5E9H01yPcQROe3R57b4vVBwK0gMRnLWNNFk4XZqRVa527_i7tP0PKBzXcd1OPeHUDXuNht5kv3yj0QMSFijD3wJLVNiVdBdmE4SxQVB7Ukf84hX-CDY2Vw0WpPzuIYBnSVyUBpYoVSiAdzmEDbRfRMAibO_XkKASTYHfH0C4aci4qKzYgsc" 
            />
            <div className="absolute bottom-8 right-8 bg-surface-bright/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-2 text-[#FF5722] mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
                <span className="text-xs font-bold uppercase tracking-widest font-['Plus_Jakarta_Sans']">Proteção Ativa</span>
              </div>
              <p className="text-sm font-semibold text-on-surface font-['Inter']">Monitoramento 24h com controle de acesso biométrico e vigilância tática.</p>
            </div>
          </div>
        </div>
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#1b1c1c] text-white" id="precos">
        <div className="container mx-auto px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 font-['Plus_Jakarta_Sans']">
              Múltiplas necessidades,<br /><span className="text-[#FF5722]">espaços sob medida.</span>
            </h2>
            <p className="text-[#c7c6c6] text-lg font-['Inter']">Encontre o módulo ideal para o que você precisa guardar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Small Box */}
            <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border border-[#656464]/20 hover:border-[#FF5722]/50 transition-colors">
              <div>
                <span className="text-[#FF5722] font-black text-sm uppercase tracking-widest mb-6 block">1m² a 3m²</span>
                <h3 className="text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Box Pequeno</h3>
                <p className="text-[#e4e2e1]/60 mb-8 font-['Inter']">Perfeito para volumes menores, caixas, malas, arquivos ou itens sazonais que ocupam espaço em casa.</p>
              </div>
              <div className="mt-auto">
                <div className="mb-8">
                  <span className="text-3xl font-black font-['Plus_Jakarta_Sans']">R$ 117</span>
                  <span className="text-[#c7c6c6] text-sm">/mês</span>
                </div>
                <a 
                  href="https://wa.me/5544991666498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#FF5722] rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-center inline-block text-white"
                >
                  Reservar Box
                </a>
              </div>
            </div>
            {/* Medium Box */}
            <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border-2 border-[#FF5722] relative">
              <div className="absolute -top-4 right-8 bg-[#FF5722] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Mais procurado</div>
              <div>
                <span className="text-[#FF5722] font-black text-sm uppercase tracking-widest mb-6 block">4m² a 9m²</span>
                <h3 className="text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Box Médio</h3>
                <p className="text-[#e4e2e1]/60 mb-8 font-['Inter']">Ideal para o mobiliário completo de um apartamento de 1 dormitório ou estoques médios para e-commerce.</p>
              </div>
              <div className="mt-auto">
                <div className="mb-8">
                  <span className="text-3xl font-black font-['Plus_Jakarta_Sans']">R$ 197</span>
                  <span className="text-[#c7c6c6] text-sm">/mês</span>
                </div>
                <a 
                  href="https://wa.me/5544991666498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#FF5722] rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-white text-center inline-block"
                >
                  Reservar Box
                </a>
              </div>
            </div>
            {/* Large Box */}
            <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border border-[#656464]/20 hover:border-[#FF5722]/50 transition-colors">
              <div>
                <span className="text-[#FF5722] font-black text-sm uppercase tracking-widest mb-6 block">Acima de 12m²</span>
                <h3 className="text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Box Grande</h3>
                <p className="text-[#e4e2e1]/60 mb-8 font-['Inter']">Espaço generoso para grandes mudanças, móveis de casas amplas ou estoques comerciais volumosos.</p>
              </div>
              <div className="mt-auto">
                <div className="mb-8">
                  <span className="text-3xl font-black font-['Plus_Jakarta_Sans']">R$ 347</span>
                  <span className="text-[#c7c6c6] text-sm">/ mês</span>
                </div>
                <a 
                  href="https://wa.me/5544991666498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#FF5722] rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-center inline-block text-white"
                >
                  Reservar Box
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tighter mb-6 font-['Plus_Jakarta_Sans']">
                  Por que escolher o <br />Guarda Espaço?
                </h2>
                <p className="text-secondary text-lg font-['Inter']">A mais moderna infraestrutura de self storage do Paraná, projetada para oferecer paz de espírito.</p>
              </div>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-16 h-16 flex-shrink-0 bg-surface-container rounded-2xl flex items-center justify-center text-[#FF5722]">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>security</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-surface mb-2 font-['Plus_Jakarta_Sans']">Segurança Bancária</h4>
                    <p className="text-secondary font-['Inter']">Monitoramento por câmeras 4K, alarmes individuais e acesso controlado via aplicativo proprietário.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 flex-shrink-0 bg-surface-container rounded-2xl flex items-center justify-center text-[#FF5722]">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>key</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-surface mb-2 font-['Plus_Jakarta_Sans']">Autonomia Total</h4>
                    <p className="text-secondary font-['Inter']">Você é o único que possui a chave e o código de acesso. Entre e saia quando quiser, 7 dias por semana.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 flex-shrink-0 bg-surface-container rounded-2xl flex items-center justify-center text-[#FF5722]">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>payments</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-on-surface mb-2 font-['Plus_Jakarta_Sans']">Preços Sem Surpresas</h4>
                    <p className="text-secondary font-['Inter']">Contratos flexíveis sem fiador, sem IPTU e sem taxa de condomínio. Pague apenas pelo que usar.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container rounded-[4rem] overflow-hidden rotate-3 scale-95 opacity-50 absolute inset-0"></div>
              <div className="aspect-square bg-[#FF5722] rounded-[4rem] overflow-hidden -rotate-2 relative shadow-2xl">
                <img 
                  alt="Modern high-security lock system on a storage door with orange focus" 
                  className="w-full h-full object-cover" 
                  src="https://xiqzt7r8be3t3l2t.public.blob.vercel-storage.com/faixada.webp" 
                />
                <div className="absolute inset-0 bg-[#FF5722]/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-12">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tight text-on-surface font-['Plus_Jakarta_Sans']">
            O que dizem os nossos <span className="text-[#FF5722]">Clientes:</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-10 rounded-3xl relative">
              <div className="flex gap-1 text-[#FF5722] mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface text-lg mb-8 italic font-['Inter']">"Melhor investimento que fiz, preço justo e guardo meus itens com muita segurança, parabéns também pelo atendimento, nota 10!! 👏👏"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-surface-container-highest shadow-sm">
                  <img alt="Junior Azevedo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uj8wehIp0YaM7AHMROjLrJ7aC9ObQiUPy8ws_uik_I4E_Z074H8irMx848Az2mNItBHqpmZyR9oqgw25lh20nYYpqhZKy_pMS4If1b3yTUbno1txVDZrwHEVL53UFYL3X7XbQVG8rMDomuKiFRICs32QMCffVbEgaultThLzzPMe0KKYYOxoIv1NkxoaGdwGDgfXsqB4hVCdtdAV-qLDjL7FgKEWGIQnO3bTQhJdfvh_OxCTVNhp0bU2a6UXKlGyqB4K29eop47" />
                </div>
                <div>
                  <span className="block font-bold font-['Plus_Jakarta_Sans']">Junior Azevedo</span>
                  <span className="text-xs text-secondary uppercase tracking-widest font-semibold font-['Plus_Jakarta_Sans']">Cliente</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-10 rounded-3xl relative">
              <div className="flex gap-1 text-[#FF5722] mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface text-lg mb-8 italic font-['Inter']">"Muito bom o lugar para guardar aquelas tralhas que não cabe na garagem! Local com preço acessível e atendimento honesto"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-surface-container-highest shadow-sm">
                  <img alt="Abner Henrique Cremoneis" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujmjFV87KPa8hGP2pV2j1MvnuunLZDQgWDFtXyuSDmkzhGuK6oo5bF7gsp9lLyvM47DRtk-VKcMSCjn-YRM7NPm_wy_M5NXb-Iz8mKopWmLd9vmqjgRR-o24YBQW54zYItk60z0OPT3E293hweekIHVMz8-JI6Mg4OS3QzhQEkd6KbOaXO4u5088JlsqD-EptWqzUu5nw79-pPhXpJPaeiFkD5lUwlNOBsMqliDeOKfYGM0FxntQ6PSDXHDZB3-GwYHoUkBlQD1" />
                </div>
                <div>
                  <span className="block font-bold font-['Plus_Jakarta_Sans']">Abner Henrique Cremoneis</span>
                  <span className="text-xs text-secondary uppercase tracking-widest font-semibold font-['Plus_Jakarta_Sans']">Local Guide</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-10 rounded-3xl relative">
              <div className="flex gap-1 text-[#FF5722] mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface text-lg mb-8 italic font-['Inter']">"Muito bom!!! Espaço organizado, limpo e ótimo custo benefício! Atendimento também nota 10, indico muito!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-surface-container-highest shadow-sm">
                  <img alt="Dicas da isa" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uhDPyTWd4M82zsDB7KLa4XxsK94WuQmadcxZbWk8WvpBNzHv6wajh6KCV9GZfQTrat-cgB4aZX27nP39hcLpQ1c2SY9hxtDab0nr0WBT2q_jLt8cxm5KljdAu-muajKXnydaVBwKDMaUDZLoiQRsNeHn5pahkLsHhFyWXBnQVxMZK_WLxT2NViOAghu6-rNVZolSnzD6LKICitDH6btkHJZZg3B51ZmV2XGTgrKq7qPIZyettgWRp3KEYd9aiVVFnjXPE609jJm" />
                </div>
                <div>
                  <span className="block font-bold font-['Plus_Jakarta_Sans']">Dicas da isa</span>
                  <span className="text-xs text-secondary uppercase tracking-widest font-semibold font-['Plus_Jakarta_Sans']">Local Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-32 bg-[#1b1c1c] text-white relative overflow-hidden" id="unidades">
        <div className="container mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col justify-center">
              <span className="text-[#FF5722] font-black text-sm uppercase tracking-widest mb-6 block">Localização &amp; Contato</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight font-['Plus_Jakarta_Sans']">Pronto para conquistar mais espaço?</h2>
              <p className="text-[#e4e2e1]/60 text-xl mb-12 max-w-md font-['Inter']">Entre em contato hoje mesmo, faça um orçamento rápido e sem compromisso e garanta seu espaço no Guarda Espaço.</p>
              <div className="space-y-8 mb-12">
                <div className="p-8 bg-[#2a2b2b] rounded-2xl flex gap-6 items-start">
                  <svg className="w-8 h-8 fill-[#FF5722] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-[#c7c6c6] uppercase tracking-widest mb-1 font-['Plus_Jakarta_Sans']">Atendimento via WhatsApp</p>
                    <p className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">(44) 99166-6498</p>
                  </div>
                </div>
                <div className="p-8 bg-[#2a2b2b] rounded-2xl flex gap-6 items-start">
                  <span className="material-symbols-outlined text-[#FF5722] text-3xl">location_on</span>
                  <div>
                    <p className="text-sm font-bold text-[#c7c6c6] uppercase tracking-widest mb-1 font-['Plus_Jakarta_Sans']">Endereço</p>
                    <p className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">Rua Fernão Dias, 1019</p>
                    <p className="text-[#e4e2e1]/60 mt-1 font-['Inter']">Zona 01, Maringá PR, CEP: 87013-190</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/5544991666498"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5722] text-white text-lg font-black py-5 px-10 rounded-xl shadow-xl hover:opacity-90 transition-all active:scale-[0.98] w-fit font-['Plus_Jakarta_Sans']"
              >
                Solicitar Orçamento
              </a>
            </div>
            <div className="h-[600px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl relative">
              <iframe 
                allowFullScreen={true} 
                height="100%" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.3415174415843!2d-51.9531192!3d-23.4190097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd760c4522449%3A0x5d9358c91c3b8056!2sGuarda%20Espa%C3%A7o!5e0!3m2!1spt-BR!2sbr!4v1715067459240!5m2!1spt-BR!2sbr" 
                style={{ border: 0 }} 
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5722] to-[#FF5722]"></div>
      </section>

    </main>
  );
}
