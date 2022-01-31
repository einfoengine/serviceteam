import React from 'react';
import Heading from '../Components/Heading';
import Section from '../Components/Section';

const Offer = () => {
  return (
      <>
        <Section id="mt-offer" className="mt-section mt-offer" type="container">
            <div className="jumbotron">
                <Heading link="#" supperHeading="Let us give a free support">
                    Book an online meeting
                </Heading>
                <a href="#">Schedule Now</a>
            </div>
        </Section>
      </>
  );
};

export default Offer;
