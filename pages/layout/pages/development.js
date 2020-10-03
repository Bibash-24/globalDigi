import DevelopmentStyles from '../../../styles/development.module.css'

export default function Development() {
    return (
        <section>
            <div className={DevelopmentStyles.developmentOverview}>
                <div className={`container ${DevelopmentStyles.developmentWrapper}`}>
                    <h2 className='text-center'>Devlopment Process</h2>

                    <div className='row justify-content-between text-center'>
                        <div className='px-4'>
                            <img src="img\dev-process\research.png" />
                            <h2>Research</h2>
                        </div>
                        <div className='px-4'>
                            <img src="img\dev-process\concept.png" />
                            <h2>Concepts</h2>
                        </div>
                        <div className='px-4'>
                            <img src="img\dev-process\design.png" />
                            <h2>Design</h2>
                        </div>
                        <div className='px-4'>
                            <img src="img\dev-process\build.png" />
                            <h2>Build</h2>
                        </div>
                        <div className='px-4'>
                            <img src="img\dev-process\test.png" />
                            <h2>Test</h2>
                        </div>
                        <div className='px-4'>
                            <img src="img\dev-process\review.png" />
                            <h2>Review</h2>
                        </div>
                        <div className='px-4'>
                            <img src="img\dev-process\launch.png" />
                            <h2>Launch</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};