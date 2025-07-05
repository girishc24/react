import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobPage from './pages/JobPage'
import NotFound from './pages/NotFound'
import JobPageDetails from './pages/JobPageDetails'
import AddJobPage from './pages/AddJobPage'
import EditJob from './pages/EditJob'

const addJob =  async (newJob) => {
  const res  = await fetch('/api/jobs', {
    method : 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newJob)
  });
  return;
};

const deleteJob = async(id) => {
  const res  = await fetch(`/api/jobs/${id}`, {
    method : 'DELETE',
  });
  return;
}

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='jobs' element={<JobPage />} />
      <Route path='jobs/:id' element={<JobPageDetails deleteJob={ deleteJob} />} />
      <Route path='add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='edit-jobs/:id' element={<EditJob />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={Router} />
}

export default App
