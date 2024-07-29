document.addEventListener("DOMContentLoaded", function() {
    const toggleEmail = document.getElementById('toggleEmail');
    const emailInput = document.getElementById('email');

    // Initially hide the email input
    emailInput.setAttribute('type', 'password');

    toggleEmail.addEventListener('click', function() {
        if (emailInput.type === 'password') {
            emailInput.setAttribute('type', 'text');
            toggleEmail.textContent = 'Hide';
        } else {
            emailInput.setAttribute('type', 'password');
            toggleEmail.textContent = 'Show';
        }
    });

    const continueButton = document.getElementById("conButton");
    const idContent = document.getElementById("id");
    const passwordContent = document.getElementById("passWord");
    const arrowBack = document.getElementById("arrow");
    const userIdInput = document.getElementById("userIdInput");
    const userIdDisplay = document.getElementById("userIdDisplay");
    const userIdMessage = document.getElementById("userIdMessage");

    // Hide passwordContent initially
    passwordContent.style.display = 'none';

    // Event listener to update the display when the user types in the input field
    userIdInput.addEventListener("input", function() {
        userIdDisplay.textContent = userIdInput.value;
    });

    // Show passwordContent and hide idContent when continueButton is clicked
    continueButton.addEventListener('click', function() {
        // Check if the userIdInput is empty
        if (userIdInput.value.trim() !== '') {
            idContent.style.display = 'none';
            passwordContent.style.display = 'block';
            userIdMessage.style.display = 'none'; // Hide the message if shown
        } else {
            // Show the message if the input is empty
            userIdMessage.innerText = "Please Your User ID is required.";
            userIdMessage.style.display = 'block';
            // Animate the message
            userIdMessage.style.animation = 'fade-in 0.5s forwards';
        }
    });

    // Show idContent and hide passwordContent when arrowBack is clicked
    arrowBack.addEventListener('click', function() {
        idContent.style.display = 'block';
        passwordContent.style.display = 'none';
        userIdMessage.style.display = 'none'; // Hide the message if shown
    });
});

// Ensure everything refreshes when the page reloads
window.addEventListener('load', function() {
    // Reset the input field
    document.getElementById("userIdDisplay").textContent = '';
    document.getElementById("userIdInput").value = '';
});
