import ContactStyles from '../../../styles/contact.module.css'
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <section>
            <div className={ContactStyles.contactOverview}>
                <div className={ContactStyles.contactWrapper}>
                    <div className={`mb-5 ${ContactStyles.contactTitle}`}>
                        <h2>connect with us</h2>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col col-12 col-md-4'>
                                <div className={ContactStyles.connect}>
                                    <div className={ContactStyles.connectBody}>
                                        <h5 className={ContactStyles.connectTitle}>Job Openings</h5>
                                        <p className={ContactStyles.connectText}>Want to be part of our growing team?</p>
                                        <a href="#" alt="View More">
                                            <span>View More <i class="fa fa-arrow-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col col-12 col-md-4'>
                                <div className={ContactStyles.connect}>
                                    <div className={ContactStyles.connectBody}>
                                        <h5 className={ContactStyles.connectTitle}>Work with us</h5>
                                        <p className={ContactStyles.connectText}>Learn how we can help you grow, or launch your business.</p>
                                        <a href="#" alt="Get In Touch">
                                            <span>Get In Touch</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col col-12 col-md-4'>
                                <div className={ContactStyles.connect}>
                                    <div className={ContactStyles.connectBody}>
                                        <h5 className={ContactStyles.connectTitle}>Offices</h5>
                                        <p className={ContactStyles.connectText}>See all of our locations</p>
                                        <a href="#" alt="View Locations">
                                            <span>View Locations</span>
                                        </a>
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