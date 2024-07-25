
  // Function to handle the button click
  function showAlert() {
    alert('Bitte kontaktieren Sie mich per Email!');
  }

  // Add event listener to the button
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('absenden');
    button.addEventListener('click', showAlert);
  });

