class LeadsErrors {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const errorTag = document.querySelector(
        "#__layout > div > div.vue-notification-group.notifications > span > div > span > div > div.m-alert__content > p.m-alert__description.font-weight-light"
      );

      const invalidTag = document.querySelector(
        "#__layout > div > div:nth-child(2) > div:nth-child(1) > div.row > div > div > div.cnpj--wrapper > div > div > span"
      );

      if (errorTag) {
        if (
          errorTag.textContent ===
          "\n            Limite de busca excedido. Aguarde alguns instantes.\n          "
        ) {
          return {
            status: true,
            error: "Too many requests, please try again later",
          };
        } else if (
          errorTag.textContent ===
          "\n            Houve um erro ao buscar os dados do CNPJ.\n          "
        ) {
          return {
            status: true,
            error: "CNPJ not found in database, please try another one",
          };
        }

        if (invalidTag) {
          return {
            status: true,
            error: "Invalid CNPJ, please try another one",
          };
        }
      }

      return { status: false };
    });

    return isError;
  };
}

export default new LeadsErrors();
