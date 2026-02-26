import React from "react";

const ICMenu = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 14"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 .875C0 .392.392 0 .875 0h19.25a.875.875 0 0 1 0 1.75H.875A.875.875 0 0 1 0 .875ZM0 7c0-.483.392-.875.875-.875h19.25a.875.875 0 0 1 0 1.75H.875A.875.875 0 0 1 0 7Zm9.625 6.125c0-.483.392-.875.875-.875h9.625a.875.875 0 0 1 0 1.75H10.5a.875.875 0 0 1-.875-.875Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ICMenu;
