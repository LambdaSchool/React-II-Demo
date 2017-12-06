import React, { Component } from 'react';

class ComponentDidMountExample extends Component {
  constructor() {
    super();
    this.state = {
      thing: {}
    };
  }

  componentDidMount() {
    this.setState({ thing: this.props.data });
  }

  render() {
    return (
      <div className="stuff">
        {`Prop data that got passed down:`}
        {this.state.thing ? 
          <div className="thing">
            <div className="thing-one">{this.state.thing.one}</div>
            <div className="thing-two">{this.state.thing.two}</div>
          </div> : null
        }
      </div>
    );
  }
}

export default ComponentDidMountExample;
    
