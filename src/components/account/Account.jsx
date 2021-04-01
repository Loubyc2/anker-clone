import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Account.css'

import HomeServices from '../home/HomeServices'

// Icons
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';

function Account() {
    const [state, setState] = useState({
        mail: '',
        password: ''
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setState({
            mail: '',
            password: ''
        })

    }
    return (
        <div className='account'>
            <div className='account-content'>
                <div className='account__title'>
                    <h1 >Ouvèti Sesyon</h1>
                    <p>Ou nouvo sou Lb Design? <br /> <Link to='/'><span>Kreye yon kont</span></Link></p>
                </div >

                <div className="account__form-wrapper">
                    <form action="" className="account__form" onSubmit={handleSubmit}>
                        <div className="account__form-inputs">
                            <div>
                                <label htmlFor="label-mail">Imel</label>
                                <div className="account-mail">
                                    <MailIcon className="account__form-icons" />
                                    <input type="text" id="account-input" name="mail" placeholder="Imel" value={state.mail} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="label-password">Kòd</label>
                                <div className="account-password">
                                    <LockIcon className="account__form-icons" />
                                    <input type="password" id="account-password" name="password" placeholder="Kòd" value={state.password} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="account__form-btn-wrapper">
                            <button type="submit" className="account__form-btn" onClick={handleSubmit}>Ouvri sesyon</button>
                        </div>
                    </form>
                    <Link className="account-forgot-password-link" to='/'>Retabli modpas</Link>
                </div>

            </div>
            {/* HomeServices */}
            < HomeServices />
        </div >
    )
}

export default Account
