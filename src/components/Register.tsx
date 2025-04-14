import { useForm } from "react-hook-form";
import pngProfile from "../images/pngProfile.png";
import { useStoreRegister } from "../store/store.tsx";
import { useNavigate } from "react-router-dom";

interface RegisterModel {
  fName: string;
  lName: string;
  email: string;
  password: string;
  address: string;
  agree: boolean;
}

const Register = () => {
  const setRegister = useStoreRegister((state) => state.setRegister);
  const reg = useStoreRegister((state) => state.register);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterModel>();

  const onSubmit = (data: RegisterModel) => {
    console.log(data);
    setRegister(data);
    // navigate("/projects/meals");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen space-x-6">
        <div className="flex flex-col bg-yellow-100 p-10 rounded-2xl space-y-4 shadow-lg">
          <img
            src={pngProfile}
            alt="profile"
            width="100px"
            height="200px"
            className="flex items-center justify-center mx-auto bg-white rounded-full "
          />
          <div className="flex flex-col sm:flex-row gap-x-2 gap-y-4">
            <div className="flex flex-col sm:flex-1">
              <input
                type="text"
                className="rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="First Name"
                {...register("fName", {
                  required: "First Name is required",
                })}
              />
            </div>
            <div className="flex flex-col sm:flex-1">
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                {...register("lName", {
                  required: "Last name is required",
                })}
              />
            </div>
          </div>
          {(errors.fName || errors.lName) && (
            <p className="text-red-600 text-sm mt-1">
              First and Last Name are required*
            </p>
          )}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-600 flex text-sm">
                {errors.email.message}*
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("password", {
                required: "Pasword is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 atleast characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-600 flex text-sm">
                {errors.password.message}*
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("address", {
                required: "Address is required",
              })}
            />

            {errors.address && (
              <p className="text-red-600 flex text-sm">
                {errors.address.message}*
              </p>
            )}
          </div>
          <div>
            <input
              type="checkbox"
              className="ml-4 p-2 accent-black"
              {...register("agree", {
                required: "You must agree to the terms",
              })}
            />
            <label className="text-blue-500 ml-4 ">
              <a href="#">I Agree to the Terms of Service and Privacy Policy</a>
            </label>

            {errors.agree && (
              <p className="text-red-500 mt-2">{errors.agree.message}*</p>
            )}
          </div>

          <div className="flex flex-col rounded-lg sm:flex-row sm:justify-between ">
            <button
              className="bg-red-500 rounded p-2 text-white hover:bg-red-600 mb-2"
              onClick={() => navigate("/projects")}
            >
              Back
            </button>

            <button
              className="bg-green-500 rounded p-2 text-white hover:bg-green-600 mb-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
        {reg && (
          <div className="mt-4 flex flex-col items-center justify-center text-center bg-gray-400 p-6 rounded-2xl space-y-4 shadow-lg hover:scale-105 duration-150">
            <h1 className="text-white text-2xl">
              <span className="font-bold ">Name: </span>
              {reg.fName} {reg.lName}
            </h1>

            <h2 className="text-xl">
              <span className="font-bold">Email: </span>
              {reg.email}
            </h2>

            <p>
              <span className="font-bold">Address: </span>
              {reg.address}
            </p>

            <button
              className="bg-green-500 p-2 rounded-lg hover:bg-green-400"
              onClick={() => navigate("/projects")}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Register;
