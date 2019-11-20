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
	const addProject = () => {
		$('#addProject').addEventListener('click', (e) => {
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
	return {
		addProject
	}


})();


main.addProject()

$('#removeProject').addEventListener('click', (e) => {
	e.preventDefault();
})

const todoObj = (() => {
	const createtodo = () => {
		const title = $('#title').value;
		const des = $('#description').value;
		const dueDate = $('#dueDate').value;
		let priority;
		$("#urgent").checked ? priority = "urgent" : priority = 'normal';
		const todo = todolist.createTodo(title, des, dueDate, priority)
		todolist.lists.push(todo)
		console.log(todo)
	};

	const showTodo = () => {
		const lists = todolist.lists;
		lists.forEach((todo, index) => {
			// console.log(todo.title)
			let tr = document.createElement('tr')
			tr.classList.add('tbody-row')
			tr.setAttribute('data-id', index);

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

			let completed = document.createElement('td');
			let checkbox = document.createElement('input');
			checkbox.classList.add('complete');
			checkbox.type = 'checkbox';
			checkbox.name = 'completed';
			completed.appendChild(checkbox);
			tr.appendChild(completed)

			let action = document.createElement('td');
			action.classList.add("d-flex");
			tr.appendChild(action);
			let edit = document.createElement('button');
			edit.classList.add('edit', 'pl-2', 'pr-2');
			edit.innerHTML = 'Edit';
			let del = document.createElement('button');
			del.innerHTML = 'Del';
			del.classList.add('ml-2', 'del', 'pl-2', 'pr-2');
			action.appendChild(edit);
			action.appendChild(del);

			$('tbody').appendChild(tr)

			checkbox.addEventListener('click', () => {
				checking(checkbox, index)
			});

		});

	}
	const checking = (checkbox, index) => {
		let elements = document.querySelectorAll('.tbody-row');
		checkbox.checked ? elements[index].classList.add('strike') : elements[index].classList.remove('strike');
	}

	const clearTodo = () => {
		const node = $('tbody')
		node.querySelectorAll('*').forEach(n => n.remove());
	}

	const addTodo = () => {
		$('#addTodo').addEventListener('click', (e) => {
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

