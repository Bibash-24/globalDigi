import productStyles from '../../../styles/product.module.css'

export default function Products() {
    return (
        <section className={productStyles.productOverview}>
            <div className={productStyles.productOverviewBlock}>
                <div className='container'>
                    <div className={productStyles.productOverviewBlockWrapper}>
                        <div>
                            <div className={productStyles.productTitle}>
                                <h2>Work Approach</h2>
                                <strong>We work to deliver profitability in your business – with effective communication, consulting and interactive solutions. Following an Agile Work Approach, we make sure you get the ideal solutions at minimum expenses.</strong>
                            </div>
                            <div className="row mx-2">
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
                                        {/* <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4"> */}
                                        <div className={productStyles.workApproachImg}>
                                            <img src="img/Work-Approach/philosophy.svg" />
                                            <h5>Our Philosophy</h5>
                                        </div>
                                        <h6>
                                            Our Philosophy starts-and-ends at Client-first approach. Be it understanding your business requirements to choosing the right technologies, we work as a collective team that takes all the possible steps to grow continuously towards our common goal.
                                            </h6>
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-down"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
                                        {/* <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4"> */}
                                        <div className={productStyles.workApproachImg}>
                                            <img src="img/Work-Approach/policy.svg" />
                                            <h5>Work Policy</h5>
                                        </div>
                                        <h6>
                                            We promote a collaborative work environment. We involve everyone working in the organization in community decisions and encourage them to think in a broader perspective. Our work process promotes flexibility and we maintain high level of discipline at different levels of execution.
                                            </h6>
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
                                        {/* <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4"> */}
                                        <div className={productStyles.workApproachImg}>
                                            <img src="img/Work-Approach/future.svg" />
                                            <h4>The Future</h4>
                                        </div>
                                        <h6>
                                            Our 13+ years of experience in the domain helps us understand the need-of-the-hour better. This understanding drives us to a better future with every minute ticking. We believe we will be taking off major businesses from their flagship positions, with the products we are eyeing today.
                                            </h6>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};