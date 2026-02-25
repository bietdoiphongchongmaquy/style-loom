import React from "react";

const ICLink = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 0h9.375a.625.625 0 0 1 .625.625V10a.625.625 0 1 1-1.25 0V2.134L1.067 13.567a.625.625 0 1 1-.884-.884L11.616 1.25H3.75a.625.625 0 1 1 0-1.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ICLink;
