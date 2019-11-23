const todolist = (() => {
	const lists = [];
	// eslint-disable-next-line no-undef
	const createTodo = (title, description, dueDate, priority) => {

		return { title, description, dueDate, priority };
		
	};
	return { createTodo, lists };
})();
export { todolist as default };