class ConsultarService {
  infoSerialize = async (page) => {
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

    return company;
  };
}

export default new ConsultarService();
