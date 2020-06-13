import React from 'react';
const api= {
  key: '4b3f25e782223fd3ef9a2cc314e68a54',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..."></input>
        </div>
        <div>
          <div className="location-box">
            <div className="location">New York City, US</div>
            {/* <div className="date">{dateBuilder(new date())}</div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
