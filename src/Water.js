import React from "react";
import { Link } from "react-router-dom";

function Water() {
    return (
        <div>
            <h1>Refreshing Water!</h1>
            <img 
                src ="https://www.staples-3p.com/s7/is/image/Staples/sp24278010_sc7?wid=200&hei=200"
                alt="Aquafina Water Bottle"
            />
            <h3><Link to="/">go back</Link></h3>
        </div>
    );
}

export default Water;