import teamStyles from '../../../styles/team.module.css'

export default function Team() {
    return (
        <section>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-md-4'>
                        <div className={teamStyles.imgTopWrapper}>
                            <img src="/img/teams/ceo.jpg" />
                            <div>Mohit Badu</div>
                            <small>CEO and Founder</small>
                        </div>
                        <div className={teamStyles.imgBottomWrapper}>
                            <img src="/img/teams/ceo.jpg" />
                            <div>Mohit Badu</div>
                            <small>CEO and Founder</small>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={teamStyles.imgRightWrapper}>
                            <img src="/img/teams/ceo.jpg" />
                            <div>Mohit Badu</div>
                            <small>CEO and Founder</small>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div>THE BEST OF EVERYTHING</div>
                        <div>Our Teams</div>
                    </div>
                </div>
            </div>
        </section>
    );
};