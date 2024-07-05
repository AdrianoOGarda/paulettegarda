import React from 'react'
import Carousel from '../Carousel/index'
import useWindowSize from '../../hooks/useWindowSize'
import './styles.css'

interface DiseñoProps {
}

const Diseño: React.FC<DiseñoProps> = () => {
    const windowSize = useWindowSize()
    const isDesktop = windowSize.width > 768

    const CarouselContent = [
        { src: '/Bocetos/Aviv.png', alt: 'Bocetos' },
        { src: '/Bocetos/Biografia.png', alt: 'Bocetos' },
        { src: '/Bocetos/BlueHeroes.png', alt: 'Bocetos' },
        { src: '/Bocetos/Catrina.png', alt: 'Bocetos' },
        { src: '/Bocetos/CincoPiezas.png', alt: 'Bocetos' },
        { src: '/Bocetos/Colorless.png', alt: 'Bocetos' },
        { src: '/Bocetos/Comerciales.png', alt: 'Bocetos' },
        { src: '/Bocetos/Cronchers.png', alt: 'Bocetos' },
        { src: '/Bocetos/DibujoDos.png', alt: 'Bocetos' },
        { src: '/Bocetos/DibujoUno.png', alt: 'Bocetos' },
        { src: '/Bocetos/Diseño1.png', alt: 'Bocetos' },
        { src: '/Bocetos/Diseño6.png', alt: 'Bocetos' },
        { src: '/Bocetos/GreenHeroes.png', alt: 'Bocetos' },
        { src: '/Bocetos/Heroes.png', alt: 'Bocetos' },
        { src: '/Bocetos/Maya.png', alt: 'Bocetos' },
        { src: '/Bocetos/Nameless.png', alt: 'Bocetos' },
        { src: '/Bocetos/NamelessDos.png', alt: 'Bocetos' },
        { src: '/Bocetos/Orange.png', alt: 'Bocetos' },
        { src: '/Bocetos/ThreeGirls.png', alt: 'Bocetos' },
        { src: '/Bocetos/TresPiezas.png', alt: 'Bocetos' },
        { src: '/Bocetos/TresPiezasDos.png', alt: 'Bocetos' },
        { src: '/Bocetos/TresPiezasTres.png', alt: 'Bocetos' },
        { src: '/Bocetos/Viernes26.png', alt: 'Bocetos' },
        { src: '/Bocetos/Yellow.png', alt: 'Bocetos' },
        { src: '/Bocetos/YellowDos.png', alt: 'Bocetos' },
    ]

    const FotosContent = [
        { src: '/Bocetos/Aviv.png', alt: 'Bocetos' }
    ]

    return (
        <div className="content" id="diseño">
            <h3>Diseño</h3>
            <Carousel content={CarouselContent} height={isDesktop ? 800 : 400} large />
            <h3>Fotos</h3>
            <Carousel content={CarouselContent} height={isDesktop ? 800 : 400} large />
        </div>
    )
}

export default Diseño