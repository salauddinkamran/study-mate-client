import React, { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const [show, setShow] = useState(false);
  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    signInUser(email, password)
      .then((res) => {
        console.log(res);
        toast("Login Successfully!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast("SignIn Successfully");
        console.log(result.user);
      })
      .cathc((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="w-11/12 sm:w-8/12 md:w-6/12 xl:w-3/12 mx-auto h-screen items-center flex">
      <div className="card bg-base-100 w-full shadow-2xl">
        <div className="card-body">
          <h3 className="text-4xl font-bold text-center mb-5">Login Now!</h3>
          <form onSubmit={handleSignInUser}>
            <fieldset className="fieldset space-y-2">
              <div>
                <label className="label text-lg font-semibold">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div>
                <label className="label text-lg font-semibold">Password</label>
                <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  className="input w-full"
                  placeholder="Password"
                  name="password"
                  />
                  <span className="absolute top-3 right-3 text-base cursor-pointer" onClick={() => setShow(!show)}>{ show ? <FaEye/> : <FaEyeSlash/>}</span>
                </div>

              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login Now</button>
            </fieldset>
          </form>
          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
