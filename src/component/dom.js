import todolist from './todo';
import project from './project';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const main = () => {
	projectObj();
	todoObj();
};
const projectObj = () => {
	let projectName = $('#projectName');
	let mykey = {};
	$('#addProject').addEventListener('click', () => {
		mykey = project.createProject(projectName.value);
	});
	return mykey;
};
const todoObj = () => {
	let todoTitle = $('#title');
	let todoDescription = $('#description');
	let todoDate = $('#dueDate');
	let todoPriority;
	let myvalue = {};
	$('#urgent').addEventListener('click', (e) => {
		todoPriority = 'urgent'
	});
	$('#normal').addEventListener('click', (e) => {
		todoPriority = 'normal';
	});
	$('#addTodo').addEventListener('click', (e) => {
		e.preventDefault;
		let a = todoTitle.value;
		let b = todoDescription.value;
		let c = todoDate.value;
		myvalue = todolist.createTodo(a, b, c, todoPriority);
	});
	return myvalue;
}
const storeObj = () => {
	
};
document.body.appendChild(main());
export { main as default }


