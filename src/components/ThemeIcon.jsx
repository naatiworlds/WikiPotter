import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeIcon = ({ size, color }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return theme === "light" ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" fill={color} />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ) : (
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
};

export default ThemeIcon;
