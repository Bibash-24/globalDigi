import clientStyles from '../../../styles/client.module.css'

export default function Client() {
    return (
        <section>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-md-6'>
                        <h1>Making Sure all our Clients are Satisfied</h1>
                    </div>
                    <div className='col-md-6'>
                        <div className={clientStyles.clientWrapper}>
                            <p className={clientStyles.clientMsg}>
                                As conscious traveling Paup ers we must always be oncerned
                                about our dear Mother Earth. If you think about it, you
                                travel across her face and She is the host to your
                                journey.
                            </p>
                            <div className='d-flex flex-wrap justify-content-between align-items-baseline'>
                                <div>
                                    <h4>Fanny Spencer</h4>
                                    <p>Chief Executive, Amazon</p>
                                </div>
                                <div className={clientStyles.clientImgFrame}>
                                    <img className={clientStyles.clientImg} src='/img/teams/ceo.jpg' />
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
                            <div className='d-flex flex-wrap justify-content-between align-items-baseline'>
                                <div>
                                    <h4>Fanny Spencer</h4>
                                    <p>Chief Executive, Amazon</p>
                                </div>
                                <div className={clientStyles.clientImgFrame}>
                                    <img className={clientStyles.clientImg} src='/img/teams/ceo.jpg' />
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
        </section>
    );
};