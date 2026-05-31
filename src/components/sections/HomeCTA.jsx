import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import Button from '../ui/Button'
import Container from '../layout/Container'

export default function HomeCTA() {
  return (
    <section className="py-12 bg-accent">
      <Container>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center"
        >
          <h2 className="font-magnolia text-5xl md:text-6xl lg:text-7xl font-bold text-text-on-dark mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base text-text-on-dark/90 mb-8 max-w-md mx-auto">
            Get a custom quote tailored to your needs. Our team is ready to bring your vision to life.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-light text-accent hover:bg-beige">
                Quote
                <ArrowRight className="inline-block ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
