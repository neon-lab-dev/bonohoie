import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../Reusable/InputField";

const Signup = ({ setModalType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (loginData) => {
    console.log(loginData);
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="px-8 font-Montserrat flex flex-col gap-6 mt-[42px]"
    >
      <div className="flex flex-col gap-4">
        {/* Full Name */}
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          placeholder=""
          register={register}
          validation={{ required: "Full Name is required" }}
          error={errors.fullName}
        />

        {/* Phone Number */}
        <InputField
          label="Phone Number"
          type="text"
          id="phoneNumber"
          placeholder=""
          register={register}
          validation={{ required: "Phone Number is required" }}
          error={errors.phoneNumber}
        />

        {/* Email Address */}
        <InputField
          label="Email Address"
          type="email"
          id="email"
          placeholder=""
          register={register}
          validation={{ required: "Email is required" }}
          error={errors.email}
        />

        {/* Create Password */}
        <InputField
          label="Create Password"
          type="password"
          id="createPassword"
          placeholder=""
          register={register}
          validation={{ required: "Password is required" }}
          error={errors.createPassword}
        />

        {/* Retype Password */}
        <InputField
          label="Retype Password"
          type="password"
          id="retypePassword"
          placeholder=""
          register={register}
          validation={{ required: "Please retype your password" }}
          error={errors.retypePassword}
        />

        {/* Password field */}
      </div>

      <button
        type="submit"
        className="text-white px-6 py-[10px] bg-[#333] rounded-xl text-sm font-semibold mx-auto h-14 w-[142px]"
      >
        Register
      </button>

      <p className="text-base font-medium leading-[24px] text-[#262626] text-center">
        Already a member?{" "}
        <span
          onClick={() => setModalType("login")}
          className="cursor-pointer text-base font-semibold leading-[24px] text-[#FF6D8B] underline"
        >
          Login
        </span>
      </p>
    </form>
  );
};

// PropTypes validation
Signup.propTypes = {
  setModalType: PropTypes.func.isRequired,
};

export default Signup;
