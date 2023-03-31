import React, { Component } from 'react';
import './App.css' ;


class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: false,
      Person: {
        fullName: 'Jack Stiffen',
        bio: "I'm a professional photographer who loves to travel and make people smile.",
        imgSrc: 'https://images.unsplash.com/photo-1489210998885-dd2b7b631909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        profession: 'photographer',
        timer: 0 ,
      },
    };
  }

  handleClick = () => {
    this.setState({ shows: !this.state.shows });
  };
  componentDidMount() {
    this.timerId = setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000)
    };
  

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className='App'>
        <p>Time since mounted: {this.state.timer} seconds</p>
        <button onClick={this.handleClick}>Show</button>
        <div>
          {this.state.shows && (
            <div>
              <p>Time since mounted: {this.state.timer} seconds</p>
              <img src={this.state.Person.imgSrc} />
              <h1>{this.state.Person.fullName}</h1>
              <h1>{this.state.Person.profession}</h1>
              <h1>{this.state.Person.bio}</h1>
              
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
