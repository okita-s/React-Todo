import React from "react";

// const TodoElement = (props) =>{
//     return(
//        // thisがあるとerrorになる。関数コンポーネントはthisがいらない。というかそういう概念ないはず。 
//     //   <li>{this.props.content}</li>
//       <li>{props.content}</li>
//     )
// }


class TodoElement extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(){
        console.log('onDelete_e-id:'+this.props.element.id)
        let id=this.props.element.id
        console.log('onDelete_id:'+id)
        this.props.onDelete(id)
    }

    render() {
      return(
        <li>
          <span>{this.props.element.content}</span>
          <button onClick={this.onDelete}>削除</button>
        </li>
      )
    }
  }

export default TodoElement;
