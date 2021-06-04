import React/*, { useEffect, useState }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const { loading, data:images } = useFetchGifs( category );

  /*  se mueve codigo y se elimina porque se aplica la logica en el useFecthGifs
    const [images, setImages] = useState([])
    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages(imgs));
    },[category]);*/
    //el segundo parametro de useEffect es para marcar las dependencias
    //al colocar solo [], la funcion del useEffect se ejecutara 1 unica vez al renderizar por primera vez la pagina
    //al colocar [category], la funcion del useEffect se ejecutara cada vez que el valor de category sea modificado por el useState

    /*Se envia todo el codigo a helper/getGifs.js */
    /*const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=xCSEyDPhGZ8iC3wzZOhPBI0WLLwHJ8Uu`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id : img.id,
                title : img.title,
                url : img.images.downsized_medium.url 
            }

        });


        console.log(gifs);
        setImages(gifs);
    }*/


    //getGifs();
    return (
        <>
            <h3 className="animate__animated animate__bounceInLeft"> { category }</h3>  
            { loading && <p className="animate__animated animate__bounceInRight">Loading...</p>//se aplica la simplificación de condicional ternario cuando solo se necesita la condicion que se cumple
            }
            <div className="card-grid">
            
                {
                    images.map( img => (
                        <GifGridItem 
                            key = {img.id} 
                            { ...img } //permite clonar el objeto y pasar una a una los elementos del objeto como propiedades independientes
                        />
                    ))
                }
            </div>
        </>
        
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
