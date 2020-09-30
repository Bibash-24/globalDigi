import technologyStyles from '../../../styles/technology.module.css'
import { Tabs, Tab } from 'react-bootstrap';

export default function Technology() {
    return (
        <section className={`w-100 gd-technology-overview gd-services-overview ${technologyStyles.technologyBlock}`}>
            <div className='container-fluid' >
                <div className="col-sm-12">

                    <Tabs defaultActiveKey="mobile" className='justify-content-center'>
                        <Tab eventKey="mobile" title="Mobile">
                            <div className="tab-item-wrapper">
                                <div className='d-flex flex-wrap justify-content-between py-5 align-items-end'>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/mobile/ios.svg" />
                                        <h6>iOS</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/mobile/android.svg" />
                                        <h6>Android</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/mobile/native.svg" />
                                        <h6>React Native</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/mobile/flutter.svg" />
                                        <h6>Flutter</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/mobile/ionic.svg" />
                                        <h6>Ionic</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/mobile/swift.svg" />
                                        <h6>Swift</h6>
                                    </div>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="frontend" title="Front End">
                            <div className="tab-item-wrapper">
                                <div className='d-flex flex-wrap justify-content-between py-5 align-items-end'>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/frontend/angular-js.svg" />
                                        <h6>Angular JS</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/frontend/react-js.svg" />
                                        <h6>React JS</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/frontend/typescript.svg" />
                                        <h6>Typescript</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/frontend/vue-js.svg" />
                                        <h6>Vue JS</h6>
                                    </div>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="database" title="Database">
                            <div className="tab-item-wrapper">
                                <div className='d-flex flex-wrap justify-content-between py-5 align-items-end'>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/database/mango-db.svg" />
                                        <h6>Mongo DB</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/database/my-sql.svg" />
                                        <h6>MySQL</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/database/ms-sql.svg" />
                                        <h6>MsSQL</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/database/firebase.svg" />
                                        <h6>Firebase</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/database/oracle.svg" />
                                        <h6>Oracle</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/database/postgresql.svg" />
                                        <h6>PostgreSQL</h6>
                                    </div>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="backend" title="Back End">
                            <div className="tab-item-wrapper">
                                <div className='d-flex flex-wrap justify-content-between py-5 align-items-end'>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/backend/php.svg" />
                                        <h6>PHP</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/backend/java.svg" />
                                        <h6>Java</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/backend/dot-net.svg" />
                                        <h6>.NET</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/backend/node-js.svg" />
                                        <h6>Node JS</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/backend/rails.svg" />
                                        <h6>Rails</h6>
                                    </div>
                                    <div className='p-3 text-center'>
                                        <img className='mb-2' src="/img/tech/backend/python.svg" />
                                        <h6>Python</h6>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>

                </div>
            </div>
        </section>
    );
};