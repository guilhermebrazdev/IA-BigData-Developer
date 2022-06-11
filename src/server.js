const puppeteer = require("puppeteer");

const cnpj = "45110682000123";

const getInfo = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://receitaws.com.br/");

  const input =
    "body > div.pusher > div.bg-green.bg-green-gradient.min-vh-100.pt-5 > div > div:nth-child(1) > div.col-md-6.order-2.order-md-1.mt-5 > div.input-search.search.cnpj.mt-4 > input";

  await page.waitForSelector(input);

  await page.type(input, cnpj, { delay: 85 });

  page.on("popup");
  await page.waitForSelector(
    "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(2) > tbody > tr > td:nth-child(1)"
  );

  const cnpjData = await page.evaluate(() => {
    return {
      lastUpdate: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(1) > tbody > tr > td"
      ).innerHTML,

      registerNumber: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(2) > tbody > tr > td:nth-child(1)"
      ).innerHTML,

      openingDate: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(2) > tbody > tr > td:nth-child(2)"
      ).innerHTML,

      name: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(3) > tbody > tr > td"
      ).innerHTML,

      fantasyName: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(4) > tbody > tr > td"
      ).innerHTML,

      activityCode: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(5) > tbody > tr > td:nth-child(1)"
      ).innerHTML,

      activityDescription: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(5) > tbody > tr > td:nth-child(2)"
      ).innerHTML,

      secundaryAtvCode: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(6) > tbody > tr > td:nth-child(1)"
      ).innerHTML,

      secundaryAtvDescription: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(6) > tbody > tr > td:nth-child(2)"
      ).innerHTML,

      address: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(8) > tbody > tr > td:nth-child(1)"
      ).innerHTML,

      addressNumber: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(8) > tbody > tr > td:nth-child(2)"
      ).innerHTML,

      addressComplement: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(8) > tbody > tr > td:nth-child(3)"
      ).innerHTML,

      cep: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(9) > tbody > tr > td:nth-child(1)"
      ).innerHTML,

      district: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(9) > tbody > tr > td:nth-child(2)"
      ).innerHTML,

      city: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(9) > tbody > tr > td:nth-child(3)"
      ).innerHTML,

      state: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(9) > tbody > tr > td:nth-child(4)"
      ).innerHTML,

      eletronicAddress: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(10) > tbody > tr > td:nth-child(1)"
      ).innerHTML,

      telephone: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(10) > tbody > tr > td:nth-child(2)"
      ).innerHTML,

      socialCapital: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(11) > tbody > tr > td"
      ).innerHTML,

      status: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(12) > tbody > tr > td:nth-child(1)"
      ).innerHTML,

      statusDate: document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(12) > tbody > tr > td:nth-child(2)"
      ).innerHTML,
    };
  });

  const company = {
    lastUpdate: cnpjData.lastUpdate,
    registerNumber: cnpjData.registerNumber,
    openingDate: cnpjData.openingDate,
    name: cnpjData.name,
    fantasyName: cnpjData.fantasyName,
    activityCode: cnpjData.activityCode,
    activityDescription: cnpjData.activityDescription,
    secundaryAtvCode: cnpjData.secundaryAtvCode,
    secundaryAtvDescription: cnpjData.secundaryAtvDescription,
    address: cnpjData.address,
    addressNumber: cnpjData.addressNumber,
    addressComplement: cnpjData.addressComplement,
    cep: cnpjData.cep,
    district: cnpjData.district,
    city: cnpjData.city,
    state: cnpjData.state,
    eletronicAddress: cnpjData.eletronicAddress,
    telephone: cnpjData.telephone,
    socialCapital: cnpjData.socialCapital,
    status: cnpjData.status,
    statusDate: cnpjData.statusDate,
  };

  console.log("company receita", company);
  await browser.close();
};

getInfo();

const getData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://consultarcnpj.com.br/");

  const input =
    "#post-885 > div > div > div.container-cnpj > form > input.form-control.cnpj_search";

  await page.waitForSelector(input);

  await page.type(input, cnpj, { delay: 85 });

  await page.waitForSelector(
    "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.input-sn.cnpj_responsavel"
  );

  await page.waitForTimeout(3000);

  const cnpjData = await page.evaluate(() => {
    return {
      fantasyName: document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.input-sn.cnpj_responsavel"
      ).textContent,

      name: document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div:nth-child(2) > span.cnpj_razao"
      ).textContent,

      openingDate: document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div:nth-child(2) > span.cnpj_abertura"
      ).textContent,

      type: document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.input-sn.cnpj_label > span.cnpj_tipo"
      ).textContent,

      city: document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.input-sn.cnpj_label > span.cnpj_municipio"
      ).textContent,

      state: document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.input-sn.cnpj_label > span.cnpj_uf"
      ).textContent,

      status: document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.cnpj_info > span.cnpj_label > span"
      ).textContent,

      lastUpdate: document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.cnpj_info > span.cnpj_ultima_atualizacao"
      ).textContent,
    };
  });

  const company = {
    fantasyName: cnpjData.fantasyName,
    name: cnpjData.name,
    openingDate: cnpjData.openingDate,
    type: cnpjData.type,
    city: cnpjData.city,
    state: cnpjData.state,
    status: cnpjData.status,
    lastUpdate: cnpjData.lastUpdate,
  };

  console.log("company consultar", company);
  await browser.close();
};

getData();

const getCnpjData = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.situacao-cadastral.com/");
  const input = "#doc";

  await page.waitForSelector(input);
  await page.type(input, cnpj, { delay: 85 });

  await page.click("#consultar");

  await page.waitForTimeout(3000);
  await page.waitForSelector("#resultado > span.dados.nome");

  const cnpjData = await page.evaluate(() => {
    return {
      fantasyName: document.querySelector("#resultado > span.dados.nome")
        .textContent,

      name: document.querySelector("#resultado > span:nth-child(3) > i")
        .textContent,

      city: document.querySelector("#resultado > span.dados.localidade > span")
        .textContent,

      situation: document.querySelector(
        "#resultado > span.dados.situacao > span"
      ).textContent,

      openingDate: document.querySelector("#resultado > span:nth-child(4) > i")
        .textContent,

      type: document
        .querySelector("#resultado > span.dados.localidade")
        .textContent.split(":")[0],
    };
  });

  const company = {
    fantasyName: cnpjData.fantasyName,
    name: cnpjData.name,
    city: cnpjData.city,
    situation: cnpjData.situation,
    openingDate: cnpjData.openingDate,
    type: cnpjData.type,
  };

  console.log("company situacao", company);

  await browser.close();
};

getCnpjData();

const getCnpjInfo = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("http://cnpj.info/busca");

  const input = "body > div.hdr > form > h3 > input[type=text]:nth-child(1)";

  await page.waitForSelector(
    "body > div.hdr > form > h3 > input[type=text]:nth-child(1)"
  );

  await page.evaluate(() => {
    document
      .querySelector(
        "body > div.hdr > form > h3 > input[type=text]:nth-child(1)"
      )
      .setAttribute("value", "");
  });

  await page.type(input, cnpj, { delay: 85 });
  await page.click(
    "body > div.hdr > form > h3 > input[type=submit]:nth-child(2)"
  );
  await page.click("#content > ul > li > a:nth-child(3)");

  const cnpjData = await page.evaluate(() => {
    return {
      name: document.querySelector(
        "#content > table > tbody > tr:nth-child(3) > td:nth-child(2)"
      ).textContent,

      fantasyName: document.querySelector(
        "#content > table > tbody > tr:nth-child(3) > td:nth-child(2)"
      ).textContent,

      openingDate: document.querySelector(
        "#content > table > tbody > tr:nth-child(4) > td:nth-child(2)"
      ).textContent,

      legalNature: document.querySelector(
        "#content > table > tbody > tr:nth-child(5) > td:nth-child(2)"
      ).textContent,

      situation: document.querySelector(
        "#content > table > tbody > tr:nth-child(6) > td:nth-child(2)"
      ).textContent,

      qualification: document.querySelector(
        "#content > table > tbody > tr:nth-child(7) > td:nth-child(2)"
      ).textContent,

      socialCapital: document.querySelector(
        "#content > table > tbody > tr:nth-child(8) > td:nth-child(2)"
      ).textContent,

      companySize: document.querySelector(
        "#content > table > tbody > tr:nth-child(9) > td:nth-child(2)"
      ).textContent,

      simple: document.querySelector(
        "#content > table > tbody > tr:nth-child(10) > td:nth-child(2)"
      ).textContent,

      mei: document.querySelector(
        "#content > table > tbody > tr:nth-child(11) > td:nth-child(2)"
      ).textContent,
    };
  });

  const company = {
    name: cnpjData.name,
    fantasyName: cnpjData.fantasyName,
    openingDate: cnpjData.openingDate,
    legalNature: cnpjData.legalNature,
    situation: cnpjData.situation,
    qualification: cnpjData.qualification,
    socialCapital: cnpjData.socialCapital,
    companySize: cnpjData.companySize,
    simple: cnpjData.simple,
    mei: cnpjData.mei,
  };

  console.log("company cnpj.info", company);

  await browser.close();
};

getCnpjInfo();
