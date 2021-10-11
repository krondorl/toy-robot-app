import React from 'react';
import './App.scss';
import SystemService from './services/system.service';

type MyState = {
  inputScript: string,
  reportData: string
};

class App extends React.Component<{}, MyState> {
  systemService: SystemService;

  constructor(props: any) {
    super(props);
    this.systemService = new SystemService();
    this.state = {
      inputScript: "PLACE_ROBOT 3,3,NORTH\n" +
        "PLACE_WALL 3,5\n" +
        "MOVE\n" +
        "MOVE\n" +
        "RIGHT\n" +
        "MOVE\n" +
        "MOVE\n" +
        "MOVE\n" +
        "REPORT",
      reportData: ""
    };
    this.result = this.result.bind(this);
  }

  inputScriptChange = (event: any) => {
    this.setState({ inputScript: event.target.value });
  }

  result(): void {
    this.systemService.clear();
    this.systemService.parseCommandScript(this.state.inputScript);
    this.setState({ reportData: this.systemService.reportData });
  }

  render() {
    return (
      <div className="container">
        <header className="app-header">
          <h1 className="h1">Toy Robot App</h1>
          <h2 className="h2">Place the robot, build walls and move around!</h2>
          <img className="robot" src="robot.png" alt="Robot" />
        </header>
        <main className="main">
          <div className="form-container">
            <label htmlFor="command-script"></label>
            <textarea className="textarea" name="" id="command-script" value={this.state.inputScript} onChange={this.inputScriptChange} />
          </div>
          <div className="form-container">
            <button className="button" onClick={this.result}>Get result</button>
          </div>
          <div className="form-container">
            Result:
            <div className="result"><code>{this.state.reportData}</code></div>
          </div>
        </main>
        <footer className="footer">
          <p>Made in October, 2021.<br />
          Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </footer>
      </div>
    );
  }
}
export default App;
