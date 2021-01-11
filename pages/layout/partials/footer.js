import footerStyle from '../../../styles/footer.module.css'
// import { Form, Button } from 'react-bootstrap';

export default function Footer() {
    return (
        <section className={footerStyle.footerBlock}>
            <div className='container py-5'>
                <div className='row'>
                    <div className={`col-md-3 ${footerStyle.footerListWrapper}`}>
                        <div className='px-4'>
                            <div className='mb-3 mt-n3'>
                                <img src="/logo.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className={footerStyle.footerListWrapper}>
                        <ul className={footerStyle.footerList}>
                            <li>
                                CONTACT
                            </li>
                            <li>
                                LOCATIONS
                            </li>
                            <li>
                                CAREERS
                            </li>
                            <li>
                                SITEMAP
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className={footerStyle.footerListWrapper}>
                        <ul className={footerStyle.footerList}>
                            <li>
                                DIM PRIVACY POLICY
                            </li>
                            <li>
                                DIM'S MODERN SLAVERY STATEMENT
                            </li>
                            <li>
                                DMI SUSTAINABILITY POLICY
                            </li>
                            <li>
                                EMPLOYEES
                            </li>
                            <li>
                                <ul className={footerStyle.footerList}>
                                    <li>Facebook</li>
                                    <li>instagram</li>
                                    <li>twiter</li>
                                    <li>pintrest</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className={footerStyle.footerListWrapper}>
                        <ul className={footerStyle.footerList}>
                            <li>
                                © Copyright Global Digitronix. All Rights Reserved
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};