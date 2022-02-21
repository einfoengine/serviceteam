import React from 'react'
import Heading from '../Components/Heading'
import Section from '../Components/Section'

const Process = () => {
    return (
        <>
            <Section id="mt-process" type="container-fluid">
                <div className="col-md-6">
                    <Heading className=" mt-4">
                        We use <span className='text-primary'>awesome tecnologies</span>
                    </Heading>
                    <div className="mt-module mt-flex-gallery">
                        <img src="https://www.seekpng.com/png/detail/80-803529_vector-javascript-node-js-jpg-black-and-white.png" alt="NodeJs" />
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Javascript" />
                        <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" alt="ReactJs" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" />
                        <img src="https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-05/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" alt="Mongo DB" />
                        <img src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png" alt="WebPack" />
                        <img src="https://cdn.pixabay.com/photo/2014/05/07/15/19/django-339744_960_720.png" alt="Dhango" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="Vue Js" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel" />
                        <img src="https://ucarecdn.com/22a0a69b-689f-46c9-866b-57650f31fde9/" alt="Three Js for AR" />
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
