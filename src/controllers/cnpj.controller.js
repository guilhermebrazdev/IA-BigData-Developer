import { CnpjService } from "../services";

class CnpjController {
  getCnpj = async (browser, cnpj) => {
    const page = await browser.newPage();

    await page.goto("http://cnpj.info/busca");

    const input = "body > div.hdr > form > h3 > input[type=text]:nth-child(1)";

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
    await page.click("#content > ul > li > a:nth-child(3)");

    const company = CnpjService.infoSerialize(page);

    return company;
  };
}

export default new CnpjController();
