"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const features = [
  ["01", "Autoestima", "Reflexoes para voltar a se olhar com menos dureza."],
  ["02", "Rotina", "Pequenos rituais para organizar dias que parecem pesados."],
  ["03", "Alimentacao", "Comida realista, sem terrorismo e sem culpa."],
  ["04", "Sono", "Entenda como descanso tambem e reconstrucao emocional."],
  ["05", "Ambiente", "Seu espaco como aliado silencioso das boas decisoes."],
  ["06", "Recomeco", "Um protocolo gentil para voltar quando voce se perder."],
  ["07", "Silencio mental", "Exercicios para desacelerar sem transformar calma em meta."],
  ["08", "Plano de 7 dias", "Uma entrada leve para sentir movimento antes dos 30 dias."],
  ["09", "Reflexoes pessoais", "Perguntas que nao expoem voce; aproximam voce de si."],
];

const differences = [
  "Sem linguagem coach",
  "Sem promessas irreais",
  "Pequenas mudancas reais",
  "Leitura confortavel",
  "Experiencia emocional",
  "Design cinematografico",
  "Exercicios pessoais",
  "Sistema leve de recomeco",
];

const chapters = [
  ["Parte 01", "O automatico", "Comparacao, culpa, ansiedade e o cansaco de se abandonar aos poucos."],
  ["Parte 02", "Corpo e rotina", "Sono, agua, alimentacao, movimento e pequenos habitos sustentaveis."],
  ["Parte 03", "Sistema dos 30 dias", "Presenca, estrutura, disciplina emocional e consolidacao."],
  ["Parte 04", "Retorno", "Recaidas, vergonha, protocolo de volta, checklists e reflexoes finais."],
];

const benefits = [
  "Recuperar energia aos poucos",
  "Diminuir a sensacao de caos",
  "Voltar a cuidar de si",
  "Melhorar a rotina",
  "Diminuir exaustao mental",
  "Criar pequenos habitos",
  "Reconectar com sua propria vida",
];

const testimonials = [
  ["Pela primeira vez em meses eu senti vontade de cuidar de mim.", "Marina, 28"],
  ["Esse ebook parece um abraco silencioso.", "Clara, 32"],
  ["Nao me senti cobrada. Me senti lembrada.", "Rafael, 29"],
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Volte Para Voce">
      <span className="brand__seal">VPV</span>
      <span>
        Volte Para
        <b>Voce</b>
      </span>
    </a>
  );
}

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, reducedMotion ? 0 : -46]);
  const bookY = useTransform(scrollYProgress, [0.12, 0.68], [0, reducedMotion ? 0 : -34]);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progressScale }} />
      <div className="ambient" aria-hidden="true">
        <span className="ambient__glow ambient__glow--one" />
        <span className="ambient__glow ambient__glow--two" />
        <span className="ambient__grain" />
      </div>

      <header className="site-header">
        <Brand />
        <nav className="nav" aria-label="Navegacao principal">
          <a href="#dentro">Dentro</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#comprar">Comprar</a>
        </nav>
      </header>

      <main id="top">
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
              Voce nao precisa virar outra pessoa.
              <em>So precisa voltar para si.</em>
            </motion.h1>
            <motion.p className="lead" variants={reveal}>
              Um guia emocional e pratico para recuperar energia, autoestima e
              presenca atraves de pequenas mudancas reais.
            </motion.p>
            <motion.div className="actions" variants={reveal}>
              <a className="button button--primary" href="#comprar">
                Quero comecar meu retorno
              </a>
              <a className="button button--ghost" href="#dentro">
                Ver o que existe dentro
              </a>
            </motion.div>
            <motion.div className="hero__badges" variants={reveal}>
              <span>90+ paginas</span>
              <span>Otimizado para celular</span>
              <span>Leitura cinematografica</span>
            </motion.div>
          </motion.div>

          <motion.div className="hero__visual" style={{ y: heroY }}>
            <div className="phone-mock">
              <div className="phone-mock__screen">
                <img
                  src="/images/hero-mirror.png"
                  alt="Mulher olhando para si mesma no espelho"
                />
                <div className="phone-mock__caption">
                  <span>Capitulo 01</span>
                  <b>O automatico</b>
                </div>
              </div>
            </div>
            <motion.img
              className="book-hero"
              src="/images/premium-ebook.png"
              alt="Mockup premium do ebook Volte Para Voce"
              style={{ y: bookY }}
            />
          </motion.div>
        </section>

        <Reveal className="emotional section">
          <p>Talvez voce nao esteja cansado da vida.</p>
          <h2>Talvez esteja cansado de se abandonar.</h2>
          <p>
            Este ebook nao grita com voce. Ele conversa baixo. Como uma luz
            acesa num quarto escuro, lembrando que ainda existe um caminho de
            volta.
          </p>
        </Reveal>

        <section className="section" id="dentro">
          <Reveal className="section-head">
            <p className="eyebrow">O que voce vai encontrar</p>
            <h2>Um mapa calmo para recomecar sem pressa.</h2>
          </Reveal>
          <motion.div
            className="feature-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
          >
            {features.map(([number, title, text]) => (
              <motion.article className="feature-card" key={title} variants={reveal}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <Reveal className="mockups section">
          <div className="mockups__text">
            <p className="eyebrow">Visual do produto</p>
            <h2>Feito para parecer calmo antes mesmo da primeira pagina.</h2>
            <p>
              A experiencia visual foi pensada para celular, tablet e leitura
              confortavel. Cada pagina tem respiro, contraste suave e ritmo de
              revista cinematografica.
            </p>
          </div>
          <div className="devices">
            <div className="device device--tablet">
              <div className="device__page">
                <small>Reflexao</small>
                <h3>Voce nao esta quebrado. Voce esta esgotado.</h3>
                <p>Uma pagina para parar de se tratar como problema.</p>
              </div>
            </div>
            <div className="device device--phone">
              <img src="/images/premium-ebook.png" alt="Ebook em visual premium" />
            </div>
            <div className="open-pages">
              <div>
                <span>Plano 7 dias</span>
                <p>agua, sono, movimento, ambiente</p>
              </div>
              <div>
                <span>Tracker</span>
                <p>pequenos sinais de volta</p>
              </div>
            </div>
          </div>
        </Reveal>

        <section className="section" id="experiencia">
          <Reveal className="section-head">
            <p className="eyebrow">O que torna diferente</p>
            <h2>Um ebook para sentir, nao apenas consumir.</h2>
          </Reveal>
          <motion.div
            className="difference-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
          >
            {differences.map((item) => (
              <motion.div className="difference" key={item} variants={reveal}>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="cinematic-lines section">
          <Reveal>
            <p>Recomecar devagar ainda e recomecar.</p>
          </Reveal>
          <Reveal>
            <p>O silencio tambem cura.</p>
          </Reveal>
          <Reveal>
            <p>Seu ambiente muda sua mente.</p>
          </Reveal>
          <Reveal>
            <p>Voce merece descansar sem culpa.</p>
          </Reveal>
        </section>

        <section className="contents section">
          <Reveal className="section-head">
            <p className="eyebrow">O que existe dentro</p>
            <h2>Um sumario que parece uma conversa que voce precisava ter.</h2>
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
            <p className="eyebrow">Beneficios reais</p>
            <h2>Nao e milagre. E direcao.</h2>
          </div>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </Reveal>

        <section className="testimonials section">
          <Reveal className="section-head">
            <p className="eyebrow">Sensacoes possiveis</p>
            <h2>Depoimentos esteticos para sentir o tom.</h2>
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
            <p className="eyebrow">Comece com calma</p>
            <h2>
              Talvez essa seja a primeira vez em muito tempo
              <em>que voce esta escolhendo voltar para si.</em>
            </h2>
            <img
              src="/images/premium-ebook.png"
              alt="Mockup final do ebook Volte Para Voce"
            />
            <a className="button button--primary" href="mailto:guia.volteparavoce@gmail.com?subject=Quero%20comprar%20o%20ebook%20Volte%20Para%20Voce">
              Comecar meu retorno
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <Brand />
        <div className="footer__links">
          <a href="#">Politica de Privacidade</a>
          <a href="#">Termos</a>
          <a href="mailto:guia.volteparavoce@gmail.com">Contato</a>
        </div>
        <p>© 2026 Volte Para Voce. Todos os direitos reservados.</p>
        <p>Suporte: guia.volteparavoce@gmail.com</p>
      </footer>
    </>
  );
}
