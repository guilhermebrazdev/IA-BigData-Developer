class CnpjService {
  infoSerialize = async (page) => {
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

    return company;
  };
}

export default new CnpjService();
