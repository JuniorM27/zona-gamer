
const NewsCard = ({ image, title, description, date, category, href }) => {
    return (
        <article className="m-8 bg-[var(--bg-card)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-medium)] transition-all duration-300  animate-[fadeInUp_0.8s_ease-out] border-[1px] border-solid border-[rgba(255, 225, 255, 0.1)] even:delay-200 hover:shadow-[var(--shadow-large)] ">
            <div className="relative h-[200px] overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-101" />
                <div className="absolute top-[var(--spacing-md)] left-[var(--spacing-md)]">
                    <span className="color-[var(--text-primary)] text-[0.8rem] font-semibold text-uppercase tracking-[1px]">{category}</span>
                </div>
            </div>
            <div className="flex flex-col min-h-200 sm:p-[var(--spacing-md)] p-[var(--spacing-lg)]">
                <h3 className="color-[var(--text-primary)] mb-[var(--spacing-md)] text-[1.2rem] shrink">{title}</h3>
                <p className="color-[var(--text-muted)] mb-[var(--spacing-md)] grow text-[0.95rem] display: -webkit-box -webkit-line-clamp: 4 -webkit-box-orient: vertical overflow-hidden text-ellipsis">{description}</p>
                <div className="flex justify-between items-center shrink-0 pt-[var(--spacing-sm)] border-t border-solid border-t-[rgba(225, 255, 255, 0.1)]">
                    <span className="color-[var(--text-dark)] text-[0.8rem]">{date}</span>
                    <a href={href} target="_blank" className="btn-secondary">Leer más</a>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;