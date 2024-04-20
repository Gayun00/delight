import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary";
  buttonType?: "submit" | "button";
}

const styles = {
  primary: "text-purple-primary",
  secondary: "text-gray-third",
};

const TextButton = ({
  children,
  variant = "primary",
  buttonType = "button",
  ...props
}: Props) => {
  return (
    <button {...props} type={buttonType} className={`${styles[variant]}`}>
      <p className="font-bold text-lg leading-lg">{children}</p>
    </button>
  );
};

export default TextButton;
