import { Card } from 'react-bootstrap';

const EducationCard = (props) => {
    return (
        <Card className="edu-card box-shadow">
            <Card.Img variant="top" src={props.imgUrl} alt="logo"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {   props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EducationCard;