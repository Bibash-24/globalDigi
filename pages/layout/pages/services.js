import { Card } from 'react-bootstrap';
import serviceStyles from '../../../styles/services.module.css'

export default function Services() {
    return (
        <section className="w-100">
            <div className={serviceStyles.serviceBlock}>
                <div className='d-flex justify-content-center'>
                    <div className='container row my-5'>
                        <div className='col-12 col-sm-6 col-md-4 mr-4'>
                            <Card className={serviceStyles.gdCard}>
                                <Card.Body>
                                    <div className='d-flex align-item-center mb-2'>
                                        <div className={serviceStyles.gdServiceCardIcon}>
                                            <img src='/icons/bugicon.svg' />
                                        </div>
                                        <Card.Title className='mb-0'>Antivirus Solution and Utility Software</Card.Title>
                                    </div>
                                    <Card.Text>
                                        Global Digitronix is an authorized reseller of Eset, McAFee, Avast, AVG, Norton and many more popular antivirus software that allows you to detect and remove malicious software and viruses.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={serviceStyles.gdCard}>
                                <Card.Body>
                                    <Card.Title>Web Hosting, Development & Domain Registration</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={serviceStyles.gdCard}>
                                <Card.Body>
                                    <Card.Title>Network Devices Supply & Support (LAN & WAN)</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={serviceStyles.gdCard}>
                                <Card.Body>
                                    <Card.Title>Computer Maintenance and Supply</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={serviceStyles.gdCard}>
                                <Card.Body>
                                    <Card.Title>E-Attandance Software and Installation</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={serviceStyles.gdCard}>
                                <Card.Body>
                                    <Card.Title>CC Camera Installation and Maintenance</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
