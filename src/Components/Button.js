import React from 'react'

export const Button = (props) => {
    return (
        <div className={props.className}>
            {props.text}
        </div>
    )
}
