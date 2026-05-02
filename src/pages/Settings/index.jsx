import React, { useState } from "react";
import {
  BsPerson,
  BsBell,
  BsShield,
  BsCreditCard,
  BsEye,
  BsEyeSlash,
  BsCheckCircle,
} from "react-icons/bs";
import { HiOutlinePhone, HiOutlineLockClosed } from "react-icons/hi2";
import AppLayout from "../../components/AppLayout";
import { HiOutlineMail } from "react-icons/hi";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-01-01",
    gender: "male",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    smsUpdates: false,
    emailMarketing: true,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: "private",
    showPurchaseHistory: false,
    allowDataCollection: true,
    marketingEmails: true,
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: BsPerson },
    { id: "security", label: "Security", icon: BsShield },
    { id: "notifications", label: "Notifications", icon: BsBell },
    { id: "privacy", label: "Privacy", icon: BsEye },
  ];

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePrivacyChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPrivacy((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
    console.log("Profile updated:", profileData);
    alert("Profile updated successfully!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Handle password change
    console.log("Password changed");
    alert("Password changed successfully!");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    // Handle notification preferences update
    console.log("Notifications updated:", notifications);
    alert("Notification preferences updated!");
  };

  const handlePrivacySubmit = (e) => {
    e.preventDefault();
    // Handle privacy settings update
    console.log("Privacy settings updated:", privacy);
    alert("Privacy settings updated!");
  };

  const renderProfile = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Profile Information
        </h2>
        <p className="text-gray-600">
          Update your personal information and contact details.
        </p>
      </div>

      <form onSubmit={handleProfileSubmit} className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <BsPerson className="text-3xl text-gray-400" />
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Change Photo
            </button>
            <p className="text-sm text-gray-500 mt-2">
              JPG, PNG or GIF. Max size 2MB.
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={profileData.dateOfBirth}
              onChange={handleProfileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={profileData.gender}
              onChange={handleProfileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Security Settings
        </h2>
        <p className="text-gray-600">
          Manage your password and account security.
        </p>
      </div>

      {/* Change Password */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Change Password
        </h3>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Current Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <BsEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <BsEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <BsEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <BsEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
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
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Two-Factor Authentication
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Enable 2FA</p>
            <p className="text-sm text-gray-600">
              Add an extra layer of security to your account
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-color)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--main-color)]"></div>
          </label>
        </div>
      </div>

      {/* Login Sessions */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Active Sessions
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Current Session</p>
              <p className="text-sm text-gray-600">
                Chrome on Windows • New York, US
              </p>
              <p className="text-xs text-gray-500">Active now</p>
            </div>
            <span className="text-green-600 text-sm font-medium">Current</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Mobile App</p>
              <p className="text-sm text-gray-600">iPhone • New York, US</p>
              <p className="text-xs text-gray-500">Last active 2 hours ago</p>
            </div>
            <button className="text-red-600 hover:text-red-700 text-sm font-medium">
              Revoke
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Notification Preferences
        </h2>
        <p className="text-gray-600">
          Choose how you want to be notified about updates and promotions.
        </p>
      </div>

      <form onSubmit={handleNotificationSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg border space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Email Notifications
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Order Updates</p>
                <p className="text-sm text-gray-600">
                  Get notified about order status changes
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="orderUpdates"
                  checked={notifications.orderUpdates}
                  onChange={handleNotificationChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-color)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--main-color)]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Promotions & Offers</p>
                <p className="text-sm text-gray-600">
                  Receive special offers and discount notifications
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="promotions"
                  checked={notifications.promotions}
                  onChange={handleNotificationChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-color)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--main-color)]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Newsletter</p>
                <p className="text-sm text-gray-600">
                  Weekly newsletter with tips and product highlights
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={notifications.newsletter}
                  onChange={handleNotificationChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-color)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--main-color)]"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            SMS Notifications
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Order Updates</p>
                <p className="text-sm text-gray-600">
                  SMS alerts for order status changes
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="smsUpdates"
                  checked={notifications.smsUpdates}
                  onChange={handleNotificationChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-color)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--main-color)]"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );

  const renderPrivacy = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Privacy Settings
        </h2>
        <p className="text-gray-600">
          Control your privacy and data sharing preferences.
        </p>
      </div>

      <form onSubmit={handlePrivacySubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg border space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Profile Visibility
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="profileVisibility"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Who can see your profile
              </label>
              <select
                id="profileVisibility"
                name="profileVisibility"
                value={privacy.profileVisibility}
                onChange={handlePrivacyChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Show Purchase History
                </p>
                <p className="text-sm text-gray-600">
                  Allow others to see your public purchase history
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="showPurchaseHistory"
                  checked={privacy.showPurchaseHistory}
                  onChange={handlePrivacyChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-color)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--main-color)]"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Data & Marketing
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Allow Data Collection
                </p>
                <p className="text-sm text-gray-600">
                  Help us improve our services by sharing usage data
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="allowDataCollection"
                  checked={privacy.allowDataCollection}
                  onChange={handlePrivacyChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-color)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--main-color)]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Marketing Emails</p>
                <p className="text-sm text-gray-600">
                  Receive promotional emails and special offers
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="marketingEmails"
                  checked={privacy.marketingEmails}
                  onChange={handlePrivacyChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--main-color)]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--main-color)]"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Data Export & Deletion
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-3">
                You can download a copy of your data or delete your account at
                any time.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Export Data
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Save Privacy Settings
          </button>
        </div>
      </form>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfile();
      case "security":
        return renderSecurity();
      case "notifications":
        return renderNotifications();
      case "privacy":
        return renderPrivacy();
      default:
        return renderProfile();
    }
  };

  return (
    <AppLayout>
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Settings
              </h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-[var(--main-color)] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <tab.icon className="text-xl" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">{renderContent()}</div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
