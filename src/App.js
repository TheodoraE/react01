import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Mission from './components/Mission';
import Event from './components/Event';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div  id='home' className="bg-transparent min-vh-100 py-1 px-4 text-center">
      <Header/>
      <div data-bs-spy="scroll" data-bs-target="#nav" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2" tabindex="0" className='pb-5'>
        <Home/>
        <Mission/>
        <Event/>
        <Team/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
