import type { MailHogTestFixtures } from "../types/fixtures";
import type { PaginationQuery } from "../types/mailhog";

const mhGetEmailsByContent: MailHogTestFixtures["mhGetEmailsByContent"] =
  async ({ mhSearchEmails }, use) => {
    const getEmailsByContent = async (
      content: string,
      query?: PaginationQuery
    ) => {
      return mhSearchEmails!({
        kind: "containing",
        query: content,
        ...query,
      });
    };

    await use(getEmailsByContent);
  };

export { mhGetEmailsByContent };
