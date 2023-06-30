const Button = ({ onClick, children }) => {

    return (
        <div>
            <button className="npm-button" onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button;