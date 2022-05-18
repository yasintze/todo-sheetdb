import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container my-5">{children}</div>;
};

export default Layout;
