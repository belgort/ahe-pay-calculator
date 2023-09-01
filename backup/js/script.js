// script.js

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

$('#calc').on('click', function () {
    if ($('#dept').val() == '-') {
        alert('Please select a Department');
        return false;
    }
    var output = $('#output');
    var hours = $('#hours').val();

    var dept = parseInt($('#dept').val());

    // var qtr_pay = 13443.95;
    // var qtr_pay = 14245.54
    // var qtr_pay = 14487.71;
    var qtr_pay = 17762.16;
    var calculation = (hours / dept) * qtr_pay;
    output.html('<h2 class="pt-3 font-weight-bold">Your Results</h2><h3>Parity-Pay Calculation</h3><div class="bg-primary p-5 text-light rounded">' + 'Your compensation at 69% parity pay would be: $' + formatNumber(calculation.toFixed(2)) + '</div>');
});

$('#hourly').on('click', function () {
    if ($('#dept').val() == '-') {
        alert('Please select a Department');
        return false;
    }

    if ($('#status').val() == '-') {
        alert('Please select a Status');
        return false;
    } else {
        var status = $('#status').val();
    }

    var lecture_rate;
    var lab_rate;
    var final_rate;

    if (status == 'adjunct') {
        // lecture_rate = 71.67;
        // lab_rate = 61.21;
        // final_rate = 138.71;
        // lecture_rate = 73.68;
        // lab_rate = 62.92;
        // final_rate = 142.60;
        lecture_rate = 85.48;
        lab_rate = 73.01;
        final_rate = 165.45;
    } else if (status == 'affiliate') {
        // lecture_rate = 81.03;
        // lab_rate = 70.46;
        // final_rate = 158.53;
        // lecture_rate = 83.30;
        // lab_rate = 72.43;
        // final_rate = 162.97;
        lecture_rate = 96.64;
        lab_rate = 84.04;
        final_rate = 189.09;
    } else if (status == 'associate') {
        // lecture_rate = 82.35;
        // lab_rate = 71.56;
        // final_rate = 160.73;
        // lecture_rate = 84.66;
        // lab_rate = 73.56;
        // final_rate = 165.23;
        lecture_rate = 98.22;
        lab_rate = 85.35;
        final_rate = 191.71;
    } else {
        lecture_rate = 0;
        lab_rate = 0;
        final_rate = 0;
    }

    var output = $('#output');
    var lecture = $('#lecture').val();
    var lab = $('#lab').val();
    var final = $('#final').val();

    var calculation = (lecture * 10) * lecture_rate + lab * lab_rate + final * final_rate;
    output.html('<h2 class="pt-3 font-weight-bold">Your Results</h2><h3>Hourly Calculation</h3><div class="bg-secondary p-5 text-light rounded">' + 'Your compensation using the hourly-pay method would be: $' + formatNumber(calculation.toFixed(2)) + '. This calculation is based on a 10-week quarter.</div>');
});

$('#both').on('click', function () {
    if ($('#dept').val() == '-') {
        alert('Please select a Department');
        return false;
    }

    if ($('#status').val() == '-') {
        alert('Please select a Status');
        return false;
    } else {
        status = $('#status').val();
    }

    // do parity first
    var output = $('#output');
    var hours = $('#hours').val();

    var dept = parseInt($('#dept').val());

    // var qtr_pay = 13443.95;
    // var qtr_pay = 14245.54
    // var qtr_pay = 14487.71;
    var qtr_pay = 17762.16;
    var parity_calculation = (hours / dept) * qtr_pay;
    var output_str = '';

    output_str += '<h2 class="pt-3 font-weight-bold">Your Results</h2><h3>Parity-Pay Calculation</h3><div class="bg-primary p-5 text-light rounded mb-3">' + 'Your compensation at 65% parity pay would be: <strong>$' + formatNumber(parity_calculation.toFixed(2)) + '</strong></div>';

    var lecture_rate;
    var lab_rate;
    var final_rate;

    // now lets do hourly
    if (status == 'adjunct') {
        // lecture_rate = 71.67;
        // lab_rate = 61.21;
        // final_rate = 138.71;
        // lecture_rate = 73.68;
        // lab_rate = 62.92;
        // final_rate = 142.60;
        lecture_rate = 85.48;
        lab_rate = 73.01;
        final_rate = 165.45;
    } else if (status == 'affiliate') {
        // lecture_rate = 81.03;
        // lab_rate = 70.46;
        // final_rate = 158.53;
        // lecture_rate = 83.30;
        // lab_rate = 72.43;
        // final_rate = 162.97;
        lecture_rate = 96.64;
        lab_rate = 84.04;
        final_rate = 189.09;
    } else if (status == 'associate') {
        // lecture_rate = 82.35;
        // lab_rate = 71.56;
        // final_rate = 160.73;
        // lecture_rate = 84.66;
        // lab_rate = 73.56;
        // final_rate = 165.23;
        lecture_rate = 98.22;
        lab_rate = 85.35;
        final_rate = 191.71;
    } else {
        lecture_rate = 0;
        lab_rate = 0;
        final_rate = 0;
    }

    var lecture = parseInt($('#lecture').val());
    var lab = parseInt($('#lab').val());
    var final = parseInt($('#final').val());

    var hourly_calculation = (lecture * 10) * (lecture_rate) + (lab * 10) * lab_rate + (final * final_rate);
    output_str += '<h3 mt-3>Hourly Pay Calculation</h3><div class="bg-secondary p-5 text-light rounded">' + 'Your compensation using the hourly-pay method would be: <strong>$' + formatNumber(hourly_calculation.toFixed(2)) + '</strong>. This calculation is based on a 10-week quarter.</div>';

    if (parity_calculation > hourly_calculation) {
        output_str += '<div class="mt-4 alert alert-success">Your parity pay is greater than your hourly pay. Hence, you will be compensated the parity pay.</div>';
    } else {
        output_str += '<div class="mt-4 alert alert-success">Your hourly pay is greater than your parity pay. Hence, you will be compensated the hourly pay.</div>';
    }

    output.html(output_str);

});