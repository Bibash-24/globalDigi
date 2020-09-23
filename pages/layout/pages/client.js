import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import clientStyles from '../../../styles/client.module.css'

export default function Client() {
    const Slider_settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };
    return (
        <section>
            <div className={clientStyles.ClientOverview}>
                <div className='container'>
                    <div className={clientStyles.clientTitle}>
                        <small>TESTIMONIAL</small>
                        <h2>Our Clients</h2>
                    </div>
                    <div className='row my-5'>
                        <div className={`col-md-6 ${clientStyles.ClientBlock}`}>
                            <h3 className={`blockWrapper ${clientStyles.blockWrapperTitle}`}>Kinds Words From Clients</h3>
                            <div className={clientStyles.ClientBanner} />
                            <h3 className={`blockWrapper ${clientStyles.blockWrapperSubTitle}`}>Making Sure all our Clients are Satisfied</h3>
                        </div>
                        <div className='col-md-6'>
                            <div className={clientStyles.clientWrapper}>
                                <p className={clientStyles.clientMsg}>
                                    As conscious traveling Paup ers we must always be oncerned
                                    about our dear Mother Earth. If you think about it, you
                                    travel across her face and She is the host to your
                                    journey.
                            </p>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <div className={clientStyles.clientImgFrame}>
                                        <img className={clientStyles.clientImg} src='/img/teams/ceo.jpg' />
                                    </div>
                                    <div className='ml-4'>
                                        <h4>Fanny Spencer</h4>
                                        <p>Chief Executive, Amazon</p>
                                    </div>
                                </div>
                            </div>
                            <div className={clientStyles.clientWrapper}>
                                <p>
                                    As conscious traveling Paup ers we must always be oncerned
                                    about our dear Mother Earth. If you think about it, you
                                    travel across her face and She is the host to your
                                    journey.
                            </p>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <div className={clientStyles.clientImgFrame}>
                                        <img className={clientStyles.clientImg} src='/img/teams/ceo.jpg' />
                                    </div>
                                    <div className='ml-4'>
                                        <h4>Fanny Spencer</h4>
                                        <p>Chief Executive, Amazon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CLIENT Slider */}
                    <section className="customer-logos slider pt-3">
                        <Slider {...Slider_settings}>
                            <div className={clientStyles.slide}>
                                <img src='/img/clients/client-12.png' />
                            </div>
                            <div className="slide">
                                <img src='/img/clients/client-12.png' />
                            </div>
                            <div className="slide">
                                <img src='/img/clients/client-12.png' />
                            </div>
                            <div className="slide">
                                <img src='/img/clients/client-12.png' />
                            </div>
                            <div className="slide">
                                <img src='/img/clients/client-12.png' />
                            </div>
                            <div className="slide">
                                <img src='/img/clients/client-12.png' />
                            </div>
                            <div className="slide">
                                <img src='/img/clients/client-12.png' />
                            </div>
                            <div className="slide">
                                <img src='/img/clients/client-12.png' />
                            </div>
                        </Slider>
                    </section>
                </div>
            </div>
        </section>
    );
};