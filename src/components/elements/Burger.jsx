import {NavItem} from "@/components/elements/NavItem.jsx";
import {useState} from "react";

export const Burger = ({navItem}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={'burger'}>
            <div className={`burger_burger-button ${isMenuOpen ? 'active': ''}`} onClick={menuToggle} >
                <span className="burger_burger-button_line"></span>
            </div>
            <div className={`burger_menu   ${isMenuOpen ? 'burger_menu-open': ''}`}>
                <nav className={'burger_menu_nav'}>
                    <ul className={'burger_menu_nav-list'}>
                        {navItem.map((item, index) => (
                            <NavItem key={index} href={item.href} text={item.text} className={'burger_menu_nav-item'} />
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
