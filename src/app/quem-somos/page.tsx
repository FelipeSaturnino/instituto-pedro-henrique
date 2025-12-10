import Image from "next/image";
import { Flag, Eye, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Quem somos | Instituto Pedro Henrique de Direitos Humanos",
  description:
    "História, missão, visão e valores do Instituto Pedro Henrique de Direitos Humanos, além dos fundadores Dinair Nunes da Silva e Suzimar Wacton de Morais.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      {/* 1) INTRO */}
      <section
        className="rounded-2xl p-6 md:p-10"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <h1 className="font-title text-3xl mb-4">Quem somos</h1>
        <div className="text-neutral-800 leading-relaxed space-y-4">
          <p>
            O Instituto Pedro Henrique de Direitos Humanos iniciou suas
            atividades em julho de 2016 e foi oficialmente fundado em 28 de
            novembro de 2017. Trata-se de uma organização sem fins lucrativos
            que nasceu de uma tragédia: a morte de Pedro Henrique Nunes de
            Morais, jovem de 17 anos, vítima de ação letal do Estado na
            periferia da Brasilândia, zona norte de São Paulo.
          </p>
          <p>
            A dor da perda levou seus pais a reunir pessoas de diferentes
            formações e trajetórias, unidas pela preocupação com a violência e
            as execuções de jovens nas comunidades periféricas.
          </p>
          <p>
            Morador do território há 37 anos, o fundador e presidente, Suzimar
            Wacton de Morais, assistente social, passou a atuar junto às famílias
            que também perderam seus entes queridos, fortalecendo vínculos e
            criando caminhos de resistência e transformação.
          </p>
          <p>
            Hoje, o Instituto exerce seu papel como mediador nas relações
            comunitárias, pautando suas ações em valores éticos, transparentes e
            humanos, em consonância com os princípios da Declaração Universal dos
            Direitos Humanos e da Constituição Federal de 1988.
          </p>
        </div>
      </section>

      {/* 2) MISSÃO • VISÃO • VALORES */}
      <section
        className="relative overflow-hidden rounded-2xl px-6 md:px-10 py-10 text-branco"
        style={{
          background:
            "linear-gradient(90deg, #007BB3 0%, #1A8EC7 40%, #D4AF00 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start relative z-10">
          {/* Missão */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <div className="mb-4 md:mb-6 flex items-center justify-center border-2 border-white rounded-full h-24 w-24 shrink-0 bg-white/5">
              <Flag className="h-10 w-10" />
            </div>
            <h2 className="font-title text-2xl mb-2">Missão</h2>
            <p className="opacity-95 leading-relaxed">
              O Instituto Pedro Henrique de Direitos Humanos tem como missão
              gerar e disseminar o conhecimento para o desenvolvimento integral
              das pessoas e de suas comunidades. Promovemos a defesa dos direitos
              humanos, o fortalecimento dos vínculos sociais e a construção de
              uma cultura de paz, por meio da educação, do diálogo e da
              solidariedade.
            </p>
          </div>

          {/* Visão */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <div className="mb-4 md:mb-6 flex items-center justify-center border-2 border-white rounded-full h-24 w-24 shrink-0 bg-white/5">
              <Eye className="h-10 w-10" />
            </div>
            <h2 className="font-title text-2xl mb-2">Visão</h2>
            <p className="opacity-95 leading-relaxed">
              O Instituto Pedro Henrique de Direitos Humanos tem como visão
              desenvolver as pessoas para que, por meio de sua autonomia,
              responsabilidade e compromisso ético, contribuam para o
              desenvolvimento e transformação da sociedade.
            </p>
          </div>

          {/* Valores */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <div className="mb-4 md:mb-6 flex items-center justify-center border-2 border-white rounded-full h-24 w-24 shrink-0 bg-white/5">
              <HeartHandshake className="h-10 w-10" />
            </div>
            <h2 className="font-title text-2xl mb-2">Valores</h2>
            <p className="opacity-95 leading-relaxed">
              As ações do Instituto Pedro Henrique de Direitos Humanos baseiam-se
              em princípios de compromisso com a causa, transparência nas
              relações, trabalho em equipe e respeito mútuo. Valorizamos
              parcerias sólidas e duradouras que contribuam para a articulação de
              ideias, a disseminação do conhecimento e a execução de políticas
              públicas de impacto, sempre buscando resultados a partir de metas
              claras e mensuráveis.
            </p>
          </div>
        </div>
      </section>

      {/* 3) FUNDADORES */}
      <section className="rounded-2xl bg-branco p-6 md:p-10">
        <h2 className="font-title text-2xl mb-6">Fundadores</h2>

        {/* Foto conjunta + legenda */}
        <figure className="mb-6">
          <div className="overflow-hidden rounded-xl shadow-md border border-neutral-200">
            <Image
              src="/fundadores/fundadores.jpg"
              alt="Dinair Nunes da Silva e Suzimar Wacton de Morais"
              width={1186}
              height={667}
              className="w-full h-auto"
              priority
            />
          </div>
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            Fundadores: <strong>Dinair Nunes da Silva</strong> e{" "}
            <strong>Suzimar Wacton de Morais</strong>.
          </figcaption>
        </figure>

        {/* Caixas individuais (Dinair primeiro) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dina */}
          <article className="border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-neutral-50">
            <h3 className="font-title text-xl mb-3 text-[#E30613]">Dina</h3>
            <p className="text-neutral-800 leading-relaxed">
              Dinair Nunes da Silva é fundadora e presidente do Instituto Pedro
              Henrique de Direitos Humanos. Mãe de Pablo, Gabriella e do eterno
              adolescente Pedro Henrique, transformou a dor da perda do filho em
              2016 em força para atuar na defesa da vida e na promoção dos
              direitos humanos.
            </p>
            <p className="text-neutral-800 leading-relaxed mt-3">
              Sob sua liderança, o Instituto tornou-se referência na periferia
              de São Paulo, desenvolvendo projetos que unem conhecimento, ação
              social e articulação entre poder público e sociedade civil.
            </p>
            <p className="text-neutral-800 leading-relaxed mt-3">
              Sua trajetória é marcada pela resiliência e por uma maternagem
              social que ultrapassa o âmbito familiar. Dinair mantém viva a
              memória do filho ao construir, todos os dias, caminhos de paz e
              oportunidades para a juventude.
            </p>
          </article>

          {/* Suzimar */}
          <article className="border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-neutral-50">
            <h3 className="font-title text-xl mb-3 text-[#E30613]">Morais</h3>
            <p className="text-neutral-800 leading-relaxed">
              Suzimar Wacton de Morais, pai de Pedro Henrique Nunes de Morais, é
              assistente social e mestre em Psicologia Social. Nascido em Natal
              (RN) e residente há mais de três décadas na Brasilândia, zona
              norte de São Paulo, construiu sua trajetória marcada pela
              superação e pelo compromisso com o social.
            </p>
            <p className="text-neutral-800 leading-relaxed mt-3">
              Em 2017, após a morte de seu filho Pedro Henrique, vítima de ação
              letal do Estado aos 17 anos, transformou a dor em propósito ao
              fundar o Instituto Pedro Henrique de Direitos Humanos, uma
              organização sem fins lucrativos dedicada à defesa da vida, à
              promoção da cultura de paz e à valorização da dignidade humana.
            </p>
            <p className="text-neutral-800 leading-relaxed mt-3">
              Movido pelo amor à profissão e ao próximo, acredita que o respeito
              ao ser humano é a base de qualquer transformação social.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
