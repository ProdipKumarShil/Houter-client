import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {register, handleSubmit, reset} = useForm()
  const navigate = useNavigate()
  const handleForm = (data) => {
    axios.post('https://houter-server.vercel.app/user/signUp', data)
      .then(res => {
        toast.success('Sign Up Successful!')
        navigate('/dashboard/allHouse')
        reset()
        localStorage.setItem("user", JSON.stringify(data))
      })
      .catch(e => {
        toast.error(e.message)
      })
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <form onSubmit={handleSubmit(handleForm)} className="max-w-80 mx-auto space-y-5">
        <p className="text-[24px] ">Sign Up Here</p>
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Name"
          type="text"
          {...register('name')}
        />
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Email"
          type="email"
          {...register('email')}
        />
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Phone"
          type="number"
          {...register('number')}
        />
        <select  {...register('role')} className="border border-my-secondary p-3 rounded-lg w-full" name="role">
          <option value='' >Select a role</option>
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
          
        </select>
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Password"
          type="password"
          {...register('password')}
        />
        <button className=" bg-my-primary text-white py-3 rounded-lg w-full font-bold">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
