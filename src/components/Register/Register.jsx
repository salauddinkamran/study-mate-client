import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log({ name, email, photo, password });
    createUser(email, password)
      .then((result) => {
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            toast(error.message);
          });
      })
      .then((res) => {
        console.log(res);
        toast("Registation successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-11/12 sm:w-8/12 md:w-6/12 xl:w-3/12 mx-auto h-screen items-center flex">
      <div className="card bg-base-100 w-full shadow-2xl">
        <div className="card-body">
          <h3 className="text-4xl font-bold text-center mb-5">Register Now!</h3>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset space-y-2">
              <div>
                <label className="label text-lg font-semibold">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                  name="name"
                />
              </div>
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
                <label className="label text-lg font-semibold">Photo URL</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Photo URL"
                  name="photo"
                />
              </div>
              <label className="label text-lg font-semibold">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
              />
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
