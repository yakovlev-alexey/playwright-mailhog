import { PlaywrightTestArgs, TestFixture } from "@playwright/test";

import { Messages, PaginationQuery } from "./mailhog";

type MailHogFixtures = {
  mhApiUrl: string;
  mhGetAllEmails: (query?: PaginationQuery) => Promise<Messages>;
};

type MailHogTestFixture<T> = TestFixture<
  T,
  PlaywrightTestArgs & Partial<MailHogFixtures>
>;

type MailHogTestFixtures = {
  [K in keyof MailHogFixtures]: MailHogTestFixture<MailHogFixtures[K]>;
};

export { MailHogTestFixture, MailHogFixtures, MailHogTestFixtures };
