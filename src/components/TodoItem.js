import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
			backgroundColor: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted'
		}
	}
	
  render() {
		const {id, title} = this.props.todo;
	  return (
	  	<div style={this.getStyle()}>
				<p>
			<input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> {''}
					{title}
					<button onClick={this.props.delToDo.bind(this, id)} style={btnStyle}>X</button>
				</p>
					
			</div>
	  );
  }
}

TodoItem.propTypes = {
	todo: PropTypes.array.isRequired 
}

const btnStyle = {
	
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
	background: '#ff0000',
	color: '#fff'
}


export default TodoItem;
