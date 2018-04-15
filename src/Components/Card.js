import React from 'react';
import Image from './Image';

class Card extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        key: this.props.id,
        name: this.props.name,
        selected: this.props.selected
      };
    }

    componentDidMount() {
      console.log(this.props.id, this.props.name, this.props.selected, this.props.counter);
    }

    render() {
      return(
        <div onClick={() => this.props.counter(this.props.character,this.props.selected)} className={"col-3 mt-3"}>
          <Image imgSrc={this.props.character} />
        </div>
      )
    }

}

export default Card
