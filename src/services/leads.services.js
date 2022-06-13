class LeadsService {
  infoSerialize = async (page) => {
    const cnpjData = await page.evaluate(() => {
      return {
        lastUpdate: document
          .querySelector("#company-data > div:nth-child(5) > p")
          .textContent.replace("\n", "")
          .trim(),

        subscription: document.querySelector(
          "#company-data > div:nth-child(6) > div.p4.print-border.print-mr-2.print-grow-1 > p"
        ).textContent,

        openingDate: document.querySelector(
          "#company-data > div:nth-child(6) > div.bg--secondary.p4.print-border.print-grow-1 > p"
        ).textContent,

        name: document
          .querySelector("#company-data > div:nth-child(7) > p")
          .textContent.replace("\n", "")
          .trim(),

        fantasyName: document
          .querySelector(
            "#company-data > div:nth-child(8) > div.p4.print-border.print-mr-2.print-grow-1 > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        companySize: document
          .querySelector(
            "#company-data > div:nth-child(8) > div:nth-child(2) > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        activityCode: document
          .querySelector("#company-data > div:nth-child(9) > p")
          .textContent.split(" - ")[0]
          .replace("\n", "")
          .trim(),

        activityDescription: document
          .querySelector("#company-data > div:nth-child(9) > p")
          .textContent.split(" - ")[1]
          .replace("\n", "")
          .trim(),

        secundaryAtvCode: document
          .querySelector("#company-data > div:nth-child(10) > p")
          .textContent.split(" - ")[0]
          .replace("\n", "")
          .trim(),

        secundaryAtv: document
          .querySelector("#company-data > div:nth-child(10) > p")
          .textContent.split(" - ")[1]
          .replace("\n", "")
          .trim(),

        legalNatureCode: document
          .querySelector("#company-data > div:nth-child(11) > p")
          .textContent.split(" - ")[0]
          .replace("\n", "")
          .trim(),

        legalNature: document
          .querySelector("#company-data > div:nth-child(11) > p")
          .textContent.split(" - ")[1]
          .replace("\n", "")
          .trim(),

        address: document
          .querySelector(
            "#company-data > div:nth-child(12) > div.p4.bg--secondary.print-border.print-mr-2.print-grow-3 > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        addressNumber: document
          .querySelector(
            "#company-data > div:nth-child(12) > div.d-flex.print-grow-2 > div.p4.print-border.print-mr-2.print-grow-1 > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        addressComplement: document
          .querySelector(
            "#company-data > div:nth-child(12) > div.d-flex.print-grow-2 > div.p4.print-border.print-grow-2 > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        cep: document
          .querySelector(
            "#company-data > div:nth-child(13) > div.d-flex.bg--secondary.print-grow-1 > div.p4.print-border.print-mr-2.print-grow-1 > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        district: document
          .querySelector(
            "#company-data > div:nth-child(13) > div.d-flex.bg--secondary.print-grow-1 > div.p4.print-border.print-mr-2.print-grow-2 > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        city: document
          .querySelector(
            "#company-data > div:nth-child(13) > div:nth-child(2) > div.p4.print-border.print-mr-2.print-grow-3 > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        state: document
          .querySelector(
            "#company-data > div:nth-child(13) > div:nth-child(2) > div.p4.print-border.print-grow-1 > p"
          )
          .textContent.replace("\n", "")
          .trim(),
        //---------------- aqui pra baixo so funciona empresa nacional -----------------
        // telephone: document
        //   .querySelector(
        //     "#company-data > div:nth-child(14) > div.p4.bg--secondary.print-border.print-mr-2.print-grow-1 > p"
        //   )
        //   .textContent.replace("\n", "")
        //   .trim(),

        // eletronicAddress: document
        //   .querySelector("#company-data > div:nth-child(14) > div > p")
        //   .textContent.replace("\n", "")
        //   .trim(),
        //---------------------aqui em cima não funciona estrangeiro-------------

        socialCapital: document
          .querySelector("#company-data > div:nth-child(15) > p")
          .textContent.replace(/\s/g, "")
          .replace("(", " ("),

        situation: document
          .querySelector(
            "#company-data > div:nth-child(17) > div.p4.print-border.print-mr-2 > p"
          )
          .textContent.replace("\n", "")
          .trim(),

        dateSituation: document
          .querySelector(
            "#company-data > div:nth-child(17) > div:nth-child(2) > p"
          )
          .textContent.replace("\n", "")
          .trim(),
      };
    });

    const company = {
      lastUpdate: cnpjData.lastUpdate,
      subscription: cnpjData.subscription,
      openingDate: cnpjData.openingDate,
      name: cnpjData.name,
      fantasyName: cnpjData.fantasyName,
      companySize: cnpjData.companySize,
      activityCode: cnpjData.activityCode,
      activityDescription: cnpjData.activityDescription,
      secundaryAtvCode: cnpjData.secundaryAtvCode,
      secundaryAtv: cnpjData.secundaryAtv,
      legalNatureCode: cnpjData.legalNatureCode,
      legalNature: cnpjData.legalNature,
      address: cnpjData.address,
      addressNumber: cnpjData.addressNumber,
      addressComplement: cnpjData.addressComplement,
      cep: cnpjData.cep,
      district: cnpjData.district,
      city: cnpjData.city,
      state: cnpjData.state,
      // telephone: cnpjData.telephone,
      // eletronicAddress: cnpjData.eletronicAddress,
      socialCapital: cnpjData.socialCapital,
      situation: cnpjData.situation,
      dateSituation: cnpjData.dateSituation,
    };

    return company;
  };
}

export default new LeadsService();
