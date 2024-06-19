import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Page2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const queryInput = searchParams.get('input') || '';
    setInputValue(queryInput);
  }, [searchParams]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchParams({ input: e.target.value });
  };

useEffect(() => {
    if (inputValue) {
      fetch(`https://api.weatherapi.com/v1/current.json?key=03aa011ef01145b78b7133914241606&q=${inputValue}&aqi=yes`)
        .then(response => response.json())
        .then(response => setWeatherData(response))
    }
  }, [inputValue]);

  return (
    <div>
      <h1>Page 2</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      
        <div>
          <p>Location: {weatherData?.location?.name}</p>
          <p>Temperature: {weatherData?.current?.temp_c} °C</p>
          <p>Condition: {weatherData?.current?.condition?.text}</p>
        
        </div>
      
    </div>
  );
}

export default Page2;






