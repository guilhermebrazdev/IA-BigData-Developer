class ReceitaError {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const errorTag = document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.hidden.negative.homequery.message > p"
      );

      const invalidTag = document.querySelector(
        "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-html-container"
      );

      const notInCacheTag = document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.hidden.negative.homequery.message > p"
      );

      const nameTag = document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.data.container-md > table:nth-child(3) > tbody > tr > td"
      );

      if (
        errorTag.textContent === "Too many requests, please try again later."
      ) {
        return {
          status: true,
          error: "Too many request, please try again later",
        };
      }

      if (invalidTag) {
        return { status: true, error: "Invalid CNPJ, please try antoher one" };
      }

      if (notInCacheTag.textContent === "not in cache") {
        return {
          status: true,
          error: "CNPJ not found in database, please try antoher one",
        };
      }

      if (!nameTag) {
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

export default new ReceitaError();
