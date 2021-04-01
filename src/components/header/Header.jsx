import React, { useState } from 'react';
import { Link } from 'react-router-dom'


import './Header.css';
import data from '../data'

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';


function Header() {
    const [showMenu, setShowMenu] = useState(true)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='header'>
            <div className={"header__content"}>
                <div className="header__top">
                    {showMenu ? <MenuIcon onClick={handleMenu} /> : <CloseIcon onClick={handleMenu} />}
                    {/* <Link to='/'>{showMenu ? <MenuIcon onClick={handleMenu} /> : <CloseIcon onClick={handleMenu} />}</Link> */}
                    <Link to='/'> <h4 className="header__logo"> Lb Design</h4></Link>
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
            {/* <HeaderMenu showMenu={showMenu} /> */}
            <div className={showMenu ? 'header__menu ' : 'showMenu'}>

                <div className="headerMenu__top">
                    <div className='headerMenu__top-account'>
                        <p>Ouvèti sesyon</p>
                        <div>
                            <AccountCircleOutlinedIcon />
                            <Link onClick={handleMenu} to='/account'>Ouvri sesyon</Link>
                        </div>
                    </div>
                    <div className='headerMenu__top-contact'>
                        <p>Kontak</p>
                        <div>
                            <ContactPhoneOutlinedIcon />
                            <Link to='/'>Kontakte nou</Link>
                        </div>
                    </div>
                </div>
                <div className="headerMenu__content">

                    <ul className="headerMenu-list">
                        <li className="headerMenu-list-item">
                            <Link to='/ad'>Batri Ekstèn</Link>
                        </li>
                        <li className="headerMenu-list-item">
                            <Link to='/'>Chajè ak Akseswa</Link>
                        </li>
                        <li className="headerMenu-list-item">
                            <Link to='/'>Kas ak Opalè</Link>
                        </li>
                        <li className="headerMenu-list-item">
                            <Link to='/'>Domestik ak Netwayaj</Link>
                        </li>
                        <li className="headerMenu-list-item">
                            <Link to='/'>Sekirite ak Ekleraj</Link>
                        </li>
                        <li className="headerMenu-list-item">
                            <Link to='/'>Smart Home</Link>
                        </li>
                        <li className="headerMenu-list-item">
                            <Link to='/'>Pwojektè Smart</Link>
                        </li>
                        <li className="headerMenu-list-item">
                            <Link to='/'>Nouvote</Link>
                        </li>
                    </ul>
                    <Link to='/discount' className='discount-link'>Rabè</Link>
                </div>

                <div className="headerMenu__footer">
                    <div className="headerMenu__footer-marks">
                        <h5>Mak</h5>
                        <div className="headerMenu__footer-mark">
                            <img src={data.mark4} alt="mark-logo" />
                            <p> Sekirite ak Pwòpte</p>
                        </div>
                        <div className="headerMenu__footer-mark">
                            <img src={data.mark2} alt="mark-logo" />
                            <p>Opalè ak Kas Bluetooth</p>
                        </div>
                        <div className="headerMenu__footer-mark">
                            <img src={data.mark3} alt="mark-logo" />
                            <p>Chajè, Batri ak Kab</p>
                        </div>
                        <div className="headerMenu__footer-mark">
                            <img src={data.mark4} alt="mark-logo" />
                            <p> Pwojektè Smart</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header
