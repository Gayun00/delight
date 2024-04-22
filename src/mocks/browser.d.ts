declare module "./mocks/browser.js" {
  import { SetupWorkerApi } from "msw";
  const worker: SetupWorkerApi;
  export { worker };
}
