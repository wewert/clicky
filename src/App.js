import React, { Component } from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import Wrapper from "./Components/Wrapper";
import images from "./images.json"
import './App.css';

class App extends Component {
  state = {
    images: images,
    score: 0,
    highScore: 0,
    clicked: false,
    text: "",
    clickedOnImages: []
  }

  shuffleDeck = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

  }

  clicking = id => {
    let clickedImage = this.state.images.filter(image => image.id === id)

    console.log("Image id", clickedImage[0].id)


    let array = this.state.clickedImages;

    if (array.indexOf(clickedImage[0].id) === -1) {

      array.push(clickedImage[0].id);

      console.log("adding", array)
      this.setState({ clickedImages: array })
      this.setState({ text: "Added..." })
      this.setState({ score: this.state.score + 1 })

      if (array.length > this.state.highScore) {

        this.setState({ highScore: array.length })
        console.log("High Score", this.state.highScore)
      }

    } else {
      console.log("Duplicate Image")
      this.setState({
        images: images,
        score: 0,
        clicked: false,
        clickedImages: [],
        text: "Oh no! Try Again..."
      })
    }


    this.setState({ images: images })
    this.shuffleDeck(images)

  }


  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          highScore={this.state.highScore}
          text={this.state.text}
        />


        {images.map(image =>
          <Card {...image}
            id={image.id}
            key={image.id}
            clicking={this.clicking}

          />)}

      </Wrapper>
    );
  }
}

export default App;
