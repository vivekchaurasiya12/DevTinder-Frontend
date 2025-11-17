
const InputField = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default InputField;
