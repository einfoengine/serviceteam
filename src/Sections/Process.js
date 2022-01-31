import React from 'react'
import Heading from '../Components/Heading'
import Section from '../Components/Section'

const Process = () => {
    return (
        <>
            <Section id="mt-process" title="Services" type="container">
                <div className="col-md-6">
                    <Heading>
                        We use <span className='text-primary'>awesome tecnologies</span>
                    </Heading>
                </div>
                <div className="col-md-6">
                    <Heading>
                        Process
                    </Heading>
                    <ol>
                        <li>Make well-documented requirements</li>
                        <li>Keep you in development process</li>
                        <li>Welcome changes</li>
                        <li>Provide complete documentation and support</li>
                        <li>Access to a complete project management system</li>
                    </ol>
                </div>
            </Section>
        </>
    )
}

export default Process
