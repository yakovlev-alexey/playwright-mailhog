import type { MailHogFixtures, MailHogTestFixtures } from "../types/fixtures";

const mhApiRequest: MailHogTestFixtures["mhApiRequest"] = async (
  { mhApiUrl, mhApiAuthorizationHeader, request },
  use
) => {
  const makeRequest: MailHogFixtures["mhApiRequest"] = async (
    method,
    path,
    options
  ) => {
    return await request[method](`${mhApiUrl}${path}`, {
      ...options,
      headers: {
        ...(mhApiAuthorizationHeader && {
          Authorization: mhApiAuthorizationHeader,
        }),
        ...options?.headers,
      },
    });
  };

  await use(makeRequest);
};

export { mhApiRequest };
