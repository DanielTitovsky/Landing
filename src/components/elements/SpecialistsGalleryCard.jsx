export const SpecialistsGalleryCard = ({img,name,description}) => {
    return (
        <div className={'specialists-gallery_card'}>
            <img src={img} alt="" className={'specialists-gallery_card_img'}/>
            <div className="specialists-gallery_card_content">
                <h3 className="specialists-gallery_card_name">{name}</h3>
                <p className="specialists-gallery_card_status">{description}</p>
            </div>
        </div>
    )
}
