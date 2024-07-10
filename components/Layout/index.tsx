import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'react-bootstrap'
import './styles.css'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showScroll, setShowScroll] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false)
        }

        if (document.readyState === 'complete') {
            setLoading(false)
        } else {
            window.addEventListener('load', handleLoad)
            return () => window.removeEventListener('load', handleLoad)
        }
    }, [])

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 200) {
            setShowScroll(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [showScroll])

    return loading ? (
        <div className="spinner-container">
            <Spinner animation="border" role="status" />
        </div>
    ) : (
        <>
            <div>
                {children}
            </div>
            <footer>
                <p>© 2024 Paulette Garda</p>
                <a href="mailto:paulettegarda@gmail.com" className="mail-link">paulettegarda@gmail.com</a>
            </footer>
            {showScroll && (
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className="scroll-top"
                    onClick={scrollTop}
                />
            )}
        </>
    )
}

export default Layout