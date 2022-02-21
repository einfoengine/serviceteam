import React from 'react';
import Header from '../Sections/Header';
import Service from '../Sections/Service';
import Portfolio from '../Sections/Portfolio';
import Process from '../Sections/Process';
import Offer from '../Sections/Offer';
import WhyUs from '../Sections/WhyUs';
import LiveTalk from '../Sections/LiveTalk';
import Blogs from '../Sections/Blogs';
import Hero from '../Sections/Hero';
import Footer from '../Sections/Footer';

const Home = () => {
  return (
    <>
        {/* <Header/> */}
        <Hero/>
        <Service/>
        <Portfolio/>
        <Process/>
        <Offer/>
        {/* <WhyUs/> */}
        {/* <LiveTalk/> */}
        {/* <Blogs/> */}
        <Footer/>
    </>
  )
};

export default Home;
