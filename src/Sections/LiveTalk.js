import React from 'react';
import Button from '../Components/Button';
import Heading from '../Components/Heading';
import Section from '../Components/Section';

const LiveTalk = () => {
  return (
      <>
        <Section id="mt-why-us" className='mt-why-us mt-section' type='container'>
            <div className="col-md-12">
                <Heading>
                    free <span>Business development and it workshop</span>
                </Heading>
                <Button className="mt-component mt-btn-cta" label="Join now"/>
            </div>
        </Section>
      </>
  );
};

export default LiveTalk;
