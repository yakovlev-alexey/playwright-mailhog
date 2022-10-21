import type { MailHogTestFixtures } from "../types/fixtures";

const mhApiAuthorizationHeader = (
  credentials?: string
): MailHogTestFixtures["mhApiAuthorizationHeader"] => {
  return async ({}, use) => {
    if (!credentials) {
      return await use(undefined);
    }

    const buffer = Buffer.from(encodeURIComponent(credentials), "base64");

    await use(`Basic ${buffer.toString()}`);
  };
};

export { mhApiAuthorizationHeader };
