import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  Scissors,
  Ruler,
  Shirt,
  Sparkles,
  Wrench,
  Pin,
  Circle,
  Layers,
  CheckCircle,
  MapPin,
  Phone,
  Clock,
} from 'lucide-react'
import { Turnstile } from '@marsidev/react-turnstile'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import { repairsContent } from '../data'
import { siteConfig } from '../data/siteConfig'

const iconMap = {
  scissors: Scissors,
  ruler: Ruler,
  shirt: Shirt,
  sparkles: Sparkles,
  wrench: Wrench,
  pin: Pin,
  circle: Circle,
  layers: Layers,
}

export default function Repairs() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [token, setToken] = useState('')
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    defaultValues: {
      files: [],
      serviceType: '',
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setError(null)

    if (!token) {
      setError('Please complete the security check.')
      setIsSubmitting(false)
      return
    }

    try {
      const formData = new FormData()
      formData.append('formType', 'Tailor & Repairs')

      Object.keys(data).forEach((key) => {
        if (key !== 'files') {
          formData.append(key, data[key])
        }
      })

      if (data.files && data.files.length > 0) {
        Array.from(data.files).forEach((file) => {
          formData.append('files', file)
        })
      }

      formData.append('cf_token', token)

      const response = await fetch('https://y42g73jm6egykrfjx7vogctn2i0hznab.lambda-url.us-west-2.on.aws/', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit request')
      }

      setIsSubmitted(true)
      reset()
      setSelectedFiles([])
    } catch (err) {
      console.error('Tailor & repairs submission error:', err)
      setError('Failed to submit your request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    setSelectedFiles(files)

    const dataTransfer = new DataTransfer()
    files.forEach((file) => dataTransfer.items.add(file))
    setValue('files', dataTransfer.files)
  }

  const handleFileChange = (e) => {
    const files = e.target.files
    setSelectedFiles(Array.from(files))
    setValue('files', files, { shouldValidate: true })
  }

  return (
    <>
      <Seo
        title={repairsContent.seo.title}
        description={repairsContent.seo.description}
      />
      <section className="pt-16 pb-20">
        <Container>
          <div
            className="relative overflow-hidden mb-12 bg-cover bg-center min-h-[320px] md:min-h-[420px] flex items-center"
            style={{ backgroundImage: 'url(/images/home-intro-workshop.png)' }}
          >
            <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
            <div className="relative px-6 sm:px-8 md:px-12 pt-14 pb-8 sm:py-12 sm:max-w-lg">
              <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                {repairsContent.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed">
                {repairsContent.subtitle}
              </p>
            </div>
          </div>

          <p className="text-base md:text-lg text-text-on-light/75 leading-relaxed max-w-3xl mb-16">
            {repairsContent.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-20">
            {repairsContent.services.map((group) => (
              <div key={group.group}>
                <h2 className="font-sans text-xl md:text-2xl font-bold uppercase tracking-wide text-text-on-light mb-6">
                  {group.group}
                </h2>
                <div className="border border-border-line">
                  {group.items.map((item, index) => {
                    const Icon = iconMap[item.icon]
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06, duration: 0.4 }}
                        className={`p-6 sm:p-7 ${index > 0 ? 'border-t border-border-line' : ''}`}
                      >
                        {Icon && (
                          <Icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.6} />
                        )}
                        <h3 className="font-sans text-lg font-bold text-text-on-light mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-on-light/65 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-beige p-6 sm:p-8 lg:p-10 mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-on-light/50 mb-3">
              How it works
            </p>
            <h2 className="font-sans text-2xl md:text-3xl font-bold leading-[1.1] tracking-wide text-text-on-light mb-10">
              From drop-off to pick-up
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {repairsContent.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <p className="text-sm text-text-on-light/60 mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div className="w-10 h-px bg-text-on-light/30 mb-6" aria-hidden="true" />
                  <h3 className="font-sans text-lg font-bold text-text-on-light mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-on-light/65 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="h-full">
              <div className="bg-[#720e0c] p-8 h-full text-[#f8f6f1]">
                <h3 className="text-xl font-bold text-[#f8f6f1] mb-4">Visit the workshop</h3>
                <p className="text-[#f8f6f1]/80 mb-8 leading-relaxed">
                  Drop garments off at our Orlando shop during business hours, or send a request and we’ll follow up with next steps.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#f8f6f1] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#f8f6f1] mb-1">Address</div>
                      <div className="text-[#f8f6f1]/80">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#f8f6f1] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#f8f6f1] mb-1">Phone</div>
                      <a href={`tel:${siteConfig.phone}`} className="text-[#f8f6f1]/80 hover:text-white transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#f8f6f1] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#f8f6f1] mb-1">Hours</div>
                      <div className="space-y-1 text-[#f8f6f1]/80">
                        {siteConfig.businessHours.map((schedule) => (
                          <div key={schedule.days}>
                            {schedule.days}: {schedule.hours}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-beige border-2 border-green-500 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-on-light mb-2">Request received</h3>
                  <p className="text-text-on-light/70">
                    Thanks for reaching out. We’ll review your request and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-[#720e0c] p-8 text-[#f8f6f1] [&_label]:text-[#f8f6f1] [&_input]:bg-[#f8f6f1] [&_input]:text-text-on-light [&_textarea]:bg-[#f8f6f1] [&_textarea]:text-text-on-light [&_select]:bg-[#f8f6f1] [&_select]:text-text-on-light"
                >
                  <h3 className="text-xl font-bold text-[#f8f6f1] mb-2">{repairsContent.form.title}</h3>
                  <p className="text-[#f8f6f1]/80 mb-6">{repairsContent.form.description}</p>

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
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        register={register}
                        error={errors.email}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (XXX) XXX-XXXX"
                        register={register}
                        error={errors.phone}
                      />
                      <Input
                        label="Garment type"
                        name="garmentType"
                        placeholder="e.g., Pants, jacket, uniform"
                        register={register}
                        error={errors.garmentType}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="w-full">
                        <label htmlFor="serviceType" className="block text-sm font-medium mb-1">
                          Service needed
                        </label>
                        <select
                          id="serviceType"
                          {...register('serviceType')}
                          className="w-full px-4 py-3 border border-border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {repairsContent.form.serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <Input
                        label="Number of pieces"
                        name="quantity"
                        type="number"
                        placeholder="e.g., 2"
                        register={register}
                        error={errors.quantity}
                      />
                    </div>

                    <Textarea
                      label="Details"
                      name="message"
                      placeholder="Describe the fit issue, damage, or repair you’d like us to handle..."
                      register={register}
                      error={errors.message}
                      rows={5}
                      required
                    />

                    <div>
                      <label className="block text-sm font-medium text-[#f8f6f1] mb-2">
                        Photos of the garment (optional)
                      </label>
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                          isDragging ? 'border-accent bg-accent/5' : 'border-border-line'
                        }`}
                      >
                        <p className="text-[#f8f6f1]/70 text-sm mb-2">
                          {isDragging ? 'Drop files here...' : 'Drag & drop photos here, or click to select'}
                        </p>
                        <p className="text-[#f8f6f1]/50 text-xs mb-3">
                          JPG, PNG, PDF
                        </p>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          id="repair-file-upload"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                        <label
                          htmlFor="repair-file-upload"
                          className="inline-block cursor-pointer bg-[#f8f6f1] !text-text-on-light px-4 py-2 rounded-lg hover:bg-white transition-colors text-sm"
                        >
                          Choose Files
                        </label>
                        {selectedFiles.length > 0 && (
                          <div className="mt-4 text-left">
                            <p className="text-[#f8f6f1]/80 text-sm font-semibold mb-2">
                              Selected files ({selectedFiles.length}):
                            </p>
                            <ul className="space-y-1">
                              {selectedFiles.map((file, index) => (
                                <li key={index} className="text-[#f8f6f1]/70 text-xs">
                                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                      </div>
                    )}

                    <div className="mt-6 flex justify-center">
                      <Turnstile
                        siteKey="0x4AAAAAABDoDGnW10n7BTtL"
                        onSuccess={(t) => setToken(t)}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Request a Quote'}
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
