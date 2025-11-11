import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = use(AuthContext);
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
        toast(error.message)
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

              <label className="label text-lg font-semibold">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login Now</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
