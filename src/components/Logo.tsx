import React from "react";

interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

/**
 * HP monogram — H and P share a center stem, drawn with a single
 * gradient stroke for a clean, modern developer-brand mark.
 */
export const LogoMark: React.FC<{ size?: number; className?: string }> = ({
  size = 36,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="hp-grad" x1="10" y1="10" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#818CF8" />
        <stop offset="0.5" stopColor="#C084FC" />
        <stop offset="1" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
    <rect
      x="1.5"
      y="1.5"
      width="61"
      height="61"
      rx="16"
      stroke="url(#hp-grad)"
      strokeOpacity="0.35"
      strokeWidth="2"
    />
    {/* H left bar */}
    <path d="M19 17V47" stroke="url(#hp-grad)" strokeWidth="5.5" strokeLinecap="round" />
    {/* Shared center stem (H right / P stem) */}
    <path d="M32 17V47" stroke="url(#hp-grad)" strokeWidth="5.5" strokeLinecap="round" />
    {/* H crossbar */}
    <path d="M19 32H32" stroke="url(#hp-grad)" strokeWidth="5.5" strokeLinecap="round" />
    {/* P bowl */}
    <path
      d="M32 17H38C43.5228 17 48 21.4772 48 27C48 32.5228 43.5228 37 38 37H32"
      stroke="url(#hp-grad)"
      strokeWidth="5.5"
      strokeLinecap="round"
    />
  </svg>
);

const Logo: React.FC<LogoProps> = ({ size = 36, withWordmark = true, className }) => (
  <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
    <LogoMark size={size} />
    {withWordmark && (
      <span className="font-display text-lg font-bold tracking-tight">
        harshit<span className="text-gradient">.dev</span>
      </span>
    )}
  </span>
);

export default Logo;
