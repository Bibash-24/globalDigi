import DevelopmentStyles from '../../../styles/development.module.css'

export default function Development() {
    return (
        <section>
            <div className='container'>
                <h1>DEVELOPMENT THROUGHOUT</h1>
                <div>Our Stats in Numbers</div>

                <div className='row justify-content-between'>
                    <div className={DevelopmentStyles.gdDevelopmentBlock}>
                        <div>
                            300+
                        </div>
                        <div>
                            Projects Completed
                        </div>
                    </div>
                    <div className={DevelopmentStyles.gdDevelopmentBlock}>
                        <div>
                            300+
                        </div>
                        <div>
                            Projects Completed
                        </div>
                    </div>
                    <div className={DevelopmentStyles.gdDevelopmentBlock}>
                        <div>
                            300+
                        </div>
                        <div>
                            Projects Completed
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};