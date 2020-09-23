import footerStyle from '../../../styles/footer.module.css'
// import { Form, Button } from 'react-bootstrap';

export default function Footer() {
    return (
        <section className={footerStyle.footerBlock}>
            <div className='container'>
                <div className='row'>
                    <div className={`col-md-3 ${footerStyle.footerListWrapper}`}>
                        <div className='px-4'>
                            <div className='mb-3 mt-n3'><img src="/logo.png" /></div>
                            <div>
                                Global Digitronix focuses on multiplying the business of ICT
                                including software and hardware by providing quality service and
                                to make things easier and saving of time/effort by using software.
                        </div>
                        </div>
                    </div>
                    <div className={`col-md-3 ${footerStyle.footerListWrapper}`}>
                        <div className='px-4'>
                            <div className={footerStyle.listTItle}>Contact us</div>
                            <ul className='p-0'>
                                <li>Subidhanagar, Tinkune  Kathmandu, Nepal</li>
                                <li>+977 1 4111897</li>
                                <li>GPO Box: 8975, EPC: 5477</li>
                                <li>info@globaldg.net</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-md-3 ${footerStyle.footerListWrapper}`}>
                        <div className='px-4'>
                            <div className={footerStyle.listTItle}>Links</div>
                            <ul className='p-0'>
                                <li>About us</li>
                                <li>Career</li>
                                <li>Products</li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={`col-md-3 ${footerStyle.footerListWrapper}`}>
                        <div className='px-4'>
                            <div className={footerStyle.listTItle}>Rocking on social</div>
                            <ul className='p-0'>
                                <li>facebook</li>
                                <li>insta</li>
                                <li>twiter</li>
                                <li>in</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='text-center pb-3'>
                    © Copyright Global Digitronix. All Rights Reserved
                </div>
            </div>
        </section>
    );
};