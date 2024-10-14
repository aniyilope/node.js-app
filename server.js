const express = require('express');

const app = express();
const port = 3000;

const users =[
    { id: 1, name: 'John Doe', email: 'john@example.com'},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com'},
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com'},
    { id: 4, name: 'Bob Brown', email: 'bob@example.com'},

    
];

app.get('/users', (req, res) => { 
    res.send(users)
});
app.get('/', (req, res) => { 
    res.send('welcome to our site')
});

app.get('/about', (req, res) => { 
    res.send('Welcome to About Page!')
});

app.get('/service', (req, res) => { 
    res.send('Welcome to  Service Page!')
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});