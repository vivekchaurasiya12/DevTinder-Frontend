
const Button = ({
  text,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-primary w-full ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
