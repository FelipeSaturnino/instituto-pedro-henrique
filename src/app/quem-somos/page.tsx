import Image from "next/image";

export const metadata = {
  title: "Quem somos | Instituto Pedro Henrique de Direitos Humanos",
  description:
    "História, missão, visão e valores do Instituto Pedro Henrique de Direitos Humanos, além dos fundadores.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      {/* 1) INTRO */}
      <section className="rounded-2xl p-6 md:p-10" style={{ backgroundColor: "#FAFAFA" }}>
        <h1 className="font-title text-3xl mb-4">Quem somos</h1>
        <div className="text-neutral-800 leading-relaxed space-y-4">
          <p>
            O Instituto Pedro Henrique de Direitos Humanos iniciou suas atividades em julho de 2016 e foi
            oficialmente fundado em 28 de novembro de 2017. Trata-se de uma organização sem fins lucrativos que
            nasceu de uma tragédia: a morte de Pedro Henrique Nunes de Morais, jovem de 17 anos, vítima de ação
            letal do Estado na periferia da Brasilândia, zona norte de São Paulo.
          </p>
          <p>
            A dor da perda levou seus pais a reunir pessoas de diferentes formações e trajetórias, unidas pela
            preocupação com a violência e as execuções de jovens nas comunidades periféricas.
          </p>
          <p>
            Morador do território há 37 anos, o fundador e presidente, Suzimar Wacton de Morais, assistente social,
            passou a atuar junto às famílias que também perderam seus entes queridos, fortalecendo vínculos e criando
            caminhos de resistência e transformação.
          </p>
          <p>
            Hoje, o Instituto exerce seu papel como mediador nas relações comunitárias, pautando suas ações em
            valores éticos, transparentes e humanos, em consonância com os princípios da Declaração Universal dos
            Direitos Humanos e da Constituição Federal de 1988.
          </p>
        </div>
      </section>

      {/* 2) MISSÃO • VISÃO • VALORES */}
      <section
        className="relative overflow-hidden rounded-2xl px-6 md:px-10 py-10 text-branco"
        // degradê escuro (mais contraste para texto branco)
        style={{
          background:
            "linear-gradient(90deg, #007BB3 0%, #1A8EC7 40%, #D4AF00 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start relative z-10">
          {/* Missão */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <div className="mb-4 md:mb-6 flex items-center justify-center border-2 border-white rounded-full h-24 w-24 shrink-0">
              {/* ícone bandeira/montanha */}
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M8 3v14" />
                <path d="M8 5h8l-2 3 2 3H8" />
                <path d="M3 21h18" />
              </svg>
            </div>
            <h2 className="font-title text-2xl mb-2">Missão</h2>
            <p className="opacity-95 leading-relaxed">
              O Instituto Pedro Henrique de Direitos Humanos tem como missão gerar e disseminar o conhecimento para
              o desenvolvimento integral das pessoas e de suas comunidades. Promovemos a defesa dos direitos
              humanos, o fortalecimento dos vínculos sociais e a construção de uma cultura de paz, por meio da
              educação, do diálogo e da solidariedade.
            </p>
          </div>

          {/* Visão */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <div className="mb-4 md:mb-6 flex items-center justify-center border-2 border-white rounded-full h-24 w-24 shrink-0">
              {/* ícone gráfico em alta */}
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M3 20h18" />
                <path d="M7 16v-3" />
                <path d="M12 16v-6" />
                <path d="M17 16v-9" />
                <path d="M14 5c2 2 4 2 7 0" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="font-title text-2xl mb-2">Visão</h2>
            <p className="opacity-95 leading-relaxed">
              O Instituto Pedro Henrique de Direitos Humanos tem como visão desenvolver as pessoas para que, por
              meio de sua autonomia, responsabilidade e compromisso ético, contribuam para o desenvolvimento e
              transformação da sociedade.
            </p>
          </div>

          {/* Valores */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <div className="mb-4 md:mb-6 flex items-center justify-center border-2 border-white rounded-full h-24 w-24 shrink-0">
              {/* ícone mãos/estrelas */}
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M7 20s-2-1-2-3 2-3 2-3l4-2" strokeLinecap="round" />
                <path d="M17 20s2-1 2-3-2-3-2-3l-4-2" strokeLinecap="round" />
                <path d="M9 8l1 1M12 7l1 1M15 8l1 1" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="font-title text-2xl mb-2">Valores</h2>
            <p className="opacity-95 leading-relaxed">
              As ações do Instituto Pedro Henrique de Direitos Humanos baseiam-se em princípios de compromisso com a
              causa, transparência nas relações, trabalho em equipe e respeito mútuo. Valorizamos parcerias sólidas
              e duradouras que contribuam para a articulação de ideias, a disseminação do conhecimento e a execução
              de políticas públicas de impacto, sempre buscando resultados a partir de metas claras e mensuráveis.
            </p>
          </div>
        </div>
      </section>

      {/* 3) FUNDADORES */}
      <section className="rounded-2xl bg-branco p-6 md:p-10">
        <h2 className="font-title text-2xl mb-6">Fundadores</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Morais */}
          <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            {/* quando tiver a foto, troque o placeholder abaixo por um <Image src="/fundadores/morais.jpg" ... /> */}
            {/* <div className="mb-4 relative h-44 w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image src="/fundadores/morais.jpg" alt="Suzimar Wacton de Morais" fill className="object-cover" />
            </div> */}
            <h3 className="font-title text-xl mb-2">Morais</h3>
            <p className="text-neutral-800 leading-relaxed">
              Suzimar Wacton de Morais, pai de Pedro Henrique Nunes de Morais, é assistente social e mestre em
              Psicologia Social. Nascido em Natal (RN) e residente há mais de três décadas na Brasilândia, zona
              norte de São Paulo, construiu sua trajetória marcada pela superação e pelo compromisso com o social.
            </p>
            <p className="text-neutral-800 leading-relaxed mt-3">
              Em 2017, após a morte de seu filho Pedro Henrique, vítima de ação letal do Estado aos 17 anos,
              transformou a dor em propósito ao fundar o Instituto Pedro Henrique de Direitos Humanos, uma
              organização sem fins lucrativos dedicada à defesa da vida, à promoção da cultura de paz e à
              valorização da dignidade humana.
            </p>
            <p className="text-neutral-800 leading-relaxed mt-3">
              Movido pelo amor à profissão e ao próximo, acredita que o respeito ao ser humano é a base de qualquer
              transformação social.
            </p>
          </article>

          {/* Dina (placeholder de conteúdo + slot para foto futura) */}
          <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            {/* quando tiver a foto, troque o placeholder abaixo por um <Image src="/fundadores/dina.jpg" ... /> */}
            {/* <div className="mb-4 relative h-44 w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image src="/fundadores/dina.jpg" alt="Dina" fill className="object-cover" />
            </div> */}
            <h3 className="font-title text-xl mb-2">Dina</h3>
            <p className="text-neutral-600">
              (em breve — Morais, pode me informar o texto da Dina e eu ajusto a diagramação para manter o mesmo padrão)
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
