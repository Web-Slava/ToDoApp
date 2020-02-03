import React from 'react';
//import back from './../../assets/back.jpg';
import { Grid } from '@material-ui/core';

function TodoListContainer(props){
    const {todoList} = props; // array of todo's
    return(
        <Grid container
              classes = {{
                  root: 'todoListContainer'
              }}
        >
            {
                !!todoList.length
                && (
                    todoList.map(todo => (
                        <div key={todo.id} className="todo">{todo.title}</div>
                        // border, background, shadow, padding, flex, margin
                    ))
                )   
            }
        </Grid>
    );
}

export default TodoListContainer;