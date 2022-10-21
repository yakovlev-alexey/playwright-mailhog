import { mhApiUrl } from "./fixtures/api-url";
import { mhApiRequest } from "./fixtures/api-request";

import { mhSearchEmails } from "./fixtures/search-emails";
import { mhGetAllEmails } from "./fixtures/get-all-emails";

import { mhGetEmailsByRecipient } from "./fixtures/get-emails-by-recipient";
import { mhGetEmailsByContent } from "./fixtures/get-emails-by-content";
import { mhGetEmailsBySender } from "./fixtures/get-emails-by-sender";

import type { MailHogTestFixtures, MailHogFixtures } from "./types/fixtures";

type MailHogFixturesConfiguration = {
  mailhogUrl: string;
  auth?: string;
};

const makeMailHogFixtures = ({
  mailhogUrl,
}: MailHogFixturesConfiguration): MailHogTestFixtures => {
  return {
    mhApiUrl: mhApiUrl(mailhogUrl),
    mhApiRequest,

    mhGetAllEmails,
    mhSearchEmails,

    mhGetEmailsBySender,
    mhGetEmailsByRecipient,
    mhGetEmailsByContent,
  };
};

export { makeMailHogFixtures };

export type { MailHogFixtures, MailHogFixturesConfiguration };
