import img from '../../assets/bg.jpg'

const Banner = () => {
  return (
    <div className='relative'>
      <img className='w-full h-screen brightness-75' src={img} alt="" />
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1/3">
        <h1 className='text-[48px] text-white mb-[50px] text-center'>Your dream <br /> house is here.</h1>
        <input className='input-primary input input-md w-full' type="text" name="" id="" />
      </div>
    </div>
  )
}

export default Banner