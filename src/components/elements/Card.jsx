export const Card = ({img, title, details}) => {
    return (
        <div className={'card'}>
            <div className="card_header">
                <img src={img} className={'card_header_img'} alt="img"/>
            </div>
            <div className={'card_content'}>
                <p className="card_title">{title}</p>
                <ul className="card_details">
                    {details.map((detail, index)=> (
                        <li key={index} className={'card_detail'}>
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
