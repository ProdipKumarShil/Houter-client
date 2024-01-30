import logo from '../../assets/logo/houterLogo.svg'
import fb from '../../assets/icons/fb.svg'
import tw from '../../assets/icons/tw.svg'
import insta from '../../assets/icons/insta.svg'
import gradient from '../../assets/gradient/footerGradient.svg'
import gradient2 from '../../assets/gradient/footerGradient2.svg'

const Footer = () => {
  return (
    <div className="relative pb-[120px]">
      <img className='absolute right-0 bottom-0 -z-50' src={gradient} alt="" />
      <img className='absolute right-16 bottom-0 -z-50' src={gradient2} alt="" />
      <footer className="max-w-screen-xl mx-auto p-2 grid grid-cols-1 md:grid-cols-7">
        <div className=" md:col-span-3 max-w-[80%]">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" />
            <p className='font-bold text-h-primary'>Houter</p>
          </div>
          <p className='text-[#626687] mb-6'>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
          <div className="flex gap-6">
            <img src={fb} alt="" />
            <img src={tw} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
        <div className=" md:col-span-4 grid grid-cols-1 md:grid-cols-3">
          <div className="">
            <p className='text-[#0E1735] text-[18px] font-semibold mb-6'>Property</p>
            <div className="flex flex-col gap-[18px]">
              <p className='text-[#888B97] font-normal'>House</p>
              <p className='text-[#888B97] font-normal'>Apartment</p>
              <p className='text-[#888B97] font-normal'>Villa</p>
            </div>
          </div>
          <div className="">
            <p className='text-[#0E1735] text-[18px] font-semibold mb-6'>Article</p>
            <div className="flex flex-col gap-[18px]">
              <p className='text-[#888B97] font-normal'>House</p>
              <p className='text-[#888B97] font-normal'>Apartment</p>
              <p className='text-[#888B97] font-normal'>Villa</p>
            </div>
          </div>
          <div className="">
            <p className='text-[#0E1735] text-[18px] font-semibold mb-6'>Contact</p>
            <div className="flex flex-col gap-[18px]">
              <p className='text-[#888B97] font-normal'>2464 Royal Ln. Mesa, New Jersey 45463</p>
              <p className='text-[#888B97] font-normal'>(671) 555-0110</p>
              <p className='text-[#888B97] font-normal'>info@hounter.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
