export const metadata = {
  title: "Doe | Instituto Pedro Henrique de Direitos Humanos",
  description:
    "Faça uma doação e apoie o Instituto Pedro Henrique de Direitos Humanos. Conheça as formas de contribuir.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* Título */}
      <header className="mb-2">
        <h1 className="font-title text-3xl mb-2">Doe</h1>
        <p className="text-neutral-700">
          Existem várias possibilidades de participar junto com o Instituto Pedro Henrique de Direitos Humanos
          na luta pela cidadania e defesa de direitos.
        </p>
      </header>

      {/* Itens aceitos */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="font-title text-xl mb-4">Doando</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 list-disc pl-5">
          <li>Roupas</li>
          <li>Móveis</li>
          <li>Utensílios domésticos</li>
          <li>Brinquedos</li>
          <li>Materiais de Higiene e Limpeza</li>
          <li>Materiais de escritório</li>
          <li>Alimentos</li>
          <li>Entre outros</li>
        </ul>
        <p className="mt-4 text-neutral-700">
          Você pode contribuir optando pela melhor forma que se adapte às suas possibilidades. Dessa maneira, podemos
          manter a qualidade de nossas instalações, implementar melhorias e oferecer novas oportunidades aos muitos
          cidadãos que passam diariamente por nossas Unidades.
        </p>
      </section>

      {/* Transferência / Pix */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="font-title text-xl mb-4">Dados para transferência</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <dl className="grid grid-cols-[120px_1fr] gap-y-2">
            <dt className="text-neutral-500">Agência</dt>
            <dd className="font-medium">0001</dd>

            <dt className="text-neutral-500">Conta</dt>
            <dd className="font-medium">1694773-2</dd>

            <dt className="text-neutral-500">Instituição</dt>
            <dd className="font-medium">403 - Cora SCFI</dd>

            <dt className="text-neutral-500">Nome</dt>
            <dd className="font-medium">
              INSTITUTO PEDRO HENRIQUE DE DIREITOS HUMANOS
            </dd>

            <dt className="text-neutral-500">CNPJ</dt>
            <dd className="font-medium">31.146.036/0001-01</dd>
          </dl>

          <div className="rounded-lg bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-title text-lg mb-2">PIX</h3>
            <p className="text-neutral-700">
              <span className="font-medium">Chave:</span> 31146036000101
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Use o seu app do banco para pagar via PIX usando a chave acima.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
