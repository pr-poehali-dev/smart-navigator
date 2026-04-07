export default function Footer() {
  return (
    <div
      className="relative h-[500px] sm:h-[700px] lg:h-[900px] max-h-[900px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+700px)] lg:h-[calc(100vh+900px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[700px] lg:h-[900px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-700px)] lg:top-[calc(100vh-900px)]">
          <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between" style={{ backgroundColor: "#0d0b08", borderTop: "1px solid hsl(43, 74%, 58%, 0.2)" }}>

            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 sm:mb-3 uppercase text-xs tracking-[0.3em] font-light" style={{ color: "hsl(43, 74%, 58%)" }}>Услуги</h3>
                <a href="#naming" className="hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base font-light" style={{ color: "hsl(45, 20%, 70%)" }}>
                  Нейминг и бренд
                </a>
                <a href="#visual" className="hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base font-light" style={{ color: "hsl(45, 20%, 70%)" }}>
                  Визуализации
                </a>
                <a href="#print" className="hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base font-light" style={{ color: "hsl(45, 20%, 70%)" }}>
                  Полиграфия
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 sm:mb-3 uppercase text-xs tracking-[0.3em] font-light" style={{ color: "hsl(43, 74%, 58%)" }}>Ещё</h3>
                <a href="#events" className="hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base font-light" style={{ color: "hsl(45, 20%, 70%)" }}>
                  Выставки и события
                </a>
                <a href="#sites" className="hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base font-light" style={{ color: "hsl(45, 20%, 70%)" }}>
                  Оформление площадок
                </a>
                <a href="#merch" className="hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base font-light" style={{ color: "hsl(45, 20%, 70%)" }}>
                  Мерч
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 sm:mb-3 uppercase text-xs tracking-[0.3em] font-light" style={{ color: "hsl(43, 74%, 58%)" }}>Контакты</h3>
                <a href="#contact" className="hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base font-light" style={{ color: "hsl(45, 20%, 70%)" }}>
                  Связаться
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1
                className="font-bold tracking-tight leading-none w-full"
                style={{
                  color: "hsl(43, 74%, 58%)",
                  fontSize: "clamp(2rem, 13vw, 14vw)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  letterSpacing: "-0.02em",
                }}
              >
                BRANDPOINT
              </h1>
              <p className="text-sm sm:text-base font-light" style={{ color: "hsl(45, 20%, 40%)" }}>
                {new Date().getFullYear()} BRANDPOINT
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
