import AlertButton from "@/components/buttons/AlertButton";
import { TODAY, TRANSACTIONS_TYPE } from "@/constants";
import { useHistoryQuery } from "@/queries";
import dayjs from "dayjs";

const Alert = () => {
  const { data } = useHistoryQuery({ type: TRANSACTIONS_TYPE.ALL });
  /**
   * 입출금 발생 관련 별도 api 혹은 SSE를 사용할 수 없으므로 과제 범위에 한해 상황 가정
   * 가장 최신 거래 내역 일자가 당일에 해당할 경우 최신 입출금 발생한 겻으로 가정함
   * 데이터 표시를 위해 특정 날짜를 '오늘'로 지정하였으며, 이 때문에 마지막 데이터가 같거나 그 이후일 경우로 조건 작성
   * 알림을 읽은 경우는 작업 범위에 포함하지 않음
   */
  const lastTransaction = data?.data[data?.data?.length - 1];
  const hasNewTransaction = dayjs(lastTransaction.timestamp).isSameOrBefore(
    dayjs(TODAY)
  );
  return <AlertButton hasNew={hasNewTransaction} />;
};

export default Alert;
