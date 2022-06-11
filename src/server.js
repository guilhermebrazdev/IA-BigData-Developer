// import { launch } from "puppeteer";

const puppeteer = require("puppeteer");

const cnpj = "17261661004160";
const siteKey = "af4fc5a3-1ac5-4e6d-819d-324d412a5e9d";

//sefaz
const getData = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "http://appasp.sefaz.go.gov.br/Sintegra/Consulta/default.asp?"
  );
  await page.waitForSelector('input[name="tCCE"]');
  await page.click("#rTipoDocCNPJ");

  await page.type("#tCNPJ", cnpj);

  await page.click(
    "#zionFormID_1 > div.body > div.controls > input[type=submit]:nth-child(1)"
  );

  await puppeteer.launch({ headless: false });

  await browser.newPage();

  await page.goto(
    "http://appasp.sefaz.go.gov.br/Sintegra/Consulta/consultar.asp"
  );

  //   await browser.close();
};

// getData();

const getCnpj = async () => {
  const browser = puppeteer.launch({ headless: false });
  const page = await (await browser).newPage();

  await page.goto(
    "https://servicos.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp"
  );

  await page.waitForSelector("#cnpj");
  await page.type("#cnpj", cnpj, { delay: 185 });
  //   await $("#checkbox");
  await page.click(
    "#frmConsulta > div:nth-child(4) > div > button.btn.btn-primary"
  );

  //   await browser.close();
};

// getCnpj();

// #cnpj
//   await page.screenshot({ path: "save.png" });
//*[@id="cnpj"]
