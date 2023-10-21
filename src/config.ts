// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { AboutSection, Geo, NavMenuOptions, PhotoList } from "./types";


export const SITE_TITLE : string = 'Il Casale della Poiana';
export const SITE_DESCRIPTION : string = 'Home Restourant';

export const NAV_MENU : NavMenuOptions = [
    {
        name : 'Home',
        icon : 'home',
        path : '/'
    },
    {
        name : 'Photos',
        icon : 'photo_camera',
        path : '/photos'
    },
    {
        name : 'Location',
        icon : 'my_location',
        path : '/location'
    },
    {
        name : 'Events',
        icon : 'liquor',
        path : '/event'
    },
    {
        name : 'About',
        icon : 'import_contacts',
        path : '/about'
    }
];

export const PHOTO_LIST : PhotoList = [
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/1VDHykWr/01.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/8fdh2h5y/010.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/njDKk8tf/011.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/8sLBfVHh/012.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/jLrcMj5g/02.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/MXBt0BWf/03.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/DSvgKY11/04.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/tsBzRtzw/05.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/jW9QPxmh/06.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/y3CmpfVg/07.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/1fcH2ZV9/08.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: 'https://i.postimg.cc/McXmnMPT/09.jpg'
    }
];

export const GEO : Geo = {
    lon : 9.206565,
    lat : 44.980861
}

export const ABOUT_SECTION : AboutSection = {
    linkList : [
        {
            imgPath : '/img/ilnidodellapoiana.png',
            link : 'https://www.ilnidodellapoiana.com',
            description : 'Il Nido della Poiana'
        },
        {
            imgPath : '/img/facebook.png',
            link : 'https://www.facebook.com/groups/411349850989553',
            description : 'Rimani aggiornato su Facebook'
        }
    ]
}