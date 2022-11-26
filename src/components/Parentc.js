import React, { Component } from 'react'
import Left from './Left'
import Right from './Right'


export default class Parentc extends Component {
  constructor(){
    super();
    this.state={
      catname:""
    }
    this.dataTransferComp=this.dataTransferComp.bind(this);
  }
  dataTransferComp(dataFromLeft){
    console.log('Parent Comp Method',dataFromLeft);
    console.log(this);

    this.setState({
      catname:dataFromLeft
    })
  }
  render() {
    return (
      <div className='container border'>
      <div className="row">
      <div className="col-md-3">
        <Left xyz={this.dataTransferComp}/>
      </div>
      <div className="col-md-9">
      <Right abc={this.state.catname}/>
      </div>
      </div>
      </div>
    )
  }
}
