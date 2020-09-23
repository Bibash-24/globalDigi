import InfoStyles from '../../../styles/info.module.css'

export default function Info() {
    return (
        <section>
            <div className={InfoStyles.infoOverview}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <h2>A Successful Entrepreneurial Development Process</h2>
                            <ul className='my-3 mx-0 p-0'>
                                <li className='my-2'>
                                    Protection for downtime
                                </li>
                                <li className='my-2'>
                                    Market Analysis
                                </li>
                                <li className='my-2'>
                                    Pre-Visual Analysis
                                </li>
                                <li className='my-2'>
                                    Progress & growth
                                </li>
                            </ul>
                            <p>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div className='col-md-7'>
                            <div className={InfoStyles.infoImageWrapper}>
                                <div>
                                    Image
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};