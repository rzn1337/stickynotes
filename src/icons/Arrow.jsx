const ChevronsUp = ({ size = 24, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="arcs"
  >
    <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
  </svg>
);
export default ChevronsUp;
