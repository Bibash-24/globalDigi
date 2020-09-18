import productStyles from '../../../styles/product.module.css'

export default function Products() {
    return (
        <section className={productStyles.productOverview}>
            <div className=''>
                <div className="row">
                    <div className="col-md-4">
                        <img className={productStyles.productOverviewImage} src="/img/cgas.png" />
                        <div className={productStyles.productOverviewTitle}>
                            <h2>CENTRAL LEVEL GOVERNMENT ACCOUNTING SYSTEM</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className={productStyles.productOverviewImage} src="/img/cgas.png" />
                        <div className={productStyles.productOverviewTitle}>
                            <h2>PERSONNEL INFORMATION SYSTEM</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className={productStyles.productOverviewImage} src="/img/cgas.png" />
                        <div className={productStyles.productOverviewTitle}>
                            <h2>ACCOUNTING PACKAGE FOR OFFICE</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className={productStyles.productOverviewImage} src="/img/cgas.png" />
                        <div className={productStyles.productOverviewTitle}>
                            <h2>INVENTORY MANAGEMENT SYSTEM</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className={productStyles.productOverviewImage} src="/img/cgas.png" />
                        <div className={productStyles.productOverviewTitle}>
                            <h2>QUESTIONER ANALYSIS SYSTEM</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className={productStyles.productOverviewImage} src="/img/cgas.png" />
                        <div className={productStyles.productOverviewTitle}>
                            <h2>Antivirus Software</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};