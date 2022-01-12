import React from 'react'

const Button = ({className, id, label, link}) => {
    return (
        <div id={id} className={`mt-btn ${id} ${className}`}>
            <a href={link}>{label}</a>
        </div>
    )
}

export default Button
