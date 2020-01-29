import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

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
    }

    addNewTodo(newTodoTitle) {
        const newTodo = {
            title: newTodoTitle,
            id: generateIdByTitle(newTodoTitle),
            status: 'TODO'
        };
        this.setState({
            todoList: this.state.map(item => item).unshift(newTodo)
        });
    }

    render() {
        return(
            <Grid container
                justify="center"
            >
                <Grid item
                      xs={6}
                >
                    <Card>
                        Test
                    </Card>   
                    </Grid>
            </Grid>
        );
    }
}

export default MainComponent;