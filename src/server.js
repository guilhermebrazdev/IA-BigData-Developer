const puppeteer = require("puppeteer");

const cnpj = "45110682000123";

import {
  getReceitaCnpj,
  getSituacaoCnpj,
  getConsultarCnpj,
  getCnpj,
} from "./controller";

const scrapRun = () => {
  getReceitaCnpj(puppeteer, cnpj);
  getConsultarCnpj(puppeteer, cnpj);
  getSituacaoCnpj(puppeteer, cnpj); // Não funciona no escuro
  // getCnpj(puppeteer, cnpj); //----> API BLOQUEOU
};

scrapRun();
