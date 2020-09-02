import React from 'react';

const NoMatch = () => {
    const styleNoMatch ={
        textAlign:'center'
    }
    return (
        <div style = {styleNoMatch} >
            <h2>Sorry, No Match</h2> 
            <h4>404</h4>
        </div>
    );
};

export default NoMatch;