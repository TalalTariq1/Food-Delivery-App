import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from '../components/AppDownload'

const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    
    <div >
     <Header/>
     <ExploreMenu category={category} setcategory={setcategory}/>
     <FoodDisplay category={category} setcategory={setcategory}/>
     <AppDownload/>
    </div>
  )
}

export default Home
