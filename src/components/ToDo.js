import React from 'react';


const ToDo = ({todo, remove}) => {
	// single todo 
	return (
		<p className="todos">
			{todo.value}
			<span 
				className="removeBtn"
				onClick={()=> {
					remove(todo.id)}}>
				{todo.text} x
			</span>
		</p>
	);
};


export default ToDo;

/*

The remove property is an event handler that will be called when the list item is clicked. The idea is to delete an item when it is clicked. This will be taken care of in the container component.

The only way the remove property can be passed to it's to the Todo component is via it's parent (not grand-parent). For this sake, in as much as the container component that will own TodoList should handle item removal, we still have to pass down the handler from grand-parent to grand-child through the parent.

This is a common challenge that you will encounter in a nested component when building React applications. If the nesting is going to be deep, it is advised you use container components to split the hierarchy.

*/