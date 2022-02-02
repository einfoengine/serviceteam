import React from 'react';
import Button from '../Components/Button';
import Heading from '../Components/Heading';
import Section from '../Components/Section';

const Hero = () => {
  const label = 'Get started';
  const heroCtaClass = 'mt-btn-cta text-center';
  const link = '#';
  return (
    <>
      <Section id="mt-hero" className="mt-hero" type="contaier">
        <Heading tag='h1' className="mt-sec-title text-center">
          <span className="mt-supper-heading">Gareup your business with</span> <span>web & mobile application</span>
        </Heading>
        <Button className={heroCtaClass} label={label} link={link}/>
      </Section>
    </>
  );
};

export default Hero;
