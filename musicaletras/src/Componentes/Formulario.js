import React, {useState} from 'react';

const Formulario = ({datosFormulario}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista : '',
        cancion : ''
    })

    //Leyendo valores del formulario

    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //enviar datos al componente principal

    const handleSubmit = e => {
        e.preventDefault()
        datosFormulario(busqueda)
    }    

    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    onSubmit = {handleSubmit} 
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista" 
                                        onChange = {actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción" 
                                        onChange = {actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    );
};

export default Formulario;