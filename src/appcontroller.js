import TodoList from "./todolist.js";
import Project from "./project.js";
import Task from "./task.js";
import DOMController from "./DOMController.js"; 

export default function AppController() {
    // initialize todolist
    const todoList = TodoList();
    const addProjectBtn = document.getElementById('add-project');
    // initialize DOM
    function init() {
        todoList.addProject(Project("Todo"));

        DOMController.renderProjects(todoList.getProjects());
        
        addProjectBtn.addEventListener('click', function() {
            addProject("Essay");
        });
    }

    // add task to project
    function addTask() {
         
    }

    // be able to add project to list and render it
    // on DOM
    function addProject(name) {
        todoList.addProject(Project(name));
        // render to DOM
        DOMController.renderProjects(todoList.getProjects());
    }

    return { init, addProject };
}