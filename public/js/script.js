// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
  
    // Function to move the 'No' button to a random position
    function moveButton() {
        const noBtn = document.getElementById('noButton');
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth) - 85;
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight) - 48;
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Attach the event listener to the 'No' button
    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('click', moveButton);
  
    yesButton.addEventListener('click', function() {
      window.location.href = 'yes.html'; // Redirect to the "Yes" page
    });
  });
  