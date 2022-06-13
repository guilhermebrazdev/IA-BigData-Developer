import { ConsultarService } from "../services";
import { ConsultaError } from "../errors";

class ConsultarController {
  getConsultarCnpj = async (browser, cnpj) => {
    console.log("CONSULTAR");

    const page = await browser.newPage();

    await page.goto("https://consultarcnpj.com.br/");

    const input =
      "#post-885 > div > div > div.container-cnpj > form > input.form-control.cnpj_search";

    await page.waitForSelector(input);

    await page.type(input, cnpj, { delay: 85 });

    await page.waitForTimeout(2000);
    const isError = await ConsultaError.error(page);

    if (isError.status) {
      return { error: isError.error };
    }

    await page.waitForSelector(
      "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.input-sn.cnpj_responsavel"
    );

    await page.waitForTimeout(1000);

    const company = ConsultarService.infoSerialize(page);

    return company;
  };
}

export default new ConsultarController();
