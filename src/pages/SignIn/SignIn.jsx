import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {handleSubmit, register, reset} = useForm()
  const navigate = useNavigate()

  const handleSignIn = (value) => {
    axios.post('https://houter-server.vercel.app/user/signIn', value)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        toast.success("Logged in successfully!")
        navigate('/dashboard/allHouse')
        reset()
      })
      .catch(e => {
        toast.error('Something went wrong!')
        reset()
      })
  }
  
  return (
    <div className="max-w-screen-xl mx-auto">
      <form onSubmit={handleSubmit(handleSignIn)} className="max-w-80 mx-auto space-y-5">
        <p className="text-[24px] ">Sign In Here</p>
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Email"
          type="email"
          {...register('email')}
        />
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

export default SignIn;
