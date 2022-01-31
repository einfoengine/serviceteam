import React from 'react';

const Image = ({link, imgSrc, alt, imgClass}) => {
  return (
      <div className='mt-img-loaer mt-component'>
          <img className={imgClass} src={imgSrc} alt={alt} />
      </div>
  )
}

export default Image;
