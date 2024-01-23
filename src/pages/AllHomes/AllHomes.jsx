import React from 'react'
import FeatureCard from '../../components/Feature/FeatureCard'

const AllHomes = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <p className='text-[24px] font-medium mt-7 mb-5'>Apartment for rental</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  )
}

export default AllHomes