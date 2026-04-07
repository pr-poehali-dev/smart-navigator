interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-sm uppercase tracking-[0.3em] font-light" style={{ color: "hsl(43, 74%, 58%)" }}>
          BRANDPOINT
        </div>
        <nav className="flex gap-10">
          <a
            href="#services"
            className="text-neutral-400 hover:text-amber-400 transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            Услуги
          </a>
          <a
            href="#contact"
            className="text-neutral-400 hover:text-amber-400 transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            Связаться
          </a>
        </nav>
      </div>
    </header>
  );
}
