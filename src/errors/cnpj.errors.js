class CnpjError {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const invalidTag = document.querySelector("#content > ul");

      if (invalidTag.textContent === "Não encontrado\n") {
        return {
          status: true,
          error: "CNPJ not found in database, please try another one",
        };
      }
      return { status: false };
    });

    return isError;
  };
}

export default new CnpjError();
// 'Não encontrado\n'
// document.querySelector('#content > ul').textContent
