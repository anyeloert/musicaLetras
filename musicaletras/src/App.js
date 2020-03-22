import React, {useState, useEffect} from 'react';
import Formulario from './Componentes/Formulario'
import Cancion from './Componentes/Cancion'
import Informacion from './Componentes/Informacion'

import axios from 'axios'

const App = () => {

  //State

  const [artista, guardarArtista] = useState('')
  const [letra, guardarLetra] = useState([])
  const [info, guardarInfo] = useState({})

  //Actualizar el state con el formulario

  const datosFormulario =async busqueda => {
    const {artista, cancion} = busqueda
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
    const resultado = await axios(url)
    guardarArtista(artista)
    guardarLetra(resultado.data.lyrics)
  }
  
  //buscar informacion del artista en API

  const buscarInfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
    const resultado = await axios(url)
    guardarInfo(resultado.data.artists[0]);
  }
  console.log(info);

  useEffect(() => {
    if (artista !== '')
      buscarInfo()
  }, [artista])

  return (
    <div>
      <Formulario
        datosFormulario = {datosFormulario}
      />
      <div className = 'container mt-5'>
        <div className='row'>
          <div className = 'col-md-6'>
            <Informacion
              info = {info}
            />
          </div>
          <div className = 'col-md-6'>
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;