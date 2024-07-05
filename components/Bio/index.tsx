import React from 'react'
import Image from 'react-bootstrap/Image'
import './styles.css'

interface BioProps {
}

const Bio: React.FC<BioProps> = () => {
    return (
        <div id="bio" className="bio-container content">
            <div className="bio-title-container">
                <div className="round-image">
                    <img src="/Bio/Poli.jpg" />
                </div>
                <h3>Biografía</h3>
            </div>
            <p>Nací en 1965 en la Ciudad de México, hija de padre italiano y madre guatemalteca, en una familia de artistas. Desde pequeña, sentí una gran inquietud por la moda. A los 19 años, mi mejor amiga me contó que había estudiado diseño de modas en Italia, algo que desconocía. En ese momento, yo estudiaba contabilidad en el TEC de Monterrey, siguiendo el consejo de mi padre. Al enterarme de la existencia de la carrera de diseño de modas, me llené de emoción y, con el apoyo incondicional de mi madre, decidí cambiar de rumbo y estudiar diseño de modas en la Universidad Janette Klein. Mi padre, preocupado por mi futuro, dejó de hablarme durante dos años.</p>
            <p>Durante mis estudios en Janette Klein, Fredy Garza, un amigo de la adolescencia, llegó un día a mi casa y me pidió ayuda con un proyecto. Para mi sorpresa, me encontré en un set de producción de comerciales, un mundo lleno de glamour, moda y oportunidades que no conocía. Fue una experiencia que me permitió expresar mi talento y pasión por la moda, desde mis bocetos en papel hasta las prendas terminadas en los sets de producción.</p>
            <p>Agradezco a la vida por darme la oportunidad de realizarme como diseñadora de modas, un sueño que tuve desde mi niñez. Mi carrera me ha llevado a ser vestuarista de comerciales, videos y desfiles de moda. Quiero agradecer a todas las personas que se toman el tiempo de leer esta pequeña biografía. Desde 1988, he estado involucrada en proyectos relacionados con la moda y el vestuario.</p>
            <p>A lo largo de 28 años, he trabajado en videoclips, desfiles y comerciales. Estoy a sus órdenes para cualquier proyecto futuro.</p>
            <p><strong>Idiomas:</strong> Inglés, Hebreo y Español.</p>
            <p><strong><a href="mailto:paulettegarda@gmail.com" className="mail-link">paulettegarda@gmail.com</a></strong></p>
        </div>
    )
}

export default Bio