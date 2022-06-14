import { ReceitaService } from "../services";
import { ReceitaError } from "../errors";

class ReceitaController {
  getReceitaCnpj = async (browser, cnpj) => {
    console.log("\n---Scraping in RECEITA webpage---");

    const page = await browser.newPage();

    await page.goto("https://receitaws.com.br/");

    const input =
      "body > div.pusher > div.bg-green.bg-green-gradient.min-vh-100.pt-5 > div > div:nth-child(1) > div.col-md-6.order-2.order-md-1.mt-5 > div.input-search.search.cnpj.mt-4 > input";

    await page.waitForSelector(input);

    await page.type(input, cnpj, { delay: 85 });

    page.on("popup");
    await page.waitForTimeout(1000);
    const isError = await ReceitaError.error(page);

    if (isError.status) {
      return { error: isError.error };
    }

    await page.waitForSelector(
      "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(2) > tbody > tr > td:nth-child(1)"
    );

    const company = ReceitaService.infoSerialize(page);

    return company;
  };
}

export default new ReceitaController();
