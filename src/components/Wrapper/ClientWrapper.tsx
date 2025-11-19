import React from "react";

const ClientWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${className} max-w-[1400px] w-full lg:px-3 px-4 mx-auto `}>
      {children}
    </div>
  );
};

export default ClientWrapper;
