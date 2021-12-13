const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const server = express()
server.use(express.json())
server.use(cors())

const myPassJWT = 'my_secret_password'

const users = [
    {user: 'pepe', pass: '1234'},
    {user: 'carlos', pass: '12345'}
]

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
    let {user, pass} = (request.body);
    users.forEach((data) => {
        if(data.user == user && data.pass == pass){
            let token = jwt.sign(data, myPassJWT);
            response.status(200).json({token: token})
        }
    });
    response.status(401).json({msj: 'Invalid Login'})
 });


// Acceso publico sin JWT
server.get('/public', (req, res) => {
    res.json({msj: 'Acceso publico sin JWT...'})
});

// GET privado para probar JWT
server.get('/private', validateUser, (request, response) => {
    response.json({msj: `Bienvenido usuario ${request.user.user}`})
});

// GET que Obtiene el total de cursos de formación
server.get('/course', validateUser,(req, res) => {
    res.send(courses);
});

// GET que retorna un curso especifico
server.get('/course/:indexCourse', validateUser,(req, res) => {
    const indexCourse = req.params.indexCourse-1;
    res.json(courses[indexCourse] || 'Curso Incorrecto');
});

// POST
// Agrega un nuevo curso pasandole en el body los valores
// similar al array "courses"
server.post("/course", validateUser,(req, res) =>{
    courses.push(req.body);
    res.json("Nuevo curso agregado correctamente...");
});

// DELETE
// Elimina un curso pasandole su id
server.delete("/course/:id", validateUser, (req, res) =>{
    const index = req.params.id;
    courses.splice(index, 1);
    res.json("Curso: " + index + " eliminado...");
});

// PUT
// Agrega un nuevo curso
server.put("/course/:id", (req,res) =>{
    const index = req.params.id;
    courses.splice(index, 1, req.body);
    res.json("Actualizado curso: "+ index);
});

let listener = server.listen(3000, () => {
console.log('startListen', `NodeJS Application, appPort= ${listener.address().port}`);
});
