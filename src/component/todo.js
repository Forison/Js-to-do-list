const todolist = (() => {
	const createTodo = (title, description, dueDate, priority) => {
		return { title, description, dueDate, priority }
	};
	return { createTodo };
})();

export { todolist as default }