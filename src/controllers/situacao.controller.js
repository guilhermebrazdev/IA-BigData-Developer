import { SituacaoServices } from "../services";

class SituacaoController {
  getSituacaoCnpj = async (browser, cnpj) => {
    const page = await browser.newPage();

    await page.goto("https://www.situacao-cadastral.com/");
    const input = "#doc";

    await page.waitForSelector(input);
    await page.type(input, cnpj, { delay: 85 });

    await page.click("#consultar");

    await page.screenshot({ path: "exemplo.png" });

    //   page.on("popup");
    await page.waitForTimeout(3000);

    await page.waitForSelector("#resultado > span.dados.nome");

    const company = SituacaoServices.infoSerialize(page);

    return company;
  };
}

export default new SituacaoController();
