import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import ListItem from "./ListItem";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "To-do App",
      inputVal: "",
      todoId: null,
      todo: localStorage.getItem('Todo') ? JSON.parse(localStorage.getItem('Todo')) :[] ,
      formBtnState: "add",
    };
    
    // input change
    this.handleInputChange = (e) => {
      this.setState({
        inputVal: e.target.value,
      });
    };

    // Form Btn
    this.handleFormSubmit = (e) => {
      e.preventDefault();
      if(this.state.inputVal != ""){
            if (this.state.formBtnState == "add" ) {
                    this.state.todo.push({todoName: this.state.inputVal,id: Math.random(),});
            } else if (this.state.formBtnState == "edit") {
                    let editedIndex = this.state.todo.findIndex((ele) => ele.id == this.state.todoId);
                    if(editedIndex != -1){
                        this.state.todo[editedIndex].todoName = this.state.inputVal;
                    }else{
                        this.state.todo.push({todoName: this.state.inputVal,id: Math.random(),});
                    }
                    this.state.formBtnState = "add";
            }
      }
      this.state.inputVal = "";
      window.localStorage.setItem("Todo",JSON.stringify(this.state.todo))
      this.forceUpdate();
    };

    // Delete Function
    this.deleteItem = (id) => {
      let oldTodo = [...this.state.todo];
      let filteredTodo = oldTodo.filter((todoItem) => id != todoItem.id);
      window.localStorage.setItem("Todo",JSON.stringify(filteredTodo))
      this.setState({
        todo: filteredTodo,
      });
    };

    // Edit Function
    this.editItem = (id) => {
      let oldTodo = [...this.state.todo];
      let item = oldTodo.find((ele) => ele.id == id);
      this.setState({
        inputVal: item.todoName,
        todoId: item.id,
        formBtnState: "edit",
      });
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Form
          inputVal={this.state.inputVal}
          inputChange={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
          todoNum={this.state.todo.length}
          formBtnState={this.state.formBtnState}
        />
        <ListItem todo={this.state.todo} deleteItem={this.deleteItem} editItem={this.editItem}/>
      </div>
    );
  }
}

export default App;
