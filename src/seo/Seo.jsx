import {useEffect} from 'react'

export default function Seo({title, description, ogImage}) {
  useEffect(() => {
    document.title = title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const ogImg = document.querySelector('meta[property="og:image"]')

    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:title')
      meta.content = title
      document.head.appendChild(meta)
    }

    if (ogDesc) {
      ogDesc.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:description')
      meta.content = description
      document.head.appendChild(meta)
    }

    if (ogImg && ogImage) {
      ogImg.setAttribute('content', ogImage)
    } else if (ogImage) {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:image')
      meta.content = ogImage
      document.head.appendChild(meta)
    }
  }, [title, description, ogImage])

  return null
}
