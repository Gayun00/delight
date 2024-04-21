import { FunctionComponent, SVGProps } from "react";
import Empty from "@/assets/empty.svg?react";

interface Props {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  isSelected: boolean;
}

const BottomNavButton = ({ Icon, isSelected = false }: Props) => {
  return (
    <div className="relative flex flex-col items-center w-[80px] h-[67px]">
      <div className="h-full flex items-center">
        {Icon ? <Icon fill={isSelected ? "#363062" : "#BDBDBD"} /> : <Empty />}
      </div>
      {isSelected && (
        <div className="absolute bottom-0 w-[38px] h-[5px] rounded-t-sm bg-purple-primary" />
      )}
    </div>
  );
};

export default BottomNavButton;
