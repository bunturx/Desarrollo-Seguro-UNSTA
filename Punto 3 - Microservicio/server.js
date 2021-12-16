require('./models/db');
const express = require('express')
const mongoose = require('mongoose');
const Course = mongoose.model('Course');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken')
const cors = require('cors')
const server = express()
server.use(express.json())
server.use(cors())


const myPassJWT = 'my_secret_password'
var courses = new Course();

//Agregar nuevo user en la BBDD
var user = new User({
    username: 'pepe',
    password: '12345'
});

user.save(function (err, results) {
    console.log(results._id);
});

const validateUser = (request, response, next) => {
    let token = request.headers.authorization;
    try {
        decode = jwt.verify(token, myPassJWT);
        if(decode){
            request.user = decode;
            next();
        }else{
            throw "Permisos incorrectos...";
        }
    } catch (error) {
        response.status(401).json({msj: 'Login Inválido :('})
    }
}

server.post('/login', (request, response) => {
    let {username, password} = (request.body);
    // valido si lo que viene por request es igual a la BBDD
    if(user.username == username && user.password == password){
        let token = jwt.sign(user.toObject(), myPassJWT);
        response.status(200).json({token: token})
    }
    response.status(401).json({msj: 'Login Invalido'})
 });


server.get('/public', (req, res) => {
    res.json({msj: `Resultados de los usuarios en la BBDD: ${user}`})
});

// GET privado para probar JWT
server.get('/private', validateUser, (request, response) => {
    response.json({msj: `Bienvenido usuario ${request.user.user}`})
});

// GET que Obtiene el total de cursos de formación
server.get('/course', validateUser,(req, res) => {
    Course.find((err, docs) => {
        if (!err) {
            res.json(docs);
        }
        else {
            console.log('Error al mostrar cursos:' + err);
        }
    });
    
});

// GET que retorna un curso especifico
server.get('/course/:codigoCurso', validateUser,(req, res) => {
    const codigoCurso = req.params.codigoCurso;
    Course.findOne({codigoCurso : { $eq: referenceNumber }}, (err, doc) => {
        if (!err) {
            res.json(doc[referenceNumber] || 'Curso Incorrecto');
        } 
        else {
            res.json('Error al mostrar el curso:' + req.params.codigoCurso);
        }
    });
});

// POST
// Agrega un nuevo curso pasandole en el body los valores
// similar al array "courses"
server.post("/course", validateUser,(req, res) =>{
    courses.courseName = req.body.nombre;
    courses.referenceNumber = req.body.codigo;
    courses.description = req.body.descripcion;
    courses.url = req.body.url;
    courses.save(req.body);
    res.json("Nuevo curso agregado correctamente...");
});

// DELETE
// Elimina un curso pasandole su id
server.delete("/course/:id", validateUser, (req, res) =>{
    const index = req.params.id;
    courses.deleteOne(index, 1);
    res.json("Curso: " + index + " eliminado...");

    Course.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/course/list');
        }
        else { console.log('Error in course delete :' + err); }
    });
});

// PUT
// Actualiza un nuevo curso
server.put("/course/:id", (req,res) =>{
    const index = req.params.id;
    courses.save(index, 1, req.body);
    res.json("Actualizado curso: "+ index);
});

let listener = server.listen(3000, () => {
console.log('startListen', `NodeJS Application, appPort= ${listener.address().port}`);
});
