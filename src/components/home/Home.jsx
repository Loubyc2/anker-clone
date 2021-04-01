import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';


import data from '../data';
import HomeServices from './HomeServices';
//import Header from '../header/Header';
//import Footer from '../footer/Footer';

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
            <div>
                <HomeServices />
            </div>
            {/* Footer */}

            {/* <Footer /> */}
        </div>
    )
}

export default Home
