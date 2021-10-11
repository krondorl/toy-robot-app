import React from 'react';
import './App.scss';
import SystemService from './services/system.service';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="app-header">
          <h1 className="h1">Toy Robot App</h1>
          <h2 className="h2">Place the robot, build walls and move around!</h2>
          <img className="robot" src="robot.png" alt="Robot" />
          <div className="form-container">
            <label htmlFor="command-script"></label>
            <textarea className="textarea" name="" id="command-script">
            </textarea>
          </div>
          <div className="form-container">
            <button className="button">Get result</button>
          </div>
          <div className="form-container">
            Result:
            <div className="result"><code></code></div>
          </div>
          <div>

          </div>
        </header>
        <footer className="footer">
          <p>Made in October, 2021.<br />
          Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </footer>
      </div>
    );
  }
}
export default App;
