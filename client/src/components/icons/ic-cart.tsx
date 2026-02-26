import React from "react";

const ICCart = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 17"
      className={className}
    >
      <path
        fill="currentColor"
        d="M.625 0a.625.625 0 1 0 0 1.25H1.78c.141 0 .265.095.302.232l2.131 7.993A3.126 3.126 0 0 0 1.875 12.5c0 .345.28.625.625.625h13.125a.625.625 0 1 0 0-1.25H3.232A1.876 1.876 0 0 1 5 10.625h9.348c.24 0 .458-.136.562-.351a50.312 50.312 0 0 0 2.467-6.023.625.625 0 0 0-.438-.804A50.72 50.72 0 0 0 3.482 1.883L3.29 1.16A1.563 1.563 0 0 0 1.78 0H.626Zm1.25 15a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM12.5 15a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      />
    </svg>
  );
};

export default ICCart;
