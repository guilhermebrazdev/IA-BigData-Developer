class LinkanaService {
  infoSerialize = async (page) => {
    const cnpjData = await page.evaluate(() => {
      return {
        name: document.querySelector(
          "#app > div > main > div > p.text-dark1.font-bold.text-2xl.mb-3"
        ).textContent,

        fantasyName: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(1) > p"
        ).textContent,

        type: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(2) > p"
        ).textContent,

        openingDate: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(3) > p"
        ).textContent,

        status: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(4) > p"
        ).textContent,

        lastUpdate: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(5) > p"
        ).textContent,

        legalNatureCode: document
          .querySelector(
            "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(6) > p"
          )
          .textContent.split(" - ")[0],

        legalNature: document
          .querySelector(
            "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(6) > p"
          )
          .textContent.split(" - ")[1],

        simple: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(7) > p"
        ).textContent,

        mei: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(8) > p"
        ).textContent,

        companySize: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(9) > p"
        ).textContent,

        socialCapital: document.querySelector(
          "#app > div > main > div > div.grid.grid-cols-3.gap-4.mb-10 > div:nth-child(10) > p"
        ).textContent,

        address: document
          .querySelector("#app > div > main > div > div:nth-child(9) > p")
          .textContent.split("       ")
          .join(", "),

        city: document
          .querySelector(
            "#app > div > main > div > div:nth-child(9) > div > div:nth-child(1) > p"
          )
          .textContent.split(" | ")[0],

        state: document
          .querySelector(
            "#app > div > main > div > div:nth-child(9) > div > div:nth-child(1) > p"
          )
          .textContent.split(" | ")[1],

        telephone: document.querySelector(
          "#app > div > main > div > div:nth-child(9) > div > div:nth-child(2) > p"
        ).textContent,

        cep: document.querySelector(
          "#app > div > main > div > div:nth-child(9) > div > div:nth-child(4) > p"
        ).textContent,

        eletronicAddress: document.querySelector(
          "#app > div > main > div > div:nth-child(9) > div > div:nth-child(5) > p"
        ).textContent,

        activityCode: document
          .querySelector("#app > div > main > div > div.pl-8.mb-6 > ul > li")
          .textContent.split(" - ")[0],

        activity: document
          .querySelector("#app > div > main > div > div.pl-8.mb-6 > ul > li")
          .textContent.split(" - ")[1],
      };
    });

    const company = {
      name: cnpjData.name,
      fantasyName: cnpjData.fantasyName,
      type: cnpjData.type,
      openingDate: cnpjData.openingDate,
      status: cnpjData.status,
      lastUpdate: cnpjData.lastUpdate,
      legalNatureCode: cnpjData.legalNatureCode,
      legalNature: cnpjData.legalNature,
      simple: cnpjData.simple,
      mei: cnpjData.mei,
      companySize: cnpjData.companySize,
      socialCapital: cnpjData.socialCapital,
      address: cnpjData.address,
      city: cnpjData.city,
      state: cnpjData.state,
      telephone: cnpjData.telephone,
      cep: cnpjData.cep,
      eletronicAddress: cnpjData.eletronicAddress,
      activityCode: cnpjData.activityCode,
      activity: cnpjData.activity,
    };
    return company;
  };
}

export default new LinkanaService();
