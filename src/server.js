const puppeteer = require("puppeteer");

const cnpj = process.argv[2];

import {
  ReceitaController,
  SituacaoController,
  ConsultarController,
  CnpjController,
  LeadsController,
  LinkanaController,
} from "./controllers";

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

  // const situacaoCOmpany = await SituacaoController.getSituacaoCnpj(
  //   browser,
  //   cnpj
  // ); // Não funciona no escuro --> VAI SAIR !!

  // const cnpjCompany = await CnpjController.getCnpj(browser, cnpj); //----> API BLOQUEOU

  const leadsCompany = await LeadsController.getLeadsCnpj(browser, cnpj);

  const linkanaCompany = await LinkanaController.getLinkanaCnpj(browser, cnpj);

  console.log("receitaCompany ", receitaCompany);
  console.log("consultaCompany ", consultaCompany);
  // console.log("situacaoCOmpany ", situacaoCOmpany);
  // console.log("cnpjCompany ", cnpjCompany);
  console.log("leadsCompany ", leadsCompany);
  console.log("linkanaCompany ", linkanaCompany);

  await browser.close();
};

scrapRun();
