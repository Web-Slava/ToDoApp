import React from 'react';
//import back from './../../assets/back.jpg';
import { Grid } from '@material-ui/core';
import TodoComponent from './TodoComponent'

function TodoListContainer(props){
    const {todoList, updateTodo, deleteTodoById} = props; // array of todo's
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
                        <TodoComponent key={todo.id}
                                       todo={todo}
                                       updateTodo={updateTodo}
                                       deleteTodoById={deleteTodoById}
                        />
                    ))
                )   
            }
        </Grid>
    );
}

export default TodoListContainer;