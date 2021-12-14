import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Nabvar from '../components/Nabvar'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Nabvar/>

            <Slider/>
            <Categories/>
            
        </div>
    )
}

export default Home
