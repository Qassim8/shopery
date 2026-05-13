import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";

const AccountInfo = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-01-01",
    gender: "male",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
    console.log("Profile updated:", profileData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="border border-gray-300 rounded-md">
      <div className="border-b border-b-gray-300">
        <h2 className="text-lg font-semibold text-gray-900 py-3 px-5">
          Account Sittings
        </h2>
      </div>

      <form onSubmit={handleProfileSubmit} className="space-y-6 p-5">
        <div className="flex flex-col md:flex-row gap-10 md:gap-10">
          {/* Personal Information */}
          <div className="grow flex flex-col gap-3">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={profileData.firstName}
                onChange={handleProfileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={profileData.lastName}
                onChange={handleProfileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
              />
            </div>

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
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlinePhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
                />
              </div>
            </div>
          </div>
          {/* Profile Picture */}
          <div className="grow flex flex-col justify-center items-center gap-6 order-first md:order-last">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <BsPerson className="text-3xl text-gray-400" />
            </div>
            <div>
              <button
                type="button"
                className="px-4 py-2 text-(--main-color) border border-(--main-color) rounded-full cursor-pointer hover:text-white hover:bg-(--main-color) transition-colors"
              >
                Change Photo
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <button
            type="submit"
            className="px-4 md:px-6 py-3 text-sm md:text-[16px] bg-(--main-color) text-white rounded-full cursor-pointer hover:bg-green-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
