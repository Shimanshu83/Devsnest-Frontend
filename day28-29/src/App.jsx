import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getByPlaceholderText } from '@testing-library/react';

function App() {
  const [place, setPlace] = useState("");
  const [placeholder, setPlaceholder] = useState({});
  const updateplacename = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=f9ab8b4b461b4921a3e135517211308&q=${place}`)
      .then(res => res.json())
      .then(data => {
        setPlaceholder(data);
      })
  }
  console.log(place)
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12  form">
            <input type="text" value={place} onChange={(e) => { setPlace(e.target.value) }} />
            <button className="btn btn-primary" onClick={updateplacename}>submit</button>
          </div>
          <div className="offset-md-4 col-4 weather">
            <div className="card" style={{borderRadius:"50px"}}>
              {placeholder.location ? <div>

                <img src={placeholder.current.condition.icon} alt="icon" style={{opacity:"100%"}}></img>
                <div className="temp">{placeholder.current.temp_c}°</div>
                <div className="desc">{placeholder.current.condition.text}</div>
                <div className="place">{placeholder.location.name}</div>
                <div className="container">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind Now</div>
                      <div className="data">{placeholder.current.wind_kph}<span className="unit">km</span></div>
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">{placeholder.current.humidity}<span className="unit">%</span></div>
                    </div>
                    <div className="col">
                      <div className="title">Precipitation</div>
                      <div className="data">{placeholder.current.precip_in}<span className="unit">%</span></div>
                    </div>
                  </div>
                </div>


              </div> : <h1>not found!</h1>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
