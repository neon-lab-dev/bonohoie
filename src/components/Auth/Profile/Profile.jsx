import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../Reusable/InputField";
import { ICONS } from "../../../assets";
import { useState } from "react";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
//   To handle the edit mode
  const [editMode, setEditMode] = useState(false);
  const [PasswordChangeMode, setPasswordChangeMode] = useState(false);

  // Mock user data (this would normally come from an API)
  const user = {
    fullName: "Rahul",
    phoneNumber: "0000000000",
    email: "rahul@gmail.com",
    password: "11111111",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });



    // API calling will be here
  const handleUpdateProfileDetails = (formData) => {
    console.log("Updated Profile Details: ", formData);
    setEditMode(false);
  };

    // Return to profile mode
  const handleCancel = () => {
    reset(user);
    setEditMode(false);
    setPasswordChangeMode(false)
  };

  return (
    <form
      onSubmit={handleSubmit(handleUpdateProfileDetails)}
      className="px-8 font-Montserrat flex flex-col gap-6 mt-[42px]"
    >
      <div className="flex flex-col gap-4">
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          placeholder=""
          register={register}
          validation={{ required: "Full Name is required" }}
          error={errors.fullName}
          disabled={!editMode} // Disable input when not in edit mode
        />

        <InputField
          label="Phone Number"
          type="text"
          id="phoneNumber"
          placeholder=""
          register={register}
          validation={{ required: "Phone Number is required" }}
          error={errors.phoneNumber}
          disabled={!editMode} // Disable input when not in edit mode
        />

        <InputField
          label="Email Address"
          type="email"
          id="email"
          placeholder=""
          register={register}
          validation={{ required: "Email is required" }}
          error={errors.email}
          disabled={!editMode} // Disable input when not in edit mode
        />

          

        {
          PasswordChangeMode ?
          <>
          <InputField
            label="Old Password"
            type="password"
            id="oldPassword"
            placeholder=""
            register={register}
            validation={{ required: "Old Password is required" }}
            error={errors.oldPassword}
          />
          <InputField
            label="New Password"
            type="password"
            id="newPassword"
            placeholder=""
            register={register}
            validation={{ required: "New Password is required" }}
            error={errors.newPassword}
          />
        </>
        :
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
          disabled={!editMode}
        />
        }
      </div>

      <div className="flex items-center gap-2">

        {
          editMode ?
          <>
            <button
              type="button"
              onClick={handleCancel}
              className="text-white px-6 py-[10px] bg-[#333] rounded-xl text-[13px] font-semibold mx-auto h-14 w-[179px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-[13px] font-semibold mx-auto h-14 w-[179px]"
            >
              Update Details
            </button>
          </>
          :
          PasswordChangeMode ?
          <>
          <button
            type="button"
            onClick={handleCancel}
            className="text-white px-6 py-[10px]  bg-[#333] rounded-xl text-[13px] font-semibold mx-auto h-14 w-[179px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-[13px] font-semibold mx-auto h-14 w-[179px]"
          >
            Change Password
          </button>
        </>
        :
        <>
            <button
              type="button"
              onClick={() => setEditMode(true)} // Enable edit mode
              className="text-white px-6 py-[10px] bg-[#333] rounded-xl text-[13px] font-semibold mx-auto h-14 w-[179px]"
            >
              Update Information
            </button>
            <button
              type="button"
              onClick={() => setPasswordChangeMode(true)} // Example function to trigger change password modal
              className="text-white px-6 py-[10px] bg-[#333] rounded-xl text-[13px] font-semibold mx-auto h-14 w-[179px]"
            >
              Change Password
            </button>
          </>
        }
      </div>
    </form>
  );
};

// PropTypes validation
Profile.propTypes = {
  setModalType: PropTypes.func.isRequired,
};

export default Profile;