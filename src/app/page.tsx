import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="pt-24 bg-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-surface overflow-hidden">
          <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-primary uppercase bg-primary-fixed-dim/20 rounded">
                Soluções Premium de Armazenagem
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-on-surface leading-[0.95] tracking-tighter mb-8">
                O seu espaço, <br />pelo <span className="text-primary-container">menor preço</span>.
              </h1>
              <p className="text-xl text-secondary mb-10 max-w-md leading-relaxed">
                Privacidade total e segurança de nível bancário para o que você mais valoriza. O Self Storage definitivo para você ou seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <button
                  className="bg-primary text-on-primary text-lg px-10 py-5 rounded-lg font-bold shadow-xl hover:translate-y-[-2px] transition-all duration-300 active:scale-95"
                  style={{ backgroundColor: "rgb(255, 87, 34)" }}
                >
                  Começar agora
                </button>
                <div className="flex flex-col">
                  <span className="text-secondary text-sm font-medium">Planos flexíveis</span>
                  <span className="text-2xl font-black text-on-surface">A partir de R$ 50/m²</span>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] lg:h-[800px] w-full bg-surface-container-low rounded-3xl overflow-hidden group">
              <img
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                alt="Interior of a ultra-modern and clean self-storage facility with orange accents, bright lighting, and shiny metallic doors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDmHHrb-aEot9B1BJFTql8yc70ZZZZvAD9BuLV3xcp6QppRKtbRqoWTSbhEBwkt2Uyhc3tbF5Nkdxt29-2B0cqxiAx5E9H01yPcQROe3R57b4vVBwK0gMRnLWNNFk4XZqRVa527_i7tP0PKBzXcd1OPeHUDXuNht5kv3yj0QMSFijD3wJLVNiVdBdmE4SxQVB7Ukf84hX-CDY2Vw0WpPzuIYBnSVyUBpYoVSiAdzmEDbRfRMAibO_XkKASTYHfH0C4aci4qKzYgsc"
              />
              <div className="absolute bottom-8 right-8 bg-surface-bright/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    verified_user
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest">Proteção Ativa</span>
                </div>
                <p className="text-sm font-semibold text-on-surface">
                  Monitoramento 24h com controle de acesso biométrico e vigilância tática.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -right-24 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        </section>

        {/* Pricing/Product Section (Simplified) */}
        <section className="py-24 bg-[#1b1c1c] text-white" id="precos">
          <div className="container mx-auto px-12">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                Múltiplas necessidades,<br />
                <span className="text-primary-container">espaços sob medida.</span>
              </h2>
              <p className="text-gray-300 text-lg">Encontre o módulo ideal para o que você precisa guardar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Box Pequeno */}
              <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border border-[#656464]/20 hover:border-primary/50 transition-colors">
                <div>
                  <span className="text-primary-container font-black text-sm uppercase tracking-widest mb-6 block">1m² a 3m²</span>
                  <h3 className="text-3xl font-bold mb-4">Box Pequeno</h3>
                  <p className="text-gray-300 mb-8">Perfeito para volumes menores, caixas, malas, arquivos ou itens sazonais que ocupam espaço em casa.</p>
                </div>
                <div className="mt-auto">
                  <div className="mb-8">
                    <span className="text-3xl font-black">R$ 117</span>
                    <span className="text-gray-300 text-sm">/mês</span>
                  </div>
                  <button
                    className="w-full py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-white"
                    style={{ backgroundColor: "rgb(255, 87, 34)" }}
                  >
                    Reservar Box
                  </button>
                </div>
              </div>
              {/* Box Médio */}
              <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border-2 border-primary-container relative">
                <div className="absolute -top-4 right-8 bg-primary-container text-on-primary-container text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Mais procurado</div>
                <div>
                  <span className="text-primary-container font-black text-sm uppercase tracking-widest mb-6 block">4m² a 9m²</span>
                  <h3 className="text-3xl font-bold mb-4">Box Médio</h3>
                  <p className="text-gray-300 mb-8">Ideal para o mobiliário completo de um apartamento de 1 dormitório ou estoques médios para e-commerce.</p>
                </div>
                <div className="mt-auto">
                  <div className="mb-8">
                    <span className="text-3xl font-black">R$ 197</span>
                    <span className="text-gray-300 text-sm">/mês</span>
                  </div>
                  <button
                    className="w-full py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-white"
                    style={{ backgroundColor: "rgb(255, 87, 34)" }}
                  >
                    Reservar Box
                  </button>
                </div>
              </div>
              {/* Box Grande */}
              <div className="bg-[#2a2b2b] rounded-3xl p-10 flex flex-col justify-between border border-[#656464]/20 hover:border-primary/50 transition-colors">
                <div>
                  <span className="text-primary-container font-black text-sm uppercase tracking-widest mb-6 block">Acima de 12m²</span>
                  <h3 className="text-3xl font-bold mb-4">Box Grande</h3>
                  <p className="text-gray-300 mb-8">Espaço generoso para grandes mudanças, móveis de casas amplas ou estoques comerciais volumosos.</p>
                </div>
                <div className="mt-auto">
                  <div className="mb-8">
                    <span className="text-3xl font-black">R$ 347</span>
                    <span className="text-gray-300 text-sm">/ mês</span>
                  </div>
                  <button
                    className="w-full py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 text-white"
                    style={{ backgroundColor: "rgb(255, 87, 34)" }}
                  >
                    Reservar Box
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section (White Section) */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div>
                  <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tighter mb-6">
                    Por que escolher o <br />Guarda Espaço?
                  </h2>
                  <p className="text-secondary text-lg">A mais moderna infraestrutura de self storage do Paraná, projetada para oferecer paz de espírito.</p>
                </div>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 flex-shrink-0 bg-surface-container rounded-2xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>security</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-on-surface mb-2">Segurança Bancária</h4>
                      <p className="text-secondary">Monitoramento por câmeras 4K, alarmes individuais e acesso controlado via aplicativo proprietário.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-16 h-16 flex-shrink-0 bg-surface-container rounded-2xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>key</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-on-surface mb-2">Autonomia Total</h4>
                      <p className="text-secondary">Você é o único que possui a chave e o código de acesso. Entre e saia quando quiser, 7 dias por semana.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-16 h-16 flex-shrink-0 bg-surface-container rounded-2xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>payments</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-on-surface mb-2">Preços Sem Surpresas</h4>
                      <p className="text-secondary">Contratos flexíveis sem fiador, sem IPTU e sem taxa de condomínio. Pague apenas pelo que usar.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-surface-container rounded-[4rem] overflow-hidden rotate-3 scale-95 opacity-50 absolute inset-0"></div>
                <div className="aspect-square bg-primary rounded-[4rem] overflow-hidden -rotate-2 relative shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    alt="Modern high-security lock system on a storage door with orange focus"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO2F9ecOnygZgBcPOV0ZIQg6LKf-9R5Df1VTqzOi-9OeC4XizW2Km18qsThE2zAMv_Q4mLbcSkd0lTPDAmCT4m5zz7YfB70TrthqFeZu8MZ6Wjj-jGWgnQpkSTHDf0P6hVIdJaMaSoD4zf6D61pkaEyU2_po70Rmn5pYJQcCGsjQEoDhrclRRbvdFdTFqByxfqt8yKv6qotQcNE8UpCF0mepilLrIdtgyLk8CUpoKdiSgpGfQhC9B39LKkfEF4iF2rRRrjH5QT64A"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capacity Gauge Visual Component */}
        <section className="py-20 bg-surface-container-low">
          <div className="container mx-auto px-12">
            <div className="bg-surface p-12 rounded-3xl shadow-sm border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">Alta Disponibilidade em Maringá</h3>
                <p className="text-secondary">Nossa unidade central está com 82% da capacidade ocupada. Garanta seu box antes que as opções acabem!</p>
              </div>
              <div className="md:w-1/3 w-full space-y-4">
                <div className="flex justify-between font-bold text-sm">
                  <span>Espaço Ocupado</span>
                  <span className="text-primary">82%</span>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-gradient-to-r from-primary to-primary-container rounded-full shadow-[0_0_15px_rgba(173,51,0,0.4)]"></div>
                </div>
                <p className="text-xs text-secondary italic text-right">Atualizado há 15 minutos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location (Dark Section) */}
        <section className="py-32 bg-[#1b1c1c] text-white" id="unidades">
          <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
              <div className="flex flex-col justify-center">
                <span className="text-primary-container font-black text-sm uppercase tracking-widest mb-6 block">Nossa Sede</span>
                <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight">Unidade <br />Maringá.</h2>
                <div className="space-y-8">
                  <div className="p-8 bg-[#2a2b2b] rounded-2xl flex gap-6 items-start">
                    <span className="material-symbols-outlined text-primary-container">location_on</span>
                    <div>
                      <p className="text-xl font-bold mb-1">Rua Fernão Dias, 1019</p>
                      <p className="text-gray-300">Zona 01, Maringá - PR, 87013-190</p>
                    </div>
                  </div>
                  <div className="p-8 border border-[#656464]/30 rounded-2xl flex gap-6 items-start">
                    <span className="material-symbols-outlined text-primary-container">schedule</span>
                    <div>
                      <p className="text-xl font-bold mb-1">Horário de Acesso</p>
                      <p className="text-gray-300">Segunda a Sexta: 08h às 19h<br />Sábados e Feriados: 08h às 14h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[600px] bg-[#2a2b2b] rounded-3xl overflow-hidden relative shadow-2xl">
                <img
                  className="w-full h-full object-cover opacity-50 grayscale"
                  alt="Stylized map showing urban area with high-contrast markers and orange paths"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaK8UgCVaLM_738XM2YS53fMSW-6AbQkDHm4ga5VS1KE4l_15_lQO1ujveb9fO907_CyVVJ0hLbtP-zes6B4FW7cLehOIlBxb2a4hW1nq6qzb-Cry4kMQjk_ueLu6J49D6AV5Frt5FynhmUf0GGfko7ThDnOcOIi80rYBXFhIf8rpb7gsokEddaw6fLJm3Ez0jJlaSaLvpNLJ_Dnq3oAqh1W9YJWI7CJddvreARnOlkPz53p7MQcMQeOBM_77UpTThRJGC7IimAl0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(173,51,0,0.6)]">
                    <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>location_on</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (White Section) */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-12">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tight text-on-surface">
              O que dizem os nossos <span style={{ color: "#ad3300" }}>Clientes:</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-surface-container-low p-10 rounded-3xl relative">
                <span className="material-symbols-outlined text-primary-container/20 text-7xl absolute top-8 right-8">format_quote</span>
                <div className="flex gap-1 text-primary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <p className="text-on-surface text-lg mb-8 italic">
                  &quot;Excelente atendimento e segurança impecável. Usei para guardar meu estoque de e-commerce e a logística de carga e descarga é muito prática.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-full overflow-hidden">
                    <img alt="Portrait of a satisfied business owner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7IR_3_JBOp86HSB4yv42D8pf3eK7DPyUpNGf-r1ybmgYQUqYawJyxkQ-WiyVAKtXBlew3qK6Zc8X39xYUuMV-iLT7mMU2LoV1NVLgEZlxDrfi2Mgsd_Nwmsc3Q0OE2Bv4xSBJih9IIY236Xl9lDAyaGJNHkx158jwN-vb4BlzPZy5cF8VWq9Eh1Elrw0f23sbBIg2F84Q571QnHdCJZUjkV1qjaJawTHjdGwc2gY3GUI-8uBzWxOi0-uS79upYPooPGfiIbBPzhE" />
                  </div>
                  <div>
                    <span className="block font-bold">Ricardo Santos</span>
                    <span className="text-xs text-secondary uppercase tracking-widest font-semibold">Tech Store PR</span>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-surface-container-low p-10 rounded-3xl relative">
                <span className="material-symbols-outlined text-primary-container/20 text-7xl absolute top-8 right-8">format_quote</span>
                <div className="flex gap-1 text-primary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <p className="text-on-surface text-lg mb-8 italic">
                  &quot;A limpeza do local me impressionou muito. Guardei meus móveis durante uma reforma e tudo voltou exatamente como estava. Recomendo muito!&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-full overflow-hidden">
                    <img alt="Portrait of a happy client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaRTwW8GvswWnRuPYC0jflgO46-oLDtrZu7YpzXI6mbqYbby2xHCCTU1z4CV718ToMcZjLheP6rTCS2dn-rufemQWQ78ImviO6yIc3RdgoKVDkYdWr5JyK9UhjimzHhn_cEU_sitc_I3g9t8uYXBH_yRW45Xxydpb4Bb5K6TbGx7OJCFI51qgYglUROA5XCLuAmkJQo-fYAdaaR8ViKrTrI16YdRuY0JT1JEYAPUP-lK8HbJbbiSs-yJwpVxfZjflISS7LHcz5Ywk" />
                  </div>
                  <div>
                    <span className="block font-bold">Ana Oliveira</span>
                    <span className="text-xs text-secondary uppercase tracking-widest font-semibold">Arquiteta</span>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-surface-container-low p-10 rounded-3xl relative">
                <span className="material-symbols-outlined text-primary-container/20 text-7xl absolute top-8 right-8">format_quote</span>
                <div className="flex gap-1 text-primary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <p className="text-on-surface text-lg mb-8 italic">
                  &quot;Preço justo e sem burocracia. O processo de aluguel foi feito todo online e em menos de 10 minutos já estava com meu acesso liberado.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-full overflow-hidden">
                    <img alt="Portrait of a young entrepreneur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxC-wsQogziCv9USDtpfLJSeqdeNlgJ16i9VbsmZttNYTCf1vtVSqszEvyggCl51R-T95nKjGasQW1iZzPuw34xvJRu418YeeADe53ZDdV4eDWjDPVZGJPansxYyFXc7OLJdCUIBZmdq-danRuqu3NvKblFriWFcVHZBqfW7a4uVH3Hwwoo74riPmvwymLGHzQaxXOd0DI8LPijk4G5OU0akAVwJhMfw46cxk44wn5O9YFYnCYrC-6h9pTbClzNBjMRLANbppF_Es" />
                  </div>
                  <div>
                    <span className="block font-bold">Lucas Mendes</span>
                    <span className="text-xs text-secondary uppercase tracking-widest font-semibold">Empresário</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form Section (Dark Section) */}
        <section className="py-32 bg-[#1b1c1c] overflow-hidden relative">
          <div className="container mx-auto px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                  Reserve seu <br /><span className="text-primary-container">espaço hoje.</span>
                </h2>
                <p className="text-gray-300 text-xl mb-12 max-w-md">
                  Preencha os dados e receba uma cotação personalizada para o tamanho que você realmente precisa. Sem compromisso.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-sm">phone</span>
                    </div>
                    <span className="text-white font-bold">(44) 99166-6498</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-sm">mail</span>
                    </div>
                    <span className="text-white font-bold">contato@guardaespaco.com.br</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl">
                <form action="#" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-[#656464]">Seu Nome</label>
                      <input className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary/40 p-4 text-on-surface" placeholder="João Silva" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-[#656464]">WhatsApp</label>
                      <input className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary/40 p-4 text-on-surface" placeholder="(44) 99999-9999" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#656464]">O que você precisa guardar?</label>
                    <select className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary/40 p-4 appearance-none text-on-surface">
                      <option>Móveis Residenciais</option>
                      <option>Estoque Comercial</option>
                      <option>Documentação / Arquivo</option>
                      <option>Veículos ou Volumes Grandes</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#656464]">Mensagem (Opcional)</label>
                    <textarea className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary/40 p-4 text-on-surface" placeholder="Descreva sua necessidade..." rows={4}></textarea>
                  </div>
                  <button
                    className="w-full bg-primary text-white text-lg font-black py-5 rounded-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98]"
                    style={{ backgroundColor: "rgb(255, 87, 34)", "--tw-shadow-color": "#FF5722" } as React.CSSProperties}
                  >
                    Solicitar Cotação Grátis
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container"></div>
        </section>

      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full font-bold shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 group"
        href="https://wa.me/5544991666498"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
        <span>Chamar no WhatsApp</span>
      </a>
    </>
  );
}
