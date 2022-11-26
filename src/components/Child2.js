import React, { Component } from 'react'
import { MainContext } from '../ContextApi'
import Child3 from './Child3'



export default class Child2 extends Component {
  render() {
    return (
      <div>Child2
      
      <MainContext.Consumer>
       {
        value=>(
            <p>{value}</p>
        )
       }
      </MainContext.Consumer>
      <hr />
      <Child3 pqr={this.props.abc}/>
      
      </div>
    
    )
  }
}
