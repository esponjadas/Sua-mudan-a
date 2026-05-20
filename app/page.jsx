export default function Page() {
  const checkoutHref = "#comprar";

  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <div className="eyebrow">
            <span />
            Ebook pratico / plano de 30 dias
          </div>

          <h1 id="hero-title">A versao sua que voce sente falta.</h1>

          <p className="hero__lead">
            Uma rotina guiada para recuperar autoestima, energia e controle sem
            promessas absurdas. Poucas paginas por dia, tarefas claras e um
            plano possivel de manter.
          </p>

          <div className="hero__actions" id="comprar">
            <a className="button button--primary" href={checkoutHref}>
              Comecar agora por R$29,90
            </a>
            <a className="button button--ghost" href="#conteudo">
              O que vem dentro
            </a>
          </div>

          <ul className="trust-list" aria-label="Beneficios da compra">
            <li>Compra unica</li>
            <li>Acesso imediato</li>
            <li>Plano simples</li>
          </ul>
        </div>

        <aside className="offer" aria-label="Resumo da oferta">
          <div className="offer__top">
            <span>Oferta ativa</span>
            <strong>R$29,90</strong>
          </div>

          <div className="book" aria-label="Capa ilustrativa do ebook">
            <div className="book__spine" />
            <div className="book__cover">
              <span className="book__tag">ebook</span>
              <strong>A versao sua</strong>
              <p>30 dias para voltar a cuidar de voce.</p>
            </div>
          </div>

          <div className="offer__price">
            <span>De R$97,90</span>
            <p>Valor promocional por tempo limitado.</p>
            <a className="button button--primary" href={checkoutHref}>
              Quero acessar
            </a>
          </div>

          <ul className="offer__list">
            <li>Leitura no celular ou computador</li>
            <li>Checklist de rotina</li>
            <li>Comeco para iniciantes</li>
          </ul>
        </aside>
      </section>

      <section className="signal-bar" aria-label="Principais dores">
        <p>Para quem sente que esta no automatico.</p>
        <div>
          <span>culpa</span>
          <span>desanimo</span>
          <span>comparacao</span>
          <span>rotina quebrada</span>
        </div>
      </section>

      <section className="protocol" id="conteudo" aria-labelledby="protocol-title">
        <div>
          <p className="section-kicker">O metodo</p>
          <h2 id="protocol-title">
            Um plano curto para voce parar de depender de impulso.
          </h2>
          <p>
            O ebook organiza a mudanca em tres frentes simples: corpo, mente e
            constancia. A ideia e tirar peso da decisao diaria e deixar o
            proximo passo obvio.
          </p>
        </div>

        <div className="protocol__steps">
          <article>
            <span>01</span>
            <strong>Corpo</strong>
            <p>Alimentacao mais limpa, menos excessos e movimento possivel.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Mente</strong>
            <p>Menos comparacao, mais clareza e uma rotina contra culpa.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Constancia</strong>
            <p>Checklist de 30 dias para continuar mesmo sem motivacao.</p>
          </article>
        </div>
      </section>

      <section className="inside" aria-labelledby="inside-title">
        <p className="section-kicker">Dentro do ebook</p>
        <h2 id="inside-title">Direto ao ponto. Sem enrolacao.</h2>
        <div className="inside__grid">
          <article>
            <strong>Diagnostico rapido</strong>
            <p>Identifique o padrao que esta te prendendo antes de tentar mudar tudo.</p>
          </article>
          <article>
            <strong>Plano diario</strong>
            <p>Acoes pequenas para organizar sono, comida, treino e mente.</p>
          </article>
          <article>
            <strong>Reinicio realista</strong>
            <p>Como voltar depois de falhar sem transformar um dia ruim em uma semana perdida.</p>
          </article>
          <article>
            <strong>Checklist final</strong>
            <p>Uma forma simples de acompanhar progresso sem virar refem de perfeicao.</p>
          </article>
        </div>
      </section>

      <section className="final-cta" aria-label="Chamada final">
        <div>
          <p>Voce nao precisa virar outra pessoa.</p>
          <h2>Precisa voltar a se tratar como alguem que merece cuidado.</h2>
        </div>
        <a className="button button--primary" href={checkoutHref}>
          Acessar por R$29,90
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
