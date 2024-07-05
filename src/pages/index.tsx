import React from 'react'
import Layout from '../../components/Layout/index'
import Nav from '../../components/Nav/index'
import Bio from '../../components/Bio/index'
import Comerciales from '../../components/Comerciales/index'
import Cine from '../../components/Cine/index'
import Diseño from '../../components/Diseño/index'

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
    return (
        <Layout>
            <Nav />
            <Bio />
            <Comerciales />
            <Cine />
            <Diseño />
        </Layout>
    )
}

export default Home