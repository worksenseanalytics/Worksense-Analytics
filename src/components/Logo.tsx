/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg";
}

export default function Logo({ className = "h-12 w-12", showText = false, textSize = "md" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${showText ? "flex-col md:flex-row text-center md:text-left" : ""}`}>
      {/* Official PNG Brand Mark with transparent background */}
      <img
        src="/logo.png"
        alt="Worksense Analytics Logo"
        className={`${className} object-contain transform transition-transform duration-300 hover:scale-110`}
        referrerPolicy="no-referrer"
      />

      {/* Brand text displayed optionally matching corporate design typography */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-sans tracking-tight font-extrabold text-white leading-none ${
              textSize === "sm" ? "text-base" : textSize === "md" ? "text-2xl" : "text-3xl"
            }`}
          >
            Worksense
          </span>
          <span
            className={`font-sans font-medium tracking-wide text-sky-400 uppercase ${
              textSize === "sm" ? "text-[10px]" : textSize === "md" ? "text-xs" : "text-sm"
            }`}
          >
            Analytics
          </span>
        </div>
      )}
    </div>
  );
}
