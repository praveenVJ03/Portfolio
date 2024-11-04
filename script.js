AOS.init();

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function hamburg() {
    document.querySelector('.dropdown').classList.toggle('active');
}

function cancel() {
    document.querySelector('.dropdown').classList.remove('active');
}

const skills = [
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Engineer",
    "Business Intelligence Analyst",
    "Data Visualization Specialist",
    "Big Data Engineer",
    "Artificial Intelligence Engineer"
];

let i = 0;
let typewriterText = document.querySelector('.typewriter-text');

function type() {
    if (i < skills.length) {
        typewriterText.textContent = skills[i];
        i++;
        setTimeout(type, 2000);
    } else {
        i = 0; // Reset for looping
        setTimeout(type, 2000);
    }
}

type();
