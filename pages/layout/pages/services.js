import { Card } from 'react-bootstrap';
import serviceStyles from '../../../styles/services.module.css'

export default function Services() {
    return (
        <section className="w-100">
            
            <div className={serviceStyles.serviceBlock}>
                <div className={serviceStyles.serviceTitle}>
                    <h2>Services</h2>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='container row'>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-once="true"
                                className='h-100'
                            >
                                <Card className={serviceStyles.gdCard}>
                                    <Card.Body>
                                        <div className='d-flex align-item-center mb-3'>
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
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <div
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                data-aos-once="true"
                                className='h-100'
                            >
                                <Card className={serviceStyles.gdCard}>
                                    <Card.Body>
                                        <div className='d-flex align-item-center mb-3'>
                                            <div className={serviceStyles.gdServiceCardIcon}>
                                                <img src='/icons/desktopicon.svg' />
                                            </div>
                                            <Card.Title className='mb-0'>Web Hosting, Development & Domain Registration</Card.Title>
                                        </div>
                                        <Card.Text>
                                            Our in-house team of web professionals delivers you high quality and smooth websites at reasonable prices. Also we offer web hosting and domain registration for your personal, corporate and business websites.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-once="true"
                                className='h-100'
                            >
                                <Card className={serviceStyles.gdCard}>
                                    <Card.Body>
                                        <div className='d-flex align-item-center mb-3'>
                                            <div className={serviceStyles.gdServiceCardIcon}>
                                                <img src='/icons/routericon.svg' />
                                            </div>
                                            <Card.Title className='mb-0'>Network Devices Supply & Support (LAN & WAN)</Card.Title>
                                        </div>
                                        <Card.Text>
                                            Global Digitronix offers wide range of network devices for your companies and corporate houses to let the resources stay connected smoothly. Remember us for all kinds of network support.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-once="true"
                                className='h-100'
                            >
                                <Card className={serviceStyles.gdCard}>
                                    <Card.Body>
                                        <div className='d-flex align-item-center mb-3'>
                                            <div className={serviceStyles.gdServiceCardIcon}>
                                                <img src='/icons/repairicon.svg' />
                                            </div>
                                            <Card.Title className='mb-0'>Computer Maintenance and Supply</Card.Title>
                                        </div>
                                        <Card.Text>
                                            For any kind of PCs, Desktops, Laptops repairing and maintenace, we're here for you. Also we deal with the supply of computer, printers, projectors, monitors and other computer components.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-once="true"
                                className='h-100'
                            >
                                <Card className={serviceStyles.gdCard}>
                                    <Card.Body>
                                        <div className='d-flex align-item-center mb-3'>
                                            <div className={serviceStyles.gdServiceCardIcon}>
                                                <img src='/icons/fingerprinticon.svg' />
                                            </div>
                                            <Card.Title className='mb-0'>E-Attandance Software and Installation</Card.Title>
                                        </div>
                                        <Card.Text>
                                            E-Attandance software provides both employer and employees with confidence in the accuracy of their wage payments all while improving productivity.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-once="true"
                                className='h-100'
                            >
                                <Card className={serviceStyles.gdCard}>
                                    <Card.Body>
                                        <div className='d-flex align-item-center mb-3'>
                                            <div className={serviceStyles.gdServiceCardIcon}>
                                                <img src='/icons/cameraicon.svg' />
                                            </div>
                                            <Card.Title className='mb-0'>CC Camera Installation and Maintenance</Card.Title>
                                        </div>
                                        <Card.Text>
                                            We lead and support the Nepalese electronic security surveillance industry in the provision of security products and services.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};
