import React from 'react';
//import back from './../../assets/back.jpg';
import { Grid } from '@material-ui/core';
import TodoComponent from './TodoComponent'

function TodoListContainer(props){
    const {todoList, updateTodo, deleteTodoById, onOpenModal} = props; // array of todo's
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
                                       onOpenModal={onOpenModal}
                        />
                    ))
                )   
            }
        </Grid>
    );
}

export default TodoListContainer;