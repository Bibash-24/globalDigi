import Carousel from 'react-bootstrap/Carousel';
import navbarStyle from '../../../styles/navbar.module.css';

export default function Banner() {
  return (
    <div className={navbarStyle.carouselOverview}>
      <Carousel className={navbarStyle.carouselBlock}>
        <Carousel.Item className={navbarStyle.gdCarousel}>
          <img
            className="d-block w-100 gd-carousel-img"
            src="/img/cover-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={navbarStyle.gdCarouselCaption1}>
            <h3 className='mb-5'>Business Through Creative Process</h3>
            <ul>
              <li className='mb-4'>2 Home Page Layout Designs</li>
              <li className='mb-4'>Easily Customizable</li>
              <li className='mb-4'>Business and Designs</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100 gd-carousel-img"
            src="/img/cover-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 gd-carousel-img"
            src="/img/cover-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <style jsx>{`
        .gd-carousel-img{
          height: 100vh;
          object-fit: cover;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};
