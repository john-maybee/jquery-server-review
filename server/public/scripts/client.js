$(readyNow); // does same thing as $(document).ready(readyNow)

function readyNow() {
    console.log('jquery ready');


    $('#submitBtn').on('click', handleSubmit);
    $('.operator').on('click', handleOperator);
}

function handleOperator() {
    console.log('clicked Operator', $(this));
}

function handleSubmit() {
    console.log('clicked!');
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    console.log(num1, num2);
}

