
const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    if (animalTable.style.display === "none") {
        animalTable.style.display = "table";
    } else {
        animalTable.style.display = "none";
    }
});

const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Updated heading!";
});

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Elephants are intelligent and social animals.";
});

animalText.textContent += " They live in herds and care for their young.";

const changeBackgroundButton = document.querySelector("#changeBackgroundButton");

changeBackgroundButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

const animalContent = document.querySelector("#animalContent");

const animals = {
    elephant: {
        name: "Elephant",
        image: "images/elephant.png",
        description: "Elephants are the world's largest land animals."
    },
    tiger: {
        name: "Tiger",
        image: "images/tiger.png",
        description: "Tigers are powerful cats with distinctive striped coats."
    },
    penguin: {
        name: "Penguin",
        image: "images/penguin.png",
        description: "Penguins are flightless birds that are excellent swimmers."
    },
    panda: {
        name: "Panda",
        image: "images/panda.png",
        description: "Pandas are bears that mainly eat bamboo."
    }
};

const animalKeys = Object.keys(animals);
const randomAnimalKey =
    animalKeys[Math.floor(Math.random() * animalKeys.length)];

const animalOfTheDay = animals[randomAnimalKey];

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");

const animalDayDescription = document.createElement("p");
animalDayDescription.textContent = animalOfTheDay.description;

const animalDayImage = document.createElement("img");
animalDayImage.src = animalOfTheDay.image;
animalDayImage.alt = animalOfTheDay.name;

animalContent.append(
    animalHeading,
    animalDayDescription,
    animalDayImage
);

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animals[animalSelect.value];

    animalName.textContent = selectedAnimal.name;
    animalImage.src = selectedAnimal.image;
    animalImage.alt = selectedAnimal.name;
    animalDescription.textContent = selectedAnimal.description;
    animalImage.classList.remove("image-fade");
});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = observationAnimal.value.trim();
    const location = observationLocation.value.trim();
    const date = observationDate.value;

    if (animal === "" || location === "" || date === "") {
        alert("Please fill in all fields.");
        return;
    }

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animal;

    const locationCell = document.createElement("td");
    locationCell.textContent = location;

    const dateCell = document.createElement("td");
    dateCell.textContent = date;

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function () {
        newRow.remove();
    });

    removeCell.append(removeButton);

    newRow.append(
        animalCell,
        locationCell,
        dateCell,
        removeCell
    );

    observationTableBody.append(newRow);

    animalForm.reset();
});

const moveAnimalButton = document.querySelector("#moveAnimalButton");
const fadeAnimalButton = document.querySelector("#fadeAnimalButton");
const removeAnimalButton = document.querySelector("#removeAnimalButton");

moveAnimalButton.addEventListener("click", function () {
    animalImage.classList.remove("image-move");
    void animalImage.offsetWidth;
    animalImage.classList.add("image-move");
});

fadeAnimalButton.addEventListener("click", function () {
    animalImage.classList.add("image-fade");
});

removeAnimalButton.addEventListener("click", function () {
    animalImage.remove();
});

const listItems = document.querySelectorAll("li");

listItems.forEach(function (item) {
    item.classList.add("list-item");
});

