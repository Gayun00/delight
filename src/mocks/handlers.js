import { http, HttpResponse } from "msw";
import { mockData } from "@/constants/mockData";
import { URL as URL_CONSTANTS, TRANSACTIONS_TYPE } from "@/constants";

export const handlers = [
  http.get(`${URL_CONSTANTS.API_SERVER}/history`, ({ request }) => {
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
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

    console.log(data.slice(0, 10));

    return HttpResponse.json({ data: data.slice(0, 10) });
  }),
];
