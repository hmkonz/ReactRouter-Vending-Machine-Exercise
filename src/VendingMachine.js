import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h1>Choose a snack from the vending machine!</h1>
            
            <h1><Link to="/cliffbar">CliffBar</Link></h1>
            <h1><Link to="/fritos">Fritos</Link></h1>
            <h1><Link to="/water">Water</Link></h1>
        </div>
            
    );
}

export default VendingMachine;