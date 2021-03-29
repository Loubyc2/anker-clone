import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>

            <div className="footer__content">
                <p>smartmarket</p>
                <div className='footer__marks-content'>
                    <p>mak</p>
                    <div className='footer__marks'>
                        <span>Anker</span>
                        <span>Eufy</span>
                        <span>Soundcore</span>
                        <span>Nebula</span>
                    </div>
                </div>
                <div className="footer__direction">
                    <h2>Kote w ap jwenn nou</h2>
                    <iframe className='footer__iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.31745694575!2d-70.69125428516436!3d-33.51913098075431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662db15b0d5d20b%3A0x6e48e639176ddb4b!2sSta%20Anita%207555%2C%20Lo%20Espejo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1616991203291!5m2!1sen!2scl" />
                </div>
                <div className="footer__maps"></div>
            </div>

            <div className="footer__copyright">
                <span>&copy; Lb Desing 2021. Tout dwa rezève.</span>
                <div>
                    <p><Link to='/'>Kontakte nou</Link> | Tèm ak kondisyon</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
