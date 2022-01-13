import React from 'react'
import Blurb from './Blurb'
import Section from './Section'

const Service = () => {
    return (
        <>
            <Section id='mt-service' title="Services" type="container">
                <div className="col-md-4">
                    <Blurb/>
                </div>
                <div className="col-md-4">
                    <Blurb/>
                </div>
                <div className="col-md-4">
                    <Blurb/>
                </div>
            </Section>
        </>
    )
}

export default Service
