import './App.css';
import React from 'react';
import AddTodo from './AddTodo';
import TodoElement from './TodoElement';


class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoList:[],
      value:'',
    };
    this.onChange=this.onChange.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }

  onChange(key_value) {
    this.setState(key_value)
  }

  handleDelete(id){
    let todoList = this.state.todoList.concat()
    let index = 0
    console.log('id:'+id);
    todoList.map((element, idx) => {
      console.log(element.id);
      if (element.id === id) {
        index = idx
      }
    })
    todoList.splice(index,1)
    this.setState({todoList:todoList})
  }
  
  add(todoElement) {
    this.setState({
      todoList: this.state.todoList.concat(todoElement),
      value: "",
    })
  }

  render(){
    const todoListNode = this.state.todoList.map(element => {
      return (
        <TodoElement
          key={element.id}
          element={element}
          onDelete={(id)=>this.handleDelete(id)}
        />
      )
    })

    return(
      <div>
        <h1>TodoApp</h1>
        <AddTodo 
          {...this.state}
          onChange={e => this.onChange(e)}
          add={todoElement => this.add(todoElement)}
        />
        <div>
          <ul>
            {todoListNode}
          </ul>
        </div>
      </div>
    )
  }
}

function App() {
  return(
    <div>
      <Todo />
    </div>
  );
}

export default App;
