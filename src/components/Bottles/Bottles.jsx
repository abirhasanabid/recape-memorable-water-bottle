import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    // show btl name state 
    const [bottls, setBottle] = useState([]);

    useEffect(() => {

        fetch('./bottlesData.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, []);

    // ByeNow btn
    const handleByNowBtn = bottle => {
        const newBottleData = [...bottls,bottle];
        setBottle(newBottleData)
    }

    return (
        <div>
            <h2>Bottles : {bottles.length}</h2>

            <div className="">
                {
                    bottls.map(bottl => <p key={bottl.id}>Selected Bottle Name : {bottl?.name}</p>)
                }
                
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {
                    bottles.map(bottle => <Bottle handleByNowBtn={handleByNowBtn} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;