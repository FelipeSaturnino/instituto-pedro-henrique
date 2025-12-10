// src/app/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Instituto Pedro Henrique de Direitos Humanos",
  description:
    "Promovendo os Direitos Humanos e a Cultura de Paz desde 2017. O Instituto atua na defesa dos direitos sociais e na promoção da cultura de paz em São Paulo.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-red-600 via-yellow-500 to-blue-500 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-title font-bold mb-6">
            Promovendo os Direitos Humanos e a Cultura de Paz desde 2017.
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            O Instituto Pedro Henrique de Direitos Humanos atua na defesa dos direitos sociais e na promoção da cultura de paz, com projetos voltados para crianças, adolescentes e famílias da periferia de São Paulo.
          </p>
        </div>
      </section>

      {/* Seção tripla */}
      <section className="grid grid-cols-1 md:grid-cols-3 text-white text-center font-title">
        <div className="bg-[#009FE3] p-10">

          <Link
            href="/quem-somos"
            className="inline-block mt-4 text-sm font-semibold underline-offset-4 hover:text-white"
          >
          <h2 className="text-2xl font-bold mb-1">Quem somos</h2>
          <p className="text-white/90">Missão, Visão e Valores</p>
          </Link>
        </div>

        <div className="bg-[#E30613] p-10">

          <Link
            href="/projetos"
            className="inline-block mt-4 text-sm font-semibold underline-offset-4 hover:text-white"
          >
          <h2 className="text-2xl font-bold mb-1">Nossos projetos</h2>
          <p className="text-white/90">Confira nossas atividades</p>
          </Link>
        </div>

        <div className="bg-[#FFD100] text-[#222] p-10">

          <Link
            href="/doe"
            className="inline-block mt-4 text-sm font-semibold underline-offset-4 text-[#222] hover:text-black"
          >
          <h2 className="text-2xl font-bold mb-1">Seja um apoiador</h2>
          <p className="text-[#333]/90">Doe e faça a diferença</p>
          </Link>
        </div>
      </section>

      {/* Nossa atuação */}
      <section className="bg-white text-preto py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-title font-semibold mb-6">
            Nossa atuação
          </h2>
          <p className="text-neutral-700 mb-10 leading-relaxed">
            As ações do Instituto Pedro Henrique de Direitos Humanos se estruturam em três grandes eixos que se complementam e se fortalecem de forma integrada:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#009FE3] pl-4">
              <h3 className="font-semibold text-xl mb-2 text-[#009FE3]">
                Gerar e disseminar conhecimento
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Produzimos e compartilhamos conteúdos sobre a violação de direitos humanos e sociais, oferecendo à sociedade — especialmente ao público atendido — ferramentas, argumentos e subsídios para reconhecer, atuar e defender a causa.
              </p>
            </div>

            <div className="border-l-4 border-[#E30613] pl-4">
              <h3 className="font-semibold text-xl mb-2 text-[#E30613]">
                Mudar a realidade
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Apoiamos e desenvolvemos iniciativas que promovem transformações reais, fortalecendo o desenvolvimento individual e coletivo. Todas as ações são planejadas, acompanhadas e avaliadas com o propósito de gerar impacto social e disseminar boas práticas.
              </p>
            </div>

            <div className="border-l-4 border-[#FFD100] pl-4">
              <h3 className="font-semibold text-xl mb-2 text-[#FFD100]">
                Unir esforços
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Atuamos de forma articulada com o poder público, a iniciativa privada, universidades e a sociedade civil, pois acreditamos que os avanços na defesa dos direitos humanos e sociais só acontecem de maneira efetiva quando trabalhamos coletivamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
