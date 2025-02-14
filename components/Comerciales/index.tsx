import React, { useState, useEffect } from 'react'
import Comercial from './Comercial/index'
import useWindowSize from '../../hooks/useWindowSize'
import './styles.css'

interface ComercialesProps {
}

const Comerciales: React.FC<ComercialesProps> = () => {
    const [more, setMore] = useState(false)
    const windowSize = useWindowSize()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(windowSize.width < 768)
    }, [windowSize])

    const bibmoImages = [
        { src: '/Bimbo/Espalda.jpg', alt: 'Bimbo espalda' },
        { src: '/Bimbo/Modelo.jpg', alt: 'Modelo' },
        { src: '/Bimbo/Naranja.jpg', alt: 'Bimbo Naranja' },
        { src: '/Bimbo/NaranjaSecond.jpg', alt: 'Bimbo Secundario' }
    ]

    const emperadorImages = [
        { src: '/Emperador/Emperador2.jpg', alt: 'Emperador' },
        { src: '/Emperador/Emperador3.jpg', alt: 'Emperador' },
        { src: '/Emperador/Emperador4.jpg', alt: 'Emperador' },
        { src: '/Emperador/Emperador5.jpg', alt: 'Emperador' },
        { src: '/Emperador/Emperador6.jpg', alt: 'Emperador' },
        { src: '/Emperador/Emperador7.jpg', alt: 'Emperador' },
        { src: '/Emperador/Emperador8.jpg', alt: 'Emperador' },
        { src: '/Emperador/Emperador9.jpg', alt: 'Emperador' },
        { src: '/Sexy/SexyDos.jpeg', alt: 'Emperador' },
        { src: '/Sexy/SexyCinco.jpg', alt: 'Emperador' },
        { src: '/Sexy/SexyCuatro.jpg', alt: 'Emperador' },
        { src: '/Sexy/SexySeis.jpg', alt: 'Emperador' },
        { src: '/Sexy/SexyTres.jpg', alt: 'Emperador' },
        { src: '/Sexy/SexyUno.jpg', alt: 'Emperador' }
    ]

    return (
        <>
            <div className="comerciales-div content" id="comerciales">
                <div className="comerciales-container">
                    <h3>Comerciales</h3>
                    <Comercial title="Bimbo" videoId="Kp9kwdUujeg?si=z4EQLO9HJn6Got6n" carouselContent={bibmoImages} />
                    <Comercial title="Kelsey Care" videoId="qiCl64PeFxg?si=8Vrnv_mHh3uOeJsJ" />
                    <Comercial title="Ecogas" videoId="2lfDSqiHKpk?si=9ijlNRlz4o_awvh_" />
                </div>
            </div>
            <div className="comerciales-div fourth-comerciales-block content">
                <div className="comerciales-container">
                    <Comercial title="Pepsi Uthercast" videoId="vAoN0YQT6mU?si=Jix73il6eHpuQ7Se" />
                    <Comercial title="Whitehaven" videoId="tkzYzNx8LBc?si=Kr8mz8yBV9Hux1W" />
                    <Comercial 
                        title="Emperador Vacacionista" 
                        description="Se hicieron réplicas de los trajes de los guardias, pero en fibra de vidrio y se pudieron cromar con un tratamiento especial para joyería. Esto con la finalidad de que no pesaran, ya que los perros de los trineos, que también tenían sus trajes de guardias, debían jalar los trineos con los guardias y las pieles que llevaban encima. A los guardias en el mar, las armaduras les servían de salvavidas (con hule espuma esculpida). También diseñé la única guardia mujer “Emperador”."
                        videoId="CkOvyK421fY?si=vHHEn9JopuX31USB" 
                        carouselContent={emperadorImages} 
                        height={isMobile ? 400 : 600}
                    />
                </div>
            </div>
            <div className="comerciales-div third-comerciales-block content" id="comerciales">
                <div className="comerciales-container">
                    <Comercial title="Seagrams Escapes DC" videoId="yN479H6lRtY?si=fgI0VDbEzWtMp3FD" />
                    <Comercial title="Silka Medic" videoId="tiJhMouQVgg?si=iHVf4ze06uSnXRFA" />
                    <p className="see-more" onClick={() => setMore(!more)}>Ver {more ? 'menos': 'más'}</p>
                </div>
            </div>
            {more && (
                <div className="comerciales-container comerciales-container-more">
                    <Comercial title="Naturella Happy Skin" videoId="Mw2lwn_XINg?si=OTiAH425I13TEXAW" altEmbed />
                    <Comercial title="Lucas Intenso" videoId="E98-HKMQuzU?si=M6adnvIR5TkCFSmw" altEmbed />
                    <Comercial title="Victoria 150 Años" videoId="9M41KaAkxVQ?si=mqW-atQNDRkD_AHd" altEmbed />
                    <Comercial title="Emperador Sexy" videoId="0_GDadboTck?si=cniHSJlBOVaN9EcB" altEmbed />
                    <Comercial title="McDonald's Tasty" videoId="5ArjuykxjZw?si=uXifzUdiBASsQoyL" altEmbed />
                    <Comercial title="Gamesa clásicas" videoId="f9r1-djMRVk?si=F6SzFtmZ3-rRfU7e" altEmbed />
                    <Comercial title="Tempra Boost" videoId="ewItDZonK_k" altEmbed />
                    <Comercial title="Pinol" videoId="5fgpFWbGb6s?si=9p3BV6gTTgObn3x7" altEmbed />
                    <Comercial title="Pinol Versión 2" videoId="UHYK-kwGayM?si=v9Bx4m5JGk4n7Zy2" altEmbed />
                    <Comercial title="Subway" videoId="sJjy4a3gcY8?si=QZtowT6WwTa4fN-2" altEmbed />
                    <Comercial title="Maruchan" videoId="kuar3G_16pY?si=e6PaMe0rUpN_4cFz" altEmbed />
                    <Comercial title="Maruchan Versión 2" videoId="PD62SNv67ck?si=CKAu9JiX1vydpPPo" altEmbed />
                    <Comercial title="Gansito Gold Teaser" videoId="hD1F6-08Ioo?si=JUNc3F8tVlhBSdjc" altEmbed />
                    <Comercial title="Emperador" videoId="0_GDadboTck?si=aNiU6hIiMuiISh6D" altEmbed />
                    <Comercial title="Naturella Renewal" videoId="kn1mirFnVNs?si=IuyUguc0AU2HNSDm" altEmbed />
                    <Comercial title="La Voz México" videoId="2bfERdBIsXE?si=hba-PB1qXNfYn3Za" altEmbed />
                    <Comercial title="Canelitas" videoId="dYuexqSCC7A?si=N4vxNCn9x9A3wPXu" altEmbed />
                </div>
            )}
        </>
    )
}

export default Comerciales