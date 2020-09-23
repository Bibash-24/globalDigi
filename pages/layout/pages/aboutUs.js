import AboutUsStyle from '../../../styles/aboutUs.module.css'

export default function AboutUs() {
    return (
        <section>
            <div className={AboutUsStyle.aboutUsOverview}>
                <div className={AboutUsStyle.aboutUsWrapper}>
                    <div className='container'>
                        <div className='row mb-5'>
                            <div className='col-md-4 align-self-start h-100'>
                                <div className={AboutUsStyle.aboutUsDetails}>
                                    <h2>About Us</h2>
                                    <p>
                                        Making adempt adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim si senioe viall ad minim veniam.
                                        Quis nostrud exercitation ullamco laboris villiam nuesrt vial nisi.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 align-self-center h-100' />
                            <div className='col-md-4 align-self-end h-100' />
                        </div>
                        <div className='row'>
                            <div className='col-md-8 h-100' />
                            <div className='col-md-4 align-self-end h-100'>
                                <div className={AboutUsStyle.aboutUsSubText}>
                                    <h2>
                                        Creating a World Class Solution for Business
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};