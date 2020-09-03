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
                },[]);


           const style={
                textAlign:'center'
            }

            const imgstyle={
                height:'10%',
                width:'10%'
            }
    return (
        <div style={style}>
            <h1>
                {countryName} Details.
            </h1>
            <img style={imgstyle} src={countryIdName.flag} alt=""/>
            <h2>Country Name:  {countryIdName.name}</h2>
            <h3>Capital: {countryIdName.capital}</h3>
            <p>region: {countryIdName.region}</p>
            <p>subregion:  {countryIdName.subregion}</p>
            <p>population :  {countryIdName.population}</p>
            <p>demonym :  {countryIdName.demonym}</p>
            <p>area  : {countryIdName.area}</p>
            <p>gini  :  {countryIdName.gini}</p>
            <p>numericCode  :  {countryIdName.numericCode}</p>
            <p>cioc  :  {countryIdName.cioc}</p>
            <p>timezone    : {countryIdName.timezones}</p>
            <p>topLevelDomain : {countryIdName.topLevelDomain}</p>
            <p>alpha2Code  : {countryIdName.alpha2Code}</p>
            <p>alpha3Code  : {countryIdName.alpha3Code}</p>
            <p>callingCodes  : {countryIdName.callingCodes}</p>

        </div>
    );
};

export default CountryDetails;