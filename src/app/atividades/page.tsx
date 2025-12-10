import {
  BookOpen,
  Users,
  HeartHandshake,
  Shield,
  ShoppingBag,
  Droplets,
} from "lucide-react";

export const metadata = {
  title: "Atividades | Instituto Pedro Henrique de Direitos Humanos",
  description:
    "Conheça os projetos do Instituto Pedro Henrique de Direitos Humanos.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="font-title text-3xl mb-2">Atividades</h1>
        <p className="text-neutral-700">
          Conheça alguns dos projetos desenvolvidos pelo Instituto Pedro Henrique
          de Direitos Humanos junto à comunidade.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Semente do Saber */}
        <article className="border border-neutral-200 p-6 rounded-xl bg-white shadow-sm flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#009FE3]/10 text-[#009FE3] shrink-0">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-title text-xl mb-1 text-[#009FE3]">
              Semente do Saber
            </h2>
            <p className="text-neutral-800 leading-relaxed">
              Projeto educativo para crianças, com atividades lúdicas e reforço
              escolar, incentivando leitura, cidadania e vínculos familiares.
            </p>
          </div>
        </article>

        {/* Direitos Humanos na Comunidade */}
        <article className="border border-neutral-200 p-6 rounded-xl bg-white shadow-sm flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E30613]/10 text-[#E30613] shrink-0">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-title text-xl mb-1 text-[#E30613]">
              Direitos Humanos na Comunidade
            </h2>
            <p className="text-neutral-800 leading-relaxed">
              Atendimento comunitário com acolhimento, orientação jurídica,
              encaminhamento e promoção de direitos sociais.
            </p>
          </div>
        </article>

        {/* NAPSF */}
        <article className="border border-neutral-200 p-6 rounded-xl bg-white shadow-sm flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD100]/15 text-[#B38A00] shrink-0">
            <HeartHandshake className="h-6 w-6" />
          </div>
        <div>
            <h2 className="font-title text-xl mb-1 text-[#B38A00]">
              Núcleo de Apoio Psicossocial à Família – NAPSF
            </h2>
            <p className="text-neutral-800 leading-relaxed">
              Apoio psicossocial a famílias em situação de vulnerabilidade,
              com escuta, acolhimento e encaminhamento.
            </p>
          </div>
        </article>

        {/* GEDEVIM */}
        <article className="border border-neutral-200 p-6 rounded-xl bg-white shadow-sm flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E30613]/10 text-[#E30613] shrink-0">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-title text-xl mb-1 text-[#E30613]">
              GEDEVIM – Grupo de Estímulo à Desconstrução da Violência Contra a Mulher
            </h2>
            <p className="text-neutral-800 leading-relaxed">
              Grupo educativo com homens, promovendo reflexão, prevenção da
              violência doméstica e relações baseadas em respeito e cultura de paz.
            </p>
          </div>
        </article>

        {/* Bazar Social */}
        <article className="border border-neutral-200 p-6 rounded-xl bg-white shadow-sm flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#009FE3]/10 text-[#009FE3] shrink-0">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-title text-xl mb-1 text-[#009FE3]">
              Bazar Social da Dignidade
            </h2>
            <p className="text-neutral-800 leading-relaxed">
              Distribuição gratuita de roupas, garantindo dignidade, autonomia e
              fortalecimento de vínculos comunitários.
            </p>
          </div>
        </article>

        {/* Além do Básico */}
        <article className="border border-neutral-200 p-6 rounded-xl bg-white shadow-sm flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD100]/15 text-[#B38A00] shrink-0">
            <Droplets className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-title text-xl mb-1 text-[#B38A00]">
              Além do Básico
            </h2>
            <p className="text-neutral-800 leading-relaxed">
              Apoio mensal com alimentos e absorventes para mulheres, combatendo a
              insegurança alimentar e a pobreza menstrual.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
