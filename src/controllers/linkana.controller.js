import { LinkanaService } from "../services";
import { LinkanaError } from "../errors";

class LinkanaController {
  getLinkanaCnpj = async (browser, cnpj) => {
    console.log("LINKANA");

    const page = await browser.newPage();

    await page.goto("https://cnpj.linkana.com/");
    const input = "input";

    await page.waitForSelector(input);

    await page.type(input, cnpj, { delay: 85 });

    await page.click("button");

    await page.waitForTimeout(1000);
    const isError = await LinkanaError.error(page);

    if (isError.status) {
      return { error: isError.error };
    }

    await page.waitForSelector(
      "#app > div > main > div > div > a > div > div:nth-child(1) > p.text-brand.font-bold.text-lg"
    );

    await page.click(
      "#app > div > main > div > div > a > div > div:nth-child(1) > p.text-brand.font-bold.text-lg"
    );

    await page.waitForSelector(
      "#app > div > main > div > p.text-dark1.font-bold.text-2xl.mb-3"
    );

    const company = await LinkanaService.infoSerialize(page);

    return company;
  };
}

export default new LinkanaController();
