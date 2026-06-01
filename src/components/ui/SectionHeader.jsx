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
  const titleClasses = `font-sans ${titleSizeClassName} font-bold leading-[1.1] tracking-wide ${titleClassName}`

  return (
    <div className={`${isLeft ? 'text-left' : 'text-center'} mb-12 ${className}`}>
      {subtitle && subtitleRedBar ? (
        <>
          <h2 className={`hidden md:block text-text-on-light mb-4 ${titleClasses}`}>{title}</h2>
          <div className={`flex justify-end w-full md:-mt-14 ${subtitleBarClassName}`}>
            <div className="relative w-[13.5rem] sm:w-[16rem] md:w-[19rem] px-4 py-5 sm:px-5 sm:py-6 md:px-0 md:py-0 md:pt-52 lg:pt-60 md:pb-2 mr-4 sm:mr-6 md:mr-10">
              <div
                className="absolute inset-0 md:inset-auto md:bottom-0 md:right-0 md:top-[-3.5rem] lg:top-[-4.5rem] md:w-[11rem] bg-[#bd1504]"
                aria-hidden
              />
              <h2
                className={`relative z-10 md:hidden text-right text-black ${titleClasses} pr-1`}
              >
                {title}
              </h2>
              <p
                className={`relative z-10 hidden md:block text-right font-bold uppercase text-black text-lg sm:text-xl md:text-2xl leading-[1.1] tracking-wide pr-6 md:pr-8 ${subtitleClassName}`}
              >
                {subtitle}
              </p>
            </div>
          </div>
          <p
            className={`md:hidden mt-6 text-base sm:text-lg text-text-on-light/70 max-w-3xl ${isLeft ? '' : 'mx-auto'} ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        </>
      ) : (
        <>
          <h2 className={`text-text-on-light mb-4 ${titleClasses}`}>{title}</h2>
          {subtitle && (
            <p className={`text-lg md:text-xl text-text-on-light/70 max-w-3xl ${isLeft ? '' : 'mx-auto'} ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
        </>
      )}
    </div>
  )
}
