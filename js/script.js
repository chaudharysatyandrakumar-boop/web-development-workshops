const darkModeButton = document.getElementById("dark-mode-button");
const factButton = document.getElementById("fact-button");
const catFact = document.getElementById("cat-fact");

darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "☀️ Light Mode";
    } else {
        darkModeButton.textContent = "🌙 Dark Mode";
    }
});

const catFacts = [
    "Cats spend a large part of their lives sleeping.",
    "Cats use their whiskers to help sense their surroundings.",
    "A group of cats is sometimes called a clowder.",
    "Cats can jump several times their own body length.",
    "Cats have an excellent sense of hearing.",
    "Many cats use their tails to help with balance.",
    "Cats can rotate their ears to locate sounds."
];

factButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * catFacts.length);

    catFact.textContent = catFacts[randomIndex];
});