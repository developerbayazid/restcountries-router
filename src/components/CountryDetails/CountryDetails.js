import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {

    const {name} = useParams();
    const [countryDetails, setCountryDetails] = useState([]);
    
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryDetails(data[0]))
    }, [name])

    const countryFlags = countryDetails.flags ? countryDetails.flags.png : "";
    const countryName = countryDetails.name ? countryDetails.name.common : "";
    const capital = countryDetails.capital ? countryDetails.capital : "";
    const region = countryDetails.region ? countryDetails.region : "";
    const subRegion = countryDetails.subregion ? countryDetails.subregion : "";
    const population = countryDetails.population ? countryDetails.population : "";

    return (
        <div className='country-details'>
            <h1>{name} Details Page</h1>
            <img src={countryFlags} alt={countryName} />
            <h3>Country Name: {countryName}</h3>
            <h4>Capital: {capital}</h4>
            <p>Region: {region}</p>
            <p>Sub Region: {subRegion}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default CountryDetails;
