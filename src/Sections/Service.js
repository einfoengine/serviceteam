import React from 'react'
import Blurb from '../modules/Blurb'
import Section from '../Components/Section'

const Service = () => {
    return (
        <>
            <Section id='mt-service' title="Services" type="container">
                <div className="col-md-4">
                    <Blurb 
                        imgSrc="https://cdn-icons-png.flaticon.com/512/558/558593.png"
                        imgClass="mt-icon"
                        title={<>web<span>solution</span></>}
                        text="The modern website often means a very interactive solution, combining with a stunning UI, friendly and meaningful UX, a client-end solution, an admin panel etc."
                        link="#"
                        btnLabel="Know more"
                    />
                </div>
                <div className="col-md-4">
                    <Blurb 
                        imgSrc="https://cdn-icons-png.flaticon.com/512/558/558593.png"
                        imgClass="mt-icon"
                        title={<>web<span>solution</span></>}
                        text="The modern website often means a very interactive solution, combining with a stunning UI, friendly and meaningful UX, a client-end solution, an admin panel etc."
                        link="#"
                        btnLabel="Know more"
                    />
                </div>
                <div className="col-md-4">
                    <Blurb 
                        imgSrc="https://cdn-icons-png.flaticon.com/512/558/558593.png"
                        imgClass="mt-icon"
                        title={<>web<span>solution</span></>}
                        text="The modern website often means a very interactive solution, combining with a stunning UI, friendly and meaningful UX, a client-end solution, an admin panel etc."
                        link="#"
                        btnLabel="Know more"
                    />
                </div>
            </Section>
        </>
    )
}

export default Service
