import React from 'react';
import Section from '../Components/Section';
import Carousel from '../modules/Carousel'
import Heading from '../Components/Heading';


const Portfolio = () => {
    return (
        <>
            <Section id='mt-service' >
                <div className="col-md-8">
                    <Carousel/>
                </div>
                <div className="col-md-4">
                    <Heading className="mt-main-heading">
                        Recently served <span>with love and care</span>
                    </Heading>
                </div>
            </Section>
        </>
    )
};

export default Portfolio;
