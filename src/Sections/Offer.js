import React from 'react';
import Button from '../Components/Button';
import Heading from '../Components/Heading';
import Section from '../Components/Section';

const Offer = () => {
  return (
      <>
        <Section id="mt-process" type="container">
          <div className="col-md-12">
            <div className="mt-jumbotron">
              <Heading supperHeading="Let us give a free support">
                  Book an online meeting
              </Heading>
              <Button className='mt-btn mt-btn-primary' label='Book now' link="#"/>
            </div>
          </div>
        </Section>
      </>
  );
};

export default Offer;
