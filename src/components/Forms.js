import React from "react";



const Forms = props => (

  <form onSubmit={props.getWeather}>
   <input type ="text" name ="city" placeholder ="City name..."/>
   <input type ="text" name ="country" placeholder ="Country..."/>
   <button> Get weather </button>
</form>      
);

 //onSubmit is a react attribute to get Weathername +"name attribute"



export default Forms;