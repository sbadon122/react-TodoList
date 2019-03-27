import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/page/About';
import uuid from 'uuid'
import './App.css';

class App extends Component {
	state = {
		todos : [
			{
				id : uuid.v4(),
				title: 'Take out the trash',
				completed: false
			},
			{
				id : uuid.v4(),
				title: 'Make Dinner',
				completed: false
			},
			{
				id : uuid.v4(),
				title: 'Do homework',
				completed: false
			}
		]
	}
	
	//Toggle complete
	markComplete  = (id) => {
		this.setState({ todos: this.state.todos.map( todo => {
			if(todo.id === id){
				todo.completed = !todo.completed;
			}
			return todo;
		}) });
	} 
	
	delToDo = (id) => {
		this.setState({todos: [...this.state.todos.filter(todo  => todo.id !== id)]})
	}
	
	addToDo = (title) => {
		const newToDo = {
			id: uuid.v4(),
			title: title,
			completed: false
		}
		this.setState({todos: [...this.state.todos, newToDo]})
	}
	
	//delete
  render() {
    return (
			<Router>
      	<div className="App">
					<div className="container">
						<Header />
						<Route exact path="/" render={prop => (
							<React.Fragment>
								<AddToDo addToDo={this.addToDo} />
								<Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo }/>
							</React.Fragment>
						) } />
						<Route path="/about" component={About} />
					</div>
      	</div>
			</Router>
    );
  }
}

export default App;
