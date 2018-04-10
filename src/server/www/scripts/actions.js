export const addTodo = (text) => {
	return Object.assign({}, state, {
		todo: [
			...state.todos,
			{
				text: action.text,
				completed: false
			}
		],
	});
}
