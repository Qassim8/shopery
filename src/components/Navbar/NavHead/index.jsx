import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";

const NavHead = () => {
  return (
    <div className="py-3 flex flex-col md:flex-row md:justify-between gap-3 text-gray-600">
      <div className="flex items-center justify-center gap-2">
        <CiLocationOn className="text-xl" />
        <p className="text-xs md:text-sm text-center md:text-left">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </div>
      <div className="flex justify-center md:justify-end gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Link to={"/signin"} className="cursor-pointer">
            Sign In
          </Link>
          <span>/</span>
          <Link to={"/signup"} className="cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavHead;
