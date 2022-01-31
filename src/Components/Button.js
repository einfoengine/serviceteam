import React from 'react'

const Button = ({className, label, link}) => {
    return (
        <a href={link} className={`mt-btn ${className}`}>
            <span>{label}</span>
        </a>
    )
}

export default Button
