import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [countryIdName,setCountryIdName ] = useState([]);
    useEffect(()=> {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(response => response.json())
        .then(data=> setCountryIdName(data[0]));
                },[])
    return (
        <div>
            <h1>
                {countryName} Details.
            </h1>
            <h3>Country Name:  {countryIdName.name}</h3>
            <h3>Capital: {countryIdName.capital}</h3>



        </div>
    );
};

export default CountryDetails;