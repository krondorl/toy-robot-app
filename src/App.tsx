import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="h1">Toy Robot App</h1>
        <img className="robot" src="robot.png" alt="" />
        <div>
          <label htmlFor="command-script"></label>
          <textarea name="" id="command-script"></textarea>
        </div>
        <div>
          <button>Get result</button>
        </div>
        <div>
          Result:
          <span className="result"></span>
        </div>
        <div>

        </div>
      </header>
      <footer>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a>
        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  );
}

export default App;
