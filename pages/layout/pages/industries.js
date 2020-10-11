import teamStyles from '../../../styles/team.module.css'

export default function Industries() {
    return (
        <section>
            <div className={`container ${teamStyles.teamOverview}`}>
                <div className={teamStyles.teamTitle}>
                    <h2>Industries we serve</h2>
                    <strong>We incorporate your creative ideas into our sustainable innovative custom on-demand app development solutions that helps you uplift your business into the sky of evolving on-demand economy.</strong>
                </div>
                <div className='row'>
                    <div className="tab-item-wrapper">
                        <div className='d-flex flex-wrap justify-content-between py-5'>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/education.svg" />
                                <h5>Education & E-learning</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/healthcare.svg" />
                                <h5>Healthcare</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/cart.svg" />
                                <h5>Retail & E-commerce</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/factory.svg" />
                                <h5>ISVs & Product Companies</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/income.svg" />
                                <h5>Banking & Finance</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/marketing.svg" />
                                <h5>Digital & Marketing Agencies</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/video-camera.svg" />
                                <h5>Media & Entertainment</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/newspaper.svg" />
                                <h5>Publishing & Advertising</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/delivery.svg" />
                                <h5>Logistics & Transportation</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/travel.svg" />
                                <h5>Travel & Tourism</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/enterprise.svg" />
                                <h5>Enterprise & Business</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/housing.svg" />
                                <h5>Real Estate & Housing</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/Fitness.svg" />
                                <h5>Fitness</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/restaurant.svg" />
                                <h5>Restaurant</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/construction.svg" />
                                <h5>Construction</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/networking.svg" />
                                <h5>Social Networking</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/controller.svg" />
                                <h5>Gaming</h5>
                            </div>
                            <div className={`p-4 text-center ${teamStyles.containBlock}`}>
                                <img className={`mb-2 ${teamStyles.containBlockImg}`} src="img/industries/more.svg" />
                                <h5>& Many More</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};