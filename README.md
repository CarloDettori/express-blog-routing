# EXPRESS-BLOG-INTRO

Ciao Ragazzi,

esercizio di oggi: *express-blog-intro*
nome repo express-blog-intro


### *Esercizio*

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

- Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

- Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.

- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

- Testare su postman


Bonus:

filtrare i dati sulla base di parametri in query string


Buon lavoro!
//__________________________________________________________________________________________

## Step
```bash
# create file server.js
# npm init -y
# configure package json with dev and start script

# install express 
npm install express

```

```javascript
// import express in server js

const express = require('express');


// set port to listen on localhost
const PORT = 3000;


//creo una istanza del server
const app = express();


//definisco path per asset statici
app.use(express.static("public"));

//require di eventuali altri file
const pets = require("./data/pets.js");
console.log(pets);


//rotte
app.get("/", (req, res) => {
  res.send("Ciao");
});
// app.get("/api/pets", (req, res) => {
//   res.json(pets);
// });
app.all('*',(req,res)=>{
  res.status(404).send('<h1>Not Found !</h1>');
})

//mmetto il server in ascolto su localhost alla porta 3000
app.listen(PORT,  () => {
    console.log(`Server is running on http://localhost:${PORT}}`);
});

```