import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import { products as allProducts, type Product } from '../data/products'

interface ProductCollectionProps {
  variant?: 'teaser' | 'full'
  limit?: number
  ctaHref?: string
}

export default function ProductCollection({ variant = 'full', limit, ctaHref = '/products' }: ProductCollectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const count = limit ?? (variant === 'teaser' ? 6 : allProducts.length)
  const products = allProducts.slice(0, count)

  return (
    <section id="products" ref={sectionRef} className="bg-surface py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Our Collections
          </span>
          <h2 className="font-display text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            OBJECTS THAT COMPLETE
            <br />
            <span className="text-primary-container">THE STAY</span>
          </h2>
        </motion.div>

        <motion.p
          className="font-sans text-[14px] md:text-[16px] text-on-surface-variant leading-[1.7] max-w-[600px] mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          From leather desk accessories to glassware, amenity systems and
          decorative accents — every detail is designed to feel intentional.
        </motion.p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} isInView={isInView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 md:mt-24 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {variant === 'teaser' && (
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 px-5 md:px-7 py-2 md:py-2.5 border border-outline-variant/40 text-on-surface text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase hover:border-brass/50 hover:text-primary transition-colors duration-300"
            >
              View All Products
              <span aria-hidden>→</span>
            </Link>
          )}
          <a
            href="#contact"
            className="inline-flex items-center px-5 md:px-7 py-2 md:py-2.5 bg-primary text-on-primary text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-primary-container transition-colors duration-300"
          >
            Request Catalogue
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  index,
  isInView,
}: {
  product: Product
  index: number
  isInView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="group relative rounded-[4px] overflow-hidden border border-outline-variant/20 bg-surface-container-low cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
          style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Material chip */}
        <span className="absolute top-4 left-4 font-sans text-[8px] font-semibold tracking-[0.15em] uppercase text-on-surface bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {product.material}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-[16px] font-medium text-on-surface leading-[1.3] tracking-[0.02em]">
          {product.title}
        </h3>
      </div>

      {/* Hover lift effect */}
      <div
        className="absolute inset-0 transition-shadow duration-500"
        style={{
          boxShadow: hovered
            ? '0 20px 40px rgba(0,0,0,0.04)'
            : '0 0 0 rgba(0,0,0,0)',
        }}
      />
    </motion.div>
  )
}
