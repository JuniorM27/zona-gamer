
const featuredArticle = () => {
    return (
        <section className="m-0 mb-[var(--spacing-xxl)] mt-[var(--spacing-xxl)]">
            <div className="text-center mb-[var(--spacing-xxl)] animate-[fadeInUp_0.8s_ease-out]">
                <h2 className="color-[var(--text-primary)] mb-[var(--spacing-md)] text-[2rem] relative font-[var(--font-primary)]">🔥 Noticia Destacada</h2>
            </div>
            <article className="grid grid-cols-2 gap-[var(--spacing-xl)] bg-[var(--bg-card)] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-large)] transition-all duration-300 animate-[fadeInLeft_0.8s_ease-out] hover:shadow-[var(--shadow-large), var(--shadow-glow)] hover:-translate-y-[5px]">
                <div className="relative h-[200px] overflow-hidden">
                    <img src="" alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="absolute top-[var(--spacing-md)] left-[var(--spacing-md)] bg-[var(--gradient-primary)] text-[0.8rem] font-semibold text-uppercase tracking-[1px] p-[var(--spacing-xs), var('--spacing-md')] rounded-[var(--radius-sm)] text-[var(--text-primary)]">EXCLUSIVO</div>
                </div>
                <div className="flex flex-col justify-between p-[var(--spacing-xl)] [&>p]:mb-[var(--spacing-md)] [&>p]:text-[var(--text-secondary)]">
                    <h2 className="text-[1.2rem] text-[var(--text-primary)] mb-[var(--spacing-md)] leading-[1.2]">Stellar Blade llega a PC el 11 de Junio</h2>
                    <div className="flex gap-[var(--spacing-md)] mb-[var(--spacing-md)] flex-wrap [&>span]:text-[0.9rem] [&>span]:bg-[rgba(255, 255, 255, 0.05)] [&>span]:text-[var(--text-muted)] [&>span]:p-[var(--spacing-xs), var(--spacing-sm)] [&>span]:rounded-[var(--radius-sm)]">
                        <span className="bg-[rgba(255, 255, 255, 0.05)] text-[var(--primary-color)]">Action RPG</span>
                        <span>12 de Junio 2025</span>
                        <span>Por: ZonaGamer</span>
                    </div>
                    <p>
                        ¡Grandes noticias para los fans de los action RPG! Shift Up ha anunciado
                        que Stellar Blade, el aclamado título de PS5, llegará a PC el próximo 11
                        de junio. Esta versión incluirá mejoras gráficas y nuevo contenido que
                        también estará disponible para los jugadores de consola.
                    </p>
                    <p>
                        La versión de PC soportará NVIDIA DLSS 4, AMD FSR 3 y tasas de frames
                        desbloqueadas para exprimir al máximo el potencial de tu equipo.
                    </p>
                    <div className="flex gap-[var(--spacing-sm)] mb-[var(--spacing-lg)] flex-wrap [&>span]:bg-[rgba(0, 191, 255, 0.2)] [&>span]:text-[var(--secondary-color)] [&>span]:p-[var(--spacing-xs), var(--spacing-sm)] [&>span]:font-medium [&>span]:text-[0.8rem] [&>span]:rounded-[var(--radius-sm)]">
                        <span class="tag">PC Gaming</span>
                        <span class="tag">Action RPG</span>
                        <span class="tag">Stellar Blade</span>
                    </div>
                    <a
                        href="https://blog.playstation.com/2025/05/15/stellar-blade-launches-june-11-on-pc-specs-and-features-revealed/"
                        className="display: inline-block items-center gap-[var(--spacing-sm)] p-[var(--spacing-md), var(--spacing-lg)] rounded-[var(--radius-md)] decoration-none font-semibold uppercase tracking-[1px] transition-all duration-300 border-none cursor-pointer text-[0.9rem]"
                        target="_blank"
                        >Leer Artículo Completo
                    </a>
                </div>
            </article>
        </section>
    )
}