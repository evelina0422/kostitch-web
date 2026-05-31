export default function SectionHeader({title, subtitle, align = 'center', className = '', titleClassName = '', titleSizeClassName = 'text-3xl md:text-4xl lg:text-5xl', subtitleClassName = ''}) {
  const isLeft = align === 'left'
  return (
    <div className={`${isLeft ? 'text-left' : 'text-center'} mb-12 ${className}`}>
      <h2 className={`font-sans ${titleSizeClassName} font-bold text-text-on-light mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-text-on-light/70 max-w-3xl ${isLeft ? '' : 'mx-auto'} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
