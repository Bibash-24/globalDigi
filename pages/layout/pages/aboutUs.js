import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import AboutUsStyle from '../../../styles/aboutUs.module.css';

export default class AboutUs extends Component {
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
                <div className={AboutUsStyle.aboutUsOverview}>
                    <div className={`mb-5 ${AboutUsStyle.aboutUsTitle}`}>
                        <h2>Who we are</h2>
                    </div>
                    <div className={AboutUsStyle.aboutUsContent}>
                        <p>
                            We are the team of developers, creators and artists, thinkers and doers and just like-minded people joined together by ideas and love to technologies. Our team is eager to come up with inspiring ideas and set out awesome challenges ahead of us
                    </p>
                        <p>
                            We do the work we love to let our clients grow the business they love
                    </p>
                    </div>
                    <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false} showStatus={false} centerMode height="280px">
                        <div className={AboutUsStyle.aboutUsImg}>
                            <img alt="" src="/img/teams/1.png" />
                        </div>
                        <div className={AboutUsStyle.aboutUsImg}>
                            <img alt="" src="/img/teams/2.jpg" />
                        </div>
                        <div className={AboutUsStyle.aboutUsImg}>
                            <img alt="" src="/img/teams/3.jpg" />
                        </div>
                        <div className={AboutUsStyle.aboutUsImg}>
                            <img alt="" src="/img/teams/4.jpg" />
                        </div>
                        <div className={AboutUsStyle.aboutUsImg}>
                            <img alt="" src="/img/teams/5.jpg" />
                        </div>
                        <div className={AboutUsStyle.aboutUsImg}>
                            <img alt="" src="/img/teams/1.jpg" />
                        </div>
                        <div className={AboutUsStyle.aboutUsImg}>
                            <img alt="" src="/img/teams/2.jpg" />
                        </div>
                        <div className={AboutUsStyle.aboutUsImg}>
                            <img alt="" src="/img/teams/3.jpg" />
                        </div>
                        {/* <Card>
                                <Card.Img
                                    className={AboutUsStyle.aboutUsImg}
                                    variant="top"
                                    src="/img/teams/1.png"
                                />
                            </Card>
                            <Card>
                                <Card.Img
                                    className={AboutUsStyle.aboutUsImg}
                                    variant="top"
                                    src="/img/teams/2.jpg"
                                />
                            </Card>
                            <Card>
                                <Card.Img
                                    className={AboutUsStyle.aboutUsImg}
                                    variant="top"
                                    src="/img/teams/3.jpg"
                                />
                            </Card>
                            <Card>
                                <Card.Img
                                    className={AboutUsStyle.aboutUsImg}
                                    variant="top"
                                    src="/img/teams/4.jpg"
                                />
                            </Card>
                            <Card>
                                <Card.Img
                                    className={AboutUsStyle.aboutUsImg}
                                    variant="top"
                                    src="/img/teams/5.jpg"
                                />
                            </Card>
                            <Card>
                                <Card.Img
                                    className={AboutUsStyle.aboutUsImg}
                                    variant="top"
                                    src="/img/teams/ceo.jpg"
                                />
                            </Card> */}
                    </Carousel>
                </div>
            </section>
        );
    }
}