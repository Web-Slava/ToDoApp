import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TodoListContainer from './todo/TodoListContainer';
import AddTodoComponent from './todo/AddTodoComponent';

const generateIdByTitle = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

class MainComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
        this.addNewTodo = this.addNewTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodoById = this.deleteTodoById.bind(this);
    }

    addNewTodo(newTodoTitle) {
        const newTodo = {
            title: newTodoTitle,
            id: generateIdByTitle(newTodoTitle),
            status: 'TODO' // or DONE
        };
        this.setState({ 
            todoList: this.state.todoList.concat(newTodo)
        });
    }

    updateTodo(newData) {
        this.setState(prevState => ({
            todoList: prevState.todoList.map(
                todo => (
                    (todo.id === newData.id)
                        ? ({
                            ...todo,
                            ...newData
                        })
                        : todo
                )
            )
        }));
    }

    deleteTodoById(id) {
        this.setState((prevState) => ({
            todoList: prevState.todoList.filter(
                todo => todo.id !== id
            )
        }));
    }

    render() {
        console.log(this.state.todoList);
        return(
            <Grid container
                justify="center"
            >
                <Grid item
                      xs={6}
                >
                    <Card classes={{
                        root: 'cardStyle'
                    }}
                    
                    >
                        <AddTodoComponent addNewTodo={this.addNewTodo} />
                        <TodoListContainer todoList={this.state.todoList} 
                                           updateTodo={this.updateTodo}
                                           deleteTodoById={this.deleteTodoById}
                        />
                    </Card>   
                    </Grid>
            </Grid>
        );
    }
}

export default MainComponent;