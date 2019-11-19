import './style.css';
import todolist from './component/todo';
import project from './component/project';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const main = (() => {
	const project1 = () => {
		const projectName = $('#projectName').value;
		let proj = project.createProject(projectName);
		project.projectList.push(proj)
	};
	const addProject = () =>{
		$('#addProject').addEventListener('click', (e) =>{
			e.preventDefault();
			project1();
			clearProjects()
			showProject();
		})
	}
	const clearProjects = () => {
		Array.from($$('.projects')).forEach(cell => cell.style.display = 'none')
	}
	const showProject = () => {
		const allProject = project.projectList;
		console.log(allProject)
		allProject.forEach(proj => {
			const project = document.createElement('h5')
			project.innerHTML = proj.projectTitle
			project.classList.add('projects')
			$('.projectWrapper').appendChild(project)
		})
	}
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
		addProject
	}


})();


main.addProject()

$('#removeProject').addEventListener('click', (e)=>{
	e.preventDefault();
})

const todoObj = (() => {
	const createtodo = () => {
		const title = $('#title').value;
		const des = $('#description').value;
		const dueDate = $('#dueDate').value;
		let priority;
		$('#urgent').addEventListener('click', (e) => {
			priority = 'urgent'
		});
		$('#normal').addEventListener('click', (e) => {
			priority = 'normal';
		});
		const todo = todolist.createTodo(title, des, dueDate, priority)
		todolist.lists.push(todo)
		console.log(todolist.lists)
	};
	
	const showTodo = () => {
		const lists = todolist.lists;
		lists.forEach(todo => {
			console.log(todo.title)
			let tr = document.createElement('tr')
			tr.classList.add('tbody-row')
			
			let title = document.createElement('td')
			title.innerHTML = todo.title;
			tr.appendChild(title)
			
			let des = document.createElement('td')
			des.innerHTML = todo.description;
			tr.appendChild(des)
			
			let dueD = document.createElement('td')
			dueD.innerHTML = todo.dueDate;
			tr.appendChild(dueD)

			let prio = document.createElement('td')
			prio.innerHTML = todo.priority;
			tr.appendChild(prio)

			$('tbody').appendChild(tr)
		})
		
	}
		const clearTodo = () => {
		const node = $('tbody')
		node.querySelectorAll('*').forEach(n => n.remove());
	}
	
	const addTodo = () =>{
		$('#addTodo').addEventListener('click', (e) =>{
			e.preventDefault();
			createtodo()
			clearTodo()
			showTodo()

		})
	}
	
	
	return {
		addTodo
	}
})()

todoObj.addTodo();



