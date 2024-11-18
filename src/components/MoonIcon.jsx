// MoonIcon.js
// eslint-disable-next-line react/prop-types
const MoonIcon = ({ size = 50, color = "#FFD700" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12.79A9 9 0 0112.21 3 7.5 7.5 0 1018 18.5 9 9 0 0021 12.79z"
        fill={color}
      />
    </svg>
  );
  
  export default MoonIcon;
  