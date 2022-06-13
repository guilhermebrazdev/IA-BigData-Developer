class ReceitaError {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const errorTag = document.querySelector(
        "#company-data-modal > div.px-5.pb-5 > div.ui.hidden.negative.homequery.message > p"
      );

      if (
        errorTag.textContent === "Too many requests, please try again later."
      ) {
        return true;
      }
    });

    if (isError) {
      return true;
    }
    return false;
  };
}

export default new ReceitaError();
