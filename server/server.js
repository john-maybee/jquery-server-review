const express = require('express');
const app = express();
const port = 5001; // where we will be loading/accessing our code

// Serve static files


// body parser could be used here instead of express?
app.use(express.urlencoded({ extended: true }));

// Serve Static files
app.use(express.static('server/public')); // this serves up a static that has the index.html inside.

let history = [];

app.get('/calculate', (req, res) => {
    console.log('Got to GET /calculate');
    res.send(history);
})

app.post('/calculate', (req, res) => {
    console.log('IN POST /calculate', req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let operator = req.body.operator;
    let answer;


    // do the maths...
    // if(req.body.operator === '+')
    switch(operator){
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        default:
            // oooops, not an operator...

    }
    console.log(answer);
    history.push({
        num1: num1,
        num2: num2,
        operator: operator,
        answer: answer
    })

    console.log(history);
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log('listening on port, ', port);
} ); // end of telling the application to listen to the port we defined above as 5001 and utilize node server we return

