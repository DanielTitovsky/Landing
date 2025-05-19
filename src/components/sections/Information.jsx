import {InformationCard} from "@/components/elements/informationCard.jsx";
import {Container} from "@/components/elements/container.jsx";

const informationData = [
    {
        title: 'Заявка',
        paragraph: [
            'Анализируем тренды',
            'Ищем вдохновение',
            'Определяем концепцию',
            'Подписываем договор'
        ]
    },
    {
        title: 'Подготовка',
        paragraph: [
            'Создаем формулу аромата',
            'Отбираем ингредиенты',
            'Моделируем молекулы',
            'Составляем дорожную карту'
        ]
    },
    {
        title: 'Реализация',
        paragraph: [
            'Проводим слепые тесты',
            'Корректируем формулу',
            'Производим в ателье',
            'Контролируем качество'
        ]
    },
    {
        title: 'Отчет',
        paragraph: [
            'Оформляем сертификаты',
            'Организуем премиальную доставку',
            'Предоставляем видео-историю',
            'Формируем отчеты эффективности'
        ]
    }
]
export const Information = () => {
    return (
        <section className={'information'}>
                <Container className={'information_container'}>
                    <h2 className={'information_title'}>Как мы <span>работаем</span></h2>
                    <div className="information_card-wrapper">
                        {informationData.map((item, index) => (
                            <InformationCard key={index} number={index} {...item} />
                        ))}
                    </div>
                </Container>
        </section>
    )
}
