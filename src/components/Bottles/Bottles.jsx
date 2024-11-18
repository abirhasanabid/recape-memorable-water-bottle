import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {

    const [bottles,setBottles]=useState([]);

    useEffect(()=>{

        fetch('./bottlesData.json')
        .then(res => res.json())
        .then(data => setBottles(data))

    },[])

    return (
        <div>
            <h2>Bottles : {bottles.length}</h2>  

            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
            {
                bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>

        </div>
    );
};

export default Bottles;