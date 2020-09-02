import React from 'react';
import {Link } from 'react-router-dom';

const Country = (props) => {
        const {name,flag} = props.country;
    const countryStyle={
        border:'1px solid red',
        margin:'22px',
        padding:'20px',
        borderRadius:'22px'
    }
    const imgStructure={
        height: '10%',
        width: '15%'
    }
    return (

        <div>
           
            <div style={countryStyle}>
            <h3> {name}.</h3>
            <img style={imgStructure} src={flag} alt=""/>
            <br/>
            

            <Link to={`/country/${name}`}><button>Click for details</button></Link>
        </div>
        </div>
    );
};

export default Country;