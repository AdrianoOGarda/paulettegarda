import React from 'react'
import Comercial from '../Comerciales/Comercial'
import './styles.css'

interface CineProps {
}

const Cine: React.FC<CineProps> = () => {

    return (
        <div className="films-container content" id="cine">
            <h3>Cine</h3>
            <Comercial title="El Refugio" videoId="d2HeeC9IeJ4?si=XDcI4lrkZgRhrdNz" darkMode />
            <Comercial title="Déjala Ir" videoId="ot_gr7VhzCs?si=jSz_ofbW8fxelhXt" darkMode />
            <Comercial title="La Llorona Memento Mori" videoId="VaxLsvFzqpg?si=U6baUyzn16XoEils" darkMode />
            <Comercial title="Dzulum" videoId="Tz5ey_CzLXo?si=X3wP6WDpGXs1761l" darkMode />
            
        </div>
    )
}

export default Cine