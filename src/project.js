export default function Project() {
    const tasks = [];
    return {
        title, 
        addTask(task) { tasks.push(task); },
        removeTask(index) { tasks.splice(index, 1); },
        getTasks() { return tasks; },
    };
}