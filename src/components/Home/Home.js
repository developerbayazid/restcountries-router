import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {

    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

    return (
        <div className='country-list'>
            {
                country.map(ct => <div key={ct.name.common} className='country'><Country country={ct}></Country></div>)
            }
        </div>
    );
};

export default Home;