<p align="center">
  <a href="https://www.unsta.edu.ar/ingenieria/diplomatura-en-desarrollo-seguro-de-aplicaciones/">
    <img
      alt="Unsta"
      src="https://www.unsta.edu.ar/wp-content/uploads/2020/08/Universidad_Del_norte_Santo_tomas_de_aquino_UNSTA.jpg"
      width="400"
      style="background:#2b4e84"
    />
  </a>
</p>

# Objetivo 3 del Trabajo Final para la Diplomatura en Desarrollo Seguro de UNSTA. 
## Grupo 8

- Cristian Ilinczyk
- Diego Mera
- Moisés Ruiz Diaz			
- Leandro Villar


___
# USO

## Instalacion del repositorio luego de su descarga
- npm i
- npm start

Obtendra el mensaje en consola: 
```
Server run in port 3000
```

## PRUEBAS EN POSTMAN
> https://www.getpostman.com/collections/63db810ce7318b0e1c50

___
<br>

# ENDPOINTS
**1- POST**
**-  /login**

Con este método se obtiene el JWT (JSON Web Token) para autenticar y usar los endpoints privados.
Recuerde que necesita enviar el "user" y "pass" en el body de la request.
Example: 
```
{
	"user": "pepe",
	"pass": "1234"
}
```
una vez realizado ese paso se obtendra un JWT válido como respuesta:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGVwZSIsInBhc3MiOiIxMjM0IiwiaWF0IjoxNTg1Njk3NzY1fQ.FC0X07G8Ve1qw2RoOydUJVDbP5CtZVQwUUI6C9nPB00"
}
```
<br>

Con ese JWT válido usted puede acceder a los siguientes endpoint privados:
<br>

## Endpoints privados

GET
```
- /course
- /course/:indexCourse
```
Response:
```

{
    "nombre": "Ejemplo 2",
    "codigo": "22222",
    "descripcion": "Descripcion ejemplo 2",
    "url": "www.ejemplo.com"

}

```

POST
```
- /course
```

Se necesita cargar el body con los datos del nuevo curso a agregar:
```
{
    "nombre": "Curso de ejemplo 2",
    "codigo": "22222",
    "descripcion": "Descripcion ejemplo 2",
    "url": "www.ejemplo.com"

}
```

PUT
```
- /course/:id
```
DELETE
```
- /course/:id
```