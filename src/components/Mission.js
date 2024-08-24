import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mission() {
    return (
        <div className="py-5" style={{backgroundColor:'#1F0039', color:'white'}}>
            <Container className='py-2'>
            <Row className='py-3'>
                <Col><h2>Notre mission</h2></Col>
            </Row>
            <Row className='pt-4 pb-4'>
                <h5 className='py-2'>Rassembler les jeunes de notre communité </h5>
                <h5 className='py-2'>Pouvoir leur donner des occasions de célébrer notre culture. </h5>
                <h5 className='py-2'>Donner un cadre où notre jeunesse se sente à l’aise de pouvoir communiquer avec les grands responsables des églises.</h5>
                <h5 className='py-2'>Faire en sorte que les jeunes de la communauté se retrouvent et créent des liens.</h5>
                <h5 className='py-2'>Nous sommes à l’écoute des demandes de la jeunesse et essayons d’y répondre au mieux.</h5>
            </Row>
            </Container>
            <div id="event"></div>
        </div>
    );
}

export default Mission;