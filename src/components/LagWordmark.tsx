interface LagWordmarkProps {
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center'
  tagline?: boolean
  dark?: boolean
}

/*
  LĂG brand lockup, recreated in code to match the mark shown on the product
  labels and intro video: the Gurmukhi (Punjabi) glyph "ਲਾਗ" in a deep maroon
  serif, the Latin "Lăg" wordmark beneath it, and the tagline in small tracked
  caps. "Lăg" is a Punjabi word — the logo uses Gurmukhi script throughout.
  No standalone logo file exists for this brand — this is the faithful
  in-code reproduction requested in place of one.
*/
export default function LagWordmark({ size = 'md', align = 'center', tagline = true, dark = false }: LagWordmarkProps) {
  const sizes = {
    sm: { mark: 'text-[28px]', latin: 'text-[14px]', tag: 'text-[7px]' },
    md: { mark: 'text-[44px] md:text-[56px]', latin: 'text-[18px] md:text-[22px]', tag: 'text-[8px] md:text-[9px]' },
    lg: { mark: 'text-[64px] md:text-[88px]', latin: 'text-[24px] md:text-[30px]', tag: 'text-[9px] md:text-[10px]' },
  }[size]

  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <span
        className={`font-serif ${sizes.mark} leading-none`}
        style={{ color: dark ? '#e8c4a0' : '#7a2020' }}
        lang="pa"
      >
        ਲਾਗ
      </span>
      <span
        className={`font-display italic ${sizes.latin} tracking-[0.06em] mt-1`}
        style={{ color: dark ? '#d8b978' : '#8a6d1f' }}
      >
        Lăg
      </span>
      {tagline && (
        <span
          className={`font-sans ${sizes.tag} tracking-[0.22em] uppercase mt-1.5 ${dark ? 'text-white/50' : 'text-on-surface-variant/55'}`}
        >
          A Bond Formed Without Permission
        </span>
      )}
    </div>
  )
}
