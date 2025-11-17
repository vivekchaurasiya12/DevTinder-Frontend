import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <p className="text-center text-sm opacity-70 mb-4">
            Login to continue
          </p>

          <form className="space-y-4">
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <Button text="Login" type="submit" />
          </form>

          <p className="text-center text-sm mt-3">
            Don't have an account?{" "}
            <a className="link link-primary cursor-pointer">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
