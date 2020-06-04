import React from 'react';
import './App.css';

function Mailing() {
  // const space = "%20";
  // const space = "%0D";
  let message = "Hello,%20my%20name%20is%20[insert%20name].%20I%20am%20a%20resident%20of%20[city,%20state]%20and%20I%20am%20emailing%20today%20to%20demand%20accountability%20for%20the%20murder%20of%20[insert%20name].%0D%0DSincerely,%0D[insert%20name]%0D";
  window.location.href = "mailto:test@example.com?subject=Test%20Email&body=" + message;
 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NO PEACE. NO JUSTICE.</h1>
        <h1>BLACK LIVES MATTER.</h1>
        {Mailing()}
      </header>
    </div>
  );
}


export default App;
