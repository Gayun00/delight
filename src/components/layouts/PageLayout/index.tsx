import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col space-y-[20px] mt-[66px] px-[28px]">
      {children}
    </div>
  );
};

export default PageLayout;
