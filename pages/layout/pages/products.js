import productStyles from '../../../styles/product.module.css'
import { Button } from 'react-bootstrap';

export default function Products() {
    return (
        <section className={productStyles.productOverview}>
            <div className={productStyles.productOverviewBlock}>
                <div className='container'>
                    <div className={productStyles.productOverviewBlockWrapper}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className={productStyles.productOverviewInfo}>
                                    <small className='text-left'>
                                        HOW DOES WE WORK
                                    </small>
                                    <h2 className='my-4'>
                                        Like the River of Life we work upstream to live with the current
                                    </h2>
                                    <p>
                                        Consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris
                                        villiam nuesrt vial nisi to make its vaila.
                                    </p>
                                    <Button variant="primary" className={productStyles.productButton}>View all Product</Button>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className={productStyles.productImage}>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={productStyles.productWrapper}>
                <div className={productStyles.productTitle}>
                    <small>ELEGANT & BEST</small>
                    <h2>Our Products</h2>
                </div>
                <div className="row mx-2">
                    <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                        <div className='d-flex h-100'>
                            <div className={productStyles.imgBlock}>
                                <img className={productStyles.productOverviewImage} src="/img/products/CLGAS.jpg" />
                                <div className={productStyles.productOverviewDetails}>
                                    <h4>CENTRAL LEVEL GOVERNMENT ACCOUNTING SYSTEM</h4>
                                    <ul>
                                        <li>Great UI</li>
                                        <li>24 hr Full service support</li>
                                        <li>Repairing and maintenance</li>
                                        <li>Web hosting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                        <div className='d-flex h-100'>
                            <div className={productStyles.imgBlock}>
                                <img className={productStyles.productOverviewImage} src="/img/products/PIS.jpg" />
                                <div className={productStyles.productOverviewDetails}>
                                    <h4>PERSONNEL INFORMATION SYSTEM</h4>
                                    <ul>
                                        <li>Great UI</li>
                                        <li>24 hr Full service support</li>
                                        <li>Repairing and maintenance</li>
                                        <li>Web hosting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                        <div className='d-flex h-100'>
                            <div className={productStyles.imgBlock}>
                                <img className={productStyles.productOverviewImage} src="/img/products/ACCU.jpg" />
                                <div className={productStyles.productOverviewDetails}>
                                    <h4>ACCOUNTING PACKAGE FOR OFFICE</h4>
                                    <ul>
                                        <li>Great UI</li>
                                        <li>24 hr Full service support</li>
                                        <li>Repairing and maintenance</li>
                                        <li>Web hosting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                        <div className='d-flex h-100'>
                            <div className={productStyles.imgBlock}>
                                <img className={productStyles.productOverviewImage} src="/img/products/IMS.jpg" />
                                <div className={productStyles.productOverviewDetails}>
                                    <h4>INVENTORY MANAGEMENT SYSTEM</h4>
                                    <ul>
                                        <li>Great UI</li>
                                        <li>24 hr Full service support</li>
                                        <li>Repairing and maintenance</li>
                                        <li>Web hosting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                        <div className='d-flex h-100'>
                            <div className={productStyles.imgBlock}>
                                <img className={productStyles.productOverviewImage} src="/img/products/QAS.jpg" />
                                <div className={productStyles.productOverviewDetails}>
                                    <h4>QUESTIONER ANALYSIS SYSTEM</h4>
                                    <ul>
                                        <li>Great UI</li>
                                        <li>24 hr Full service support</li>
                                        <li>Repairing and maintenance</li>
                                        <li>Web hosting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                        <div className='d-flex h-100'>
                            <div className={productStyles.imgBlock}>
                                <img className={productStyles.productOverviewImage} src="/img/products/Antivirus.jpg" />
                                <div className={productStyles.productOverviewDetails}>
                                    <h4>Antivirus Software</h4>
                                    <ul>
                                        <li>Great UI</li>
                                        <li>24 hr Full service support</li>
                                        <li>Repairing and maintenance</li>
                                        <li>Web hosting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
};