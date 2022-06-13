import { LeadsService } from "../services";
import { LeadsErrors } from "../errors";

class LeadsController {
  getLeadsCnpj = async (browser, cnpj) => {
    console.log("LEADS");

    const page = await browser.newPage();
    await page.goto("https://consultacnpj.com/");

    const input =
      "#__layout > div > div:nth-child(2) > div > div.row > div > div > div.cnpj--wrapper > div > div > input";

    await page.waitForSelector(input);

    await page.type(input, cnpj, { delay: 85 });

    await page.waitForTimeout(1000);
    const isError = await LeadsErrors.error(page);

    if (isError.status) {
      return { error: isError.error };
    }

    await page.waitForSelector("#company-data > div:nth-child(5) > p");

    const company = await LeadsService.infoSerialize(page);

    return company;
  };
}

export default new LeadsController();
