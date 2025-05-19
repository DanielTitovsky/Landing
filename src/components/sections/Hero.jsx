import {Container} from "@/components/elements/container.jsx";

export const Hero = () => {
    return (
        <section className={'hero'}>

            <Container className={'hero-container'}>
                <div className="promo-text">
                    <h1 className={'promo-text_title'}>Parfum<span className={'promo-text_title-accent'}>Verse</span></h1>
                    <p className={'promo-text_title-description'}>Где реальность встречается с элегантностью<br/> а каждый аромат — это вселенная эмоций</p>
                    <a href="#footer" className="promo-text_button">Заказать</a>
                </div>
                <div className="hero_img-wrapper">
                    <img src="/heroImg.png" alt="" className={'hero_img'}/>
                </div>
            </Container>
        </section>
    )
}
