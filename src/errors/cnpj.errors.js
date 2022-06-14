class CnpjError {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const invalidTag = document.querySelector("#content > ul");
      const overloadedTag = document.querySelector("body > h1");

      if (invalidTag) {
        if (invalidTag.textContent === "Não encontrado\n") {
          return {
            status: true,
            error: "CNPJ not found in database, please try another one",
          };
        }
      }

      if (overloadedTag) {
        return {
          status: true,
          error: "Server is overloaded, please try again later",
        };
      }

      return { status: false };
    });

    return isError;
  };
}

export default new CnpjError();
