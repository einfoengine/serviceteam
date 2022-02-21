import React from 'react'
import Blurb from '../modules/Blurb'
import Section from '../Components/Section'
import Fullstack from '../Resource/coding.png'
import CMSimg from '../Resource/cms.png'
import Mobile from '../Resource/mobile.png'

const Service = () => {
    return (
        <>
            <Section id='mt-service' title="Services" type="container-fluid">
                <div className="col-md-4">
                    <Blurb 
                        imgSrc={Fullstack}
                        imgClass="mt-icon box-primary"
                        title={<>Full stack<span>development</span></>}
                        text="The modern website often means a very interactive solution, combining with a stunning UI, friendly and meaningful UX, a client-end solution, an admin panel etc."
                        link="#"
                        btnLabel="Know more"
                    />
                </div>
                <div className="col-md-4">
                    <Blurb 
                        imgSrc={CMSimg}
                        imgClass="mt-icon box-primary"
                        title={<>CMS<span>solution</span></>}
                        text="The modern website often means a very interactive solution, combining with a stunning UI, friendly and meaningful UX, a client-end solution, an admin panel etc."
                        link="#"
                        btnLabel="Know more"
                    />
                </div>
                <div className="col-md-4">
                    <Blurb 
                        imgSrc={Mobile}
                        imgClass="mt-icon box-primary"
                        title={<>Mobile<span>application</span></>}
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
