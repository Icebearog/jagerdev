document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        setTimeout(() => {
            requestAnimationFrame(() => {
                project.classList.add('visible');
            });
        }, index * 500);
    });
});
