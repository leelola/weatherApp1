import React from "react";

const Weather = (props) => {
//since we are returning just a single function we can get rid of teh return key and 
    return (
        <div>
            {props.city && props.country && <p>Location:{props.city}, {props.country}</p>}
            {props.temperature && <p>temperature:{props.location}</p>}
            {props.humidity && <p>humidity:{props.humidity}</p>}
            {props.description && <p>Conditions:{props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    );
}


export default Weather;













































