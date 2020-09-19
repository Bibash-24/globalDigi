import technologyStyles from '../../../styles/technology.module.css'

export default function Technology() {
    return (
        <section>
            <div className={technologyStyles.technologyOverview}>
                <div className={technologyStyles.technologyWrapper}>
                    <h2 className='d-block text-center'>Technology we like</h2>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <div className={technologyStyles.langBanner}>
                            <img src='/img/technology/php.png' />
                        </div>
                        <div className={technologyStyles.langBanner}>
                            <img src='/img/technology/angular.png' />
                        </div>
                        <div className={technologyStyles.langBanner}>
                            <img src='/img/technology/react.png' />
                        </div>
                        <div className={technologyStyles.langBanner}>
                            <img src='/img/technology/vue.png' />
                        </div>
                        <div className={technologyStyles.langBanner}>
                            <img src='/img/technology/laravel.png' />
                        </div>
                        <div className={technologyStyles.langBanner}>
                            <img src='/img/technology/dotnet.png' />
                        </div>
                        <div className={technologyStyles.langBanner}>
                            <img src='/img/technology/java-logo.png' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};