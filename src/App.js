import './App.css';
import Header from './view/components/Navbar/Navbar';
import Slider from './view/components/Slider/Slider';
import { Outlet } from 'react-router-dom';
import Offers from './view/components/Offers/Offers';
import Testimonial from './view/components/Testimonial/Testimonial';
import Footer from './view/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Outlet/>
      <Offers/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
