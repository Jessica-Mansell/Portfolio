
// This is just a front-end redirect until I figure out the backend.
// Trying to make the home page the default. Swap "projects" <--> "home"
document.addEventListener('DOMContentLoaded', function() {
    load_home();
})

function load_home() {
    window.location.replace("http://127.0.0.1:8000/projects/home")
};

// TODO: Write function for single page view detail for each project page
// UPDATE: The function is written however, I need to wait until the project_view is
// implemented on the all_projects.html page instead of the detail.html
// function show_project(project) {
//     fetch(`/projects/${project}`)
//     .then(response => response.text())
//     .then(text => {
//         console.log(text);
//         document.querySelector('#project_view').innerHTML = text;
//     });
// }
// TODO: Button changes will require the querySelector to switch which button
// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('button_more').forEach(button => {
//         button.onclick = function() {
//             show_project(this.dataset.project)
//         }
//     })
// })

// ***Note: Refer to load_mailbox function in mail app for idea on how to implement all_projects view
// ***Note: To replace detail.html webpage, refer to the view_email function in mail app
