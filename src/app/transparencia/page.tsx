export const metadata = {
  title: "Transparência | Instituto Pedro Henrique de Direitos Humanos",
  description:
    "Dados cadastrais e documentos institucionais do Instituto Pedro Henrique de Direitos Humanos.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="font-title text-3xl mb-2">Transparência</h1>
        <p className="text-neutral-700">
          Aqui você encontra nossos dados cadastrais e documentos institucionais.
        </p>
      </header>

      {/* Dados cadastrais */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm mb-8">
        <h2 className="font-title text-xl mb-4">Dados cadastrais</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          <div>
            <dt className="text-sm text-neutral-500">Instituição</dt>
            <dd className="text-preto font-medium">
              Instituto Pedro Henrique de Direitos Humanos
            </dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">Fundação</dt>
            <dd className="text-preto font-medium">28 de Novembro de 2017</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">CNPJ</dt>
            <dd className="text-preto font-medium">31.146.036/0001-01</dd>
          </div>
        </dl>
      </section>

      {/* Documentos */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="font-title text-xl mb-4">Documentos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Estatuto */}
          <a
            href="/docs/estatuto-consolidado-iphdh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            ESTATUTO
            <svg
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 2a1 1 0 112 0v9.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 116.707 9.293L9 11.586V2z" />
              <path d="M3 13a1 1 0 011-1h2a1 1 0 110 2H5v2h10v-2h-1a1 1 0 110-2h2a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z" />
            </svg>
          </a>

          {/* Ata de Fundação */}
          <a
            href="/docs/ata-de-fundacao-iphdh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            ATA DE FUNDAÇÃO
            <svg
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 2a1 1 0 112 0v9.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 116.707 9.293L9 11.586V2z" />
              <path d="M3 13a1 1 0 011-1h2a1 1 0 110 2H5v2h10v-2h-1a1 1 0 110-2h2a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z" />
            </svg>
          </a>
        </div>

      </section>
    </main>
  );
}
