interface SectionHeadingProps {
  title: string
  light?: boolean
  className?: string
}

export default function SectionHeading({ title, light = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`font-display text-3xl md:text-5xl leading-tight ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
    </div>
  )
}
