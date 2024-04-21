import Bell from "@/assets/bell.svg?react";
import BellWithNotice from "@/assets/bell_notice.svg?react";

interface Props {
  hasNew: boolean;
}

const AlertButton = ({ hasNew }: Props) => {
  return <button>{hasNew ? <BellWithNotice /> : <Bell />}</button>;
};

export default AlertButton;
