import TodoList from "./todolist.js";
import Project from "./project.js";

export default function AppController() {
    // initialize todolist
    const todoList = TodoList();

    // initialize DOM
    function init() {

    }

    // be able to add project to list and render it
    // on DOM
    function addProject(name) {
        todoList.addProject(Project(name));
        // render to DOM

    }

    return { init, addProject };
}