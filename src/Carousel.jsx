import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { longList } from './data';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    // cssEase: 'linear',
  };
  return (
    <>
      <Slider {...settings}>
        {longList.map((item) => {
          const { id, name, image } = item;
          return (
            <article key={id} className="slide">
              <img src={image} alt={name} className="slide-image" />
            </article>
          );
        })}
      </Slider>
    </>
  );
};
export default Carousel;
