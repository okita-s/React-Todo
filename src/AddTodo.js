import React from 'react';

class AddTodo extends React.Component {
    onChange(e) {
      this.props.onChange({
        value: e.target.value,
      })
    }
  
    add() {
        if(this.props.value.length>0){
            const todoElement = {
                content: this.props.value,
                id: this.props.todoList.length + 1,
            }
            this.props.add(todoElement)
        }
    }
  
    render() {
      return(
        <div>
          <input
            type="text"
            value={this.props.value}
            onChange={e => this.onChange(e)}
          />
          <button onClick={() => this.add()}>追加</button>
        </div>
      )
    }
  }

  export default AddTodo;
  