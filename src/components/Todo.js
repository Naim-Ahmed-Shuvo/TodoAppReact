import React from 'react';
import  './cm.css';
const Todo = ({text,todos,todo, id, setTodo}) => {
    const deleteTodo = () => {
        setTodo(todos.filter((item) => {
            return item.id !== id
        }))
    }

    const checkTodo = () => {
        setTodo(todos.map((item) => {
            if(item.id === id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }

            return item;
        }))
    }
    
        return (
            <div>
                <div>
                    <li className={`${todo.completed?"completed":""}`}>{text}</li>
                    <button onClick={deleteTodo}>Delete</button>
                    <button onClick={checkTodo} type="checked">Check</button>
                </div>
            </div>
        );
    
}

export default Todo;