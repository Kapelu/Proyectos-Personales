import '../hojas-de-estilo/Boton.css'

function Boton({texto, esBotonClic, manejarClic}) {
	return (
		<button
			className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
			onClick={manejarClic}
		>
			{texto}
		</button>
	)
}

export default Boton
