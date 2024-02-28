import classes from "./Spinner.module.scss";

// prettier-ignore
const iconSpinner = (
  <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line  x1="128"  y1="32"  x2="128"  y2="64"  fill="none"  stroke="#000000"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="16"></line><line  x1="195.9"  y1="60.1"  x2="173.3"  y2="82.7"  fill="none"  stroke="#000000"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="16"></line><line  x1="224"  y1="128"  x2="192"  y2="128"  fill="none"  stroke="#000000"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="16"></line><line  x1="195.9"  y1="195.9"  x2="173.3"  y2="173.3"  fill="none"  stroke="#000000"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="16"></line><line  x1="128"  y1="224"  x2="128"  y2="192"  fill="none"  stroke="#000000"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="16"></line><line  x1="60.1"  y1="195.9"  x2="82.7"  y2="173.3"  fill="none"  stroke="#000000"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="16"></line><line  x1="32"  y1="128"  x2="64"  y2="128"  fill="none"  stroke="#000000"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="16"></line><line  x1="60.1"  y1="60.1"  x2="82.7"  y2="82.7"  fill="none"  stroke="#000000"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="16"></line></svg>
);

const Spinner = () => {
  return <div className={classes.spinner}>{iconSpinner}</div>;
};

export default Spinner;
