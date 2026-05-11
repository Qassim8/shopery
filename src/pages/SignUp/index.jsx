import React, { useState } from "react";
import { Link } from "react-router";
import AppLayout from "../../components/AppLayout";
import {
  BsApple,
  BsEye,
  BsEyeSlash,
  BsFacebook,
  BsGoogle,
} from "react-icons/bs";
import {
  HiOutlineLockClosed,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Check password strength
    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle sign up logic here
      console.log("Sign up data:", formData);
      alert("Account created successfully!");
    }
  };

  const handleSocialSignup = (provider) => {
    // Handle social signup logic here
    console.log(`Sign up with ${provider}`);
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength <= 2) return "Weak";
    if (passwordStrength <= 3) return "Fair";
    if (passwordStrength <= 4) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "text-red-600";
    if (passwordStrength <= 3) return "text-yellow-600";
    if (passwordStrength <= 4) return "text-blue-600";
    return "text-green-600";
  };

  return (
    <AppLayout showMenuNav={false} showNewsletter={false} showFooter={false}>
      <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-lg md:text-3xl font-bold text-gray-900">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Join us today and start your shopping journey
            </p>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color) ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color) ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <BsEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <BsEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Password strength:</span>
                    <span
                      className={`font-medium ${getPasswordStrengthColor()}`}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        passwordStrength <= 2
                          ? "bg-red-500"
                          : passwordStrength <= 3
                            ? "bg-yellow-500"
                            : passwordStrength <= 4
                              ? "bg-blue-500"
                              : "bg-green-500"
                      }`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color) ${
                    errors.confirmPassword
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <BsEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <BsEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms and Newsletter */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-(--main-color) focus:ring-(--main-color) border-gray-300 rounded mt-1"
                />
                <label
                  htmlFor="agreeToTerms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-(--main-color) hover:text-green-700"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-(--main-color) hover:text-green-700"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-sm text-red-600">{errors.agreeToTerms}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full cursor-pointer shadow-sm text-sm font-medium text-white bg-(--main-color) hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--main-color) transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-(--main-color) hover:text-green-700 font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SignUp;
