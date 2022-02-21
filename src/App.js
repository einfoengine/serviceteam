import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import 'sass';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/main.css';
import Header from './Sections/Header';
import Service from './Sections/Service';
import Portfolio from './Sections/Portfolio';
import Process from './Sections/Process';
import Offer from './Sections/Offer';
import WhyUs from './Sections/WhyUs';
import LiveTalk from './Sections/LiveTalk';
import Blogs from './Sections/Blogs';
import Hero from './Sections/Hero';
import Footer from './Sections/Footer';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </Fragment>
  );
}
export default App;
