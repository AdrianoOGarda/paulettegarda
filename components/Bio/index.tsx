import React from 'react'
import Embed from '../Embed'
import './styles.css'

interface BioProps {
}

const Bio: React.FC<BioProps> = () => {
    return (
        <div id="bio" className="bio-container content">
            <div className="bio-title-container">
                <div className="square-image">
                    <img src="/Bio/Poli.jpg" />
                </div>
                <h3>Biografía</h3>
            </div>
            <p>
                Nací en la Ciudad de México, hija de padre italiano, artista, pintor y chef, y madre guatemalteca joyera.
                Estudié contabilidad en el Tecnológico de Monterrey. Faltándome dos semestres para graduarme, me enteré que llegaba a México una universidad de diseño de modas. Fascinada, me salí del TEC y estudié en Janette Klein.
            </p>
            <p>Mi carrera como diseñadora empezó haciendo mis propios diseños con telas innovadoras importadas, tales como charol y terciopelo elástico, entre otras. Vendí mis diseños por varios años en el maravilloso mercado que se pone los domingos en la Lagunilla. Era una época donde este tianguis era muy artístico, lleno de antigüedades y cosas que no encontrabas en otro lado, incluyendo mi puesto.</p>
            <p>Entré al mundo de la publicidad por un gran amigo mío de la adolescencia y escuela que empezaba a dirigir. Cuando menos cuenta me di, ya estaba yo en un set como diseñadora de imagen y vestuario.</p>
            <p>A lo largo de mi carrera he diseñado ropa para celebridades, he hecho vestuarios para festivales de danza y de techno como Burning Man. He trabajado en comerciales para TV con muchas casas productoras como freelance, en pequeñas y grandes empresas, con variedad de directores, algunos con mucho talento y carrera. He hecho cortometrajes, desfiles de moda y sesiones de moda para foto fija.</p>
            <p>Cuento con un taller de costura grande y bodega de vestuario. Siempre agradecida y al día con nuevas tendencias, abierta a conocer gente nueva del medio de publicidad que, en algunos casos, se vuelven grandes amigos en esta gran familia.</p>
            <p>Paulette Garda</p>
            <p><strong><a href="mailto:paulettegarda@gmail.com" className="mail-link">paulettegarda@gmail.com</a></strong></p>
            <div className="embed-container">
                <Embed videoId="bini7ZAwx1U?si=AhkWLT0ZC7iDcxhe" autoPlay />
            </div>
        </div>
    )
}

export default Bio