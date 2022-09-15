import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { BsTelephoneFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Profile = () => {

    return (
        <Container className="profile">
            <Row >
                <Col className="section-title">
                    <h2>Profile</h2>
                    <div className="title-line"></div>
                </Col>
            </Row>
            <Row className="profile-flex text-center">
                <Col lg={4} xl={3}>
                    <img src="https://www.fillmurray.com/180/180" alt="avatar" className="avatar box-shadow" />
                    <ListGroup className="profile-info box-shadow">
                        <ListGroup.Item className="profile-info-item">
                            <p className="profile-address">
                                <FiMail size={24} className="mx-1"/>
                                <a href="mailto:d.terracciano.bsc@gmail.com"> d.terracciano.bsc@gmail.com</a>
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item className="profile-info-item">
                            <p className="profile-address">
                                <BsTelephoneFill size={20} className="mx-1"/>
                                <a href="tel:+393807993509"> +39 3807993509</a>
                            </p>
                        </ListGroup.Item>    
                    </ListGroup>
                </Col>
                <Col lg={8} xl={9}>
                    <div className="profile-text box-shadow">
                        <p className="profile-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!</p>

                        <p className="profile-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!</p>

                        <p className="profile-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi id autem atque vitae, repudiandae rem dicta similique minima ab cum libero facilis magnam odio commodi est suscipit consequatur veritatis!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Profile;