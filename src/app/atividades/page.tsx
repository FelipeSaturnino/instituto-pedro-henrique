export const metadata = {
  title: "Atividades | Instituto Pedro Henrique de Direitos Humanos",
  description:
    "Conheça os projetos e ações desenvolvidos pelo Instituto Pedro Henrique de Direitos Humanos.",
};

export default function AtividadesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="font-title text-3xl mb-2">Projetos</h1>
        <p className="text-neutral-700">
          Conheça algumas das iniciativas promovidas pelo Instituto Pedro Henrique de Direitos Humanos.
        </p>
      </header>

      <section className="space-y-6">
        <div className="border-l-4 border-[#E30613] pl-4">
          <h2 className="text-xl font-semibold text-[#E30613]">
            Projeto TransFORMAR
          </h2>
          <p className="text-neutral-700">
            Ações voltadas à transformação social, à formação cidadã e ao fortalecimento comunitário.
          </p>
        </div>

        <div className="border-l-4 border-[#009FE3] pl-4">
          <h2 className="text-xl font-semibold text-[#009FE3]">
            GEDEVIM
          </h2>
          <p className="text-neutral-700">
            Grupo de estímulo à desconstrução da violência contra a mulher.
          </p>
        </div>

        <div className="border-l-4 border-[#FFD100] pl-4">
          <h2 className="text-xl font-semibold text-[#FFD100]">
            De Porta em Porta
          </h2>
          <p className="text-neutral-700 italic">(Em construção)</p>
        </div>

        <div className="border-l-4 border-neutral-400 pl-4">
          <h2 className="text-xl font-semibold text-neutral-800">
            Coletivo Serviço Social e Resistência
          </h2>
          <p className="text-neutral-700">
            Iniciativa de articulação e troca entre profissionais e estudantes comprometidos com a justiça social.
          </p>
        </div>
      </section>
    </main>
  );
}
