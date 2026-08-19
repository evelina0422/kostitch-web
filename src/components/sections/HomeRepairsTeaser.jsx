import {Link} from 'react-router-dom'
import Container from '../layout/Container'
import {homeContent} from '../../data'

export default function HomeRepairsTeaser() {
  const {eyebrow, title, body, linkLabel, linkPath} = homeContent.repairsTeaser

  return (
    <section className="w-full leading-normal pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <div className="w-full bg-[#F2EEE9] rounded-xl shadow-[0_10px_28px_rgba(58,38,24,0.08)] px-8 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-accent mb-3">
            {eyebrow}
          </p>
          <h2 className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-text-on-light leading-tight mb-4 sm:mb-5">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-text-on-light/65 leading-relaxed mb-8 sm:mb-10 max-w-3xl">
            {body}
          </p>
          <Link
            to={linkPath}
            className="inline-block text-sm font-bold uppercase tracking-wide text-text-on-light underline underline-offset-[6px] decoration-text-on-light hover:text-accent hover:decoration-accent transition-colors"
          >
            {linkLabel} →
          </Link>
        </div>
      </Container>
    </section>
  )
}
