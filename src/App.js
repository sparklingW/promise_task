import React, { useState, useEffect } from 'react';
import { currencyPromise } from './currencyData';
import './App.css';

const request = async (cb) => {
  try {
    const res = await currencyPromise();
    cb(res);
  } catch (e) {
    console.error(e);
  }
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request(setData);
  }, []);

  return (
    <div className='app_container'>
      {
        data.rates !== undefined 
        && 
        data.rates.map((element) => (
          <ul className='currency_list' key={element.id}>
            <li className='list_element'>1 USD - {element.value} {element.name}</li>
          </ul>
        ))
      }
    </div>
  );
}

export default App;
