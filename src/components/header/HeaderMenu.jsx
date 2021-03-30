import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';

import './HeaderMenu.css';
import data from '../data'




function HeaderMenu({ showMenu }) {

    return (
        <div className={showMenu ? 'header__menu ' : 'showMenu'}>

            <div className="headerMenu__content">

                <ul className="headerMenu-list">
                    <li className="headerMenu-list-item">
                        <Link to='/'>Batri Ekstèn</Link>
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
                <div className="headerMenu__footer-bottom">
                    <div className='headerMenu__footer-bottom-account'>
                        <p>Ouvèti sesyon</p>
                        <div>
                            <AccountCircleOutlinedIcon />
                            <Link to='/'>Ouvri sesyon</Link>
                        </div>
                    </div>
                    <div className='headerMenu__footer-bottom-contact'>
                        <p>Kontak</p>
                        <div>
                            <ContactPhoneOutlinedIcon />
                            <Link to='/'>Kontakte nou</Link>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default HeaderMenu
