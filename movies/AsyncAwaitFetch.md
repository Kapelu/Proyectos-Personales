# Funcion ASYNC, AWAIT y FETCH

_*Sintaxis*_: App.js

```js
const cargarPeliculas = async ()=> {
    const respuesta = await fetch ('https://api.themoviedb.org/3/movie/550?api_key=714a51dd8059efb07cfb6fdcc28115a3&language=es-ES')
    console.log('conectado a la API')
}
cargarPeliculas()
```