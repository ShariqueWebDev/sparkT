import { ChevronLeft, DotIcon } from "lucide-react";
import React, { ReactElement } from "react";

type ActionButtonProps = {
  navigationHandler: () => void;
  className?: string;
  dotColor: string;
  iconClass: string;
  icon: ReactElement; // ⬅ THIS IS WHAT YOU WANT
};

const ActionButton = ({
  navigationHandler,
  className,
  dotColor,
  iconClass,
  icon,
}: ActionButtonProps) => {
  return (
    <div>
      <button
        onClick={navigationHandler}
        className={` ${className}
    group relative z-30 p-1 backdrop-blur-lg cursor-pointer
    border rounded-full w-12 h-12 flex items-center justify-center
    overflow-hidden transition-all
  `}
      >
        {/* Dot Icon – hide on hover */}
        <DotIcon
          size={30}
          color={dotColor}
          className="
              absolute transition-all duration-300 
              opacity-100 group-hover:opacity-0
              scale-100 group-hover:scale-0
            "
        />

        {/* Chevron Icon – expand on hover */}
        <div
          className={` ${iconClass} absolute  
              transition-all duration-300 
              w-0 opacity-0 scale-0
              group-hover:w-full h-full group-hover:opacity-100 group-hover:scale-100 flex justify-center items-center rounded-full`}
        >
          {icon}
        </div>
      </button>
    </div>
  );
};

export default ActionButton;
