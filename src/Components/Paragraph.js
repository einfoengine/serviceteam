import React from 'react'

const Paragraph = ({title, text='MT Paragraph text required', readMoreLink, className}) => {
    return (
        <div className={`mt-paragraph ${className}`}>
            {title && <h4 className='mt-paragraph-title'>{title}</h4>}
            {text}
            {readMoreLink && <a href={readMoreLink}>Read more</a>}
        </div>
    )
}

export default Paragraph
