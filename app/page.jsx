export default function Page() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <div className="eyebrow">
            <span />
            Transformacao pessoal em 30 dias
          </div>

          <h1 id="hero-title">A versao sua que voce sente falta.</h1>

          <p className="hero__lead">
            Um guia pratico para sair do ciclo de culpa, recuperar energia e
            voltar a se cuidar sem depender de motivacao perfeita.
          </p>

          <div className="hero__actions" id="comprar">
            <a className="button button--primary" href="#comprar">
              Comecar por R$29,90
            </a>
            <a className="button button--ghost" href="#conteudo">
              Ver conteudo
            </a>
          </div>

          <ul className="trust-list" aria-label="Beneficios da compra">
            <li>Compra unica</li>
            <li>Acesso imediato</li>
            <li>Leitura no celular</li>
          </ul>
        </div>

        <aside className="offer-card" aria-label="Resumo do ebook">
          <div className="book">
            <div className="book__spine" />
            <div className="book__cover">
              <span className="book__tag">ebook</span>
              <strong>A versao sua</strong>
              <p>30 dias para voltar a cuidar de voce.</p>
            </div>
          </div>

          <div className="price">
            <span>De R$97,90</span>
            <strong>R$29,90</strong>
            <small>Valor promocional por tempo limitado</small>
          </div>
        </aside>
      </section>

      <section className="compact-grid" aria-label="Problemas que o ebook resolve">
        <article>
          <span>01</span>
          <h2>Rotina travada</h2>
          <p>Voce sabe que precisa mudar, mas repete os mesmos padroes.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Autoestima baixa</h2>
          <p>O espelho, a comparacao e a culpa viraram parte do dia.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Energia pouca</h2>
          <p>O corpo pede cuidado, mas tudo parece pesado para comecar.</p>
        </article>
      </section>

      <section className="plan" id="conteudo" aria-labelledby="plan-title">
        <div>
          <p className="section-kicker">O metodo</p>
          <h2 id="plan-title">
            Pequenas mudancas, menos promessa, mais execucao.
          </h2>
        </div>

        <div className="plan__steps">
          <article>
            <strong>Corpo</strong>
            <p>Alimentacao mais simples, movimento diario e reducao de excessos.</p>
          </article>
          <article>
            <strong>Mente</strong>
            <p>Rotina contra culpa, procrastinacao, ansiedade e comparacao.</p>
          </article>
          <article>
            <strong>Constancia</strong>
            <p>Plano de 30 dias para seguir mesmo quando a motivacao cair.</p>
          </article>
        </div>
      </section>

      <section className="results" aria-label="Resultados esperados">
        <p>Voce nao precisa virar outra pessoa.</p>
        <h2>Precisa voltar a se tratar como alguem que merece cuidado.</h2>
        <a className="button button--primary" href="#comprar">
          Quero acessar o ebook
        </a>
      </section>

      <nav className="mobile-bar" aria-label="Compra rapida">
        <div>
          <span>Oferta</span>
          <strong>R$29,90</strong>
        </div>
        <a href="#comprar" className="button button--primary">
          Comprar
        </a>
      </nav>
    </main>
  );
}
