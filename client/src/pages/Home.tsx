import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5588993370469";
const MAPS = "https://maps.app.goo.gl/jDoBopBovoVZfJtc7";
const INSTAGRAM = "https://www.instagram.com/rotad_oacai/";

const menuItems = [
  {
    name: "Açaí Rota",
    detail: "Açaí cremoso, banana, morango e granola",
    price: "a partir de R$ 14,90",
    image: "/acai-bowl.jpg",
    tag: "queridinho",
  },
  {
    name: "Milk shake Açaí",
    detail: "Açaí batido, leite cremoso e finalização crocante",
    price: "a partir de R$ 16,90",
    image: "/acai-shake.jpg",
    tag: "geladinho",
  },
  {
    name: "Monte do seu jeito",
    detail: "Escolha a base, os complementos e o seu tamanho",
    price: "a partir de R$ 12,90",
    image: "/acai-bowl.jpg",
    tag: "do seu jeito",
  },
];

const faqs = [
  ["Vocês fazem delivery?", "Sim! É só chamar no WhatsApp e a gente confirma a área de entrega e o tempo estimado."],
  ["Qual o horário de atendimento?", "Segunda, das 7h às 16h. De terça a domingo, das 7h às 22h."],
  ["Posso montar meu açaí?", "Pode sim. Escolha sua base, tamanho e complementos favoritos pelo WhatsApp."],
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark--light" : ""}`} aria-hidden="true">
      <img src="/logo.png" alt="Rota do Açaí" width="46" height="46" />
    </span>
  );
}

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quantity, setQuantity] = useState(1);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline__inner">
          <span><Sparkles size={14} /> A energia do açaí, com muito mais sabor.</span>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">Peça agora pelo WhatsApp <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <button className="brand" onClick={() => scrollTo("inicio")} aria-label="Voltar ao início">
            <BrandMark />
            <span className="brand__words"><strong>Rota do</strong><em>Açaí</em></span>
          </button>
          <nav className={`main-nav ${mobileMenuOpen ? "main-nav--open" : ""}`} aria-label="Navegação principal">
            <button onClick={() => scrollTo("cardapio")}>Cardápio</button>
            <button onClick={() => scrollTo("experiencia")}>A experiência</button>
            <button onClick={() => scrollTo("onde-estamos")}>Onde estamos</button>
            <button onClick={() => scrollTo("duvidas")}>Dúvidas</button>
            <a className="nav-order" href={WHATSAPP} target="_blank" rel="noreferrer"><ShoppingBag size={16} /> Pedir agora</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Abrir menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__wash" />
          <div className="container hero__content">
            <div className="hero__copy">
              <div className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Feito para o seu momento</div>
              <h1>Seu dia pede<br /><span>açaí de verdade.</span></h1>
              <p>Textura cremosa, combinações que dão vontade e a energia certa para acompanhar sua rotina.</p>
              <div className="hero__actions">
                <a className="button button--lime" href={WHATSAPP} target="_blank" rel="noreferrer">Quero pedir <ArrowUpRight size={18} /></a>
                <button className="text-link text-link--light" onClick={() => scrollTo("cardapio")}>Ver cardápio <ArrowUpRight size={16} /></button>
              </div>
              <div className="hero__proof"><div className="avatar-stack"><span>R</span><span>♡</span><span>+</span></div><span>Mais de <strong>2.600 pessoas</strong> já provaram</span><div className="stars"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div></div>
            </div>
            <div className="hero__badge"><Zap size={16} fill="currentColor" /><span>energia<br /><strong>em cada<br />colherada</strong></span></div>
            <div className="hero__stamp">desde<br /><strong>2017</strong><br />fazendo<br />história</div>
          </div>
          <div className="hero__scroll"><span>role para descobrir</span><ChevronDown size={16} /></div>
        </section>

        <section className="quick-info">
          <div className="container quick-info__grid">
            <div className="quick-info__item"><span className="quick-info__icon"><Clock3 size={21} /></span><span><small>Hoje a gente fica aberto</small><strong>07h às 22h <i>•</i> de terça a domingo</strong></span></div>
            <div className="quick-info__item"><span className="quick-info__icon"><MessageCircle size={21} /></span><span><small>Seu pedido sem complicação</small><strong>Delivery pelo WhatsApp</strong></span></div>
            <div className="quick-info__item quick-info__item--link"><span className="quick-info__icon"><MapPin size={21} /></span><span><small>Vem tomar um açaí com a gente</small><a href={MAPS} target="_blank" rel="noreferrer"><strong>Ver localização no mapa</strong> <ArrowUpRight size={14} /></a></span></div>
          </div>
        </section>

        <section className="section menu-section" id="cardapio">
          <div className="container">
            <div className="section-heading section-heading--split"><div><div className="eyebrow"><span className="eyebrow__dot" /> Pra começar com o pé direito</div><h2>Escolha sua<br /><em>combinação favorita.</em></h2></div><div className="section-heading__aside"><p>Do clássico ao seu jeito. Tudo preparado na hora, com ingredientes que fazem diferença.</p><button className="text-link" onClick={() => alert("O cardápio completo está disponível pelo WhatsApp. Vamos montar o seu?")}>Ver cardápio completo <ArrowUpRight size={16} /></button></div></div>
            <div className="menu-grid">{menuItems.map((item, index) => <article className={`menu-card ${index === 0 ? "menu-card--featured" : ""}`} key={item.name}><div className="menu-card__image-wrap"><img src={item.image} alt={item.name} /><span className="menu-card__tag">{item.tag}</span><button className="menu-card__plus" onClick={() => setQuantity((value) => value + 1)} aria-label={`Adicionar ${item.name}`}><Plus size={18} /></button></div><div className="menu-card__body"><h3>{item.name}</h3><p>{item.detail}</p><div className="menu-card__footer"><strong>{item.price}</strong><span>{quantity} {quantity === 1 ? "item" : "itens"}</span></div></div></article>)}</div>
            <div className="menu-footnote"><span><span className="mini-check">✓</span> Ingredientes selecionados</span><span><span className="mini-check">✓</span> Montado na hora</span><span><span className="mini-check">✓</span> Entrega com carinho</span><a href={WHATSAPP} target="_blank" rel="noreferrer">Montar meu pedido <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section className="experience" id="experiencia">
          <div className="container experience__grid"><div className="experience__visual"><div className="experience__circle"><img src="/logo.png" alt="Rota do Açaí" /></div><div className="experience__caption"><span className="caption-line" /> <span>ingredientes que<br /><strong>contam uma história</strong></span></div></div><div className="experience__copy"><div className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Mais que um açaí</div><h2>Uma pausa gostosa<br />no meio da <em>correria.</em></h2><p>Na Rota, cada pedido é uma pequena rota até um dia melhor. A gente mistura sabor, cuidado e aquele clima bom de quem sabe aproveitar.</p><div className="experience__stats"><div><strong>100%</strong><span>feito na hora</span></div><div><strong>+7</strong><span>anos de história</span></div><div><strong>∞</strong><span>combinações</span></div></div><a className="button button--outline-light" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18} /> Ver nossa rotina</a></div></div>
        </section>

        <section className="location section" id="onde-estamos"><div className="container location__grid"><div className="location__copy"><div className="eyebrow"><span className="eyebrow__dot" /> Passe por aqui</div><h2>Seu próximo destino<br />é <em>bem gostoso.</em></h2><p>Estamos te esperando para uma pausa gelada, cremosa e do seu jeito.</p><div className="location__details"><div><MapPin size={19} /><span><small>Localização</small><strong>Veja como chegar pelo Google Maps</strong></span></div><div><Clock3 size={19} /><span><small>Horários</small><strong>Seg: 07h–16h &nbsp; | &nbsp; Ter–Dom: 07h–22h</strong></span></div></div><a className="button button--plum" href={MAPS} target="_blank" rel="noreferrer">Abrir no mapa <ArrowUpRight size={18} /></a></div><div className="location__map"><div className="map-grid" /><div className="map-pin"><MapPin size={28} fill="currentColor" /></div><div className="map-card"><BrandMark /><div><strong>Rota do Açaí</strong><span>Vem pela rota do sabor</span></div></div><span className="map-label map-label--one">você está aqui</span><span className="map-label map-label--two">um caminho<br />que vale a pena</span></div></div></section>

        <section className="faq section" id="duvidas"><div className="container faq__grid"><div><div className="eyebrow"><span className="eyebrow__dot" /> Antes de pedir</div><h2>Ficou com<br /><em>alguma dúvida?</em></h2><p>Se não encontrar o que procura, chama a gente. Resposta rápida e sem enrolação.</p><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Falar com a gente <ArrowUpRight size={16} /></a></div><div className="faq__list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span>{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="final-cta"><div className="container final-cta__inner"><div><div className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Pronto para a próxima colherada?</div><h2>O seu açaí está<br /><em>a um clique.</em></h2></div><a className="button button--lime button--large" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Pedir pelo WhatsApp <ArrowUpRight size={18} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer__top"><div className="footer__brand"><button className="brand brand--footer" onClick={() => scrollTo("inicio")}><BrandMark light /><span className="brand__words"><strong>Rota do</strong><em>Açaí</em></span></button><p>A energia do açaí,<br />com muito mais sabor.</p></div><div className="footer__col"><span className="footer__label">Navegue</span><button onClick={() => scrollTo("cardapio")}>Cardápio</button><button onClick={() => scrollTo("experiencia")}>A experiência</button><button onClick={() => scrollTo("onde-estamos")}>Onde estamos</button></div><div className="footer__col"><span className="footer__label">Fale com a gente</span><a href={WHATSAPP} target="_blank" rel="noreferrer">(88) 99337-0469</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">@rotad_oacai</a><a href={MAPS} target="_blank" rel="noreferrer">Google Maps <ArrowUpRight size={13} /></a></div><div className="footer__col footer__hours"><span className="footer__label">Funcionamento</span><strong>Segunda</strong><span>07h às 16h</span><strong>Terça a domingo</strong><span>07h às 22h</span></div></div><div className="container footer__bottom"><span>© {new Date().getFullYear()} Rota do Açaí. Feito para dias mais gostosos.</span><span>Feito com <span className="footer-heart">♥</span> e açaí.</span></div></footer>
      <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Pedir pelo WhatsApp"><MessageCircle size={23} /></a>
    </div>
  );
}

export default Home;
