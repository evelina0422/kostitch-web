export default function SectionHeader({title, subtitle, className = ''}) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-light mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-on-light/70 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
