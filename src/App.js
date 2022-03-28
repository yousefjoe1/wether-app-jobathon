import { useEffect, useState, } from 'react';
import './App.css';
import Header from './comp/Header/Header';
function App() {
  const [cityname,setCityname] = useState('')
  const [main,setMain] = useState('')
  const [discrip,setDiscrip] = useState('')
  const [temp,setTemp] = useState(0)
  const [low,setLow] = useState(0)
  const [high,setHigh] = useState(0)

  const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  const dayName = days[new Date().getDay()];
const todayDate = new Date()


useEffect(() => {
  navigator.geolocation.watchPosition(function(position) {
    const latit = position.coords.latitude
    const langit = position.coords.longitude
    const fetching = async()=>{
      const newapikey = 'c2eb9bf7b3c90052d0509db78ba3055a'
      const url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${latit}&lon=${langit}&appid=${newapikey}`;
    let data = await fetch(url)
    let res = await data.json()
    console.log(res);
    setCityname(res.name)
    setMain(res.weather[0].main)
    setDiscrip(res.weather[0].description)
    setTemp(res.main.temp)
    setLow(res.main.temp_min)
    setHigh(res.main.temp_max)

      // var celsius = Math.round((farenheit - 32)/1.8);
      // $currentTemp.append(celsius + " C");
      // units = "si";

      // $currentTemp.html("");
      // $currentTemp.append(farenheit + " F");
      // units = "us"

    }
    fetching()
  });
  
}, [])
  return (
    <div className="App">
      <Header />
      <div className='currentCity'>
        {cityname}
      </div>
      <div className='todayDate'>{dayName+ ' ' +todayDate.getDate()+',' +  todayDate.getFullYear()}</div>
      <div className='decrip'>{main}</div>
      <div className='temp' >{temp}</div>
      <div className='low'>{low}</div>
      <div className='high'>{high}</div>
      <div className='secondDiscrep' >{discrip}</div>
    </div>
  );
}

export default App;
