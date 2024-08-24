import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Familiale from '../img/familiale.jpg';
import Soiree from  '../img/soiree.jpg';
import Priere from '../img/priere.jpg';
import Conference from '../img/conference.jpg';
import Lecture from '../img/lecture.jpg';

function Event() {
    return (
        <div className="py-5">
            <Container className='py-2'>
            <Row className='py-3'>
                <Col><h2>Nos événements</h2></Col>
            </Row>
            <Row className='pt4 pb-4'>
                <h5>Chaque année nous organisons:</h5>
            </Row>
            <Row>
                <Col xs={12} md={4} className='p-2'>
                    <Row className='pb-2'><h6>Des prières pour la jeunesse</h6></Row>
                    <Row className='pb-2'><img src={Priere} height="auto" alt="Prière" /></Row>
                </Col>
                <Col xs={12} md={4} className='p-2'>
                    <Row className='pb-2'><h6>Des lectures bibliques</h6></Row>
                    <Row className='pb-2'><img src={Lecture} height="auto" alt="Lecture biblique" /></Row>
                </Col>
                <Col xs={12} md={4} className='p-2'>
                    <Row className='pb-2'><h6>Des soirées pour les jeunes</h6></Row>
                    <Row className='pb-2'><img src={Soiree} height="auto" alt="Soirées" /></Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={2} className='p-2'></Col>
                <Col xs={12} md={4} className='p-2'>
                    <Row className='pb-2'><h6>Une journée familiale</h6></Row>
                    <Row className='pb-2'><img src={Familiale} height="auto" alt="Journée familiale" /></Row>
                </Col>
                <Col xs={12} md={4} className='p-2'>
                    <Row className='pb-2'><h6>Des conférences sur un sujet théologique</h6></Row>
                    <Row className='pb-2'><img src={Conference} height="auto" alt="Conférences" /></Row>
                </Col>
                <Col xs={12} md={2} className='p-2'></Col>
            </Row>
            </Container>
            <div id='team'></div>
        </div>
    );
}

export default Event;