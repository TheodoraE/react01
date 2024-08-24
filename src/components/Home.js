import Logo from  '../img/SOCABbleu.jpg';

function Home() {
    return (
        <div className="">
            <div className='pt-4'></div>
            <div className="pt-5 my-3">
                <h3 >SOCAB YOUTH</h3>
                <h2 className="fw-medium">ܣܝܥܬܐ ܕܥܠܝܡܵܬ݂ܐ ܕܒܠܔܝܟܐ</h2>
            </div>
            <div className='py-5 mb-3'>
                <h5 className='pb-4'>Comité de la jeunesse Araméenne Orthodoxe de Belgique</h5>
                <img
                    src={Logo}
                    height="300"
                    alt='SOCAB logo'
                    />
                <div id="mission"></div>
            </div>
        </div>
    );
}

export default Home;