import React from 'react'
import { Logo } from './Logo'
import { MainMenu } from './MainMenu'

export const Header = () => {
    return (
        <div className='mt-header'>
            <Logo/>
            <MainMenu/>
        </div>
    )
}
