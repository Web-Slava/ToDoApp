import React from 'react';
import back from './../../assets/back.jpg';

function TodoListContainer(props){
    const {todoList} = props; // array of todo's
    return(
        <div style={{
                position: 'relative',
                background: `url(${back}) no-repeat`,
                height: '100vh',
                width: '100%'
            }}
        >
            {
                !!todoList.length
                && (
                    todoList.map(todo => (
                        <div key={todo.id}>{todo.title}</div>
                        // border, background, shadow, padding, flex, margin
                    ))
                )   
            }
        </div>
    );
}

export default TodoListContainer;