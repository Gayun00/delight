import { http, HttpResponse } from "msw";
import { mockData } from "@/constants/mockData";
import { URL as URL_CONSTANTS, TRANSACTIONS_TYPE } from "@/constants";

export const handlers = [
  http.get(`${URL_CONSTANTS.API_SERVER}/history`, ({ request }) => {
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
    const offset = url.searchParams.get("offset");
    const limit = url.searchParams.get("limit");

    let data = mockData.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    console.log("type", type);
    if (type === TRANSACTIONS_TYPE.EXPENSE) {
      data = mockData.filter((data) => data.amount.includes("-"));
    }
    if (type === TRANSACTIONS_TYPE.INCOME) {
      data = mockData.filter((data) => !data.amount.includes("-"));
    }

    return HttpResponse.json({ data: data.slice(offset, limit) });
  }),
];

/**
 * limit, offset값을 정하고
 *
 */
