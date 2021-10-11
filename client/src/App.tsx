import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null
  };

  async componentDidMount() {
    try {
      const body: string = await this.__callBackendAPI();
      this.setState({ data: body });
    }
    catch (e: any) {
      console.log("Unable to connect to server. " + e.message);
    }

  }

  private async __callBackendAPI(): Promise<string> {
    const response = await fetch('/backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body.express;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
