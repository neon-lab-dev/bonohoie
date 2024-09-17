import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../Reusable/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ICONS } from "../../../assets";
import { useLoginMutation } from "../../../redux/Features/Auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/Features/Auth/authSlice";
import { toast } from "sonner";

const Login = ({ setModalType, setOpenModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading: isLoginIn }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await login(loginData).unwrap();
      console.log(res);
      const user = res.user;
      toast.success("Logged in successfully.");
      setOpenModal(dispatch(setOpenModal(false)));
      navigate('/')
      dispatch(setUser({ user }));
    } catch (err) {
      toast.error("Invalid email or password!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="px-8 font-Montserrat flex flex-col gap-6 mt-[42px]"
    >
      <div className="flex flex-col gap-4">
        {/* Email field */}
        <InputField
          label="Email Address"
          type="text"
          id="email"
          placeholder=""
          register={register}
          validation={{ required: "Email is required" }}
          error={errors.email}
        />

        {/* Password field */}
        <InputField
          label="Password"
          type="password"
          id="password"
          placeholder=""
          register={register}
          validation={{ required: "Password is required" }}
          error={errors.password}
          icon={showPassword ? ICONS.eyeClosed : ICONS.eyeOpen}
          togglePasswordVisibility={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />
      </div>

      <Link
        to={"/"}
        className="text-base font-semibold leading-[24px] text-[#4B64E6] text-center underline"
      >
        Forgot Password
      </Link>

      <button
        type="submit"
        className={`${
          isLoginIn ? "animate-pulse" : ""
        } text-white px-6 py-[10px] bg-[#333] rounded-xl text-sm font-semibold mx-auto h-14 w-[142px]`}
      >
        {isLoginIn ? "Loading..." : "Login"}
      </button>

      <p className="text-base font-medium leading-[24px] text-[#262626] text-center">
        Don’t have an account?{" "}
        <span
        
          onClick={() => setModalType(dispatch(setModalType("signup")))}
          className="cursor-pointer text-base font-semibold leading-[24px] text-[#FF6D8B] underline"
        >
          Register now
        </span>
      </p>
    </form>
  );
};

// PropTypes validation
Login.propTypes = {
  setModalType: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Login;
