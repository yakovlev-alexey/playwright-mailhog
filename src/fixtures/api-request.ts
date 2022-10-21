import type { MailHogFixtures, MailHogTestFixtures } from "../types/fixtures";

const mhApiRequest: MailHogTestFixtures["mhApiRequest"] = async (
  { mhApiUrl, request },
  use
) => {
  const makeRequest: MailHogFixtures["mhApiRequest"] = async (
    method,
    path,
    options
  ) => {
    return await request[method](`${mhApiUrl}/${path}`, options);
  };

  await use(makeRequest);
};

export { mhApiRequest };
