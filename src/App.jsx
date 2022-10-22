import './App.css'

//components
import Navbar from './components/navbar'
import HomeContent from './components/homeContent';
//import Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
    return (
        <div className='page'>
            <Navbar />
            <div className="">
                <HomeContent />
            </div>
        </div>
    )
}

export default App
