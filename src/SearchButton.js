export const SearchButton = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
