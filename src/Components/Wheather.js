import React, { useState } from 'react'
import '../App.css';
import './CompStyle.css';
import Display from './Display';

import { WiDaySleetStorm } from "react-icons/wi";

function Wheather(props) {
  const [city, setCity] = useState("");
  const [background, setBackground] = useState("url(images/wallpaper/default.jpg)");
  
  const wallpapers = ["Autumn", "default", "nature","summer"];

  const SearchData = () => {
    if (city.length > 3) {
      props.data(city);
    }
    else {
      alert("Please Type the city");
    }
  }

  const Get_Val = (event) => {
    setCity(event.target.value);
  }

  const changebg = (weathertype) => {
    console.log("TYpe of weather : " + weathertype);
    if (weathertype == "random") {
      const randpm_num = Math.floor(Math.random()* ((wallpapers.length-1) - 0 + 1)) + 0;
      console.log("wallpaper num : "+randpm_num);
      setBackground(`url(images/wallpaper/${wallpapers[randpm_num]}.jpg)`);
    }
    else {
      setBackground(`url(images/weathertypes/${weathertype}.jpg)`);
    }
  }


    return (
      <div className='main App-header' style={{ backgroundImage: background }}>
        <div className="info_box">
        <h3 className='headername'> <WiDaySleetStorm/> TEMP - Tr/-\cker <WiDaySleetStorm/></h3>
        <hr className='divider' />
          <input className='serachbox' type="text" placeholder='Search city' onChange={Get_Val} />
          <br />
          <button className='glow-on-hover' onClick={SearchData}>Search....</button>
          <Display data={changebg} />
        </div>
      </div>
    )
  }

  export default Wheather