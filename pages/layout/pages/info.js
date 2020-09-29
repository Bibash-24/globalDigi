import InfoStyles from '../../../styles/info.module.css'

export default function Info() {
    return (
        <section>
            <div className={InfoStyles.infoOverview}>
                <div className='container'>
                    <div className={`mb-5 ${InfoStyles.infoTitle}`}>
                        <h2>We Simplify Software Development Process</h2>
                    </div>
                    <div className='row justify-content-center'>
                        <div className={`col-md-3 ${InfoStyles.infoRow}`}>
                            <div className='px-4'>
                                <div className={`mb-5 ${InfoStyles.infoImgIcon}`}><img src="/icons/discovericon.svg" /></div>
                                <h4>Discover</h4>
                                <p>
                                    We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.
                                </p>
                            </div>
                        </div>
                        <div className={`col-md-3 ${InfoStyles.infoRow}`}>
                            <div className='px-4'>
                                <div className={`mb-5 ${InfoStyles.infoImgIcon}`}><img src="/icons/designicon.svg" /></div>
                                <h4>Design</h4>
                                <p>
                                    Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.
                                </p>
                            </div>
                        </div>
                        <div className={`col-md-3 ${InfoStyles.infoRow}`}>
                            <div className='px-4'>
                                <div className={`mb-5 ${InfoStyles.infoImgIcon}`}><img src="/icons/buildicon.svg" /></div>
                                <h4>Build</h4>
                                <p>
                                    Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.
                                </p>
                            </div>
                        </div>
                        <div className={`col-md-3 ${InfoStyles.infoRow}`}>
                            <div className='px-4'>
                                <div className={`mb-5 ${InfoStyles.infoImgIcon}`}><img src="/icons/delivericon.svg" /></div>
                                <h4>Deliver</h4>
                                <p>
                                    We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={InfoStyles.infoRow}>

                </div>
                {/* <div className='d-flex justify-content-center'>
                    <div className='container row'>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={InfoStyles.content}>
                                <Card.Body>
                                    <div className='d-flex align-item-center mb-3'>
                                        <div className={InfoStyles.contentIcon}>
                                            <img src='/icons/discovericon.svg' />
                                        </div>
                                    </div>
                                    <center><h2 className='mb-0'>Discover</h2></center>
                                    <Card.Text>
                                        We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={InfoStyles.content}>
                                <Card.Body>
                                    <div className='d-flex align-item-center mb-3'>
                                        <div className={InfoStyles.contentIcon}>
                                            <img src='/icons/discovericon.svg' />
                                        </div>
                                    </div>
                                    <center><h2 className='mb-0'>Discover</h2></center>
                                    <Card.Text>
                                        We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={InfoStyles.content}>
                                <Card.Body>
                                    <div className='d-flex align-item-center mb-3'>
                                        <div className={InfoStyles.contentIcon}>
                                            <img src='/icons/discovericon.svg' />
                                        </div>
                                    </div>
                                    <center><h2 className='mb-0'>Discover</h2></center>
                                    <Card.Text>
                                        We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <Card className={InfoStyles.content}>
                                <Card.Body>
                                    <div className='d-flex align-item-center mb-3'>
                                        <div className={InfoStyles.contentIcon}>
                                            <img src='/icons/discovericon.svg' />
                                        </div>
                                    </div>
                                    <center><h2 className='mb-0'>Discover</h2></center>
                                    <Card.Text>
                                        We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};