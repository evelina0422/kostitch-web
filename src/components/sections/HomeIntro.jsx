import {motion} from 'framer-motion'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import {homeContent} from '../../data'

const paperBackground = {
  backgroundImage: 'url(/images/hero-paper-tile.png?v=2)',
  backgroundSize: '360px 440px',
}

const FLAG_VIEWBOX = {width: 190, height: 100}
const STRIPE_COUNT = 13
const STRIPE_HEIGHT = FLAG_VIEWBOX.height / STRIPE_COUNT
const CANTON_WIDTH = 76
const CANTON_HEIGHT = STRIPE_HEIGHT * 7
const STAR_POSITIONS = [
  [15, 12],
  [38, 12],
  [61, 12],
  [26.5, 27],
  [49.5, 27],
  [15, 42],
  [38, 42],
  [61, 42],
]

function IntroBadge({label, icon}) {
  return (
    <div className="inline-flex flex-col items-center gap-1.5">
      {icon}
      <span className="text-xs font-bold uppercase tracking-widest text-text-on-light text-center whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

function UsaFlagIcon() {
  return (
    <svg
      viewBox={`0 0 ${FLAG_VIEWBOX.width} ${FLAG_VIEWBOX.height}`}
      className="w-[75px] h-auto"
      aria-hidden="true"
      role="presentation"
    >
      {Array.from({length: STRIPE_COUNT}, (_, index) => (
        <rect
          key={`stripe-${index}`}
          x="0"
          y={index * STRIPE_HEIGHT}
          width={FLAG_VIEWBOX.width}
          height={STRIPE_HEIGHT}
          fill={index % 2 === 0 ? '#D32F2F' : '#FAF7F2'}
        />
      ))}
      <rect x="0" y="0" width={CANTON_WIDTH} height={CANTON_HEIGHT} fill="#3A2618" />
      {STAR_POSITIONS.map(([x, y], index) => (
        <circle key={`star-${index}`} cx={x} cy={y} r="2.4" fill="#FAF7F2" />
      ))}
    </svg>
  )
}

const FLORIDA_PATH =
  'M817.5,145.6l-35.5-4.8l-4.8,5.5l10.2,30l-2.7,35.5l-28-6.8l-1.4-19.1h-28l-36.2,4.8l-221.2,13l-56-2L402.3,190l-17.1-28.7 H345l-45.1,3.4L58.2,193.4l-2,19.1l10.9,10.9l19.8,13.7l2,57.4l22.5-4.1l41-14.3l41-3.4l30-4.1l51.9,12.3l55.3,26.6l10.9,10.2 l19.8,7.5l10.9,13l2,18.4l21.8-8.9h26.6l24.6-13l25.3-24.6l21.2,1.4l3.4-7.5l-5.5-6.8l1.4-13l27.3-5.5h17.8L558,289l28.7,10.2 l16.4,25.3l18.4,6.8l7.5,23.2l23.2,10.9l10.9,17.8l13,4.1l35.5,8.9l8.9,21.2l20.5,25.3v64.9l-10.2,32.1l2,18.4l8.9,32.8l12.3,27.3 l5.5-3.4l10.2-30.7l-17.8-6.8l-2-4.1l10.9-4.1l30.7,6.8l1.4,10.9L771,624.2l-14.3,16.4l24.6,25.3l17.8,21.2l19.8,36.2l19.8,26.6 L853,784l12.3,2l10.9-14.3l12.3,7.5l17.8,27.3l4.1,24.6l21.2,30l5.5-8.9l26.6,2l24.6,15.7l23.2,35.5l5.5,23.2l2,19.8l7.5,6.8 l8.9,3.4l16.4-6.8l10.2-10.9l26.6-1.4l21.2-10.2l18.4-21.8l-3.4-13l-2-16.4l4.1-13l-2-13l16.4-8.9l2-23.2l-4.1-12.3l-3.4-81.9 l-8.9-51.9l-30.7-56l-24.6-39.6l-17.8-36.2l-19.8-19.8l-19.8-50.5l4.8-9.6l7.5-8.9l-10.9-19.8l-27.3-25.3l-32.8-37.6l-25.3-43 l-36.2-64.2l-25.3-66.2L853,147.7L817.5,145.6z M938.3,1051.6l16.4-4.1l8.9-1.4l10.2-15.7l15.7-10.9l8.9,3.4l11.6,2l2.7,7.5 l-23.9,8.2l-28.7,10.2l-15.7,8.2L938.3,1051.6z M1030.5,1017.5l8.2,7.5l18.4-14.3l36.2-28.7l25.3-26.6l17.1-45.1l6.8-11.6l1.4-23.2 l-4.8,3.4l-6.8,19.1l-10.2,31.4l-21.8,36.2l-30,28.7l-23.2,13L1030.5,1017.5z'

function FloridaIcon() {
  return (
    <svg
      viewBox="55 140 1060 920"
      className="h-[39px] w-auto"
      aria-hidden="true"
      role="presentation"
    >
      <path d={FLORIDA_PATH} fill="#3A2618" />
      <circle cx="920" cy="515" r="70" fill="#D32F2F" />
    </svg>
  )
}

function IntroBadges({primary, secondary}) {
  return (
    <div className="flex flex-wrap items-end gap-8 sm:gap-10 mt-6">
      <IntroBadge label={primary} icon={<UsaFlagIcon />} />
      <IntroBadge label={secondary} icon={<FloridaIcon />} />
    </div>
  )
}

export default function HomeIntro() {
  const {title, body, badge, badgeSecondary, image} = homeContent.intro

  return (
    <section className="pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 lg:pb-20 bg-cream bg-repeat" style={paperBackground}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="max-w-xl text-left"
          >
            <SectionHeader
              title={title}
              align="left"
              titleSizeClassName="text-2xl md:text-3xl lg:text-4xl"
              titleClassName="uppercase tracking-wide"
              className="mb-6"
            />
            <p className="text-base md:text-lg text-text-on-light/80 leading-relaxed">
              {body}
            </p>
            <IntroBadges primary={badge} secondary={badgeSecondary} />
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1}}
            className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="overflow-hidden border border-border-line shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
