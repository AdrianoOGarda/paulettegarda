import { useState, useEffect } from 'react'
import { responsiveMap } from '../../helpers/responsive'

interface WindowSize {
    width: number
    height: number
    size: string | undefined
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
        size: 'unknown', // default to 'unknown' or any default value that makes sense
    })

    const toCssSize = (width: number): string | undefined => {
        const sizes = Object.keys(responsiveMap)
            .filter(n => width <= Number(n) && responsiveMap[Number(n)])
            .map(n => responsiveMap[Number(n)])[0]

        return sizes
    }

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                size: toCssSize(window.innerWidth),
            })
        }

        window.addEventListener('resize', handleResize)
        // Call handleResize initially to set the initial state
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export default useWindowSize