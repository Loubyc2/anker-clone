import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';


import data from '../data';

function Home() {

    return (
        <div className='home' >
            <div className="home__principal-banner">
                <img src={data.principa1} alt="home-banner" />
                <img src={data.principa2} alt="home-banner" />
                <img src={data.principa3} alt="home-banner" />
            </div>

            {/* section-1 */}
            <div className="home__section_1">
                <div className="home__section_1-banner">
                    Achte jiska 6 vèsman san enterè
                    <span>Tout sa w bezwen konnen sou livrezon <Link to='/'>isit</Link></span>
                </div>
            </div>

            {/* home categories */}
            <div className="home__categories">
                {
                    data.categories.map((item, index) => {
                        return (
                            <div className='home__categories-items' key={index.toString()}>
                                <div className='home__categories-item'>
                                    <img className=
                                        {index === 0 ? `color1` : index === 1 ? `color2` : index === 2 ? `color3`
                                            : index === 3 ? `color4` : index === 4 ? `color5` : index === 5 ? `color6`
                                                : index === 6 ? `color7` : index === 7 ? `color8` : index === 8 ? `color9` : null
                                        }
                                        src={item.img} alt="category-img" />
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* home trending */}
            <div className="home__product-trending">
                <h1>Pwodui Remakab</h1>
                <div className='home__product-trending-wrapper'>
                    {data.trending.map((item, index) => {
                        return (
                            <div className='home__product-trending-content' key={index.toString()}>
                                <div className='home__product-trending-item'>
                                    <img src={item.img} alt="trending-img" />
                                    <span className='home__product-trending-discount'>{item.discount}</span>
                                    <div className='home__product-trending-item-enfo'>
                                        <span>{item.mark}</span>
                                        <p>{item.title}</p>
                                        <p>{item.price}</p>
                                        <span>${item.price_false}</span>
                                        <Link to={item.url}> <button className='home__product-trending-button'>gade pwodui</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            {/* home banner 2 */}
            <div className="home__section_2-banner">
                {
                    data.banner_1.map((item, index) => {
                        return (
                            <div key={index.toString()}>
                                <img src={item.img} alt="banner-img" />
                            </div>
                        )
                    })
                }
            </div>
            {/* home brand */}
            <div className="home__brand-1">
                <div>
                    <img src={data.mark1} alt="brand-img" />
                    <p>Opalè ak kas bluetooth</p>
                </div>
                <div>
                    <img src={data.mark2} alt="brand-img" />
                    <p>Sekirite ak pwòpte</p>
                </div>
                <div>
                    <img src={data.mark3} alt="brand-img" />
                    <p>Chajè ak batri</p>
                </div>
                <div>
                    <img src={data.mark4} alt="brand-img" />
                    <p>Pwojektè smart</p>
                </div>
            </div>
            {/* home services */}
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
            {/* home newsletter */}
            <div className="home__newsletter">
                <h1>Enskri w nan Newsletter nou an</h1>
                <p>Resevwa nouvèl sou nouvo pwodui nou yo ak meyè rabè nou yo dirèk sou imel ou.</p>
                <span>Vin yon patnè Lb Design!</span>
                <div className="newsletter-search">
                    <input type="text" placeholder='Adrès imel ou...' />
                    <button className='newsletter-btn'>Enskri</button>
                </div>
            </div>

        </div>
    )
}

export default Home
