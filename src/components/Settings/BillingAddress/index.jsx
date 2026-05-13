import React, { useState } from "react";

const BillingAddress = () => {
  const [addressData, setAddressData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "4140 New York United State",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Handle address update
    console.log("address updated:", addressData);
    alert("address updated successfully!");
  };

  return (
    <div className="border border-gray-300 rounded-md">
      <div className="border-b border-b-gray-300">
        <h2 className="text-lg font-semibold text-gray-900 py-3 px-5">
          Billing Address
        </h2>
      </div>

      <form onSubmit={handleAddressSubmit} className="space-y-6 p-5">
        {/* Personal Information */}
        <div className="">
          <div className="grow flex flex-col gap-3">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
              <div className="grow">
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
                  value={addressData.firstName}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
                />
              </div>

              <div className="grow">
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
                  value={addressData.lastName}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={addressData.address}
                onChange={handleAddressChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
              <div className="grow">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={addressData.email}
                    onChange={handleAddressChange}
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
                  />
                </div>
              </div>

              <div className="grow">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={addressData.phone}
                    onChange={handleAddressChange}
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
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

export default BillingAddress;
