"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "success" | "error";
type Fields = { nome: string; email: string; telefone: string; assunto: string; mensagem: string; };
type Errors = Partial<Record<keyof Fields, string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fields, setFields] = useState<Fields>({ nome:"", email:"", telefone:"", assunto:"", mensagem:"" });
  const [errors, setErrors] = useState<Errors>({});

  function validate(f: Fields): Errors {
    const e: Errors = {};
    if (!f.nome.trim()) e.nome = "Informe seu nome.";
    if (!f.email.trim()) e.email = "Informe um e-mail válido.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "E-mail inválido.";
    if (!f.telefone.trim()) e.telefone = "Informe seu telefone/WhatsApp.";
    if (!f.assunto.trim()) e.assunto = "Informe o assunto.";
    if (!f.mensagem.trim()) e.mensagem = "Escreva sua mensagem.";
    return e;
  }

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function handleChange<K extends keyof Fields>(key: K, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      if (key === "email") {
        if (!value.trim()) next.email = "Informe um e-mail válido.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) next.email = "E-mail inválido.";
        else delete next.email;
      } else {
        if (!value.trim()) next[key] = "Campo obrigatório.";
        else delete next[key];
      }
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const current = { ...fields };
    const v = validate(current);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    try {
      const data = new FormData();
      data.append("Nome", current.nome);
      data.append("Email", current.email);
      data.append("Telefone", current.telefone);
      data.append("Assunto", current.assunto);
      data.append("Mensagem", current.mensagem);

      const response = await fetch("https://formsubmit.co/contato@institutopedrohenrique.org.br", {
        method: "POST", body: data,
      });

      if (response.ok) {
        setStatus("success");
        setFields({ nome:"", email:"", telefone:"", assunto:"", mensagem:"" });
        setErrors({});
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (err: boolean) =>
    `mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
      err ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-azul"
    }`;

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-preto">
            Nome <span className="text-vermelho">*</span>
          </label>
          <input id="nome" name="Nome" type="text" required
            value={fields.nome} onChange={(e)=>handleChange("nome", e.target.value)}
            className={inputClass(!!errors.nome)} aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "err-nome" : undefined} placeholder="Seu nome completo"/>
          {errors.nome && <p id="err-nome" className="mt-1 text-sm text-red-600">{errors.nome}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-preto">
              E-mail <span className="text-vermelho">*</span>
            </label>
            <input id="email" name="Email" type="email" required
              value={fields.email} onChange={(e)=>handleChange("email", e.target.value)}
              className={inputClass(!!errors.email)} aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined} placeholder="seuemail@exemplo.com"/>
            {errors.email && <p id="err-email" className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-preto">
              Telefone/WhatsApp <span className="text-vermelho">*</span>
            </label>
            <input id="telefone" name="Telefone" type="tel" required
              value={fields.telefone} onChange={(e)=>handleChange("telefone", e.target.value)}
              className={inputClass(!!errors.telefone)} aria-invalid={!!errors.telefone}
              aria-describedby={errors.telefone ? "err-telefone" : undefined} placeholder="(11) 90000-0000"/>
            {errors.telefone && <p id="err-telefone" className="mt-1 text-sm text-red-600">{errors.telefone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="assunto" className="block text-sm font-medium text-preto">
            Assunto <span className="text-vermelho">*</span>
          </label>
          <input id="assunto" name="Assunto" type="text" required
            value={fields.assunto} onChange={(e)=>handleChange("assunto", e.target.value)}
            className={inputClass(!!errors.assunto)} aria-invalid={!!errors.assunto}
            aria-describedby={errors.assunto ? "err-assunto" : undefined} placeholder="Como podemos ajudar?"/>
          {errors.assunto && <p id="err-assunto" className="mt-1 text-sm text-red-600">{errors.assunto}</p>}
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-preto">
            Mensagem <span className="text-vermelho">*</span>
          </label>
          <textarea id="mensagem" name="Mensagem" required rows={6}
            value={fields.mensagem} onChange={(e)=>handleChange("mensagem", e.target.value)}
            className={inputClass(!!errors.mensagem)} aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? "err-mensagem" : undefined} placeholder="Escreva sua mensagem…"/>
          {errors.mensagem && <p id="err-mensagem" className="mt-1 text-sm text-red-600">{errors.mensagem}</p>}
        </div>

        <div className="pt-2">
          <button
  type="submit"
  className="btn btn-vermelho"
  disabled={hasErrors && status === "idle"}
>
  Enviar mensagem
</button>


        </div>

        {status === "success" && <p className="text-sm text-green-600 font-medium mt-2">✅ Mensagem enviada com sucesso!</p>}
        {status === "error" && <p className="text-sm text-red-600 font-medium mt-2">❌ Erro ao enviar mensagem. Tente novamente.</p>}
      </form>
    </section>
  );
}
