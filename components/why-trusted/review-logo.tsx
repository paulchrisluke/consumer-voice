interface Props {
  className?: string;
}
export default function ReviewLogo(props: Props) {
  return (
    <svg
      className={props.className}
      width="64"
      height="82"
      viewBox="0 0 64 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity=".1"
        d="M42.607 46.005c-6.387 16.113-3.58 35.927-19.693 29.54C6.8 69.157 4.942 56.905 11.33 40.792 17.717 24.679 39.36-3.38 54.77 12.41c13.269 16.676-5.776 17.481-12.163 33.594z"
        fill="#4749A0"
      />
      <path
        d="M24 44c0-8.837 7.163-16 16-16h2.5C52.717 28 61 36.283 61 46.5V60H40c-8.837 0-16-7.163-16-16z"
        stroke="#4749A0"
        strokeWidth="4"
      />
      <rect x="34" y="39" width="13" height="4" rx="2" fill="#4749A0" />
      <rect x="39" y="47" width="13" height="4" rx="2" fill="#4749A0" />
    </svg>
  );
}
