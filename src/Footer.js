export const Footer = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  )
}
