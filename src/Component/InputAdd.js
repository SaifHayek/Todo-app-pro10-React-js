import React, { Component } from 'react'

export class InputAdd extends Component {
  constructor(){
      super()

  }
  render() {
    return (
      <div>
           <input type="text" className='todo-input' placeholder='What will you do today ?' onChange={this.props.inputChange} value={this.props.inputVal}/>
      </div>
    )
  }
}

export default InputAdd
