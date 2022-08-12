const { urlencoded } = require('express');
const express = require('express');
const server = express();
const port = 3000;
const config = {
  host: 'mysql_database',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config);
server.use(express.json())
server.use(urlencoded({extended: true}))

function insertName(name) {
  const sql = `INSERT INTO people(name) VALUES('${name}')`;
  connection.query(sql);
}

server.get("/", (req, res) => {
  let text = "<h1>Full Cycle Rocks!</h1>";
  text += "<ul>"
  const sql = `SELECT * FROM people`;
  connection.query(sql, (err, result, fields) => {
    if (err) throw err;
    result.map((person)=>[
      text+=`<li>${person.name}</li>`
    ])
    text += "</ul>";
    res.send(text)
  })
})

server.get("/name/:name", (req, res) => {
  insertName(req.params.name);
  res.status(200).send("Nome inserido com sucesso")
})

server.post("/", (req, res) => {
  insertName(req.body.name)
  res.status(201).send("Nome inserido com sucesso");
})

server.listen(port, () => {
  console.log("Rodando na porta " + port)
})



