import type { Messages, PaginationQuery } from "../types/mailhog";
import type { MailHogTestFixtures } from "../types/fixtures";

const mhSearchEmails: MailHogTestFixtures["mhSearchEmails"] = async (
  { mhApiUrl, request },
  use
) => {
  const searchEmails = async (query?: PaginationQuery) => {
    const response = await request.get(`${mhApiUrl}/v2/search`, {
      params: query,
    });

    const messages = (await response.json()) as Messages;

    return messages;
  };

  await use(searchEmails);
};

export { mhSearchEmails };
