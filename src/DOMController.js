const DOMController = (() => {
    const projectArea = document.querySelector('#project-area');

    function init(projects) {
        renderProjects(projects);
        bindProjectListeners();
    }

    function renderProjects(projects) {
        projectArea.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `<h2>${project.title}</h2>
                                     <div class="add-task-container">                                    
                                        <svg class="task-plus" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                        
                                        <button class="task-button" data-id="${project.getID()}">Add task</button>
                                     </div> `;
            projectArea.appendChild(projectCard);

        });
    }

    function bindProjectListeners() {
        document.getElementById('project-area').addEventListener('click', (e) => {
            if(e.target.matches('.task-button')) {
                // get project id
                const projectID = e.target.dataset.id;
                // pass project id to app controller
            }
        });
    }

    return { renderProjects, init };
})();

export default DOMController;