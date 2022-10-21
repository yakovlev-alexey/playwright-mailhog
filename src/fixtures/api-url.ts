import type { MailHogTestFixtures } from "../types/fixtures";

const mhApiUrl = (url: string): MailHogTestFixtures["mhApiUrl"] => {
  return async ({}, use) => {
    await use(url);
  };
};

export { mhApiUrl };
