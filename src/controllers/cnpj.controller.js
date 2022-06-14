import { CnpjService } from "../services";
import { CnpjError } from "../errors";

class CnpjController {
  getCnpj = async (browser, cnpj) => {
    console.log("---Scraping in CNPJ webpage---");

    const page = await browser.newPage();

    await page.goto("http://cnpj.info/busca");

    const input = "body > div.hdr > form > h3 > input[type=text]:nth-child(1)";

    let isError = await CnpjError.error(page);

    if (isError.status) {
      return { error: isError.error };
    }

    await page.waitForSelector(
      "body > div.hdr > form > h3 > input[type=text]:nth-child(1)"
    );

    await page.evaluate(() => {
      document
        .querySelector(
          "body > div.hdr > form > h3 > input[type=text]:nth-child(1)"
        )
        .setAttribute("value", "");
    });

    await page.type(input, cnpj, { delay: 85 });
    await page.click(
      "body > div.hdr > form > h3 > input[type=submit]:nth-child(2)"
    );

    await page.waitForTimeout(1000);

    isError = await CnpjError.error(page);

    if (isError.status) {
      return { error: isError.error };
    }

    await page.click("#content > ul > li > a:nth-child(3)");

    const company = CnpjService.infoSerialize(page);

    return company;
  };
}

export default new CnpjController();
