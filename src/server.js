const puppeteer = require("puppeteer");

import {
  ReceitaController,
  ConsultarController,
  CnpjController,
  LeadsController,
  LinkanaController,
} from "./controllers";

const cnpj = process.argv[2];

const scrapRun = async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    executablePath: "/usr/bin/google-chrome",
  });

  const receitaCompany = await ReceitaController.getReceitaCnpj(browser, cnpj);

  const consultaCompany = await ConsultarController.getConsultarCnpj(
    browser,
    cnpj
  );

  const cnpjCompany = await CnpjController.getCnpj(browser, cnpj);

  const leadsCompany = await LeadsController.getLeadsCnpj(browser, cnpj);

  const linkanaCompany = await LinkanaController.getLinkanaCnpj(browser, cnpj);

  console.log(
    `---------------------------------------Results for:${cnpj}-----------------------------------------------`
  );

  console.log("\nreceitaCompany: ", receitaCompany, "\n------------------");
  console.log("\nconsultaCompany: ", consultaCompany, "\n------------------");
  console.log("\ncnpjCompany: ", cnpjCompany, "\n------------------");
  console.log("\nleadsCompany: ", leadsCompany, "\n------------------");
  console.log("\nlinkanaCompany: ", linkanaCompany);

  await browser.close();
};

scrapRun();
