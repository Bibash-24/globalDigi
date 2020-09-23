import ContactStyles from '../../../styles/contact.module.css'
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <section>
            <div className={ContactStyles.contactOverview}>
                <div className={ContactStyles.contactWrapper}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className={ContactStyles.contactImg}>
                                    Image 
                                {/* <img src='/img/person-231x300.png' /> */}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div>
                                    <small className='text-left mb-1'>GET THE RIGHT PERSPECTIVE</small>
                                    <h2 className='mb-4'>Contact for Consulting</h2>
                                    <Form className={ContactStyles.contactForm}>
                                        <Form.Group controlId="formName" className='my-4'>
                                            <Form.Control type="text" placeholder="Name" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail" className='my-4'>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>

                                        <Form.Group controlId="formName" className='my-4'>
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

                                        <Button type="submit" size="lg" className='w-100 my-2'>
                                            Submit
                                        </Button>
                                    </Form>
                                    <small className='mt-2'>
                                    Our Experts will call back to you in your comfortable time within 2 business days.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};