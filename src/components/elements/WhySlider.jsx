import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function WhySlider({ certificates }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows : false,

        centerMode: true,
        centerPadding: "0",
        cssEase: "ease-in-out",
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "60px"
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "30px"
                }
            }
        ]
    };

    return (
        <div className="why-slider-container">
            <Slider {...settings}>
                {certificates.map((item, index) => (
                    <div key={index} className="slide-item">
                        <div className="img-wrapper">
                            <img src={item} alt={`Certificate ${index + 1}`} className="certificate-img" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
