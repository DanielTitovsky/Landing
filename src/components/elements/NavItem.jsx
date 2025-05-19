export const NavItem = ({href,text, className = 'nav_item'}) => {
    return (
        <li  className={`${className}`}>
            <a href={href} className={`${className + '_link'}`}>
                {text}
            </a>
        </li>
    );
}
