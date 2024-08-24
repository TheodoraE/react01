import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
    return (
        <div className="py-5 mb-5" style={{backgroundColor:'#1F0039', color:'white'}}>
            <Container className='py-2 mb-5'>
            <Row className='py-3'>
                <Col><h4>- Contactez-nous -</h4></Col>
            </Row>
            <Row className='pt-4 pb-4'>
                <Col xs={12} md={4} className='p-2'>
                    <Row><h5>Instagram</h5></Row>
                    <Row><a href="https://www.instagram.com/socab_youth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='text-reset' target='_blank' rel="noreferrer" >socab_youth</a></Row>
                </Col>
                <Col xs={12} md={4} className='p-2'>
                    <Row><h5>Facebook</h5></Row>
                    <Row><a href="https://www.facebook.com/groups/787885201383996/" className='text-reset' target='_blank' rel="noreferrer" >SOCAB - Syriac Orthodox Church Antioch Belgium</a></Row>
                </Col>
                <Col xs={12} md={4} className='p-2'>
                    <Row><h5>E-mail</h5></Row>
                    <Row><a href="mailto:youth@socab.be" className='text-reset' target='_blank' rel="noreferrer" >youth@socab.be</a></Row>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default Contact;