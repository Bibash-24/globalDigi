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
                                <p>We work to deliver profitability in your business – with effective communication, consulting and interactive solutions. Following an Agile Work Approach, we make sure you get the ideal solutions at minimum expenses.</p>
                            </div>
                            <div className="row mx-2">
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
                                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                            <div>
                                                <img src="img/Work-Approach/philosophy.svg" />
                                                <span>Our Philosophy</span>
                                            </div>
                                            <p>
                                                Our Philosophy starts-and-ends at Client-first approach. Be it understanding your business requirements to choosing the right technologies, we work as a collective team that takes all the possible steps to grow continuously towards our common goal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-down"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
                                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                            <div>
                                                <img src="img/Work-Approach/policy.svg" />
                                                <span>Work Policy</span>
                                            </div>
                                            <p>
                                                We promote a collaborative work environment. We involve everyone working in the organization in community decisions and encourage them to think in a broader perspective. Our work process promotes flexibility and we maintain high level of discipline at different levels of execution.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
                                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                            <div>
                                                <img src="img/Work-Approach/future.svg" />
                                                <span>The Future</span>
                                            </div>
                                            <p>
                                                Our 13+ years of experience in the domain helps us understand the need-of-the-hour better. This understanding drives us to a better future with every minute ticking. We believe we will be taking off major businesses from their flagship positions, with the products we are eyeing today.
                                            </p>
                                        </div>
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