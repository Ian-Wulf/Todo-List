import TodoList from "./todolist.js";
import Project from "./project.js";
import Task from "./task.js";
import DOMController from "./DOMController.js"; 
import ModalController from "./ModalController.js";

export default function AppController() {
    // initialize todolist
    const todoList = TodoList();
    const modal = ModalController();
    const addProjectBtn = document.getElementById('add-project');
    // initialize DOM
    function init() {
        todoList.addProject(Project("Todo"));

        DOMController.init(todoList.getProjects());
        
        addProjectBtn.addEventListener('click', function() {
            modal.displayProjectModal(addProject);
        });

    }

    // add task to project
    function addTask(data) {
         const title = data.title;
         const description = data.description;
         const dueDate = data.dueDate;
         const priority = data.priority;
    }

    // be able to add project to list and render it
    // on DOM
    function addProject(data) {
        const title = data.title;

        todoList.addProject(Project(title));
        // render to DOM
        DOMController.renderProjects(todoList.getProjects());
    }

    return { init, addProject };
}