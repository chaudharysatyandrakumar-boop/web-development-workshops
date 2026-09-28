// ==========================================
// Exercise 1: Basic Click Events
// ==========================================

function showTable() {

    const animal1 = "Tiger";
    const habitat1 = "Forest";
    const diet1 = "Carnivore";

    const animal2 = "Elephant";
    const habitat2 = "Savanna";
    const diet2 = "Herbivore";

    const table = `
        <table>
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>${animal1}</td>
                    <td>${habitat1}</td>
                    <td>${diet1}</td>
                </tr>

                <tr>
                    <td>${animal2}</td>
                    <td>${habitat2}</td>
                    <td>${diet2}</td>
                </tr>
            </tbody>
        </table>
    `;

    const tableContainer =
        document.querySelector("#tableContainer");

    tableContainer.innerHTML = table;
}


// ==========================================
// Exercise 2: Event Listeners
// ==========================================

// Select the Exercise 2 heading

const exercise2Heading =
    document.querySelector("h2:nth-of-type(2)");


// Add mouseover event

exercise2Heading.addEventListener(
    "mouseover",
    function () {

        console.log(
            "Stepped over me with a mouse!"
        );

    }
);


// Select the Exercise 1 heading

const exercise1Heading =
    document.querySelector("h2");


// Add click event

exercise1Heading.addEventListener(
    "click",
    function () {

        exercise1Heading.style.color = "red";

        exercise1Heading.innerHTML =
            "Bye bye mouse!";

    }
);


// ==========================================
// Exercise 3: Input Events
// ==========================================

const feedback =
    document.querySelector("#feedback");

const status =
    document.querySelector("#status");

const charcount =
    document.querySelector("#charcount");

const preview =
    document.querySelector("#preview");


// Focus event

feedback.addEventListener(
    "focus",
    function () {

        status.innerHTML =
            "You are writing feedback.";

        feedback.style.backgroundColor =
            "#f0f8ff";

    }
);


// Blur event

feedback.addEventListener(
    "blur",
    function () {

        status.innerHTML = "";

        feedback.style.backgroundColor = "";

    }
);


// Input event

feedback.addEventListener(
    "input",
    function () {

        const length =
            feedback.value.length;

        charcount.innerHTML =
            `${length}/200`;

        if (length === 0) {

            preview.innerHTML =
                "(The preview will appear here)";

        } else {

            preview.innerHTML =
                feedback.value;

        }

    }
);


// ==========================================
// Exercise 4: Form Submission
// ==========================================

const feedbackForm =
    document.querySelector("#feedbackForm");


feedbackForm.addEventListener(
    "submit",
    function (event) {

        // Stop the form from refreshing the page

        event.preventDefault();


        const text =
            feedback.value.trim();

        const length =
            text.length;


        // Check the length

        if (length < 10 || length > 200) {

            status.innerHTML =
                "Feedback must contain between 10 and 200 characters.";

            status.style.color = "red";

            return;
        }


        // Valid feedback

        status.innerHTML =
            "Thank you for your feedback!";

        status.style.color = "green";


        // Clear the form

        feedback.value = "";

        charcount.innerHTML =
            "0/200";

        preview.innerHTML =
            "(The preview will appear here)";

    }
);


// ==========================================
// Exercise 5: Keyboard Events
// ==========================================

const keybox =
    document.querySelector("#keybox");

const keyinfo =
    document.querySelector("#keyinfo");


let keyPressCount = 0;


document.addEventListener(
    "keydown",
    function (event) {

        // Print the event to the console

        console.log(event);


        // Increase counter

        keyPressCount++;


        // Show key and code

        keyinfo.innerHTML = `
            Key: ${event.key}<br>
            Code: ${event.code}<br>
            Key presses: ${keyPressCount}
        `;


        // Show pressed key

        keybox.innerHTML =
            event.key;

        keybox.style.fontSize =
            "2em";


        // Bonus: show modifier keys

        keyinfo.innerHTML += `
            <br>
            Shift: ${event.shiftKey}
            <br>
            Ctrl: ${event.ctrlKey}
            <br>
            Alt: ${event.altKey}
        `;

    }
);


// ==========================================
// Bonus Exercise: Geolocation
// ==========================================

const locationBtn =
    document.querySelector("#locationBtn");

const locationStatus =
    document.querySelector("#locationStatus");


locationBtn.addEventListener(
    "click",
    function () {

        // Check whether geolocation is available

        if (!navigator.geolocation) {

            locationStatus.innerHTML =
                "Geolocation is not supported by your browser.";

            return;
        }


        locationStatus.innerHTML =
            "Finding your location...";


        // Request the user's location

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const lat =
                    position.coords.latitude;

                const lon =
                    position.coords.longitude;


                locationStatus.innerHTML = `
                    Latitude: ${lat}<br>
                    Longitude: ${lon}<br><br>

                    <a
                        href="https://www.google.com/maps?q=${lat},${lon}"
                        target="_blank"
                    >
                        Open my location in Google Maps
                    </a>
                `;

            },


            function (error) {

                locationStatus.innerHTML =
                    "Could not get your location: "
                    + error.message;

            }

        );

    }
);