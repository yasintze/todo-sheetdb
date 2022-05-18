import React from "react";

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card-header">
      <div className="d-flex justify-content-between align-items-center">
        {children}
      </div>
    </div>
  );
};

export default CardHeader;
