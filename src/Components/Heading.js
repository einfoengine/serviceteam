import React from 'react';

const Heading = ({link, children, subHeading, supperHeading, className, tag}) => {
  const Element = `${tag ? tag: 'h3'}`;
  return (
      <Element className={`mt-heading ${className}`}>
          {supperHeading  && <span className='mt-supper-heading'>{supperHeading}</span>}
          {link?<a href={link}>{children}</a>:children} 
          {subHeading && <span className='mt-sub-heading'>{subHeading}</span>}
      </Element>
  )
}

export default Heading;