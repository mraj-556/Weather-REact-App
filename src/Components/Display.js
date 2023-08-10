import React , {useContext} from 'react'
import { WiCelsius } from "react-icons/wi";

import { weather_info } from '../App'

function Display(props) {
    const info = useContext(weather_info);
    // console.log(info);

    const chnage_bg = (weathertype) =>{
      props.data(weathertype);
    }

    if (info.cod==200){
      return (
        <div>
            Location : {info.name} - {info.sys.country} <br />
            Tempearature : {(info.main.temp - 273).toFixed(1)}<WiCelsius/> <br />
            Pressure : {(info.main.pressure/68.941).toFixed(2)} Psi <br />
            Humidity : {info.main.humidity} % <br />
            Visibility : {(info.visibility)} mtr. <br />
            Wind : {info.wind.speed} km/hr , {info.wind.deg}deg <br />
            Weather type : {info.weather[0].main}
            {chnage_bg(info.weather[0].main)}
        </div>
      )
    }
    else if (info.cod=="Initialization"){
      return(
        <div style={{color:"whitesmoke",fontFamily:"serif",fontWeight:"500",textAlign:"center"}}>
            Search For A City !
            {chnage_bg('random')}
          </div>
      )
    }
    else{
      return(
        <div style={{color:"red",fontFamily:"serif",fontWeight:"500"}}>
          No Result Found !
        </div>
      )
    }
}

export default Display