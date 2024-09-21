import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import InputField from "../../Reusable/InputField";
import { ICONS } from "../../../assets";
import { useEffect, useState } from "react";
import { useGetMeQuery, useUpdateProfileMutation } from "../../../redux/Features/Auth/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/Features/Auth/authSlice";
import ModalInnerContainer from "../../Reusable/ModalInnerContainer";

const Profile = () => {

  const dispatch = useDispatch();

  const {data:myProfile, isLoading:isProfileLoading} = useGetMeQuery();
  const [updateProfile, {isLoading:isProfileUpdating}] = useUpdateProfileMutation();

  console.log(myProfile);
  const [showPassword, setShowPassword] = useState(false);
//   To handle the edit mode
  const [editMode, setEditMode] = useState(false);
  const [PasswordChangeMode, setPasswordChangeMode] = useState(false);

  // Mock user data (this would normally come from an API)
  const user = {
    fullName: myProfile?.user?.full_name,
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
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (myProfile) {
      reset({
        fullName: myProfile?.user?.full_name || "",
        phoneNumber: myProfile?.user?.phoneNo || "",
        email: myProfile?.user?.email || "",
        password: "*******",
      });
    }
  }, [myProfile, reset]);



    // Update profile
    const handleUpdateProfileDetails = async (data) => {
      const formData = new FormData();
    
      // Append the form fields
      formData.append("full_name", data.fullName);
      formData.append("email", data.email);
      formData.append("phoneNo", data.phoneNumber);
      
      if (PasswordChangeMode) {
        formData.append("password", data.password);
        formData.append("confirm_password", data.confirmPassword); // if you have a confirmation field
      }
    
      try {
        const res = await updateProfile(formData).unwrap();
        const user = res.user;
        toast.success("Profile updated successfully.");
        dispatch(setUser({ user }));
      } catch (err) {
        toast.error("Failed to update profile. Please try again.");
        console.log(err.message);
      }
    };
    



    // Return to profile mode
  const handleCancel = () => {
    reset(user);
    setEditMode(false);
    setPasswordChangeMode(false)
  };

  return (
    <ModalInnerContainer>
      <form
      onSubmit={handleSubmit(handleUpdateProfileDetails)}
      className="font-Montserrat flex flex-col gap-6"
    >
        {
          isProfileLoading
?
    <div className="flex flex-col gap-5">
      {
        [1,2,3,4,5].map((_, index) => 
          <div key={index} className="w-full rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 h-16 animate-pulse">
    </div>
        )   
      }
    </div>

    :

    


    <div>
      <div className="flex flex-col gap-4">
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          placeholder=""
          register={register}
          validation={{ required: "Full Name is required" }}
          error={errors.fullName}
          disabled={!editMode}
        />

        <InputField
          label="Phone Number"
          type="text"
          id="phoneNumber"
          placeholder=""
          register={register}
          validation={{ required: "Phone Number is required" }}
          error={errors.phoneNumber}
          disabled={!editMode}
        />

        <InputField
          label="Email Address"
          type="email"
          id="email"
          placeholder=""
          register={register}
          validation={{ required: "Email is required" }}
          error={errors.email}
          disabled={!editMode}
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

      <div className="flex items-center gap-2 mt-6">

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
              className={`${isProfileUpdating ? "animate-pulse" : ""} text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-[13px] font-semibold mx-auto h-14 w-[179px]`}
            >
              {
                isProfileUpdating? "Updating..." : "Update Details"
              }
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
              className="text-white px-5 py-[10px] bg-[#333] rounded-xl text-xs font-semibold mx-auto h-14 w-[179px]"
            >
              Update Information
            </button>
            <button
              type="button"
              onClick={() => setPasswordChangeMode(true)} // Example function to trigger change password modal
              className="text-white px-5 py-[10px] bg-[#333] rounded-xl text-xs font-semibold mx-auto h-14 w-[179px]"
            >
              Change Password
            </button>
          </>
        }
      </div>
      </div>
          }
    </form>
    </ModalInnerContainer>
  );
};

// PropTypes validation
Profile.propTypes = {
  setModalType: PropTypes.func.isRequired,
};

export default Profile;