import productStyles from '../../../styles/product.module.css'
import { Button } from 'react-bootstrap';

export default function Products() {
    return (
        <section className={productStyles.productOverview}>
            <div className={productStyles.productOverviewBlock}>
                <div className='container'>
                    <div className={productStyles.productOverviewBlockWrapper}>
                        <div>
                            <div className={productStyles.productTitle}>
                                <small>ELEGANT & BEST</small>
                                <h2>Our Products</h2>
                            </div>
                            <div className="row mx-2">
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
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
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-down"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
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
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
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
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
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
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                        className='h-100'
                                    >
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
                                </div>
                                <div className={`col-md-4 text-center ${productStyles.productCol}`}>
                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                    >
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};