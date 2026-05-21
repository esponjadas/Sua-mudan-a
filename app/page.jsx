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
  ["01", "o automatico que te puxou", "Entenda por que voce repete padroes mesmo querendo mudar, sem se chamar de fraco."],
  ["02", "comparacao, culpa e vergonha", "O ebook toca nas partes silenciosas que fazem a pessoa travar antes de comecar."],
  ["03", "corpo, sono e ansiedade", "Uma leitura simples sobre como seu corpo tambem guarda cansaco, tensao e falta de direcao."],
  ["04", "o principio do 1%", "Pequenas vitorias, rotina realista e o motivo de motivacao quase nunca vir primeiro."],
  ["05", "alimentacao realista", "Comida, agua e fome emocional tratados com cuidado, nao com terrorismo ou punicao."],
  ["06", "movimento para iniciantes", "Um caminho de 30 dias para voltar a se mover sem transformar treino em castigo."],
  ["07", "ambiente e rotina", "Como seu quarto, celular, sono e casa influenciam decisoes que parecem so falta de forca."],
  ["08", "recaidas e retorno", "O que fazer quando voce some por alguns dias e precisa voltar sem culpa."],
];

const teaserChapters = [
  ["Voce nao esta quebrado. Voce esta esgotado.", "Um comeco para parar de se enxergar como problema."],
  ["O mito da virada", "Por que esperar uma grande mudanca costuma atrasar o primeiro passo."],
  ["A vergonha atrasa o retorno", "Uma parte curta, mas importante, sobre voltar depois de falhar."],
  ["Seu ambiente toma decisoes por voce", "Um olhar sobre casa, celular, comida visivel e energia mental."],
  ["Protocolo de retorno", "Um caminho gentil para recomecar quando voce se perde por alguns dias."],
  ["Seu scorecard de transformacao", "Um jeito simples de medir cuidado sem virar refem da perfeicao."],
];

const tags = [
  "culpa",
  "desanimo",
  "comparacao",
  "rotina quebrada",
  "baixa autoestima",
  "procrastinacao",
  "cansaco mental",
];

const reviews = [
  [
    "M",
    "Nao foi uma transformacao absurda. Mas foi a primeira vez em muito tempo que consegui manter uma rotina sem me sentir pressionada.",
    "Mariana, 27 anos",
  ],
  [
    "L",
    "O ebook me ajudou mais na mente do que eu esperava. Comecei a me sentir mais organizada comigo mesma.",
    "Lucas, 31 anos",
  ],
  [
    "F",
    "Gostei porque nao parece aquelas coisas impossiveis da internet. E simples e humano.",
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
    "Sim. Ele foi pensado para quem quer recomecar sem se sentir atrasado ou perdido.",
  ],
  [
    "Preciso fazer dieta extrema?",
    "Nao. A proposta e alimentacao sem terrorismo, com ajustes pequenos e sustentaveis.",
  ],
  [
    "Vou receber o ebook na hora?",
    "Sim. Depois da compra, o acesso e digital e imediato.",
  ],
  [
    "Posso ler pelo celular?",
    "Pode. O ebook foi feito para leitura simples no celular, tablet ou computador.",
  ],
  [
    "E pagamento unico?",
    "Sim. Voce paga uma vez e acessa o material digital.",
  ],
  [
    "Preciso treinar em academia?",
    "Nao. O foco e comecar com movimento possivel, mesmo em casa.",
  ],
  [
    "Quanto tempo por dia preciso dedicar?",
    "Poucos minutos ja bastam para ler e aplicar uma acao do dia. O importante e constancia.",
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
            Ebook digital - plano de 30 dias
          </motion.p>

          <motion.h1 id="hero-title" variants={fadeUp}>
            Volte para
            <span>a versao sua</span>
            que voce sente falta.
          </motion.h1>

          <motion.p className="hero__lead" variants={fadeUp}>
            Um ebook para quem cansou de prometer recomecos no silencio. Menos
            pressao, mais direcao: corpo, mente e rotina. A landing mostra o
            mapa; o ebook guarda o passo a passo para quando voce decidir abrir.
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
            <p className="eyebrow">Para quem e</p>
            <h2 id="auto-title">Para quem sente que entrou no automatico.</h2>
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
          <h2 id="inside-title">O que voce vai encontrar</h2>
          <p>
            Ele nao entrega so frases bonitas. Ele passa por comparacao, culpa,
            sono, ansiedade, alimentacao, movimento, ambiente, recaidas e um
            plano de 30 dias para voce voltar com calma.
          </p>
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

      <section className="teaser" aria-labelledby="teaser-title">
        <Reveal className="section-heading">
          <p className="eyebrow">Um pouco do que existe la dentro</p>
          <h2 id="teaser-title">Paginas feitas para voce se reconhecer.</h2>
        </Reveal>

        <motion.div
          className="teaser-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
        >
          {teaserChapters.map(([title, text], index) => (
            <motion.article key={title} variants={fadeUp}>
              <span>0{index + 1}</span>
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
            alt="Fotografia premium do ebook A versao sua que voce sente falta"
            style={{ y: ebookY }}
            animate={reduceMotion ? {} : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div>
            <p className="eyebrow">O que voce vai receber</p>
            <h2 id="receive-title">Um guia digital com leitura emocional e aplicacao real.</h2>
            <p>
              Dentro dele voce encontra reflexoes, checklists, trackers, plano
              de 30 dias, rotina de manha e noite, alimentacao realista, movimento
              iniciante e um protocolo para voltar quando falhar. A promessa nao
              e virar outra pessoa. E voltar a cuidar de voce com mais clareza.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="pricing" id="preco" aria-labelledby="pricing-title">
        <Reveal className="pricing-card">
          <p className="eyebrow">Acesso digital imediato</p>
          <h2 id="pricing-title">Se isso parece falar com voce, talvez esse seja o primeiro passo.</h2>
          <div className="pricing-card__body">
            <img
              src="/images/premium-ebook.png"
              alt="Ebook premium sobre autoestima, energia e confianca"
            />
            <div className="price-box">
              <span className="old-price">De R$97,90</span>
              <strong>Por apenas R$29,90</strong>
              <p>Pagamento unico - acesso imediato - ebook digital completo</p>
              <a className="button button--primary button--wide" href={ctaHref}>
                QUERO COMEÇAR AGORA
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="reviews" aria-labelledby="reviews-title">
        <Reveal className="section-heading">
          <p className="eyebrow">Relatos possiveis</p>
          <h2 id="reviews-title">Pequenas mudancas. Sensacoes reais.</h2>
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
              <p>"{quote}"</p>
              <strong>- {name}</strong>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="final-cta" aria-label="Chamada final">
        <Reveal>
          <p>Voce nao precisa virar outra pessoa.</p>
          <h2>So precisa voltar a cuidar de voce.</h2>
          <p className="final-cta__sub">
            O ebook esta pronto para te guiar com calma: do automatico ao primeiro
            passo, da culpa ao retorno, da rotina quebrada ao cuidado possivel.
          </p>
          <motion.img
            src="/images/premium-ebook.png"
            alt="Ebook A versao sua que voce sente falta"
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
                  <b aria-hidden="true">{isOpen ? "-" : "+"}</b>
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

      <nav className="mobile-bar" aria-label="Compra rapida">
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
