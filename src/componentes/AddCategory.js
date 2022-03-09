import React from 'react'
import { useState,useEffect } from 'react'

const AddCategory = ({set}) => {

    const [value, setvalue] = useState('')

/*     useEffect((e) => {
      const cambio=(e)=>{
          e.preventdefault();
          console.log(e.value);
      }
    },[]) */
    const cambio=(e)=>{
        setvalue(e.target.value)
    }
    
    const enviar=(e)=>{
        e.preventDefault();
        value.trim().length>=3 ? set(value) : alert("Debes ingresar mas caracteres");
    }

    return (
      <>
          
              <form className='auto' onSubmit={enviar}>
              <input className='input-search' type='text' value={value} placeholder='Ej: Studios Ghibli' onChange={cambio} />
              </form>
         
      </>
    )
}

export default AddCategory