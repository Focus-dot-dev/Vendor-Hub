import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/OsideImg.png";
import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaGoogle,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    setError("");
    console.log("Logging in with:", { email, password, rememberMe });
    navigate("/admin/dashboard");
  };

  return (
    <div className="bg-gray-200 flex justify-center min-h-screen items-center px-4 py-4">
      <div className="bg-white w-8/10 max-w-6xl flex flex-col md:flex-row rounded-xl shadow-xl overflow-hidden">
        <div className="hidden md:flex md:w-1/2 bg-blue-600 flex-col items-center justify-center rounded-xl rounded-tr-[120px] rounded-br-none">
          <div className="ImgClass">
            <img src={LoginImg} alt="" width={350} />
          </div>
        </div>

        <div className="w-50 h-50 bg-blue-600 mt-90 hidden md:block"></div>

        <div className="flex flex-col items-center w-full md:w-1/2 justify-center rounded-xl gap-2 md:-ml-50 rounded-bl-[120px] bg-white px-6 py-10">
          <h1 className="text-4xl font-bold text-blue-600 text-center">
            Admin
          </h1>

          <div className="flex flex-col items-center mt-5 w-full">
            <h2 className="text-2xl font-bold text-black">Log in</h2>

            <form
              onSubmit={handleLogin}
              className="w-full flex flex-col items-center mt-5 gap-4"
            >
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-gray-300 rounded-lg p-2 w-full sm:w-80 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="relative w-full sm:w-80">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border-2 border-gray-300 rounded-lg p-2 w-full pr-10 text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full sm:w-80 mt-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer mb-2 sm:mb-0">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Remember me
                </label>

                <a
                  href="#"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  <FaLock size={12} /> Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full sm:w-80 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Log in
              </button>

              <div className="flex justify-center w-full sm:w-80 mt-4 text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  Sign up
                </a>
              </div>
            </form>

            <div className="flex flex-col items-center mt-6 gap-3 w-full sm:w-80">
              <p className="text-gray-500 text-sm">Or sign in with</p>
              <div className="flex gap-4">
                <button className="p-3 border rounded-full hover:bg-gray-100">
                  <FaGoogle />
                </button>
                <button className="p-3 border rounded-full hover:bg-gray-100 text-blue-700">
                  <FaLinkedin />
                </button>
                <button className="p-3 border rounded-full hover:bg-gray-100 text-blue-600">
                  <FaFacebook />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
