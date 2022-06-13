class ConsultaError {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const nameTag = document.querySelector(
        "#post-885 > div > div > div.container-cnpj > form > div.panel.panel-default.resultado-cnpj.form_cnpj > div > div.cnpj-control.input-sn.cnpj_responsavel"
      );

      if (nameTag.textContent === "") {
        return {
          status: true,
          error: "CNPJ not found in database, pelase try another one",
        };
      }

      return { status: false };
    });

    return isError;
  };
}

export default new ConsultaError();
