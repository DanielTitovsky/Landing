import {WhySlider} from "@/components/elements/WhySlider.jsx";
import {Container} from "@/components/elements/container.jsx";
const imgs = [
    '/testGramotaSlider.png',
    '/testGramotaSlider.png',
    '/testGramotaSlider.png',
    '/testGramotaSlider.png',
    '/testGramotaSlider.png',
    '/testGramotaSlider.png'
]
export const Why = () => {
    return (
      <section className={'why'} id={'about-us'}>
          <Container className={'why_container'}>
              <div className="why_header">
                  <h2 className={'why_title'}>Почему выбирают ParfumVerse для создания уникального аромата?</h2>
                  <p className={'why_subtitle'}>Эксклюзивный партнер в мире люксовой парфюмерии, где каждая капля — это искусство</p>
              </div>
             <WhySlider certificates={imgs}/>
          </Container>
      </section>
    )
}
