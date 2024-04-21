import Menu from "@/assets/menu.svg?react";
import Card from "@/assets/card.svg?react";
import Chart from "@/assets/chart.svg?react";
import User from "@/assets/user.svg?react";
import BottomNavButton from "./BottomNavButton";

const list = [
  {
    name: "menu",
    Icon: Menu,
  },
  {
    name: "pay",
    Icon: Card,
  },
  {
    name: "chart",
    Icon: Chart,
  },
  {
    name: "user",
    Icon: User,
  },
];

interface Props {
  onSelect: (name: string) => void;
  selectedMenu: string;
}

const BottomNav = ({ onSelect, selectedMenu }: Props) => {
  return (
    <div className="fixed bottom-0 flex w-full h-[67px]">
      <div className="flex px-[28px]">
        {list.map((item) => (
          <BottomNavButton
            Icon={item.Icon}
            isSelected={selectedMenu === item.name}
            onClick={() => onSelect(item.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
