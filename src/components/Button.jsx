function Button({onBtnClick, children}) {
    
    return <button onClick={onBtnClick} className="bg-gray-300 px-1 py-0.5 rounded-md cursor-pointer">{children}</button>
}

export default Button