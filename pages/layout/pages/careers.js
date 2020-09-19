// import Collapse from 'react-bootstrap/Collapse'
// import { Form, Button } from 'react-bootstrap';
import careersStyles from '../../../styles/careers.module.css'
// import { Form, Button } from 'react-bootstrap';

export default function Careers() {
    const [open, setOpen] = React.useState(false);

    return (
        <section>
            <div className={careersStyles.careersOverview}>
                <h2 className='text-center d-block mb-5'>Careers</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className={careersStyles.careersImgWrapper}>
                            <div className={careersStyles.careersImg}>
                                <h3 className='blockWrapper'>Up for a new challenge?</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={careersStyles.careersListBlock}>
                            <h3 className='blockWrapper'>Our current openings</h3>
                            <div className={careersStyles.careersList}>
                            <p>Operation manager</p>
                            <p>React Developer</p>
                            <p>Intern</p>
                            <p>Marketing officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};