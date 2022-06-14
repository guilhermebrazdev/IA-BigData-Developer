class ReceitaService {
  infoSerialize = async (page) => {
    const cnpjData = await page.evaluate(() => {
      return {
        lastUpdate: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(1) > tbody > tr > td"
        ).textContent,

        registerNumber: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(2) > tbody > tr > td:nth-child(1)"
        ).textContent,

        openingDate: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(2) > tbody > tr > td:nth-child(2)"
        ).textContent,

        name: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(3) > tbody > tr > td"
        ).textContent,

        fantasyName: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(4) > tbody > tr > td"
        ).textContent,

        activityCode: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(5) > tbody > tr > td:nth-child(1)"
        ).textContent,

        activityDescription: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(5) > tbody > tr > td:nth-child(2)"
        ).textContent,

        secundaryAtvCode: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(6) > tbody > tr > td:nth-child(1)"
        ).textContent,

        secundaryAtvDescription: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(6) > tbody > tr > td:nth-child(2)"
        ).textContent,

        address: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(8) > tbody > tr > td:nth-child(1)"
        ).textContent,

        addressNumber: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(8) > tbody > tr > td:nth-child(2)"
        ).textContent,

        addressComplement: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(8) > tbody > tr > td:nth-child(3)"
        ).textContent,

        cep: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(9) > tbody > tr > td:nth-child(1)"
        ).textContent,

        district: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(9) > tbody > tr > td:nth-child(2)"
        ).textContent,

        city: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(9) > tbody > tr > td:nth-child(3)"
        ).textContent,

        state: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(9) > tbody > tr > td:nth-child(4)"
        ).textContent,

        eletronicAddress: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(10) > tbody > tr > td:nth-child(1)"
        ).textContent,

        telephone: document.querySelector(
          "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(10) > tbody > tr > td:nth-child(2)"
        ).textContent,
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
    };

    return company;
  };
}

export default new ReceitaService();
