export const LinkButton = ({ className, href, children }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}
