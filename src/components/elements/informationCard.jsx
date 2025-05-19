export const InformationCard = ({number, title, paragraph}) => {
    return (
        <div className={'information-card'}>
            <div className="information-card_number-star">
                 <p className={'information-card_number-star_number'}>{number}</p>
            </div>
            <h4 className={'information-card_title'}>{title}</h4>
            <ul className={'information-card_paragraph-list'}>
                {paragraph.map((item,index) => (
                    <li key={index} className="information-card_paragraph">{item}</li>
                ))}
            </ul>
        </div>
    )
}
