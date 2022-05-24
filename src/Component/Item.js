import React, { Component } from 'react' 

export class Item extends Component {
  render() {
    return (
      <li className='item'>
          <div className='item-text'>{this.props.val}</div>
          <div className='buttons'>
                <button className='btn delete-btn' onClick={() => this.props.deleteItem(this.props.id)}>Delete</button>  
                <button className='btn edit-btn' onClick={() => this.props.editItem(this.props.id)}>Edit</button>
          </div>
      </li>
    )
  }
}

export default Item
