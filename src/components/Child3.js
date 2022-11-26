import React, { Component } from 'react'
import  { MainContext,UserContext } from '../ContextApi'


export default class Child3 extends Component {
  render() {
    return (
      <div>Child3 , From Main {this.props.pqr}
      <br />
      <h2>Data From Provide</h2>
      <MainContext.Consumer>
      {
        value1=>(
         <UserContext.Consumer>
         {
           value2=>(
            <>
            <p>{value1}</p>
            <p>{value2}</p>
            </>
           )
         }
         </UserContext.Consumer>
        )
      }
      </MainContext.Consumer>
      </div>
    )
  }
}

