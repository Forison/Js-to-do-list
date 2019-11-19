import './style.css';
import todolist from './component/todo';
import project from './component/project';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const main = (() => {
	const project1 = () => {
		const projectName = $('#projectName').value;
		const project = document.createElement('h4')
		$('.projectWrapper').appendChild(project)
		project.style.color = 'black'
		project.innerText = projectName;
		console.log(project)
		// const mykey = project.createProject(projectName)
		// return myKey;
	};
	// const todo = () => {
	// 	const title = $('#title').value
	// 	const description = $('#description').value
	// 	const dueDate = ('#dueDate').value
	// 	let todoPriority;
	// 	$('#urgent').addEventListener('click', (e) => {
	// 		todoPriority = 'urgent'
	// 	});
	// 	$('#normal').addEventListener('click', (e) => {
	// 		todoPriority = 'normal';
	// 	});
		
		
	// }
	return{
		project1
	}


})();


$('#addProject').addEventListener('click', e =>{
	e.preventDefault;
	main.project1()
})

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



