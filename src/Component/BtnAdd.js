import React, { Component } from 'react'

export class BtnAdd extends Component {
  
  render() {
    return (
      <div>
          <button type='submit' className='add-btn btn'>{this.props.formBtnState} {this.props.todoNum}</button>
      </div>
    )
  }
}

export default BtnAdd
