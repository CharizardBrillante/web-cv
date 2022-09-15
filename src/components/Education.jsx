import { Container, Row, Col } from 'react-bootstrap';
import EducationCard from './EducationCard';
import unimiLogo from '../images/unimi-logo.png';
import epicodeLogo from '../images/epicode-logo.png';
import codinGameLogo from '../images/codingame-logo.svg';
import AccDomaniLogo from '../images/acc-domani-logo.png';

const Education = () => {
    return (
        <Container className="Education">
            <Row>
                <Col className="section-title">
                    <h2>Education</h2>
                    <div className="title-line"></div>
                </Col>
            </Row>
            <Row>
                <Col  className="edu-col">
                    <EducationCard
                        imgUrl={unimiLogo}
                        title="Bechelor of Philosophy"
                        text="Università degli studi di Milano"
                        className="uni-card"/>
                </Col>
                <Col className="edu-col">
                    <EducationCard
                        imgUrl={unimiLogo}
                        title="Master of Philosophical Sciences"
                        text="Università degli studi di Milano"
                        className="uni-card"/>                
                </Col>
            </Row>
            <Row>
                <Col className="section-title">
                    <h2>Certifications</h2>
                    <div className="title-line"></div>
                </Col>
            </Row>
            <Row>
                <Col className="edu-col">
                <EducationCard
                        imgUrl={epicodeLogo}
                        title="Full-stack developer"
                        text="Epicode s.r.l."/>
                </Col>
                <Col className="edu-col">
                <EducationCard
                        imgUrl={codinGameLogo}
                        title="Python 3 developer"
                        text="CodinGame"/>
                </Col>
                <Col className="edu-col">
                <EducationCard
                        imgUrl={AccDomaniLogo}
                        title="JavaScript developer"
                        text="Accademia Domani s.r.l."/>
                </Col>
            </Row>
        </Container>
    )
};

export default Education;