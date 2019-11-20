import './style.css';
import todolist from './component/todo';
import project from './component/project';


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const main = (() => {
	const addProject = () => {
		$('#addProject').addEventListener('click', (e) => {
			e.preventDefault();
			const projectName = $('#projectName').value;
			project.createProject(projectName);
			project.projToLocal()
			clearProjects();
			showProject();
		})
	}
	const clearProjects = () => {
		Array.from($$('.projects')).forEach(cell => cell.style.display = 'none')
	}

	const showProject = () => {
		const allPro = project.projectList;
		clearProjects();
		for (let key in allPro){
			const project1 = document.createElement('h5')
			project1.innerHTML = key
			project1.classList.add('projects')
			$('.projectWrapper').appendChild(project1)
			project1.addEventListener('click', (e) =>{
				if(project.currProj == project1.innerHTML){return;}
				project.currProj =  project1.innerHTML
				localStorage.setItem('currProj', project.currProj)
				todoObj.clearDom($('tbody'))
				todoObj.showTodo();
				console.log(project.currProj)
			})
		}	
		localStorage.setItem('proj', JSON.stringify(allPro))
		project.setTodoFromLocal()
	}
	
	return {
		addProject,
		showProject
	}


})();
main.addProject()
main.showProject();

$('#removeProject').addEventListener('click', (e) => {
	e.preventDefault();
})

const todoObj = (() => {

	const clearDom = (node) => {
    while(node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
	
	const createtodo = () => {
		const title = $('#title').value;
		const des = $('#description').value;
		const dueDate = $('#dueDate').value;
		let priority;
		$("#urgent").checked ? priority = "urgent" : priority = 'normal';
		const todo = todolist.createTodo(title, des, dueDate, priority)
		project.projectList[project.currProj].push(todo)
		project.projToLocal();
		
	};

	const showTodo = () => {
		const lists = project.projectList[project.currProj]
		lists.forEach((todo, index) => {
			let tr = document.createElement('tr')
			tr.classList.add('tbody-row')
			tr.setAttribute('data-id', index);

			for(let ele in todo){
				let td = document.createElement('td')
				td.innerHTML = todo[ele]
				tr.appendChild(td)
			}

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
			const edit = document.createElement('button');
			edit.classList.add('edit', 'pl-2', 'pr-2');
			edit.innerHTML = 'Edit';
			const del = document.createElement('button');
			del.innerHTML = 'Del';
			
			del.classList.add('ml-2', 'del', 'pl-2', 'pr-2');
			action.appendChild(edit);
			action.appendChild(del);

			$('tbody').appendChild(tr)
			del.addEventListener('click', (e) => {
				clearDom($('tbody'))
				project.projectList[project.currProj].splice(index, 1)
				showTodo()
			})
			checkbox.addEventListener('click', () => {
				checking(checkbox, index)
			});

		});
		localStorage.setItem('proj', JSON.stringify(project.projectList))
	}
	const checking = (checkbox, index) => {
		let elements = document.querySelectorAll('.tbody-row');
		checkbox.checked ? elements[index].classList.add('strike') : elements[index].classList.remove('strike');
	}

	const addTodo = () => {
		$('#addTodo').addEventListener('click', (e) => {
			e.preventDefault();
			createtodo()
			clearDom($('tbody'))
			showTodo()
		})
	}

	return {
		addTodo,
		showTodo,
		clearDom
	}
})()

// const delTodo = (i) =>{
// 	console.log('me')
// 	// project.projectList[project.currProj].splice(i, 1)
// 	// localStorage.setItem('proj', JSON.stringify(project.projectList))
// 	// todoObj.clearDom($('tbody'));
// 	todoObj.showTodo();
// }



todoObj.addTodo();
todoObj.showTodo();

