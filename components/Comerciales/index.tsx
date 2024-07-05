import React from 'react'
import Comercial from './Comercial/index'
import './styles.css'

interface ComercialesProps {
}

const Comerciales: React.FC<ComercialesProps> = () => {
    const bibmoImages = [
        { src: '/Bimbo/Espalda.jpg', alt: 'Bimbo espalda' },
        { src: '/Bimbo/Modelo.jpg', alt: 'Modelo' },
        { src: '/Bimbo/Naranja.jpg', alt: 'Bimbo Naranja' },
        { src: '/Bimbo/NaranjaSecond.jpg', alt: 'Bimbo Secundario' }
    ]

    const victoriaImages = [
        { src: '/Victoria/Catrina.png', alt: 'Victoria catrina' },
        { src: '/Victoria/VictoriaDos.jpg', alt: 'Victoria' },
        { src: '/Victoria/VictoriaTres.jpg', alt: 'Victoria' },
        { src: '/Victoria/VictoriaUno.jpg', alt: 'Victoria' }
    ]

    const sexyImages = [
        { src: '/Sexy/Catrina.png', alt: 'Victoria catrina' },
        { src: '/Victoria/VictoriaDos.jpg', alt: 'Victoria' },
        { src: '/Victoria/VictoriaTres.jpg', alt: 'Victoria' },
        { src: '/Victoria/VictoriaUno.jpg', alt: 'Victoria' }
    ]

    return (
        <>
            <div className="comerciales-div content" id="comerciales">
                <div className="comerciales-container">
                    <h3>Comerciales</h3>
                    <Comercial title="Whitehaven" videoId="tkzYzNx8LBc?si=Kr8mz8yBV9Hux1W" />
                    <Comercial title="Seagrams Escapes DC" videoId="yN479H6lRtY?si=fgI0VDbEzWtMp3FD" />
                    <Comercial title="Kelsey Care" videoId="qiCl64PeFxg?si=8Vrnv_mHh3uOeJsJ" />
                </div>
            </div>
            <div className="comerciales-div fourth-comerciales-block content">
                <div className="comerciales-container">
                    <Comercial title="Bimbo" videoId="Kp9kwdUujeg?si=z4EQLO9HJn6Got6n" carouselContent={bibmoImages} />
                    <Comercial title="Ecogas" videoId="2lfDSqiHKpk?si=9ijlNRlz4o_awvh_" />
                    <Comercial title="Canelitas" videoId="dYuexqSCC7A?si=2k4wID8__p2yFfoP" />
                </div>
            </div>
            <div className="comerciales-div third-comerciales-block content" id="comerciales">
                <div className="comerciales-container">
                    <Comercial title="Silka Medic" videoId="tiJhMouQVgg?si=iHVf4ze06uSnXRFA" />
                    <Comercial title="Pepsi Uthercast" videoId="vAoN0YQT6mU?si=Jix73il6eHpuQ7Se" />
                    <Comercial title="Pinol" videoId="5fgpFWbGb6s?si=9p3BV6gTTgObn3x7" />
                </div>
            </div>
            <div className="comerciales-div second-comerciales-block content">
                <div className="comerciales-container">
                    <Comercial title="Pinol Versión 2" videoId="UHYK-kwGayM?si=v9Bx4m5JGk4n7Zy2" />
                    <Comercial title="Subway" videoId="sJjy4a3gcY8?si=QZtowT6WwTa4fN-2" />
                    <Comercial title="Maruchan" videoId="kuar3G_16pY?si=e6PaMe0rUpN_4cFz" />
                </div>
            </div>
            <div className="comerciales-div fifth-comerciales-block content">
                <div className="comerciales-container">
                    <Comercial title="Maruchan Versión 2" videoId="PD62SNv67ck?si=CKAu9JiX1vydpPPo" />
                    <Comercial title="McDonald's Tasty" videoId="5ArjuykxjZw?si=uXifzUdiBASsQoyL" />
                    <Comercial title="Gansito Gold Teaser" videoId="hD1F6-08Ioo?si=JUNc3F8tVlhBSdjc" />
                </div>
            </div>
            <div className="comerciales-div sixth-comerciales-block content">
                <div className="comerciales-container">
                    <Comercial title="Gamesa clásicas" videoId="f9r1-djMRVk?si=F6SzFtmZ3-rRfU7e" />
                    <Comercial title="Emperador" videoId="0_GDadboTck?si=aNiU6hIiMuiISh6D" />
                    <Comercial title="Naturella Happy Skin" videoId="Mw2lwn_XINg?si=OTiAH425I13TEXAW" />
                </div>
            </div>
            <div className="comerciales-div seventh-comerciales-block content">
                <div className="comerciales-container">
                    <Comercial title="Naturella Renewal" videoId="kn1mirFnVNs?si=IuyUguc0AU2HNSDm" />
                    <Comercial 
                        title="Victoria 150 Años" 
                        videoId="9M41KaAkxVQ?si=mqW-atQNDRkD_AHd" 
                        carouselContent={victoriaImages}
                        height={600}
                    />
                    <Comercial title="La Voz México" videoId="2bfERdBIsXE?si=hba-PB1qXNfYn3Za" />
                </div>
            </div>
        </>
    )
}

export default Comerciales