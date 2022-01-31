import React from 'react'
import Button from '../Components/Button';
import { Logo } from '../modules/Logo'
import Menu from '../modules/Menu';

const menus = [
    {"label":"home", "link": "#"},
    {"label":"about", "link": "#"},
    {"label":"services", "link": "#"},
    {"label":"blog", "link": "#"},
    {"label":"career", "link": "#"}
];
const Header = () => {
    return (
        <div id="mt-header" className='mt-header'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Logo/>
                    </div>
                    <div className="col-md-5">
                        <Menu menus={menus} type="inline" id="main-menu" className='top-bar-menu'/>
                    </div>
                    <div className="col-md-3">
                        <Button id='header-cta' className='btn-cta-a' label="Client Dashboard" link="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
