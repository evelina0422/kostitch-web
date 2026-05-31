import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../seo/Seo'
import Container from '../components/layout/Container'
import SectionHeader from '../components/ui/SectionHeader'
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
      <section className="pt-16 pb-20">
        <Container>
          <SectionHeader
            title={blogContent.title}
            subtitle={blogContent.subtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogContent.posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-beige rounded-lg overflow-hidden border border-border-line hover:shadow-lg transition-all flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="bg-light aspect-[16/10] overflow-hidden border-b border-border-line">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-sm text-text-on-light/60 mb-3">
                    <span className="font-semibold text-accent uppercase tracking-wide text-xs">
                      {post.category}
                    </span>
                    <span aria-hidden="true">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-on-light mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-text-on-light/70 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-line">
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
        </Container>
      </section>
    </>
  )
}
