import React, { useEffect, useState } from 'react'
import ImagesCard from './ImagesCard'

const Category = ({ca}) => {

  const [images,setimages] = useState([])

  useEffect(() => {
    obtener()
  
    },[])
  

    const obtener= async()=>{
      const peticion=`https://api.giphy.com/v1/gifs/search?q=${ca}&limit=16&api_key=k4ISskQMU7u1Yh7URT6N1u9vukMWmrWj`
      const respu= await fetch(peticion);
      const {data}= await respu.json();

      if (data.length>=1) {
        const gifs=data.map(data=>{
          return{
            id: data.id,
            title: data.title,
            url: data.images.downsized_medium.url
          }
        })
        setimages(gifs)
      }else{
        alert('No se encontraron resultados para su busqueda, escribe bien la wea uwu >.<')
      }
    }

  return (
    <>
        <h3 className='title'>{ca}</h3>
        <div className='card-grid'>
          {images.map((data)=>{
            return <ImagesCard key={data.id} data={data}/>
          })}
        </div>
    </>
  )
}

export default Category