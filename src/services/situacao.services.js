class SituacaoServices {
  infoSerialize = async (page) => {
    const cnpjData = await page.evaluate(() => {
      return {
        fantasyName: document.querySelector("#resultado > span.dados.nome")
          .textContent,

        name: document.querySelector("#resultado > span:nth-child(3) > i")
          .textContent,

        city: document.querySelector(
          "#resultado > span.dados.localidade > span"
        ).textContent,

        situation: document.querySelector(
          "#resultado > span.dados.situacao > span"
        ).textContent,

        openingDate: document.querySelector(
          "#resultado > span:nth-child(4) > i"
        ).textContent,

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
    return company;
  };
}

export default new SituacaoServices();
