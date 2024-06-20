import express from 'express'
import dotenv from 'dotenv';
const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

const jokes = [
    {
        id: 1,
        title: "Why don't scientists trust atoms?",
        content: "Because they make up everything!"
    },
    {
        id: 2,
        title: "What do you call fake spaghetti?",
        content: "An impasta."
    },
    {
        id: 3,
        title: "Why did the scarecrow win an award?",
        content: "Because he was outstanding in his field."
    },
    {
        id: 4,
        title: "What do you get when you cross a snowman and a vampire?",
        content: "Frostbite."
    },
    {
        id: 5,
        title: "Why don't some couples go to the gym?",
        content: "Because some relationships don't work out."
    },
    {
        id: 6,
        title: "What did one ocean say to the other ocean?",
        content: "Nothing, they just waved."
    },
    {
        id: 7,
        title: "Why don't skeletons fight each other?",
        content: "They don't have the guts."
    },
    {
        id: 8,
        title: "Why did the math book look sad?",
        content: "Because it had too many problems."
    },
    {
        id: 9,
        title: "What do you call cheese that isn't yours?",
        content: "Nacho cheese."
    },
    {
        id: 10,
        title: "How does a penguin build its house?",
        content: "Igloos it together."
    }
];

// Endpoint to get all jokes
app.get('/api/jokes', (req, res) => {
    res.json(jokes);
});

// // Endpoint to get a joke by ID
// app.get('/jokes/:id', (req, res) => {
//     const jokeId = parseInt(req.params.id, 10);
//     const joke = jokes.find(j => j.id === jokeId);
    
//     if (joke) {
//         res.json(joke);
//     } else {
//         res.status(404).send({ error: 'Joke not found' });
//     }
// });

// Start the server
app.listen(port, () => {
    console.log(`Jokes server listening at http://localhost:${port}`);
});
