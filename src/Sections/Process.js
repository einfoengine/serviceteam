import React from 'react'
import Heading from '../Components/Heading'
import Section from '../Components/Section'

const Process = () => {
    return (
        <>
            <Section id="mt-process" type="container">
                <div className="col-md-6">
                    <Heading className="mt-main-heading-primary">
                        We use <span className='text-primary'>awesome tecnologies</span>
                    </Heading>
                    <div className="mt-module mt-flex-gallery">
                        <img src="https://www.seekpng.com/png/detail/80-803529_vector-javascript-node-js-jpg-black-and-white.png" alt="NodeJs" />
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Javascript" />
                        <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" alt="ReactJs" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" />
                        <img src="https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-05/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" alt="Mongo DB" />
                    </div>
                </div>
                <div className="col-md-6">
                    <Heading className='mt-sec-title'>
                        Process
                    </Heading>
                    <ol className='mt-left-bracket'>
                        <li><span>1. </span>Make well-documented requirements</li>
                        <li><span>2. </span>Keep you in development process</li>
                        <li><span>3. </span>Welcome changes</li>
                        <li><span>4. </span>Provide complete documentation and support</li>
                        <li><span>5. </span>Access to a complete project management system</li>
                    </ol>
                </div>
            </Section>
        </>
    )
}

export default Process
