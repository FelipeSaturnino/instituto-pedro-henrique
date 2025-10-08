import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contato | Instituto Pedro Henrique de Direitos Humanos",
  description:
    "Fale conosco: doações, voluntariado, parcerias e informações. Endereço e formulário de contato.",
};

export default function ContatoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="font-title text-3xl mb-2">Fale Conosco</h1>
        <p className="text-neutral-700">
          Estamos prontos para ouvir você. Seja para doar, apoiar, se voluntariar
          ou apenas conhecer nosso trabalho, entre em contato e faça parte dessa
          rede de cuidado e paz.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulário */}
        <ContactForm />

        {/* Mapa Google */}
        <section className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
          <iframe
            title="Mapa - Instituto Pedro Henrique de Direitos Humanos"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.108720825588!2d-46.706128!3d-23.456542499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefb9e06b5e2ff%3A0x623df1fa07f07960!2sInstituto%20Pedro%20Henrique%20de%20Direitos%20Humanos!5e0!3m2!1spt-BR!2sbr!4v1759878009804!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px]"
          ></iframe>
          <div className="p-4 border-t border-neutral-200">
            <p className="text-sm text-neutral-700">
              Estrada da Cachoeira, 147 — Jardim Paulistano, São Paulo — 02814-090
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
