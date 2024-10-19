// Load saved values from local storage
window.onload = function() {
    document.getElementById('input_today').value = localStorage.getItem('input_today') || '';
    document.getElementById('input_yesterday').value = localStorage.getItem('input_yesterday') || '';
    document.getElementById('input_total_sahm').value = localStorage.getItem('input_total_sahm') || '';
}

// Save input values to local storage
function saveToLocalStorage() {
    localStorage.setItem('input_today', document.getElementById('input_today').value);
    localStorage.setItem('input_yesterday', document.getElementById('input_yesterday').value);
    localStorage.setItem('input_total_sahm', document.getElementById('input_total_sahm').value);
}

// Placeholder function for your special formula
function calculateResult() {
    const input_today = parseFloat(document.getElementById('input_today').value) || 0;
    const input_yesterday = parseFloat(document.getElementById('input_yesterday').value) || 0;
    const input_total_sahm = parseFloat(document.getElementById('input_total_sahm').value) || 0;

    if(input_today === 0 || input_yesterday === 0 || input_total_sahm === 0) {
        alert('لطفا تعداد کل سهم و نرخ امروز و نرخ سیو سود روز قبل را وارد کنید');
        document.getElementById('result_soodemrooz').innerText = "---";
        document.getElementById('result_sahm_foroosh').innerText = "---";
        return;
    }

    // result calculation
    const result_soodemrooz = (input_today - input_yesterday) * input_total_sahm;
    const result_sahm_foroosh = result_soodemrooz / input_today;

    document.getElementById('result_soodemrooz').innerText = result_soodemrooz.toFixed(2);
    document.getElementById('result_sahm_foroosh').innerText = result_sahm_foroosh.toFixed(2);

    // Save inputs after calculation
    saveToLocalStorage();
}

// Add event listener to button
document.getElementById('calculateBtn').addEventListener('click', calculateResult);
