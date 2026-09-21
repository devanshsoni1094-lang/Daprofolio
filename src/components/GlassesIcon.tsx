import React from "react";

interface Props {
  className?: string;
  size?: number;
}

export const GlassesIcon: React.FC<Props> = ({ className = "", size = 20 }) => {
  return (
    <svg
      width={size * 2}
      height={size}
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
    >
      {/* Left Lens */}
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Right Lens */}
      <circle cx="30" cy="10" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Bridge */}
      <path d="M17 10C17 8.5 23 8.5 23 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left Temple Stub */}
      <path d="M3 10H1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right Temple Stub */}
      <path d="M37 10H39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};
