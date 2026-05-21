"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const insideItems = [
  ["01", "alimentação sem terrorismo", "Escolhas simples para comer melhor sem medo, culpa ou regras impossíveis."],
  ["02", "treino para iniciantes", "Movimentos possíveis para voltar ao corpo sem precisar performar para ninguém."],
  ["03", "autoestima e mentalidade", "Exercícios curtos para reconstruir confiança de forma silenciosa e real."],
  ["04", "plano de 30 dias", "Um caminho guiado para saber o que fazer quando a motivação não aparece."],
  ["05", "hábitos sustentáveis", "Mudanças pequenas o suficiente para caberem numa vida normal."],
  ["06", "constância realista", "Como continuar depois de falhar sem transformar um dia ruim em desistência."],
  ["07", "rotina saudável", "Sono, alimentação, movimento e ambiente organizados com mais leveza."],
  ["08", "evolução gradual", "Progresso sem pressa artificial, com atenção ao que muda por dentro."],
];

const tags = [
  "culpa",
  "desânimo",
  "comparação",
  "rotina quebrada",
  "baixa autoestima",
  "procrastinação",
  "cansaço mental",
];

const reviews = [
  [
    "M",
    "Não foi uma transformação absurda. Mas foi a primeira vez em muito tempo que consegui manter uma rotina sem me sentir pressionada.",
    "Mariana, 27 anos",
  ],
  [
    "L",
    "O ebook me ajudou mais na mente do que eu esperava. Comecei a me sentir mais organizada comigo mesma.",
    "Lucas, 31 anos",
  ],
  [
    "F",
    "Gostei porque não parece aquelas coisas impossíveis da internet. É simples e humano.",
    "Fernanda, 24 anos",
  ],
  [
    "R",
    "Pela primeira vez eu senti que estava cuidando de mim sem culpa.",
    "Rafael, 29 anos",
  ],
];

const faqs = [
  [
    "Esse ebook serve para iniciantes?",
    "Sim. Ele foi pensado para quem quer recomeçar sem se sentir atrasado ou perdido.",
  ],
  [
    "Preciso fazer dieta extrema?",
    "Não. A proposta é alimentação sem terrorismo, com ajustes pequenos e sustentáveis.",
  ],
  [
    "Vou receber o ebook na hora?",
    "Sim. Depois da compra, o acesso é digital e imediato.",
  ],
  [
    "Posso ler pelo celular?",
    "Pode. O ebook foi feito para leitura simples no celular, tablet ou computador.",
  ],
  [
    "É pagamento único?",
    "Sim. Você paga uma vez e acessa o material digital.",
  ],
  [
    "Preciso treinar em academia?",
    "Não. O foco é começar com movimento possível, mesmo em casa.",
  ],
  [
    "Quanto tempo por dia preciso dedicar?",
    "Poucos minutos já bastam para ler e aplicar uma ação do dia. O importante é constância.",
  ],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : -54]);
  const ebookY = useTransform(scrollYProgress, [0.2, 0.8], [0, reduceMotion ? 0 : -38]);
  const ctaHref = "#preco";

  return (
    <main className="page">
      <div className="atmosphere" aria-hidden="true">
        <span className="ambient ambient--one" />
        <span className="ambient ambient--two" />
        <span className="ambient ambient--three" />
        <span className="grain" />
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <motion.div
          className="hero__copy"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Ebook digital • plano de 30 dias
          </motion.p>

          <motion.h1 id="hero-title" variants={fadeUp}>
            Volte para
            <span>a versão sua</span>
            que você sente falta.
          </motion.h1>

          <motion.p className="hero__lead" variants={fadeUp}>
            Um ebook para quem cansou de prometer recomeços no silêncio. Menos
            pressão, mais direção: corpo, mente e rotina.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <a className="button button--primary" href={ctaHref}>
              QUERO COMEÇAR AGORA
            </a>
            <a className="button button--secondary" href="#conteudo">
              VER O QUE TEM DENTRO
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          style={{ y: heroImageY }}
          initial={{ opacity: 0, scale: 0.96, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <span className="hero-image__glow" aria-hidden="true" />
          <img
            src="/images/hero-mirror.png"
            alt="Mulher olhando para si mesma no espelho em luz quente"
          />
        </motion.div>
      </section>

      <Reveal>
        <section className="auto-section" aria-labelledby="auto-title">
          <div>
            <p className="eyebrow">Para quem é</p>
            <h2 id="auto-title">Para quem sente que entrou no automático.</h2>
          </div>
          <motion.div
            className="tag-cloud"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                variants={fadeUp}
                className={`tag tag--${(index % 3) + 1}`}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </section>
      </Reveal>

      <section className="inside" id="conteudo" aria-labelledby="inside-title">
        <Reveal className="section-heading">
          <p className="eyebrow">Dentro do ebook</p>
          <h2 id="inside-title">O que você vai encontrar</h2>
        </Reveal>

        <motion.div
          className="inside-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
        >
          {insideItems.map(([number, title, text]) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.28 }}
            >
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <Reveal>
        <section className="receive" aria-labelledby="receive-title">
          <motion.img
            src="/images/premium-ebook.png"
            alt="Fotografia premium do ebook A versão sua que você sente falta"
            style={{ y: ebookY }}
            animate={reduceMotion ? {} : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div>
            <p className="eyebrow">O que você vai receber</p>
            <h2 id="receive-title">Um guia digital com aparência calma e aplicação real.</h2>
            <p>
              Nada de promessa teatral. O material foi pensado para caber na sua
              vida: ler, aplicar, falhar menos, voltar mais rápido e sentir que
              existe uma direção possível.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="pricing" id="preco" aria-labelledby="pricing-title">
        <Reveal className="pricing-card">
          <p className="eyebrow">Acesso digital imediato</p>
          <h2 id="pricing-title">Comece hoje com um passo pequeno, mas claro.</h2>
          <div className="pricing-card__body">
            <img
              src="/images/premium-ebook.png"
              alt="Ebook premium sobre autoestima, energia e confiança"
            />
            <div className="price-box">
              <span className="old-price">De R$97,90</span>
              <strong>Por apenas R$29,90</strong>
              <p>Pagamento único • acesso imediato</p>
              <a className="button button--primary button--wide" href={ctaHref}>
                QUERO COMEÇAR AGORA
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="reviews" aria-labelledby="reviews-title">
        <Reveal className="section-heading">
          <p className="eyebrow">Relatos possíveis</p>
          <h2 id="reviews-title">Pequenas mudanças. Sensações reais.</h2>
        </Reveal>

        <motion.div
          className="review-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {reviews.map(([initial, quote, name]) => (
            <motion.article key={name} variants={fadeUp}>
              <span>{initial}</span>
              <p>“{quote}”</p>
              <strong>— {name}</strong>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="final-cta" aria-label="Chamada final">
        <Reveal>
          <p>Você não precisa virar outra pessoa.</p>
          <h2>Só precisa voltar a cuidar de você.</h2>
          <motion.img
            src="/images/premium-ebook.png"
            alt="Ebook A versão sua que você sente falta"
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="final-price">
            <span>De R$97,90</span>
            <strong>Por R$29,90</strong>
          </div>
          <a className="button button--primary" href={ctaHref}>
            QUERO MINHA TRANSFORMAÇÃO
          </a>
        </Reveal>
      </section>

      <section className="faq" aria-labelledby="faq-title">
        <Reveal className="section-heading">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 id="faq-title">Perguntas frequentes</h2>
        </Reveal>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index;
            return (
              <article className="faq-item" key={question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{question}</span>
                  <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <p>{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </section>

      <nav className="mobile-bar" aria-label="Compra rápida">
        <div>
          <span>R$29,90</span>
          <strong>Acesso imediato</strong>
        </div>
        <a className="button button--primary" href={ctaHref}>
          COMEÇAR AGORA
        </a>
      </nav>
    </main>
  );
}
