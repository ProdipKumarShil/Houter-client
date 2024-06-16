import { useEffect, useRef } from 'react'
import FeatureCard from '../../components/Feature/FeatureCard'
import { useHouse } from '../../hooks/useHouse'
import gsap from 'gsap'

const AllHouse = () => {
  const cardRef = useRef(null)
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.featureCard', {
        y: 50,
        x: 50,
        opacity: 0,
        stagger: 0.1,
        yoyo: true,
        ease: "power3.inOut"
      })
    }, cardRef)

    return () => ctx.revert()
  }, [])
  
  const {data: houses, isLoading} = useHouse()
  if(isLoading) {
    return(
      <span className="loading loading-spinner text-error mx-auto block"></span>
    )
  }
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <p className='text-[24px] font-medium mt-7 mb-5 text-h-primary'>Apartment for rental</p>
      <div ref={cardRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          houses.map(house => <FeatureCard house={house} key={house._id} />)
        }
      </div>
    </div>
  )
}

export default AllHouse