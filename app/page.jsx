export default function Page() {
  const checkoutHref = "#comprar";

  return (
    <main className="page">
      <div className="atmosphere" aria-hidden="true">
        <span className="glow glow--one" />
        <span className="glow glow--two" />
        <span className="glow glow--three" />
        <span className="grain" />
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Plano emocional de 30 dias</p>

          <h1 id="hero-title">
            Volte para a <span>versao sua</span> que voce sente falta.
          </h1>

          <p className="hero__lead">
            Um ebook para quem cansou de prometer recomecos no silencio. Menos
            pressao, mais direcao: corpo, mente e rotina reconstruidos em passos
            pequenos o suficiente para serem reais.
          </p>

          <div className="hero__actions" id="comprar">
            <a className="button button--primary" href={checkoutHref}>
              Comecar minha mudanca
            </a>
            <a className="button button--secondary" href="#experiencia">
              Sentir a proposta
            </a>
          </div>

          <div className="quiet-proof" aria-label="Beneficios principais">
            <span>Acesso imediato</span>
            <span>Leitura no celular</span>
            <span>Ritual de 30 dias</span>
          </div>
        </div>

        <aside className="product-stage" aria-label="Oferta do ebook">
          <div className="stage-light" aria-hidden="true" />
          <div className="ebook-orbit" aria-hidden="true">
            <div className="ebook-shadow" />
            <div className="ebook">
              <div className="ebook__edge" />
              <div className="ebook__cover">
                <small>ebook</small>
                <strong>
                  A versao
                  <br />
                  sua
                </strong>
                <p>Um retorno silencioso para quem voce ainda pode ser.</p>
              </div>
            </div>
          </div>

          <div className="premium-card">
            <div>
              <p className="card-label">Oferta de lancamento</p>
              <div className="price">
                <span>R$29,90</span>
                <small>pagamento unico</small>
              </div>
            </div>

            <p>
              Um plano pratico para sair do automatico e reconstruir cuidado
              pessoal sem cair em discurso de perfeicao.
            </p>

            <a className="button button--glass" href={checkoutHref}>
              Acessar o ebook
            </a>
          </div>
        </aside>
      </section>

      <section className="emotional-strip" aria-label="Dores emocionais">
        <p>Para quando voce olha para a propria rotina e sente que se perdeu de si.</p>
        <div>
          <span>cansaco mental</span>
          <span>culpa</span>
          <span>comparacao</span>
          <span>falta de energia</span>
        </div>
      </section>

      <section className="experience" id="experiencia" aria-labelledby="experience-title">
        <div className="experience__intro">
          <p className="eyebrow">A experiencia</p>
          <h2 id="experience-title">
            Nao e sobre virar outra pessoa. E sobre se reconhecer de novo.
          </h2>
        </div>

        <div className="experience__grid">
          <article>
            <span>01</span>
            <strong>O peso fica menor</strong>
            <p>
              Voce entende o padrao que te trava e para de tratar cada falha
              como prova de incapacidade.
            </p>
          </article>
          <article>
            <span>02</span>
            <strong>O corpo responde</strong>
            <p>
              Pequenas escolhas de alimentacao, movimento e descanso deixam o
              dia menos pesado.
            </p>
          </article>
          <article>
            <span>03</span>
            <strong>A rotina ganha forma</strong>
            <p>
              Um ritual simples para continuar mesmo quando a motivacao nao
              aparece.
            </p>
          </article>
        </div>
      </section>

      <section className="inside" aria-labelledby="inside-title">
        <p className="eyebrow">Dentro do ebook</p>
        <h2 id="inside-title">Clareza, cuidado e acao sem teatralidade.</h2>

        <div className="inside__list">
          <article>
            <strong>Diagnostico emocional</strong>
            <p>Nomeie o que esta acontecendo antes de tentar consertar tudo.</p>
          </article>
          <article>
            <strong>Plano diario guiado</strong>
            <p>Acoes pequenas para corpo, mente e ambiente, com ritmo possivel.</p>
          </article>
          <article>
            <strong>Recomeco sem culpa</strong>
            <p>Como voltar quando escorregar, sem abandonar a semana inteira.</p>
          </article>
          <article>
            <strong>Checklist de constancia</strong>
            <p>Um jeito limpo de acompanhar progresso sem obsessao.</p>
          </article>
        </div>
      </section>

      <section className="final-cta" aria-label="Chamada final">
        <p>Talvez voce nao precise de mais motivacao.</p>
        <h2>Talvez precise de um caminho calmo para voltar.</h2>
        <a className="button button--primary" href={checkoutHref}>
          Comecar por R$29,90
        </a>
      </section>

      <nav className="mobile-bar" aria-label="Compra rapida">
        <div>
          <span>Oferta</span>
          <strong>R$29,90</strong>
        </div>
        <a href={checkoutHref} className="button button--primary">
          Comprar
        </a>
      </nav>
    </main>
  );
}
