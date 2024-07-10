import React from 'react'
import NavCard from './NavCard/index'
import './styles.css'

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
    return (
        <div className="title-div">
            <h1>Paulette Garda</h1>
            <h2>Diseñadora de Moda e Imagen, Vestuarista en TV, Cine y Publicidad con experiencia desde hace más de 20 años.</h2>
            <div className="nav-card-container">
                <NavCard title="Bio" type="bio" selector="bio" delay={0}/>
                <NavCard title="Comerciales" type="comerciales" selector="comerciales" delay={500} />
                <NavCard title="Diseño" type="diseño" selector="diseño" delay={1000} />
                <NavCard title="Cine" type="cine" selector="cine" delay={1500} />
            </div>
        </div>
    )
}

export default Nav