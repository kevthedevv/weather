import React from 'react'

export default function Weather() {
    return (
        <div>
            <main>
                <div className="header">

                </div>
                <div className="container">
                    <div className="content">
                        <div>
                            <h1 id="city"></h1>
                            <p id="weather-type"></p>
                        </div>
                        <div>
                            {/* we need to add icon here */}
                            <img></img>
                            <img>2 image</img>
                        </div>
                        <div id="humidity-div">
                            <img></img>
                            <p>Humidity</p>
                            <h1>%</h1>
                        </div>
                        <div id="temp-div">
                            <img></img>
                            <p>Temperature</p>
                            <h1>'C</h1>
                        </div>
                        <div id="chance-div">
                            <img></img>
                            <p>Chances of rain</p>
                            <h1>%</h1>
                        </div>
                        <div id="windspeed-div">
                            <img></img>
                            <p>Wind speed</p>
                            <h1>kph</h1>
                        </div>
                    </div>
                    <footer>Copyright: Vin Espoasdo 2020</footer>

                </div>
                
            </main>
        </div>
    )
}
