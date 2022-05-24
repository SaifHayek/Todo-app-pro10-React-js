import React, { Component } from 'react'
import InputAdd from './InputAdd'
import BtnAdd from './BtnAdd'

export class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.formSubmit}>
          <InputAdd inputChange = {this.props.inputChange}  inputVal = {this.props.inputVal}/>
          <BtnAdd todoNum = {this.props.todoNum} formBtnState = {this.props.formBtnState}/>
      </form>
    )
  }
}

export default Form
