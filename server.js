const express = require('express');
const bodyParser = require("body-parser");
const server = express();

server.use(bodyParser.json());

server.get('/my/first/server', (req, res) => {
    res.send('Hola mundo!!!');
});

server.get('/error', (req, res) => {
    res.statusCode = 500;
    res.json({ error: 'Algo salió mal :(' });
});

let courses = [
    {
        id: 1,
        title: 'Curso de Formacion Numero 1',
        url: 'https://example.com/course/1'
    },
    {
        id: 2,
        title: 'Curso de Formacion Numero 2',
        url: 'https://example.com/course/2'
    }
];


// GET
// Obtiene el total de cursos de formación
server.get('/course', (req, res) => {
    res.send(courses);
});

// Definicion de la ruta de express 
// que retorna un curso especifico
server.get('/course/:indexCourse', (req, res) => {
    const indexCourse = req.params.indexCourse-1;
    res.json(courses[indexCourse] || 'Course incorrect');
});

//POST
// Agrega un nuevo curso pasando en el body los valores
// similar al array "courses"
server.post("/course",(req,res) =>{
    courses.push(req.body);
    res.json("New course added correctly...");
});

// DELETE
//Elimina un curso pasandole su id
server.delete("/course/:id", (req,res) =>{
    const index = req.params.id;
    courses.splice(index, 1);
    res.status(204).json();
});

//PUT
// Agrega un nuevo curso
server.put("/course/:id", (req,res) =>{
    const index = req.params.id;
    courses.splice(index, 1, req.body);
    res.json("Update course "+ index);
});

let listener = server.listen(3000, () => {
console.log('startListen', `NodeJS Application, appPort= ${listener.address().port}`);
});
