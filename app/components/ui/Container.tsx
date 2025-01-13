import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
  return (
    <div className={`w-10/12 mx-auto p-2 items-center ${className}`}>
      {children}
    </div>
  );
};

export default Container;
