import { mhGetAllEmails } from "./fixtures/get-all-emails";
import { mhApiUrl } from "./fixtures/api-url";

import { MailHogTestFixtures } from "./types/fixtures";

type MailHogFixturesConfiguration = {
  mailhogUrl: string;
  auth?: string;
};

const makeMailHogFixtures = ({
  mailhogUrl,
}: MailHogFixturesConfiguration): MailHogTestFixtures => {
  return {
    mhApiUrl: mhApiUrl(mailhogUrl),
    mhGetAllEmails: mhGetAllEmails(),
  };
};

export { makeMailHogFixtures as makeMailhogFixtures };
