class LeadsErrors {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const nameTag = document.querySelector(
        "#company-data > div:nth-child(7) > p"
      );

      const telTag = document.querySelector(
        "#company-data > div:nth-child(14) > div.p4.bg--secondary.print-border.print-mr-2.print-grow-1 > p"
      );

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
      }

      if (invalidTag) {
        return {
          status: true,
          error: "Invalid CNPJ, please try another one",
        };
      }

      if (!nameTag || !telTag) {
        return {
          status: true,
          error:
            "Something went wrong! We could not find this CNPJ, please try another time or another CNPJ",
        };
      }

      return { status: false };
    });

    return isError;
  };
}

export default new LeadsErrors();
