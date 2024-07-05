import React from 'react'
import { Fade } from 'react-awesome-reveal'
import ScrollIntoView from 'react-scroll-into-view'
import './styles.css'

interface NavCardProps {
    title: string, 
    type: string, 
    selector: string, 
    delay: number
}

const NavCard: React.FC<NavCardProps> = ({ title, type, selector, delay }) => {
    return (
        <ScrollIntoView selector={`#${selector}`}>
            <Fade delay={delay}>
                <div 
                    className={`nav-card nav-card-${type}`}             
                >
                    <p>{title}</p>
                </div>
            </Fade>
        </ScrollIntoView>
    )
}

export default NavCard