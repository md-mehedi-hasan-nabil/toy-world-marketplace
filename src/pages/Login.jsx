import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.svg";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Context/AuthProvider";

export default function Login() {
  const location = useLocation();
  const { loginUser, googleLogin, githubLogin, user } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // from - redirect
  const redirectLocation = location?.state?.from?.pathname || "/";

  // google provider
  const googleProvider = new GoogleAuthProvider();
  // github provider
  const githubProvider = new GithubAuthProvider();

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // handle google sign in
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        // naviagte to the location
        navigate(redirectLocation);
      })
      .catch((err) => console.log(err.message));
  };

  // handle github login
  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then((res) => {
        console.log(res.user);
        navigate(redirectLocation);
      })
      .catch((err) => console.log(err?.message));
  };

  // sign in user
  const handleLogin = (e) => {
    // preventing refreshing
    e.preventDefault();
    setLoginError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    // login user
    loginUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        toast.success("Login Successfull");

        // redirected to main location
        navigate(redirectLocation);
      })
      .catch((err) => {
        if (err?.message) {
          setLoginError("Please insert correct email and password!");
        }
      });

    e.target.reset();
  };

  document.title = "Tasty Cooks | Login Page";

  return (
    <section className="container hero min-h-screen bg-base-200">
      <div className="flex justify-center items-start">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-primary mb-2">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>

              <p className="text-sm mt-2">
                Don’t have an account?{" "}
                <Link className="hover:text-blue-600" to="/register">
                  Create an account
                </Link>
              </p>
              <div className="form-control mt-3">
                <button className="btn btn-primary rounded-full">Login</button>
              </div>
            </form>

            <p>{loginError}</p>

            <div className="form-control">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn bg-[#4285F4] hover:bg-[#4285F4]/90 text-white rounded-full"
              >
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
