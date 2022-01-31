import React from 'react';
import Paragraph from '../Components/Paragraph';

const Blog = ({title, text, link, imgSrc, className, alt}) => {
    return (
        <div className={`mt-blog ${className}`}>
            {imgSrc && <img className={`img-fluid`} src={imgSrc} alt={`${alt ? alt : 'mt-alt missing'}`} />}
            <Paragraph
                title={title}
                text={text}
                readMoreLink={link}
            />
        </div>
    );
}

export default Blog;
