import {
  ContainerScroll,
  ContainerSticky,
  GalleryContainer,
  GalleryCol,
  ContainerStagger,
  ContainerAnimated,
} from './ui/container-scroll'
import { lagProducts, type LagProduct } from '../data/lagProducts'
import LagWordmark from './LagWordmark'

/*
  LĂG 3D scroll gallery (Aceternity "container scroll" pattern, re-themed to
  Interiority). The bottle grid starts tilted back in 3D and flattens as you
  scroll, with the three columns parallaxing at different speeds.

  The intro copy sits in its OWN block above the gallery (not inside the sticky
  scroll zone) so the text never overlaps the images, on mobile or desktop.
*/

// Twelve single-bottle shots across three columns (4 / 4 / 4).
const columns: LagProduct[][] = [
  [lagProducts[0], lagProducts[3], lagProducts[6], lagProducts[9]],
  [lagProducts[1], lagProducts[4], lagProducts[7], lagProducts[10]],
  [lagProducts[2], lagProducts[5], lagProducts[8], lagProducts[11]],
]

const yRanges: string[][] = [
  ['0%', '-8%'],
  ['0%', '-16%'],
  ['0%', '-6%'],
]

function Bottle({ p }: { p: LagProduct }) {
  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-[14px] md:rounded-[18px] ring-1 ring-black/[0.06] shadow-[0_18px_50px_-20px_rgba(42,40,38,0.5)]"
      style={{ backgroundColor: p.tint }}
    >
      <img
        src={p.image}
        alt={`${p.name} ${p.type}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/55 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-4">
        <h3 className="font-display text-[12px] sm:text-[15px] md:text-[18px] leading-[1.1] text-white">
          {p.name}
        </h3>
        <span className="hidden sm:block font-sans text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/70 mt-0.5">
          {p.type}
        </span>
      </div>
    </div>
  )
}

interface LagGallery3DProps {
  /* Set false on pages that already show a fuller heading elsewhere (e.g. /lag,
     where LagTimeline immediately follows with its own "Botanical waters..."
     heading), avoids showing the same headline twice on one page. */
  showHeading?: boolean
}

export default function LagGallery3D({ showHeading = true }: LagGallery3DProps) {
  return (
    <div className="bg-surface">
      {/* Intro copy, its own block, blurs in with a stagger. */}
      {showHeading && (
        <ContainerStagger className="px-6 pt-24 md:pt-36 pb-10 md:pb-16 text-center max-w-[900px] mx-auto">
          <ContainerAnimated className="mb-6 flex justify-center">
            <LagWordmark size="sm" tagline={false} />
          </ContainerAnimated>
          <ContainerAnimated>
            <h2 className="font-display text-[32px] sm:text-[44px] md:text-[62px] font-semibold leading-[1.05] tracking-[0.02em] text-on-surface">
              Botanical waters, distilled to their most honest form.
            </h2>
          </ContainerAnimated>
          <ContainerAnimated className="font-sans text-[13px] md:text-[16px] text-on-surface-variant leading-[1.8] max-w-[520px] mx-auto mt-6">
            Steam-distilled from a single flower, leaf, or root, no synthetics, no
            pretence. Scroll to bring the collection into view.
          </ContainerAnimated>
        </ContainerStagger>
      )}

      {/* Tilting 3D gallery, sticky zone, separate from the copy above. */}
      <ContainerScroll className={`min-h-[140vh] ${showHeading ? '' : 'pt-16 md:pt-24'}`}>
        <ContainerSticky className="h-screen">
          <GalleryContainer className="mx-auto max-w-[1120px] px-6 py-[8vh]">
            {columns.map((col, i) => (
              <GalleryCol key={i} yRange={yRanges[i]} className={i === 1 ? 'mt-[-6%]' : ''}>
                {col.map((p) => (
                  <Bottle key={p.id} p={p} />
                ))}
              </GalleryCol>
            ))}
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}
