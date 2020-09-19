import teamStyles from '../../../styles/team.module.css'

export default function Team() {
    return (
        <section>
            <div className={`container ${teamStyles.teamOverview}`}>
                <div className='row'>
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
                        <small className='text-left'>THE BEST OF EVERYTHING</small>
                        <h2>Our Teams</h2>
                        <p>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris villiam nuesrt vial nisi.
                        </p>
                        <h3>Service Over 10+ years</h3>
                        <p>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris villiam nuesrt vial nisi.
                        </p>
                        <h3>Game Changers</h3>
                        <p>
                            Qui nunc nobis videntur parum clari, sollemnes in futurum putamus parum claram legere. 
                            Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};