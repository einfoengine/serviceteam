import React from 'react';
import Heading from '../Components/Heading';
import Section from '../Components/Section';

const WhyUs = () => {
  return (
      <>
        <Section id="mt-why-us" className='mt-why-us mt-section' type='container'>
            <div className="col-md-6">
                <Heading className="mt-section-title">
                    Why Us?
                </Heading>
                <Heading>
                    Onestop platfom for <span>Business intelligence<br/>& Software services</span>
                </Heading>
            </div>
            <div className="col-md-6">
                
            </div>
        </Section>
      </>
  );
};

export default WhyUs;
