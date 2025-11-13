export default function Project(title) {
    const tasks = [];
    const id = crypto.randomUUID();
    return {
        title, 
        addTask(task) { tasks.push(task); },
        removeTask(index) { tasks.splice(index, 1); },
        getTasks() { return tasks; },
        getID() {return id; },
    };
}