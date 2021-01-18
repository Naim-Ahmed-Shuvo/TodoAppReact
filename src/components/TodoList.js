import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Todo from './Todo';
const TodoList = ({inputText,todos,setTodo}) => {
    console.log(todos);
    return(
        <div>
            <h5>Your Todos</h5>
            <ul>
                {todos.map((todo) => {
                   return <Todo text={todo.text} id={todo.id} todos={todos} todo={todo}  setTodo={setTodo}/>
                })}
            </ul>
            {/* <Todo/> */}
        </div>
        
    )
}

export default TodoList;