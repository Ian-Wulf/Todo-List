// What do i want each task to have?
// At minimum: title, description, dueDate, and priority
// Also have a completed status that can be toggled
export default function Task(title, description, dueDate, priority, completed = false) {
    return {
        title,
        description,
        dueDate, 
        priority,
        toggleComplete() {
            this.completed = !this.completed;
        },
    };
}