import InfoStyles from '../../../styles/info.module.css'

export default function Info() {
    return (
        <section>
            <div className={InfoStyles.infoOverview}>
                <div className='container'>
                    <div className={`mb-5 ${InfoStyles.infoTitle}`}>
                        <h2>Our Software Development Process</h2>
                    </div>
                    {/* <div className={InfoStyles.infoContent}> */}
                        <p className={InfoStyles.infoContent}>
                        Global Digitronix is a <em><strong>software development company</strong></em> for small & medium business, enterprise, startups and agencies. We follow an agile software development approach for all types of development projects. At Global, our team of software developers uses agile Scrum and agile Kanban to ensure on-time delivery and agility for projects.
                        </p>
                    {/* </div> */}
                    <div className='row justify-content-center'>
                    <img src="img/process.svg" />
                        {/* <div className={`col-md-3 ${InfoStyles.infoRow}`}>
                            <div className='px-4'>
                                <div className={`mb-5 ${InfoStyles.infoImgIcon}`}><img src="img/icons/discovericon.svg" /></div>
                                <h4>Discover</h4>
                                <p>
                                    We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.
                                </p>
                            </div>
                        </div>
                        <div className={`col-md-3 ${InfoStyles.infoRow}`}>
                            <div className='px-4'>
                                <div className={`mb-5 ${InfoStyles.infoImgIcon}`}><img src="img/icons/designicon.svg" /></div>
                                <h4>Design</h4>
                                <p>
                                    Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.
                                </p>
                            </div>
                        </div>
                        <div className={`col-md-3 ${InfoStyles.infoRow}`}>
                            <div className='px-4'>
                                <div className={`mb-5 ${InfoStyles.infoImgIcon}`}><img src="img/icons/buildicon.svg" /></div>
                                <h4>Build</h4>
                                <p>
                                    Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.
                                </p>
                            </div>
                        </div>
                        <div className={`col-md-3 ${InfoStyles.infoRow}`}>
                            <div className='px-4'>
                                <div className={`mb-5 ${InfoStyles.infoImgIcon}`}><img src="img/icons/delivericon.svg" /></div>
                                <h4>Deliver</h4>
                                <p>
                                    We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};