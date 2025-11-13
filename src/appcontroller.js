import TodoList from "./todolist.js";
import Project from "./project.js";
import Task from "./task.js";

export default function AppController() {
    // initialize todolist
    const todoList = TodoList();

    // initialize DOM
    function init() {

    }

    // add task to project
    function addTask(name, description, dueDate, priority) {
         
    }

    // be able to add project to list and render it
    // on DOM
    function addProject(name) {
        todoList.addProject(Project(name));
        // render to DOM

    }

    return { init, addProject };
}