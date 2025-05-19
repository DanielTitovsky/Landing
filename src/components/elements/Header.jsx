import {NavItem} from "@/components/elements/NavItem.jsx";
import {Burger} from "@/components/elements/Burger.jsx";

const navItem = [
    { href: "#", text: "HOME" },
    { href: "#services", text: "SERVICES" },
    { href: "#about-us", text: "ABOUT US" },
    { href: "#Products", text: "PRODUCTS" },
    { href: "#Contacts", text: "CONTACTS" }
]
export const Header = () => (
    <header className="header">
        <div className={'header_container'}>
            <div className="header_logo">
                <img src="/logo1.png" alt="" className={'header_logo_img'}/>
                <h2 className={'header_logo_title'}>ParfumVerse</h2>
            </div>
            <nav className={'header_nav'}>
                <ul className={'header_nav_list'}>
                    {navItem.map((item, index) => (
                        <NavItem key={index} href={item.href} text={item.text} />
                    ))}
                </ul>
            </nav>
            <div className="header_contact">
                <a href={'mailto:ParfumVerse@mail.ru'} className="header_contact_email">ParfumVerse@mail.ru</a>
                <a href={'tel:+79001225049'} className="header_contact_phone">+79001225049</a>
            </div>
            <Burger navItem={navItem}/>
        </div>
    </header>
);
