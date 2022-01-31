import React from 'react'

const Jumbotron = ({title, paragrapg, link, imgSrc, btnLabel, alt, subTitle, className}) => {
    return (
        <div className={`mt-module mt-bumotron ${className}`}>
            {imgSrc && <img src={imgSrc} alt={alt} />}
            <h3 className='mt-mod-title'>{title}</h3>
            {subTitle && <h4>{subTitle}</h4>}
            {paragrapg && <p>{paragrapg}</p>}
            <a href={link}>{btnLabel}</a>
        </div>
    )
}

export default Jumbotron
