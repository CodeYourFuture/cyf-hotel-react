export const Heading = ({ className, src, children }) => {
  return (
    <div>
      <header className={className}>
        <img src={src} alt={'logo'} />
        {children}
      </header>
    </div>
  )
}
