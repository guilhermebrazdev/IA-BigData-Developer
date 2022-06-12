const getCnpj = async (puppeteer, cnpj) => {
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

export default getCnpj;
