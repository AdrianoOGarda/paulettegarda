import React, { useState, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'

type YouTubeEmbedProps = {
    videoId: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
    const windowSize = useWindowSize()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(windowSize.width < 768)
    }, [windowSize])

    const width = isMobile ? 340 : 650
    const height = isMobile ? 250 : 390

    return (
        <div className="youtube-embed">
            <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
            ></iframe>
        </div>
    )
}

export default YouTubeEmbed