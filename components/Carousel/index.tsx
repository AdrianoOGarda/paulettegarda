import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
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
    const [showModal, setShowModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState<CarouselItem | null>(null)

    const handleImageClick = (item: CarouselItem) => {
        setSelectedImage(item)
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
        setSelectedImage(null)
    }

    return (
        <>
            <div className={large ? 'large-carousel' : ''}>
                <Carousel variant='dark' indicators={false}>
                    {content.map((item, index) => (
                        <Carousel.Item key={index} className="carousel-item">
                            <div className="carousel-image-container" style={{ height: `${height ? `${height}px` : '' }`}} >
                                <img
                                    className={`carousel-image ${large ? 'carousel-image-large' : ''}`}
                                    src={item.src}
                                    alt={item.alt}
                                    onClick={() => handleImageClick(item)}
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

            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Body>
                    {selectedImage && (
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="img-fluid"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CarouselComponent