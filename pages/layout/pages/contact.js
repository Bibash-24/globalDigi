import ContactStyles from '../../../styles/contact.module.css'
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <section>
            <div className={ContactStyles.contactOverview}>
                <h2 className='d-block text-center mb-5'>Contact</h2>
                <div className='container'>
                    <div className={ContactStyles.contactWrapper}>
                        <div className={`row ${ContactStyles.contactRow}`}>
                            <div className='col-md-6'>
                                <h3 className='blockWrapper'>Keep in touch!</h3>
                                <p>Subidhanagar, Tinkune, Kathmandu</p>
                                <p>+977-1-4111897</p>
                                <p>info@globaldg.net</p>
                                <Form className={ContactStyles.contactForm}>
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

                                    <Button type="submit" size="lg" className='w-100'>
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                            <div className='col-md-6'>
                                <div className={ContactStyles.contactImgBlock}>
                                    <div className={ContactStyles.contactImg}>
                                        <h3 className='blockWrapper'>Send a digital high five</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className={ContactStyles.contactLocationMap}>
                                <h3 className='blockWrapper'>Visit us</h3>
                                <h2>Location map here</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};