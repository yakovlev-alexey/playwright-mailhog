# Playwright MailHog Integration

This package provides utility fixtures for [Playwright](https://playwright.dev) that provide an interface to easily make requests to a [MailHog](https://github.com/mailhog/MailHog) instance. This allows you to easily test transactional email in your applications as well as 2-factor authentication via email in authentication systems.

## Installation

Use your favourite package manager to add this package to your project.

```bash
yarn add playwright-mailhog
# or
npm install --save playwright-mailhog
```

Upon installation extend your `test` object. Read more about it in [Playwright docs](https://playwright.dev/docs/test-fixtures#creating-a-fixture).

```ts
// ./my-test.ts
import { test as base, PlaywrightTestArgs } from "@playwright/test";
import { MailHogFixtures, makeMailHogFixtures } from "playwright-mailhog";

// make sure to include the `MailHogFixtures` type
export const test = base.extend<MailHogFixtures>({
  // here you would also specify your own fixtures
  ...makeMailHogFixtures({
    mailhogUrl: process.env.MAILHOG_API_URL,
    basicAuthCredentials: process.env.MAILHOG_BASIC_AUTH_CREDENTIALS,
  }),
});
```

## Usage

To use the fixtures make sure to be using the extended `test` object.

```ts
// ./mail.spec.ts
import { test } from "./my-test";

test("send mail", async ({ page, mhGetEmailsByRecipient }) => {
  await page.locator(".email-body").fill("TEST MESSAGE");
  await page.locator(".email-recipient").fill("user@example.com");
  await page.locator(".send-email").click();

  const messages = await mhGetEmailsByRecipient("user@example.com");

  await test.expect(messages.items[0].Raw.Data).toBe("TEST MESSAGE");
});
```

All MailHog fixtures are prefixed with `mh`. The library is typed and provides proper types for provided responses. See `MailHogFixtures` type for a complete list of fixtures.

At the moment only `/v2/emails` and `/v2/search` have their shortcuts implemented as fixtures. In order to make requests to other endpoints use `mhApiRequest`.

```ts
// ./mail.spec.ts
import { test } from "./my-test";

test("retries if fails", async ({
  page,
  mhGetEmailsByRecipient,
  mhApiRequest,
}) => {
  // enable Jim by calling `mhApiRequest`
  await mhApiRequest("post", "/v2/jim", { headers: "X-Some-header": "some value" });

  await page.locator(".email-body").fill("TEST MESSAGE");
  await page.locator(".email-recipient").fill("user@example.com");
  await page.locator(".send-email").click();

  const messages = await mhGetEmailsByRecipient("user@example.com");

  await test.expect(messages.items[0].Raw.Data).toBe("TEST MESSAGE");
});
```

> If you want to make this package better by including more fixtures feel free to open a Pull Request with new shortcuts implemented.

## Contribution

Feel free to send any suggestions in [GitHub issues](https://github.com/yakovlev-alexey/playwright-mailhog/issues): comment or vote on an existing issue, open a new one or create a Pull Request with your feature.

## License

[MIT](./LICENSE)
