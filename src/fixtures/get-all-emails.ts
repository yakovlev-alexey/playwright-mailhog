import type { Messages, PaginationQuery } from "../types/mailhog";
import type { MailHogTestFixtures } from "../types/fixtures";

const mhGetAllEmails: MailHogTestFixtures["mhGetAllEmails"] = async (
  { mhApiRequest },
  use
) => {
  const getAllEmails = async (query?: PaginationQuery) => {
    const response = await mhApiRequest!("get", "/v2/messages", {
      params: query,
    });

    const messages = (await response.json()) as Messages;

    return messages;
  };

  await use(getAllEmails);
};

export { mhGetAllEmails };
