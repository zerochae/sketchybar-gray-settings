interface SvgIconProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  viewBox?: string;
}

export default function SvgIcon({
  children,
  color = "currentColor",
  size = 16,
  viewBox = "0 0 24 24",
}: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox={viewBox}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
      }}
    >
      {children}
    </svg>
  );
}
