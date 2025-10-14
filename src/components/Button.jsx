import classNames from 'classnames'
function Button({
  onBtnClick,
  type = 'primary',
  children,
  className,
  ...props
}) {
  return (
    <button
      onClick={onBtnClick}
      className={classNames(
        'rounded-md cursor-pointer',
        {
          'uppercase font-medium p-2 text-cyan-900 bg-gray-300 hover:bg-gray-200 hover:text-cyan-900 ':
            type === 'secondary',
          'text-white px-3 py-1  bg-cyan-900 hover:bg-cyan-800':
            type === 'primary',
          'p-2 bg-orange-200 flex items-center gap-2 rounded-md cursor-pointer hover:bg-orange-100':
            type === 'light',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
