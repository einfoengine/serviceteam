import React from 'react'
import { Logo } from './Logo'
import Menu from './Menu';

const menus = [
    {"label":"home", "link": "#"},
    {"label":"about", "link": "#"},
    {"label":"services", "link": "#"},
    {"label":"blog", "link": "#"},
    {"label":"career", "link": "#"}
];
export const Header = () => {
    return (
        <div id="mt-deader" className='mt-header'>
            <div className="container">
                <Logo/>
                <Menu menus={menus} type="horaizontal" id="main-menu" className='top-bar-menu'/>
            </div>
        </div>
    )
}
