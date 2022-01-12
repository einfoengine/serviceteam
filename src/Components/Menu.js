import React from 'react'

const Menu = ({menus, id, type, className}) => {
    return (
        <div id={id} className={`mt-menu ${id} ${className} ${type}`}>
            <ul>
                {menus.map((i)=>{
                    return(<li key={i.label}><a href={i.link}>{i.label}</a></li>)
                })}
            </ul>
        </div>
    )
}

export default Menu