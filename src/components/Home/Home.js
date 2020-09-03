import React from 'react';
import { useEffect,useState } from 'react';
import Country from '../Country/Country';
const Home = () => {
    const [country,setCountry] = useState([]);
    
    const [search,setSearch] = useState('');
    useEffect(() =>{
    fetch("https://restcountries.eu/rest/v2/all#")
    .then(response => response.json())
    .then(data=>setCountry(data))
    
  },[])

  const filteredCountries = country.filter(country => {
      return country.name.toLowerCase().includes(search.toLowerCase())
  })

  const style={
    textAlign:'center'
}

    return (
        
        <div style= { style}>
            
               <div  >
               <h1>Total Country found :{country.length}</h1>
                <input type="text" placeholder="Search " onChange={e=> setSearch(e.target.value)}/>
               </div>
               {
                    filteredCountries.map(country => <Country country={country} ></Country>)
               }
        </div>
    );
};

export default Home;