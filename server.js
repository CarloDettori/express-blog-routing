"use strict"
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
});

app.get("/bacheca", (req, res) => {
    let postTitles = ""
    Posts.slice(1).forEach(element => {
        postTitles += (" " + element.title)
    });
    let counter = Posts[0].conteggio
    let postArchive = {
        allPostsPro: postTitles,
        totalPostPro: counter,

    }
    res.json(postArchive);
});

app.get("/img", (req, res) => {
    let postTitles = ""
    Posts.slice(1).forEach(element => {
        postTitles += (" " + element.title)
    });
    let counter = Posts[0].conteggio
    let postArchive = {
        allPostsPro: postTitles,
        totalPostPro: counter,

    }
    res.json(postArchive);
});

app.all('*', (req, res) => {
    res.status(404).send('<h1> ERROR 404, Not Found !!!</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`)
})

const Posts = [
    { conteggio: 5 },
    {
        title: "Ciambellone",
        content: "Il ciambellone è buono",
        image: "/public/img/ciambellone.jpeg",
        tags: ["dessert", "dolce", "feste"],
    },
    {
        title: "Cracker di barbabietola",
        content: "Il cracker di barbabietola è buono",
        image: "/public/img/cracker-barbabietola.jpg",
        tags: ["snak", "dolce", "salutare"],
    },
    {
        title: "Pane fritto dolce",
        content: "Il pane fritto dolce è buono",
        image: "/public/img/pane-fritto-dolce.jpg",
        tags: ["contorno", "salato", "cena"],
    },
    {
        title: "Pasta alla barbabietola",
        content: "La pasta alla barbabietola è buona",
        image: "/public/img/pasta-barbabietola.jpg",
        tags: ["primo", "salto", "pranzo"],
    },
    {
        title: "Torta paesana",
        content: "La torta paesana è buona",
        image: "/public/img/paesana.jpg",
        tags: ["dessert", "dolce", "tradizionale"],
    }
]
