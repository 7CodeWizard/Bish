import React from 'react'
import { Button, } from '@mui/material'

import { home, menu } from '../../../constant'
import './header.css'

const Header = () => (
    <div className="header alignCenter">
        <Button>
            <img src={menu} alt='menu' />
        </Button>
        <Button>
            <img src={home} alt='home' />
        </Button>
        <i className='headerTitle'>BISH!</i>
    </div>
)


export default Header