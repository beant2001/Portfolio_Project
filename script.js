// Inside your script.js file
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    contactForm.addEventListener('submit', function () {
        if (validateForm()) {
            // Form is valid, perform further actions (e.g., submit data)
            displaySuccessMessage();
        } else {
            displayErrorMessage();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return false;
        }

        // Validate message length (you can customize the length)
        if (message.length < 10 || message.length > 500) {
            return false;
        }

        return true;
    }

    function displaySuccessMessage() {
        alert('Form submitted successfully!');
        }

    function displayErrorMessage() {
        alert('Please fill out all fields correctly.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const projectsSection = document.getElementById('projects');
    const projectContainer = document.getElementById('projectContainer');

    const projectsData = [
        {
            name: "Project 1",
            description: "Description for Project 1.",
            link: "sample_project_1.html",
        },
        {
            name: "Project 2",
            description: "Description for Project 2.",
            link: "sample_project_2.html",
        },
        // Add more projects as needed
    ];

    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project'); // Add a class for styling if needed
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="projectsData[0].link">View Project</a>        `;
        projectContainer.appendChild(projectElement);
    });
});


