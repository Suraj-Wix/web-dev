const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Event listener for the "Sign Up" button on the Login side
signUpButton.addEventListener('click', () => {
    // Add the class to initiate the slide/animation
    container.classList.add("right-panel-active");
});

// Event listener for the "Sign In" button on the Register side
signInButton.addEventListener('click', () => {
    // Remove the class to reverse the slide/animation
    container.classList.remove("right-panel-active");
});

// You would add your form validation and submission logic here:
// document.querySelector('.sign-up-container form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     // 1. Client-side validation checks
//     // 2. AJAX submission to backend
// });