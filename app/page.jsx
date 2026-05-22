"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const BUY_LINK = "LINK_DO_CACTO_AQUI";
const SUPPORT_LINK = "mailto:guia.volteparavoce@gmail.com";

const navItems = [
  ["inicio", "Início"],
  ["dentro", "Dentro"],
  ["produto", "Produto"],
  ["experiencia", "Experiência"],
  ["comprar", "Comprar"],
];

const features = [
  ["01", "Autoestima", "Reflexões para voltar a se olhar com menos dureza.", "Olhar"],
  ["02", "Rotina", "Pequenos rituais para organizar dias que parecem pesados.", "Ritmo"],
  ["03", "Alimentação", "Comida realista, sem terrorismo e sem culpa.", "Corpo"],
  ["04", "Sono", "Descanso como parte da reconstrução emocional.", "Calma"],
  ["05", "Ambiente", "Seu espaço como aliado silencioso das boas decisões.", "Casa"],
  ["06", "Recomeço", "Um protocolo gentil para voltar quando você se perder.", "Volta"],
  ["07", "Silêncio mental", "Exercícios para desacelerar sem transformar calma em meta.", "Pausa"],
  ["08", "Plano de 7 dias", "Uma entrada leve para sentir movimento antes dos 30 dias.", "Início"],
  ["09", "Reflexões pessoais", "Perguntas que aproximam você de si, sem exposição.", "Escrita"],
];

const differences = [
  ["Sem linguagem coach", "Nada de frases prontas. O tom é humano, baixo e real."],
  ["Sem promessas irreais", "A proposta é direção, não perfeição instantânea."],
  ["Pequenas mudanças reais", "A página vira gesto, e o gesto vira rotina."],
  ["Leitura confortável", "Textos curtos, respiro visual e ritmo de celular."],
  ["Experiência emocional", "Design, copy e exercícios trabalham juntos."],
  ["Sistema leve de recomeço", "Plano simples para voltar sem se atropelar."],
];

const chapters = [
  ["Parte 01", "O automático", "Comparação, culpa, ansiedade e o cansaço de se abandonar aos poucos."],
  ["Parte 02", "Corpo e rotina", "Sono, água, alimentação, movimento e pequenos hábitos sustentáveis."],
  ["Parte 03", "Sistema dos 30 dias", "Presença, estrutura, disciplina emocional e consolidação."],
  ["Parte 04", "Retorno", "Recaídas, vergonha, protocolo de volta, checklists e reflexões finais."],
];

const benefits = [
  "Recuperar energia aos poucos",
  "Diminuir a sensação de caos",
  "Voltar a cuidar de si",
  "Melhorar a rotina sem rigidez",
  "Diminuir exaustão mental",
  "Criar pequenos hábitos",
  "Reconectar com sua própria vida",
];

const testimonials = [
  ["Pela primeira vez em meses eu senti vontade de cuidar de mim.", "Marina, 28"],
  ["Esse ebook parece um abraço silencioso. Não me acelerou, me organizou.", "Clara, 32"],
  ["Não me senti cobrada. Me senti lembrada.", "Rafael, 29"],
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Volte Para Você">
      <span className="brand__seal">
        <img src="/images/brand-logo.png" alt="" aria-hidden="true" />
      </span>
      <span>
        Volte Para
        <b>Você</b>
      </span>
    </a>
  );
}

function BuyButton({ children, className = "button button--primary" }) {
  return (
    <a className={className} href={BUY_LINK}>
      {children}
    </a>
  );
}

function LegalModal({ type, onClose }) {
  const isTerms = type === "terms";

  return (
    <motion.div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal__panel"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close" type="button" onClick={onClose} aria-label="Fechar">
          Fechar
        </button>
        <p className="eyebrow">{isTerms ? "Termos" : "Privacidade"}</p>
        <h2 id="legal-title">
          {isTerms ? "Termos de Uso" : "Política de Privacidade"}
        </h2>
        {isTerms ? (
          <>
            <p>
              Este produto é um ebook digital. Ao comprar, você recebe acesso ao
              material conforme as instruções da plataforma de pagamento.
            </p>
            <p>
              O conteúdo tem finalidade educativa e de organização pessoal. Ele
              não substitui acompanhamento médico, nutricional, psicológico ou
              qualquer orientação profissional individualizada.
            </p>
            <p>
              A distribuição, revenda, cópia ou compartilhamento não autorizado
              do material não é permitido.
            </p>
          </>
        ) : (
          <>
            <p>
              Esta página coleta apenas as informações técnicas necessárias para
              funcionamento, navegação e redirecionamento para a compra.
            </p>
            <p>
              Dados de pagamento e entrega são processados pela plataforma de
              checkout. Em caso de dúvidas, entre em contato pelo email de
              suporte informado no rodapé.
            </p>
            <p>
              O email de contato pode ser usado apenas para responder solicitações
              enviadas por você.
            </p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const reducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("inicio");
  const [legalModal, setLegalModal] = useState(null);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, reducedMotion ? 0 : -34]);
  const bookY = useTransform(scrollYProgress, [0.08, 0.62], [0, reducedMotion ? 0 : -42]);

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.08, 0.24, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!legalModal) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setLegalModal(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [legalModal]);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progressScale }} />
      <div className="ambient" aria-hidden="true">
        <span className="ambient__glow ambient__glow--one" />
        <span className="ambient__glow ambient__glow--two" />
        <span className="ambient__glow ambient__glow--three" />
        <span className="ambient__grain" />
      </div>

      <header className="site-header">
        <Brand />
        <nav className="nav" aria-label="Navegacao principal">
          {navItems.slice(1).map(([id, label]) => (
            <a
              className={activeSection === id ? "is-active" : ""}
              href={`#${id}`}
              key={id}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="inicio">
        <section className="hero section">
          <motion.div
            className="hero__copy"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="eyebrow" variants={reveal}>
              Ebook digital premium
            </motion.p>
            <motion.h1 variants={reveal}>
              Você não precisa virar outra pessoa.
              <em>Só precisa voltar para si.</em>
            </motion.h1>
            <motion.p className="lead" variants={reveal}>
              Um guia emocional e prático para recuperar energia, autoestima e
              presença através de pequenas mudanças reais.
            </motion.p>
            <motion.div className="actions" variants={reveal}>
              <BuyButton>Quero começar meu retorno</BuyButton>
              <a className="button button--ghost" href="#dentro">
                Ver o que existe dentro
              </a>
            </motion.div>
            <motion.div className="hero__badges" variants={reveal}>
              <span>90+ páginas</span>
              <span>Leitura cinematográfica</span>
              <span>Otimizado para celular</span>
            </motion.div>
          </motion.div>

          <motion.div className="hero__visual" style={{ y: heroY }}>
            <div className="book-stage">
              <motion.img
                className="book-hero"
                src="/images/premium-ebook.png"
                alt="Mockup premium do ebook Volte Para Você"
                style={{ y: bookY }}
                fetchPriority="high"
              />
              <div className="product-card product-card--left">
                <span>Formato</span>
                <b>PDF digital</b>
              </div>
              <div className="product-card product-card--right">
                <span>Acesso</span>
                <b>Imediato</b>
              </div>
            </div>
          </motion.div>
        </section>

        <Reveal className="emotional section">
          <p>Talvez você não esteja cansado da vida.</p>
          <h2>Talvez esteja cansado de se abandonar.</h2>
          <p>
            Este ebook não grita com você. Ele conversa baixo. Como uma luz
            acesa num quarto escuro, lembrando que ainda existe um caminho de
            volta.
          </p>
        </Reveal>

        <section className="section" id="dentro">
          <Reveal className="section-head">
            <p className="eyebrow">O que você vai encontrar</p>
            <h2>Um mapa calmo para recomeçar sem pressa.</h2>
            <p>
              Uma experiência feita para ser escaneada rápido e sentida devagar:
              tópicos claros, exercícios curtos e páginas que deixam vontade de
              continuar.
            </p>
          </Reveal>
          <motion.div
            className="feature-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
          >
            {features.map(([number, title, text, icon]) => (
              <motion.article className="feature-card" key={title} variants={reveal}>
                <span>{number}</span>
                <i>{icon}</i>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="product-showcase section" id="produto">
          <Reveal className="product-showcase__copy">
            <p className="eyebrow">Produto real</p>
            <h2>Mais do que uma capa bonita: uma leitura pensada para caber no seu dia.</h2>
            <p>
              O ebook combina atmosfera editorial, páginas respiradas e direção
              prática. A pessoa entende o valor antes de comprar, mas ainda fica
              curiosa para abrir o material inteiro.
            </p>
            <BuyButton>Quero acessar o ebook</BuyButton>
          </Reveal>

          <motion.div
            className="showcase-stack"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
          >
            <motion.figure className="showcase-book" variants={reveal}>
              <img src="/images/premium-ebook.png" alt="Fotografia premium do ebook Volte Para Você" loading="lazy" />
            </motion.figure>
            <motion.div className="page-preview page-preview--one" variants={reveal}>
              <small>Preview interno</small>
              <h3>Você não está atrasado. Você está voltando.</h3>
              <p>Um trecho de leitura leve para recuperar presença sem se cobrar.</p>
            </motion.div>
            <motion.div className="page-preview page-preview--two" variants={reveal}>
              <small>Exercicio</small>
              <h3>O que eu consigo fazer hoje?</h3>
              <p>Uma pergunta por vez. Um gesto pequeno. Uma volta possível.</p>
            </motion.div>
          </motion.div>
        </section>

        <section className="section" id="experiencia">
          <Reveal className="section-head">
            <p className="eyebrow">O que torna diferente</p>
            <h2>Um ebook para sentir, não apenas consumir.</h2>
          </Reveal>
          <motion.div
            className="difference-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
          >
            {differences.map(([title, text]) => (
              <motion.div className="difference" key={title} variants={reveal}>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="cinematic-lines section">
          <Reveal>
            <p>Recomeçar devagar ainda é recomeçar.</p>
          </Reveal>
          <Reveal>
            <p>O silêncio também cura.</p>
          </Reveal>
          <Reveal>
            <p>Seu ambiente muda sua mente.</p>
          </Reveal>
          <Reveal>
            <p>Você merece descansar sem culpa.</p>
          </Reveal>
        </section>

        <section className="contents section">
          <Reveal className="section-head">
            <p className="eyebrow">O que existe dentro</p>
            <h2>Um sumário que parece uma conversa que você precisava ter.</h2>
          </Reveal>
          <motion.div
            className="contents__grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
          >
            {chapters.map(([label, title, text]) => (
              <motion.article className="contents__chapter" key={title} variants={reveal}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <Reveal className="benefits section">
          <div>
            <p className="eyebrow">Benefícios reais</p>
            <h2>Não é milagre. É direção.</h2>
          </div>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </Reveal>

        <section className="testimonials section">
          <Reveal className="section-head">
            <p className="eyebrow">Sensações possíveis</p>
            <h2>Depoimentos estéticos para sentir o tom.</h2>
          </Reveal>
          <motion.div
            className="testimonial-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
          >
            {testimonials.map(([quote, name]) => (
              <motion.blockquote key={name} variants={reveal}>
                <p>{quote}</p>
                <cite>{name}</cite>
              </motion.blockquote>
            ))}
          </motion.div>
        </section>

        <section className="final section" id="comprar">
          <Reveal className="final__inner">
            <div className="final__copy">
              <p className="eyebrow">Comece com calma</p>
              <h2>
                Talvez essa seja a primeira vez em muito tempo
                <em>que você está escolhendo voltar para si.</em>
              </h2>
              <p>
                Acesso digital imediato. Uma compra simples para começar hoje,
                sem promessas barulhentas e sem precisar esperar segunda-feira.
              </p>
              <div className="price">
                <span>De R$97,90</span>
                <b>Por R$29,90</b>
                <small>Pagamento único • acesso imediato</small>
              </div>
              <BuyButton>Começar meu retorno</BuyButton>
            </div>
            <figure className="final__mockup">
              <img
                src="/images/premium-ebook.png"
                alt="Mockup final do ebook Volte Para Você"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </section>
      </main>

      {legalModal ? (
        <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
      ) : null}

      <a className="mobile-cta" href={BUY_LINK}>
        Começar meu retorno
      </a>

      <footer className="footer">
        <Brand />
        <div className="footer__links">
          <a href="#inicio">Início</a>
          <button type="button" onClick={() => setLegalModal("terms")}>
            Termos de Uso
          </button>
          <button type="button" onClick={() => setLegalModal("privacy")}>
            Política de Privacidade
          </button>
          <a href={SUPPORT_LINK}>Contato</a>
          <a href={SUPPORT_LINK}>Suporte</a>
        </div>
        <p>&copy; 2026 Volte Para Você. Todos os direitos reservados.</p>
        <p>
          Suporte: <a href={SUPPORT_LINK}>guia.volteparavoce@gmail.com</a>
        </p>
      </footer>
    </>
  );
}
