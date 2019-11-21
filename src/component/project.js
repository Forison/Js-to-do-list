const project = (() => {
	// eslint-disable-next-line no-undef
	const stored = JSON.parse(localStorage.getItem("proj")) || null; 
	const projectList = stored || { 'Default': [] };
	const currProj = localStorage.getItem('currProj') || 'Default';
	const currList = projectList[currProj];

	const projToLocal = () => {
		localStorage.setItem('proj', JSON.stringify(projectList));
	};
	const getProjFromLocal = () => {
		// eslint-disable-next-line no-undef 
		JSON.parse(localStorage.getItem('proj')) || null;
	};
	const setTodoFromLocal = () => {
		// eslint-disable-next-line no-undef
		localStorage.setItem('currProj', currProj) || null;
	};
	const createProject = (projectTitle) => {
		projectList[projectTitle] = [];
	};
	return {
		createProject,
		projectList,
		projToLocal,
		getProjFromLocal,
		currList,
		setTodoFromLocal,
		currProj
	};
})();
export { project as default };