import React from "react";

function Logo({ className, theme }) {
  const fill = theme === "dark" ? "#ffff" : "#0d0c22";
  console.log({ fill });
  return (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 317.8 317.8"
      className={className}
      fill={fill}
      stroke={fill}
    >
      <defs>
        <style>
          {`.cls-1,.cls-4.cls-1,.cls-2,.cls-3{stroke-miterlimit:10;stroke-width:10px;}.cls-2{fill:#ed1c24;}.cls-3{fill:none;}`}
        </style>
      </defs>
      <title>isotipo-httpfido-blanco-sin-fondo</title>
      <path
        className="cls-1"
        d="M321.72,263.75"
        transform="translate(-3.15 -2.12)"
      />
      <path
        className="cls-2"
        d="M316.33-3.27"
        transform="translate(-3.15 -2.12)"
      />
      <path
        className="cls-3"
        d="M84.33,7.12H19.46A11.31,11.31,0,0,0,8.15,18.43V303.61a11.31,11.31,0,0,0,11.31,11.31H84.33"
        transform="translate(-3.15 -2.12)"
      />
      <path
        className="cls-3"
        d="M238.23,314.92h66.41A11.31,11.31,0,0,0,316,303.61V18.43A11.31,11.31,0,0,0,304.64,7.12H238.23"
        transform="translate(-3.15 -2.12)"
      />
      <path
        className="cls-4"
        d="M156.58,240.31c-4.64,3.14-12.47,5.44-20.3,5.44-10,0-16.63-4.6-16.63-11.5,0-11.71,8.07-42.86,20.3-76.53,10-28.43,1.71-38.89-18.35-38.89-27.89,0-58.22,39.94-63.85,63.36L42.59,242.82H32.07L73.66,75.55H83.93L64.85,152.08c13.94-23.84,34.25-41.4,56.51-41.4,29.11,0,42.32,13.59,29.11,47.67-12,31.57-19.82,60.43-19.82,71.72,0,4.6,3.92,7.53,9.54,7.53A20.3,20.3,0,0,0,151.45,234Z"
        transform="translate(-3.15 -2.12)"
      />
      <path
        className="cls-4"
        d="M295.07,88.72H203.58v68.59h58.71v13.38H203.58v72.13H186.7V75.55H295.07Z"
        transform="translate(-3.15 -2.12)"
      />
    </svg>
  );
}

export default Logo;
