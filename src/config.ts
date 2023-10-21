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
        path: './img/02.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/01.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/03.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/04.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/05.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/06.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/07.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/08.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/09.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/010.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/011.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il casale della poiana',
        path: './img/012.jpeg'
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