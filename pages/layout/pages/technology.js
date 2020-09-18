import technologyStyles from '../../../styles/technology.module.css'

export default function Technology() {
    return (
        <section>
            <div className={technologyStyles.technologyOverview}>
                <h1>Technology we like</h1>
                <div className='d-flex flex-wrap'>
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
                    {/* <div>
                        <img src='/img/technology/php.png' />
                    </div>
                    <div>
                        <img src='/img/technology/php.png' />
                    </div> */}
                </div>
            </div>
        </section>
    );
};