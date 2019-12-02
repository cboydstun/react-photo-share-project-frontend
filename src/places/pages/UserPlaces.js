import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES =[
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the tallest places in Manhattan.',
        address: '20 W 34th St, New York, NY',
        imageURL: 'https://media.timeout.com/images/101705309/750/422/image.jpg',
        location: {
            lat: 40.7484405,
            lon: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the tallest places in Manhattan.',
        imageURL: 'https://cdn.getyourguide.com/img/tour_img-1739965-148.jpg',
        address: '20 W 34th St, New York, NY',
        location: {
            lat: 40.7484405,
            lon: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {


    return <PlaceList items={DUMMY_PLACES} />
};

export default UserPlaces;