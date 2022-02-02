import React from 'react';

const Heading = ({link, children, subHeading, supperHeading, className, tag}) => {
  const Element = `${tag ? tag: 'h3'}`;
  return (
      <div className={`mt-heading mt-component`}>
          {supperHeading  && <h4 className='mt-supper-heading'>{supperHeading}</h4>}
          {link?<a href={link}><Element {...(className&&{className:className})}>{children}</Element></a>:<Element {...(className&&{className:className})}>{children}</Element>}
          {subHeading && <h4 className='mt-sub-heading'>{subHeading}</h4>}
      </div>
  )
}

export default Heading;