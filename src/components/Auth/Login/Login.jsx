import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../Reusable/InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ICONS } from "../../../assets";


const Login = ({setModalType}) => {
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const handleLogin = (loginData) => {
        console.log(loginData);
      }
    return (
        <form onSubmit={handleSubmit(handleLogin)} className="px-8 font-Montserrat flex flex-col gap-6 mt-[42px]">

          <div className="flex flex-col gap-4">
            {/* Email field */}
          <InputField
          label="Email Address"
          type="text"
          id="email"
          placeholder=""
          register={register}
          validation={{ required: 'Email is required' }}
          error={errors.email}
        />


          {/* Password field */}
          <InputField
          label="Password"
          type="password"
          id="password"
          placeholder=""
          register={register}
          validation={{ required: 'Password is required' }}
          error={errors.password}
          icon={showPassword ? ICONS.eyeClosed : ICONS.eyeOpen}
          togglePasswordVisibility={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />

    
        </div>

        <Link to={"/"} className="text-base font-semibold leading-[24px] text-[#4B64E6] text-center underline">
        Forgot Password
        </Link>

        <button type="submit" className="text-white px-6 py-[10px] bg-[#333] rounded-xl text-sm font-semibold mx-auto h-14 w-[142px]">
                Login
              </button>

              <p className="text-base font-medium leading-[24px] text-[#262626] text-center">
              Don’t have an account? {" "} 
              <span onClick={() => setModalType("signup")} className="cursor-pointer text-base font-semibold leading-[24px] text-[#FF6D8B] underline">
              Register now
              </span>
                </p>   
        </form>
    );
};

// PropTypes validation
Login.propTypes = {
  setModalType: PropTypes.func.isRequired,
};

export default Login;