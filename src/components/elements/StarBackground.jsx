export const StarBackground = ({children,className =''}) => {
    return (
        <div className={`star-container ${className}`}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            {children}
        </div>
    )
}
