import { colors } from "@/lib/colors";

interface IconArrowProps extends React.SVGProps<SVGSVGElement> {}

function IconArrowRight({
  width = 24,
  height = 24,
  fill = colors.gray[300],
  ...props
}: IconArrowProps) {
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
        d="M9 19.5L17 12L9 4.5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default IconArrowRight;
