// ===============================
// TEACHERS' DAY WEBSITE
// ===============================


// Get sections
const welcomeSection = document.getElementById("welcome-section");
const challengeSection = document.getElementById("challenge-section");
const finalSection = document.getElementById("final-section");


// Get buttons
const startButton = document.getElementById("startButton");
const finalButton = document.getElementById("finalButton");


// Get challenges
const challengeOne = document.getElementById("challenge-one");
const challengeTwo = document.getElementById("challenge-two");
const challengeThree = document.getElementById("challenge-three");


// Get feedback areas
const feedbackOne = document.getElementById("feedback-one");
const feedbackTwo = document.getElementById("feedback-two");
const feedbackThree = document.getElementById("feedback-three");


// ===============================
// START SURPRISE
// ===============================

startButton.addEventListener("click", function () {

    welcomeSection.classList.add("hidden");

    challengeSection.classList.remove("hidden");

    challengeSection.scrollIntoView({
        behavior: "smooth"
    });

});


// ===============================
// CHALLENGE 1
// ===============================

const challengeOneOptions =
    challengeOne.querySelectorAll(".option-button");

challengeOneOptions.forEach(function (button) {

    button.addEventListener("click", function () {

        const answer = button.dataset.answer;

        if (answer === "D") {

            feedbackOne.innerHTML =
                "Obviously! We knew you'd choose the legendary D. 😂";

            challengeOneOptions.forEach(function (option) {
                option.style.pointerEvents = "none";
            });

            setTimeout(function () {

                challengeOne.classList.add("hidden");

                challengeTwo.classList.remove("hidden");

                challengeTwo.scrollIntoView({
                    behavior: "smooth"
                });

            }, 1800);

        } else {

            feedbackOne.innerHTML =
                "Hmm... nice try, Sir! 😄 But we think you forgot one important ingredient.";

        }

    });

});


// ===============================
// CHALLENGE 2 — BIOLOGY
// ===============================

const challengeTwoOptions =
    challengeTwo.querySelectorAll(".option-button");

challengeTwoOptions.forEach(function (button) {

    button.addEventListener("click", function () {

        const answer = button.dataset.answer;

        if (answer === "B") {

            feedbackTwo.innerHTML =
                "Correct, Sir! The Biology brain is officially activated. 🧬⚡";

            challengeTwoOptions.forEach(function (option) {
                option.style.pointerEvents = "none";
            });

            setTimeout(function () {

                challengeTwo.classList.add("hidden");

                challengeThree.classList.remove("hidden");

                challengeThree.scrollIntoView({
                    behavior: "smooth"
                });

            }, 1800);

        } else {

            feedbackTwo.innerHTML =
                "Not quite! Think about the direction in which DNA polymerase adds nucleotides. 🧬";

        }

    });

});


// ===============================
// CHALLENGE 3 — HOBBIES
// ===============================

const hobbyOptions =
    document.querySelectorAll(".hobby-option");


hobbyOptions.forEach(function (button) {

    button.addEventListener("click", function () {

        const hobby = button.dataset.hobby;

        let message = "";


        if (hobby === "learning") {

            message =
                "A teacher who keeps learning never stops inspiring. 🧠✨";

        }

        else if (hobby === "books") {

            message =
                "Because great teachers are great learners first. 📚💙";

        }

        else if (hobby === "video") {

            message =
                "Turning knowledge into something others can learn from — that's a skill. 🎥✨";

        }

        else if (hobby === "poetry") {

            message =
                "Because sometimes knowledge explains the world, and poetry expresses it. ✍️🌸";

        }

        else {

            message =
                "Exactly! A curious mind can enjoy learning, books, creativity, videos, poetry... all of it. 😄💙";

        }


        feedbackThree.innerHTML = message;


        hobbyOptions.forEach(function (option) {
            option.style.pointerEvents = "none";
        });


        finalButton.classList.remove("hidden");

    });

});


// ===============================
// FINAL MESSAGE
// ===============================

finalButton.addEventListener("click", function () {

    challengeSection.classList.add("hidden");

    finalSection.classList.remove("hidden");

    finalSection.scrollIntoView({
        behavior: "smooth"
    });

});