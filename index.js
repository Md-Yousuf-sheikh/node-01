const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
// const port = process.env.PORT || 3000;
const port = 5000;

//  Even if it dose!!!!!!!

// const handler = (req, res) => {
//     res.send('Hello Boss Node')
// }

const users = [
    { id: 0, name: "Md Yousuf sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 1, name: "Md Jony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 2, name: "Md Rony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 3, name: "Md Mony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 4, name: "Md Kony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 5, name: "Md Sony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 6, name: "Md Tony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 7, name: "Md Bony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 8, name: "Md Fony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 9, name: "Md Lony sheikh", email: "sheikhyousuf702@gmail.com" },
    { id: 10, name: "Md Kony sheikh", email: "sheikhyousuf702@gmail.com" }
]

app.get('/', (req, res) => {
    res.send("Hello ! My fast  node  Start now ")
})
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        res.send(searchResult)
    } else {
        res.send(users)
    }
})

// app Post.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.send(newUser)
})

//  not  unComment
// app.get('/users', (req, res) => {
//     res.send(
//         users
//     )
// })

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.get('/fruits/mangos/fazli', (req, res) => {
    res.send("Yummy Yummy tok mama fazli")
})

app.listen(port, () => {
    console.log('Listening to port', port);
})