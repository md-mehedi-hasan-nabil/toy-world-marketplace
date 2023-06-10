import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

export default function Register() {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  // context
  const { registerUser, updateUser, user, googleLogin } =
    useContext(AuthContext);

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // google provider
  const googleProvider = new GoogleAuthProvider();

  // create user
  const handleRegister = (e) => {
    e.preventDefault();
    setPasswordError("");
    // form values
    const name = e.target.username.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // console.log(name, email, photo, password);

    // validation checking
    if (password.length < 6) {
      setPasswordError("Password should be 6 characters long");
      return;
    }
    // user creation
    registerUser(email, password)
      .then((res) => {
        const validUser = res.user;

        // updated for ui
        validUser.displayName = name;
        validUser.photoURL = photo;

        // update user
        updateUser(name, photo)
          .then(() => {})
          .catch((err) => console.log(err?.message));

        toast.success("Registration successfully");
        // navigate to home
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });

    e.target.reset();
  };

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

  document.title = "Register Page";

  return (
    <div className="container hero min-h-screen bg-base-200">
      <div className="flex items-center justify-between">
        <form
          onSubmit={handleRegister}
          className="card-body bg-base-100 shadow-xl rounded-2xl p-10"
        >
          <h1 className="text-3xl font-bold text-primary">Create an account</h1>
          <div className="flex items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="username"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="photo"
                className="input input-bordered"
                name="photo"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
              />
            </div>
          </div>
          <p>{passwordError}</p>
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <Link className="hover:text-blue-600" to="/login">
              Sign in
            </Link>
          </p>

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

          <div className="form-control mt-2">
            <button className="btn btn-primary rounded-full">Login</button>
            <Link to="/" className="btn btn-primary mt-3 rounded-full">
              Go Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
