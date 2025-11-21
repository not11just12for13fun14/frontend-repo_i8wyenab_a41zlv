export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-12 md:py-16" data-fade>
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 mb-6" data-fade>
          {title}
        </h2>
        <div className="prose prose-neutral max-w-none text-[18.5px] leading-8" data-fade>
          {children}
        </div>
      </div>
    </section>
  )
}
