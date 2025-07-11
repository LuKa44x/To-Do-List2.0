import {getBool} from "./projectsManager";

const todoItem = {
    name: '',
    description: '',
    dueDate: '',
    priority: ''
}

export function addTodo(){
    if(getBool()){
    todoItem.name = prompt('Enter todo name:');
    todoItem.description = prompt('Enter todo description:');
    todoItem.dueDate = prompt('Enter todo due date (YYYY-MM-DD):');
    todoItem.priority = prompt('Enter todo priority (Low, Medium, High):');
    
    console.log(todoItem);
    return todoItem;
    } else return alert("Seleziona il progetto prima.");
}

export function showTodo(){
   
}
