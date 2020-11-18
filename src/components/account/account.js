const { reducer } = require("redux-form");

import React, { Component } from 'react'

export class Account extends Component {
  rednerContent() {
    return <h1> content </h1>
  } 
  render() {
    return (
      <div>
          { this.rednerContent() }
      </div>
    )
  }
}

export default Account
