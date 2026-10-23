
"use strict";

const animalForm = document.querySelector("#animalForm");
const animalName = document.querySelector("#animalName");
const animalSpecies = document.querySelector("#animalSpecies");
const careNote = document.querySelector("#careNote");

const nameError = document.querySelector("#nameError");
const speciesError = document.querySelector("#speciesError");
const noteError = document.querySelector("#noteError");
const formResult = document.querySelector("#formResult");

const savedAnimal = document.querySelector("#savedAnimal");
const loadAnimalButton = document.querySelector("#loadAnimal");
const clearAnimalButton = document.querySelector("#clearAnimal");

const sponsorForm = document.querySelector("#sponsorForm");
const animalType = document.querySelector("#animalType");
const yearsInput = document.querySelector("#years");
const cost = document.querySelector("#cost");
const discountMessage = document.querySelector("#discountMessage");

function showError(field, errorElement, message) {
  errorElement.textContent = message;
  field.classList.toggle("invalid", message !== "");
}

function loadSavedAnimal() {
  const storedAnimal = localStorage.getItem("ws05Animal");

  if (storedAnimal === null) {
    savedAnimal.textContent = "No saved animal yet.";
    return;
  }

  try {
    const animal = JSON.parse(storedAnimal);

    if (
      !animal ||
      typeof animal.name !== "string" ||
      typeof animal.species !== "string" ||
      typeof animal.note !== "string"
    ) {
      savedAnimal.textContent = "The saved animal data is invalid.";
      return;
    }

    savedAnimal.textContent =
      `Name: ${animal.name} | Species: ${animal.species} | Care note: ${animal.note}`;
  } catch {
    savedAnimal.textContent = "The saved animal data could not be read.";
  }
}

animalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = animalName.value.trim();
  const species = animalSpecies.value.trim();
  const note = careNote.value.trim();

  let isValid = true;

  if (name === "") {
    showError(animalName, nameError, "Please enter the animal's name.");
    isValid = false;
  } else {
    showError(animalName, nameError, "");
  }

  if (species === "") {
    showError(animalSpecies, speciesError, "Please enter the species.");
    isValid = false;
  } else {
    showError(animalSpecies, speciesError, "");
  }

  if (note.length < 1 || note.length > 150) {
    showError(
      careNote,
      noteError,
      "The care note must contain 1–150 characters."
    );
    isValid = false;
  } else {
    showError(careNote, noteError, "");
  }

  if (!isValid) {
    formResult.textContent = "Please correct the errors above.";
    return;
  }

  const animal = {
    name: name,
    species: species,
    note: note
  };

  localStorage.setItem("ws05Animal", JSON.stringify(animal));
  sessionStorage.setItem("ws05SessionAnimal", JSON.stringify(animal));

  formResult.textContent = `${name} (${species}) was saved successfully.`;

  loadSavedAnimal();
});

sponsorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const annualFee = Number(animalType.value);
  const yearsText = yearsInput.value.trim();
  const years = Number(yearsText);

  if (
    yearsText === "" ||
    !Number.isInteger(years) ||
    years < 1
  ) {
    cost.textContent = "Please enter a positive whole number of years.";
    discountMessage.textContent = "";
    return;
  }

  let total = annualFee * years;
  const originalTotal = total;
  const messages = [];

  if (years > 2) {
    total *= 0.8;
    messages.push("20% discount applied.");
  }

  if (years >= 5) {
    total -= 5;
    messages.push("An additional €5 discount applied.");
  }

  total = Math.max(0, total);

  cost.textContent = `Total: €${total.toFixed(2)}`;

  if (messages.length > 0) {
    discountMessage.textContent =
      `${messages.join(" ")} Original price: €${originalTotal.toFixed(2)}.`;
  } else {
    discountMessage.textContent = "No discount applied.";
  }
});

loadAnimalButton.addEventListener("click", loadSavedAnimal);

clearAnimalButton.addEventListener("click", function () {
  localStorage.removeItem("ws05Animal");
  loadSavedAnimal();
  formResult.textContent = "Saved animal cleared.";
});

loadSavedAnimal();
