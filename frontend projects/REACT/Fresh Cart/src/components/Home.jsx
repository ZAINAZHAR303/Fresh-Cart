import React from 'react'
import TopBar from './Navbar/TopBar' 
import ImageSlider from './ImageSlider/ImageSlider'
import ApiTest from './ApiTest'
import Posters from './Posters'
import PopularProducts from './PopularProducts'
import BestSells from './BestSells'
import Features from './Features'

function Home() {


  
  return (
    <div>
      <TopBar />
      <ImageSlider/>
      <ApiTest />
      <Posters />
      <PopularProducts />
      <BestSells />
      <Features />
      
    </div>
  )
}


export default Home
