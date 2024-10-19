// Load saved values from local storage
window.onload = function() {
    document.getElementById('input1').value = localStorage.getItem('input1') || '';
    document.getElementById('input2').value = localStorage.getItem('input2') || '';
    document.getElementById('input3').value = localStorage.getItem('input3') || '';
    document.getElementById('input4').value = localStorage.getItem('input4') || '';
}

// Save input values to local storage
function saveToLocalStorage() {
    localStorage.setItem('input1', document.getElementById('input1').value);
    localStorage.setItem('input2', document.getElementById('input2').value);
    localStorage.setItem('input3', document.getElementById('input3').value);
    localStorage.setItem('input4', document.getElementById('input4').value);
}

// Placeholder function for your special formula
function calculateResult() {
    const input1 = parseFloat(document.getElementById('input1').value) || 0;
    const input2 = parseFloat(document.getElementById('input2').value) || 0;
    const input3 = parseFloat(document.getElementById('input3').value) || 0;
    const input4 = parseFloat(document.getElementById('input4').value) || 0;

    // Example calculation (replace with your special formula)
    const result = input1 + input2 + input3 + input4;

    document.getElementById('result').innerText = result;

    // Save inputs after calculation
    saveToLocalStorage();
}

// Add event listener to button
document.getElementById('calculateBtn').addEventListener('click', calculateResult);
