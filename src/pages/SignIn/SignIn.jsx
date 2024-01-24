const SignIn = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-80 mx-auto space-y-5">
        <p className="text-[24px] ">Sign In Here</p>
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Email"
          type="email"
        />
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

export default SignIn;
