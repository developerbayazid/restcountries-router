import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const country = props.country;
    const name = country.name.common;
    const flags = country.flags.png;
    return (
        <Fragment>
            <h1>{name}</h1>
            <img className='flag' src={flags} alt={name} /><br />
            <Link to={`/country/${name}`}>
                <button className='country-btn'>Country Details</button>
            </Link>
        </Fragment>
    );
};

export default Country;