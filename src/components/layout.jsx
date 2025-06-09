// src/components/Layout.jsx
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Appears on Every Page */}
      <Navbar />

      {/* Page Content */}
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
