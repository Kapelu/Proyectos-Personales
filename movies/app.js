let pagina = 1
const btnAnterior = document.getElementById('btnAnterior')
const btnsiguiente = document.getElementById('btnSiguiente')

btnAnterior.addEventListener('click',()=>{
    if(pagina > 1){
        pagina -= 1
        cargarPeliculas()
    }
})

btnSiguiente.addEventListener('click',()=>{
    if(pagina < 1000){
        pagina += 1
        cargarPeliculas()
    }
})


const cargarPeliculas = async () => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=714a51dd8059efb07cfb6fdcc28115a3&language=es-ES&page=${pagina}`)
		
        if (respuesta.status === 200) {
			const datos = await respuesta.json()
            let peliculas = ''
            
            datos.results.forEach((pelicula) => {
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3 class='titulo'>${pelicula.title}</h3>
                    </div>
                `
            })
            document.getElementById('contenedor').innerHTML = peliculas

		} else if (respuesta.status === 401) {
			console.log('%cStop! escribiste mal la direccion','color:red;font-family:system-ui;font-size:2rem')
		} else if (respuesta.status === 404) {
			console.log('%cLa Pelicula no existe!','color:green;font-family:system-ui;font-size:2rem')
		} else{
            console.log('%cAlgo salio mal !!!!!','color:red;font-family:system-ui;font-size:4rem')
        }
	} catch (error) {
		console.log(error)
	}
}
cargarPeliculas()
