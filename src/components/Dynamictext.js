import React,{useEffect,useState} from 'react';

function Dynamictext(props) {

    const[toggles,setToggle]=useState(0);

    const animate=['Delevering Happiness At Your Door-step!..','Late Night At Office?..','Unexpected Guests ?..','Cooking gone Wrong?..',' India largest Online Food Delevering App..','Game Night ?..'];

    useEffect(() => {
        setInterval(() =>  {
            setToggle((toggles) => (toggles+1)%7)
        }, 3000);
    
        // return () => clearInterval(intervalID);
    }, []);
    
        // return () => clearInterval(intervalID);

    // console.log("toggle is"+toggles);

    return (
        <div className="left-part left-part-dynamic">

            <h1>{animate[toggles]}</h1>
            <p className="order-para">Order food from favourite restaurants near you.</p>
        </div>
    );
}

export default Dynamictext;