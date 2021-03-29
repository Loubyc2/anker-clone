import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Header() {
    return (
        <div className='header'>
            <div className="header__top">
                <Link to='/'> <MenuIcon /></Link>
                <Link to='/'>  <h4 className="header__logo"> Lb Design</h4></Link>
                <Link to='/' className="header__cart">
                    <ShoppingCartOutlinedIcon />
                    <span className="header__item-cart">(0)</span>
                </Link>
            </div>
            <div className="header__bottom">
                <div className="header__search">
                    <input type="text" placeholder='Chèche' />
                    <span><SearchOutlinedIcon /></span>
                </div>
            </div>
        </div>
    )
}

export default Header
