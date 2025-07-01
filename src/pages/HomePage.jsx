import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListings'
import VIewAllJobs from '../components/VIewAllJobs'

const HomePage = () => {
  return (
    <div>
    <Hero />
    <HomeCards/>
    <JobListing isHome={true}/>
    <VIewAllJobs/>
    </div>
  )
}

export default HomePage
