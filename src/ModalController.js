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
    return { displayProjectModal }; 
}