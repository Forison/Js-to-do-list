import './style.css';
import todolist from './component/todo';
import project from './component/project';


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const changeActive = () => {
	Array.from($$('.projects')).forEach((cell) => {
		if (project.currProj !== cell.innerHTML) {
			cell.classList.remove('active');
		}
	});
};

const main = (() => {
	const addProject = () => {
		$('#addProject').addEventListener('click', (e) => {
			e.preventDefault();
			const projectName = $('#projectName').value;
			if (projectName === '') {
				alert('Project name can not be blank ');
			} else {
				project.createProject(projectName);
				project.projToLocal();
				
				clearProjects();
				showProject();
			}
		});
	};
	const clearProjects = () => {
		Array.from($$('.projects')).forEach(cell => cell.style.display = 'none');
	};
	const delProject = () => {
		$('#removeProject').addEventListener('click', () => {
			if (project.currProj !== 'Default') {
				delete project.projectList[project.currProj];
				
				showProject();
				
				window.location.reload();
			}
		});
	};
	const showProject = () => {
		const allPro = project.projectList;
		clearProjects();
		 
		for (const key in allPro) {
			
			const project1 = document.createElement('h5');
			project1.innerHTML = key;
			project1.classList.add('projects');
			$('.projectWrapper').appendChild(project1);
			
			project1.addEventListener('click', (e) => {
				e.preventDefault();
				if (project.currProj === project1.innerHTML) { return; }
				project.currProj = project1.innerHTML;
				localStorage.setItem('currProj', project.currProj);
				
				todoObj.clearDom($('tbody')); 
				todoObj.showTodo();
				project1.classList.add('active');
				
				changeActive();
				
				delProject();
			});
		}
		
		localStorage.setItem('proj', JSON.stringify(allPro));
		project.setTodoFromLocal();
	}

	return {
		addProject,
		showProject
	};
})();
main.addProject();
main.showProject();

$('#removeProject').addEventListener('click', (e) => {
	e.preventDefault();
});

const todoObj = (() => {
	const clearDom = (node) => {
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
	};

	const createtodo = () => {
		const title = $('#title').value;
		const des = $('#description').value;
		const dueDate = $('#dueDate').value;
		let priority;/*eslint-disable-line no-unused-vars */
		$('#urgent').checked ? priority = 'urgent' : priority = 'normal';/*eslint-disable-line no-unused-vars */
		const todo = todolist.createTodo(title, des, dueDate, priority);
		project.projectList[project.currProj].push(todo);
		project.projToLocal();
	};

	const checking = (checkbox, index) => {
		const elements = document.querySelectorAll('.tbody-row');
		checkbox.checked ? elements[index].classList.add('strike') : elements[index].classList.remove('strike');
	};
	const showTodo = () => {
		const lists = project.projectList[project.currProj];
		lists.forEach((todo, index) => {
			const tr = document.createElement('tr');
			tr.classList.add('tbody-row');
			tr.setAttribute('data-id', index);
			for (let ele in todo) {
				const td = document.createElement('td');
				td.innerHTML = todo[ele];
				tr.appendChild(td);
			}
			const completed = document.createElement('td');
			const checkbox = document.createElement('input');
			checkbox.classList.add('complete');
			checkbox.type = 'checkbox';
			checkbox.name = 'completed';
			completed.appendChild(checkbox);
			tr.appendChild(completed);

			const action = document.createElement('td');
			action.classList.add('d-flex');
			tr.appendChild(action);
			const edit = document.createElement('button');
			edit.classList.add('edit', 'pl-2', 'pr-2');
			edit.innerHTML = 'Edit';
			edit.addEventListener('click', (e) => {
				e.preventDefault();
				$('.edit-todo').style.display = 'block';
				$('aside').style.opacity = 0.1;
				$('aside').style.opacity = 0.1;
				$('.table-responsive').style.opacity = 0.1;
				$('.todo').style.opacity = 0.1;
				$('h1').style.opacity = 0.1;
				$('.main-T').style.display = 'none';
				editTodo(index);

			});
			const del = document.createElement('button');
			del.innerHTML = 'Del';

			del.classList.add('ml-2', 'del', 'pl-2', 'pr-2');
			action.appendChild(edit);
			action.appendChild(del);

			$('tbody').appendChild(tr);
			del.addEventListener('click', () => {
				clearDom($('tbody'));
				project.projectList[project.currProj].splice(index, 1);
				showTodo();
			});
			checkbox.addEventListener('click', () => {
				checking(checkbox, index);
			});
		});

		localStorage.setItem('proj', JSON.stringify(project.projectList));
	};

	const addTodo = () => {
		$('#addTodo').addEventListener('click', (e) => {
			e.preventDefault();
			createtodo();
			clearDom($('tbody'));
			showTodo();
		});
	};

	return {
		addTodo,
		showTodo,
		clearDom
	};
})();

todoObj.addTodo();
todoObj.showTodo();

const editTodo = (index) => {
	const allproj = project.projectList[project.currProj];
	const title = $('#edit-title');
	const des = $('#edit-description');
	const dueDate = $('#edit-dueDate');
	let priority; /* eslint-disable-line no-unused-vars*/
	allproj.forEach((todo, i) => {
		if (i === index) {
			title.value = todo.title;
			des.value = todo.description;
			dueDate.value = todo.dueDate;
			if (todo.priority === 'urgent') {
				$('#edit-urgent').checked = true;
				priority = 'urgent';/* eslint-disable-line no-unused-vars*/
			} else {
				$('#edit-normal').checked = true;
				priority = 'normal';/* eslint-disable-line no-unused-vars*/
			}
		}
	});

	$('#update').addEventListener('click', (e) => {
		e.preventDefault();
		const t = title.value;
		const d = des.value;
		const due = dueDate.value;
		let prio;
		$('#edit-urgent').checked ? prio = 'urgent' : prio = 'normal';

		project.projectList[project.currProj][index] = { t, d, due, prio };

		project.projToLocal();
		window.location.reload();/* eslint-disable-line no-undef*/
	});
};