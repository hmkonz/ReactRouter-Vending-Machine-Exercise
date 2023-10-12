import React from "react";
import { Link } from "react-router-dom";

function CliffBar() {
    return (
        <div>
            <h1>High Protein Healthier Snack!</h1>
            <img 
                src ="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUzJO1regj5jIHfsCp3CI01o8WtcI8ORo3rDRuVpNjk0ud7f7OEE4otK6t_6xSwb0o3_j8is9JbuZ_g9lzsyi8812ktfqQHIYhrWEa3JlTiBavS5YcwGte2oGK5nY_AVb6w4SXVfqbpu_m&usqp=CAc"
                alt="Cliff Bar Packages"
            />
            <h3><Link to="/">go back</Link></h3>
        </div>
        
    );
}

export default CliffBar;