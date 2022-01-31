import { Fragment } from 'react';
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

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Service/>
      <Portfolio/>
      <Process/>
      <Offer/>
      <WhyUs/>
      <LiveTalk/>
      <Blogs/>
    </Fragment>
  );
}
export default App;
