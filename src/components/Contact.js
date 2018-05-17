import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        id: {this.props.match.params.id} component
      </div>
    )
  }
}

export default Contact;
