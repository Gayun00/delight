import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  return <h1 className="font-bold text-2xl leading-2xl">{children}</h1>;
};

export default Title;
