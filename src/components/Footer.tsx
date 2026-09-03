export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-900 py-8 text-center text-xs text-slate-400">
      <div className="mx-auto max-w-5xl px-4">
        <p>© {currentYear} Bonecas de Papel — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
