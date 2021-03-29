// Banner
import principa1 from '../img/banner/principal_banner_1.png';
import principa2 from '../img/banner/principal_banner_2.png';
import principa3 from '../img/banner/principal_banner_3.png';
// banner-2
import banner_1 from '../img/banner/robovacokmobilemosaico_375x220_crop_center@2x.webp';
import banner_2 from '../img/banner/audifonos_mosaicomobile_375x220_crop_center@2x.webp';
import banner_3 from '../img/banner/linternamosaicomibile_375x220_crop_center@2x.webp';
// categories
import category1 from '../img/category/category_1.png';
import category2 from '../img/category/category_2.png';
import category3 from '../img/category/category_3.png';
import category4 from '../img/category/category_4.png';
import category5 from '../img/category/category_5.png';
import category6 from '../img/category/category_6.png';
import category7 from '../img/category/category_7.png';
import category8 from '../img/category/category_8.png';
import category9 from '../img/category/category_9.png';
// trending
import trending_1 from '../img/trending/trending_1.webp';
import trending_2 from '../img/trending/trending_2.jpg';
import trending_3 from '../img/trending/trending_3.jpg';
import trending_4 from '../img/trending/trending_4.webp';
//banner
import mark1 from '../img/mark/soundcore.webp';
import mark2 from '../img/mark/eufy.webp';
import mark3 from '../img/mark/anker.webp';
import mark4 from '../img/mark/nebula.webp';
// services
import service_1 from '../img/services/service-1.webp';
import service_2 from '../img/services/service-2.png';
import service_3 from '../img/services/service-3.png';
import service_4 from '../img/services/service-4.png';

const data = {
    // Banner
    principa1,
    principa2,
    principa3,


    // categories
    categories: [
        { img: category1, title: 'Kas' },
        { img: category2, title: 'Aspiratè' },
        { img: category3, title: 'Opalè' },
        { img: category4, title: 'Chajè' },
        { img: category5, title: 'Pwojektè' },
        { img: category6, title: 'Anpoul' },
        { img: category7, title: 'Balans' },
        { img: category8, title: 'Akseswa' },
        { img: category9, title: 'Kab' },
    ],
    // trending

    trending: [
        { img: trending_1, mark: 'eufy', title: 'Kamera enteryè avèk vizyon panoramik 360°', price: '$39.990', price_false: '59.990', discount: '33% rabè', url: '/a' },
        { img: trending_2, mark: 'soundclore', title: 'Opalè Bluetooth Motion B', price: '$26.990', price_false: '39.990', discount: '33% rabè', url: '/b' },
        { img: trending_3, mark: 'soundclore', title: 'Kas Bleutooth Life Dot 2', price: '$36.990', price_false: '59.990', discount: '38% rabè', url: '/c' },
        { img: trending_4, mark: 'anker', title: 'Chajè inalanbrik PowerWave 7.5', price: '$19.990', price_false: '24.990', discount: '20% rabè', url: '/d' },
    ],
    // banner
    banner_1: [
        { img: banner_1 },
        { img: banner_2 },
        { img: banner_3 },
    ],
    // brand
    mark1,
    mark2,
    mark3,
    mark4,
    // services
    service_1,
    service_2,
    service_3,
    service_4,
}

export default data;
