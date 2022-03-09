import React from 'react'

const ImagesCard = ({data}) => {

    const {id,title,url}=data
  return (
    <>
                <div id={id} className='animate__animated animate__backInLeft Card'>
                    {<img src={url}/>}
                    <p>{title}</p>
                </div>
    </>
  )
}
 
export default ImagesCard