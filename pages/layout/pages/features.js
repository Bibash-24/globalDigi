import DevelopmentStyles from '../../../styles/development.module.css'
import { Card } from 'react-bootstrap';

export default function Features() {
    return (
        <section>
            <div className={DevelopmentStyles.developmentOverview}>
                <div className={`container ${DevelopmentStyles.developmentWrapper}`}>
                    <h2 className='text-center'>Key Features</h2>
                    <div className='row text-center'>
                        <div className='col-md-4 mb-4'>
                            {/* <CardGroup> */}
                            <Card className={`h-100 ${DevelopmentStyles.cardView}`}>
                                <Card.Img className={DevelopmentStyles.cardImg} variant="top" src="img/features/client.png" />
                                <Card.Body>
                                    <Card.Title>Client Centric Development</Card.Title>
                                    <Card.Text>
                                        <blockquote className="blockquote mb-0 card-body">
                                            <cite title="Source Title">
                                                We are the one that delivers best solutions to the clients by tailoring as per their business requirements.
                                            </cite>
                                        </blockquote>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <Card className={`h-100 ${DevelopmentStyles.cardView}`}>
                                <Card.Img className={DevelopmentStyles.cardImg} variant="top" src="img/features/agile.png" />
                                <Card.Body>
                                    <Card.Title>Agile Development</Card.Title>
                                    <Card.Text>
                                        <blockquote className="blockquote mb-0 card-body">
                                            <cite title="Source Title">
                                                We follow Agile Development process that helps us to deliver the project with utmost quality and solid product.
                                            </cite>
                                        </blockquote>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <Card className={`h-100 ${DevelopmentStyles.cardView}`}>
                                <Card.Img className={DevelopmentStyles.cardImg} variant="top" src="img/features/team.png" />
                                <Card.Body>
                                    <Card.Title>Dedicated Development Team</Card.Title>
                                    <Card.Text>
                                        <blockquote className="blockquote mb-0 card-body">
                                            <cite title="Source Title">
                                                We assign a cost-effective dedicated team to all our projects that not only assures quality but gives excellent support and satisfaction to our valuable clients.
                                            </cite>
                                        </blockquote>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <Card className={`h-100 ${DevelopmentStyles.cardView}`}>
                                <Card.Img className={DevelopmentStyles.cardImg} variant="top" src="img/features/support.png" />
                                <Card.Body>
                                    <Card.Title>Excellent Support</Card.Title>
                                    <Card.Text>
                                        <blockquote className="blockquote mb-0 card-body">
                                            <cite title="Source Title">
                                                We are always there to assist our clients in every possible manner at each project phase. Our technical team works hard to ensure that the final product meets clients' expectations.
                                            </cite>
                                        </blockquote>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <Card className={`h-100 ${DevelopmentStyles.cardView}`}>
                                <Card.Img className={DevelopmentStyles.cardImg} variant="top" src="img/features/quality.png" />
                                <Card.Body>
                                    <Card.Title>Quality Deliverance</Card.Title>
                                    <Card.Text>
                                        <blockquote className="blockquote mb-0 card-body">
                                            <cite title="Source Title">
                                                We believe in delivering quality products to our clients by assuring all their project specification in the best industry competitive price.
                                            </cite>
                                        </blockquote>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <Card className={`h-100 ${DevelopmentStyles.cardView}`}>
                                <Card.Img className={DevelopmentStyles.cardImg} variant="top" src="img/features/enhancement.png" />
                                <Card.Body>
                                    <Card.Title>Enhancement</Card.Title>
                                    <Card.Text>
                                        <blockquote className="blockquote mb-0 card-body">
                                            <cite title="Source Title">
                                                During Discovery, Designing and Development phases, our technical team always there to provide suggestions and edits that improvise their product in the best possible manner.
                                            </cite>
                                        </blockquote>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        {/* </CardGroup> */}
                    </div>
                </div>
            </div>
        </section>
    );
};