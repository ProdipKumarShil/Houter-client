import { useState } from "react";
import img from "../../assets/home/bg.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <img className="w-full h-screen brightness-75" src={img} alt="" />
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1/3">
        <h1 className="text-[48px] text-white mb-[50px] text-center">
          Your dream <br /> house is here.
        </h1>
        <SearchInput />
      </div>
    </div>
  );
};

export default Banner;

const SearchInput = () => {
  const [result, setResult] = useState([])
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    axios.get('http://localhost:5000/house/allHouse')
      .then(res => {
        const data = res.data
        const result = data.filter((house) => value && house && house.name && house.name.toLowerCase().includes(value))
        setResult(result)
      })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  
  return (
    <div className="relative">
      <input
        className="input-primary input input-md w-full"
        type="text"
        placeholder="Search Homes..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      {/* houses */}
      <div className="absolute left-0 right-0 top-14">
        {
          result.map(house => <HouseCompo id={house._id} name={house.name} price={house.price} key={house._id} />)
        }
      </div>
    </div>
  );
};

const HouseCompo = ({id, name, price}) => {
  return (
    <Link to={`/house/${id}`} className="bg-white flex justify-between p-2 rounded-lg shadow-xl border-b">
      <p className="font-bold text-my-secondary">{name}</p>
      <p className="font-bold text-my-secondary">{price}$</p>
    </Link>
  );
};
