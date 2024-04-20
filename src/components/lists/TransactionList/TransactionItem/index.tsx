// TODO: api 연결 후 구조 리팩토링 및 하위 컴포넌트 분리

interface Props {
  amount: string;
  name: string;
  timestamp: string;
  type: string;
}

const TransactionItem = ({ amount, type, name, timestamp }: Props) => {
  return (
    <div className="flex items-center space-x-[20px]">
      <div className="min-w-[51px] h-[51px] rounded-md bg-gray-foreground" />
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="text-lg font-semibold leading-lg">{name}</p>
          <p className="text-md font-medium leading-sm text-gray-primary">
            {type}
          </p>
        </div>
        <div>
          <p className="text-lg font-extraBold leading-lg text-purple-primary">
            {amount}
          </p>
          <p className="text-md font-medium leading-sm text-gray-primary">
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
