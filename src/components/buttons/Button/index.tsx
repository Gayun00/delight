import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary";
  buttonType?: "submit" | "button";
  onClick: () => void;
}

const styles = {
  primary: "bg-purple-primary text-white",
  secondary: "bg-tranparent text-gray-primary",
};

const Button = ({
  children,
  variant = "primary",
  buttonType = "button",
  onClick,
  ...props
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={buttonType}
      {...props}
      className={`${styles[variant]} px-[17px] flex items-center justify-center h-[34px] rounded-lg font-bold text-lg leading-lg`}>
      <p className="px-[3px]">{children}</p>
    </button>
  );
};

export default Button;
