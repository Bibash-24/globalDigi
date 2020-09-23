import DevelopmentStyles from '../../../styles/development.module.css'

export default function Development() {
    return (
        <section>
            <div className={DevelopmentStyles.developmentOverview}>
            <div className={`container ${DevelopmentStyles.developmentWrapper}`}>
                <small>DEVELOPMENT THROUGHOUT</small>
                <h2 className='text-center'>Our Stats in Numbers</h2>

                <div className='row justify-content-between text-center'>
                    <div className={DevelopmentStyles.gdDevelopmentBlock}>
                        <div className={DevelopmentStyles.gdDevelopmentStat}>
                            300+
                        </div>
                        <p>
                            Projects Completed
                        </p>
                    </div>
                    <div className={DevelopmentStyles.gdDevelopmentBlock}>
                        <div className={DevelopmentStyles.gdDevelopmentStat}>
                            300+
                        </div>
                        <p>
                            Projects Completed
                        </p>
                    </div>
                    <div className={DevelopmentStyles.gdDevelopmentBlock}>
                        <div className={DevelopmentStyles.gdDevelopmentStat}>
                            300+
                        </div>
                        <p>
                            Projects Completed
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};