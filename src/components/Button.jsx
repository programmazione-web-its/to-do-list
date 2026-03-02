function Button({ title, classes, handleClick }) {
  return (
    <button onClick={handleClick} className={`btn ${classes}`}>
      {title}
    </button>
  )
}

export default Button
