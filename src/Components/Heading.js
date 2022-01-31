import React from 'react';

const Heading = ({link, children, subHeading, supperHeading, className}) => {
  return (
      <div className={`mt-heading mt-component ${className}`}>
          {supperHeading  && <h4 className='mt-supper-heading'>{supperHeading}</h4>}
          {link?<a href={link}><h3 className='mt-main-heading'>{children}</h3></a>:<h3 className='mt-main-heading'>{children}</h3>}
          {subHeading && <h4 className='mt-sub-heading'>{subHeading}</h4>}
      </div>
  )
}

export default Heading;