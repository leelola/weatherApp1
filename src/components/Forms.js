import React from "react";



class Forms extends React.Component{
    render(){
        return(

            //onSubmit is a react attribute to get Weathername +"name attribute"
<form onSubmit={this.props.getWeather}>

    <input type ="text" name ="city" placeholder ="city code..."/>
     <input type ="text" name ="country" placeholder ="Country..."/>
     
    <button> Get weather </button>
</form>      
  );
    }
};

export default Forms;