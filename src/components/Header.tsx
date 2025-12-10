"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // links “normais” (sem o Doe)
  const links = [
    { href: "/", label: "Início" },
    { href: "/quem-somos", label: "Quem somos" },
    { href: "/projetos", label: "Projetos" },
    { href: "/transparencia", label: "Transparência" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-branco shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo responsivo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-[220px] h-[65px] md:w-[260px] md:h-[75px]">
            <Image
              src="/logo.png"
              alt="Logo do Instituto Pedro Henrique de Direitos Humanos"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 220px, 260px"
            />
          </div>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? "nav-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Botão DOE (sempre por último) */}
          <Link
            href="/doe"
            className="btn btn-vermelho"
          >
            Doe
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2 text-preto focus:outline-none focus:ring-2 focus:ring-vermelho rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-branco border-t border-neutral-200 shadow-md">
          <ul className="flex flex-col space-y-1 p-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      active
                        ? "text-vermelho bg-neutral-100"
                        : "text-preto hover:text-vermelho hover:bg-neutral-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* Botão DOE no mobile (destaque) */}
            <li className="pt-2">
              <Link
                href="/doe"
                className="btn btn-vermelho w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Doe
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
