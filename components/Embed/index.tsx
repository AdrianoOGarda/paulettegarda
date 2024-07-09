import React, { useState, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'

type YouTubeEmbedProps = {
    videoId: string, 
    altEmbed?: boolean, 
    autoPlay?: boolean
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, altEmbed = false, autoPlay = false  }) => {
    const windowSize = useWindowSize()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(windowSize.width < 768)
    }, [windowSize])

    const width = isMobile ? 340 : 650
    const height = isMobile ? 250 : 390
    const altWidth = isMobile ? 340 : 350
    const altHeight = isMobile ? 250 : 250

    const videoSrc = `https://www.youtube.com/embed/${videoId}${autoPlay ? '?autoplay=1' : ''}`

    return (
        <div className="youtube-embed">
            <iframe
                width={altEmbed ? altWidth : width}
                height={altEmbed ? altHeight : height}
                src={videoSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
            ></iframe>
        </div>
    )
}

export default YouTubeEmbed