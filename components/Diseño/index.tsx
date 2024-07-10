import React, { useState, useEffect } from 'react'
import Carousel from '../Carousel/index'
import useWindowSize from '../../hooks/useWindowSize'
import './styles.css'

interface DiseñoProps {
}

const Diseño: React.FC<DiseñoProps> = () => {
    const windowSize = useWindowSize()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(windowSize.width < 768)
    }, [windowSize])

    const CarouselContent = [
        { src: '/Bocetos/Aviv.png', alt: 'Bocetos' },
        { src: '/Bocetos/Hada.jpg', alt: 'Hada' },
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
        { src: '/Victoria/Catrina.png', alt: 'Catrina' },
        { src: '/images/Bocetos/Uno.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Dos.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Tres.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Cuatro.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Cinco.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Seis.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Siete.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Ocho.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Nueve.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/Doce.png', alt: 'Bocetos' },
        { src: '/images/Bocetos/Trece.png', alt: 'Bocetos' },
        { src: '/images/Bocetos/Catorce.png', alt: 'Bocetos' },
        { src: '/images/Bocetos/Quince.jpg', alt: 'Bocetos' },
        { src: '/images/Bocetos/BoostUno.jpg', alt: 'Boost' },
        { src: '/images/Bocetos/Boost2.jpg', alt: 'Boost' },
        { src: '/images/Bocetos/Boost3.jpg', alt: 'Boost' },
        { src: '/images/Bocetos/Boost4.jpg', alt: 'Boost' },
        { src: '/images/Bocetos/Boost5.jpg', alt: 'Boost' },
        { src: '/images/Bocetos/Boost6.jpg', alt: 'Boost' }
    ]

    const FotosContent = [
        { src: '/Burning/Burning3.jpg', alt: 'Burning' },
        { src: '/Burning/Burning4.jpg', alt: 'Burning' },
        { src: '/Burning/Burning5.jpg', alt: 'Burning' },
        { src: '/Burning/Burning6.jpg', alt: 'Burning' },
        { src: '/Burning/Burning8.jpg', alt: 'Burning' },
        { src: '/Burning/Burning10.jpg', alt: 'Burning' },
        { src: '/images/Fotos/Dos.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Tres.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Cuatro.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Cinco.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Seis.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Siete.png', alt: 'Fotos' },
        { src: '/images/Fotos/Ocho.png', alt: 'Fotos' },
        { src: '/images/Fotos/Nueve.png', alt: 'Fotos' },
        { src: '/images/Fotos/Diez.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Once.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Doce.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Trece.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Catorce.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/MonstruoArie.png', alt: 'Fotos' },
        { src: '/images/Fotos/Xibalba.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Dzulum.jpg', alt: 'Fotos' },
        { src: '/images/Fotos/Sky1.jpg', alt: 'Sky' },
        { src: '/images/Fotos/Sky2.jpg', alt: 'Sky' },
        { src: '/images/Fotos/Sky4.jpg', alt: 'Sky' },
        { src: '/images/Fotos/Sky5.jpg', alt: 'Sky' },
        { src: '/images/Fotos/Sky6.png', alt: 'Sky' },
        { src: '/images/Fotos/Boost1.jpg', alt: 'Boost' }
    ]

    return (
        <div className="content diseño-container" id="diseño">
            <h3>Bocetos</h3>
            <Carousel content={CarouselContent} height={isMobile ? 400 : 800} large />
            <h3>Fotos</h3>
            <Carousel content={FotosContent} height={isMobile ? 400 : 800} large />
        </div>
    )
}

export default Diseño