import React from "react";
import Navbar from "../Navbar";
import MenuNav from "../Navbar/MenuNav";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const AppLayout = ({
  children,
  showMenuNav = true,
  showNewsletter = true,
  showFooter = true,
}) => {
  return (
    <>
      {/* Header */}
      <div className="bg-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      {showMenuNav && <MenuNav isContainer={true} />}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer Section */}
      {showNewsletter && <Newsletter />}
      {showFooter && <Footer />}
    </>
  );
};

export default AppLayout;
