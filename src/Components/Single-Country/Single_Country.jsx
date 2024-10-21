import { useState } from 'react';
import './SingleCountry.css'


const Country1 = ({singleCountry, handleVisitedBtn}) => {
    const {name,flags,population,area,cca3} =  singleCountry;

    const [visited, setVisited] = useState(false);

    const handleVisit =()=>{
        setVisited(!visited)
    }

    

    return (
        <div className={`design ${visited && 'visit'}`}>
            <h3 style={{color: visited? 'purple' : 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedBtn(singleCountry)}>Mark Visited</button>
            <br />
            <button style={{background: visited? 'purple' : 'black'}} onClick={handleVisit}>{visited? 'Visited' : 'Going'}</button>
            {visited ? 'Visited This Country' : 'Not Visited'}
        </div>
    );
};

export default Country1;