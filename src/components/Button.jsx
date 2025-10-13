function Button({ onBtnClick, type, children }) {
  return (
    <button
      onClick={onBtnClick}
      className={
        type === 'dark'
          ? 'bg-gray-800 px-1 py-0.5 rounded-md cursor-pointer'
          : 'bg-gray-300 px-1 py-0.5 rounded-md cursor-pointer'
      }
    >
      {children}
    </button>
  )
}

export default Button
