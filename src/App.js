import React, { Component } from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    roaders: [
      {
        key: 1,
        name: "character1",
        selected: false
      },
      {
        key: 2,
        name: "character2",
        selected: false
      },
      {
        key: 3,
        name: "character3",
        selected: false
      },
      {
        key: 4,
        name: "character4",
        selected: false
      },
      {
        key: 5,
        name: "character5",
        selected: false
      },
      {
        key: 6,
        name: "character6",
        selected: false
      },
      {
        key: 7,
        name: "character7",
        selected: false
      },
      {
        key: 8,
        name: "character8",
        selected: false
      },
      {
        key: 9,
        name: "character",
        selected: false
      },
      {
        key: 10,
        name: "character10",
        selected: false
      },{
        key: 11,
        name: "character11",
        selected: false
      },
      {
        key: 12,
        name: "character12",
        selected: false
      }
    ]
  };

  counter = ( name, selectedState) => {
    let roadersArray = this.state.roaders;
    roadersArray.sort(function(a, b) {return 0.5 - Math.random()});

    if (selectedState) {
      roadersArray.forEach(roaders => roaders.selected = false);
      this.setState({roaders: roadersArray, counter: 0})
    } else {
      roadersArray.forEach((roader) => {
        if (roader.name === name && roader.selected === false) {
          roader.selected = true;
          this.setState({roaders: roadersArray, counter: this.state.counter +1})
        }
      });
    }
  };

  render() {
    return (
      <wrapper>
        <Header score={this.state.counter} />
        <div className={"container"}>
          <div className={"row"}>
            {this.state.roaders.map((roader) => <Card key={roader.key} id={roader.key} character={roader.name} selected={roader.selected} counter={this.counter}/>)}
        </div>
      </div>
    </wrapper>
    )
  };
}

export default App;
