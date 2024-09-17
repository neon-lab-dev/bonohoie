import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../Reusable/InputField";
import { useSignupMutation } from "../../../redux/Features/Auth/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/Features/Auth/authSlice";

const Signup = ({ setModalType, setOpenModal }) => {
  const dispatch = useDispatch();
  const [signup, {isLoading:isRegistering}] = useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data) => {
    const signupData = {
      full_name : data.full_name,
      email : data.email,
      phoneNo: data.phoneNo,
      password : data.password,
      confirm_password : data.confirm_password
    };
    try{
      const res = await signup(signupData).unwrap();
      const user = res.user;
      toast.success("Registered successfully.");
      setOpenModal(false);
      dispatch(setUser({ user }));
    }catch(err){
      toast.error("Failed to register. Please try again.");
      console.log(err.message);
    }
  };


  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="px-8 font-Montserrat flex flex-col gap-6 mt-[42px]"
    >
      <div className="flex flex-col gap-4">
        {/* Full Name */}
        <InputField
          label="Full Name"
          type="text"
          id="full_name"
          placeholder=""
          register={register}
          validation={{ required: "Full Name is required" }}
          error={errors.full_name}
        />

        {/* Phone Number */}
        <InputField
          label="Phone Number"
          type="text"
          id="phoneNo"
          placeholder=""
          register={register}
          validation={{ required: "Phone Number is required" }}
          error={errors.phoneNo}
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
          id="password"
          placeholder=""
          register={register}
          validation={{ required: "Password is required" }}
          error={errors.password}
        />

        {/* Retype Password */}
        <InputField
          label="Retype Password"
          type="password"
          id="confirm_password"
          placeholder=""
          register={register}
          validation={{ required: "Please retype your password" }}
          error={errors.confirm_password}
        />

        {/* Password field */}
      </div>

      <button
        type="submit"
        className={`${isRegistering ? "animate-pulse" : ""} text-white px-6 py-[10px] bg-[#333] rounded-xl text-sm font-semibold mx-auto h-14 w-[142px]`}
      >
        {
          isRegistering? "Loading...": "Register"
        }
        
      </button>

      <p className="text-base font-medium leading-[24px] text-[#262626] text-center">
        Already a member?{" "}
        <span
          onClick={() => setModalType(dispatch(setModalType("login")))}
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
  setOpenModal: PropTypes.func.isRequired,
};

export default Signup;
