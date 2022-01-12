import React from 'react'

const Menu = ({menus, id, type, className}) => {
    return (
        <div id={id} className={`mt-nav ${id} ${type} ${className}`}>
            <ul>
                {menus.map((i)=>{
                    return(<li key={i.label}><a href={i.link}>{i.label}</a></li>)
                })}
            </ul>
        </div>
    )
}

export default Menu