const puppeteer = require("puppeteer");

const cnpj = "45110682000123";

import {
  ReceitaController,
  SituacaoController,
  ConsultarController,
  CnpjController,
} from "./controllers";

const scrapRun = async () => {
  const browser = await puppeteer.launch({ headless: false });

  const receitaCompany = await ReceitaController.getInfo(browser, cnpj);

  const consultaCompany = await ConsultarController.getConsultarCnpj(
    browser,
    cnpj
  );

  const situacaoCOmpany = await SituacaoController.getSituacaoCnpj(
    browser,
    cnpj
  ); // Não funciona no escuro

  // const cnpjCompany = await CnpjController.getCnpj(browser, cnpj); //----> API BLOQUEOU

  console.log("receitaCompany ", receitaCompany);
  console.log("consultaCompany ", consultaCompany);
  console.log("situacaoCOmpany ", situacaoCOmpany);
  // console.log("cnpjCompany ", cnpjCompany);

  await browser.close();
};

scrapRun();
