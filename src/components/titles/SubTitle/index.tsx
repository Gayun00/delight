import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SubTitle = ({ children }: Props) => {
  return <h1 className="font-bold text-xl leading-xl">{children}</h1>;
};

export default SubTitle;
