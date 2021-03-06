import React, {useEffect, useState} from 'react'
import './Weather.css';

//84af6f866c5e0390408b69396b1f15f8
function Weather() {

    
    const [weatherType, setWeatherType] = useState("");
    const [weatherDescription, setWeatherDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [temp, setTemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [city, setCity] = useState("");
    const [searchCity, setSearchCity] = useState("cebu")
    const fetching = async () =>{
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=84af6f866c5e0390408b69396b1f15f8`)
        .then((res) => res.json())
        .then((data) => {
            console.log("succes", data)
            setWeatherType(data.weather[0].main);
            setWeatherDescription(data.weather[0].description)
            setIcon(data.weather[0].icon)
            setTemp(data.main.temp);
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setCity(data.name);
            
        })
        .catch((err)=>{
            console.log(err)
        })}
    useEffect(() => {
        fetching();
    }, [searchCity])
    
    //  const onChangeHandler = e =>{
    //     if( e.charCode === 13 ) {
    //       setSearchCity(e.target.value);
    //   }
    const onChangeHandler = e => {
        if( e.charCode === 13 ) {
           setSearchCity(e.target.value)
        }
        }
     
    return (
        <div>
            <main className="main-content" >
                <div className="overlay">
                    <div className="header">
                        <div><h1><span id="just">Just </span>Weather</h1></div>
                        <div id="search-div">
                            <form>
                                <input type="text" placeholder="Search a city" onKeyUp={onChangeHandler}/>
                            </form>
                            <div>
                                <img src="/weather-icons/menu-icon.png" alt="burger"/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="content">
                            <div id="main-weather">
                                <div id="city-div">
                                    <h1 id="city">{city}</h1>
                                    <p id="weather-type">{weatherType} - {weatherDescription}</p>
                                </div>
                                <div>
                                {/* we need to add icon here */}
                                <img src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} alt="alternatetext"></img>
                                </div>
                            </div>

                            <div id="humidity-div" className="icons-main">

                                <img src="/weather-icons/humid-icon.png" alt="hello"></img>
                                <div className="icons-description">
                                    <p>Humidity</p>
                                    <h1>{humidity}%</h1>
                                </div>

                            </div>
                            <div id="temp-div" className="icons-main">
                                <img src="/weather-icons/temp-icon.png" alt="hello"></img>
                                <div className="icons-description">
                                    <p>Temperature</p>
                                    <h1>{temp}'C</h1>
                                </div>
                            </div>
                            <div id="chance-div" className="icons-main">
                                <img src="/weather-icons/umbrella-icon.png" alt="hello"></img>
                                <div className="icons-description">
                                    <p>Chances of rain</p>
                                    <h1>%</h1>
                                </div>
                            </div>
                            <div id="windspeed-div" className="icons-main">
                            <img src="/weather-icons/wind-icon.png" alt="hello"></img>
                                <div>
                                    <p>Wind speed</p>
                                    <h1>{wind}kph</h1>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <div>
                                Copyright: Vin Esposado 2020
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
export default Weather;