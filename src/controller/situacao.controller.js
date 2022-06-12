const getSituacaoCnpj = async (puppeteer, cnpj) => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto("https://www.situacao-cadastral.com/");
  const input = "#doc";

  await page.waitForSelector(input);
  await page.type(input, cnpj, { delay: 85 });

  await page.click("#consultar");

  //   page.on("popup");
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

export default getSituacaoCnpj;
