import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { CheckCircle, Briefcase, Clock, MapPin } from 'lucide-react'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'
import { Turnstile } from '@marsidev/react-turnstile'

const perks = [
  {
    icon: Briefcase,
    title: 'Hands-On Craft',
    description: 'Work alongside experienced makers on high-quality garment production from sample to finished goods.',
  },
  {
    icon: Clock,
    title: 'Steady Schedule',
    description: 'Full-time and part-time roles with consistent hours and a supportive, team-oriented environment.',
  },
  {
    icon: MapPin,
    title: 'Local Team',
    description: `Join our team in ${siteConfig.address.city}, ${siteConfig.address.state}. No long commutes, just great work close to home.`,
  },
]

export default function Careers() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [token, setToken] = useState('')
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    defaultValues: {
      files: [],
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
      formData.append('formType', 'Job Application')

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
        throw new Error('Failed to submit application')
      }

      setIsSubmitted(true)
      reset()
      setSelectedFiles([])
    } catch (err) {
      console.error('Application submission error:', err)
      setError('Failed to submit your application. Please try again or email us directly.')
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
        title="Careers - Kostitch"
        description="Join the Kostitch team. Explore career opportunities in garment manufacturing and apply today to build a rewarding career with us."
      />
      <section className="pt-16 pb-20">
        <Container>
          <SectionHeader
            title="Careers at Kostitch"
            subtitle="Build a rewarding career in garment manufacturing. We're always looking for skilled, motivated people to join our team."
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-beige rounded-lg p-8 border border-border-line"
              >
                <perk.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-on-light mb-2">{perk.title}</h3>
                <p className="text-text-on-light/70">{perk.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-beige border-2 border-green-500 rounded-lg p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-on-light mb-2">Application Received!</h3>
                <p className="text-text-on-light/70">
                  Thank you for your interest in joining Kostitch. We'll review your application and reach out if there's a good fit.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-beige border border-border-line rounded-lg p-8">
                <h3 className="text-2xl font-bold text-text-on-light mb-2">Apply Now</h3>
                <p className="text-text-on-light/70 mb-6">
                  Tell us about yourself and attach your resume. We'll be in touch.
                </p>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
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
                      label="Position of Interest"
                      name="position"
                      placeholder="e.g., Sewing Machine Operator"
                      register={register}
                      error={errors.position}
                    />
                  </div>

                  <Input
                    label="Years of Experience"
                    name="experience"
                    placeholder="e.g., 3 years in apparel production"
                    register={register}
                    error={errors.experience}
                  />

                  <Textarea
                    label="Why do you want to join Kostitch?"
                    name="message"
                    placeholder="Tell us about your background and what you're looking for..."
                    register={register}
                    error={errors.message}
                    rows={6}
                  />

                  <div>
                    <label className="block text-sm font-medium text-text-on-light mb-2">
                      Resume / CV
                    </label>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${isDragging
                        ? 'border-accent bg-accent/5'
                        : 'border-border-line'
                        }`}
                    >
                      <p className="text-text-on-light/60 text-sm mb-2">
                        {isDragging
                          ? 'Drop files here...'
                          : 'Drag & drop your resume here, or click to select'}
                      </p>
                      <p className="text-text-on-light/40 text-xs mb-3">
                        PDF, JPG, PNG, DOC, DOCX
                      </p>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="inline-block cursor-pointer bg-beige text-text-on-light px-4 py-2 rounded-lg hover:bg-border-line transition-colors text-sm border border-border-line"
                      >
                        Choose Files
                      </label>
                      {selectedFiles.length > 0 && (
                        <div className="mt-4 text-left">
                          <p className="text-text-on-light/70 text-sm font-semibold mb-2">
                            Selected files ({selectedFiles.length}):
                          </p>
                          <ul className="space-y-1">
                            {selectedFiles.map((file, index) => (
                              <li key={index} className="text-text-on-light/60 text-xs">
                                📎 {file.name} ({(file.size / 1024).toFixed(1)} KB)
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
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
