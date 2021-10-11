import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1 className="h1">Toy Robot App</h1>
        <img className="robot" src="robot.png" alt="" />
        <div className="form-container">
          <label htmlFor="command-script"></label>
          <textarea className="textarea" name="" id="command-script"></textarea>
        </div>
        <div className="form-container">
          <button className="button">Get result</button>
        </div>
        <div className="form-container">
          Result:
          <div className="result"></div>
        </div>
        <div>

        </div>
      </header>
      <footer className="footer">
        <p>Made in October, 2011.<br />
        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </footer>
    </div>
  );
}

export default App;
