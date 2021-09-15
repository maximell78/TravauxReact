import React, { useState } from "react";

/* class Car extends React.Component {
    constructor(props) {
    super(props);
    this.state = { brand: "Ford" };
    }
    render() {
    return (
        <div>
        <h1>My Car</h1>
        </div>
    );
    }
} */

function Car(props){
    const [brand, setBrand] = useState("Ford");
    const changeBrand = () => {
        setBrand(["Honda"]);
    }
        return (
        <div>
            <h1>My Car</h1>
            {brand}
            <br/>
            <div className="pt-3">
                <button onClick={changeBrand}>Cliquez ici pour changer le Brand</button>
            </div>
        </div>
        );
    }
    
export default Car;