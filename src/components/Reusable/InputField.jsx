import PropTypes from "prop-types";

const InputField = ({
  label,
  type = "text",
  id,
  placeholder,
  register,
  validation,
  error,
  icon,
  togglePasswordVisibility,
  showPassword,
  defaultValue = "",
  ...rest
}) => {
  return (
    <div className="relative w-full rounded-xl">
      <input
        className="w-full peer rounded-lg border border-[#D1D1D1] bg-white text-[#454545] px-6 py-[18px] focus:outline-none"
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(id, validation)}
        {...rest}
      />
      <label
        className="absolute -top-2 bottom-0 left-2 h-fit ml-3 rounded-md bg-white text-xs text-[#B0B0B0] duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-xs peer-focus:text-text-[#B0B0B0]"
        htmlFor={id}
      >
        {label}
      </label>

      {type === "password" && icon && (
        <img
          onClick={togglePasswordVisibility}
          src={icon}
          alt="toggle-password-icon"
          className="cursor-pointer size-5 absolute top-[22px] right-6"
        />
      )}

      {error && (
        <span className="text-[#F82456] text-start mt-1 w-fit">{error.message}</span>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  validation: PropTypes.object,
  error: PropTypes.object,
  icon: PropTypes.string,
  togglePasswordVisibility: PropTypes.func,
  showPassword: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default InputField;
