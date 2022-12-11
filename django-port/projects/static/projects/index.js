
// This is just a front-end redirect until I figure out the backend.
// Trying to make the home page the default. Swap "projects" <--> "home"
document.addEventListener('DOMContentLoaded', function() {
    load_home();
})

function load_home() {
    window.location.replace("http://127.0.0.1:8000/projects/home")
};

// TODO: Write function for single page view detail for each project page
function show_project(project) {
    fetch(`/projects/${project}`)
    .then(response => response.text())
    .then(text => {
        console.log(text);
        document.querySelector('#project_view').innerHTML = text;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button_more').forEach(button => {
        button.onclick = function() {
            show_project(this.dataset.project)
        }
    })
})