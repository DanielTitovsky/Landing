
export const PortfolioCard = ({imageUrl,title,description,notes,volume,price}) => {
    return (
        <div className={'portfolio-card-wrapper'}>
            <div className="portfolio-card">
                <div className="portfolio-card_img-wrapper">
                    <img src={imageUrl} alt="Porfume img" className="portfolio-card_img"/>
                </div>
                <div className="portfolio-card_content">
                    <div className="portfolio-card_text">
                        <h2 className="portfolio-card_title">{title}</h2>
                        <p className="portfolio-card_description" dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                    <div className="portfolio-card_information">
                        <div className="portfolio-card_composition">
                            <p>Notes</p>
                            <ul className="portfolio-card_notes">
                                {notes.map((note,index) => (
                                    <li key={index} className='portfolio-card_note'>{note}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="portfolio-card_pricing">
                            <p className='portfolio-card_price'>{price}$</p>
                            <p className='portfolio-card_volume'>({volume}ml)</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="portfolio-card_buy-now">
                BUY NOW
            </button>
        </div>

    )
}
