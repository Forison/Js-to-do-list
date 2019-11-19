const todolist = (() => {
	const lists = [];
	const createTodo = (title, description, dueDate, priority) => {
		return { title, description, dueDate, priority }
	};
	return { createTodo, lists };
})();

export { todolist as default }