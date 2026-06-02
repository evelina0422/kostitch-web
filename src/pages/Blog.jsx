import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import { blogContent } from '../data'

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog() {
  return (
    <>
      <Seo
        title={blogContent.seo.title}
        description={blogContent.seo.description}
      />
      <section className="w-full pb-20">
        <Container>
          <div className="relative border-x border-border-line">
            <img
              src="/images/blog-hero.png"
              alt=""
              aria-hidden="true"
              width={1024}
              height={614}
              className="w-full h-auto block"
            />
            <h1 className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 right-0 px-4 sm:px-6 md:px-8 pb-0 font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream text-right drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {blogContent.title}
            </h1>
          </div>
          <div className="border-x border-cream bg-[#720e0c] py-12 md:py-16">
            <div className="text-right mb-24 md:mb-28">
              <p className="text-2xl md:text-3xl font-bold uppercase text-[#f8f6f1]/90 max-w-sm ml-auto mr-6 sm:mr-8 md:mr-10">
                {blogContent.subtitle}
              </p>
            </div>
            <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogContent.posts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-cream overflow-hidden hover:shadow-lg transition-all flex flex-col"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="bg-light aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-xs text-text-on-light/60 mb-2">
                        <span className="font-semibold text-accent uppercase tracking-wide text-xs">
                          {post.category}
                        </span>
                        <span aria-hidden="true">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-text-on-light mb-2">
                        <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-text-on-light/70 mb-3 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-3">
                        <span className="text-sm text-text-on-light/60">{formatDate(post.date)}</span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                        >
                          Read more
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
