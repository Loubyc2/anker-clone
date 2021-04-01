import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            {/* Newsletter */}
            <div className="home__newsletter">
                <h1>Enskri w nan Newsletter nou an</h1>
                <p>Resevwa nouvèl sou nouvo pwodui nou yo ak meyè rabè nou yo dirèk sou imel ou.</p>
                <span>Vin yon patnè Lb Design!</span>
                <div className="newsletter-search">
                    <input type="text" placeholder='Adrès imel ou...' />
                    <button className='newsletter-btn'>Enskri</button>
                </div>
            </div>
            {/* Footer */}
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
                    <iframe style={{ width: '100%' }} title="direction maps" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3326.31745694575!2d-70.69125428516432!3d-33.51913098075431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x9662db15b0d5d20b%3A0x6e48e639176ddb4b!2sSta%20Anita%207555%2C%20Lo%20Espejo%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chili!3m2!1d-33.519131!2d-70.68906559999999!5e0!3m2!1sen!2scl!4v1617153276735!5m2!1sen!2scl"></iframe>
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
