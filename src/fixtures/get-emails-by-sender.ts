import type { MailHogTestFixtures } from "../types/fixtures";
import type { PaginationQuery } from "../types/mailhog";

const mhGetEmailsBySender: MailHogTestFixtures["mhGetEmailsBySender"] = async (
  { mhSearchEmails },
  use
) => {
  const getEmailsBySender = async (sender: string, query?: PaginationQuery) => {
    return mhSearchEmails!({ kind: "from", query: sender, ...query });
  };

  await use(getEmailsBySender);
};

export { mhGetEmailsBySender };
