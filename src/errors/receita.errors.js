class ReceitaError {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const errorTag = document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.hidden.negative.homequery.message > p"
      );

      const invalidTag = document.querySelector(
        "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-html-container"
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

      return { status: false };
    });

    return isError;
  };
}

export default new ReceitaError();
