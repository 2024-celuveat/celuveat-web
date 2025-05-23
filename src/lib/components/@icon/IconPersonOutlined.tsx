import { colors } from "@/lib/colors";

function IconPersonOutlined({
  width = 24,
  height = 24,
  fill = colors.gray[800],
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.59211 20.5H20.4078C20.1882 18.8055 19.5732 17.4362 18.5107 16.4501C17.3012 15.3274 15.2948 14.5 11.9999 14.5C8.70505 14.5 6.69872 15.3274 5.48916 16.4501C4.42673 17.4362 3.81166 18.8055 3.59211 20.5ZM11.9999 11.5C9.51466 11.5 7.49994 9.48528 7.49994 7C7.49994 4.51472 9.51466 2.5 11.9999 2.5C14.4852 2.5 16.4999 4.51472 16.4999 7C16.4999 9.48528 14.4852 11.5 11.9999 11.5ZM11.9999 13C4.9268 13 2.31413 16.5621 2.02704 21.1193C1.99646 21.6049 2.39436 22 2.88089 22H21.119C21.6055 22 22.0034 21.6049 21.9728 21.1193C21.6857 16.5621 19.0731 13 11.9999 13ZM11.9999 4C10.3431 4 8.99994 5.34315 8.99994 7C8.99994 8.65685 10.3431 10 11.9999 10C13.6568 10 14.9999 8.65685 14.9999 7C14.9999 5.34315 13.6568 4 11.9999 4Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconPersonOutlined;
