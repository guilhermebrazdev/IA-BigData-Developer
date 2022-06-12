class ReceitaService {
  infoSerialize = async (page) => {
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

    return company;
  };
}

export default new ReceitaService();
