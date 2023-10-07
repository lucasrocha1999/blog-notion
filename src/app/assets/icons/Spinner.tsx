import * as React from "react";
import type { SVGProps } from "react";
const SvgSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    viewBox="0 0 100 100"
    role="img"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={32}
      fill="none"
      stroke="currentColor"
      strokeDasharray="50.26548245743669 50.26548245743669"
      strokeLinecap="round"
      strokeWidth={8}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={23}
      fill="none"
      stroke="#100b15"
      strokeDasharray="36.12831551628262 36.12831551628262"
      strokeDashoffset={36.128}
      strokeLinecap="round"
      strokeWidth={8}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;-360 50 50"
      />
    </circle>
  </svg>
);
export default SvgSpinner;
