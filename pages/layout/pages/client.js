import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import clientStyles from '../../../styles/client.module.css'
import React, { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import { css, cx } from 'emotion'

const Client = () => {

    const quotes = {
        0: {
            client_name: "Awesome Client",
            client_company: "ABC Co.",
            client_quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            client_img: "/img/teams/ceo.jpg",
        },
        1: {
            client_name: "Super Client",
            client_company: "XYZ Co.",
            client_quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            client_img: '/img/testimonial/user1.jpg',
        },
        2: {
            client_name: "Sexy Client",
            client_company: "LMN Co.",
            client_quote: "Lorem ipsum dolor sit amet, Ut enim ad minim veniam.",
            client_img: '/img/testimonial/user2.jpg',
        },
        3: {
            client_name: "Hyper Client",
            client_company: "PQR Co.",
            client_quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            client_img: '/img/testimonial/user3.jpg',
        }
    }

    const say = {
        0: {
            say_name: "Awesome Client",
            say_company: "ABC Co.",
            say_quote: "Lorem ipsum dolor sit amet, Ut enim ad minim veniam.",
            say_img: "/img/teams/ceo.jpg",
        },
        1: {
            say_name: "Super Client",
            say_company: "XYZ Co.",
            say_quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            say_img: '/img/testimonial/user1.jpg',
        },
        2: {
            say_name: "Sexy Client",
            say_company: "LMN Co.",
            say_quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            say_img: '/img/testimonial/user2.jpg',
        },
        3: {
            say_name: "Hyper Client",
            say_company: "PQR Co.",
            say_quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            say_img: '/img/testimonial/user3.jpg',
        }
    }

    const [current, setCurrent] = useState(quotes[0]);
    const [active, setActive] = useState(0);
    const handleSetClick = (e) => {
        setCurrent(quotes[e.target.getAttribute("data-quote")])
        setActive(e.target.getAttribute("data-quote"))
    }

    return (

        <section>
            <div className={clientStyles.ClientOverview}>
                <div className='container'>
                    <div className={clientStyles.clientTitle}>
                        <h2>Our Clients Say</h2>
                    </div>

                    <div className='row my-5'>
                        <div className='col-md-6'>
                            
                        </div>
                        <div className='col-md-6'>
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
                            <div className={css`
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            span {
                                height: 20px;
                                width: 20px;
                                margin: 0 3px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                cursor: pointer;
                            }

                            span::before {
                                content: "";
                                height: 6px;
                                width: 6px;
                                background-color: #413f4d;
                                border-radius: 50%;
                                transition: background-color: 0.3s ease;
                            }

                            span:hover::before {
                                background-color: #4990e2;
                            }
                            
                            span[data-quote="${active}"]::before{
                                background-color: #4990e2;
                            }
                        `}>
                                {Object.keys(quotes).map(index => (
                                    <span
                                        onClick={e => handleSetClick(e)}
                                        // onClick={e => `${handleSetClick(e)} ${handleNextClick(e)}`}
                                        data-quote={index}
                                        key={index} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Client