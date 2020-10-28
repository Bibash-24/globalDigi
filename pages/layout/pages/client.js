import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import clientStyles from '../../../styles/client.module.css'
import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";


// const Client = () => {

//     const quotes = {
//         0: {
//             client_name: "Awesome Client",
//             client_company: "ABC Co.",
//             client_quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//             client_img: "/img/teams/ceo.jpg",
//         },
//         1: {
//             client_name: "Super Client",
//             client_company: "XYZ Co.",
//             client_quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             client_img: '/img/testimonial/user1.jpg',
//         },
//         2: {
//             client_name: "Sexy Client",
//             client_company: "LMN Co.",
//             client_quote: "Lorem ipsum dolor sit amet, Ut enim ad minim veniam.",
//             client_img: '/img/testimonial/user2.jpg',
//         },
//         3: {
//             client_name: "Hyper Client",
//             client_company: "PQR Co.",
//             client_quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//             client_img: '/img/testimonial/user3.jpg',
//         }
//     }

//     const [current, setCurrent] = useState(quotes[0]);
//     const [active, setActive] = useState(0);
//     const handleSetClick = (e) => {
//         setCurrent(quotes[e.target.getAttribute("data-quote")])
//         setActive(e.target.getAttribute("data-quote"))
//     }
export default class Client extends Component {
    render() {
        var settings = {
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500
        };
        return (

            <section>
                <div className={clientStyles.ClientOverview}>
                    <div className='container'>
                        <div className={clientStyles.clientTitle}>
                            <h2>Our Clients Say</h2>
                        </div>

                        {/* <div className='col-md-6'>
                        <div className={clientStyles.clientWrapper}>
                            <p className={clientStyles.clientMsg}>
                                {current.client_quote}
                            </p>
                            <div className='d-flex flex-wrap align-items-center'>
                                <div className={clientStyles.clientImgFrame}>
                                    <img className={clientStyles.clientImg} src={current.client_img} />
                                </div>
                                <div className='ml-4'>
                                    <h4>{current.client_name}</h4>
                                    <p>{current.client_company}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {Object.keys(quotes).map(index => (
                                <span
                                    className={`${clientStyles.clientWrapper_span} ${active === index ? 'activeDashDot' : ''}`}
                                    onClick={e => handleSetClick(e)}
                                    data-quote={index}
                                    key={index} />
                            ))}
                        </div>
                    </div> */}
                        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
                            <div className={clientStyles.clientWrapper}>
                                <p className={clientStyles.clientMsg}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <div className={clientStyles.clientImgFrame}>
                                        <img className={clientStyles.clientImg} src='/img/testimonial/user1.jpg' />
                                    </div>
                                    <div className='ml-4'>
                                        <h4>Sexy Client</h4>
                                        <p>ABC Co.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={clientStyles.clientWrapper}>
                                <p className={clientStyles.clientMsg}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <div className={clientStyles.clientImgFrame}>
                                        <img className={clientStyles.clientImg} src='/img/testimonial/user1.jpg' />
                                    </div>
                                    <div className='ml-4'>
                                        <h4>Sexy Client</h4>
                                        <p>ABC Co.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={clientStyles.clientWrapper}>
                                <p className={clientStyles.clientMsg}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <div className={clientStyles.clientImgFrame}>
                                        <img className={clientStyles.clientImg} src='/img/testimonial/user1.jpg' />
                                    </div>
                                    <div className='ml-4'>
                                        <h4>Sexy Client</h4>
                                        <p>ABC Co.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={clientStyles.clientWrapper}>
                                <p className={clientStyles.clientMsg}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <div className={clientStyles.clientImgFrame}>
                                        <img className={clientStyles.clientImg} src='/img/testimonial/user1.jpg' />
                                    </div>
                                    <div className='ml-4'>
                                        <h4>Sexy Client</h4>
                                        <p>ABC Co.</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel>

                        {/* <div className='row my-5'>
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
                    </div> */}

                    </div>
                </div>
            </section>
        );
    };
}