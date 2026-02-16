import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let submitForm = (formData) => {
    let { email, ...rest } = formData;
    let text = "ajab";
    let tokenBuild = text + Math.random().toString().slice(2, 6);
    let token = {
      isValid: true,
      tokId: `${email}${tokenBuild}`,
    };
    localStorage.setItem("token", JSON.stringify(token));
    let getToken = JSON.parse(localStorage.getItem("token"));
    if (getToken.isValid) {
      navigate("/");
    }
    reset();
  };

  return (
    <div className="h-screen w-full bg-[#0B0F19] flex items-center justify-center">
      <div className="w-[520px] bg-white/5 backdrop-blur-xl rounded-2xl px-12 py-14 shadow-2xl">
        <h2 className="text-[32px] font-semibold text-white text-center mb-3">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mb-10">Login to your account</p>

        <form
          action=""
          className="space-y-5"
          onSubmit={handleSubmit(submitForm)}
        >
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-[52px] px-5 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            {...register("email", { required: "Email Required" })}
          />
          {errors.userEmail ? (
            <p className="text-sm text-red-400">{errors.userEmail.message}</p>
          ) : (
            <p className=" h-3"></p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="w-full h-[52px] px-5 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            {...register("password", { required: "Password Required" })}
          />
          {errors.password ? (
            <p className="text-sm text-red-400">{errors.password.message}</p>
          ) : (
            <p className=" h-3"></p>
          )}

          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-500" />
              Remember me
            </label>

            <span className="hover:text-white cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full h-[52px] rounded-lg text-white font-medium
          bg-gradient-to-r from-[#FF7AC6] to-[#7A5CFF] hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-10">
          Don’t have an account?{" "}
          <span className="text-purple-400 hover:text-white cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
