import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/weather";


const API_KEY = "2c824efa1c01c2bd98d254bcd0fa3ff8";


class App extends React.Component { //app is the major component
   state = {
     temperature : undefined,
     city: undefined,
     country: undefined,
     humidity: undefined,
     description: undefined,
     error:undefined
   }
  getWeather = async(e)=>{

 // e.prevent id for single page act
   e.preventDefault();
   //const zip = e.target.elements.zip.value;
   //const zipcode = e.target.elements.zipcode.value;
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
   const api_call =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
   
   
   const data = await api_call.json();
   
   // to avoid the application from breaking. i add the i else statement
   if (city && country){
   console.log(data);
    this.setState({
      temperature:data.main.temp,
      city: data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""
    });   
 } else {
  this.setState({
    temperature:undefined,
    city: undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:"Please Enter Data"
  
  });
 }
 }

  
  render () {
    return (
      <div>
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">

                <Forms getWeather={this.getWeather}/>
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country} 
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
                </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    );

  }
};


export default App;