const project = (() => {
	const stored = JSON.parse(localStorage.getItem("proj")) || null;
	let projectList = stored || { 'Default': [] };
	let currProj = localStorage.getItem("currProj") || "Default";
	let currList = projectList[currProj];

	const projToLocal = () => {
		localStorage.setItem('proj', JSON.stringify(projectList));
	}
	const getProjFromLocal = () => {
		JSON.parse(localStorage.getItem('proj')) || null;
	}
	const setTodoFromLocal = () => {
		localStorage.setItem('currProj', currProj) || null;
	}

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

