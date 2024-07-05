import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './styles.css'

interface CarouselItem {
    src: string
    alt: string
    label?: string
    description?: string
}

interface CarouselProps {
    content: CarouselItem[],
    height?: number,
    large?: boolean
}

const CarouselComponent: React.FC<CarouselProps> = ({ content, height, large }) => {
    return (
        <div className={large && 'large-carousel'}>
            <Carousel variant='dark' indicators={false}>
                {content.map((item, index) => (
                    <Carousel.Item key={index} className="carousel-item">
                        <div className="carousel-image-container" style={{ height: `${height ? `${height}px` : '' }`}} >
                            <img
                                className={`carousel-image ${large && 'carousel-image-large'}`}
                                src={item.src}
                                alt={item.alt}
                            />
                        </div>
                        {(item.label || item.description) && (
                            <Carousel.Caption>
                                {item.label && <h3>{item.label}</h3>}
                                {item.description && <p>{item.description}</p>}
                            </Carousel.Caption>
                        )}
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselComponent