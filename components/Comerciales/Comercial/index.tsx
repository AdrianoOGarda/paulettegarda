import React from 'react'
import Embed from '../../Embed/index'
import Carousel from '../../Carousel/index'
import './styles.css'

interface CarouselItem {
    src: string
    alt: string
    label?: string
    description?: string
}

interface ComercialProps {
    title: string 
    videoId?: string,
    height?: number,
    darkMode?: boolean,
    carouselContent?: CarouselItem[]
}

const Comercial: React.FC<ComercialProps> = ({ title, videoId, carouselContent, height, darkMode }) => {
    return (
        <div className="comercial-card">
            <h4 className={darkMode && 'dark-h4'}>{title}</h4>
            {carouselContent && carouselContent.length > 0 && (
                <Carousel content={carouselContent} height={height} />
            )}
            {videoId && <Embed videoId={videoId} />}
        </div>
    )
}

export default Comercial