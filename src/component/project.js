const project = (() => {
	let projectList = [];
	const createProject = (projectTitle) => {
		return { projectTitle };
	};
	return { 
		createProject,
		projectList
	 }
})();
export { project as default };