import { addProject, addTodoToProject , selectProject , deleteProject} from "./projectsManager";
import { addTodo } from "./todoManager";

export function createLayout() {
    const body = document.querySelector('body');

//     const title = document.createElement('h1');
//     title.textContent = 'To Do List';
//     body.appendChild(title);

//     const container = document.createElement('div');
//     container.classList.add('container');
//     body.appendChild(container);

//     const mainContainer = document.createElement('div');
//     mainContainer.classList.add('main-container');
//     container.appendChild(mainContainer);

//     const projectsContainer = document.createElement('div');
//     projectsContainer.classList.add('projects-container');
//     mainContainer.appendChild(projectsContainer);

    const addProjectsBtn = document.createElement('button');
    addProjectsBtn.classList.add('addProjectBtn');
    addProjectsBtn.textContent = 'Add Projects';
    // projectsContainer.appendChild(addProjectsBtn);
    let selectedProjectName; //il ritorno di selectProject
    addProjectsBtn.addEventListener('click', () =>{
        const projectDiv = document.createElement("h2");
        projectDiv.classList.add("projectDiv");
    projectDiv.textContent = addProject();
    body.appendChild(projectDiv);
    projectDiv.addEventListener('click', () =>{
        selectedProjectName = selectProject(projectDiv);
        
    })
    createCheckbox();
    createDelete(projectDiv.textContent);
});

//     const todoContainer = document.createElement('div');
//     todoContainer.classList.add('todo-container');
//     mainContainer.appendChild(todoContainer);

    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('addTodoBtn');
    addTodoBtn.textContent = 'Add Todo';
    // todoContainer.appendChild(addTodoBtn);
    addTodoBtn.addEventListener('click', () => {
        const todoItem = addTodo();
        addTodoToProject(todoItem, selectedProjectName);
    }
    );
    
    body.appendChild(addProjectsBtn);
    body.appendChild(addTodoBtn);


    function createDelete(idName){
        const deleteButton= document.createElement("button");
    deleteButton.classList.add = "deleteBtn";
    deleteButton.textContent = "Delete";
    deleteButton.id = idName;
    body.appendChild(deleteButton);
    deleteButton.addEventListener('click', ()=>{
        deleteProject(idName);
    })
    }

//     const projectList = document.createElement('ul');
//     projectList.classList.add('projectList');
//     projectsContainer.appendChild(projectList);

//     const todoList = document.createElement('ul');
//     todoList.classList.add('todoList');
//     todoContainer.appendChild(todoList);
function createCheckbox(){
    const checkComplete = document.createElement("input");
    checkComplete.type = "checkbox";
    checkComplete.id = "myCheckbox";
    checkComplete.name = "myCheckbox";
    body.appendChild(checkComplete);
    
}
}

