import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const handleForm = (data) => {
    const formData = new FormData();
    formData.append("image", data.img[0]);

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`,
        formData
      )
      .then((res) => {
        const userData = {
          name: data.name,
          email: data.email,
          password: data.password,
          img: res.data.data.url,
          phone: data.phone,
          role: data.role,
        };
        if (res.data.success) {
          axios
            .post("https://houter-server.vercel.app/user/signUp", userData)
            .then((res) => {
              if (res.data.status) {
                toast.success("Signup successfully");
                reset();
                localStorage.clear()
                navigate("/signIn");
              } else {
                toast.success("Something went wrong");
              }
            });
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="max-w-80 mx-auto space-y-5">
        <p className="text-[24px] ">Sign Up Here</p>
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Name"
          type="text"
          {...register("name")}
        />
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Email"
          type="email"
          {...register("email")}
        />
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Phone"
          type="number"
          {...register("number")}
        />
        <input
          type="file"
          {...register("img")}
          className="border border-my-secondary file-input file-input-success file-input-bordered w-full "
        />
        <select
          {...register("role")}
          className="border border-my-secondary p-3 rounded-lg w-full"
          name="role">
          <option value="">Select a role</option>
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
        </select>
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Password"
          type="password"
          {...register("password")}
        />
        <p className="text-xs">Already have an account <Link className="text-h-secondary underline" to='/signIn'>Sign In</Link></p>
        <button className=" bg-h-secondary text-white py-3 rounded-lg w-full font-bold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
