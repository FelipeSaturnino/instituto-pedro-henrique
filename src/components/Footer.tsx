import {
  SiInstagram,
  SiThreads,
  SiYoutube,
  SiLinkedin,
} from "react-icons/si";

export default function Footer() {
  return (
<footer className="bg-neutral-100 text-neutral-700 text-sm mt-10">
  <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 items-center gap-3">

    <div className="space-y-1 text-center md:text-left">
      <p>© 2025 Instituto Pedro Henrique de Direitos Humanos</p>
      <p>CNPJ 31.146.036/0001-01</p>
      <p>(11) 97682-0075</p>
      <p>Estrada da Cachoeira, 147 – Jardim Paulistano - São Paulo – SP</p>
    </div>

    <div className="flex justify-center md:justify-end gap-4">
      <SiInstagram className="h-5 w-5 hover:text-vermelho cursor-pointer" />
      <SiThreads className="h-5 w-5 hover:text-vermelho cursor-pointer" />
      <SiYoutube className="h-5 w-5 hover:text-vermelho cursor-pointer" />
      <SiLinkedin className="h-5 w-5 hover:text-vermelho cursor-pointer" />
    </div>
  </div>
</footer>


  );
}
