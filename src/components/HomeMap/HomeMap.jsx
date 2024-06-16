import { Link } from 'react-router-dom';
import phone from '../../assets/home/phoneInHand.png';

const HomeMap = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10">
      <div className="py-[30px] px-[20px] flex flex-col">
        <p className='text-[24px] mb-5 font-medium'>Search Your Dream House On The Map</p>
        <p>Find the house you are looking for easily according to location information.</p>
        <Link className="font-[18px] text-white rounded-md py-1 px-5 bg-my-primary mt-auto mr-auto">Search On Map</Link>
      </div>
      <div className="">
        <img className='w-full' src={phone} alt="" />
      </div>
    </div>
  )
}

export default HomeMap