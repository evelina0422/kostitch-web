import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react'
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

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogContent.posts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const relatedPosts = blogContent.posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${post.title} - Kostitch`}
        description={post.excerpt}
        ogImage={post.image}
      />
      <article className="pt-12 pb-20">
        <Container className="max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="font-semibold text-accent uppercase tracking-wide text-xs">
              {post.category}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-light mb-6"
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-on-light/60 mb-8">
            <span className="inline-flex items-center gap-1.5">
              <User size={15} />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} />
              {post.readTime}
            </span>
          </div>
        </Container>

        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-light aspect-[16/9] overflow-hidden border border-border-line mb-12"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>
        </Container>

        <Container className="max-w-3xl">
          <div className="space-y-6">
            {post.content.map((block, index) =>
              block.type === 'heading' ? (
                <h2
                  key={index}
                  className="font-sans text-2xl md:text-3xl font-bold text-text-on-light pt-4"
                >
                  {block.text}
                </h2>
              ) : (
                <p key={index} className="text-lg text-text-on-light/80 leading-relaxed">
                  {block.text}
                </p>
              )
            )}
          </div>
        </Container>
      </article>

      {relatedPosts.length > 0 && (
        <section className="pb-20">
          <Container>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-text-on-light mb-8">
              More from the Journal
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="bg-beige overflow-hidden border border-border-line hover:shadow-lg transition-all flex flex-col"
                >
                  <Link to={`/blog/${related.slug}`} className="block">
                    <div className="bg-light aspect-[16/10] overflow-hidden border-b border-border-line">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="font-semibold text-accent uppercase tracking-wide text-xs mb-2">
                      {related.category}
                    </span>
                    <h3 className="text-lg font-bold text-text-on-light mb-3">
                      <Link to={`/blog/${related.slug}`} className="hover:text-accent transition-colors">
                        {related.title}
                      </Link>
                    </h3>
                    <Link
                      to={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover transition-colors mt-auto"
                    >
                      Read more
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
