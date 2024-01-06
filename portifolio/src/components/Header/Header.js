import React from 'react'

//CSS
import './Header.css'

//Images
import brand_logo from '../../images/brand_logo.png'

const Header = () => {
  return (
    <>
      <header className='header-component'>
        <nav className='row bg-secondary'>
          <div className='col d-flex align-content-center justify-content-start'>
            <a href='...'><img src={brand_logo} alt='imagem que leva a home' className='img-styles' /></a>
          </div>
          <div className='col d-flex align-content-center justify-content-center '>
            <ul className='list-unstyled d-flex'>
                <li><a href='...'>Me Conheça</a></li>
                <li><a href='...'>Competências</a></li>
                <li><a href='...'>Experiência</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header