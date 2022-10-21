import type { PlaywrightTestArgs, TestFixture } from "@playwright/test";

import type { Messages, PaginationQuery, SearchQuery } from "./mailhog";

type MailHogFixtures = {
  mhApiUrl: string;
  mhGetAllEmails: (query?: PaginationQuery) => Promise<Messages>;
  mhSearchEmails: (query?: SearchQuery) => Promise<Messages>;

  mhGetEmailsBySender: (
    sender: string,
    query?: PaginationQuery
  ) => Promise<Messages>;
  mhGetEmailsByRecipient: (
    recipient: string,
    query?: PaginationQuery
  ) => Promise<Messages>;
  mhGetEmailsByContent: (
    content: string,
    query?: PaginationQuery
  ) => Promise<Messages>;
};

type MailHogTestFixture<T> = TestFixture<
  T,
  PlaywrightTestArgs & Partial<MailHogFixtures>
>;

type MailHogTestFixtures = {
  [K in keyof MailHogFixtures]: MailHogTestFixture<MailHogFixtures[K]>;
};

export type { MailHogTestFixture, MailHogFixtures, MailHogTestFixtures };
