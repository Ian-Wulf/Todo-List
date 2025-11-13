const DOMController = (() => {
    const projectArea = document.querySelector('#projects');

    function renderProjects(projects) {
        // projectArea.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.textContent = project.title;
            projectArea.appendChild(projectCard);
        });
    }

    return { renderProjects };
})();

export default DOMController;