import { useEffect } from "react";
import { useState } from "react"
import Country1 from "../Single-Country/Single_Country";
import './Country.css'

export default function Countries(){
    const [country,setCountry]= useState([]);

    const [visitedCountries, setVisitedCountries]= useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountry(data))
    },[])

     const handleVisitedBtn = singleCountry =>{

        console.log('Added: ');
        const newVisited = [...visitedCountries, singleCountry];
        setVisitedCountries(newVisited)
     }

    return(
        <div>
            <h3>Country: {country.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length} </h3>
                <ul>
                    {
                      visitedCountries.map(singleCountry => <li>{singleCountry.name.common}</li> )
                    }
                </ul>
            </div>
            <div className="country-design">
            {
                country.map(singleCountry=><Country1 key={singleCountry.cca3} handleVisitedBtn={handleVisitedBtn} singleCountry={singleCountry}></Country1>)
            }
            </div>
        </div>
    )
}