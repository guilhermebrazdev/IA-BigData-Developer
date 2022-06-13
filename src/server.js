const puppeteer = require("puppeteer");

// const argv = process.argv[2]
// console.log("argv ", typeof argv[2]);

const cnpj = process.argv[2];
console.log("cnpj ", cnpj);
console.log("cnpj type ", typeof cnpj);

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
    // headless: false,
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

  const cnpjCompany = await CnpjController.getCnpj(browser, cnpj); //----> API BLOQUEOU

  const leadsCompany = await LeadsController.getLeadsCnpj(browser, cnpj);

  const linkanaCompany = await LinkanaController.getLinkanaCnpj(browser, cnpj);

  console.log("receitaCompany ", receitaCompany);
  console.log("consultaCompany ", consultaCompany);
  // console.log("situacaoCOmpany ", situacaoCOmpany);
  console.log("cnpjCompany ", cnpjCompany);
  console.log("leadsCompany ", leadsCompany);
  console.log("linkanaCompany ", linkanaCompany);

  await browser.close();
};

scrapRun();

// time node -r sucrase/register src/server.js 10766206000180
// yarn cnpj 10766206000180

//--------------------cnpj.info --------------------------//

// document.querySelector("body > h1").textContent >> SERVIDOR SOBRECARREGADO  ============ 'Servidor está sobrecarregado com solicitações. Tente pesquisar um pouco mais tarde.\nServer is overloaded with requests. Try your search a bit later.'

// document.querySelector("#content > ul > li") >> TAG DA BOX PARA ABRIR A INFO DA EMPRESA
