import React from 'react';
import './Home.css';

import data from '../data';

function HomeServices() {
    return (
        <div className='home__services'>
            <div>
                <img src={data.service_1} alt="service-img" />
                <h5>Livrezon adomisil sou tout tèritwa</h5>
                <p>Ou kapab reesevwa acha w lakay ou</p>
            </div>
            <div>
                <img src={data.service_2} alt="service-img" />
                <h5>Anbalaj kado disponib</h5>
                <p>Kòmand ou anbalaye an papye kado disponib</p>
            </div>
            <div>
                <img src={data.service_3} alt="service-img" />
                <h5>Pwodui yo garanti</h5>
                <p>Apati 12 mwa garanti pou tout pwodui Lb Design</p>
            </div>
            <div>
                <img src={data.service_4} alt="service-img" />
                <h5>Acha sekirize</h5>
                <p>Nou genyen gwo estanda sekirite ak pwoteksyon done</p>
            </div>
        </div>
    )
}

export default HomeServices
