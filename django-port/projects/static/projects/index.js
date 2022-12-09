
// This is just a front-end redirect until I figure out the backend.
// Trying to make the home page the default. Swap "projects" <--> "home"
document.addEventListener('DOMContentLoaded', function() {
    load_home();
})

function load_home() {
    window.location.replace("http://127.0.0.1:8000/projects/home")
};