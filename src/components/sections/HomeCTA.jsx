import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import Button from '../ui/Button'
import Container from '../layout/Container'

export default function HomeCTA() {
  return (
    <section className="py-20 bg-accent">
      <Container>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-text-on-dark/90 mb-8 max-w-2xl mx-auto">
            Get a custom quote tailored to your needs. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-gray-100">
                Request a Quote
                <ArrowRight className="inline-block ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-text-on-dark text-text-on-dark hover:bg-white/10">
                Book a Call
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
