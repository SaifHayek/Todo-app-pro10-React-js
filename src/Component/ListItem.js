import React, { Component } from 'react'
import Item from './Item'

export class ListItem extends Component {
  render() {
    return (
      <ul className='list'>
           {this.props.todo.map((todoItem,index) => <Item val = {todoItem.todoName} id ={todoItem.id} key = {index} deleteItem = {this.props.deleteItem} editItem = {this.props.editItem}/>)}
      </ul>
    )
  }
}

export default ListItem
