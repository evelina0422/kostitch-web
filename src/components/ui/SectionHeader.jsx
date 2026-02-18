export default function SectionHeader({title, subtitle, className = '', variant = 'dark'}) {
  const textColor = variant === 'light'
    ? 'text-text-on-light'
    : 'text-white'

  const subtextColor = variant === 'light'
    ? 'text-text-on-light/70'
    : 'text-white/80'

  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl ${subtextColor} max-w-3xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
