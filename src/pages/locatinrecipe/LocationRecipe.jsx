import React, { useEffect, useState } from 'react';

const LocationRecipe = () => {
    const [locations, setLocation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/location')
            .then(res => res.json())
            .then(data => setLocation(data))
            .catch(error => console.error(error));
          
    }, []);
console.log(locations)
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            { locations.map((location) => (
                <div key={location.id}>
                    <h1 className='text-8xl text-red-700'>{location.details}</h1>
                </div>
            ))}

        </div>
    );
};

export default LocationRecipe;
