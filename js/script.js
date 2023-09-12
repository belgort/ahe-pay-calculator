function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


document.querySelector('#calc').addEventListener('click', () => {
    if (document.querySelector('#dept').value === '-') {
        alert('Please select a Department');
        return false;
    }
    const output = document.querySelector('#output');
    const hours = document.querySelector('#hours').value;

    const dept = parseInt(document.querySelector('#dept').value);
    const qtr_pay = 17762.16;
    const calculation = (hours / dept) * qtr_pay;

    output.innerHTML = '<h2 class="pt-3 font-weight-bold">Your Results</h2><h3>Parity-Pay Calculation</h3><div class="bg-primary p-5 text-light rounded">' + 'Your compensation at 72% parity pay would be: $' + formatNumber(calculation.toFixed(2)) + '</div>';
});


document.querySelector('#hourly').addEventListener('click', () => {
    let status;

    if (document.querySelector('#dept').value === '-') {
        alert('Please select a Department');
        return false;
    }

    if (document.querySelector('#status').value === '-') {
        alert('Please select a Status');
        return false;
    } else {
        status = document.querySelector('#status').value;
    }

    let lecture_rate, lab_rate, final_rate;

    if (status == 'adjunct') {
        lecture_rate = 85.48;
        lab_rate = 73.01;
        final_rate = 165.45;
    } else if (status == 'affiliate') {
        lecture_rate = 96.64;
        lab_rate = 84.04;
        final_rate = 189.09;
    } else if (status == 'associate') {
        lecture_rate = 98.22;
        lab_rate = 85.35;
        final_rate = 191.71;
    } else {
        lecture_rate = 0;
        lab_rate = 0;
        final_rate = 0;
    }

    let output = document.querySelector('#output');
    let lecture = document.querySelector('#lecture').value;
    let lab = document.querySelector('#lab').value;
    let final = document.querySelector('#final').value;

    let calculation = (lecture * 10) * lecture_rate + lab * lab_rate + final * final_rate;
    output.innerHTML = '<h2 class="pt-3 font-weight-bold">Your Results</h2><h3>Hourly Calculation</h3><div class="bg-secondary p-5 text-light rounded">' + 'Your compensation using the hourly-pay method would be: $' + formatNumber(calculation.toFixed(2)) + '. This calculation is based on a 10-week quarter.</div>';
});

document.querySelector('#both').addEventListener('click', () => {
    let status;
    if (document.querySelector('#dept').value === '-')  
    {
        alert('Please select a Department');
        return false;
    }

    if (document.querySelector('#status').value === '-') {
        alert('Please select a Status');
        return false;
    } else {
        status = document.querySelector('#status').value;
    }

    let output = document.querySelector('#output');
    let hours = document.querySelector('#hours').value;
    let dept = parseInt(document.querySelector('#dept').value);
    let qtr_pay = 17762.16;
    let parity_calculation = (parseFloat(hours) / dept) * qtr_pay;
    let output_str = '';
    let lecture_rate;
    let lab_rate;
    let final_rate;

    output_str += '<h2 class="pt-3 font-weight-bold">Your Results</h2><h3>Parity-Pay Calculation</h3><div class="bg-light p-5 rounded mb-3 shadow border border-1">' + 'Your compensation at 72% parity pay would be: <strong>$' + formatNumber(parity_calculation.toFixed(2)) + '</strong></div>';

    if (status == 'adjunct') {
        lecture_rate = 85.48;
        lab_rate = 73.01;
        final_rate = 165.45;
    } else if (status == 'affiliate') {
        lecture_rate = 96.64;
        lab_rate = 84.04;
        final_rate = 189.09;
    } else if (status == 'associate') {
        lecture_rate = 98.22;
        lab_rate = 85.35;
        final_rate = 191.71;
    } else {
        lecture_rate = 0;
        lab_rate = 0;
        final_rate = 0;
    }

    let lecture = parseInt(document.querySelector('#lecture').value);
    let lab = parseInt(document.querySelector('#lab').value);
    let final = parseInt(document.querySelector('#final').value);

    let hourly_calculation = (lecture * 10) * lecture_rate + (lab * 10) * lab_rate + (final * final_rate);

    output_str += '<h3 mt-3>Hourly Pay Calculation</h3><div class="bg-light p-5 text-dark rounded shadow border border-1">' + 'Your compensation using the hourly-pay method would be: <strong>$' + formatNumber(hourly_calculation.toFixed(2)) + '</strong>. This calculation is based on a 10-week quarter.</div>';

    if (parity_calculation > hourly_calculation) {
    output_str += '<div class="mt-4 alert alert-success shadow">Your parity pay is greater than your hourly pay. Hence, you will be compensated the parity pay.</div>';
    } else {
        output_str += '<div class="mt-4 alert alert-success shadow">Your hourly pay is greater than your parity pay. Hence, you will be compensated the hourly pay.</div>';
    }

    output.innerHTML = output_str;
});