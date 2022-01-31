import React from 'react'

const Blurb = ({title, text, link, imgSrc, btnLabel, alt, imgClass}) => {
    return (
        <div className='mt-blurb mt-module'>
            <img className={imgClass} src={imgSrc} alt={alt} />
            <h3 className='mt-mod-title'>{title}</h3>
            <p>{text}</p>
            <a href={link}>{btnLabel}</a>
        </div>
    )
}

export default Blurb