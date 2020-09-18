import footerStyle from '../../../styles/footer.module.css'
import { Form, Button } from 'react-bootstrap';

export default function Footer() {
    return (
        <section className={footerStyle.footerBlock}>
                <div className='d-flex justify-content-end'>
                    <div className={footerStyle.footerContactWrapper}>
                        <div>
                            Send a digital high five
                        </div>
                        <Form className={footerStyle.footerContactForm}>
                            <Form.Group controlId="formName">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formName">
                                <Form.Control type="number" placeholder="Phone number" />
                            </Form.Group>

                            <Form.Group controlId="formGridState">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Contact us regarding</option>
                                    <option>Antivirus Solution</option>
                                    <option>Web hosting</option>
                                    <option>Web development</option>
                                    <option>Domain Registration</option>
                                    <option>Network device supply</option>
                                    <option>E-attandance software</option>
                                    <option>CC camera installation</option>
                                </Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit" className='w-100'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className='container'>
                <div className='row'>
                    <div className={`col-md-4 ${footerStyle.footerListWrapper}`}>
                        <div>Global Digitronix</div>
                        <div>
                            Global Digitronix focuses on multiplying the business of ICT
                            including software and hardware by providing quality service and
                            to make things easier and saving of time/effort by using software.
                                </div>
                    </div>
                    <div className={`col-md-4 ${footerStyle.footerListWrapper}`}>
                        <div>CONTACT US</div>
                        <ul>
                            <li>Subidhanagar, Tinkune  Kathmandu, Nepal</li>
                            <li>+977 1 4111897</li>
                            <li>GPO Box: 8975, EPC: 5477</li>
                            <li>info@globaldg.net</li>
                        </ul>
                    </div>
                    <div className={`col-md-4 ${footerStyle.footerListWrapper}`}>
                        <div>Rocking on social</div>
                        <ul>
                            <li>facebook</li>
                            <li>insta</li>
                            <li>twiter</li>
                            <li>in</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};