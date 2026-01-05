import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {motion} from 'framer-motion'
import {Mail, Phone, MapPin, CheckCircle} from 'lucide-react'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import {siteConfig} from '../data/siteConfig'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {register, handleSubmit, formState: {errors}, reset} = useForm()

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <>
      <Seo
        title="Contact Us - Kostitch"
        description="Get in touch with Kostitch for garment manufacturing quotes, consultations, and project inquiries. Request a quote or book a call today."
      />
      <section className="pt-16 pb-20">
        <Container>
          <SectionHeader
            title="Get in Touch"
            subtitle="Ready to start your project? We're here to help."
          />
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-beige rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-text-on-light mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-text-on-light mb-1">Address</div>
                      <div className="text-text-on-light/70">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-text-on-light mb-1">Phone</div>
                      <a href={`tel:${siteConfig.phone}`} className="text-text-on-light/70 hover:text-accent transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-text-on-light mb-1">Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-text-on-light/70 hover:text-accent transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-beige rounded-lg p-8">
                <h3 className="text-xl font-bold text-text-on-light mb-4">Business Hours</h3>
                <div className="space-y-2 text-text-on-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <motion.div
                  initial={{opacity: 0, scale: 0.95}}
                  animate={{opacity: 1, scale: 1}}
                  className="bg-beige border-2 border-green-500 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-on-light mb-2">Thank You!</h3>
                  <p className="text-text-on-light/70">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-beige border border-border-line rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-text-on-light mb-6">Request a Quote</h3>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        name="name"
                        placeholder="Your full name"
                        register={register}
                        error={errors.name}
                        required
                      />
                      <Input
                        label="Company"
                        name="company"
                        placeholder="Company name"
                        register={register}
                        error={errors.company}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        register={register}
                        error={errors.email}
                        required
                      />
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        register={register}
                        error={errors.phone}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Product Type"
                        name="productType"
                        placeholder="e.g., T-shirts, Dresses"
                        register={register}
                        error={errors.productType}
                      />
                      <Input
                        label="Estimated Quantity"
                        name="quantity"
                        type="number"
                        placeholder="e.g., 1000"
                        register={register}
                        error={errors.quantity}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Target Price (per unit)"
                        name="targetPrice"
                        type="number"
                        placeholder="USD"
                        register={register}
                        error={errors.targetPrice}
                      />
                      <Input
                        label="Target Date"
                        name="targetDate"
                        type="date"
                        register={register}
                        error={errors.targetDate}
                      />
                    </div>

                    <Textarea
                      label="Message"
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      register={register}
                      error={errors.message}
                      rows={6}
                    />

                    <div>
                      <label className="block text-sm font-medium text-text-on-light mb-2">
                        File Upload (Optional)
                      </label>
                      <div className="border-2 border-dashed border-border-line rounded-lg p-6 text-center">
                        <p className="text-text-on-light/60 text-sm">
                          Tech packs, designs, or reference images can be uploaded here
                        </p>
                        <input
                          type="file"
                          className="mt-2 text-sm text-text-on-light/60"
                          multiple
                          disabled
                        />
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
