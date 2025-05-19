import {NavItem} from "@/components/elements/NavItem.jsx";
import {Container} from "@/components/elements/container.jsx";
const navItem = [
    { href: "#", text: "Home" },
    { href: "#services", text: "Services" },
    { href: "#about-us", text: "About Us" },
    { href: "#Products", text: "Products" },
    { href: "#Contacts", text: "Contacts" }
]

async function submitEmail(e) {
    e.preventDefault();

    const { name, phone, email, comment } = e.target.elements;

    const  response = await fetch('http://localhost:5069/api/Applications', {
        method: 'POST',
        body: JSON.stringify({
            name: name.value,
            phone: phone.value,
            email: email.value,
            comment: comment.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();
}

export const Footer = () => (
    <footer className="footer" id={'Contacts'}>
        <Container className={'footer_container'}>
            <div className="footer_header">
                <h2 className={'footer_header_title'}>Хотите парфюмерную эксклюзивность?</h2>
                <p className={'footer_header_subtitle'}>Оставьте заявку — и наш парфюмерный эксперт создаст для вас индивидуальное предложение.</p>
            </div>
            <div className="footer_form-blcok">
                <form action="" onSubmit={submitEmail} className="footer_form">
                    <input type="text" name={'name'} className="footer_form_input" placeholder={'Имя'}/>
                    <input type="text" name={'phone'} className="footer_form_input" placeholder={'Номер телефона'}/>
                    <input type="text" name={'email'} className="footer_form_input" placeholder={'E-mail'}/>
                    <input type="text" name={'comment'} className="footer_form_input" placeholder={'Комментарий'}/>
                    <button className="footer_form_button-submit" type={"submit"}>Отправить</button>
                </form>
            </div>
            <div className="footer_content">
                <div className="footer_content_company-info">
                    <div className="footer_content_company-info_logo">
                        <img src="/logo1.png" alt=""/>
                        <p>ParfumVerse</p>
                    </div>
                    <p className="footer_content_company-info_description">Стремясь подарить вам незабываемые ароматные впечатления, наш Дом парфюмерии создает изысканные композиции, превосходящие самые смелые ожидания.</p>
                </div>
                <div className="footer_content_quick-links">
                    <p className={'footer_content_quick-links_title'}>Ссылки</p>
                    <ul className={'footer_content_quick-links_list'}>
                        {navItem.map((item, index) => (
                            <NavItem key={index} href={item.href} text={item.text} className={'footer_content_quick'}/>
                        ))}
                    </ul>
                </div>
                <div className="footer_content_contact-us">
                    <p className={'footer_content_contact-us_title'}>Контакты</p>
                    <ul className={'footer_content_contact-us_list'}>
                        <li className={'footer_content_contact-us_phone'}>
                            <p>+79001225049</p>
                        </li>
                        <li className={'footer_content_contact-us_email'}>
                            <p>ParfumVerse@mail.ru</p>
                        </li>
                        <li className={'footer_content_contact-us_address'}>
                            <p>Инициативная 74/1</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_legal-information">
                <p>© 2023 PARFUMVERSE. Все права защищены.</p>
                <p>Пользовательское соглашение | Политика конфиденциальности</p>
            </div>
        </Container>
    </footer>
);
