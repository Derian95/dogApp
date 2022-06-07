import React from 'react'
import Home from '../pages/init/Home'
import Details from '../pages/detail/Details'
import { Routes, Route, Link, BrowserRouter  } from 'react-router-dom'
import ImageRandom from '../pages/random/ImageRandom'
import ListDog from '../pages/listDogs/ListDog'

export default function Navigation() {
  return (
    <div>
   
    <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path='/Details/:dogName'  element={<Details/>} />
            <Route path='/Random'  element={<ImageRandom/>} />
            <Route path='/List'  element={<ListDog/>} />
    </Routes>
    
    </div>
       
  )
}
