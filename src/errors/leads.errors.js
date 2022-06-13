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
        return {
          status: true,
          error: "Too many requests, please try again later",
        };
      }

      if (invalidTag) {
        return {
          status: true,
          error: "Invalid CNPJ, please try another one",
        };
      }

      return { status: false };
    });

    return isError;
  };
}

export default new LeadsErrors();
