function Button({ title, classes, handleClick }) {
  return (
    <button onClick={handleClick} className={classes}>
      {title}
    </button>
  )
}

export default Button
