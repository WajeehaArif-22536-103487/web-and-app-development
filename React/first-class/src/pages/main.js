import React, { useEffect, useState } from "react"
import Point from "../components/button"
function Main() {
    const [number, setNumber] = useState(0)
    const service = [
        {
            id: 1,
            icon: <i className="fa fa-twitter"/>,
            heading: "Twitter"
        },
        {
            id: 2,
            icon: <i className="fa fa-instagram"></i>,
            heading: "Instagram"
        },
           {
            id: 3,
            icon: <i className="fa fa-dribbble"></i>,
            heading: "Dribble"
        },
           {
            id: 4,
            icon: <i className="fa fa-facebook"></i>,
            heading: "Facebook"
        },
    ]
    useEffect(() => {
        console.log("Re-render")
    }, [number])


    const handleClick = () => {
    alert("Button clicked!");
  };

    const handlegoogle = () => {
    alert("login with google ");
  };
    return (
        <>
            <div className="counter">
                <button onClick={() => setNumber(number + 1)}>increment</button>
                <h1>{number}</h1>
                <button onClick={() => setNumber(number - 1)}>Decrement</button>
            </div>
            <div className="serviceCard">
                {service.map((value, index) => (
                <div key={index}>
                    <h2>{value.id}</h2>
                    <p>{value.icon}</p>
                    <p>{value.heading}</p>
                </div>
                ))
                }
            </div>
            {/* props cause,props drilling solution,context */}
             <Point label="Click Me" variant="primary" onClick={handleClick} /><br/>
              <Point label="Login with gooogle" variant="secondary" onClick={() => handlegoogle()} />
        </>
    )
}
export default Main;