import {Container} from "@/components/elements/container.jsx";
import {SpecialistsGalleryCard} from "@/components/elements/SpecialistsGalleryCard.jsx";

const specialistsData =  [
    {
        img:'/specialiststest2.jpg',
        name: 'Жак Руссель',
        description: 'Главный парфюмер — бывший создатель ароматов для Creed и Roja Dove, автор культовых аккордов Nuit de Louvre.'
    },
    {
        img:'/specialiststest1.jpg',
        name: 'София Лоренц',
        description: 'Дизайнер упаковок —  экс-арт-директор Lalique, создательница флаконов в стиле "ар-деко meets космос"'
    },
    {
        img:'/specialiststest4.jpg',
        name: 'Артём Демидов',
        description: 'Основатель и руководитель — парфюмерный визионер с 15-летним опытом в нишевой парфюмерии'
    },
    {
        img:'/specialiststest3.jpg',
        name: 'Элина Маркони',
        description: 'Менеджер по развитию — основатель EcoLuxury Certification, гарантирующий этичность цепочек поставок'
    }
]

export const Specialists = () => {
    return (
        <section className={'specialists'}>
            <Container className="specialists_header">
                <h2 className={'specialists_title'}>Ключевые специалисты PV</h2>
                <p className={'specialists_subtitle'}>Мы — команда ParfumVerse. Наши парфюмеры воплотят вашу индивидуальность в уникальном аромате, где важна каждая нота</p>
            </Container>
             <div className={'specialists_gallery'}>
                {specialistsData.map((item, index) => (
                    <SpecialistsGalleryCard key={index} {...item}/>
                ))}
            </div>
        </section>
    )
}
