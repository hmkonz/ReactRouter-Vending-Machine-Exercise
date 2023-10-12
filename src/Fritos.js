import React from "react";
import { Link } from "react-router-dom";

function Fritos() {
    return (
        <div>
            <h1>Crunchy Corn Chips!</h1>
            <img 
                src ="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQkNU5DoQXZ6W2cQW_ulHZjM92YshdumrdYzo26oyckl2A2opMcQClNK_NF4WkYMVrVhwoCJ55I44FTp8RbQVcB_d5Duu3KUrvE4OhfkVkM1V7CnxDQvM4ZlF8yfQ8_NTSzXmZcemnoC-s&usqp=CAc"
                alt="Frito Bag"
            />
            <h3><Link to="/">go back</Link></h3>
        </div>
    );
}

export default Fritos;

