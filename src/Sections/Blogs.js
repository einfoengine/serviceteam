import React from 'react';
import Section from '../Components/Section';
import Heading from '../Components/Heading';
import Button from '../Components/Button';
import Image from '../Components/Image'
import Blog from '../modules/Blog';

const Blogs = () => {
  return (
      <>
        <Section type='container'>
            <div className="col-md-4">
                <Heading className="mt-sec-title" link="#">Blog</Heading>
                <Heading>Our write to give you some benifit</Heading>
                <Button className="mt-btn-primary" label="Read blogs"/>
            </div>
            <div className="col-md-4">
                {/* <Image link='#' imgSrc='https://dribbble.com/shots/17389727-Oneder-Mobile/attachments/12514106?mode=media' alt='mt img' imgClass='mt-img' /> */}
                <Blog 
                  title="Demo blog title" 
                  text="This is a demo blog text. We will write it asap."
                  link="#"
                  imgSrc="https://cdn.dribbble.com/users/6234/screenshots/17396277/media/8119a1bd3b5784b7acc868fa09df1c38.png"
                  className="mt-blog"
                  alt="mt-image missing"
                />
            </div>
            <div className="col-md-4">
              <Blog 
                title="Demo blog title" 
                text="This is a demo blog text. We will write it asap."
                link="#"
                className="mt-blog"
                alt="mt-image missing"
              />
              <Blog 
                title="Demo blog title" 
                text="This is a demo blog text. We will write it asap."
                link="#"
                className="mt-blog"
                alt="mt-image missing"
              />
              <Blog 
                title="Demo blog title" 
                text="This is a demo blog text. We will write it asap."
                link="#"
                className="mt-blog"
                alt="mt-image missing"
              />
            </div>
        </Section>
      </>
  )
};

export default Blogs;
