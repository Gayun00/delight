import { http, HttpResponse } from "msw";
import { mockData } from "@/constants/mockData";
import { URL as URL_CONSTANTS, TRANSACTIONS_TYPE } from "@/constants";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { filterDatesInDateRange } from "@/utils/convertFormat";
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const handlers = [
  http.get(`${URL_CONSTANTS.API_SERVER}/history`, ({ request }) => {
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
    const offset = url.searchParams.get("offset");
    const limit = url.searchParams.get("limit");
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");

    let data = mockData.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    if (startDate && endDate) {
      data = filterDatesInDateRange(data, endDate, startDate);
    }
    if (type === TRANSACTIONS_TYPE.EXPENSE) {
      data = mockData.filter((data) => data.amount.includes("-"));
    }
    if (type === TRANSACTIONS_TYPE.INCOME) {
      data = mockData.filter((data) => !data.amount.includes("-"));
    }

    if (limit > 0) {
      data = data.slice(offset, limit);
    }

    return HttpResponse.json({ data });
  }),
];
