export default function ModalController() {
    const dialog = document.getElementById('modal');

    function displayProjectModal(onSubmitCallback) {
        dialog.innerHTML = `
                            <form id="new-project-form">
                                <button type="button" class="close-button">x</button>
                                <h3 id="new-project-header">New Project</h3>
                                <div id="project-title-container">
                                    <label for="project-title" id="project-title-label">Project Title</label>
                                    <input type="text" id="project-title" name="title">
                                </div>
                                <button type="button" class="submit-button" value="submit">Add Project</button>
                            </form>        
                            `;

        dialog.showModal();

        const form = document.getElementById('new-project-form');
        const closebtn = document.querySelector('close-button');

        closebtn.addEventListener('click', () => {
            form.reset();
            dialog.innerHTML = '';
            dialog.close();
        });

        const submitbtn = document.querySelector('submit-button');

        submitbtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            
            const plainData = Object.fromEntries(formData.entries());

            onSubmitCallback(plainData);
            
            form.reset();
            dialog.innerHTML = '';
            dialog.close();
        });
    }

    function displayTaskModal() {
        dialog.innerHTML = `
                            <form id="new-task-form">
                                <button type="button" class="close-button">x</button>
                                <h3 id="new-task-header">New Task</h3>
                                <div class="task-form-row">
                                    <label for="task-title" id="task-title-label">Title:</label>
                                    <input type="text" id="task-title" name="title">
                                </div>
                                <div class="task-form-row">
                                    <label for="task-desc" id="task-desc-label">Description:</label>
                                    <textarea id="task-desc" name="description" maxlength="150" rows="2" cols="23"></textarea>
                                </div>
                                <div class="task-form-row">
                                    <label for="date">Due Date:</label>
                                    <input type="date" id="date" name="date">
                                </div>
                                <div class="task-form-row">
                                    <label for="priority">Priority:</label>
                                    <select name="priority" id="priority">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <button type="button" class="submit-button" value="submit">Add Task</button>
                            </form>
                            `;

        
    }


    return { displayProjectModal }; 
}