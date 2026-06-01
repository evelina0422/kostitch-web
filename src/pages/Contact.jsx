import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'
import { Turnstile } from '@marsidev/react-turnstile'; //

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    defaultValues: {
      files: []
    }
  })
  // Inside your Contact function...
  const [token, setToken] = useState("");

  const onSubmit = async (data) => {
    console.log(data)
    setIsSubmitting(true)
    setError(null)

    if (!token) {
      setError("Please complete the security check.");
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData()

      // 1. Append standard text fields
      Object.keys(data).forEach(key => {
        if (key !== 'files') {
          formData.append(key, data[key]);
        }
      });

      // 2. Append multiple files correctly
      if (data.files && data.files.length > 0) {
        // Array.from is necessary because data.files is a FileList
        Array.from(data.files).forEach((file) => {
          // Note: The parser will collect all 'files' keys into result.files
          formData.append('files', file);
        });
      }

      // 3. Append the Turnstile token
      formData.append('cf_token', token);

      const response = await fetch('https://y42g73jm6egykrfjx7vogctn2i0hznab.lambda-url.us-west-2.on.aws/', {
        method: 'POST',
        body: formData, // Send as FormData (supports files)
        // Note: Don't set Content-Type header - browser will set it automatically with boundary
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      reset(); // Clear form
      setSelectedFiles([]); // Clear UI state
      //setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Failed to submit form. Please try again or contact us directly.')
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

    // Create a DataTransfer object to set files on the input
    const dataTransfer = new DataTransfer()
    files.forEach(file => dataTransfer.items.add(file))

    // Update react-hook-form value
    setValue('files', dataTransfer.files)
  }

  const handleFileChange = (e) => {
    const files = e.target.files
    const filesArray = Array.from(files)

    setSelectedFiles(filesArray)

    // Update react-hook-form's internal state
    setValue('files', files, { shouldValidate: true })
  }

  return (
    <>
      <Seo
        title="Contact Us - Kostitch"
        description="Get in touch with Kostitch for garment manufacturing quotes, consultations, and project inquiries. Request a quote or book a call today."
      />
      <section className="pt-16 pb-20">
        <Container>
          <div
            className="relative overflow-hidden mb-12 bg-cover bg-center min-h-[320px] md:min-h-[420px] flex items-center"
            style={{ backgroundImage: 'url(/images/contact-hero.png)' }}
          >
            <div className="relative px-6 sm:px-8 md:px-12 py-8 sm:py-12 max-w-xs sm:max-w-md">
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-light mb-3 sm:mb-4">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-text-on-light/80 leading-relaxed">
                Ready to start your project? We're here to help.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="h-full">
              <div className="bg-[#720e0c] p-8 h-full text-[#f8f6f1]">
                <h3 className="text-xl font-bold text-[#f8f6f1] mb-6">Contact Information</h3>
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
                    <Mail className="w-6 h-6 text-[#f8f6f1] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#f8f6f1] mb-1">Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-[#f8f6f1]/80 hover:text-white transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f8f6f1] mb-4 mt-12 pt-8">Business Hours</h3>
                <div className="space-y-2 text-[#f8f6f1]">
                  {siteConfig.businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{schedule.days}</span>
                      <span className="font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-beige border-2 border-green-500 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-on-light mb-2">Thank You!</h3>
                  <p className="text-text-on-light/70">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#720e0c] p-8 text-[#f8f6f1] [&_label]:text-[#f8f6f1] [&_input]:bg-[#f8f6f1] [&_input]:text-text-on-light [&_textarea]:bg-[#f8f6f1] [&_textarea]:text-text-on-light">
                  <h3 className="text-xl font-bold text-[#f8f6f1] mb-6">Quote</h3>

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
                        placeholder="+1 (XXX) XXX-XXXX"
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
                      <label className="block text-sm font-medium text-[#f8f6f1] mb-2">
                        File Upload (Optional)
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
                        <p className="text-[#f8f6f1]/70 text-sm mb-2">
                          {isDragging
                            ? 'Drop files here...'
                            : 'Drag & drop files here, or click to select'}
                        </p>
                        <p className="text-[#f8f6f1]/50 text-xs mb-3">
                          PDF, JPG, PNG, DOC, DOCX
                        </p>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        />
                        <label
                          htmlFor="file-upload"
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
                        onSuccess={(token) => setToken(token)}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
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
