import { useEffect, useState, } from 'react';
import sun from './imgs/Vector.png'
import './App.css';
import Header from './comp/Header/Header';
function App() {
  const [cityname,setCityname] = useState('')

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
    console.log(res.name);
    setCityname(res.name)
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

    </div>
  );
}

export default App;
