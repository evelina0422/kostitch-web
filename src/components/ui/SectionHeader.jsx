export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  titleSizeClassName = 'text-3xl md:text-4xl lg:text-5xl',
  subtitleClassName = '',
  subtitleRedBar = false,
  subtitleBarClassName = '',
}) {
  const isLeft = align === 'left'
  return (
    <div className={`${isLeft ? 'text-left' : 'text-center'} mb-12 ${className}`}>
      <h2 className={`font-sans ${titleSizeClassName} font-bold text-text-on-light mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && subtitleRedBar ? (
        <div className={`flex justify-end w-full -mt-10 md:-mt-14 ${subtitleBarClassName}`}>
          <div className="relative w-[15rem] md:w-[19rem] pt-44 md:pt-52 lg:pt-60 pb-2 mr-6 md:mr-10">
            <div
              className="absolute bottom-0 right-0 top-[-2.5rem] md:top-[-3.5rem] lg:top-[-4.5rem] w-[9rem] md:w-[11rem] bg-[#bd1504]"
              aria-hidden
            />
            <p
              className={`relative z-10 text-right font-bold uppercase text-black text-lg sm:text-xl md:text-2xl leading-[1.1] tracking-wide pr-6 md:pr-8 ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          </div>
        </div>
      ) : (
        subtitle && (
          <p className={`text-lg md:text-xl text-text-on-light/70 max-w-3xl ${isLeft ? '' : 'mx-auto'} ${subtitleClassName}`}>
            {subtitle}
          </p>
        )
      )}
    </div>
  )
}
