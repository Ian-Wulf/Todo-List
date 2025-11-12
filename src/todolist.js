export default function TodoList() {
    const projects = [];

    return {
        addProject(project) { projects.push(project); },
        removeProject(index) { projects.splice(index, 1); },
        getProjects() { return projects; },
    };
}