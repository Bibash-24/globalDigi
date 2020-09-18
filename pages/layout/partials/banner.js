import Carousel from 'react-bootstrap/Carousel';
import navbarStyle from '../../../styles/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

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
              <li className='mb-4'>
                {/* <span className={navbarStyle.gdBannerFaIcons}>
                  <FontAwesomeIcon icon={faLayerGroup} size="xs" />
                </span> */}
                2 Home Page Layout Designs
              </li>
              <li className='mb-4'>Easily Customizable</li>
              <li className='mb-4'>Business and Designs</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 gd-carousel-img"
            src="/img/cover-2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className={navbarStyle.gdCarouselCaption2}>
            <h3 className='mb-5'>We care for your Business</h3>
            <ul>
              <li className='mb-4'>
                {/* <span className={navbarStyle.gdBannerFaIcons}>
                  <FontAwesomeIcon icon={faLayerGroup} size="xs" />
                </span> */}
                Appoinment Forms
              </li>
              <li className='mb-4'>Comes with 2 home page demo</li>
              <li className='mb-4'>Unlimited Layouts</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 gd-carousel-img"
            src="/img/cover-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className={navbarStyle.gdCarouselCaption3}>
            <h3 className='mb-5'>A Perfect Landing Page For Your Business</h3>
              <p className='mb-4'>
                Create & edit pages easily with easy to use elementor page builder.
                 Pre-defined with lot of design elements helps you to create a website
                 quickly.
              </p>
          </Carousel.Caption>
        </Carousel.Item>
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
