import './App.css';
import logo from './assets/logo.png';
import cup from './assets/1.png';
import DetailsCard from './Components/DetailsCard';
import BottomSecs from './Components/BottomSecs';
import Footer from './Components/FooterCard';

function App() {
  return (
    <div className="App">
      <img src={logo} className="Logo" />
      <div className="container">
        <div className="image">
          <img src={cup} className='cupImage' />
        </div>
        <div className="details">
          <DetailsCard />
        </div>
      </div>
      <BottomSecs />
      <Footer />
    </div>
  );
}

export default App;
