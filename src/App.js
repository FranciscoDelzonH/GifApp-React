import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Category from './componentes/Category'

const App = props => {

    const [categoria, setcategoria] = useState('Studios Ghibli');

  return (
    <>
        <Header set={setcategoria}/>
            <main>
                <ol>
                    <Category key={categoria} ca={categoria} />
                </ol>
            </main>
        <Footer/>
    </>
  )
}

App.propTypes = {}

export default App