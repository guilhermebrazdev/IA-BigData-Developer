const puppeteer = require("puppeteer");

const argv = process.argv;
console.log("argv ", typeof argv[2]);

const cnpj = argv[2];

import {
  ReceitaController,
  SituacaoController,
  ConsultarController,
  CnpjController,
  LeadsController,
} from "./controllers";

const scrapRun = async () => {
  const browser = await puppeteer.launch({ headless: false });

  const receitaCompany = await ReceitaController.getReceita(browser, cnpj);

  const consultaCompany = await ConsultarController.getConsultarCnpj(
    browser,
    cnpj
  );

  // const situacaoCOmpany = await SituacaoController.getSituacaoCnpj(
  //   browser,
  //   cnpj
  // ); // Não funciona no escuro

  // const cnpjCompany = await CnpjController.getCnpj(browser, cnpj); //----> API BLOQUEOU

  const leadsCompany = await LeadsController.getLeadsCnpj(browser, cnpj);

  console.log("receitaCompany ", receitaCompany);
  console.log("consultaCompany ", consultaCompany);
  // console.log("situacaoCOmpany ", situacaoCOmpany);
  // console.log("cnpjCompany ", cnpjCompany);
  console.log("leadsCompany ", leadsCompany);

  await browser.close();
};

scrapRun();

// time node -r sucrase/register src/server.js 10766206000180
