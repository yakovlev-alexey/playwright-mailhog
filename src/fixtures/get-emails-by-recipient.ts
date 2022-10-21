import type { MailHogTestFixtures } from "../types/fixtures";
import type { PaginationQuery } from "../types/mailhog";

const mhGetEmailsByRecipient: MailHogTestFixtures["mhGetEmailsByRecipient"] =
  async ({ mhSearchEmails }, use) => {
    const getEmailsByRecipient = async (
      recipient: string,
      query?: PaginationQuery
    ) => {
      return mhSearchEmails!({ kind: "to", query: recipient, ...query });
    };

    await use(getEmailsByRecipient);
  };

export { mhGetEmailsByRecipient };
