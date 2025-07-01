import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router"
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobPage from './pages/JobPage'
import NotFound from './pages/NotFound'
import JobPageDetails from './pages/JobPageDetails'
import AddJobPage from './pages/AddJobPage'

const Router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}> 
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobPage/>} />
      <Route path='/jobs/:id' element={<JobPageDetails/>} />
      <Route path='/add-job' element={<AddJobPage/>}/>
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={Router}/>
  )
}

export default App
