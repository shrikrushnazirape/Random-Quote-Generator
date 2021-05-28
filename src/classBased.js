import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {
  state = {
    advice : '',
  }

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((res) =>{
      const {advice } = res.data.slip;
      this.setState({advice})
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="card">
            <div className="header">
              <h1>
                {this.state.advice}
              </h1>
            </div>
            <div className="button" onClick={this.fetchAdvice}>
                Generate
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
