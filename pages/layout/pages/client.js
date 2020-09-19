import clientStyles from '../../../styles/client.module.css'

export default function Client() {
    return (
        <section>
            <div className={clientStyles.ClientOverview}>
            <div className='container'>
                <small>TESTIMONIAL</small>
                <div className='row my-5'>
                    <div className={`col-md-6 ${clientStyles.ClientBlock}`}>
                        <h3 className={`blockWrapper ${clientStyles.blockWrapperTitle}`}>Kinds Words From Clients</h3>
                        <div className={clientStyles.ClientBanner} />
                        <h3 className={`blockWrapper ${clientStyles.blockWrapperSubTitle}`}>Making Sure all our Clients are Satisfied</h3>
                    </div>
                    <div className='col-md-6'>
                        <div className={clientStyles.clientWrapper}>
                            <p className={clientStyles.clientMsg}>
                                As conscious traveling Paup ers we must always be oncerned
                                about our dear Mother Earth. If you think about it, you
                                travel across her face and She is the host to your
                                journey.
                            </p>
                            <div className='d-flex flex-wrap align-items-center'>
                                <div className={clientStyles.clientImgFrame}>
                                    <img className={clientStyles.clientImg} src='/img/teams/ceo.jpg' />
                                </div>
                                <div className='ml-4'>
                                    <h4>Fanny Spencer</h4>
                                    <p>Chief Executive, Amazon</p>
                                </div>
                            </div>
                        </div>
                        <div className={clientStyles.clientWrapper}>
                            <p>
                                As conscious traveling Paup ers we must always be oncerned
                                about our dear Mother Earth. If you think about it, you
                                travel across her face and She is the host to your
                                journey.
                            </p>
                            <div className='d-flex flex-wrap align-items-center'>
                                <div className={clientStyles.clientImgFrame}>
                                    <img className={clientStyles.clientImg} src='/img/teams/ceo.jpg' />
                                </div>
                                <div className='ml-4'>
                                    <h4>Fanny Spencer</h4>
                                    <p>Chief Executive, Amazon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className={clientStyles.showClientsList}>
                        <ul className='d-flex'>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                            <li>
                                <img src='/img/clients/client-12.png' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};