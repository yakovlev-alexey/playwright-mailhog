import type {
  APIRequestContext,
  APIResponse,
  PlaywrightTestArgs,
  TestFixture,
} from "@playwright/test";

import type { Messages, PaginationQuery, SearchQuery } from "./mailhog";

type MailHogFixtures = {
  mhApiUrl: string;
  mhApiAuthorizationHeader: string | undefined;
  /**
   * Makes a request to MailHog with authentication if provided
   * @param method HTTP method
   * @param path full path excluding `mailhogUrl` configuration option
   * @param options request options
   */
  mhApiRequest: <
    T extends Exclude<keyof APIRequestContext, "dispose" | "storageState">
  >(
    method: T,
    path: string,
    options: Parameters<APIRequestContext[T]>[1]
  ) => Promise<APIResponse>;

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
