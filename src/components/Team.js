import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Antoni from '../img/Antoni.jpg';
import Ben from '../img/Ben1.jpg';
import Christian from '../img/Christian.jpg';
import Christophe from '../img/Christophe.jpg';
import Devin from '../img/Devin.jpg';
import Isabelle from '../img/Isa.jpg';
import Johan from '../img/Johan.jpg';
import Jon from '../img/Jon.jpg';
import Mathias from'../img/Mathias.jpg';
import Meryem from '../img/Meryem.jpg';
import Mich from '../img/Mich.jpg';
import Petrus from '../img/Petrus.jpg';
import Sarah from '../img/Sarah.jpg';
import Shabo from '../img/Shabo.jpg';
import Stefaan from '../img/Stefaan.png';
import Thomas from '../img/Thomas.jpg';
import Tid from '../img/Tid.jpg';
import Vivi from '../img/Vivi.png';

function Team() {
    return (
        <div className="py-5 border-top">
            <Container className='py-2'>
            <Row className='py-3'>
                <Col><h2>Découvrez la team</h2></Col>
            </Row>
            <Row className='pt4 pb-4'>
                <h5>Nous sommes 18 jeunes de 5 églises de Belgique</h5>
            </Row>
            <Row>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Antoni} height="auto" alt="Antoni" /></Row>
                    <Row><h4>Antoni</h4></Row>
                    <Row><h6 className='mb-0'>Nouveau DJ attitré</h6></Row>
                    <Row><p className='mb-1 fst-italic'>*Parle parfaitement Suryoyo*</p></Row>
                    <Row><p className='mb-0'>Église de Mor Izozoël Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Ben} height="auto" alt="Ben" /></Row>
                    <Row><h4>Ben</h4></Row>
                    <Row><h6 className='mb-0'>Pro du BBQ</h6></Row>
                    <Row><p className='mb-1 fst-italic text-decoration-line-through'>*Censuré*</p></Row>    
                    <Row><p className='mb-0'>Église de Mor Yuhanun Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Christian} height="auto" alt="Christian" /></Row>
                    <Row><h4>Christian</h4></Row>
                    <Row><h6 className='mb-0'>C'est Chris, mais Ateh</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Les gars, et si on ramenait une dahole ?"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Yuhanun Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Christophe} height="auto" alt="Christophe" /></Row>
                    <Row><h4>Christophe</h4></Row>
                    <Row><h6 className='mb-0'>C'est Chris, mais Kuluman</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Buslibo c'est vrai !"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Izozoël Bruxelles</p></Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Devin} height="auto" alt="Devin" /></Row>
                    <Row><h4>Devin</h4></Row>
                    <Row><h6 className='mb-0'>Barman malgré lui</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Les gars, c'est déconné..."</p></Row>
                    <Row><p className='mb-0'>Église de Mor Yuhanun Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Isabelle} height="auto" alt="Isabelle" /></Row>
                    <Row><h4>Isabelle</h4></Row>
                    <Row><h6 className='mb-0'>Championne de Kayak</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Nan, j'aime pas me fâcher moi"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Izozoël Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Johan} height="auto" alt="Johan" /></Row>
                    <Row><h4>Johan</h4></Row>
                    <Row><h6 className='mb-0'>Je gère Man</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Ouai, j'ai son num. Tu veux que je l'appelle?"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Izozoël Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Jon} height="auto" alt="Jonatan" /></Row>
                    <Row><h4>Jonatan</h4></Row>
                    <Row><h6 className='mb-0'>Australian tu connais</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Ce soir j'oublie tout ..."</p></Row>
                    <Row><p className='mb-0'>Église de Mor Yuhanun Bruxelles</p></Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Mathias} height="auto" alt="Mathias" /></Row>
                    <Row><h4>Mathias</h4></Row>
                    <Row><h6 className='mb-0'>Tout le monde connaît Mathias</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Les gars, je suis arrivé. Vous êtes où :'( "</p></Row>
                    <Row><p className='mb-0'>Église de Sainte-Marie Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Meryem} height="auto" alt="Meryem" /></Row>
                    <Row><h4>Meryem</h4></Row>
                    <Row><h6 className='mb-0'>Pro de la Mezze</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Mathiaaaas ~"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Yuhanun Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Mich} height="auto" alt="Michel" /></Row>
                    <Row><h4>Michel</h4></Row>
                    <Row><h6 className='mb-0'>Flash Man</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Les gars, je suis en vacances"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Gewargis Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Petrus} height="auto" alt="Petrus" /></Row>
                    <Row><h4>Petrus</h4></Row>
                    <Row><h6 className='mb-0'>Le trésorier</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Il faut faire une lecture biblique"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Izozoël Bruxelles</p></Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Sarah} height="auto" alt="Sarah" /></Row>
                    <Row><h4>Sarah</h4></Row>
                    <Row><h6 className='mb-0'>La caisse</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Mais qu'est-ce qu'ils font ces hmore ?"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Yuhanun Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Shabo} height="auto" alt="Shabo" /></Row>
                    <Row><h4>Shabo</h4></Row>
                    <Row><h6 className='mb-0'>Businessman</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Les gars, je suis pas en Belgique"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Semun d'Zayte Zellik</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Stefaan} height="auto" alt="Stefaan" /></Row>
                    <Row><h4>Stefaan</h4></Row>
                    <Row><h6 className='mb-0'>L'aîné</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Dommage mais la majorité l'emporte"</p></Row>
                    <Row><p className='mb-0'>Église de Sainte-Marie Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Thomas} height="auto" alt="Thomas" /></Row>
                    <Row><h4>Thomas</h4></Row>
                    <Row><h6 className='mb-0'>Foot-Man</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Haymen..."</p></Row>
                    <Row><p className='mb-0'>Église de Mor Yuhanun Bruxelles</p></Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3} className='p-2'></Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Tid} height="auto" alt="Theodora" /></Row>
                    <Row><h4>Theodora</h4></Row>
                    <Row><h6 className='mb-0'>Tid secrétaire</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Bon on continue la réunion ! Les gars... ?"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Semun d'Zayte Zellik</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'>
                    <Row className='pb-2'><img src={Vivi} height="auto" alt="Viviane" /></Row>
                    <Row><h4>Viviane</h4></Row>
                    <Row><h6 className='mb-0'>La trésorière</h6></Row>
                    <Row><p className='mb-1 fst-italic'>"Faites comme vous voulez, je m'en fou"</p></Row>
                    <Row><p className='mb-0'>Église de Mor Yuhanun Bruxelles</p></Row>
                </Col>
                <Col xs={12} md={3} className='p-2'></Col>
            </Row>
            </Container>
            <div id='contact'></div>
        </div>
    );
}

export default Team;