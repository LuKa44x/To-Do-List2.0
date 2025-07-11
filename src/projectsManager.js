

let selectBool = false;
const projects = [];
const project = {
    name: '',
    todo: []
}

export function addProject(){

    
        let projectName 
        while (projectName===undefined|| projectName===null) projectName= prompt('Enter project name:');
        project.name=projectName;
        projects.push({ ...project });
        console.log(projectName + "==Nome progetto");
        console.log(projects);
        return projectName;
        
}

export function selectProject(nProject) {
    setBoolTrue();
    
    const selectedProject= projects.find(e => e.name === nProject.textContent); 
            console.log(selectedProject);         //selezione del corretto project in projects
        console.log("Progetto "+ selectedProject.name + " selezionato."); 
        console.log(projects);
        return selectedProject.name;
        
        
 
    
    
}

export function addTodoToProject(todoItem, selectedProjectName) {
    projects.forEach(e => {
       
        if (e.name === selectedProjectName) {
        e.todo=todoItem; 
        }
    })
    
}

export function deleteProject(idName){
    let index;
   
        
            index=projects.findIndex(e => e.name ===idName);
            projects.splice(index,1);
     
}

export function setBoolTrue() {
    selectBool = true;
}

export function getBool(){
    return selectBool;
}