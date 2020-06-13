import React from 'react';
const api= {
  key: '4b3f25e782223fd3ef9a2cc314e68a54',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..."></input>
        </div>
      </main>
    </div>
  );
}

export default App;
