const SignUp = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-80 mx-auto space-y-5">
        <p className="text-[24px] ">Sign Up Here</p>
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Name"
          type="text"
        />
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Email"
          type="email"
        />
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Phone"
          type="number"
        />
        <select className="border border-my-secondary p-3 rounded-lg w-full" name="role">
          <option value='' >Select a role</option>
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
          
        </select>
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Password"
          type="password"
        />
        <button className=" bg-my-primary text-white py-3 rounded-lg w-full font-bold">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
