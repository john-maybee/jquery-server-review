$(readyNow); // does same thing as $(document).ready(readyNow)

let operator;

function readyNow() {
    console.log('jquery ready');
    // trigger a GET 
    getCalc(); 

    $('#submitBtn').on('click', handleSubmit);
    $('.operator').on('click', handleOperator);
}

function getCalc() {
    console.log('GET Trigger');

    $.ajax({
        url: '/calculate',
        method: 'GET',
    }).then(function(response) {
        console.log(response);
        render(response);
        // operator = response.operator;
    })
}

function render(history) {
    // render answer
    $('#answer').empty();
    $('#answer').append(`<h2>${history[history.length - 1].answer}</h2>`);
    
    // render history
    $('#history').empty();
    for (let calc of history) {
        $('#history').append(`
        <li>
            ${calc.num1} ${calc.operator} ${calc.num2} = ${calc.answer}
        </li>`)
    }
}

function handleOperator() {
    console.log('clicked Operator', $(this).text());
    operator = $(this).text();
}

function handleSubmit() {
    console.log('clicked!');
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    console.log(num1, num2, operator);

    // promise (how js handles asyncronous code)
    $.ajax({
        url: '/calculate',
        method: 'POST',
        data: {
            num1: num1,
            num2: num2,
            operator: operator
        }
    }).then(function(response) {
        console.log(response);
        // trigger a GET
        getCalc();
    }).catch(function(error) {
        console.log(error);
        alert(error.responseText);
    })
}

