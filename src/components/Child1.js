import React, { Component } from 'react'
import Child2 from './Child2'


export default class Child1 extends Component {
  render() {
    return (
      <div>Child1
      
      <hr />
      
      <Child2 abc={this.props.xyz}/>
      </div>
    )
  }
}
