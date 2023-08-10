import { useState , createContext } from 'react';
import './App.css';
import Weather from './Components/Wheather';


// const deafult_api_data = {
//   "coord": {
//       "lon": 85.8333,
//       "lat": 20.2333
//   },
//   "weather": [
//       {
//           "id": 721,
//           "main": "Haze",
//           "description": "haze",
//           "icon": "50n"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 302.27,
//       "feels_like": 309.16,
//       "temp_min": 302.27,
//       "temp_max": 302.27,
//       "pressure": 1006,
//       "humidity": 84
//   },
//   "visibility": 4000,
//   "wind": {
//       "speed": 1.03,
//       "deg": 220
//   },
//   "clouds": {
//       "all": 40
//   },
//   "dt": 1691598079,
//   "sys": {
//       "type": 1,
//       "id": 9113,
//       "country": "IN",
//       "sunrise": 1691538859,
//       "sunset": 1691585418
//   },
//   "timezone": 19800,
//   "id": 1275817,
//   "name": "Bhubaneswar",
//   "cod": 200
// }

const deafult_api_data={
  cod: "Initialization"
}

const weather_info = createContext();

function App() {
  const [api_data, setApi_data] = useState(deafult_api_data);
  

  const searchPressed = (city) => {
    console.log("Searching for : "+city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c75481c4e2e67b49c02bef1edb3181a5`)
    .then((res)=>res.json())
    .then((result)=>{
      setApi_data(result);
    })
  }

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(success, error);
  // } else {
  //   console.log("Geolocation not supported");
  // }
  
  // function success(position) {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;
  //   console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  // }
  
  // function error() {
  //   console.log("Unable to retrieve your location");
  // }

  return (
    <div className="App">
      <weather_info.Provider value={api_data}>
        <Weather data = {searchPressed}/>
      </weather_info.Provider>
    </div>
  );
}

export default App;
export { weather_info };