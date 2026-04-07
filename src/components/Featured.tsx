export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ backgroundColor: "#0a0806" }}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 relative overflow-hidden">
        <img
          src="/images/exterior.png"
          alt="Architectural visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,8,6,0.4) 0%, transparent 50%)" }} />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <div className="w-8 h-px mb-8" style={{ backgroundColor: "hsl(43, 74%, 58%)" }} />
        <h3 className="uppercase mb-6 text-xs tracking-[0.35em] font-light" style={{ color: "hsl(43, 74%, 58%)" }}>
          Комплексный брендинг для девелоперов
        </h3>
        <p className="text-2xl lg:text-4xl mb-10 leading-tight font-light" style={{ color: "hsl(45, 20%, 92%)" }}>
          От имени до оформления площадки — нейминг, бренд-платформа, экстерьерные и интерьерные визуализации,
          полиграфия, презентации и организация участия в выставках.
        </p>
        <button
          className="uppercase text-xs tracking-[0.3em] px-8 py-4 border w-fit transition-all duration-300"
          style={{ borderColor: "hsl(43, 74%, 58%)", color: "hsl(43, 74%, 58%)", backgroundColor: "transparent" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(43, 74%, 58%)";
            (e.currentTarget as HTMLElement).style.color = "#0a0806";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLElement).style.color = "hsl(43, 74%, 58%)";
          }}
        >
          Узнать больше
        </button>
      </div>
    </div>
  );
}
