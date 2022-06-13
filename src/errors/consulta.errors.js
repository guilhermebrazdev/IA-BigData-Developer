class ConsultaError {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const nameTag = document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.input-sn.cnpj_responsavel"
      );

      if (nameTag.textContent === "") {
        return true;
      }
    });

    if (isError) {
      return true;
    }
    return false;
  };
}

export default new ConsultaError();
